export const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 10) {
    throw new Error("Phone number must be 10 digits long");
  }

  return `+91 ${phoneNumber.slice(0, 2)}********${phoneNumber.slice(-2)}`;
};
