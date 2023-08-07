import { useState } from "react";
export default function useClothesFlatList(){
    // clothes is the accessible variable, setClothes is how the variable is changed

    const [donateVisible, setDonateVisible] = useState(true)
    
    const [clothesFlatList, setClothesFlatList] = useState([
        {
            src: 'https://www.saturdaysnyc.com/cdn/shop/products/M12313PO01-AMPARO-BLUE_01.jpg?v=1667403558',
            counter:9, 
            category:"Sweater",
            Name: "Denim Tears",
            id: '46h3v'
        },
        {
            src: 'https://cdn11.bigcommerce.com/s-76ikz/images/stencil/1280x1280/products/37142/124898/09-003-08604-16__46826.1573076122.JPG?c=2',
            counter:7,
            category:"Sweater",
            Name: "KapitalXJapan",
            id: '5vhe4'
        },
        {
            src: 'https://img.hollisterco.com/is/image/anf/KIC_350-3189-0206-304_prod1?policy=product-large',
            counter:40,
            category:"Sweater",
            Name: "Kapital Hippie ",
            id: 'gh7h2'

        }  ,
        {
            src: 'https://uk.bape.com/cdn/shop/products/001TEI251001_GRA_A.jpg?v=1662717072&width=2400',
            counter: 11,
            category:"Shirts",
            Name: "Bape ",
            id: 'er56t'
        },
        {
            src: 'https://target.scene7.com/is/image/Target/GUEST_7b50daaa-36a2-4344-86af-09514a1c6af5?wid=325&hei=325&qlt=80&fmt=pjpeg',
            counter: 4,
            category:"Shirts",
            Name: "Polo ",
            id: 'g78yt'
        },
        {
            src: 'https://is4.revolveassets.com/images/p4/n/z/NIKR-MS3_V1.jpg',
            category:"Shirts",
            counter: 1,
            Name: "Nike ",
            id: 'sd54s'
            
        },
        {
            src: 'https://cdnimg.emmiol.com/E/202203/img_original-ECC0223TO-2504012364.jpg',
            category:"Shirts",
            counter: 8,
            Name: "Chrome Hearts",
            id: '4fbg9'
        },
        {
            src: 'https://images.stockx.com/images/Stussy-World-Tour-T-Shirt-White-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1688757278&q=75',
            category:"Shirts",
            counter: 13,
            Name: "Stussy",
            id: 'tk05s'
        },
        {
            src: 'https://cdn.media.amplience.net/i/brooksbrothers/BS00325_TEAL-HEATHER?$medium$&unsharp=1,.01,60,20',
            counter: 15,
            category:"Sweater",
            Name: "Kurashiki",
            id: '1b26e'
        },
    ])
    const [donateClothes, setDonateClothes] = useState([{
        src: 'https://www.saturdaysnyc.com/cdn/shop/products/M12313PO01-AMPARO-BLUE_01.jpg?v=1667403558',
        counter:9, 
        category:"Sweater",
        Name: "Denim Tears",
        id: '46h3v'
    },])


    return{
        clothesFlatList,
        setClothesFlatList,

        donateClothes,

        donateVisible,
        setDonateVisible
    }

}



