import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  background-color: #4c53dc;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const ImageWrapper = styled.img`
  text-align: center;
  object-fit: cover;
  width: 440px;
  height: 440px;
  @media(max-width: 425px) {
    width: 100%;
    height: 100%;
  }
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  padding: 0px 20px 20px 20px;
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 12px;
  line-height: 18px;
  padding: 0px 30px;
`;

export const Footer = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
`;

export const InstagramIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;

export const FacebookIcon = styled.img`
  width: 30px;
  height: 30px;
`;
