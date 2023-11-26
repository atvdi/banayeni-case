import HeartIcon from "../Icons/HeartIcon";
import ShareIcon from "../Icons/ShareIcon";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { combineClasses } from "@/util";

interface IProductActionsProps extends IBaseComponentProps {
  onLike?: () => void;
  onShare?: () => void;
  onBuy?: () => void;
}

const ProductActions = ({
  className,
  onLike,
  onShare,
  onBuy,
}: IProductActionsProps) => {
  const { ctaSection, actionItem, cta } = styles;

  return (
    <div className={combineClasses(ctaSection, className)}>
      <button className={actionItem} onClick={onLike}>
        <HeartIcon />
      </button>
      <button className={actionItem} onClick={onShare}>
        <ShareIcon />
      </button>
      <button className={cta} onClick={onBuy}>
        Hemen Al
      </button>
    </div>
  );
};

export default ProductActions;
