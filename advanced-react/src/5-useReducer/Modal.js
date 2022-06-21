import React, { useEffect } from "react";

export default function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  });

  return (
    <div className="alert alert-info text-center" role="alert">
      {modalContent}
    </div>
  );
}
