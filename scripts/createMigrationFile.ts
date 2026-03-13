import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

function createMigrationFile() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.log("File name is required");
    process.exit(1);
  }

  console.log("Creating file name...");

  // create migration file and seed file [timestamp-create-file-name.sql]
  const timestamp = Date.now();
  const migrationFileName = `${timestamp}-create-${fileName}.sql`;
  const seedFileName = `${timestamp}-seed-${fileName}.sql`;

  console.log("File name created successfully");

  // Add the file to the migrations directory
  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    "../src/db/migrations",
    migrationFileName,
  );
  // Also add the file to the seeds directory
  const seedsFilePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    "../src/db/seeds",
    seedFileName,
  );

  fs.writeFileSync(filePath, "-- Write your migration here");
  fs.writeFileSync(seedsFilePath, "-- Write your seed here");
  console.log("Migration file created successfully:", migrationFileName);
  console.log("Seed file created successfully:", seedFileName);

  // exit the process
  process.exit(0);
}

createMigrationFile();
