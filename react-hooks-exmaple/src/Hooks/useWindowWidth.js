import React, { useState, useEffect } from "react";
export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    const resize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    });
    return width;
}