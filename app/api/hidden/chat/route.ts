import {NextRequest, NextResponse} from "next/server";
import {sendMessageToGemini} from "@/lib/gemini";
import {GeminiMessage} from "@/types/chat";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {history} = body as { history: GeminiMessage[] };

    if (!history || !Array.isArray(history)) {
        return NextResponse.json({error: "Invalid payload"}, {status: 400});
    }

    const reply = await sendMessageToGemini(history);
    return NextResponse.json({reply});
}