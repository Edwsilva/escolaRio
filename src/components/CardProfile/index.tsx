import headset from '../../assets/icons/headset.svg';
import { ContainerCardProfile } from './style';

interface CardProfileProps {
  title: string,
  icon: string
  color: string,
  percent: number,
  description: string,
}

export default function CardProfile(props: CardProfileProps) {

  const {title, icon, color, percent, description} = props

  return (
    <ContainerCardProfile background={color}>
      <div className="container-image">
        {/* <img src={headset} alt="headset" /> */}
        <img src={icon} alt={title} />
      </div>
    
      <small>{percent}%</small>
      <small>{title}</small>
      <small>{description}</small>
    </ContainerCardProfile>
  );
}
