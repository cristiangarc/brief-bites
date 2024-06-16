const URL = import.meta.env.VITE_BASE_URL;

// Article/Get one
export function getOneArticle(id) {
    return fetch(`${URL}/api/articles/${id}`, { 'Access-Control-Allow-Origin': 'http://localhost:3000' })
    .then((response) => response.json());
}

// Create an article
export function createArticle (article, moreOptions = {}) {
  const options = {
    ...moreOptions,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "CSRF-Token": csrfToken, // Include CSRF token in request headers
    },
    body: JSON.stringify(article),
    // 'Access-Control-Allow-Origin': 'http://localhost:3000'
  };
  return fetch(`${URL}/api/articles/`, options)
  .then((response) => {
    return response.json();
  });
}

// get an article summary
export function getArticleSummary(id) {
  return fetch(`${URL}/api/summaries/${id}`)
  .then((response) => {
    return response.json();
  });
}