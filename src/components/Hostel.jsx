import React from "react";

const Hostel = () => {
  return (
    <div className="content">
      <i>
        <h4>Technologies Used: Python, Django, MySql, JavaScript, HTML, CSS</h4>
        <h5>
          <a
            href="https://github.com/DhruvGupta3377/Online-hostel-allotment-system"
            target="_blank"
          >
            SourceCode
          </a>
        </h5>
      </i>
      <ul>
        <li>
          Developed a solution for making the hostel allotment process easier
          for both students and hostel staff.
        </li>
        <li>Hoatel Caretaker can easily view, edit, add room information.</li>
        <li>
          Students need to authenticate themselves before selecting the room.
        </li>
        <li>
          Room swap ticket can also be generated and rooms can be swapped
          automatically if both parties agree.
        </li>
      </ul>
    </div>
  );
};

export default Hostel;
