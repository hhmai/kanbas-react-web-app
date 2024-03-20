import { Link } from "react-router-dom";
import React, { useState } from "react";


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  
  
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button className="btn btn-success" onClick={addNewCourse}>
        Add
      </button>
      <span style={{ margin: "0 5px" }}></span>
      <button className="btn btn-warning" onClick={updateCourse} >
        Update
      </button>

      <hr />
      <h2>Published Courses (3)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="col" style={{ width: "350px" }}>
              <div className="card">
                <img src="/images/image2.jpg" alt="" className="card-img-top" style={{ maxHeight: "150px" }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <Link to={"#"} className="btn btn-primary">
                    Go
                  </Link>
                  <span style={{ margin: "0 5px" }}></span>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <span style={{ margin: "0 5px" }}></span>
                  <button className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
