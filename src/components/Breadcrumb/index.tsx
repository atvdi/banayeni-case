import Link from "next/link";
import React from "react";
import ChevronRight from "../Icons/ChevronRight";
import HomeIcon from "../Icons/Home";
import styles from "./styles.module.css";
import { IBaseComponentProps, ILink } from "@/types";
import { combineClasses } from "@/util";

interface IBreadcrumbProps extends IBaseComponentProps {
  path: ILink[];
}

const Breadcrumb = ({ path, className }: IBreadcrumbProps) => {
  const { container, link } = styles;

  return (
    <div className={combineClasses(container, className)}>
      <Link href="/" className={link}>
        <HomeIcon />
      </Link>
      {path.map(({ text, url }, index) => (
        <React.Fragment key={index}>
          <ChevronRight />
          <Link href={url} className={link}>
            {text}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
