import { motion } from "framer-motion";
import { Leaf, Moon, Brain, Activity, Droplets, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const productBenefits = [
    {
        title: "Alivio Profundo",
        description: "Reduce la tensión corporal de forma prolongada.",
        icon: <Activity className="w-5 h-5 text-[#F3F0E6]/70" />,
        className: "top-[10%] -left-12 md:-left-40 w-48 md:w-64 text-right",
        position: "left"
    },
    {
        title: "Claridad Mental",
        description: "Estimula la neurogénesis y disipa la niebla mental.",
        icon: <Brain className="w-5 h-5 text-[#F3F0E6]/70" />,
        className: "top-[40%] -left-16 md:-left-48 w-48 md:w-64 text-right",
        position: "left"
    },
    {
        title: "Absorción Rápida",
        description: "Vía sublingual para una biodisponibilidad superior.",
        icon: <Zap className="w-5 h-5 text-[#F3F0E6]/70" />,
        className: "top-[70%] -left-12 md:-left-40 w-48 md:w-64 text-right",
        position: "left"
    },
    {
        title: "Sueño Reparador",
        description: "Induce un descanso profundo y sin interrupciones.",
        icon: <Moon className="w-5 h-5 text-[#F3F0E6]/70" />,
        className: "top-[10%] -right-12 md:-right-40 w-48 md:w-64 text-left",
        position: "right"
    },
    {
        title: "Máxima Pureza",
        description: "Extracción Full Spectrum que preserva cada terpeno.",
        icon: <Droplets className="w-5 h-5 text-[#F3F0E6]/70" />,
        className: "top-[40%] -right-16 md:-right-48 w-48 md:w-64 text-left",
        position: "right"
    },
    {
        title: "Equilibrio Natural",
        description: "Devuelve la homeostasis sin efectos secundarios.",
        icon: <Leaf className="w-5 h-5 text-[#F3F0E6]/70" />,
        className: "top-[70%] -right-12 md:-right-40 w-48 md:w-64 text-left",
        position: "right"
    },
];

export function TheProduct() {
    return (
        <section className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden bg-[#1C5556] text-[#F3F0E6]">

            {/* Background radial gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,rgba(243,240,230,0.05)_0%,rgba(28,85,86,1)_100%)]" />

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24 md:mb-32"
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-4 text-[#F3F0E6]/50">
                        Presentación
                    </h2>
                    <p className="text-3xl md:text-4xl font-light tracking-tight mt-4 text-[#F3F0E6]">
                        El poder completo <span className="italic font-serif text-[#F3F0E6]/80">de la naturaleza</span>
                    </p>
                </motion.div>

                {/* Central Pedestal / Product Image */}
                <div className="relative w-full max-w-[380px] md:max-w-[460px] aspect-[1/2] md:aspect-[2/3] mx-auto flex items-center justify-center mt-12 md:mt-24">

                    {/* Subtle Glow behind the product */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full blur-[100px] mix-blend-screen bg-[#3B8B8B]"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative z-10 w-full h-[120%] -mt-[20%] flex flex-col items-center justify-center drop-shadow-[0_0_60px_rgba(243,240,230,0.2)]"
                    >
                        <img
                            src="/gotas-abuela.png"
                            alt="Las Gotas de la Abuela - Gotero 10 ML"
                            className="w-auto h-full object-contain pointer-events-none transform scale-125 md:scale-125"
                        />
                    </motion.div>

                    {/* Desktop Floating Benefits */}
                    {productBenefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: benefit.position === "left" ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                            className={cn("hidden md:block absolute z-20", benefit.className)}
                        >
                            <div className={cn(
                                "border-b border-[#F3F0E6]/20 pb-2 mb-2 flex items-center gap-2",
                                benefit.position === "left" ? "justify-end" : "justify-start flex-row-reverse"
                            )}>
                                <span className="text-sm tracking-widest uppercase text-[#F3F0E6]/80 font-semibold">
                                    {benefit.title}
                                </span>
                                {benefit.icon}
                            </div>
                            <p className="text-sm font-light text-[#F3F0E6]/60 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile view of the benefits (since absolute positioning gets cramped on small phones) */}
                <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-32 w-full px-4 relative z-20">
                    {productBenefits.map((benefit, i) => (
                        <motion.div
                            key={`mobile-${i}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center flex flex-col items-center bg-[#F3F0E6]/5 p-6 rounded-2xl border border-[#F3F0E6]/10 backdrop-blur-sm shadow-xl"
                        >
                            <div className="mb-3 p-3 rounded-full bg-[#F3F0E6]/10 text-[#F3F0E6] flex items-center justify-center">
                                {benefit.icon}
                            </div>
                            <div className="border-b border-[#F3F0E6]/20 pb-2 mb-3 w-full max-w-[200px] mx-auto">
                                <span className="text-sm tracking-widest uppercase text-[#F3F0E6]/90 font-semibold">
                                    {benefit.title}
                                </span>
                            </div>
                            <p className="text-sm font-light text-[#F3F0E6]/70 leading-relaxed max-w-[250px] mx-auto">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
