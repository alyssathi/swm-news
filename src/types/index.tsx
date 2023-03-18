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