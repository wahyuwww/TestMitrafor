import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { Link } from "react-router-dom";
import product from "../../database/product.json";
import ImageGallery from "react-image-gallery";
import styles from './detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const getDetail = product.find((i) => i.id === Number(id));
  const images = JSON.stringify(getDetail.images);
  const galleries = [];
  if (images) {
    JSON.parse(images).map((item) => {
      return galleries.push({
        original: `${item}`,
        thumbnail: `${item}`,
      });
    });
  }
  return (
    <>
      <div className={`${styles.detail}`}>
        <Link to="/">
          <Button
            type="primary"
            style={{
              objectFit: "cover",
              borderRadius: "7px",
              height: "50px",
              fontSize: "22px",
            }}
          >
            Back
          </Button>
        </Link>
        <div className={`${styles.detail}`}>
          <div className={`${styles.boxOfTitle}`}>
            <h1>{getDetail.title}</h1>
          </div>
          <p
            className={`${styles.textCategory}`}
            style={{ marginTop: "10px", fontSize: "18px" }}
          >
            category {">"} {getDetail.category}
          </p>
          <div className={`${styles.mainBox}`}>
            <ImageGallery items={galleries} />
            <div className={`${styles.secondBox}`}>
              <p className={`${styles.text}`}>
                <span style={{ fontWeight: "bold" }}>Brand : </span>
                {getDetail.brand}
              </p>
              <hr />
              <p className={`${styles.stock}`}>
                <span style={{ fontWeight: "bold" }}>Stock : </span>
                {getDetail.stock}
              </p>
              <hr />
              <div className={`${styles.priceBox}`}>
                <div>
                  <p className={`${styles.text}`}>
                    <span style={{ fontWeight: "bold" }}>Price : </span>
                    {getDetail.price}
                  </p>
                </div>
              </div>
              <hr />
              <div className={`${styles.priceBox}`}>
                <div>
                  <p className={`${styles.text}`}>
                    <span style={{ fontWeight: "bold" }}>Discount : </span>
                    {getDetail.discountPercentage} %
                  </p>
                </div>
              </div>
              <hr />
              <h2 style={{ fontWeight: "bold" }}>Description : </h2>
              <p className={`${styles.text}`}>{getDetail.description}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
