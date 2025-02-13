import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const image = await openai.images.generate({
  prompt: "Middle aged jedi with lightsaber and macbook",
});

console.log(image.data[0].url);
