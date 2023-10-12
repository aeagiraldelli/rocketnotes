import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 16px;
  margin-bottom: 8px;

  border-radius: 10px;
  border: none;
  outline: none;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
