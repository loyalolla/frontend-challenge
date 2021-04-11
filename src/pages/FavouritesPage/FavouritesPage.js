import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ls } from "../../utils";
import styles from '../HomePage/HomePage.module.scss';

export function FavouritesPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const favList = ls.get("fav") || [];
    setList(favList);
    console.log(favList);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        {list.map((imageId) => {
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
