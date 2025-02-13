import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const embedding = await openai.embeddings.create({
  model: "text-embedding-3-large",
  input: "Джедай Йода",
});

console.log(embedding);
console.log(embedding.data[0].embedding);
