import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

function createModule() {
    // Get the module name
    const moduleName = process.argv[2];

    if (!moduleName) {
        console.log("module name is required");
    }

    // Get the module file path
    const newModulePath = path.join(
        dirname(fileURLToPath(import.meta.url)),
        "../src/modules",
        moduleName.toLowerCase(),
    );

    if (fs.existsSync(newModulePath)) {
        console.log("module already exists");
        process.exit(1);
    }

    // Create the module directory
    if (!fs.existsSync(newModulePath)) {
        fs.mkdirSync(newModulePath);

        const fileBasePath = `${newModulePath.toLowerCase()}/${moduleName.replace(/s$/, "").toLowerCase()}`;

        // Create the files inside the directory
        fs.writeFileSync(`${fileBasePath}.route.ts`, "");
        fs.writeFileSync(`${fileBasePath}.controller.ts`, "");
        fs.writeFileSync(`${fileBasePath}.repository.ts`, "");
        fs.writeFileSync(`${fileBasePath}.service.ts`, "");
        fs.writeFileSync(`${fileBasePath}.types.ts`, "");
    }

    process.exit(0);
}

createModule();
