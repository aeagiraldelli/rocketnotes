import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;

  input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
