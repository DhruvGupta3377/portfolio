import React from "react";

const RapidCheckout = () => {
  return (
    <div className="content">
      <i>
        <h4>
          Technologies Used: Python, Django Rest Framework, ReactJS, JavaScript,
          MongoDB, SQLite, HTML, CSS
        </h4>
        <h5>
          <a href="https://github.com/DhruvGupta3377/codex" target="_blank">
            SourceCode
          </a>
        </h5>
      </i>
      <ul>
        <li>
          Developed a solution for optimizing the shopping experience in
          large shopping complexes.
        </li>
        <li>
          A service that provides the real-time location of items in the
          complex, facilitating efficient navigation for customers.
        </li>
        <li>
          The platform features a self-checkout service to alleviate congestion
          during peak hours.
        </li>
        <li>
          Customers can use the built-in scanner on the website for
          automatically identifying products through barcode.
        </li>
        <li>
          The admin dashboard enables store owners to manage inventory
          seamlessly.
        </li>
        <li>JWT tokens are used for easy authorization and authentication.</li>
      </ul>
    </div>
  );
};

export default RapidCheckout;
