import { useContext } from "react";
import AppStateContext from "../Contexts/AppStateContext";
export default function usePrototypes() {
    const { prototypes } = useContext(AppStateContext);
    return prototypes;
}