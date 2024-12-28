import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import ChatWindow from './components/ChatWindow';
import UserInput from './components/UserInput';
import InsuranceForm from './components/InsuranceForm';
import FAQSection from './components/FAQSection';

const App = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI Insurance Advisor. Would you like insurance recommendations or have questions about insurance?',
    },
  ]);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const handleUserMessage = (message) => {
    setMessages((prev) => [...prev, { type: 'user', content: message }]);

    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
      setShowInsuranceForm(true);
      setShowFAQ(false);
    } else if (lowerMessage.includes('question') || lowerMessage.includes('faq')) {
      setShowFAQ(true);
      setShowInsuranceForm(false);
    }
  };

  const addBotMessage = (message) => {
    setMessages((prev) => [...prev, { type: 'bot', content: message }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">AI Insurance Advisor</h1>
          
          <div className="grid grid-cols-1 gap-6">
            <ChatWindow messages={messages} />
            
            {showInsuranceForm && (
              <InsuranceForm onRecommendation={(msg) => addBotMessage(msg)} />
            )}
            
            {showFAQ && (
              <FAQSection onAnswer={(msg) => addBotMessage(msg)} />
            )}
            
            <UserInput onSendMessage={handleUserMessage} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;