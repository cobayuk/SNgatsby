import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BrandLogo from '@assets/logo/brand.svg';
import { COLORS } from "@styles/constants";
import UserIcon from "@assets/svg/user.svg";
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

const LoginIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    marginTop: '50px',
    backgroundColor: `${COLORS.white}`
  },
  logoBrand: {
    width: 'auto',
    height: '35px',
    display: 'flex',
    alignItems: 'align-start'
  },
  toolbar: {
    padding: 0,
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 2),
    fontSize: '14px',
    textDecoration: 'none',
    color: '#000',
    fontFamily: `Oxygen, sans-serif`,
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  cardHeader: {
    backgroundColor: `${COLORS.white}`
  },
  buttonLogin: {
    background: 'linear-gradient(180deg, #F1D88A 0%, rgba(244, 225, 165, 0.770833) 0.01%, rgba(246, 231, 182, 0.62235) 0.02%, rgba(255, 255, 255, 0) 100%), #E2B013',
    borderRadius: '10px',
    color: '#fff',
    width: '104px',
    height: '36px',
    border: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Oxygen',
    fontSize: '15px',
    fontWeight: 'bold',
  }
}));

const Header = () => {

  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <img src={BrandLogo} alt="brand-logo" className={classes.logoBrand}/>
        </Typography>
        <nav>
          <Button
            onClick={() => scrollTo('#itworks')}
            className={classes.link}
          >
            Cara Pesan
          </Button>
          <Button
            onClick={() => scrollTo('#pricing')}
            className={classes.link}
          >
            Paket Harga
          </Button>
          <Button
            onClick={() => scrollTo('#howitworks')}
            className={classes.link}
          >
            Tentang Kami
          </Button>
          <Link
            to="/demo/portofolio"
            className={classes.link}
          >
            Demo
          </Link>
        </nav>
        <Button href="/client/login">
          <LoginIcon src={UserIcon} alt="user-icon"/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
