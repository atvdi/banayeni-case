import { Inter } from "next/font/google";
import { PropsWithChildren, useEffect } from "react";
import CloseIcon from "../Icons/CloseIcon";
import Portal from "../Portal";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { combineClasses } from "@/util";

interface IModalProps extends IBaseComponentProps {
  isOpen: boolean;
  title?: string;
  handleClose: () => void;
}

const inter = Inter({ subsets: ["latin"] });

const Modal = ({
  children,
  title,
  isOpen,
  className,
  handleClose,
}: PropsWithChildren<IModalProps>) => {
  const {
    modal,
    modalContent,
    modalOpen,
    modalContentOpen,
    dismissArea,
    closeButton,
    titleContainer,
    childrenWrapper,
  } = styles;

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <Portal wrapperId="portal-modal-container">
      <div
        className={combineClasses(
          modal,
          inter.className,
          isOpen ? modalOpen : ""
        )}
      >
        <button className={dismissArea} onClick={handleClose} />
        <div
          className={combineClasses(
            modalContent,
            isOpen ? modalContentOpen : ""
          )}
        >
          <div className={titleContainer}>
            <h4>{title ?? ""}</h4>
            <button className={closeButton} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={combineClasses(childrenWrapper, className)}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
