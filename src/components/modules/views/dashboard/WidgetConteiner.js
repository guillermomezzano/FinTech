import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MultiChartApp } from "../../../modules/charts/App";

import {
  imgsCarouselOne,
  imgsCarouselTwo,
  imgsCarouselThree,
} from "../../../modules/data/dataImageCarousel";

const WidgetConteiner = () => {
  const { id } = useParams();
  const [arrayImg, setArrayImg] = useState();
  const [objectImg, setObjectImg] = useState();

  // useEffect(() => {
  //   switch (type) {
  //     // case "BarraUnica":
  //     case "BarraUnica":
  //       setArrayImg(imgsCarouselOne);
  //       break;
  //     case "2":
  //       setArrayImg(imgsCarouselTwo);
  //       break;
  //     default:
  //       setArrayImg(imgsCarouselThree);
  //   }
  // }, []);

  // useEffect(() => {
  //   const results = arrayImg?.filter((nickname) => nickname.id === id);
  //   const firstObj = results?.length > 0 ? results[0] : null;
  //   setObjectImg(firstObj);
  // }, [arrayImg]);

  return (
    <div className="w-[400px] ml-[200px] bg-white">
      <MultiChartApp typeid={id} key={"1"} />
    </div>
  );
};

export default WidgetConteiner;
