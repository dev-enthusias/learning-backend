import fs from "fs";
import db from "db";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

async function migrate() {
    // Locate migrations dir
    const migrationsDir = path.join(
        dirname(fileURLToPath(import.meta.url)),
        "migrations",
    );

    // Get all files in the migrations dir sorted by name ASC
    const files = fs.readdirSync(migrationsDir).sort();

    // Read the content of each file and execute it against the database
    for (const file of files) {
        const sql = fs.readFileSync(path.join(migrationsDir, file), "utf-8");

        await db.any(sql);
    }

    process.exit(0);
}

migrate();
