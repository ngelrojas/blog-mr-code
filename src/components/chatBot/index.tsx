import { useState, FormEvent } from 'react';
import { FaRobot } from "react-icons/fa6";

const ChatBot = () => {
    const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [isUser, setIsUser] = useState<boolean>(true);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault();
        setMessages([...messages, {text: newMessage, isUser: isUser}]);
        setNewMessage('');
        setIsUser(!isUser);
    };

    const handleToggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`fixed z-20 bottom-1 right-0 m-6 w-64 ${isMinimized ? 'h-16' : 'h-96'} bg-white border rounded shadow flex flex-col`}>
            <div className="flex flex-col-2 p-2 bg-header text-white text-lg font-bold border-b">
                <div className="w-6 grid content-center">
                    <FaRobot className={`${isMinimized ? 'text-green-400' : 'text-yellow-400'}`} onClick={handleToggleMinimize} />
                </div>
                <div className="grid content-center"><p>Help Bot</p></div>
            </div>

            {!isMinimized && (
                <>
                    <div className="overflow-auto flex-grow p-1 bg-green-100">
                        {messages.map((message, index) => (
                            <p key={index} className={`py-1 ${message.isUser ? 'text-right' : 'text-left'}`}>{message.text}</p>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="border-t p-2 flex">
                        <input
                            type="text"
                            className="w-full border rounded px-2 py-1 mr-2"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded px-4 py-1"
                        >
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>

                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ChatBot;