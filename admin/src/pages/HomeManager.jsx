import React from 'react';
import styled, { keyframes } from 'styled-components';

const HomeManager = () => {
  return (
    <Wrapper>
      <div className="hello">
        Welcome to the foodstore management
      </div>
    </Wrapper>
  );
};

const zoomInAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const zoomOutAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .hello {
    font-size: 3rem;
    background: linear-gradient(90deg, #4A90E2, #FF6C6C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${zoomInAnimation} 2s ease infinite alternate;
  }
`;

export default HomeManager;
