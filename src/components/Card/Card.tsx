import React from "react"
import { cleanImageURL } from "../../helpers/text"
import { NewsArticle } from "../../types/index"
import './CardCSS.css'

interface ICard {
    newsArticle: NewsArticle
}

export const Card = ({ newsArticle }: ICard) => {
    const imageURL = cleanImageURL(newsArticle.image)
    const image = require(`../../images/${imageURL}`)

    return (
        <div>
            <h1>{newsArticle.head}</h1>
            <h2>{newsArticle.teaser}</h2>
            <img className="img" src={image} alt={`image for ${newsArticle.head} article`} />
        </div>
    )
}