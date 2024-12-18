import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import AuthenticationSheet from "@/components/Sheets/Authentication";
import AddedToCartSheet from "./Sheets/AddedToCart";
import PaymentSheet from "./Sheets/Payment";
import CreditDebitCards from "./Sheets/CreditDebitCards";

registerSheet("authentication-sheet", AuthenticationSheet);
registerSheet("added-to-cart-sheet", AddedToCartSheet);
registerSheet("payment-sheet", PaymentSheet);
registerSheet("credit-debit-cards-sheet", CreditDebitCards);

declare module "react-native-actions-sheet" {
  interface Sheets {
    "authentication-sheet": SheetDefinition;
    "added-to-cart-sheet": SheetDefinition;
    "payment-sheet": SheetDefinition;
    "credit-debit-cards-sheet": SheetDefinition;
  }
}

export {};
