import React from "react"
import { cleanImageURL } from "../../helpers/text"
import { NewsArticle, articleSize } from "../../types/index"
import './CardCSS.css'


interface ICard {
    newsArticle: NewsArticle
    size: articleSize
}

export const Card = ({ newsArticle, size }: ICard) => {
    let image = newsArticle.image
    if (!newsArticle.image.includes("://")) {
        const imageURL = cleanImageURL(newsArticle.image)
        image = require(`../../images/${imageURL}`)
    }

    return (
        <div className={`container-card size-${size}`}>
            <div className={`text-container text-${size}`}>
                <div>
                    {size === articleSize.extraLarge ? <h1>{newsArticle.head}</h1> : size === articleSize.extraSmall ? <h3>{newsArticle.head}</h3> : <h2>{newsArticle.head}</h2>}
                    {(size === articleSize.extraLarge || size === articleSize.large || size === articleSize.small) && <h3>{newsArticle.teaser}</h3>}
                </div>
                {size !== articleSize.extraSmall && <p>{newsArticle.byline.text}</p>}
            </div>


            {(size === articleSize.extraLarge || size === articleSize.large || size === articleSize.medium) && <img className={`img img-${size}`} src={image} alt={`image for ${newsArticle.head} article`} />}
        </div>
    )
}