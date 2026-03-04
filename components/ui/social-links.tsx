"use client";

import React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaYoutube
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com/diceartfilms",
        color: "hover:text-pink-500",
    },
    {
        name: "Facebook",
        icon: FaFacebookF,
        href: "https://www.facebook.com/profile.php?id=100092664793110",
        color: "hover:text-blue-600",
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        href: "https://twitter.com/diceartfilms",
        color: "hover:text-sky-400",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://in.linkedin.com/in/dice-artfilms-8bab7b276",
        color: "hover:text-blue-700",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        href: "https://youtube.com/@diceartfilms",
        color: "hover:text-red-600",
    },
];

export function SocialLinks() {
    return (
        <div className="flex items-center justify-center gap-6 mt-8">
            {socialLinks.map((link) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/40 transition-all duration-300 ${link.color} text-2xl md:text-3xl`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                >
                    <link.icon />
                </motion.a>
            ))}
        </div>
    );
}
