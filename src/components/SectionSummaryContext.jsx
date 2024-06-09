import { useContext } from "react";
import { SummaryContext } from "./Section";
import { useLocation } from "react-router-dom";

const SectionSummaryContext = () => {
    const location = useLocation();
    const data = location.state;
    const { article, summary } = data;

    return (
        <div>
            <p>Article Title: {article.title}</p>
            <p>Summary:</p>
            <p>{summary}</p>
        </div>
    )
}

export default SectionSummaryContext