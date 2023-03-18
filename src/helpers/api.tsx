import { NewsAPIStruct, NewsArticle } from "../types";
import { maxCharDescription } from "./text";

export async function GET<T>(
    request: RequestInfo,
): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}

export const transformNewsAPIToLocal = (NewsAPIArticles: NewsAPIStruct[]): NewsArticle[] => {
    const maxChar = 300
    let articles: NewsArticle[] = []
    NewsAPIArticles.map((news, i) => {
        const local: NewsArticle = {
            id: String(i),
            byline: {
                text: news.author,
            },
            head: news.title,
            teaser: maxCharDescription(news.description, 185),
            image: news.urlToImage
        }

        articles = [...articles, local]
    })

    return articles
}
