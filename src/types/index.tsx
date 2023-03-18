interface Byline {
    text: string
}
export interface NewsArticle {
    id: string;
    byline: Byline;
    head: string;
    teaser: string;
    image: string;
}

export enum articleSize {
    extraLarge = 'xl',
    large = "lg",
    medium = "md",
    small = "sm",
    extraSmall = "xs"
}

export interface NewsAPIStruct {
    author: string
    content: string
    description: string
    publishedAt: Date
    source: {
        id: string
        name: string
    }
    title: string
    url: string
    urlToImage: string
}

export interface NewsAPIResponse {
    articles: NewsAPIStruct[]
    status: string
    totalResults: number
}