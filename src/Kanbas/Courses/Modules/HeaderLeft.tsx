import { FaEllipsisV } from "react-icons/fa";
import "./index.css";

function HeaderLeft() {
    return (
        <div className="wd-modules-heading-buttons">
            <ul style={{ listStyleType: "none" }}>
                <li><button>Collapse All</button></li>
                <li><button>View Progress</button></li>
                <li><button>Publish All</button></li>
                <li><button id="add-button">+ Module</button></li>
                <li><button><FaEllipsisV/></button></li>
            </ul>
            <hr></hr>
        </div>
    );
}
export default HeaderLeft;