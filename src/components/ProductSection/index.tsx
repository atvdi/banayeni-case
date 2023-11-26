import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { combineClasses } from "@/util";

const ProductSection = ({
  children,
  className,
}: PropsWithChildren<IBaseComponentProps>) => {
  const { container } = styles;

  return <div className={combineClasses(container, className)}>{children}</div>;
};

export default ProductSection;
