import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "../pocketbase-types";

// Utiliser la variable d'environnement PUBLIC_PB_URL avec fallback
let path = '';
if (import.meta.env.MODE === 'development') {
    path = 'http://localhost:8090'    // localhost = machine de dev
} else {
    // En production, utiliser la variable d'environnement ou un fallback
    path = import.meta.env.PUBLIC_PB_URL || 'http://127.0.0.1:8090'
}

const pb = new PocketBase(path) as TypedPocketBase;

console.log('PocketBase URL:', pb.baseUrl, '(mode:', import.meta.env.MODE + ')');

export default pb;