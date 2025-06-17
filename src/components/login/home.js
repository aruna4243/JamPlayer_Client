import { MDBRow } from "mdb-react-ui-kit";
import Banner from "./banner";
import LoginForm from "./Form/form";

import logo from "./assets/logo.png";
import bg from "./assets/background.jpg";
import comLogo from "./assets/Hawfinch_Small.png";
export const LoginLayout = () => {


  //configuration details
 
  const config = {
    baseUrl: "http://localhost:5000/api/v1",
    redirectPath: "/dashboard",
    primaryColor: "#0D47A1",
    backgroundColor: "#eceff1",
    logo: logo,
    bgImage: bg,
    hawfinchLogo : comLogo,
    version: "V0.1.0",
    title: "Energy Monitoring System",
    labels: {
      title: "Please sign-in to your account",
      username: "Username",
      password: "Password"
    },
    placeholders: {
      username: "Enter your username",
      password: "Enter your password"
    },
    buttons: {
      login: "Login"
    }
  };

  return (
    <MDBRow className="h-100 mx-0 mask" style={{ backgroundColor: config?.backgroundColor }}>
      <Banner config={config} />
      <LoginForm config={config} />
    </MDBRow>
  );
};
