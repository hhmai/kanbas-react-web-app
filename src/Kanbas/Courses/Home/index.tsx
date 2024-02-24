import ModuleList from "./List";
import "./index.css";


function Home() {
    return (
        <div className="wd-course-home-body wd-flex-row-container">
            <div className="wd-course-module-list">
                <ModuleList />
            </div>
        </div>
    );
}
export default Home;