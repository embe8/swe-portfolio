import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, demos }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        };

    if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
    }

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';

    };
}, [isOpen, onClose]);

if (!isOpen) return null;


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                  className="modal-close"
                  onClick={onClose}
                  aria-label="Close modal"
                  >×
                  </button>
                  <h2 className="modal-title">{title} Demo</h2>
                  <div className="modal-gallery">
                    {demos && demos.length > 0 ? (
                        demos.map((demo, idx) => (
                            <img
                                key={idx}
                                src={demo}
                                alt={`${title} demo ${idx + 1}`}
                                className="demo-image"
                            />
                        ))
                    ) : (
                      <p className="no-demos">No demos available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Modal;