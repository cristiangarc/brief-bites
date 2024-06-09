import Sections from "./components/Sections";

function Homepage ({ sections }) {
    return (
        <div>
            <h1>NYT RSS Feed API Sections & Articles</h1>
            <Sections sections={sections} />
        </div>
    )
}

export default Homepage;
