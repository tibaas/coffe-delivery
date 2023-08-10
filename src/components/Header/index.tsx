
import logo  from  '../../assets/logo-delivery.svg'
import location from '../../assets/Location.svg'
import Cart from '../../assets/Cart.svg'
import { HeaderContainer, ImageContainer } from '../Header/styles'

export function Header() {
    function handleClick() {
        console.log('Funfa po')
    }
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <ImageContainer>
                    <img src={location} alt="" />
                    <img onClick={handleClick} src={Cart} alt="" />
                </ImageContainer>
            </nav>
        </HeaderContainer>
    )
    
}