import notifications from '../../assets/icons/notification.svg';
import { ContainerHeader } from './style';

export default function Header() {
    return(
        <ContainerHeader>
        <div>
          <h1>Hello, Edwilson da Silva</h1>
          <small>Good see you here!</small>
        </div>
        <div className="container-user-info">    
          <img src={notifications} alt="notifications" />
          <div>Avatar</div>
        </div>
      </ContainerHeader>
        
    )
}