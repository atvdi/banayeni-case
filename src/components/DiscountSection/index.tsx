import React from "react";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { combineClasses } from "@/util";
import { formatPrice } from "@/util/formatting";

interface IDiscountSectionProps extends IBaseComponentProps {
  fullPrice: number;
  discount: number;
}

const DiscountSection = ({
  discount,
  fullPrice,
  className,
}: IDiscountSectionProps) => {
  const { container, price } = styles;

  return (
    <div className={combineClasses(container, className)}>
      <div className={price}>{formatPrice(fullPrice)}</div>
      <div>%{discount * 100} bizden olsun</div>
    </div>
  );
};

export default DiscountSection;
