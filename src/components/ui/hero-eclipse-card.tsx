import { motion } from "framer-motion";

export function HeroEclipseCard() {
    return (
        <motion.section
            className="relative h-[100dvh] w-full flex flex-col justify-end items-center px-4 md:px-6 pb-10 md:pb-8 overflow-hidden bg-[#1C5556]"
        >
            {/* Background Video */}
            <video
                src="/hero-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Strong Green Overlay - Normal Blend Mode */}
            <motion.div
                animate={{
                    backgroundColor: [
                        "rgba(28, 85, 86, 0.85)",
                        "rgba(21, 66, 67, 0.85)",
                        "rgba(17, 58, 58, 0.85)",
                        "rgba(28, 85, 86, 0.85)"
                    ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
            />

            {/* Subtle floating particles */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-visible pointer-events-none mix-blend-screen">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-[#3B8B8B]"
                />
            </div>

            {/* KYN Logo — fixed at top of section, independent of content */}
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                src="/kyn-logo.svg"
                alt="KYN Logo"
                className="absolute top-8 md:top-10 left-1/2 -translate-x-1/2 w-16 md:w-20 h-auto z-50 drop-shadow-xl pointer-events-none"
            />

            {/* House + Cards grouped at bottom */}
            <div className="w-full max-w-7xl relative z-10 flex flex-col items-center">

                {/* The Masked Container (House Shape) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full max-w-4xl lg:max-w-6xl aspect-[1.13/1] max-h-[78vh] flex flex-col items-center justify-end pb-8 md:pb-12"
                >
                    {/* Background Image inside the Mask */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/fondo-gdla.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            maskImage: "url('/casa-gdla.svg')",
                            maskSize: "100% 100%",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskImage: "url('/casa-gdla.svg')",
                            WebkitMaskSize: "100% 100%",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            opacity: 0.95
                        }}
                    />

                    {/* Labels at the bottom of the house */}
                    <div className="w-full px-3 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 z-20">
                        {[
                            { title: "Volumen", value: "20 ML" },
                            { title: "Pureza", value: "Espectro completo" },
                            { title: "Extracción", value: "Soluble en agua" },
                            { title: "Sinergia", value: "Melena de León + CBD" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + (index * 0.15), duration: 0.8 }}
                                className="flex flex-col items-center justify-center text-center bg-black/20 backdrop-blur-md rounded-xl p-2 md:p-3 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer min-h-[44px]"
                            >
                                <span className="text-[8px] md:text-xs tracking-[0.12em] md:tracking-[0.2em] uppercase text-white/70 mb-0.5">
                                    {item.title}
                                </span>
                                <span className="text-[10px] md:text-sm font-medium tracking-normal md:tracking-wider uppercase text-white leading-tight">
                                    {item.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Gotas de la Abuela logo crossing the roof */}
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        src="/gdla.svg"
                        alt="Gotas de la Abuela Logo"
                        className="absolute top-[8%] md:top-[12%] w-[90%] md:w-[85%] lg:w-[75%] h-auto z-40 drop-shadow-2xl pointer-events-none"
                        style={{ filter: "drop-shadow(0px 20px 25px rgba(0,0,0,0.5))" }}
                    />

                    {/* Artist credit */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="absolute bottom-4 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase text-[#F3F0E6]/60 z-30"
                    >
                        Arte: Martha Abad
                    </motion.p>
                </motion.div>

            </div>
        </motion.section>
    );
}
