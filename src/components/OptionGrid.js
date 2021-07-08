import styled from 'styled-components';
import { motion } from 'framer-motion';
import mealTypes from "../assets/meal-types";

const StyledGrid = styled(motion.div)`
  max-width: 90%;
  width: 750px;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 1rem;
`;

const StyledButton = styled(motion.button)`
  background: var(--brown);
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-family: inherit;
  color: var(--tan);
  border-radius: 0.25rem;
  border: 1px solid var(--brown);
  -webkit-box-shadow: 0 2px 3px rgba(0,0,0,0.3);
          box-shadow: 0 2px 3px rgba(0,0,0,0.3);
  &:hover {
      background: rgba(0,0,0,0.3);
      cursor: pointer;
    }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,  
    } 
  },
  exit: {
    opacity: 0,    
  }
}

const OptionGrid = ({ setGenre, setCurrent }) => {

  const handleOptionClick = (option) => {
    setCurrent(0);
    setGenre(`&${option.type}=${option.name}`);
  }

  return (
    <StyledGrid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"      
    >
      {mealTypes.map(type => (
        <StyledButton 
          key={type.id} 
          onClick={() => handleOptionClick(type)}
          whileHover={{ 
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          {type.name}
        </StyledButton>
      ))}
    </StyledGrid>
  );
}
 
export default OptionGrid;