import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  imgsCarouselOne,
  imgsCarouselTwo,
  imgsCarouselThree,
} from "../../../modules/data/dataImageCarousel";

const WidgetConteiner = () => {
  const { id, type } = useParams();
  const [arrayImg, setArrayImg] = useState();
  const [objectImg, setObjectImg] = useState();

  useEffect(() => {
    switch (type) {
      case "1":
        setArrayImg(imgsCarouselOne);
        break;
      case "2":
        setArrayImg(imgsCarouselTwo);
        break;
      default:
        setArrayImg(imgsCarouselThree);
    }
  }, []);

  useEffect(() => {
    const results = arrayImg?.filter((nickname) => nickname.id === id);
    const firstObj = results?.length > 0 ? results[0] : null;
    setObjectImg(firstObj);
  }, [arrayImg]);

  return (
    <div>
      {objectImg && (
        <div className="ml-[5%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <img
            className="w-[20%] h-[20%] block sm:inline-block m-[5px]"
            src={objectImg.url}
            alt="slide_image"
          />
        </div>
      )}
    </div>
  );
};

export default WidgetConteiner;
