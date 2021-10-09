import axios from "axios";

const API_URL = "https://public-transport-ticketing.herokuapp.com/auth/";

class AuthService {
  login(userName, password) {
    return axios
      .post(API_URL + "signin", {
        userName,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(roleName, firstName, lastName, addressLine1, addressLine2, addressLine3, phoneNumber, userName, conferenceId, email, password, dob, identificationValue, identificationType) {
    return axios.post(API_URL + "signup", {
      roleName,
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      addressLine3,
      phoneNumber,
      conferenceId,
      userName,
      email,
      password,
      dob,
      identificationValue,
      identificationType
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
