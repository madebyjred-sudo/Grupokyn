import { motion } from "framer-motion";

export function TheScience() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative border-t bg-[#1C5556] border-[#F3F0E6]/10">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 text-[#F3F0E6]"
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-6 text-[#F3F0E6]/50">
                        La Ciencia del Bienestar
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
                        Sinergia <br /> natural.
                    </h3>
                    <p className="font-light text-lg leading-relaxed mb-8 text-[#F3F0E6]/70">
                        La combinación de extracto de Cannabis Full Spectrum con Melena de León crea un poderoso efecto séquito. Mientras el CBD trabaja con el sistema endocannabinoide para promover el equilibrio físico, la Melena de León apoya la función cognitiva y la claridad mental.
                    </p>

                    <div className="flex gap-12 border-t pt-8 mt-8 border-[#F3F0E6]/10">
                        <div>
                            <span className="block text-3xl font-light mb-2 text-[#F3F0E6]">CBD</span>
                            <span className="text-xs tracking-widest uppercase text-[#F3F0E6]/50">
                                Espectro Completo
                            </span>
                        </div>
                        <div>
                            <span className="block text-3xl font-light mb-2 text-[#F3F0E6]">Hongo</span>
                            <span className="text-xs tracking-widest uppercase text-[#F3F0E6]/50">
                                Melena de León
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Abstract/Process Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                    className="w-full md:w-1/2"
                >
                    <div className="aspect-square md:aspect-[4/5] rounded-[48px] overflow-hidden relative border border-[#F3F0E6]/10 shadow-2xl shadow-black/40">
                        <img
                            src="/fusion-botanica.jpg"
                            alt="Fusión Botánica - Ingredientes Orgánicos"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
