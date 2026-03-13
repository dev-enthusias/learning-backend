import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import db from "db";

async function migrate() {
  // Locate migrations dir
  const migrationsDir = path.join(
    dirname(fileURLToPath(import.meta.url)),
    "migrations",
  );

  // Gt all files in the migrations dir
  const files = fs.readdirSync(migrationsDir);

  // Read the content of each file and execute it against the database
  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf-8");
    console.log(sql)

    await db.any(sql);
  }

  process.exit(0);
}

migrate();
