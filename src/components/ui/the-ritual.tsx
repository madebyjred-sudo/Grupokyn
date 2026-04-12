import { motion } from "framer-motion";

export function TheRitual() {
    const steps = [
        {
            number: "01",
            title: "Pausa",
            description: "Encuentra un momento de tranquilidad en tu día. Observa tu respiración y permítete estar presente."
        },
        {
            number: "02",
            title: "Dosifica",
            description: "Aplica de 3 a 5 gotas debajo de tu lengua, O viértelas en un vaso con agua y ajusta según tus necesidades."
        },
        {
            number: "03",
            title: "Intención",
            description: "Dale un propósito y direcciona con tu mente el beneficio esperado."
        },
        {
            number: "04",
            title: "Fluye",
            description: "Siente cómo la sabiduría de la naturaleza te acompaña, aportando claridad mental y bienestar corporal."
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#F3F0E6] text-[#1C5556] relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="mb-24 text-center md:text-left"
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-6 text-[#2A7373]">
                        cómo tomar las gotas de La Abuela
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-[#1C5556]/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="w-24 h-24 rounded-full border border-[#1C5556]/20 bg-[#F3F0E6] flex items-center justify-center mb-8 shrink-0">
                                <span className="text-2xl font-light text-[#1C5556]">
                                    {step.number}
                                </span>
                            </div>
                            <h4 className="text-xl font-medium tracking-wide uppercase mb-4 text-[#1C5556]">
                                {step.title}
                            </h4>
                            <p className="font-light text-[#1C5556]/70 leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
