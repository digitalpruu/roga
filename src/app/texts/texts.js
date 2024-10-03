const title = "RoGa";
const slogan = "Ropa para toda la familia";
const email = "wendyl-2114@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en las prendas de vestir de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3102228783";

const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "RoGa es tu tienda de confianza para prendas de vestir que se adaptan a toda la familia. Nos especializamos en ofrecer ropa de calidad que combina estilo y comodidad, asegurándonos de que cada miembro de tu familia encuentre algo que le encante. En RoGa, creemos que la moda debe ser accesible y versátil, por eso ofrecemos una amplia gama de prendas que se ajustan a diferentes estilos y ocasiones."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "Dirección del negocio",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/1MJZ7r8n69zW8Dzf/?mibextid=qi2Omg",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
