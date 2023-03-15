import React from "react"
import { NewsArticle } from "../../types/index"

interface ICard {
    newsArticle: NewsArticle
}
export const Card = ({ newsArticle }: ICard) => {

    return (
        <div>
            <h1>{newsArticle.head}</h1>
            <h2>{newsArticle.teaser}</h2>
        </div>
    )
}