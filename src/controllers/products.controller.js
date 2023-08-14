import { insertProducts, selectProducts } from '../repositories/products.repository';

async function getProducts(req, res) {
    try {
        const products = await selectProducts();

        res.status(201).send(products.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function postProducts(req, res) {
    const { name, description, photo, user_id } = req.body;

    try {
        await insertProducts(name, description, photo, user_id);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export { getProducts, postProducts };