import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import DiscountSection from "@/components/DiscountSection";
import ChevronRight from "@/components/Icons/ChevronRight";
import CreditCardIcon from "@/components/Icons/CreditCardIcon";
import PackageIcon from "@/components/Icons/PackageIcon";
import UndoIcon from "@/components/Icons/UndoIcon";
import ImageSlider from "@/components/ImageSlider";
import Modal from "@/components/Modal";
import ProductActions from "@/components/ProductActions";
import ProductFeatureItem from "@/components/ProductFeatureItem";
import ProductSection from "@/components/ProductSection";
import ProductTags from "@/components/ProductTags";
import SellerCard from "@/components/SellerCard";
import SellerSection from "@/components/SellerSection";
import {
  brandName,
  discount,
  fullPrice,
  productPath,
} from "@/constants/product";
import { IProduct } from "@/types/product";
import { combineClasses } from "@/util";
import { formatPrice } from "@/util/formatting";

const inter = Inter({ subsets: ["latin"] });

function Home({
  product: {
    itemName,
    sliderImage,
    tag,
    description,
    seller,
    price,
    instalment,
  },
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const {
    main,
    product,
    productDetail,
    imageSlider,
    title,
    brandLink,
    description: descriptionClass,
    price: priceClass,
    modalContent,
  } = styles;

  const [isSellerModalVisible, setIsSellerModalVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Banayeni assessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={combineClasses(main, inter.className)}>
        <div className={product}>
          <ImageSlider images={sliderImage} className={imageSlider} />
          <div className={productDetail}>
            <Breadcrumb path={productPath} />
            <ProductSection>
              <Link href="" className={brandLink}>
                {brandName}
                <ChevronRight />
              </Link>
              <h1 className={title}>{itemName}</h1>
              <ProductTags tags={tag} />
            </ProductSection>
            <ProductSection>
              <p className={descriptionClass}>{description}</p>
              <SellerCard
                seller={seller}
                onClick={() => setIsSellerModalVisible(true)}
              />
            </ProductSection>
            <ProductSection>
              <div className={priceClass}>{formatPrice(price)}</div>
              <DiscountSection fullPrice={fullPrice} discount={discount} />
            </ProductSection>
            <ProductSection>
              <ProductFeatureItem
                icon={<PackageIcon />}
                text="Ücretsiz Kargo"
              />
              <ProductFeatureItem
                icon={<CreditCardIcon />}
                text={instalment}
                url="/"
              />
              <ProductFeatureItem
                icon={<UndoIcon />}
                text="Paran Güvende"
                url="/"
              />
            </ProductSection>
            <ProductActions />
          </div>
        </div>
        <Modal
          isOpen={isSellerModalVisible}
          handleClose={() => setIsSellerModalVisible(false)}
          title="Satıcı"
        >
          <SellerSection seller={seller} className={modalContent} />
        </Modal>
      </main>
    </>
  );
}

// I would use getServerSideProps but I couldn't without a server. I am using getStaticProps for demonstration
export const getStaticProps = (async () => {
  const productRaw = await fetch(
    "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/api/Item/1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const product = (await productRaw.json()) as IProduct;

  return { props: { product } };
}) satisfies GetServerSideProps<{
  product: IProduct;
}>;

export default Home;
