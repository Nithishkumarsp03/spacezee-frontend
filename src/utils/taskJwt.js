import jwt from "jwt-simple";

export const taskJwt = (courseId, email) => {
  const secret = import.meta.env.VITE_JWT_SECRET_KEY;

  const payload = {
    courseId,
    email,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Expires in 1 day
  };
  let token;
  try {
    token = jwt.encode(payload, secret, "HS256");
    return token;
  } catch (error) {
    console.log("error token gen", error);
  }
  return token;
};
