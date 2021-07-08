import styled from 'styled-components';
import { motion } from 'framer-motion';
import RecipeCard from "./RecipeCard";

const StyledGrid = styled(motion.div)`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  -webkit-box-align: start;
  -ms-flex-align: start;
          align-items: flex-start;
  gap: 4rem 1rem;
  margin: auto;
  max-width: 90%;
  justify-items: center;
`;

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      type: 'tween',
      stiffness: 110,
      mass: 0.5,
      damping: 9,
      duration: 1.25,    
    } 
  },
}


const RecipeGrid = ({ recipes }) => {

  return (  
    <StyledGrid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"  
    >
      {recipes.map((recipe, i) => (
        <RecipeCard 
          key={i} 
          recipe={recipe.recipe}
        />
      ))}
    </StyledGrid>
  );
}
 
export default RecipeGrid;