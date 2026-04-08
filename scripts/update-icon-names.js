import fs from "node:fs";

const iconsDirectory = "./src/assets/icons"; // Replace with your actual icons directory path
const typesFile = "./src/components/core/icon/types.ts"; // Replace with your actual output file path
const barrelFile = "./src/assets/icons/index.ts";

// Function to convert snake_case to PascalCase
const snakeToPascalCase = (str) =>
  str
    .replace(/_./g, (match) => match[1].toUpperCase())
    .replace(/^[a-z]/, (match) => match.toUpperCase());

// Function to convert snake_case to camelCase
const snakeToCamelCase = (str) =>
  str.replace(/_./g, (match) => match[1].toUpperCase());

// Reading the icons directory
fs.readdir(iconsDirectory, (err, files) => {
  if (err) {
    console.error("Error reading the icons directory:", err);
    return;
  }

  const svgFiles = files
    .filter((file) => file.endsWith(".svg")) // Filter only .svg files
    .map((file) => file.replace(/\.svg$/, "")); // Remove the .svg extension

  const iconTypes = svgFiles.map(snakeToPascalCase); // Convert file names to PascalCase

  // Create content for the types file
  const typesContent = `export type IconNames = ${iconTypes
    .map((type) => `'${type}'`)
    .join(" | ")};\n`;

  // Create content for the barrel export file
  const barrelContent =
    svgFiles
      .map(
        (name) =>
          `export { default as ${snakeToCamelCase(name)} } from "./${name}.svg?url";`,
      )
      .join("\n") + "\n";
  // Write to the types file
  fs.writeFile(typesFile, typesContent, (err) => {
    if (err) {
      console.error("Error writing to the types file:", err);
      return;
    }
    console.log("Icon names type file updated successfully.");
  });

  // Write to the barrel export file
  fs.writeFile(barrelFile, barrelContent, (err) => {
    if (err) {
      console.error("Error writing to the barrel export file:", err);
      return;
    }
    console.log("Icon barrel export file updated successfully.");
  });
});
