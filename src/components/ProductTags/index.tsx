import ShieldCheck from "../Icons/ShieldCheck";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { ITag } from "@/types/product";
import { combineClasses } from "@/util";

interface IProductTagsProps extends IBaseComponentProps {
  tags: ITag[];
}

const ProductTags = ({ tags, className }: IProductTagsProps) => {
  const { container, item } = styles;

  return (
    <div className={combineClasses(container, className)}>
      {tags.map((tag, index) => (
        <div
          key={index}
          style={{
            backgroundColor: tag.tagBackgroundColor,
            color: tag.tagTextColor,
          }}
          className={item}
        >
          {tag.tagName === "GARANTILI" && <ShieldCheck />}
          {tag.tagName}
        </div>
      ))}
    </div>
  );
};

export default ProductTags;
