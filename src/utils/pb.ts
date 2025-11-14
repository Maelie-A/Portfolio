import PocketBase from "pocketbase";
import type { TypedPocketBase } from "../pocketbase-types";

// Configuration de l'URL PocketBase en fonction de l'environnement
let path = "";
if (import.meta.env.MODE === "development") {
  path = "http://localhost:8090"; // localhost = machine de dev
} else {
  // En production, utiliser l'URL HTTPS de PocketBase
  path = "https://portfolio.maelie-addario.fr/_";
}

const pb = new PocketBase(path) as TypedPocketBase;

console.log(
  "PocketBase URL:",
  pb.baseUrl,
  "(mode:",
  import.meta.env.MODE + ")"
);

export default pb;
