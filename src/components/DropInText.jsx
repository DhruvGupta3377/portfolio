import './dropin.css'; // Assuming your CSS file is named App.css
import { useState } from 'react';

const DropInText = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className={isVisible ? 'drop-in' : ''}>
      <h1>Hello <br/>I'm <br/>Dhruv Gupta</h1>
      <div className = 'aboutme'>
      I am a third year student at Thapar Institute of Engineering and Technology.<br/>
      I enjoy working of fullstack applications, windows application and machine learning projects.<br/> 
      </div>
      </div>
  );
};

export default DropInText;
