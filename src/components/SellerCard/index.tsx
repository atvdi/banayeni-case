import UserIcon from "../Icons/UserIcon";
import SellerRating from "../SellerRating";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { ISeller } from "@/types/product";
import { combineClasses } from "@/util";

interface ISellerCardProps extends IBaseComponentProps {
  seller: ISeller;
  onClick?: () => void;
}

const SellerCard = ({ seller, className, onClick }: ISellerCardProps) => {
  const { container, icon, sellerName, rating } = styles;

  return (
    <button className={combineClasses(container, className)} onClick={onClick}>
      <UserIcon className={icon} />
      <div className={sellerName}>
        Satıcı: <b>{seller.name}</b>
      </div>
      <SellerRating rating={seller.rating} className={rating} />
    </button>
  );
};

export default SellerCard;
