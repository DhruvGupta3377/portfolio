import React from "react";

const Codex = () => {
  return (
    <div className="content">
      <i>
        <h4>Technologies Used: Tauri, Rust, ReactJS, JavaScript, HTML, CSS</h4>
      </i>
      <ul>
        <li>
          Created a markdown-inspired note-taking application, leveraging Tauri,
          Rust, and ReactJS for the frontend.
        </li>
        <li>
          It adheres to a set of rules similar to markdown, with a Rust-based
          custom parser converting text to HTML, based on these rules.
        </li>
        <li>
          The frontend, built in ReactJS, utilizes the Solarized theme for a
          visually appealing user experience.
        </li>
        <li>
          The application includes shortcuts for file operations, mode changes,
          and new file creation.
        </li>
        <li>Can easily be build for Unix/Linux or Windows environments.</li>
      </ul>
    </div>
  );
};

export default Codex;
