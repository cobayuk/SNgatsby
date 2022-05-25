import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Grid } from '@material-ui/core';
import AssetHeader from "@assets/photos/wibiadelia/cover.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = styled(Box)`
    width: 100vw;
    height: 100vh;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.9)
        ),
        url(${AssetHeader});
    }
    background-size: cover;
    position: relative;
    background-position: 44%;
    @media (min-width: 768px) {
        background-position: 35% 60%;
    }
    text-align: center;
`;

const WrapperInvitation = styled(Box)`
    top: 25%;
    position: relative;
`;

const OpenButton = styled.button`
    appearance: none;
    background-color: transparent;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    margin-top: 50px;
    &:hover {
      color: #fff;
      background-color: #a93434;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
      border: 2px solid transparent;
    }
    &:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`;

const Invite = styled.p`
    font-family: Crimson Text;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 15px;
    }
    color: white;
`;

const Title = styled.p`
    font-family: Questrial;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 37px;
    letter-spacing: 0.3em;
    color: white;
    margin: 35px 0px;
    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 15px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 24px;
        line-height: 24px;
    }
`;

const ResponsiveGrid = styled(Grid)`
    @media (max-width: 767px) {
        padding: 0 !important;
    }
`;

const Groom = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 24px;
    margin: 25px 0px 50px 0px;
    @media (max-width: 767px) {
        font-size: 54px;
        line-height: 12px;
        text-align: center;
        margin: 25px 0px 25px 0px;
    }
    @media only screen and (min-width: 736px) and (max-width: 737px) {
        margin-top: 30px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 65px;
        line-height: 24px;
        text-align: center;
        margin-top: 20px;
    }
    color: white;
    text-align: right;
`;

const Ampersand = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 24px;
    margin: 10px 0px;
    @media (max-width: 767px) {
        font-size: 36px;
        line-height: 36px;
        text-align: center;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 65px;
        line-height: 24px;
        margin: -20px 0px;
    }
    @media (min-width: 1024px) {
      margin: 30px 0px;
    }
    color: white;
`;

const Bride = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 24px;
    margin: 25px 0px 50px 0px;
    @media (max-width: 767px) {
        font-size: 54px;
        line-height: 12px;
        text-align: center;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 65px;
        line-height: 24px;
        text-align: center;
    }
    color: white;
    text-align: left;
`;

const isBrowser = typeof window !== "undefined"

const Cover = ({ onClick, action }) => {

  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    if (isBrowser) {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      setKeyword(params.get('to'))
    }
  }, []);

  useEffect(() => {
      AOS.init({
          duration: 1700, // values from 0 to 3000, with step 50ms
          once: false, // whether animation should happen only once - while scrolling down
      });
  }, []);

  return (
    <>
      <Header>
        <WrapperInvitation data-aos="fade-in">
            <Invite>Dear&nbsp;
              {keyword === undefined || keyword === null
                ? "You"
                : keyword
              },
              &nbsp;you're invited to
            </Invite>
            <Title>THE WEDDING OF</Title>
            <Grid container spacing={2}>
              <ResponsiveGrid item xs={12} md={5}>
                  <Groom>
                      Wibi
                  </Groom>
              </ResponsiveGrid>
              <ResponsiveGrid item xs={12} md={2}>
                  <Ampersand>
                      &#38;
                  </Ampersand>
              </ResponsiveGrid>
              <ResponsiveGrid item xs={12} md={5}>
                  <Bride>
                      Adelia
                  </Bride>
              </ResponsiveGrid>
          </Grid>

          <OpenButton onClick={onClick}>{action}</OpenButton>

        </WrapperInvitation>
      </Header>


    </>
  )
}

export default Cover
