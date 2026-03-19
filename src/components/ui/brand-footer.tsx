import { motion } from "framer-motion";

export function BrandFooter() {
    return (
        <div className="w-full flex flex-col relative bg-[#1C5556] text-[#F3F0E6]">
            {/* The global footer content */}
            <footer className="text-center pt-16 md:pt-24 mt-12 md:mt-24 border-t border-[#F3F0E6]/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mb-6"
                >
                    <img
                        src="/gdla.svg"
                        alt="Gotas de la Abuela"
                        className="h-20 w-auto opacity-80 invert brightness-0 filter contrast-200"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xs tracking-widest uppercase flex flex-col md:flex-row justify-center items-center gap-4 text-[#F3F0E6]/50"
                >
                    <span>Cannabis F.S.</span>
                    <span className="hidden md:inline">&middot;</span>
                    <span>Melena de León</span>
                    <span className="hidden md:inline">&middot;</span>
                    <span>10 ML</span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-[10px] tracking-wider mt-12 mb-12 uppercase text-[#F3F0E6]/30"
                >
                    &copy; {new Date().getFullYear()} Gotas de la Abuela. Sabiduría Ancestral.
                </motion.p>
            </footer>

            {/* Optional bottom border line or image */}
            <motion.div
                initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0, scale: 0.98 }}
                whileInView={{ clipPath: "inset(0 0% 0 0%)", opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full mt-12 md:mt-20 pointer-events-none"
            >
                <img
                    src="/footer-logo.png"
                    alt="Brand Footer Line"
                    className="w-full h-auto object-cover transition-all duration-1000 invert opacity-10"
                />
            </motion.div>
        </div>
    );
}
