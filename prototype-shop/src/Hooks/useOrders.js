import { useContext } from "react";
import AppStateContext from "../Contexts/AppStateContext";

export default function useOrders() {
    const { orders } = useContext(AppStateContext);
    return orders;
}