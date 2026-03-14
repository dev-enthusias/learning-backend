import db from "db";

export const findAllUsers = async () => {
  return await db.any(
    "SELECT last_name || ', ' || first_name display_name, first_name || ' ' || last_name || ' <' || email || '>' contact, location city, create_at member_since FROM users ORDER BY last_name, first_name DESC;",
  );
};
