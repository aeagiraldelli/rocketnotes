import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  margin-bottom: 30px;
  border-radius: 4px;
  padding: 22px;

  h1 {
    flex: 1;
    text-align: left;

    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  footer {
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
`;
