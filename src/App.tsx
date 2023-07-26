import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Modal } from "./modals/modals";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Modal />
      <Navbar />
      <button onClick={() => window.firstModal.showModal() as HTMLFormElement}>
        open modal
      </button>
    </div>
  );
};
