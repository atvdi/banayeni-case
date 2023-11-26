import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  wrapperId: string;
}

const createWrapper = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const Portal = ({ wrapperId, children }: PropsWithChildren<IPortalProps>) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let elementCreated = false;

    if (!element) {
      element = createWrapper(wrapperId);
      elementCreated = true;
    }

    setWrapperElement(element);

    return () => {
      if (elementCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) {
    return null;
  }

  return createPortal(children, wrapperElement);
};

export default Portal;
