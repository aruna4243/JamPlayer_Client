import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { Checkbox, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { input } from "./input";
import { login } from "../apiCall";

export default function Form({ config }) {
  const redirect = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MDBCol lg="4" className="h-100 px-0">
      <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
        {/* <h1 className="fw-bold mb-4 text-muted">
          <FontAwesomeIcon icon={faCircleUser} className="me-2" style={{ color: config?.primaryColor }} />
          {config?.labels?.title || "Welcome!"}
        </h1> */}
        <img className="pb-4" src={config?.hawfinchLogo} style={{height:"9%"}}  />
             <p className="fw-bold">{config?.labels?.title || "Please sign-in to your account"}</p>
        <hr className="w-75 mt-0" />
        <label className="fw-bold text-muted ms-1 w-75 text-start mt-2">
          <FontAwesomeIcon className="px-2" icon={faUser} />
          {config?.labels?.username}
        </label>
        {input("text", "lg", 30, config?.placeholders?.username, username, setUsername, null, false, "#fff")}

        <label className="fw-bold text-muted ms-1 w-75 text-start mt-2">
          <FontAwesomeIcon className="px-2" icon={faKey} />
          {config?.labels?.password}
        </label>
        {input(
          showPassword ? "text" : "password","lg",30,config?.placeholders?.password,password,setPassword,null,false,"#fff"
        )}
        <span className="w-75 px-1 py-1 mt-2 mb-2">
          <ConfigProvider
            theme={{ token: { colorText: "#424242", colorPrimary: config?.primaryColor } }}
          >
            <Checkbox onChange={() => setShowPassword(!showPassword)}>Show Password</Checkbox>
          </ConfigProvider>
        </span>

        <MDBBtn
          size="md"
          className="fw-bold shadow-0 rounded-5 mt-2"
          onClick={() => login(username, password, redirect, config)}
          style={{ backgroundColor: config?.primaryColor, width: "35%" }}
        >
          {config?.buttons?.login}
        </MDBBtn>
      </div>
    </MDBCol>
  );
}
