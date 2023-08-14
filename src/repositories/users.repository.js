import db from '../database/database.connection.js';

async function getUserByEmail(email) {
    return db.query(`SELECT * FROM users WHERE users.email= $1;`, [email]);
}

async function addUser(email, hash, cpf, phone) {
    return db.query(`INSERT INTO users ("email", "password", "cpf", "phone") VALUES ($1, $2, $3, $4);`, [email, hash, cpf, phone]);
}

async function userOnline(id, token) {
    return db.query(`INSERT INTO user_login ("user_id", token) VALUES ($1, $2);`, [id, token]);
}

export { getUserByEmail, addUser, userOnline };
