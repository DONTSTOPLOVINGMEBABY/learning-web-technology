import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CenterMessage } from './app.styled';
  
const messageVariants = {
    initial: { 
      y: '120%', 
      opacity: .5,
      transition: { duration: 1, type: 'tween', ease: 'easeInOut' }
    },
    animate: { 
      y: '50%', 
      opacity: 1,
      transition: { duration: 4, type: 'tween', ease: 'easeInOut' }
    },
    exit: { 
      y: '-120%', 
      opacity: .5,
      transition: { duration: 4, type: 'tween', ease: [0.42, 0, 0.58, 1] } // cubic-bezier easing
    }
  };

const Message = ({ message }) => {
  return (
    <motion.div
      key={message}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={messageVariants}
      style={{
        position: 'absolute',
        bottom: '0',
        height: '100%', 
        width : '100%', 
      }}
    >
        <CenterMessage>
      {message}
      </CenterMessage>
    </motion.div>
  );
};

export default Message;