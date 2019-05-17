import React, { useState, useEffect } from "react";
import AddToCabinet from '../AddToCabinet/AddToCabinet';
import Generator from '../Generator/Generator'
import styled from 'styled-components';

const Children = styled.div`
    display: flex;
    justify-content: space-around;
`

const Cabinet = () => {
  return (
    <Children>
      <AddToCabinet/>
      <Generator/>
    </Children>
  );
};

export default Cabinet;
