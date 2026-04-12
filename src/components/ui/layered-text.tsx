"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import type React from "react"

interface LayeredTextProps {
    fontSize?: string
    fontSizeMd?: string
    lineHeight?: number
    lineHeightMd?: number
    className?: string
}

const wordsLines = [
    { top: "\u00A0", bottom: "Sabiduría" },
    { top: "Sabiduría", bottom: "Naturaleza" },
    { top: "Naturaleza", bottom: "Equilibrio" },
    { top: "Equilibrio", bottom: "Bienestar" },
    { top: "Bienestar", bottom: "Ancestral" },
    { top: "Ancestral", bottom: "Pureza" },
    { top: "Pureza", bottom: "\u00A0" },
]

export function LayeredText({
    fontSize = "clamp(28px, 6vw, 72px)",
    fontSizeMd = "36px",
    lineHeight = 60,
    lineHeightMd = 35,
    className = "",
}: LayeredTextProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<gsap.core.Timeline | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    const lines = wordsLines

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const calculateTranslateX = (index: number) => {
        const baseOffset = 35
        const baseOffsetMd = 12
        const centerIndex = Math.floor(lines.length / 2)
        return {
            desktop: (index - centerIndex) * baseOffset,
            mobile: (index - centerIndex) * baseOffsetMd,
        }
    }

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const paragraphs = container.querySelectorAll("p")

        timelineRef.current = gsap.timeline({ paused: true })

        timelineRef.current.to(paragraphs, {
            y: window.innerWidth >= 768 ? -lineHeight : -lineHeightMd,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
        })

        const handleMouseEnter = () => {
            timelineRef.current?.play()
        }

        const handleMouseLeave = () => {
            timelineRef.current?.reverse()
        }

        container.addEventListener("mouseenter", handleMouseEnter)
        container.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter)
            container.removeEventListener("mouseleave", handleMouseLeave)
            timelineRef.current?.kill()
        }
    }, [lines, lineHeight, lineHeightMd])

    return (
        <section
            className={cn(
                "w-full py-24 md:py-32 overflow-hidden",
                "bg-[#1C5556]"
            )}
        >
            <div
                ref={containerRef}
                className={cn(
                    "mx-auto py-12 tracking-[-2px] antialiased cursor-pointer",
                    "text-[#F3F0E6]",
                    className
                )}
                style={
                    {
                        fontSize,
                        fontFamily: "'Figtree', sans-serif",
                        "--md-font-size": fontSizeMd,
                    } as React.CSSProperties
                }
            >
                <ul className="list-none p-0 m-0 flex flex-col items-center">
                    {lines.map((line, index) => {
                        const translateX = calculateTranslateX(index)
                        return (
                            <li
                                key={`abuela-${index}`}
                                className="overflow-hidden relative"
                                style={
                                    {
                                        height: `${isMobile ? lineHeightMd : lineHeight}px`,
                                        transform: `translateX(${isMobile ? translateX.mobile : translateX.desktop}px) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                                    } as React.CSSProperties
                                }
                            >
                                <p
                                    className="px-[15px] align-top whitespace-nowrap m-0 font-extralight"
                                    style={{
                                        height: `${isMobile ? lineHeightMd : lineHeight}px`,
                                        lineHeight: `${(isMobile ? lineHeightMd : lineHeight) - 5}px`,
                                    }}
                                >
                                    {line.top}
                                </p>
                                <p
                                    className="px-[15px] align-top whitespace-nowrap m-0 font-medium text-[#2A7373]"
                                    style={{
                                        height: `${isMobile ? lineHeightMd : lineHeight}px`,
                                        lineHeight: `${(isMobile ? lineHeightMd : lineHeight) - 5}px`,
                                    }}
                                >
                                    {line.bottom}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
