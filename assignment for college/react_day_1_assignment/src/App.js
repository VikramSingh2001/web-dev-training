import { useState } from 'react';
import './App.css';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';

function App() {
  const [color, setColor] = useState('#000000');
  return (
    <div>
      <Question1 name ={'MAHENDRA SINGH'}/>
      <Question2 name={'mahendra singh'} age={22} location={'udaipur rajasthan'}/>
      <Question3 status={"success"}/>
      <Question4/>
      <Question5 likeCount={'5'}/>
      <Question6 start={10}/>
      <Question7 onColorChange={setColor}/>
      <p>Selected Color: {color}</p>
      <Question8/>
      <Question9/>
    </div>
  );
}

export default App;
