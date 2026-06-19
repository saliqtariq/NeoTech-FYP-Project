    import { useState } from "react";
import staticServices from "@/data/services.json";

export const useServices = () => {
    const [services] = useState<any[]>(staticServices);
    const [loading] = useState<boolean>(false);
    const [error] = useState<string | null>(null);

    return { services, loading, error };
};

