import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";
import LocalStorageKullan from "./localStorageKullan";

function GeceModuAc({ coinData }) {
  const [geceModuAc, setGeceModuAc] = LocalStorageKullan("geceModuAc", false);

  function switchGeceModu() {
    setGeceModuAc(!geceModuAc);
  }

  return (
    <div className={geceModuAc ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModuAc} setGeceModuAc={setGeceModuAc} />
      <Charts coinData={coinData} />
    </div>
  );
}

export default GeceModuAc;
