import { FormEvent, useState } from 'react';
import { FaRobot } from 'react-icons/fa6';

const ChatBot = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [],
  );
  const [newMessage, setNewMessage] = useState<string>('');
  const [isUser, setIsUser] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    setMessages([...messages, { text: newMessage, isUser: isUser }]);
    setNewMessage('');
    setIsUser(!isUser);
  };

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleChangeCloseOpen = () => {
    if (isMinimized) {
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      );
    }
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    );
  };

  return (
    <div
      className={`fixed z-20 bottom-1 chat-bot-bottom right-0 m-6 w-64 ${isMinimized ? 'h-16' : 'h-96'} bg-white border rounded shadow flex flex-col`}
    >
      <div className="flex flex-row p-2 bg-header text-white text-lg font-bold border-b">
        <button
          type="button"
          className={`basis-4 ${isMinimized ? 'text-green-400' : 'text-yellow-400'}`}
          onClick={handleToggleMinimize}
        >
          {handleChangeCloseOpen()}
        </button>
        <div className="ml-6 basis-9/12">
          <p>HelpBot</p>
        </div>
        <div className="grid basis-1/4">
          <FaRobot size={30} className={`justify-items-end`} />
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="overflow-auto flex-grow p-1">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end ' : 'justify-start'}`}
              >
                <p
                  className={`py-1 ${message.isUser ? 'help-you text-right mr-1 bg-gray-100 rounded mt-2 mb1 pr-1 pl-1' : 'help-bot pl-1 pr-1 text-left ml-1 bg-gray-200 rounded mt-1 mb-1'}`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="border-t p-2 flex">
            <input
              type="text"
              className="w-full border rounded px-2 py-1 mr-2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="text-black rounded px-4 py-1">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatBot;
