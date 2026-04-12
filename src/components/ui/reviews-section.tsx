import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useLayoutEffect, useCallback, useEffect } from "react";

const reviewsRow1 = [
    {
        name: "Daniela R.",
        role: "Cliente Verificado",
        text: "En menos de dos semanas noté un cambio real en mi enfoque. Trabajo mejor, me distraigo menos y mi mente está mucho más clara durante el día.",
        initial: "D",
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
        text: "Excelente presentación y empaque. Realmente se nota la calidad en los resultados desde la primera semana.",
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

interface ReviewCardProps {
    review: ReviewType;
    isSelected: boolean;
    hasSelection: boolean;
    onSelect: () => void;
}

const ReviewCard = ({ review, isSelected, hasSelection, onSelect }: ReviewCardProps) => (
    <div
        onClick={onSelect}
        onTouchEnd={(e) => { e.preventDefault(); onSelect(); }}
        className={cn(
            "relative flex-shrink-0 w-[300px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-[#EFEBE0] overflow-hidden flex flex-col justify-between cursor-pointer select-none",
            "border transition-all duration-500 ease-out",
            isSelected
                ? "border-[#2A7373]/70 shadow-2xl shadow-[#1C5556]/15"
                : hasSelection
                    ? "border-[#1C5556]/5 opacity-40"
                    : "border-[#1C5556]/10"
        )}
    >
        {/* Focus glow */}
        <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-[#2A7373]/0 to-[#2A7373]/10 transition-opacity duration-500 pointer-events-none",
            isSelected ? "opacity-100" : "opacity-0"
        )} />

        <div className="relative z-10">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F9A826] text-[#F9A826]" />
                ))}
            </div>
            <p className={cn(
                "leading-relaxed mb-6 italic transition-colors duration-300",
                isSelected ? "text-[#1C5556]" : "text-[#1C5556]/80"
            )}>"{review.text}"</p>
        </div>

        <div className="relative z-10 flex items-center gap-4">
            <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium transition-transform duration-300",
                review.bg,
                isSelected && "ring-2 ring-[#2A7373]/40 ring-offset-2 ring-offset-[#EFEBE0]"
            )}>
                {review.initial}
            </div>
            <div>
                <p className="font-semibold text-[#1C5556] text-sm">{review.name}</p>
                <p className="text-xs text-[#1C5556]/50">{review.role}</p>
            </div>
        </div>
    </div>
);

interface ScrollRowProps {
    items: ReviewType[];
    direction: "left" | "right";
    speed: number;
    rowId: string;
    selectedKey: string | null;
    onSelect: (key: string | null) => void;
}

function ScrollRow({ items, direction, speed, rowId, selectedKey, onSelect }: ScrollRowProps) {
    const x = useMotionValue(0);
    const innerRef = useRef<HTMLDivElement>(null);
    const totalWidthRef = useRef(0);
    const isPausedRef = useRef(false);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useLayoutEffect(() => {
        if (!innerRef.current) return;
        totalWidthRef.current = innerRef.current.scrollWidth / 2;
        if (direction === "right") {
            x.set(-totalWidthRef.current);
        }
    }, []);

    useAnimationFrame((_, delta) => {
        if (isPausedRef.current || totalWidthRef.current === 0) return;
        const total = totalWidthRef.current;
        const moveBy = (delta / 1000) * (total / speed);

        if (direction === "left") {
            let next = x.get() - moveBy;
            if (next <= -total) next += total;
            x.set(next);
        } else {
            let next = x.get() + moveBy;
            if (next >= 0) next -= total;
            x.set(next);
        }
    });

    const clearResumeTimer = useCallback(() => {
        if (resumeTimerRef.current) {
            clearTimeout(resumeTimerRef.current);
            resumeTimerRef.current = null;
        }
    }, []);

    const pause = useCallback(() => {
        clearResumeTimer();
        isPausedRef.current = true;
    }, [clearResumeTimer]);

    const resume = useCallback(() => {
        isPausedRef.current = false;
        onSelect(null);
    }, [onSelect]);

    const scheduleResume = useCallback((ms: number) => {
        clearResumeTimer();
        resumeTimerRef.current = setTimeout(resume, ms);
    }, [resume, clearResumeTimer]);

    // Desktop: hover pause/resume
    const handleMouseEnter = useCallback(() => {
        clearResumeTimer();
        pause();
    }, [pause, clearResumeTimer]);

    const handleMouseLeave = useCallback(() => {
        resume();
    }, [resume]);

    // Mobile: touch pause, auto-resume after delay
    const handleTouchStart = useCallback(() => {
        clearResumeTimer();
        pause();
    }, [pause, clearResumeTimer]);

    const handleTouchEnd = useCallback(() => {
        scheduleResume(3500);
    }, [scheduleResume]);

    const handleCardSelect = useCallback((key: string) => {
        pause();
        const next = selectedKey === key ? null : key;
        onSelect(next);
        if (next !== null) {
            scheduleResume(4000);
        }
    }, [pause, onSelect, selectedKey, scheduleResume]);

    useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

    const rowHasSelection = selectedKey !== null && selectedKey.startsWith(`${rowId}-`);

    return (
        <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <motion.div
                ref={innerRef}
                style={{ x }}
                className="flex gap-6 md:gap-8 px-3 md:px-4 will-change-transform"
            >
                {[...items, ...items].map((review, i) => {
                    const selKey = `${rowId}-${i % items.length}`;
                    return (
                        <ReviewCard
                            key={`${rowId}-item-${i}`}
                            review={review}
                            isSelected={selectedKey === selKey}
                            hasSelection={rowHasSelection}
                            onSelect={() => handleCardSelect(selKey)}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
}

export function ReviewsSection() {
    const [selectedKey, setSelectedKey] = useState<string | null>(null);

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

            <div className="relative flex flex-col gap-6 md:gap-8">
                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F3F0E6] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F3F0E6] to-transparent z-20 pointer-events-none" />

                <ScrollRow
                    items={reviewsRow1}
                    direction="left"
                    speed={40}
                    rowId="row1"
                    selectedKey={selectedKey}
                    onSelect={setSelectedKey}
                />
                <ScrollRow
                    items={reviewsRow2}
                    direction="right"
                    speed={45}
                    rowId="row2"
                    selectedKey={selectedKey}
                    onSelect={setSelectedKey}
                />
            </div>
        </section>
    );
}
