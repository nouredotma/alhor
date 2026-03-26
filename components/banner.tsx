"use client"

import { animate, motion, useMotionValue } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from 'react';
import { useLanguage } from "@/components/language-provider";
import useMeasure from '@/lib/hooks/use-measure';
import Image from "next/image"
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Container } from "@/components/ui/container";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    speed?: number;
    speedOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
};

function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const { isRTL } = useLanguage();
    const [currentSpeed, setCurrentSpeed] = useState(speed);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls: any;
        const size = direction === 'horizontal' ? width : height;
        if (size === 0) return;

        const contentSize = size + gap;
        let from = 0;
        let to = 0;

        const isHorizontal = direction === 'horizontal';
        // In RTL true, positive horizontal translation reveals content
        const sign = isHorizontal && isRTL ? 1 : -1;

        if (reverse) {
            from = sign * (contentSize / 2);
            to = 0;
        } else {
            from = 0;
            to = sign * (contentSize / 2);
        }

        const distanceToTravel = Math.abs(to - from);
        const duration = distanceToTravel / currentSpeed;

        if (isTransitioning) {
            const remainingDistance = Math.abs(translation.get() - to);
            const transitionDuration = remainingDistance / currentSpeed;
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration: transitionDuration,
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse]);

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speedOnHover);
              },
              onHoverEnd: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speed);
              },
          }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                // @ts-ignore - Custom hook ref type mismatch with motion.div ref
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}

type BlurredInfiniteSliderProps = InfiniteSliderProps & {
    fadeWidth?: number;
    containerClassName?: string;
};

function BlurredInfiniteSlider({
    children,
    fadeWidth = 80,
    containerClassName,
    ...sliderProps
}: BlurredInfiniteSliderProps) {
    const { isRTL } = useLanguage();

    const maskStyle: CSSProperties = {
        maskImage: `linear-gradient(${isRTL ? "to left" : "to right"}, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(${isRTL ? "to left" : "to right"}, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    };

    return (
        <div
            className={cn('relative w-full', containerClassName)}
            style={maskStyle}
        >
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    );
}

export const BANNER1_ITEMS = [
  { type: 'image' as const, src: "/banner/b1.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Alhor Parfum" },
  { type: 'image' as const, src: "/banner/b2.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Essence Royale" },
  { type: 'image' as const, src: "/banner/b3.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Luxury Scent" },
  { type: 'image' as const, src: "/banner/b4.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Pure Oud" },
  { type: 'image' as const, src: "/banner/b5.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Authentic Oils" },
];

export const BANNER2_ITEMS = [
  { type: 'image' as const, src: "/banner/b6.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Premium Quality" },
  { type: 'image' as const, src: "/banner/b7.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Collection Privée" },
  { type: 'image' as const, src: "/banner/b8.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Fine Fragrance" },
  { type: 'image' as const, src: "/banner/b9.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Organic Oils" },
  { type: 'image' as const, src: "/banner/b10.webp", alt: "Perfume bottle" },
  { type: 'text' as const, content: "Gold Essence" },
];

type BannerProps = {
    items: typeof BANNER1_ITEMS;
    reverse?: boolean;
    speed?: number;
}

export default function Banner({ items, reverse = false, speed = 40 }: BannerProps) {
    const { isRTL } = useLanguage();
    const [computedGap, setComputedGap] = useState<number>(10);

    useEffect(() => {
        const calc = () => {
            // match Tailwind's `md` breakpoint (768px)
            setComputedGap(window.innerWidth < 768 ? 10 : 20);
        };
        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);

    return (
        <section className="py-2 w-full" style={{ backgroundColor: 'var(--neutral-50)' }}>
            <Container className="max-w-full mx-auto px-4 md:px-12">
                <div className="w-full py-2 min-w-0">
                    <BlurredInfiniteSlider
                        speedOnHover={20}
                        speed={speed}
                        gap={computedGap}
                        fadeWidth={30}
                        reverse={reverse}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center justify-center px-0 group/logo whitespace-nowrap">
                                {item.type === 'image' ? (
                                    <div className="relative h-10 w-10 md:h-16 md:w-24 items-center justify-center flex">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 40px, 96px"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-10 md:h-16 flex items-center justify-center px-2">
                                        <span className={cn(
                                            "text-xs md:text-base font-fauna tracking-wider text-neutral-400 font-bold transition-colors duration-300 group-hover/logo:text-gold-600",
                                            isRTL ? "font-noto" : ""
                                        )}>
                                            {item.content}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </BlurredInfiniteSlider>
                </div>
            </Container>
        </section>
    );
}
