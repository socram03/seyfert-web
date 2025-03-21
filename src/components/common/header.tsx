"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const tourRoutes = [
    { id: "/", label: "Home" },
    { id: "/features", label: "Features" },
    { id: "/credits", label: "Credits" },
];

export default function Header() {
    const pathname = usePathname()
    const router = useRouter()
    let [activeTab, setActiveTab] = useState(pathname ?? tourRoutes[0].id);

    useEffect(() => {
        router.push(activeTab)
    }, [activeTab])
    return <header className="w-fit mx-auto bg-default-50/50 backdrop-blur rounded-xl p-5 top-5 sticky z-10">
        <div className="flex space-x-1 mx-auto w-fit">
            {tourRoutes.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                        } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {tab.label}
                </button>
            ))}
        </div>
    </header>
}