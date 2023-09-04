
import logo  from  '../../assets/logo-delivery.svg'
import location from '../../assets/Location.svg'
import Cart from '../../assets/Cart.svg'
import { HeaderContainer, ImageContainer, CartNumber } from '../Header/styles'
import { useCart } from '../../context/ContextGlobal'



export function Header() {

    const {totalQuantity} = useCart()


    function handleClick() {
        console.log()
    }
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <ImageContainer>
                    <img onClick={handleClick} src={Cart} alt="" />
                    <img src={location} alt="" />
                    <CartNumber>
                        <span>{totalQuantity}</span>
                    </CartNumber>
                </ImageContainer>
            </nav>
        </HeaderContainer>
    )
    
}