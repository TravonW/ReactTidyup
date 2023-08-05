import { useState } from "react";
export default function useClothesFlatList(){
    // clothes is the accessible variable, setClothes is how the variable is changed
    const [clothesFlatList, setClothesFlatList] = useState([
        {
            src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:20/resize=height:1400/no_metadata/compress/esoyzRxCT4qjsz1TwRHg',
            counter:9, 
            category:"Pants",
            Name: "Denim Tears"
        },
        {
            src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:20/resize=height:1400,width:1050/no_metadata/compress/wsXPUox3SOyjmK565iO9',
            counter:7,
            category:"Pants",
            Name: "KapitalXJapan"
        },
        {
            src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:20/resize=height:1400,width:1400/no_metadata/compress/cBoUoYJXTNCd23O0qsoC',
            counter:40,
            category:"Pants",
            Name: "Kapital Hippie "

        }  ,
        {
            src: 'https://uk.bape.com/cdn/shop/products/001TEI251001_GRA_A.jpg?v=1662717072&width=2400',
            counter: 11,
            category:"Shirts",
            Name: "Bape "
        },
        {
            src: 'https://target.scene7.com/is/image/Target/GUEST_7b50daaa-36a2-4344-86af-09514a1c6af5?wid=325&hei=325&qlt=80&fmt=pjpeg',
            counter: 4,
            category:"Shirts",
            Name: "Polo ",
        },
        {
            src: 'https://is4.revolveassets.com/images/p4/n/z/NIKR-MS3_V1.jpg',
            category:"Shirts",
            counter: 1,
            Name: "Nike "
            
        },
        {
            src: 'https://cdnimg.emmiol.com/E/202203/img_original-ECC0223TO-2504012364.jpg',
            category:"Shirts",
            counter: 8,
            Name: "Chrome Hearts"
        },
        {
            src: 'https://images.stockx.com/images/Stussy-World-Tour-T-Shirt-White-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1688757278&q=75',
            category:"Shirts",
            counter: 13,
            Name: "Stussy"
        },
        {
            src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:20/resize=height:1400/no_metadata/compress/Vs2jXC14QkOO9Is6gCuW',
            counter:15,
            category:"Pants",
            Name: "Kurashiki",
        },
        {
            src: 'https://img.ltwebstatic.com/images3_pi/2023/02/28/16775789889064f84899c6c6a5c3943965a29e7e4c_thumbnail_720x.webp',
            counter:6,
            category:"Pants",
            Name: "Manfinity"
        },
    ])

    return{
        clothesFlatList
    }

}



