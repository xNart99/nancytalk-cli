import {GoogleGenAI} from '@google/genai';
import 'dotenv/config';

async function askNancyQuestion(question) {
	const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

	const response = await ai.models.generateContent({
		model: 'gemini-3.1-flash-lite-preview',
		contents: question,
	});

	return response.text;
}

export default askNancyQuestion;
