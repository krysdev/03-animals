import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import './AnimalShow.css';

const svgMap = {
  // bird: bird   (key: value)
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className='animal-show' onClick={handleClick}>
      {/*       svgMap[ object key ]          */}
      <img className='animal' src={svgMap[type]} alt="animal" />
      <img className='heart' src={heart} alt="heart" style={{ width: 10 + 10 * clicks }} />
    </div>
  );
}

export default AnimalShow;
