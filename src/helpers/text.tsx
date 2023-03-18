export const cleanImageURL = (str: string): string => {

    const backslashIndex = str.indexOf("/")
    if (backslashIndex === -1) return str

    return str.substring(backslashIndex + 1)
}


export const maxCharDescription = (str: string, num: number): string => {
    return str.substring(0, num) + "..."
}