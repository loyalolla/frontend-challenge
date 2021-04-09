import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { request } from "../../utils/Api";

export function HomePage() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        request('search').then(data => {
            setImages(data);
        });
    }, []);
    return (
        <div>
            {
                images.map((image) => {
                    return (
                        <React.Fragment key={image.id}>
                          <Card
                           id={image.id}
                           url={image.url}
                          />

                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}
