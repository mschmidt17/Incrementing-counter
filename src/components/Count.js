import { useEffect, useState } from 'react';
import React from 'react';



const Count = ({ data }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      updateCounter();
    }, 5);

  }, [count]);

  const updateCounter = () => {
    const { counts } = data;
    const increment = counts / 200;

    if (count < counts) {
      setCount(Math.ceil(count + increment));
    } else {
      setCount(counts);
    }
  };

  return (
    <div className="counter-container">
      {data.iconTag}
      <div className="counter">{count.toString()}</div>
      <span className='text'>{data.text}</span>
    </div>
  );
};

export default Count;