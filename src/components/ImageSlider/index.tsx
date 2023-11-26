import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ShareIcon from "../Icons/ShareIcon";
import styles from "./styles.module.css";
import { IBaseComponentProps } from "@/types";
import { ISliderImage } from "@/types/product";
import { combineClasses } from "@/util";

interface IImageSliderProps extends IBaseComponentProps {
  images: ISliderImage[];
}
const ImageSlider = ({ images, className }: IImageSliderProps) => {
  const {
    slider,
    content,
    imageContainer,
    indicatorContainer,
    indicator,
    currentIndicator,
    share,
    image: imageClass,
  } = styles;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollEnd = useCallback(
    (e: Event) => {
      const element = e.currentTarget as Element;
      const result = element.scrollLeft / element.clientWidth;

      if (Math.floor(result) === result) {
        if (scrollRef.current) {
          if (result === 0 || result === images.length + 1) {
            scrollRef.current.scroll({
              behavior: "instant",
              left: (result === 0 ? images.length : 1) * element.clientWidth,
            });
          } else {
            setCurrentIndex(result - 1);
          }
        }
      }
    },
    [images?.length]
  );

  useEffect(() => {
    const refValue = scrollRef.current;
    refValue?.addEventListener("scroll", handleScrollEnd);

    return () => refValue?.removeEventListener("scroll", handleScrollEnd);
  }, [handleScrollEnd]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current?.clientWidth;
    }
  }, []);

  const processedImages = useMemo(() => {
    return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  return (
    <div className={combineClasses(slider, className)}>
      <div className={content} ref={scrollRef}>
        {processedImages?.map((image, index) => (
          <div key={index} className={imageContainer}>
            <Image
              src={image.imageUrl}
              alt={`Image ${index + 1}`}
              width={1000}
              height={1000}
              className={imageClass}
            />
          </div>
        ))}
      </div>
      <div className={share}>
        <ShareIcon />
      </div>
      <div className={indicatorContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={combineClasses(
              indicator,
              currentIndex === index ? currentIndicator : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
