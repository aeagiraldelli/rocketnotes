import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.ORANGE};
  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Menu = styled.div`
  grid-area: menu;
  padding-top: 64px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Search = styled.div`
  grid-area: search;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const NewNote = styled.button`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
