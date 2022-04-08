import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/sideNav";
import Home from "./components/home";
import MyWork from "./components/myWork";
import Skills from "./components/skills";
import Photos from "./components/photos";
import Contacts from "./components/contacts";

function App() {
  return (
    <div className="App d-flex">
      <SideNav />
      <main className="pb-5">
        <Home />
        <MyWork />
        <Skills />
        <Photos />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
