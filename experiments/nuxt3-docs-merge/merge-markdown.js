// Recursively find all markdown files (by extension) in the nuxt3-docs directory and merge them into a single markdown file, then write the result to merged.md
const fs = require('fs');
const path = require('path');

// Function to recursively collect all .md files in subdirectories
const collectMarkdownFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
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
const mergeMarkdownFiles = (sourceDir, outputFile) => {
  const markdownFiles = collectMarkdownFiles(sourceDir);
  const mergedContent = markdownFiles
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n\n---\n\n'); // Separate files with a horizontal rule

  fs.writeFileSync(outputFile, mergedContent);
  console.log(`Merged markdown written to ${outputFile}`);
};

// Replace './markdown-directory' with the path to your markdown files
// and 'merged.md' with your desired output file name.
mergeMarkdownFiles('./input', 'nuxt3-docs-merged.md');

