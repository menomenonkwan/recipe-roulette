import { useState } from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { getAvatar } from '../assets/helpers';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    "& .MuiCardContent-root": {
      background: '#f5f5f5',
      padding: '16px 8px',
      width: '100%',
      flex: 1,
    },
    "& .MuiCardHeader-title": {
      color: 'var(--purple)',
      fontFamily: 'inherit',
      fontSize: '1.15rem',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'var(--green)',
    fontFamily: 'inherit',
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2px',
  },
  listItem: {
    fontSize: '.75rem',
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '0.25rem .5rem',
  },
  ingredients: {
    background: 'red',
  },
  btn: {
    textAlign: 'center',
    margin: '1rem 0',
  },
  bx: {
    padding: '1rem',
  }
}));

const StyledLink = styled.a`
  color: white;
  background: var(--brown);
  margin: auto;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    -webkit-box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.35);
            box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.35);
  }
`;

export default function RecipeCard({ recipe }) {
  const { label, healthLabels, image, ingredientLines, url } = recipe;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState('action');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setColor(color === 'action' ? 'secondary' : 'action');
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {getAvatar(label)}
          </Avatar>
        }
        action={
          <a href={url} target="_blank" rel="noreferrer">
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
          </a>
        }
        title={label}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.list} variant="body2" color="textSecondary" component="div">
          {healthLabels?.map((label, i) => (
            <Typography key={i} className={classes.listItem} variant="body2" color="textSecondary" component="p">
              {label}
            </Typography>
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon color={color} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.ingredients}>
          <Typography paragraph>Ingredients:</Typography>
          <Box className={classes.bx}>
            {ingredientLines.map((ingredient, i) => (
              <Typography key={i} paragraph>{ingredient}</Typography>
            ))}
          </Box>
        </CardContent>
        <CardContent className={classes.btn}>
          <StyledLink href={url} target="_blank" rel="noreferrer">Get Recipe</StyledLink>
        </CardContent>
      </Collapse>
    </Card>
  );
}