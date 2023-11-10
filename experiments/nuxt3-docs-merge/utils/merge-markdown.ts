
const fs = require('fs');
const path = require('path');

// Function to recursively collect all .md files in subdirectories
export const collectMarkdownFiles = (dir: string, fileList: string[] = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file: string) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      collectMarkdownFiles(filePath, fileList);
    } else if (fileStat.isFile() && path.extname(file) === '.md') {
      fileList.push(filePath);
    }
  });

  return fileList;
};

// Function to merge all markdown files
export const mergeMarkdownFiles = (sourceDir: string, outputFile: string, divider: string = '\n\n---\n\n') => {
  const markdownFiles = collectMarkdownFiles(sourceDir);
  const mergedContent = markdownFiles
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join(divider); // Separate files with divider

  fs.writeFileSync(outputFile, mergedContent);
  console.log(`Merged markdown written to ${outputFile}`);
};

