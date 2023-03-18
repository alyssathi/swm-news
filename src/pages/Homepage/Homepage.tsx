import React from "react"
import { Card } from "../../components"
import articlesJSON from "../../api/news.json"
import { NewsArticle, articleSize } from "../../types/index"
import "./homepageCSS.css"

const getCardSize = (index: number): articleSize => {
    let cardSize: articleSize
    switch (index) {
        case 0:
            cardSize = articleSize.extraLarge
            break
        case 2: case 5:
            cardSize = articleSize.large
            break
        case 1:
            cardSize = articleSize.medium
            break
        case 3: case 4:
            cardSize = articleSize.small
            break
        default:
            cardSize = articleSize.extraSmall
    }
    return cardSize
}

export const Homepage = () => {
    const articles: NewsArticle[] = articlesJSON.articles

    return (
        <div className="container">
            {articles.map((article, i) => {
                const cardSize = getCardSize(i)
                return (
                    <div className={`article-${i + 1}`}>
                        <Card newsArticle={article} size={cardSize} />
                    </div>
                )
            })}
        </div>
    )
}