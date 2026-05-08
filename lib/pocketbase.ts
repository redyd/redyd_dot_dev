import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default pb;

export function pbFetcher<T>(fn: () => Promise<T>): () => Promise<T> {
    return fn;
}