import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function ImageModal({ isOpen, onClose, imageSrc, altText }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    padding: '2rem'
                }}
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        position: 'relative',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '-2rem',
                            right: '-2rem',
                            background: 'transparent',
                            border: 'none',
                            color: '#BBFF00',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            zIndex: 1001,
                        }}
                    >
                        <FaTimes size={24} />
                    </button>
                    <img
                        src={imageSrc}
                        alt={altText}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(187, 255, 0, 0.2)',
                        }}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default ImageModal; 