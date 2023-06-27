import Sidebar from '../../components/Sidebar';
import { Container, Main, UserProfileContainer } from './styles';
import notifications from '../../assets/icons/notification.svg';
import CardPratice from '../../components/CardPratice';
import { cards } from '../../mock/cards';
import { useTheme } from 'styled-components';
import headset from '../../assets/icons/headset.svg';
import book from '../../assets/icons/book.svg';
import mic from '../../assets/icons/mic.svg';
import pencil from '../../assets/icons/pencil.svg';
import ColumnContainer from '../../containers/ColumnContainer';
import CardProfile from '../../components/CardProfile';

export default function Home() {
  // inport global themes
  const theme = useTheme();

  // const cardsPratice = [
  //   {
  //     title: 'Listening',
  //     icon: <img src={headset} alt="headset" />,
  //     color: theme.colors.blue[400],
  //   },
  //   {
  //     title: 'Dictionary',
  //     icon: <img src={book} alt="book" />,
  //     color: theme.colors.red[300],
  //   },
  //   {
  //     title: 'Gramar',
  //     icon: <img src={pencil} alt="pencil" />,
  //     color: theme.colors.green[400],
  //   },
  //   {
  //     title: 'Pronunciation',
  //     icon: <img src={mic} alt="mic" />,
  //     color: theme.colors.orange[400],
  //   },
  // ];

  // const cardsProfile = [
  //   {
  //     title: 'Listening',
  //     icon: <img src={headset} alt="headset" />,
  //     color: theme.colors.blue[400],
  //     percent: 15,
  //     description: 'Speak 10 minutes',
  //   },
  //   {
  //     title: 'Dictionary',
  //     icon: <img src={book} alt="book" />,
  //     color: theme.colors.red[300],
  //     percent: 17,
  //     description: 'Learn 5 words',
  //   },
  //   {
  //     title: 'Gramar',
  //     icon: <img src={pencil} alt="pencil" />,
  //     color: theme.colors.green[400],
  //     percent: 9,
  //     description: 'Learn 5 rules',
  //   },
  //   {
  //     title: 'Pronunciation',
  //     icon: <img src={mic} alt="mic" />,
  //     color: theme.colors.orange[400],
  //     percent: 90,
  //     description: 'Read 10 minutes',
  //   },
  // ];

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

        <ColumnContainer title="Knowledge base" description="Practice your knowledge base.">
          {/* <div className="header-section">
            <h1>Knowledge base</h1>
            <small>Practice your knowledge base.</small>
          </div> */}
          <div className="container-cards">
            {cards.map((card) => (
              <CardPratice
                key={card.title}
                title={card.title}
                icon={card.icon}
                color={card.color}
              />
            ))}
            {/* <CardPratice title="Listening" /> */}
          </div>
        </ColumnContainer>

        {/* <UserProfileContainer>
          <div className="header-section">
            <h1>Knowledge base</h1>
            <small>Practice your knowledge base.</small>
          </div>
        </UserProfileContainer> */}

        <ColumnContainer title="User Profile" description="Follow your development.">
          <CardProfile />
        </ColumnContainer>
      </Main>
    </Container>
  );
}
