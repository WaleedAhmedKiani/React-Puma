import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '5k+', label: 'Brands' },
    { value: '400+', label: 'Shops' },
    { value: '850k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Basic Sneakers",
        price: "$80.20",
    },
    {
        imgURL: shoe5,
        name: "Puma Ultra FG",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Puma F Running",
        price: "$120.20",
    },
    {
        imgURL: shoe7,
        name: "Puma Sneakers 2.9",
        price: "$140.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Waleed Ahmed',
        rating: 4.7,
        feedback: "I absolutely love the new Puma shoes I bought! They're stylish, comfortable, and durable. Highly recommend!"
    },
    {
        imgURL: customer2,
        customerName: 'David Martinez',
        rating: 4.5,
        feedback: "The design of the Puma shoes is fantastic! They not only look great but also offer excellent comfort and support. Couldn't be happier with my purchase!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Puma Cali", link: "/" },
            { name: "Puma Roma", link: "/" },
            { name: "Puma one8", link: "/" },
            { name: "Puma Mb 03", link: "/" },
            { name: "Puma Sneakers", link: "/" },
            { name: "Puma Rise Nitro", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@puma.com", link: "ahmed:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];