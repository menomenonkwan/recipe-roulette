import { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const StyledHeader = styled.header`
  text-align: center;
  color: white;
  padding: 1.5rem;
  h1 {
    font-size: 4.5rem;
    color: var(--green);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
    &:hover {
      cursor: pointer;
    }
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    margin: '2rem auto',
    padding: '0.25rem 0.5rem',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '95%',
    width: 500,
  },
  iconButton: {
    padding: 10,
    background: 'rgba(0,0,0,0.5)',
    color: 'var(--green)',
    marginLeft: '0.5rem',
  },
}));

const CssTextField = withStyles({
  root: {
    background: 'rgba(0,0,0,0.5)',
    borderRadius: '0.5rem',
    width: 500,
    "& .MuiInputBase-root": {
      color: 'white',
      fontFamily: 'inherit',
      fontSize: '1.15rem',
    },
    "& .MuiFormLabel-root": {
      color: 'var(--green)',
      fontFamily: 'inherit',
    },
    '& label.Mui-focused': {
      color: 'var(--green)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '0.5rem',
        borderColor: 'var(--green)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--yellow)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--green)',
      },
    },
  },
})(TextField);

const Header = ({ setRecipes, setGenre, setQuery, setCurrent, setMore }) => {
  const [search, setSearch] = useState('');
  const classes = useStyles();

  const handleClick = () => {
    setCurrent(0);
    setMore(false);
    setRecipes(null);
  }

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setCurrent(0);
    setGenre(null);
    setQuery(search);
    setSearch('');
  }

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <StyledHeader>
      <h1 onClick={handleClick}>Recipe Roulette</h1>
      <p>A nifty recipe search for the hungry</p>
      <form className={classes.root} noValidate autoComplete="off"
        onSubmit={handleSubmitQuery}
      >
        <CssTextField
          className={classes.margin}
          label="Search..."
          variant="outlined"
          id="custom-css-outlined-input"
          value={search}
          onChange={handleSearch}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </StyledHeader>
  );
}
 
export default Header;