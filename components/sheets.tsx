import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import AuthenticationSheet from "@/components/Sheets/Authentication";
import AddedToCartSheet from "./Sheets/AddedToCart";

registerSheet("authentication-sheet", AuthenticationSheet);
registerSheet("added-to-cart-sheet", AddedToCartSheet);

declare module "react-native-actions-sheet" {
    interface Sheets {
        "authentication-sheet": SheetDefinition;
        "added-to-cart-sheet": SheetDefinition;
    }
}

export {};
