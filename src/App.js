import React from 'react';
import Cabinet from './components/Cabinet/Cabinet';
import styled from 'styled-components';
import './App.css';

const Title = styled.div`
  background: #FC9EC2;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    margin: 0;
    font-weight: bold;
    font-size: 5rem;
    color: white;
    text-shadow: -0.25rem 0.25rem #E95B90
  }
`


function App() {
  return (
    <div className="App">
      <Title>
        <h1>#TeamWorkingGirl</h1>
      </Title>
      <Cabinet/>
    </div>
  );
}

export default App;
