
import logo  from  '../../assets/logo-delivery.svg'
import location from '../../assets/Location.svg'
import Cart from '../../assets/Cart.svg'
import { HeaderContainer, ImageContainer, CartNumber } from '../Header/styles'
import { useCart } from '../../context/ContextGlobal'
import { NavLink } from 'react-router-dom'




export function Header() {

    const {totalQuantity} = useCart()
    const { cart } = useCart()


    function handleClick() {
        console.log(cart)
    }
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <ImageContainer>
                    <NavLink to="/checkout">

                        <img onClick={handleClick} src={Cart} alt="" />
                    </NavLink>
                    <img src={location} alt="" />
                    <CartNumber>
                        <span>{totalQuantity}</span>
                    </CartNumber>
                </ImageContainer>
            </nav>
        </HeaderContainer>
    )
    
}