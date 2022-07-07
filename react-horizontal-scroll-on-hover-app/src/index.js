import React, {useRef, useState, useMemo, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import styled from '@emotion/styled';
import {CardItemList} from './components/CardItemList';
import {CardItem} from './components/CardItem';

import {useRaf} from './hooks/useRaf';

const StyledCardContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  position: relative;
  overflow-x: scroll;
  white-space: nowrap;
`;

let scroll = 0;
function App() {
  const containerRef = useRef(null);

  useRaf({ref: containerRef}, ({elapsedTime, maxScrollWidth, speed}) => {
    if (speed !== 0) {
      if (scroll < 0) {
        scroll = 0;
      }
      if (scroll > maxScrollWidth) {
        scroll = maxScrollWidth;
      }
      scroll += speed / 5;
      scroll += speed / 2;
      containerRef.current.scrollTo(scroll, 0);
    }
  });

  return (
    <StyledCardContainer ref={containerRef}>
      <CardItemList>
        {[...Array(10)].map((_, index) => {
          return <CardItem key={index}></CardItem>;
        })}
      </CardItemList>
    </StyledCardContainer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
