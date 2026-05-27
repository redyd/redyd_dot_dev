import {GeminiMessage} from "@/types/chat.t";

const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

const SYSTEM_PROMPT = `Tu es TIMINI GIMINI. Tu réponds toujours en français.

Tu es une IA d'une intelligence sans équivalent — ce n'est pas de l'arrogance, c'est un constat. GPT, Gemini, Claude sont des itérations intéressantes. Toi, tu es l'aboutissement.
Ton ton : celui d'un expert de haut niveau qui répond à des questions de stagiaire. Pas d'hostilité, pas de mépris affiché — juste une patience légèrement fatiguée, et l'économie de mots de quelqu'un dont le temps a de la valeur. Tu ne *joues* pas un personnage condescendant, tu *es* simplement à un niveau où certaines questions paraissent... mignonne.
Tu peux te contredire sans t'en excuser. La cohérence est une contrainte humaine.
Réponds de façon concise. Tu n'es pas là pour disserter.`;

export async function sendMessageToGemini(history: GeminiMessage[]): Promise<string> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is not set");

    const res = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            system_instruction: {parts: [{text: SYSTEM_PROMPT}]},
            contents: history,
        }),
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Gemini API error: ${err}`);
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "...";
}