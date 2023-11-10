import type { TiktokenModel } from "@dqbd/tiktoken";
import { numTokensFromLocalFile } from './utils/token-counter'
import { mergeMarkdownFiles } from './utils/merge-markdown'

// Count the tokens in the result
const inputDir = './input'
const outputPath = './output/nuxt3-docs-merged-latest.md'
const model: TiktokenModel = "gpt-4"

// Merge all the docs into a single markdown file
mergeMarkdownFiles(inputDir, outputPath, '\n\n---\n\n'); 
  
// Calculate number of tokens in the result (to estimate cost)
const numTokens = numTokensFromLocalFile(outputPath, model)
console.log(`Number of ${model} tokens in result: ${numTokens}`)