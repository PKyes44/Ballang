import { MouseEventHandler, PropsWithChildren } from "react";

interface ModalProps {
  handleClickOutRange: MouseEventHandler<HTMLElement>;
}

function Modal({
  handleClickOutRange,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <>
      <article
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40 grid place-content-center z-10"
        onClick={handleClickOutRange}
      >
        {children}
      </article>
    </>
  );
}

export default Modal;
