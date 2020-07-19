import React, { useState, useEffect } from "react";
import "./login.css";
import { TransitionGroup } from "react-transition-group";
import NavigationPanel from "./components/NavigationPanel";
import Modal from "./components/Modal";

export default function Login() {
  let [mounted, setMounted] = useState(false);
  let [loginPage] = useState(<div></div>);

  useEffect(() => setMounted(true), [mounted]);

  const handleSubmit = () => {
    setMounted(false);
  };

  if (mounted) {
    loginPage = (
      <div className="Loginup">
        <NavigationPanel></NavigationPanel>
        <Modal onSubmit={() => handleSubmit} />
      </div>
    );
  }

  return (
    <div className="Login">
      <TransitionGroup
        transitioname="loginpagetransition"
        transitionentertimeout={500}
        transitionleavetimeout={300}
      >
        {loginPage}
      </TransitionGroup>
    </div>
  );
}
