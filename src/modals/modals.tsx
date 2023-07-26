import React from "react";

export const Modal: React.FC = () => {
  return (
    <React.Fragment>
      <dialog id="firstModal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </React.Fragment>
  );
};
