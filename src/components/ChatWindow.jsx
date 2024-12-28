import React, { useEffect, useRef } from 'react';

const ChatWindow = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="bg-white rounded-lg p-4 h-96 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-4 ${
            message.type === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <div
            className={`inline-block p-3 rounded-lg ${
              message.type === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
