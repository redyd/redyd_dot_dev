import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";

export function proxy(req: NextRequest) {
    const session = req.cookies.get("hidden_session");
    if (!session) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/hidden/:path*"],
};