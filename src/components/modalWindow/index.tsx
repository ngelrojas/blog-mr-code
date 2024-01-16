import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}

const ModalWindow: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    return (
        <div
            aria-modal="true"
            className={`fixed z-50 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
            aria-labelledby="modal-title"
            role="dialog"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
                <div
                    className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-3/4">
                    {/*modal header*/}
                    <div className="bg-gray-50 px-6 py-5 sm:px-8 sm:flex sm:flex-initial">
                        <h1>modal header</h1>
                    </div>
                    {/* Modal content */}
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    Modal Title
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-5 text-blue-700"
                            onClick={onClose}
                        >
                            READ MORE
                        </button>
                        <button
                            type="button"
                            className="text-sm font-semibold leading-5 text-blue-700"
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

export default ModalWindow;
