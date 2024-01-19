import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

export function Modal({
  onClose,
  children,
  path,
}: {
  onClose: React.MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
  path: string;
}) {
  useEffect(() => {
    document.body.classList.add("modal-overflow-hidden");

    return () => {
      document.body.classList.remove("modal-overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="modal-container-bg"></div>
      <div
        className={`${
          path === "/apparent-porosity" ? "modal-container-AP" : "modal-content"
        }`}
      >
        {children}
      </div>
    </>,
    document.querySelector(".modal-container")!
  );
}
