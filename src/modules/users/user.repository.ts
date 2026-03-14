import db from "db";

export const findAllUsers = async () => {
  return await db.any(
    `SELECT 
        id user_id,
        last_name || ', ' || first_name display_name, 
        first_name || ' ' || last_name || ' <' || email || '>' contact, 
        city location, 
        'Joined: ' || EXTRACT(YEAR FROM created_at) member_since 
      FROM users 
      ORDER BY 
        last_name, 
        first_name DESC;`,
  );
};
