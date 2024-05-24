import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { NavLink, useParams, Outlet } from "react-router-dom";

function Learn() {
  const {id} = useParams();
  const course = coursesData.find((course) => course.id === id);
  // const [ch_id,setCh_id] = useState(1);
  // const ch = course.chapters.find((ch)=> ch.chapter === ch_id);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <NavLink to="/courses">
          <h2 className={style.back}>{"<<"}</h2>
        </NavLink>
        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul key={course.id}>
            {/*Task4: List of Chapters must be rendered here  */
              course.chapters.map((ch, index) => (
                <li key={index} className={style.chapterId} ><NavLink to={`${ch.chapter}`}>{ch.title}</NavLink></li>
              ))
            }
          </ul> 
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here using Outlet and Link*/
          // ch.details
          <Outlet/>
        }
      </div>
    </div>
</div>
  );
}

export default Learn;
