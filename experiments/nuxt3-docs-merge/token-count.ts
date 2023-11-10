import GPT3Tokenizer from 'gpt3-tokenizer';

const file = "./nuxt3-docs-merged.md";

const tokenizer = new GPT3Tokenizer({ type: 'gpt3' }); // or 'codex'
const str = "hello 👋 world 🌍";
const encoded: { bpe: number[]; text: string[] } = tokenizer.encode(str);
const decoded = tokenizer.decode(encoded.bpe);



console.log(`Number of tokens in ${file}: }`, {encoded})