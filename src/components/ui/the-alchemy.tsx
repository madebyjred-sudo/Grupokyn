import { motion } from "framer-motion";

export function TheAlchemy() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative bg-[#F3F0E6] text-[#1C5556]">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-12 text-[#2A7373]">
                        La Alquimia
                    </h2>
                    <p className="text-3xl md:text-4xl font-light tracking-tight max-w-2xl mx-auto text-[#1C5556]">
                        Fórmula maestra de la naturaleza para activar tu memoria y mejorar tu enfoque.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Ingredient 1: Cannabis F.S. */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-black/10 shadow-lg">
                            <img
                                src="/macro-botanica.jpg"
                                alt="Macro Botánica - Cannabis Full Spectrum"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light tracking-wider uppercase mb-4 text-[#1C5556]">
                                Cannabis Soluble en agua
                            </h3>
                            <p className="font-light leading-relaxed text-[#1C5556]/70">
                                Planta de espectro completo que conserva todos los cannabinoides, terpenos y flavonoides. Esta riqueza botánica genera alivio físico y mejora el equilibrio interno para un bienestar integral en los 12 sistemas de tu cuerpo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Ingredient 2: Melena de León */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col gap-8 md:mt-24"
                    >
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-black/10 shadow-lg">
                            <img
                                src="/macro-fungi.jpg"
                                alt="Macro Fungi - Melena de León"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light tracking-wider uppercase mb-4 text-[#1C5556]">
                                Melena de León
                            </h3>
                            <p className="font-light leading-relaxed text-[#1C5556]/70">
                                Este hongo ancestral tiene propiedades neuroprotectoras que estimulan la conexión de neuronas, ayudando a mantener la memoria, la concentración y la vitalidad mental a lo largo de los años.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
