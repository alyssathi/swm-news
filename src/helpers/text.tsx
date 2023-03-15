export const cleanImageURL = (str: string) => {
    const backslashIndex = str.indexOf("/")
    if (backslashIndex === -1) return str

    return str.substring(backslashIndex + 1)
}