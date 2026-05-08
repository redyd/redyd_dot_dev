import PocketBase from "pocketbase";

const pb = new PocketBase("https://api.redyd.dev");

export default pb;

export function pbFetcher<T>(fn: () => Promise<T>): () => Promise<T> {
    return fn;
}