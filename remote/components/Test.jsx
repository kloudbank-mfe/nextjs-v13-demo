import { useState } from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handle = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        style={{
          width: '200px',
          height: '50px',
        }}
        onClick={handle}
      >
      Test {(isOpen === false)?'OPEN':'CLOSE'}
      </button>
      <div
        style={{
          background: 'cadetblue',
          width: '100%',
          height: '100px',
          color: 'white',
          textAlign: 'center',
          display: (isOpen === false)?'none':'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
        }}
      >
        This component is from the Remote NextJS App, hosted at port 3001
      </div>
    </>
  );
};

export default Test;
