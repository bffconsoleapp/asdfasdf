const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (parent, { contractNumber }) => {
      // Sample data and logic
      return sampleCreditUnions.filter(cu => cu.Contract_Number === contractNumber);
    },
    searchCreditUnionByName: (parent, { name }) => {
      return sampleCreditUnions.filter(cu => cu.Credit_Union_Name === name);
    },
    searchCreditUnionByState: (parent, { state }) => {
      // Supplement the logic as needed (assuming state is part of Credit Union)
      return sampleCreditUnions.filter(cu => cu.state === state);
    },
    searchCreditUnionByNameAndState: (parent, { name, state }) => {
      return sampleCreditUnions.filter(cu => cu.Credit_Union_Name === name && cu.state === state);
    }
  },
  Mutation: {
    editPremiumAdjustment: (parent, { input }) => {
      let adjustment = samplePremiumAdjustments.find(pa => pa.id === input.id);
      if (adjustment) {
        // Update fields here
        adjustment.Total_Borrower_Fees = input.Total_Borrower_Fees;
        adjustment.CU_Retail_Rate = input.CU_Retail_Rate;
        adjustment.Protected_Loan_Amount = input.Protected_Loan_Amount;
        adjustment.Pay_Rate = input.Pay_Rate;
        adjustment.Premium_Due = input.Premium_Due;
        adjustment.Total_Amount = input.Total_Amount;
      }
      return adjustment;
    }
  }
};

const sampleCreditUnions = [
  {
    id: "1",
    Contract_Number: "12345",
    Credit_Union_Name: "XYZ Credit Union",
    premium_reports: [],
    premium_adjustments: [],
    single_premium_certificate_returns: [],
    state: "CA"
  }
];

const samplePremiumAdjustments = [
  {
    id: "1",
    Product_Name: "Product A",
    Report_Period: "2023 Q1",
    Status: "Active",
    Last_Update: "2023-09-01",
    Period_Ending: "2023-03-31",
    Adjustment_Type_to_the_Credit_Union: "Type 1",
    Comment: "Sample Comment",
    Total_Borrower_Fees: 100.0,
    CU_Retail_Rate: 0.05,
    Protected_Loan_Amount: 1000.0,
    Pay_Rate: 0.02,
    Premium_Due: 50.0,
    Total_Amount: 1100.0
  }
];

export default resolvers;