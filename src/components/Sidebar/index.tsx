import React from 'react';
import { Container, Box, PropsBox, Title, Wrapper } from './styles';
//import book from '../../assets/icons/book.svg'
import SettingsIcon from './icons/SettingsIcon';
import LogoutIcon from './icons/LogoutIcon';
import DashboardIcon from './icons/DashboardIcon';

// Create a Title component that'll render an <h1> tag with some styles

export default function Sidebar() {
  return (
    <Container>
      <div className='container-navbar'>
        <strong className='logo'>
          W<span>p</span>
        </strong>
        <div>
          <DashboardIcon />
        </div>
      </div>
      {/* importanto o SVG como uma imagem - Ela ficará fixa (não altero cor)*/}
      {/* <img src={book} /> */}

      <div className='container-footer'>
        <SettingsIcon />
        <LogoutIcon />
      </div>
    </Container>
  );
}
{
  /* <Box $background="green" />
<PropsBox $background="green" />
<Wrapper>
  <Title>Hello World!</Title>
</Wrapper> */
}
