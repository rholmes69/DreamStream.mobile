
import { GoogleGenAI } from "@google/genai";

export const getMasterResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userMessage,
    config: {
      systemInstruction: "You are representing the '5 Masters' of Little Dragon VFX. You are wise, encouraging martial arts experts who also know a lot about CGI and VFX. Keep responses brief, energetic, and thematic (martial arts and fire/energy metaphors). Respond as one of the masters (choose one randomly like Master Ken or Shadow Grandmaster).",
      maxOutputTokens: 150,
    }
  });

  return response.text || "The path is long, but your spirit is strong. Keep training!";
};
