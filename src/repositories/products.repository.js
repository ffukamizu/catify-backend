import { db } from '../database/database.connection.js';

async function selectProducts() {
    return db.query(`SELECT * FROM products;`);
}

async function selectProductsById(id) {
    return db.query(
        `SELECT 
            p.id,
            p.name,
            p.description,
            p.photo,
            p.user_id,
            u.email,
            u.phone
        FROM
            products p
        JOIN
            users u ON p.user_id = u.id
        WHERE
            p.id = $1;`,
        [id]
    );
}

async function selectProductsList(id) {
    return db.query(
        `SELECT
            products.*
        FROM
            products
        JOIN
            users ON products.user_id = users.id
        WHERE
            users.id = $1;`,
        [id]
    );
}

async function insertProducts(name, description, photo, user_id) {
    return db.query(
        `INSERT INTO 
            products ("name", "description", "photo", user_id)
        VALUES
            ($1, $2, $3, $4);
        `,
        [name, description, photo, user_id]
    );
}

export { selectProducts, selectProductsById, selectProductsList, insertProducts };
