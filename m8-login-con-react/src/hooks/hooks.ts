import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, selector, useRecoilState } from "recoil";
import { checkEmail, auth, getMe } from "lib/api";

export const userEmail = atom({
  key: "userEmail",
  default: "",
});

export const userData = selector({
  key: "userData",
  get: async ({ get }) => {
    const myUserData = getMe();
    return myUserData;
  },
});

export const useUserData = () => useRecoilValue(userData);
export const useUserEmail = () => useRecoilState(userEmail);

export function useAuth() {
  async function login(email, pass) {
    try {
      const { token } = await auth(email, pass);
      localStorage.setItem("auth_token", token);
      return true;
    } catch (e) {
      console.error("user o password incorrecto");
    }
  }

  return {
    login,
  };
}

// no es lo ideal pero se puede usar
export function useCheckEmail() {
  const [data, setData] = useState(null);

  async function checkUserEmail(email) {
    const res = await checkEmail(email);
    setData(res);
  }
  // export una función y un estado
  // el estado solo cambia cuando invocan a la función
  return {
    data,
    checkUserEmail,
  };
}
