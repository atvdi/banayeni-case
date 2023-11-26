import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { combineClasses } from "@/util";

interface IProductFeatureItem extends IBaseComponentProps {
  icon: ReactNode;
  text: string;
  url?: string;
}

const ProductFeatureItem = ({
  icon,
  text,
  url,
  className,
}: IProductFeatureItem) => {
  const { container, link } = styles;

  const Content = () => (
    <div className={combineClasses(container, className)}>
      {icon}
      {text}
    </div>
  );

  return url ? (
    <Link href={url} className={combineClasses(link, className)}>
      <Content />
    </Link>
  ) : (
    <Content />
  );
};

export default ProductFeatureItem;
