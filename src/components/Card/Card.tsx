import React from "react"
import { cleanImageURL } from "../../helpers/text"
import { NewsArticle } from "../../types/index"
import './CardCSS.css'

interface ICard {
    newsArticle: NewsArticle
    size: string
}

export const Card = ({ newsArticle, size, }: ICard) => {
    const imageURL = cleanImageURL(newsArticle.image)
    const image = require(`../../images/${imageURL}`)

    return (
        <div className="container-card">
            <div className="text-container">
                <div>
                    <h1>{newsArticle.head}</h1>
                    <h2>{newsArticle.teaser}</h2>
                </div>
                <p>{newsArticle.byline.text}</p>
            </div>


            <img className="img" src={image} alt={`image for ${newsArticle.head} article`} />
        </div>
    )
}