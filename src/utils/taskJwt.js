import { createSigner } from "fast-jwt";

export const taskJwt = (courseId, email) => {
  const secret = import.meta.env.VITE_JWT_SECRET_KEY;

  const payload = {
    courseId,
    email,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Expires in 1 day
  };

  try {
    const sign = createSigner({ key: secret, algorithm: "HS256" });
    const token = sign(payload);
    return token;
  } catch (error) {
    console.log("Error generating token:", error);
    return null;
  }
};
