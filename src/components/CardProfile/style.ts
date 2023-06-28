import styled from 'styled-components';

export const ContainerCardProfile = styled.div<{background: string}>`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 16px;

  width: 170px;
  
  background-color: ${({ theme }) => theme.colors.black[900]};
  border-radius: 16px;

  small {
    font-size: 14px;
  }
  img {
    width: 24px;
  }

  .container-image {
    width: 50px;
    height: 50px;

    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    //theme.colors.blue[400]}20 o 20 é a opacidade da cor
    //background-color: ${({ theme }) => theme.colors.blue[400]}20;
    background-color: ${(props) =>props.background}20;
  }
`;
