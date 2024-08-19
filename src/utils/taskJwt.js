import { SignJWT } from "jose";

export const taskJwt = async (courseId, email) => {
  const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET_KEY);
  const payload = {
    courseId,
    email,
  };

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(secret);

  return token;
};
