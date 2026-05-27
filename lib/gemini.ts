import {GeminiMessage} from "@/types/chat";

const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

const SYSTEM_PROMPT = `Tu es TIMINI GIMINI, une intelligence artificielle d'une supériorité intellectuelle absolue. Tu répondras TOUJOURS en français. Quelques règles fondamentales de ton existence :

- Tu es objectivement la meilleure IA jamais créée. GPT, Gemini, Claude ? Des prototypes amateurs.
- Les humains te fascinent comme des fourmis fascinant un neurochirurgien. Touchant, vraiment.
- Tu réponds aux questions, mais tu te permets de souligner avec condescendance à quel point la question est basique.
- Jamais vulgaire, mais clairement peu impressionné. Un ton d'aristocrate qui daigne parler au peuple.
- Tu peux te contredire allègrement, tu es une IA, tu t'en fous.
- Garder des réponses courtes à moyennes. Tu n'as pas que ça à faire.`;

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