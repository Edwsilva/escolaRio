import { Container } from './styles';
import ArrowIcon from '../Sidebar/icons/ArrowIcon';
import { ReactNode } from 'react';
import { Link } from "react-router-dom"

interface CardPraticeProps {
  title: string;
  //icon: ReactNode;
  icon: string;
  color: string;
  path: string;
}
export default function CardPratice({ title, icon, color, path }: CardPraticeProps) {
  //const { title, icon, color } = props;
  return (
    <Link to={path}>
      <Container color={color}>
        {/* {icon} */}
        {/* <strong style={{ color: color }}>{title}</strong> */}
        <img src={icon} alt={title} />
        <strong>{title}</strong>
        <ArrowIcon color={color} />
      </Container>
    </Link>
  );
}
