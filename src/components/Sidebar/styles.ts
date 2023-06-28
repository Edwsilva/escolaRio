import { styled } from 'styled-components';

export const Container = styled.aside`
  // background: ${(props) => props.theme.main};
  //background: ${(props) => props.theme.colors.purple[700]} antes de tipar
  // A tipagem está relacionada com o arquivo styled.d.ts
  background: ${({theme}) => theme.colors.black[900]};

  width: 80px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;

  .logo {
    font-size: 32px;
    font-weight: 700;

    span {
      font-weight: 200;
   
    }
  }

  .container-navbar {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 48px;
  }

  .container-footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 48px;
  }
`;

export const Box = styled.div<{ $background?: string }>({
  background: '#BF4F74',
  // background: ${(props) => props.theme.$background},
  height: '50px',
  width: '50px',
});

// Adapting based on props
export const PropsBox = styled.div((props) => ({
  background: props.$background,
  height: '50px',
  width: '50px',
}));

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;
/* const theme = {
  // Paleta de cores - https://smart-swatch.netlify.app
  main: "mediumseagreen",

  colors: {
    black: {
      900: '#121212',
      800: '#262626',
      400: '#a6a6a6',
      200: '#BFBFBF',
      50: '#F8F0F2',
    }, */
