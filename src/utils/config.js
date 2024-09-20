import dotenv from "dotenv";

dotenv.config();

export const config = {
  VITE_URL_FRONT: process.env.VITE_URL_FRONT,
  VITE_URL_BACKEND: process.env.VITE_URL_BACKEND,
  VITE_JWT_SECRET_KEY: process.env.VITE_JWT_SECRET_KEY,
};
