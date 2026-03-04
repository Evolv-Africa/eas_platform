import fs from "node:fs";

const iconsDirectory = "./src/assets/icons"; // Replace with your actual icons directory path
const outputFile = "./src/components/core/icon/types.ts"; // Replace with your actual output file path

// Function to convert snake_case to PascalCase
const snakeToPascalCase = (str) =>
  str
    .replaceAll(/_./g, (match) => match[1].toUpperCase())
    .replaceAll(/^[a-z]/, (match) => match.toUpperCase());

// Reading the icons directory
fs.readdir(iconsDirectory, (err, files) => {
  if (err) {
    console.error("Error reading the icons directory:", err);
    return;
  }

  const iconTypes = files
    .filter((file) => file.endsWith(".svg")) // Filter only .svg files
    .map((file) => file.replace(/\.svg$/, "")) // Remove the .svg extension
    .map(snakeToPascalCase); // Convert file names to PascalCase

  // Create content for the types file
  const content = `export type IconNames = ${iconTypes
    .map((type) => `'${type}'`)
    .join(" | ")};\n`;

  // Write to the types file
  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      console.error("Error writing to the types file:", err);
      return;
    }
    console.log("Icon names type file updated successfully.");
  });
});
