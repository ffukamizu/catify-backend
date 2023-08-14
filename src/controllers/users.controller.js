import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

import { addUser, getUserByEmail, userOnline } from '../repositories/users.repository.js';

async function postSignIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);

        if (user.rowCount === 0) return res.status(401).send('Invalid email');

        const validPassword = bcrypt.compareSync(password, user.rows[0].password);

        if (!validPassword) return res.status(401).send('Invalid password');

        const token = jwt.sign(
            {
                id: user.rows[0].id,
                email: user.rows[0].email,
            },

            process.env.JWT_SECRET
        );

        await userOnline(user.rows[0].id, token);

        res.status(200).send({
            id: user.rows[0].id,
            token: token,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function postSignUp(req, res) {
    const { email, password, cpf, phone } = req.body;

    const hash = bcrypt.hashSync(password, 10);

    try {
        await addUser(email, hash, cpf, phone);
        res.sendStatus(201);
    } catch (error) {
        if (error.code === '23505') return res.status(409).send('Account registered already');
        res.status(500).send(error.message);
    }
}

export { postSignIn, postSignUp };
