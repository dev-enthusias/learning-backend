import path, { dirname } from "path";
import { fileURLToPath } from "url";

// locate the directory where migrations scripts are
const migrationsDir = path.join(
  dirname(fileURLToPath(import.meta.url)),
  "migrations",
);

// read the directory

// read the files and run them all
