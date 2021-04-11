// import {ReactComponent as Heart} from '../../icons/heart_empty.svg';
import classnames from "classnames";
import { useEffect, useState } from "react";
import { ls } from "../../utils";
import styles from "./Card.module.scss";

export function Card(props) {
  const { id, url } = props;
  const [liked, setLiked] = useState(false);

  const isAlreadyLiked = () => {
    const favList = ls.get("fav") || [];
    return favList.includes(id);
  };

  const handleClick = (id) => {
    setLiked(!liked);
    const oldFav = ls.get("fav") || [];
    let newFav;

    if (oldFav.includes(id)) {
      // dislike
      newFav = oldFav.filter((val) => val !== id);
    } else {
      // like
      newFav = [...oldFav, id];
    }
    ls.set("fav", newFav);
  };
  useEffect(() => {
    if (isAlreadyLiked()) {
      setLiked(true);
    }
  }, []);

  return (
    <div className={styles.imgContainer}>
      <img className={styles.img} src={url} alt="img" loading="lazy" />
      <div
        className={classnames(styles.like, { [styles.likeClicked]: liked })}
        onClick={handleClick.bind(null, id)}
      ></div>
    </div>
  );
}
