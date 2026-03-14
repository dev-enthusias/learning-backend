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
  const migrationFileName = `${timestamp}-${fileName}.sql`;

  console.log("File name created successfully");

  // Add the file to the migrations directory
  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    "../src/db/migrations",
    migrationFileName,
  );

  fs.writeFileSync(filePath, "-- Write your migration here");
  console.log("Migration file created successfully:", migrationFileName);

  // exit the process
  process.exit(0);
}

createMigrationFile();
