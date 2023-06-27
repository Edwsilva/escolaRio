import headset from '../../assets/icons/headset.svg';
import { ContainerCardProfile } from './style';

export default function CardProfile() {
  return (
    <ContainerCardProfile>
      <div className="container-image">
        <img src={headset} alt="headset" />
      </div>
      <small>15%</small>
      <small>Listening</small>
      <small>Descrição rápida</small>
    </ContainerCardProfile>
  );
}
