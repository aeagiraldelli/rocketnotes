import styled from 'styled-components';
import bgImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .button-text {
    margin-top: 30px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
  opacity: 0.5;
`;
