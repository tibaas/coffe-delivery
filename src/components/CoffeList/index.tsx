
import { CoffeItem } from "../CoffeItem";
import { CoffeListContainer, TitleContainer } from "./styles";
import Americano from '../../assets/coffeImgs/Americano.svg'
import Arabe from '../../assets/coffeImgs/Arabe.svg'
import Tradicional from '../../assets/coffeImgs/ExpressoTradicional.svg'
import CafeComLeite from '../../assets/coffeImgs/CafeComLeite.svg'
import ExpressoGelado from '../../assets/coffeImgs/CafeGelado.svg'

interface CoffeProps {
    title: string
    description: string
    price: number
    image: string
    tag: string[]
}


const CoffeData: CoffeProps[] = [{
    title:'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image:Tradicional,
    tag: ['TRADICIONAL'],

},

{
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: Americano,
    tag: ['TRADICIONAL'],
},

{
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 12.0,
    image: Arabe,
    tag: ['ESPECIAL'],
},

{
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.0,
    image: CafeComLeite,
    tag: ['TRADICIONAL', 'COM LEITE'],
},

{
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 8.50,
    image: ExpressoGelado,
    tag: ['TRADICIONAL', 'GELADO'],
},







]

export function CoffeList() {
    return (
        <>
            <TitleContainer>
                <h1>Nossos cafés</h1>
            </TitleContainer>        
            <CoffeListContainer>
                {CoffeData.map((coffe) => 
                    <CoffeItem 
                        key={coffe.title}
                        title={coffe.title}
                        description={coffe.description}
                        price={coffe.price}
                        image={coffe.image}
                        tag={coffe.tag}   
                    />
                )}
                
            </CoffeListContainer>
        </>
    )
}