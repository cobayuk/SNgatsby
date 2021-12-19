import styled from 'styled-components';
import "@fontsource/crimson-text";
import "@fontsource/dm-serif-display";
import "@fontsource/overlock";

export const HeroContent = styled.div`
    width: 100%;
    padding: 64px 0px 48px;
    @media (max-width: 425px) {
        padding: 64px 20px 48px;
    }
    z-index: 2;
    overflow: hidden;
    position: relative;
    margin-top: 16px;
`;

export const InnerContent = styled.div`
    left: 0;
    width: 100%;
    top: 0;
    height: 0;
    z-index: -1;
    position: absolute;
    border-color: #F1EDEA transparent transparent #F1EDEA;
    border-style: solid;
`;

export const Title = styled.h1`
    font-size: 30px;
    @media (max-width:425px) {
        font-size: 24px;
    }
    font-style: normal;
    font-family: Oxygen;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 0.35em;
    color: rgba(0, 0, 0, 0.87);
    text-align: center;
    letter-spacing: -0.01562em;
`;

export const Description = styled.p`
    margin: 0 auto;
    display: flex;
    padding: 0px 16px;
    font-size: 15px;
    max-width: 768px;
    font-style: normal;
    font-family: Oxygen;
    font-weight: 500;
    text-align: center;
`;

export const ThemeCard = styled.div`
    border: 1px solid #DBDBDE;
    box-sizing: border-box;
    border-radius: 15px;
    &:hover, &:focus {
        background: #FFFFFF;
        border: none;
        box-sizing: border-box;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
        height: 100%;
    }
`;

export const ThemeImage = styled.img`
    max-width: 100%;
    margin: 0 auto;
    display: block;
    @media (max-width: 425px) {
        padding: 30px 30px 0px 30px;
    }
    @media (min-width: 768px) {
        padding: 30px 0px 0px;
    }
`;

export const ThemeName = styled.h3`
    font-family: Crimson Text;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 425px) {
        font-size: 12px;
        line-height: 14px;
    }
    @media (max-width: 320px) {
        padding: 0px 25px;
    }
    line-height: 68px;
    color: #000000;
    text-align: center;
    margin : 10px 0px;
`;

export const CategoryContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
    margin-bottom: 100px;
    @media (max-width: 959px) {
        flex-wrap: wrap;
    }
`;

export const FilterView = styled.div`
    margin-right: 40px;
    @media (max-width: 959px) {
        order: 1;
        margin-right: 15px;
    }
`;

export const DrowdownSort = styled.span`
    display: inline-block;
    position: relative;
    white-space: nowrap;
`;

export const DropdownLink = styled.a`
    min-width: 115px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    transition: color 200ms ease;
    color: #6e6d7a;
    border: none;
    border-radius: 8px;
    background: #f3f3f4;
    height: 40px;
    padding: 10px 16px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    text-transform: capitalize;
`;

export const DropdownImage = styled.img`
    position: absolute;
    top: 40%;
    right: 15px;
    width: 10px;
    height: 10px;
    margin: 0;
`;

export const DropdownOptions = styled.div`
    &.active {
        display: block;
        z-index: 2;
    }
    display: none;
    z-index: 1;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    min-width: 180px;
    margin-top: 4px;
    overflow: auto;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
    ul {
        padding: 8px 0;
        list-style: none;
    }
    li.active {
        a {
            color: #E2B62E;
            font-weight: 500;
        }
    }
    a {
        display: block;
        padding: 8px 15px;
        color: #6e6d7a;
        font-size: 13px;
        &:hover, &:focus {
            background-color: #e7e7e9;
        }
    }
`;

export const DropdownFilterOptions = styled.div`
    &.active {
        display: block;
        z-index: 2;
    }
    display: none;
    z-index: 1;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 180px;
    margin-top: 4px;
    overflow: auto;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
    ul {
        padding: 8px 0;
        list-style: none;
    }
    li.active {
        a {
            color: #E2B62E;
            font-weight: 500;
        }
    }
    a {
        display: block;
        padding: 8px 15px;
        color: #6e6d7a;
        font-size: 13px;
        &:hover, &:focus {
            background-color: #e7e7e9;
        }
    }
`;

export const FilterSetting = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 0 0 110px;
    flex: 0 0 110px;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    @media (max-width: 959px) {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        -ms-flex-order: 2;
        order: 2;
    }
`;

export const FilterCategory = styled.div`
    position: relative;
    text-align: center;
    overflow-x: auto;
    overflow-y: hidden;
    @media (max-width: 959px) {
        order: 3;
        width: calc(100% + 30px);
        margin: 15px -15px 0;
        padding: 15px 0 0;
        border-top: 1px solid #f3f3f4;
    }
`;

export const FilterButton = styled.a`
    background: #f3f3f4;
    box-shadow: none;
    color: #0d0c22;
    border: none;
    border-radius: 8px;
    height: 40px;
    padding: 10px 16px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
`;

export const FilterImage = styled.img`
    display: inline-block;
    width: 13px;
    margin-right: 4px;
`;

export const Category = styled.ul`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    overflow-y: scroll;
    padding: 0 2px;
    white-space: nowrap;
    scroll-behavior: smooth;
    li {
        display: inline-block;
        vertical-align: baseline;
        border: 1px solid #DBDBDE;
        padding: 8px 12px;
        border-radius: 4px;
        margin-right: 11px;
        &:hover, &:focus {
            background: #DBDBDE;
        }
        &.active {
            background: #DBDBDE;
            border: 1px solid #DBDBDE;
            box-sizing: border-box;
            border-radius: 4px;
        }
    }
`;