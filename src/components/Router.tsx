import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Checkout } from '../pages/Checkout/Checkout'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { SucessCheckout } from '../pages/Sucess'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/sucess" element={<SucessCheckout />} />
            </Route>
        </Routes>
    )
}