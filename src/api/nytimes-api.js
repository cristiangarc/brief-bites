const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;
export async function getNYTArticles (section) {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${NYT_API_KEY}`);
        const data = await response.json()
        return data.results;
    } catch (err) {
        console.error(err);
        return err;
    }
}