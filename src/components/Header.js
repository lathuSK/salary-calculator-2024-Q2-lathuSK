import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #007BFF;
  color: white;
  text-align: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Salary Calculator: Your Ultimate Wage Companion!</h1>
        </HeaderContainer>
    );
};

export default Header;
