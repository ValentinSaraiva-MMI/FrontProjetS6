import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const API_URL = "https://garden-projects6.onrender.com";

export const registerUser = async (pseudo, mdp) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { pseudo, mdp });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l’utilisateur:", error);
    throw error;
  }
};
