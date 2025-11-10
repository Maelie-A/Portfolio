import PocketBase from "pocketbase";

// The PocketBase URL is read from the public env var PUBLIC_PB_URL
// Set it in a .env file or in your hosting environment.
const PB_URL =
  (import.meta.env.PUBLIC_PB_URL as string) || "http://127.0.0.1:8090";

export const pb = new PocketBase(PB_URL);

// Example helper: fetch projects collection
export async function fetchProjects() {
  try {
    const res = await pb
      .collection("projects")
      .getFullList({ sort: "-created" });
    return res;
  } catch (err) {
    console.error("PocketBase fetchProjects error", err);
    return [];
  }
}
