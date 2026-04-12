import { motion } from "framer-motion";

export function TheEssence() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden bg-[#F3F0E6] text-[#1C5556]">

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none bg-[#2A7373] opacity-5" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-12 text-[#2A7373]">
                        Esencia
                    </h2>

                    <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight text-[#1C5556]">
                        Extracción de alta calidad soluble en agua.
                        <span className="block mt-4 text-[#1C5556]/60 text-2xl md:text-3xl">
                            funciona con un efecto de absorción 10 veces más rápido en el organismo.
                        </span>
                    </p>
                </motion.div>

                {/* Image Component */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="mt-24 w-full aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden relative group border border-black/10 shadow-xl"
                >
                    <img
                        src="/tradicion-y-cuidado.jpg"
                        alt="Tradición y Cuidado"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Inner Gradient */}
                    <div className="absolute inset-0 opacity-60 bg-gradient-to-t from-[#F3F0E6]/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
