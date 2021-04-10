import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { request } from "../../utils";
import styles from './HomePage.module.scss';

export function HomePage() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        request('search').then(data => {
            setImages(data);
        });
    }, []);

    return (
        <div className={styles.container}>
            {
                images.map((image) => {
                    return (
                        <div className={styles.cardContainer} key={image.id} >
                          <Card
                            id={image.id}
                            url={image.url}
                          />
                        </div>
                    )
                })
            }
        </div>
    );
}
