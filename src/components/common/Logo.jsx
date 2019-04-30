import React from 'react';
import styled from '@emotion/styled';


const LogoContainer = styled.div`
    text-align: center;
    width: 91px;
    height: 51px;
    margin: 21px auto auto auto;
`;

const Logo = (props) => {
    return (
        <LogoContainer className="community-logo">
            <img src={props.logo} alt="company logo"/>
        </LogoContainer>
    );
}

export default Logo;
