import fs from "fs";
import db from "db";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

async function migrate() {
    // Create migration schema
    const query = `
        CREATE TABLE IF NOT EXISTS schema_migrations(
            id SERIAL PRIMARY KEY,
            file_name TEXT NOT NULL UNIQUE,
            executed_at TIMESTAMP DEFAULT NOW()
        )
    `;
    await db.any(query);

    console.log("Getting all executed files...");

    // Get all executed files
    const executedFiles = await db.any(
        "SELECT file_name FROM schema_migrations",
    );
    const arrOfExecutedFiles = executedFiles.map((f) => f.file_name);

    console.log("Collected all executed files successfully");

    // Locate migrations dir
    const migrationsDir = path.join(
        dirname(fileURLToPath(import.meta.url)),
        "migrations",
    );

    // Get all files in the migrations dir sorted by name ASC
    const files = fs.readdirSync(migrationsDir).sort();

    // Read the content of each file and execute it against the database
    for (const file of files) {
        if (arrOfExecutedFiles.includes(file)) continue;

        const sql = fs.readFileSync(path.join(migrationsDir, file), "utf-8");

        console.log(`Performing migration ${file}...`);

        await db.any("BEGIN");
        try {
            await db.any(sql);
            await db.any(
                `INSERT INTO schema_migrations (file_name) VALUES ($1)`,
                [file],
            );
            await db.any("COMMIT");

            console.log(`Completed migration ${file} successfully`);
        } catch (error) {
            console.log("Failed to perform migration:", file, error);

            await db.any("ROLLBACK");
            process.exit(1);
        }
    }

    console.log("All migrations performed successfully");
    process.exit(0);
}

migrate();
