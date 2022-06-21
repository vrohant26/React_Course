import React, { useEffect } from "react";

export default function ModalPractice({ content, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  });
  return (
    <>
      <div className="alert alert-success" role="alert">
        {content}
      </div>
    </>
  );
}
