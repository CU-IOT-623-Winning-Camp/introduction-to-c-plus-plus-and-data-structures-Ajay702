import React, { useState } from 'react';
import { faqData } from '../utils/faqData';
import { Button } from '@/components/ui/button';

const FAQSection = ({ onAnswer }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    let answer = "I'm sorry, I couldn't find information about that topic. Please try asking about deductibles, premiums, copays, coverage, claims, waiting periods, or pre-existing conditions.";
    
    for (const [key, value] of Object.entries(faqData)) {
      if (term.includes(key)) {
        answer = value;
        break;
      }
    }
    
    onAnswer(answer);
    setSearchTerm('');
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Ask about insurance terms..."
        className="w-full p-2 border rounded"
      />
      <Button onClick={handleSearch} className="w-full">
        Search FAQ
      </Button>
      
      <div className="text-sm text-gray-600">
        Try asking about: deductibles, premiums, copays, coverage, claims, waiting periods, or pre-existing conditions
      </div>
    </div>
  );
};

export default FAQSection;