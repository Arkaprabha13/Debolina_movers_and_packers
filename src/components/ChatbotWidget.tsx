import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Lock } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-secondary text-secondary-foreground shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        <motion.span
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-40 w-[380px] max-w-[calc(100vw-4rem)]"
          >
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-secondary text-secondary-foreground p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Chat Support</h3>
                  <p className="text-xs text-secondary-foreground/80">AI-Powered Assistant</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Content - Blurred */}
              <div className="relative h-[400px]">
                {/* Sample Messages (Blurred) */}
                <div className="p-4 space-y-4 blur-sm select-none pointer-events-none">
                  {/* Bot Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
                        <p className="text-sm text-foreground">
                          Hello! I'm your AI moving assistant. How can I help you today?
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 ml-2">Just now</p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1">
                      <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tr-sm p-3 ml-auto w-fit">
                        <p className="text-sm">
                          I need a quote for moving
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 mr-2 text-right">Just now</p>
                    </div>
                  </div>

                  {/* Bot Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
                        <p className="text-sm text-foreground">
                          I'd be happy to help! Could you please tell me:
                        </p>
                        <ul className="text-sm text-foreground mt-2 space-y-1 ml-4 list-disc">
                          <li>Your pickup location?</li>
                          <li>Your destination?</li>
                          <li>Type of move (home/office)?</li>
                        </ul>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 ml-2">Just now</p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-sm p-3 px-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center p-6 max-w-xs"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      Premium Feature
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      AI Chat Support is not available for demo purposes. Contact us directly for assistance.
                    </p>
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium text-sm hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us Instead
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Input Area - Disabled */}
              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex gap-2 opacity-50 pointer-events-none">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    disabled
                    className="flex-1 px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                  />
                  <button
                    disabled
                    className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
