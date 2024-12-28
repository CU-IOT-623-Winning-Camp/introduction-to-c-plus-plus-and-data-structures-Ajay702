import React, { useState } from 'react';
import { getInsuranceRecommendation } from '../utils/insuranceLogic';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const InsuranceForm = ({ onRecommendation }) => {
  const [formData, setFormData] = useState({
    age: '',
    insuranceType: 'health',
    budget: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendation = getInsuranceRecommendation(formData);
    onRecommendation(recommendation);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Age</label>
        <Input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Insurance Type</label>
        <Select
          value={formData.insuranceType}
          onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
        >
          <option value="health">Health Insurance</option>
          <option value="auto">Auto Insurance</option>
        </Select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Monthly Budget ($)</label>
        <Input
          type="number"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          required
        />
      </div>
      
      <Button type="submit" className="w-full">
        Get Recommendation
      </Button>
    </form>
  );
};

export default InsuranceForm;