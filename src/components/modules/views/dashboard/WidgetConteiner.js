import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  imgsCarouselOne,
  imgsCarouselTwo,
  imgsCarouselThree,
} from "../../../modules/data/dataImageCarousel";

const WidgetConteiner = () => {
  const { id, type } = useParams();
  const [imagesArray, setImagesArray] = useState();

  // useEffect(() => {
  switch (type) {
    case "1":
      setImagesArray(imgsCarouselOne);
      debugger;
      break;
    case "2":
      setImagesArray(imgsCarouselTwo);
      debugger;
      break;
    default:
      setImagesArray(imgsCarouselThree);
      debugger;
  }
  // }, [type]);
  const a = imagesArray?.filter((image) => image.id === id);

  useEffect(() => {
    console.log(imagesArray);
  }, [imagesArray]);
  useEffect(() => {
    console.log(a);
  }, [a]);

  return (
    <div>
      <p>
        holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasoy el widgetConteiner{id}
        {type}
      </p>
      {imagesArray
        // Filtra el objeto con el id correspondiente
        ?.map((image) => (
          <div key={image.id}>
            {image.id === id ? (
              <p>
                holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            ) : (
              <></>
            )}

            {/* <h3>
              qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqddddddddddddddddqqq
              {image.id}
            </h3> */}
          </div>
        ))}
    </div>
  );
};

export default WidgetConteiner;
