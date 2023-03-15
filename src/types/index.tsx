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