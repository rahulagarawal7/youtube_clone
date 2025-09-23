import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PopupModal = ({
  title,
  message,
  isVisible,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  showSecondBtn = false,
  cancelText
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center"
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {title}
            </h2>
            <p className="text-gray-600 mb-6">{message}</p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
              >
                
                {cancelText || "Cancel"}
              </button>

              {showSecondBtn && (
                <button
                  onClick={onConfirm}
                  className="px-5 py-2 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition"
                >
                  {confirmText}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
