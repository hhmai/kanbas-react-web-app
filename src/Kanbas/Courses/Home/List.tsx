import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { FaFileExport, FaPlusCircle, FaHouseUser, FaChartBar, FaMicrophone, FaBell } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
    <div className="d-flex">
      <ul className="list-group wd-modules wd-flex-grow-1">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="d-none d-xxl-block wd-course-status-bar">
                <button><FaFileExport/> Import Existing Content</button>
                <button><FaPlusCircle/> Import From Commons</button>
                <button><FaHouseUser/> Choose Home Page</button>
                <button><FaChartBar/> View Course Stream</button>
                <button><FaMicrophone/> New Announcement</button>
                <button><FaChartBar/> New Analytics</button>
                <button><FaBell/> View Course Notifications</button>
               
        <h2>To do</h2>
        <ul style={{ listStyleType: "none" }}>
            <li style={{ color: "red", display: "flex", alignItems: "center" }}>
                <div style={{ backgroundColor: "red", color: "white", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px" }}>5</div>
                Grade A5
            </li>
            <li style={{ color: "red", display: "flex", alignItems: "center" }}>
                <div style={{ backgroundColor: "red", color: "white", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px" }}>2</div>
                Grade E1
            </li>
            <li style={{ color: "red", display: "flex", alignItems: "center" }}>
                <div style={{ backgroundColor: "red", color: "white", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px" }}>4</div>
                Submit Grades
            </li>
        </ul>
    </div>
            
      </div>
    </>
  );
}
export default ModuleList;
