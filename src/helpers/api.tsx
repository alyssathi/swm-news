export async function GET(
    request: RequestInfo
): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}
