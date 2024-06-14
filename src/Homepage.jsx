import Sections from "./components/Sections";
import './Homepage.css';

function Homepage ({ sections }) {
    return (
        <div className="homepage">
            <h1>NYT API News Sections & Articles</h1>
            <Sections sections={sections} />
        </div>
    )
}

export default Homepage;