import { useState, useEffect, createContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { getNYTArticles } from "./fetch";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import './Section.css';
import main from './OpenAi';

export const SummaryContext = createContext(null);

const Section = ({ sections }) => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getNYTArticles(sections[id]).then((results) => {
            setArticles(results);
        }).catch((err) => console.error(err));
    }, []);

    const handleClick = (art) => {
        main()
        .then(response => {
            navigate('/sections/summary', { state: {
                article: art,
                summary: response,
            } } );
        })
     }

    return (
         <SummaryContext.Provider value={{}}>
        <div>
            <h1>{sections[id]}</h1>
            {articles.length > 0 && articles.map(article =>
                <li key={article.slug_name}>
                    <Link to={article.url} target="_blank">{article.title}</Link>
                    <p>{article.abstract}</p>
                    <button onClick={()=> handleClick(article)}>Summarize (8th Grade)</button>
                    <button>Summarize (High School)</button>
                    <button>Summarize (Adults)</button>
                    <br />
                    <br />
                </li>)}
        </div>
         </SummaryContext.Provider> 
    )
}

export default Section; 