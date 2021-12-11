import styled from 'styled-components';
import { Link } from "gatsby";

export const ImageNotFound = styled.img`
    width: 100%;
`;

export const DescriptionContainer = styled.div`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    h1 {
        line-height: 24px;
        font-size: 32px;
    }
    p {
        font-size: 14px;
        line-height: 16px;
    }
    margin-top: 50px;
    padding: 15px;
`;

export const LinkCustom = styled(Link)`
    text-decoration: none;
    color: #000000;
    span {
        background-color: #E2B62E;
        border-radius: 50px;
        padding: 13px 25px;
        margin-bottom: 20px;
        color: #ffffff;
    }
    margin: 20px 0px;
    display: inline-block;
`;