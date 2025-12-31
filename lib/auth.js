import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export function authenticate(req) {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Token manquant ou invalide");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload; // contient userId et email
  } catch (error) {
    throw new Error("Token invalide ou expiré");
  }
}

export const getToken = () => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwt_decode(token);
    const now = Date.now() / 1000; // temps actuel en secondes

    if (decoded.exp && decoded.exp < now) {
      // token expiré
      localStorage.removeItem("token");
      return null;
    }

    return token; // token encore valide
  } catch (error) {
    console.error("Token invalide :", error);
    localStorage.removeItem("token");
    return null;
  }
};
