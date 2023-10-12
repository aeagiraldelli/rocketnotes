import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, $isnew }) =>
    $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px 0;

  button {
    border: none;
    background: none;
    padding: 16px;
    font-size: 20px;
  }

  .btn-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .btn-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  input {
    width: 100%;
    height: 56px;
    padding: 12px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;