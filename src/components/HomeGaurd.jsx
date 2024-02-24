import React from "react";

const HomeGaurd = () => {
  return (
    <div className="content">
      <i>
        <h4>Technologies Used: Python, Scikit-learn, Matplotlib, Seaborn</h4>

        <h5>
          <a
            href="https://www.kaggle.com/code/dhruvgupta37/homegaurd"
            target="_blank"
          >
            SourceCode
          </a>
        </h5>
      </i>
      <ul>
        <li>
          Implemented a machine learning model using Python, Scikit-learn,
          Matplotlib, and Seaborn for the "Home Guard" project.
        </li>
        <li>
          The model is trained to detect the presence of an intruder in a house
          based on CO2 levels, humidity, and sound instead of light.
        </li>
        <li>
          The focus on non-traditional indicators enhances security measures for
          homeowners.
        </li>
      </ul>
    </div>
  );
};

export default HomeGaurd;
