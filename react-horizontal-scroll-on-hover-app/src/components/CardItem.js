import styled from '@emotion/styled';

const StyledCardItem = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 0 5px 0 0;
`;

const StyledCardItemImage = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`;

const CardItem = ({children}) => {
  return (
    <StyledCardItem>
      <img
        src="https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif"
        alt={'giphy'}
      />
    </StyledCardItem>
  );
};

export {CardItem};
