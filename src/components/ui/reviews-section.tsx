import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviewsRow1 = [
    {
        name: "María Gómez",
        role: "Cliente Verificado",
        text: "Desde que uso estas gotas he podido dormir de corrido toda la noche. Un cambio total para mi energía diaria.",
        initial: "M",
        bg: "bg-[#2A7373]",
    },
    {
        name: "Carlos Rivera",
        role: "Cliente Verificado",
        text: "El dolor articular ha disminuido muchísimo. Me encanta que es natural y no me deja sensación de pesadez.",
        initial: "C",
        bg: "bg-[#1C5556]",
    },
    {
        name: "Ana Lucía",
        role: "Cliente Verificado",
        text: "Sufro de ansiedad constante, pero la melena de león combinada me ha dado una tranquilidad y enfoque increíble.",
        initial: "A",
        bg: "bg-[#9B8B6F]",
    },
    {
        name: "Juan Sebastián",
        role: "Cliente Verificado",
        text: "Compré el gotero hace un mes y ya se volvió mi ritual de todas las mañanas. El sabor es muy suave y orgánico.",
        initial: "J",
        bg: "bg-[#5D6B52]",
    },
    {
        name: "Valentina M.",
        role: "Cliente Verificado",
        text: "Mi estrés por el trabajo bajó notablemente. Se siente un alivio real y duradero.",
        initial: "V",
        bg: "bg-[#2A7373]",
    },
];

const reviewsRow2 = [
    {
        name: "Roberto V.",
        role: "Cliente Verificado",
        text: "Después de entrenar siempre tenía mucha inflamación, y la verdad estas gotas me ayudan a recuperarme muy rápido.",
        initial: "R",
        bg: "bg-[#1C5556]",
    },
    {
        name: "Camila Ortiz",
        role: "Cliente Verificado",
        text: "Me ha ayudado con la niebla mental que solía tener en las tardes. Ahora me concentro mucho mejor para trabajar.",
        initial: "C",
        bg: "bg-[#5D6B52]",
    },
    {
        name: "Elena Suárez",
        role: "Cliente Verificado",
        text: "Buscaba una alternativa sin químicos para mis migrañas, y esto me está funcionando de maravilla.",
        initial: "E",
        bg: "bg-[#9B8B6F]",
    },
    {
        name: "David F.",
        role: "Cliente Verificado",
        text: "Excelente presentación y empaque. Realmente se nota la calidad Full Spectrum en los resultados.",
        initial: "D",
        bg: "bg-[#2A7373]",
    },
    {
        name: "Sofía T.",
        role: "Cliente Verificado",
        text: "Mi abuela sufría de dolores crónicos y desde que usa este producto su calidad de vida mejoró un 100%.",
        initial: "S",
        bg: "bg-[#1C5556]",
    },
];

interface ReviewType {
    name: string;
    role: string;
    text: string;
    initial: string;
    bg: string;
}

const ReviewCard = ({ review }: { review: ReviewType }) => (
    <div className="group relative flex-shrink-0 w-[300px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-[#EFEBE0] border border-[#1C5556]/10 overflow-hidden flex flex-col justify-between transition-colors duration-500 hover:border-[#2A7373]/30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A7373]/0 to-[#2A7373]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F9A826] text-[#F9A826]" />
                ))}
            </div>
            <p className="text-[#1C5556] leading-relaxed mb-6 italic">"{review.text}"</p>
        </div>
        <div className="relative z-10 flex items-center gap-4">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-medium", review.bg)}>
                {review.initial}
            </div>
            <div>
                <p className="font-semibold text-[#1C5556] text-sm">{review.name}</p>
                <p className="text-xs text-[#1C5556]/50">{review.role}</p>
            </div>
        </div>
    </div>
);

export function ReviewsSection() {
    return (
        <section className="py-24 w-full bg-[#F3F0E6] text-[#1C5556] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-sm md:text-base font-medium tracking-[0.4em] uppercase text-[#2A7373] mb-4 block">
                    Testimonios
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                    La experiencia de nuestra <br className="hidden md:block" />
                    <span className="italic font-serif">comunidad</span>
                </h2>
            </div>

            <div className="relative flex flex-col gap-6 md:gap-8 max-w-[100vw]">
                {/* Left/Right Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F3F0E6] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F3F0E6] to-transparent z-10 pointer-events-none" />

                {/* Row 1: Moves Left */}
                <div className="flex w-max relative group">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                        className="flex gap-6 md:gap-8 px-3 md:px-4 group-hover:[animation-play-state:paused]"
                    >
                        {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((review, i) => (
                            <ReviewCard key={`row1-${i}`} review={review} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Moves Right */}
                <div className="flex w-max relative group">
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 45,
                        }}
                        className="flex gap-6 md:gap-8 px-3 md:px-4 group-hover:[animation-play-state:paused]"
                    >
                        {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((review, i) => (
                            <ReviewCard key={`row2-${i}`} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
