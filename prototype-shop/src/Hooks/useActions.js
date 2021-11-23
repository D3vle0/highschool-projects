import { useContext } from "react";
import AppStateContext from "../Contexts/AppStateContext";

export default function useActions() {
    const { addToOrder, remove, removeAll } = useContext(AppStateContext);
    return { addToOrder, remove, removeAll };
}