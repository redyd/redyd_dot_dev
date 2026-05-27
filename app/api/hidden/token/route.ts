import {NextResponse} from "next/server";
import {randomUUID} from "crypto";

const tokens = new Map<string, number>();
const TTL_MS = 10_000;

export async function POST() {
    const token = randomUUID();
    tokens.set(token, Date.now() + TTL_MS);
    return NextResponse.json({token});
}

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const token = searchParams.get("token");
    if (!token) return NextResponse.json({valid: false}, {status: 400});

    const expiry = tokens.get(token);
    if (!expiry || Date.now() > expiry) {
        tokens.delete(token);
        return NextResponse.json({valid: false}, {status: 401});
    }

    tokens.delete(token);

    const response = NextResponse.json({valid: true});
    response.cookies.set("hidden_session", "1", {
        httpOnly: true,
        sameSite: "strict",
        path: "/hidden",
    });
    return response;
}