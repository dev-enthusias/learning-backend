import db from "db";

export const findAllProducts = async () => {
    return await db.any(
        `
        SELECT
            id,
            '[' || category || '] ' || name || ' - ' || '$' || price || ' (' || rating || '#)' catalog_label
        FROM
            products
        `,
    );
};
