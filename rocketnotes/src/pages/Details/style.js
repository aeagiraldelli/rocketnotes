import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;
  li {
    margin-top: 12px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const ButtonDeleteNote = styled.span`
  align-self: end;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  padding-top: 64px;
`;

export const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-top: 16px;
  text-align: justify;
`;
