import { ImageURISource } from "react-native";

export type KitTag = "euro" | "new" | "retro" | "featured";

export interface Kit {
    id: string;
    name: string;
    amount: string;
    rating: string;
    year: string;
    tag: KitTag;
    images: {
        preview: ImageURISource;
    };
}
