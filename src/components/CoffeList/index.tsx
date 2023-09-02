
import { CoffeItem } from "../CoffeItem";
import { CoffeListContainer, TitleContainer } from "./styles";
import Americano from '../../assets/coffeImgs/Americano.svg'
import Arabe from '../../assets/coffeImgs/Arabe.svg'
import Tradicional from '../../assets/coffeImgs/ExpressoTradicional.svg'
import CafeComLeite from '../../assets/coffeImgs/CafeComLeite.svg'
import ExpressoGelado from '../../assets/coffeImgs/CafeGelado.svg'
import ExpressoCremoso from '../../assets/coffeImgs/ExpressoCremoso.svg'
import Latte from '../../assets/coffeImgs/Latte.svg'
import Capuccino from '../../assets/coffeImgs/Capuccino.svg'
import Cubano from '../../assets/coffeImgs/Cubano.svg'
import Mocaccino from '../../assets/coffeImgs/Mochaccino.svg'
import Havaiano from '../../assets/coffeImgs/Havaiano.svg'
import Irlandes from '../../assets/coffeImgs/Irlandes.svg'
import Macchiato from '../../assets/coffeImgs/Macchiato.svg'
import ChocolateQuente from '../../assets/coffeImgs/ChocolateQuente.svg'


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

{
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10,
    image: ExpressoCremoso,
    tag: ['TRADICIONAL'],
},
{
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10,
    image: ChocolateQuente,
    tag: ['ESPECIAL', 'COM LEITE'],
},


{
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 12,
    image: Latte,
    tag: ['TRADICIONAL', 'COM LEITE'],
},

{
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 12.0,
    image: Arabe,
    tag: ['ESPECIAL'],
},
{
    title: 'Capuccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 12,
    image: Capuccino,
    tag: ['TRADICIONAL', 'COM LEITE'],
},

{
    title: 'Mocaccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 12,
    image: Mocaccino,
    tag: ['TRADICIONAL', 'COM LEITE'],
},

{
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 15,
    image: Cubano,
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
},

{
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: Havaiano,
    tag: ['ESPECIAL'],
},

{
    title: 'Irlandês',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 10,
    image: Irlandes,
    tag: ['TRADICIONAL', 'COM LEITE'],
},

{
    title: 'Macchiato',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9,
    image: Macchiato,
    tag: ['ESPECIAL', 'ALCOÓLICO'],
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