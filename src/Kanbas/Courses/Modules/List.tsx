import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import HeaderLeft from "./HeaderLeft";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();

  function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();
  }

  return (
    <>
      <div className="d-flex">
        <ul className="list-group wd-modules wd-flex-grow-1">
          <li className="list-group" style={{ paddingLeft: "1px" }}>
            <input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} style={{ background: "white", padding: "5px", margin: "5px 0", width: "100%" }} />
            <textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} style={{ background: "white", padding: "5px", margin: "5px 0", width: "100%", resize: "vertical" }} />
            <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success" style={{ background: "", padding: "5px 10px" }}>
              Add
            </button>
            <button onClick={() => dispatch(updateModule(module))} className="btn btn-warning" style={{ background: "", padding: "5px 10px" }}>
              Update
            </button>
          </li>
          {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <div>
                  <FaEllipsisV className="me-2" />
                  {module.name}
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                    <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button>
                    <button className="btn btn-warning" onClick={(event) => dispatch(setModule(module))}>
                      Edit
                    </button>
                  </span>
                </div>
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: number) => (
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
              </li>
            ))}
        </ul>
        <HeaderLeft />
      </div>
    </>
  );
}
export default ModuleList;
