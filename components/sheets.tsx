import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import AuthenticationSheet from "@/components/Sheets/Authentication";

registerSheet("authentication-sheet", AuthenticationSheet);

declare module "react-native-actions-sheet" {
    interface Sheets {
        "authentication-sheet": SheetDefinition;
    }
}

export {};
