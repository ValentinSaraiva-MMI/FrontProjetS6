export const useGlobalStore = defineStore("global", {
  state: () => ({
    token: null, // pour la connexion
    userID: null, // identifiant de l'utilisateur
    showRegisterForm: false,
  }),
  actions: {
    toggleRegisterForm() {
      this.showRegisterForm = !this.showRegisterForm;
    },
    setToken(token) {
      if (token) {
        this.token = token;
        localStorage.setItem("token", JSON.stringify(this.token));
        // Exemple : extraire l'userID du token et le stocker
        // this.userID = extractuserIDFromToken(token);
      }
    },

    setuserID(userID) {
      this.userID = userID;
      localStorage.setItem("userID", JSON.stringify(this.userID));
    },

    clearToken() {
      this.token = null;
      this.userID = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
    },

    logout() {
      this.clearToken();
    },

    increment() {
      this.count++;
    },
  },
});
