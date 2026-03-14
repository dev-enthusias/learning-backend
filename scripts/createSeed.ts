import fs from "fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

// get the file name from the command line arguments
const fileName = process.argv[2];

function createSeedFile() {
    if (!fileName) {
        console.log("File name is required");
        process.exit(1);
    }

    // create an initial number
    let initialNumber = 1;

    // Locate the seeds directory
    const seedDir = path.join(
        dirname(fileURLToPath(import.meta.url)),
        "../src/db/seeds",
    );

    // Get the number of files in the seeds directory sorted in ASC order
    const files = fs
        .readdirSync(seedDir)
        .filter((file) => file.endsWith(".sql"))
        .sort((a, b) => a.localeCompare(b));

    if (files.length) {
        // Get the last file in the seeds directory
        const lastFile = files[files.length - 1];

        // Get last file name
        const lastFileName = path.parse(lastFile).name;

        // Get the number from the last filename
        const lastFileNumber = parseInt(lastFileName.split("-")[0]);

        // Increment the number by 1
        initialNumber = lastFileNumber + 1;
    }

    // Create the seed file name
    const seedFileName =
        initialNumber.toString().padStart(4, "0") + `-${fileName}.sql`;

    // Add the file to the seeds directory
    const filePath = path.join(
        dirname(fileURLToPath(import.meta.url)),
        "../src/db/seeds",
        seedFileName,
    );

    fs.writeFileSync(filePath, "-- Write your seed here");
    console.log("Seed file created successfully:", seedFileName);

    // exit the process
    process.exit(0);
}

createSeedFile();
