import { useEffect } from "react";

const DevToolsBlocker = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => e.preventDefault();
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();

            // Block common devtool shortcuts
            if (
                (e.ctrlKey && key === "u") ||                        // View source
                (e.ctrlKey && e.shiftKey && key === "i") ||          // DevTools
                (e.ctrlKey && e.shiftKey && key === "j") ||          // Console
                (e.ctrlKey && e.shiftKey && key === "c") ||          // Inspect Element
                (e.metaKey && e.altKey && key === "i") ||            // Mac shortcut
                (key === "f12")
            ) {
                e.preventDefault();
            }
        };

        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null;
};

export default DevToolsBlocker;
