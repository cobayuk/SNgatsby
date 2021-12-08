import styled from 'styled-components';
import "@fontsource/oxygen";
import "@fontsource/open-sans/";
import AssetHeader from "@assets/photos/agree/footer.jpg";


export const Footer = styled.div`
    width: 100vw;
    height: 110px;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.2), 
            rgba(0, 0, 0, 0.9)
        ),
        url(${AssetHeader});
    }
    background-size: cover;
    position: relative;
    background-position: 50% 20%;
    margin-top: -40px;
    @media (min-width: 768px) {
        background-position: 50% 20%;
        margin-top: -30px;
    }
    text-align: center;
    z-index: 99;
`;

export const Hashtag = styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    display: inline-block;
    padding-top: 2em;
}
`;

export const WrapperWatermark = styled.div`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    display: block;
    margin: 16px 0px;
    a {
        text-decoration: none;
        color: #E2B62E;
    }
`;