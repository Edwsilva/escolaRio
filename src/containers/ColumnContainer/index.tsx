import { ReactNode } from 'react';
import { Container } from './styles';

interface ColumnContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ColumnContainer(props: ColumnContainerProps) {
  const { children, title, description } = props;

  return (
    <Container>
      <header className="header-container">
        <h1>{title}</h1>
        <small>{description}</small>
      </header>

      {children}
    </Container>
  );
}
