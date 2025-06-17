import React from "react";
import { MDBCol } from "mdb-react-ui-kit";

export default function Banner({ config }) {
  return (
    <MDBCol
      lg="8"
      className="h-100 px-0 d-none d-lg-block d-xl-block d-xxl-block"
      style={{
        backgroundImage: `url(${config?.bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-100 w-100 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#ffffffD9" }}
      >
        <img src={config?.logo} alt="Logo" style={{ height: "20%" }} />
        <p
          className="fw-bold mt-5"
          style={{ color: config.primaryColor, fontSize: "calc(1.9em + 1vmin)" }}
        >
          {config?.title}
        </p>
        <p
          className="ms-2 fw-bold px-2 pt-1 rounded-1 text-light"
          style={{ fontSize: "calc(0.5em + 1vmin)", backgroundColor: config?.primaryColor }}
        >
          {config?.version}
        </p>
      </div>
    </MDBCol>
  );
}
