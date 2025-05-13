export interface Coffee  {
    id: number
    image: string
    tags: string[]
    title: string
    description: string
    price: number
}

export const coffees: Coffee[] = [
    {
        id: 1, 
        image: 'coffee1.png',
        tags: ['TRADICIONAL'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
    },
    {
        id: 2,
        image: 'coffee2.png',
        tags: ['TRADICIONAL'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 10.5,
    },
    {
        id: 3,
        image: 'coffee3.png',
        tags: ['TRADICIONAL'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 10.9,
    },
    {
        id: 4,
        image: 'coffee4.png',
        tags: ['TRADICIONAL', 'GELADO'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 11.0,
    },
    {
        id: 5,
        image: 'coffee5.png',
        tags: ['TRADICIONAL', 'COM LEITE'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 11.5,
    },
    {
        id: 6,
        image: 'coffee6.png',
        tags: ['TRADICIONAL', 'COM LEITE'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 11.9,
    },
    {
        id: 7,
        image: 'coffee7.png',
        tags: ['TRADICIONAL', 'COM LEITE'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 12.5,
    },
    {
        id: 8,
        image: 'coffee8.png',
        tags: ['TRADICIONAL', 'COM LEITE'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite e espuma',
        price: 11.8,
    },
    {
        id: 9,
        image: 'coffee9.png',
        tags: ['TRADICIONAL', 'COM LEITE'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 12.9,
    },
    {
        id: 10,
        image: 'coffee10.png',
        tags: ['ESPECIAL', 'COM LEITE'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 13.5,
    },
    {
        id: 11,
        image: 'coffee11.png',
        tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 14.5,
    },
    {
        id: 12,
        image: 'coffee12.png',
        tags: ['ESPECIAL'],
        title: 'Havaiano',
        description: 'Bebida preparada com café e leite de coco',
        price: 12.7,
    },
    {
        id: 13,
        image: 'coffee13.png',
        tags: ['ESPECIAL'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 13.0,
    },
    {
        id: 14,
        image: 'coffee14.png',
        tags: ['ESPECIAL', 'ALCOÓLICO'],
        title: 'Irlandês',
        description: 'Bebida à base de café, uísque irlandês, açúcar e chantilly',
        price: 14.8,
    },
]
  
  