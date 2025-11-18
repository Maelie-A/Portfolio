/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from "pocketbase";

export enum Collections {
  Message = "Message",
  Projets = "Projets",
  ProjetsPhotos = "Projets_photos",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type MessageRecord = {
  mail?: string;
  Message?: HTMLString;
};

export type ProjetsRecord = {
  Nom_projet?: string;
  Slogan?: string;
  cd_ferme?: string;
  cd_ouvert?: string;
  description_courte?: string;
  description_complete?: HTMLString;
  gallerie_images?: string[];
  Technologies?: ("Photoshop" | "Illustrator" | "Figma" | "Canva")[];
  tag?: "Projet Scolaire (BUT MMI)" | "Projet personnel";
  Lien_figma_siteweb_autre?: string;
};

export type ProjetsPhotosRecord = {
  Polaroid?: string;
  Nom_Photo?: string;
  mini_description?: string;
  technologie?: (
    | "Photoshop"
    | "Illustrator"
    | "Figma"
    | "Indesign"
    | "Procreate"
    | "Première Pro"
    | "After Effects"
    | "Autre"
  )[];
  nature?: string;
  Gallerie_photo?: string[];
};

// Response types include system fields and match responses from the PocketBase API
export type MessageResponse<Texpand = unknown> = Required<MessageRecord> &
  BaseSystemFields<Texpand>;
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> &
  BaseSystemFields<Texpand>;
export type ProjetsPhotosResponse<Texpand = unknown> =
  Required<ProjetsPhotosRecord> & BaseSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  Message: MessageRecord;
  Projets: ProjetsRecord;
  Projets_photos: ProjetsPhotosRecord;
};

export type CollectionResponses = {
  Message: MessageResponse;
  Projets: ProjetsResponse;
  Projets_photos: ProjetsPhotosResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: "Message"): any;
  collection(idOrName: "Projets"): any;
  collection(idOrName: "Projets_photos"): any;
};
