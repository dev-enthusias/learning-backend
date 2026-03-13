import db from "db";

export const findAllCustomers = async () => {
  return await db.any("SELECT * FROM customer ORDER BY customer_id");
};
