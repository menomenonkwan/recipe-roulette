import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import OptionGrid from './components/OptionGrid';
import RecipeGrid from './components/RecipeGrid';
import { AnimatePresence, motion } from 'framer-motion';

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
`;

const StyledBtn = styled(motion.button)`
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
  text-transform: uppercase;
  background: var(--green);
  margin: 2rem auto;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 2px 3px rgba(0,0,0,0.5);
  border: 2px solid var(--purple);
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState(null);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState(null);
  const [current, setCurrent] = useState(0);
  const [more, setMore] = useState(false);

  useEffect(() => {
    if(genre) {
      getRecipes();
    }
    if(query) {
      getRecipes();
    }
  }, [genre, query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=${current}&to=${current + 10}&${genre}`
    );
    const data = await response.json();

    setRecipes(data.hits);
    setMore(data.more);
    setCurrent(data.to);
  }

  const handleLoadMore = (e) => {
    getRecipes();
  }

  return (
    <>
    <GlobalStyle />
      <Header 
        setRecipes={setRecipes}
        setGenre={setGenre}
        setQuery={setQuery} 
        setCurrent={setCurrent}
        setMore={setMore}
      />     
      <StyledApp>
        <AnimatePresence>
          {!recipes && <OptionGrid setGenre={setGenre} setCurrent={setCurrent}/>}
        </AnimatePresence>
        <AnimatePresence>
          {recipes && <RecipeGrid recipes={recipes}/>}
        </AnimatePresence>
        {more && 
          <StyledBtn
            onClick={handleLoadMore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >load more</StyledBtn>
        }
      </StyledApp>
      <Footer />
    </>
  );
}

export default App;
