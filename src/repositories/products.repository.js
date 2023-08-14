import { db } from '../database/database.connection';

async function selectProducts() {
    return db.query(`SELECT * FROM products;`);
}

async function insertProducts(name, description, photo, user_id) {
    return db.query(
        `INSERT INTO 
            products ("name", "description", "photo", "user_id")
        VALUES
            ($1, $2, $3, $4);
        `,
        [name, description, photo, user_id]
    );
}

export { selectProducts, insertProducts };
