import StarIcon from "../Icons/StarIcon";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { combineClasses } from "@/util";

interface ISellerRatingProps extends IBaseComponentProps {
  rating: number;
}

const SellerRating = ({ rating, className }: ISellerRatingProps) => {
  const { container } = styles;

  return (
    <div className={combineClasses(container, className)}>
      <StarIcon />
      <div>
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default SellerRating;
