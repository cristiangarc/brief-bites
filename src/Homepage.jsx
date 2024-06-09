import Sections from "./components/Sections";
import './Homepage.css';

function Homepage ({ sections }) {
    return (
        <div className="homepage">
            <h1>NYT RSS Feed API Sections & Articles</h1>
            <Sections sections={sections} />
        </div>
    )
}

export default Homepage;
