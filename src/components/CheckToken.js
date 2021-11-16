import React, { useEffect } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

export default function CheckToken() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let token = null;
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
    }
    const currentDate = new Date();
    if (token) {
      console.log("tokenman haya", jwtDecode(token));
      try {
        // email
        // iat
        // exp
        // firstname
        // lastname
        // id
        // role
        const { exp } = jwtDecode;

        const expirationTime = exp ? exp * 1000 - 15000 : 0;

        if (
          exp !== undefined &&
          expirationTime !== 0 &&
          currentDate.getTime() >= expirationTime
        ) {
          dispatch(logout());
        }
      } catch (e) {
        dispatch(logout());
      }
    }
  }, [pathname]);

  return null;
}
