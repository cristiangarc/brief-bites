const CURRENTS_API_KEY = import.meta.env.VITE_CURRENTS_API_KEY;
export async function getAllArticles () {
    try {
        const response = await fetch(`https://api.currentsapi.services/latest-newsapi-key=${CURRENTS_API_KEY}`);
        const data = await response.json()
        return data.results;
    } catch (err) {
        console.error(err);
        return err;
    }
}