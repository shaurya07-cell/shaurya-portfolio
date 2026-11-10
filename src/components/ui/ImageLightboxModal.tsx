"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from "lucide-react";

export interface LightboxImage {
  src: string;
  caption: string;
  title?: string;
  category?: string;
}

interface ImageLightboxModalProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export function ImageLightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onNavigate && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && onNavigate && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl glass-panel border border-slate-700/70 dark:border-white/15 bg-slate-950/95 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 dark:border-white/10">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Camera className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                {currentImage.title && (
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white truncate">
                    {currentImage.title}
                  </h3>
                )}
                {currentImage.category && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">
                    {currentImage.category}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {images.length > 1 && (
                <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                  {currentIndex + 1} / {images.length}
                </span>
              )}

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Photo View */}
          <div className="relative flex-1 min-h-[300px] max-h-[60vh] flex items-center justify-center p-4 bg-black/60 overflow-hidden">
            {/* Nav Previous */}
            {onNavigate && images.length > 1 && currentIndex > 0 && (
              <button
                onClick={() => onNavigate(currentIndex - 1)}
                className="absolute left-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-white border border-white/15 hover:bg-blue-600 transition-all shadow-xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Nav Next */}
            {onNavigate && images.length > 1 && currentIndex < images.length - 1 && (
              <button
                onClick={() => onNavigate(currentIndex + 1)}
                className="absolute right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-white border border-white/15 hover:bg-blue-600 transition-all shadow-xl"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage.src}
                src={encodeURI(currentImage.src)}
                alt={currentImage.caption || "Event photo"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="max-h-[56vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl select-none"
              />
            </AnimatePresence>
          </div>

          {/* Caption & Thumbnail Tray */}
          <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-slate-300 font-medium text-center sm:text-left flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{currentImage.caption}</span>
            </p>

            {/* Thumbnail Navigation */}
            {onNavigate && images.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                {images.map((img, idx) => (
                  <button
                    key={img.src + idx}
                    onClick={() => onNavigate(idx)}
                    className={`relative w-12 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex
                        ? "border-blue-500 scale-105 shadow-md shadow-blue-500/30"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={encodeURI(img.src)}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

