import Sidebar from '../../components/Sidebar';
import { Container, Main } from './styles';
import notifications from '../../assets/icons/notification.svg';
import CardPratice from '../../components/CardPratice';
import { useTheme } from 'styled-components';
import headset from '../../assets/icons/headset.svg';
import book from '../../assets/icons/book.svg';
import mic from '../../assets/icons/mic.svg';
import pencil from '../../assets/icons/pencil.svg';

export default function Home() {
  // inport global themes
  const theme = useTheme();

  const cardsPratice = [
    {
      title: 'Listening',
      icon: <img src={headset} alt="headset" />,
      color: theme.colors.blue[400],
    },
    {
      title: 'Dictionary',
      icon: <img src={book} alt="book" />,
      color: theme.colors.red[300],
    },
    {
      title: 'Gramar',
      icon: <img src={pencil} alt="pencil" />,
      color: theme.colors.green[400],
    },
    {
      title: 'Pronunciation',
      icon: <img src={mic} alt="mic" />,
      color: theme.colors.orange[400],
    },
  ];

  return (
    <Container>
      <Sidebar />
      <Main>
        <header>
          <div>
            <h1>Hello, Edwilson da Silva</h1>
            <small>Good see you here!</small>
          </div>
          <div className="container-user-info">
            <img src={notifications} alt="notifications" />
            <div>Avatar</div>
          </div>
        </header>

        <section className="container-section">
          <div className="header-section">
            <h1>Knowledge base</h1>
            <small>Practice your knowledge base.</small>
          </div>

          <div className="container-cards">
            {cardsPratice.map((card) => (
              <CardPratice
                key={card.title}
                title={card.title}
                icon={card.icon}
                color={card.color}
              />
            ))}
            {/* <CardPratice title="Listening" /> */}
          </div>
        </section>
      </Main>
    </Container>
  );
}
