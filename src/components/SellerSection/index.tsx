import SellerRating from "../SellerRating";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { ISeller } from "@/types/product";

interface ISellerSectionProps extends IBaseComponentProps {
  seller: ISeller;
}

const SellerSection = ({ seller, className }: ISellerSectionProps) => {
  const { modalDescription, info } = styles;

  return (
    <div className={className}>
      <b>{seller.name}</b>
      {seller.totalSold > 0 && (
        <div className={info}>
          <SellerRating rating={seller.rating} />
          <span>Toplam {seller.totalSold} satış</span>
        </div>
      )}
      <p className={modalDescription}>
        {`"`}
        {seller.description}
        {`"`}
      </p>
    </div>
  );
};

export default SellerSection;
