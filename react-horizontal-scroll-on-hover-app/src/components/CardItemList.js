import styled from '@emotion/styled';

const StyledCardItemList = styled.ul`
  height: 100%;
  list-style: none;
`;

const CardItemList = ({children}) => {
  return <StyledCardItemList>{children}</StyledCardItemList>;
};

export {CardItemList};
