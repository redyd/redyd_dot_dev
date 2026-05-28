import type {Metadata} from "next";
import TiminiGiminiClient from "../TiminiGiminiClient";

export const metadata: Metadata = {
    title: "Timini Gimini",
    robots: {
        index: false,
        follow: false,
    },
};

export default function TiminiGiminiPage() {
    return <TiminiGiminiClient/>;
}
