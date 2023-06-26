import Sidebar from '../../components/Sidebar';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <section>
        <h1>Restante da aplicação</h1>
      </section>
    </Container>
  );
}
