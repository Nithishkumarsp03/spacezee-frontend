export const formatAadhaar = (aadhaarNumber) => {
  const aadhaarStr = aadhaarNumber.toString();
  const lastFourDigits = aadhaarStr.slice(-4);
  const maskedAadhaar = `**** **** ${lastFourDigits}`;
  return maskedAadhaar;
};
