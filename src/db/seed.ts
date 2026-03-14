import db from "db";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

async function seed() {
    // Locate seeds dir
    const seedsDir = path.join(
        dirname(fileURLToPath(import.meta.url)),
        "seeds",
    );

    // Get all files in the seeds dir
    const seedFiles = fs.readdirSync(seedsDir).sort();

    // Read the content of each file and execute it against the database
    for (const file of seedFiles) {
        const sql = fs.readFileSync(path.join(seedsDir, file), "utf-8");

        await db.any(sql);

        console.log(`Seed file ${file} executed successfully`);
    }

    console.log("All seed files executed successfully");

    // exit the process
    process.exit(0);
}

seed();
