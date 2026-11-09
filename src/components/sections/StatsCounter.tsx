"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalData } from "@/data/personal";

function CounterItem({
  value,
  suffix = "",
  label,
  description,
}: {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // ms
    const increment = Math.max(1, Math.floor(value / 50));
    const stepTime = Math.abs(Math.floor(duration / (value / increment)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl glass-panel border border-slate-700/50 dark:border-white/10 glow-card">
      <div className="font-heading font-extrabold text-3xl sm:text-5xl text-gradient mb-2">
        {count}
        {suffix}
      </div>
      <div className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
        {label}
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{description}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {personalData.stats.map((stat, idx) => (
          <CounterItem
            key={idx}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}
