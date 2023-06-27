import { Container } from './styles';
import ArrowIcon from '../Sidebar/icons/ArrowIcon';
import { ReactNode } from 'react';

interface CardPraticeProps {
  title: string;
  icon: ReactNode;
  color: string;
}
export default function CardPratice({ title, icon, color }: CardPraticeProps) {
  //const { title, icon, color } = props;
  return (
    <Container color={color}>
      {icon}
      {/* <strong style={{ color: color }}>{title}</strong> */}
      <strong>{title}</strong>
      <ArrowIcon color={color} />
    </Container>
  );
}
