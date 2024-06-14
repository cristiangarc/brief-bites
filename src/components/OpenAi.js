import OpenAI from "openai";

const openAiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: openAiKey });

export default async function main({abstract}) {

  const completion = await openai.chat.completions.create({
              messages: [
                {
                  role: "user", 
                  content: `Based on the abstract, ${abstract}, find the related news article and summarize it - maximum 400 words and understandable for an 8th grader and below`,
                },
              ],
              model: "gpt-3.5-turbo",
            })
  return completion.choices[0].message.content;
}