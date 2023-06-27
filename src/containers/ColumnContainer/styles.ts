import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  //background-color: red;

  .header-container {
    //background-color: red;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-end;
    h1 {
      font-weight: 700;
      font-size: 32px;
    }

    small {
      font-weight: 400;
      font-size: 24px;
    }
  }
  .container-cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;
