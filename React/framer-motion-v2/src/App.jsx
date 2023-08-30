import { useEffect, useState } from 'react';
import Message from './one';
import { AppStyled, MessageBox } from './app.styled';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [messageOne, setMessageOne] = useState(false);
  const [messageTwo, setMessageTwo] = useState(true);

  const [keyOne, setKeyOne] = useState(0);
  const [keyTwo, setKeyTwo] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageOne(!messageOne);
      setMessageTwo(!messageTwo);
      setKeyOne(prevKey => prevKey + 2); // Ensure unique keys
      setKeyTwo(prevKey => prevKey + 2); // Ensure unique keys
    }, 4000);

    return () => clearInterval(interval); // Cleanup
  }, [messageOne, messageTwo]);

  return (
    <>
      <AppStyled>
        <MessageBox>
          <AnimatePresence>
            {messageOne && <Message message={"hey"} key={keyOne}/>}
            {messageTwo && <Message message={"hello"} key={keyTwo}/>}
          </AnimatePresence>
        </MessageBox>
      </AppStyled>      
    </>
  );
}

export default App;
