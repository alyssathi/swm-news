import React, { useEffect, useState } from "react"
import { Card } from "../../components"
import articlesJSON from "../../api/news.json"
import { NewsArticle, articleSize, NewsAPIResponse } from "../../types/index"
import "./homepageCSS.css"
import { Toggle } from "../../components/Toggle/Toggle"
import { Form } from "../../components/Form/Form"
import { GET, transformNewsAPIToLocal } from "../../helpers/api"

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
    const [articles, setArticles] = useState<NewsArticle[]>(articlesJSON.articles)
    const [dynamic, setDynamic] = useState<boolean>(localStorage.getItem("dynamic") === "true" ?? false)
    const [apiKey, setApiKey] = useState<string | null>(localStorage.getItem("apiKey"))

    useEffect(() => {
        if (!apiKey || !dynamic) {
            setArticles(articlesJSON.articles)
            return
        }

        ; (async () => {
            try {
                const body = await GET<NewsAPIResponse>(`https://newsapi.org/v2/top-headlines?pageSize=11&country=us&apiKey=${apiKey}`)
                const liveArticles = transformNewsAPIToLocal(body.articles)
                console.log(liveArticles)
                setArticles(liveArticles)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [apiKey, dynamic, articlesJSON])

    return (
        <>
            <div className="nav">
                <Toggle off="Static" on="Dynamic" dynamic={dynamic} setDynamic={setDynamic} />
                {dynamic && <Form apiKey={apiKey} setApiKey={setApiKey} />}

            </div>

            <div className="container">
                {articles.map((article, i) => {
                    const cardSize = getCardSize(i)
                    return (
                        <div key={`${article.head}-${i}`} className={`article article-${i + 1}`}>
                            <Card newsArticle={article} size={cardSize} />
                        </div>
                    )
                })}
            </div>
        </>

    )
}