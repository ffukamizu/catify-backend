import { insertProducts, selectProducts, selectProductsById, selectProductsList } from '../repositories/products.repository.js';

async function getProducts(req, res) {
    try {
        const products = await selectProducts();

        res.status(201).send(products.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getProductsById(req, res) {
    const { id } = req.params;

    try {
        const products = await selectProductsById(id);

        res.status(201).send(products.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getProductsList(req, res) {
    const { id } = req.params;

    try {
        const products = await selectProductsList(id);

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

export { getProducts, getProductsById, getProductsList, postProducts };
