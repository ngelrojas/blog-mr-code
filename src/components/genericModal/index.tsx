import React from 'react';

// type Theme = 'light' | 'dark';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  theme: string;
}

const GenericModal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  theme,
}) => {
  return (
    <div
      aria-modal="true"
      className={`fixed z-50 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="puff-in-hor relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-3/4">
          {/*modal header*/}
          <div
            className={`border-nav-b px-6 py-5 sm:px-8 sm:flex sm:flex-initial ${theme === 'light' ? 'bg-white' : 'bg-cards'}`}
          >
            <button type="button" onClick={onClose}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </div>
          {/* Modal content */}
          <div
            className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${theme === 'light' ? 'bg-white' : 'bg-cards'}`}
          >
            {children}
          </div>
          {/* Modal footer */}
          <div
            className={`px-4 py-3 sm:px-6 flex justify-between ${theme === 'light' ? 'bg-white' : 'bg-cards'}`}
          >
            <button
              type="button"
              className={`mr-2 text-sm font-semibold leading-5 ${theme === 'light' ? 'text-light' : 'text-primary-dark'}`}
              onClick={onClose}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericModal;
