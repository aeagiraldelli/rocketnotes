import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: ${({ theme, $isactive }) => {
    if ($isactive == 'true') {
      return theme.COLORS.ORANGE;
    } else {
      return theme.COLORS.GRAY_100;
    }
  }};
`;
