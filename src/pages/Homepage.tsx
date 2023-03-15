import React from "react"
import { Card } from "../components"
import articlesJSON from "../api/news.json"
import { NewsArticle } from "../types/index"

export const Homepage = () => {
    const articles: NewsArticle[] = articlesJSON.articles

    return (
        <div>
            {articles.map(article => {
                return <Card newsArticle={article} />
            })}
        </div>
    )
}