export const getInsuranceRecommendation = (userDetails) => {
    const { age, insuranceType, budget } = userDetails;
    
    if (insuranceType === 'health') {
      if (age < 30 && budget <= 200) {
        return "Based on your age and budget, I recommend a basic health insurance plan with a higher deductible. This typically covers essential medical services and emergency care. Consider a plan with preventive care coverage and telemedicine services.";
      } else if (age < 30 && budget > 200) {
        return "With your budget, I recommend a comprehensive health plan that includes dental and vision coverage. Look for plans with low deductibles and good prescription drug coverage.";
      } else if (age >= 30 && budget <= 200) {
        return "Consider a mid-tier health insurance plan with a balance of premium and deductible. Focus on plans with good preventive care coverage and chronic condition management.";
      } else {
        return "I recommend a premium health insurance plan with comprehensive coverage, including specialist visits, prescription drugs, and wellness programs. Consider plans with lower out-of-pocket maximums.";
      }
    } else if (insuranceType === 'auto') {
      if (budget <= 100) {
        return "Consider a basic liability-only auto insurance policy that meets your state's minimum requirements. This is the most affordable option but provides limited coverage.";
      } else {
        return "I recommend a comprehensive auto insurance policy that includes collision and comprehensive coverage, along with liability protection. This provides better protection for your vehicle and assets.";
      }
    }
    return "Please provide more information about your insurance needs for a personalized recommendation.";
  };
  