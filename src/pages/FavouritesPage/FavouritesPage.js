import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { ls } from "../../utils";
import styles from "../Page.module.scss";

export function FavouritesPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const favList = ls.get("fav") || [];
    setList(favList);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.emptyText}>
        {!list.length && (
          <>
            <div>У вас пока еще нет любимых котиков 😿</div>
            <Link to="/">Начать выбирать котиков</Link>
          </>
        )}
      </div>
      <div className={styles.imagesContainer}>
        {list.length > 0 &&
          list.map((imageId) => {
            return (
              <div key={imageId}>
                <Card
                  id={imageId}
                  url={`https://cdn2.thecatapi.com/images/${imageId}.jpg`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
