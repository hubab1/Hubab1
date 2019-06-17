import {
    css
} from 'emotion';
import styled from '@emotion/styled';

export const Subtitle = styled.small`
    color: #818797;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
`

export const formContent = css`
    padding: 10px;
    margin: auto;
    max-width: 500px;
`

export const TextReader = styled.div`
    text-align: left;
    background-color: rgba(238,238,238,0.4);
    max-height: 350px;
    overflow: auto;
    padding: 20px;
    color: #454B57;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
`

export const ErrorDetail = styled.div`
    color: #f44336;
    text-align: left;
    font-size: 0.75rem;
    margin: 8px 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1em;
`

export const Logo = styled.img`
    max-width: 90px;
    max-height: 50px;
`;

export const Bold = styled.span`
    font-weight: bold;
`

export const H1 = styled.h1`
    font-weight:600;
    font-size:23px;
    margin: 0 auto;
`

export const H2 = styled.h2`
    font-weight: 400;
    font-size: 20px;
`

export const H3 = styled.h3`
    font-weight: 400;
    line-height: 28px;
    font-size: 18px;
    color: #454B57;
    margin: 0;
`

export const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 0;
`

export const CenterAlign = styled.div`
    text-align: center;
    margin-top: 200px;
`

export const BigText = styled.div`
    font-size: 50px;
    font-weight: bold;
` 

export const link = css`
display: inline-block;
margin-bottom: 20px;
color: #2B44FF;
`

export const LinkButton = styled.button`
    background:none!important;
    color:#2B44FF;
    border:none; 
    padding:0!important;
    font: inherit;
    cursor: pointer;
    text-decoration: underline;
    label: link-button;
`
LinkButton.displayName = 'LinkButton';


export const linkRoot = css`
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
    text-decoration: none;
    color: black;
`
