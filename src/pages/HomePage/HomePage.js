import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { request } from "../../utils";
import styles from "../Page.module.scss";

export function HomePage() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getCats = (page) => {
    setLoading(true);
    request("search", page).then((data) => {
      setLoading(false);
      setImages([...images, ...data]);
    });
  };
  useEffect(() => {
    getCats(currentPage);
  }, []);
  const handleClick = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getCats(nextPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        {images.map((image, index) => {
          return (
            // прибавляем index, потому что
            // могут прийти одинаковые картинки из api
            <div key={image.id + index}>
              <Card id={image.id} url={image.url} />
            </div>
          );
        })}
      </div>

      <div className={styles.buttonContainer}>
        {loading ? (
          <div className={styles.loadingText}>... загружаем еще котиков ...</div>
        ) : (
          <div className={styles.button}>
            {" "}
            <button onClick={handleClick}>загрузить еще котиков</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
