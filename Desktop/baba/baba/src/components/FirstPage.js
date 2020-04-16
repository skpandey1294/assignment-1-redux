import React from 'react';

import styleSheet from './style';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import BreakLines from './BreakLines';

import BroughtToYouBy from './BroughtToYouBy';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function FirstPage() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h1 style={styleSheet.fortuneTitle}> CHECK YOUR FORTUNE </h1>
      </div>
      <img src={require('../img/FirstPage.gif')} alt="Sanitizer Baba" />
      <BreakLines />
      <Link to="/detail" style={{ textDecoration: 'none' }}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.margin}
        >
          GET STARTED
        </Button>
      </Link>
      <BreakLines />
      <BreakLines />
      <BroughtToYouBy styles={styleSheet.broughtToYouBy} />
      <BreakLines />
    </div>
  );
}

export default FirstPage;
