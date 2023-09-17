import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;
  }

  .back-icon {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 28px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -100px auto 0;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Avatar = styled.div`
  --size: 186px;
  position: relative;
  margin: 0 auto 32px;

  width: var(--size);
  height: var(--size);

  img {
    width: var(--size);
    border-radius: 50%;
  }

  label {
    --size: 48px;
    width: var(--size);
    height: var(--size);

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    input {
      display: none;
    }

    .choose-icon {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
