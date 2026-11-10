"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, ShieldCheck, X, ArrowRight, AlertCircle, KeyRound } from "lucide-react";

interface AdminPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const MASTER_PASSWORD = "Shauryaadmin@2409";

export function AdminPasswordModal({ isOpen, onClose, onSuccess }: AdminPasswordModalProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setError("");
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the administrator password.");
      return;
    }

    setIsVerifying(true);

    if (password === MASTER_PASSWORD) {
      // Store authenticated session
      sessionStorage.setItem("shaurya_admin_auth", MASTER_PASSWORD);
      localStorage.setItem("shaurya_admin_auth_timestamp", Date.now().toString());

      setError("");
      setIsVerifying(false);

      if (onSuccess) {
        onSuccess();
      } else {
        onClose();
        router.push("/admin");
      }
    } else {
      setIsVerifying(false);
      setError("Access denied. Incorrect administrator password.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: shake ? [-10, 10, -8, 8, -4, 4, 0] : 0,
          }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl glass-panel border border-blue-500/30 bg-[#090d16]/95 dark:bg-[#07090e]/95 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-panel border border-slate-700/60 dark:border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Icon & Title */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 p-[1px] shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-[#050609] rounded-[15px] flex items-center justify-center text-blue-400">
                <KeyRound className="w-7 h-7" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Secret Admin Gateway</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Admin Authentication
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Enter your master password to unlock the private visitor analytics dashboard.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>

              <input
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter admin password..."
                className="w-full pl-10 pr-11 py-3 rounded-2xl glass-panel border border-slate-700/60 dark:border-white/10 bg-slate-900/60 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-white text-xs font-semibold hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isVerifying}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <span>{isVerifying ? "Verifying..." : "Access Console"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Hint */}
          <div className="mt-5 pt-4 border-t border-slate-800/80 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Triggered via 5x &ldquo;SH&rdquo; logo click easter egg
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

