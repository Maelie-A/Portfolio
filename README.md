# Portfolio (Astro + Tailwind + PocketBase)

Ce dépôt contient une base pour ton portfolio en Astro avec Tailwind, et une connexion à PocketBase pour stocker les projets.

Quick start (macOS, zsh):

1. Installer les dépendances

```bash
npm install
```

2. Copier l'exemple d'env et ajuster l'URL de PocketBase si besoin

```bash
cp .env.example .env
# éditer .env
```

3. Lancer le serveur de dev

```bash
npm run dev
```

Où déposer les éléments visuels

- Mets l'image de fond (la feuille froissée) dans `public/assets/bg-paper.jpg`.
- Mets tes icônes de dossiers et la signature (polices) dans `public/assets/`.

Polices

- Je n'ai pas encore ajouté tes fichiers de polices. Dès que tu les envoies, je les intègre et je mets à jour `src/styles/global.css` pour les déclarer.

PocketBase

- Le client est initialisé dans `src/lib/pocketbaseClient.ts` et lit `PUBLIC_PB_URL`.
- Crée une collection `projects` dans PocketBase (ou dis-moi si tu veux que je crée la structure). Je peux ajouter des champs recommandés (titre, description, images, tags).

Prochaine étape

- Fournis les fichiers de polices (formats .woff2/.woff/.ttf) et les images (dossiers, icônes). Je les intègre et j'ajuste le positionnement exact et les tailles pour coller parfaitement à ta maquette.
