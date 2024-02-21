import './dropin.css'; // Assuming your CSS file is named App.css
import { useState } from 'react';

const DropInText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={isVisible ? 'drop-in' : ''}>
      <h1>I'm <br/>Dhruv Gupta</h1>
      <h4>Loren</h4>
    </div>
  );
};

export default DropInText;
