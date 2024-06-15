import { useState, useEffect, createContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getNYTArticles } from "../api/nytimes-api";
import "./Section.css";
import { createArticle, getArticleSummary } from "../fetch";

export const SummaryContext = createContext(null);

const Section = ({ sections }) => {
  const [summary, setSummary] = useState("");
  const [articles, setArticles] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getNYTArticles(sections[id])
      .then((results) => {
        setArticles(results);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = async (article) => {
    try {
      // post a new article abstract to the database
      const postedArticle = await createArticle({ title: article.title, abstract: article.abstract });
      // fetch the summary from the newly created article from the database
      const summary = await getArticleSummary(postedArticle.id);
      setSummary(summary);
      console.log('summary:', summary);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SummaryContext.Provider
      value={{ summary, setSummary, articles, setArticles }}
    > 
    <h1>{sections[id]}</h1>
    {(summary) ? (<div>
          <p>{summary}</p>
        </div>) : (
        <div>
            {articles.length > 0 &&
            articles.map((article) => (
                <li key={article.slug_name}>
                  <Link to={article.url} target="_blank">
                      {article.title}
                  </Link>
                  <p>{article.abstract}</p>
                  <button onClick={() => handleClick(article)}>
                      Summarize for 8th Graders + Below
                  </button>
                  <button>Summarize for High Schoolers</button>
                  <button>Summarize for Adults</button>
                </li>
            ))}
        </div>
        )
    }
    </SummaryContext.Provider>
  );
};

export default Section;
