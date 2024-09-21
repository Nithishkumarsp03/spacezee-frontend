import jwt from "jsonwebtoken";

export const taskJwt = (courseId, email) => {
  const secret = import.meta.env.VITE_JWT_SECRET_KEY;

  const payload = { courseId, email };

  try {
    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    console.log("Error generating token:", error);
    return null;
  }
};
