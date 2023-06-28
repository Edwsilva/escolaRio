import styled from 'styled-components'

export const ContainerHeader = styled.header`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
   

    h1 {
      font-weight: 400;
      font-size: 32px;
      margin-bottom: 8px;
    }

    small {
      font-size: 16px;
    }

    .container-user-info {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
`;

