import React from "react"
import { Card } from "../../components"
import articlesJSON from "../../api/news.json"
import { NewsArticle } from "../../types/index"
import "./homepageCSS.css"

export const Homepage = () => {
    const articles: NewsArticle[] = articlesJSON.articles

    return (
        <div className="container">
            <div className="headline">
                <Card newsArticle={articles[0]} size="lg" />
            </div>
        </div>
    )
}