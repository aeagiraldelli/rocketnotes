import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding: 64px 64px 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
