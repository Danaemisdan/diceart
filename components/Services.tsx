"use client";

import { motion } from "framer-motion";
import {
    Film,
    Scissors,
    Box,
    Mic,
    TrendingUp,
    PaintBucket,
    Music,
    Camera,
    Layers,
    Layout,
    Globe
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Ad Films & Shoots",
        description: "Cinematic commercial production from concept to final cut.",
        icon: <Camera className="h-6 w-6 text-white" />,
        area: "md:[grid-area:1/1/3/7] xl:[grid-area:1/1/3/7]", // Massive Hero Box
        variant: "vibrant"
    },
    {
        title: "VFX & Editing",
        description: "Seamless compositing and world-class colour grading.",
        icon: <Scissors className="h-6 w-6 text-white" />,
        area: "md:[grid-area:1/7/3/13] xl:[grid-area:1/7/3/13]", // Massive Hero Box
        variant: "vibrant"
    },
    {
        title: "Digital Marketing",
        description: "High-performance campaigns engineered to convert.",
        icon: <TrendingUp className="h-5 w-5 text-white" />,
        area: "md:[grid-area:3/1/4/5] xl:[grid-area:3/1/4/5]",
        variant: "vibrant"
    },
    {
        title: "3D & 2D Animation",
        description: "Fluid character animation and fully rendered environments.",
        icon: <Box className="h-5 w-5 text-white" />,
        area: "md:[grid-area:3/5/4/9] xl:[grid-area:3/5/4/9]",
        variant: "vibrant"
    },
    {
        title: "Graphic Designing",
        description: "Logos, print, and digital identities built to last.",
        icon: <PaintBucket className="h-5 w-5 text-white" />,
        area: "md:[grid-area:3/9/4/13] xl:[grid-area:3/9/4/13]",
        variant: "vibrant"
    },
    {
        title: "Events",
        description: "End-to-end production for concerts and corporate shows.",
        icon: <Mic className="h-5 w-5 text-white" />,
        area: "md:[grid-area:4/1/5/7] xl:[grid-area:4/1/5/7]", // Wide
        variant: "vibrant"
    },
    {
        title: "Songs & Lyrics",
        description: "Original composition and lyrical storytelling.",
        icon: <Music className="h-5 w-5 text-white" />,
        area: "md:[grid-area:4/7/5/10] xl:[grid-area:4/7/5/10]",
        variant: "vibrant"
    },
    {
        title: "Digital Painting",
        description: "Bespoke digital illustrations and concept art.",
        icon: <Layers className="h-5 w-5 text-white" />,
        area: "md:[grid-area:4/10/5/13] xl:[grid-area:4/10/5/13]",
        variant: "vibrant"
    },
    {
        title: "Web Designing",
        description: "Modern, high-converting digital interfaces.",
        icon: <Globe className="h-5 w-5 text-white" />,
        area: "md:[grid-area:5/1/6/7] xl:[grid-area:5/1/6/7]", // Wide Bottom
        variant: "vibrant"
    },
    {
        title: "ALL 24 CRAFTS WORKS",
        description: "Comprehensive end-to-end production ecosystem.",
        icon: <Layout className="h-5 w-5 text-white" />,
        area: "md:[grid-area:5/7/6/13] xl:[grid-area:5/7/6/13]", // Wide Bottom
        variant: "vibrant"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 md:mb-24 flex flex-col items-center text-center"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm md:text-base uppercase tracking-[0.6em] text-white/50 mb-4 font-medium"
                    >
                        Our Services
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter uppercase"
                    >
                        What we
                        <br />
                        offer.
                    </motion.h2>
                </motion.div>

                <ul className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(10rem,auto)]">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    area: string;
    index: number;
    variant: string;
}

function ServiceCard({ title, description, icon, area, index }: ServiceCardProps) {
    return (
        <motion.li
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={cn("list-none", area)}
        >
            <div className="relative h-full rounded-[1.2rem] p-px overflow-visible group">
                <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0}
                    borderWidth={3}
                    variant="vibrant"
                />

                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-[1.2rem] bg-zinc-950 p-6 backdrop-blur-md transition-all duration-300 group-hover:bg-zinc-900 group-hover:shadow-[0_10px_40px_-10px_rgba(0,102,255,0.4),0_10px_40px_-10px_rgba(255,0,85,0.4)]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-white/5 bg-white/5 p-2 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20">
                            {icon}
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                                {title}
                            </h3>
                            <p className="text-[12px] leading-tight text-white/40 font-sans group-hover:text-white/60 transition-colors line-clamp-2">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
}
