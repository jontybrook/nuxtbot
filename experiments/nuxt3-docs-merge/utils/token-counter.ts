import { encoding_for_model } from "@dqbd/tiktoken";
import type { TiktokenModel } from "@dqbd/tiktoken";

export function numTokensFromLocalFile(path: string, model: TiktokenModel = "gpt-3.5-turbo") {
  const fs = require("fs");
  const file = fs.readFileSync(path, "utf8");
  return numTokensFromString(file, model);
}

export function numTokensFromString(message: string, model: TiktokenModel = "gpt-3.5-turbo") {
const encoder = encoding_for_model(model);

const tokens = encoder.encode(message);
encoder.free();
return tokens.length;
}