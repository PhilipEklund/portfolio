export default {

    color: {
        LightShade: '#e9e5dd',
        LightAccent: '#2fb2ff',
        BrandColor: '#292e61',
        DarkAccent: '#467ab4',
        DarkShade: '#151b2b',
        PostIt: 'rgba(255, 255, 153, 1)',
        PostItGradient: 'linear-gradient(#FFFF99 , #e1e172 )',
        Dark_lowalpha: 'rgba(91, 13, 123,0.3)',
        SilverGradient: 'linear-gradient(#d5d7e8, #9697a2)',
        LightGradient: 'radial-gradient(circle, #e9e5dd 50%, rgba(224, 212, 188, 1) 100%)',
        LightGradient_2: 'radial-gradient(circle, #ead6b8 50%, #d6bd96 100%)',
    },
    color_alternative: {
        LightShade: '#e1f9fb',
        LightAccent: '#7ebde4',
        BrandColor: '#1493ea',
        DarkAccent: '#24234a',
        DarkShade: '#6a6865',
    },
    color_alternative_light: {
        LightShade: '#fafafa',
        LightAccent: '#aac1d7',
        BrandColor: '#7a95cf',
        DarkAccent: '#859eb6',
        DarkShade: '#437dbf',
    },
    color_purple: {
        LightShade: '#EEE5E9',
        LightAccent: '#B57D54',
        BrandColor: '#6802b3',
        DarkAccent: '#637373',
        DarkShade: '#1D1D1E',
        DarkShadeLight: '#444344',
    },

    logo:'/assets/Logo.png',
    nav: {
        logo: 'CC',
        links: [
            { text: 'Work', to: '/work' },
            { text: 'Contact', to: '/contact' },
        ],
    },

    header: {
        bgImg: process.env.PUBLIC_URL +'/assets/headerBG.png',
        pinImg: process.env.PUBLIC_URL +'/assets/pin-icon.png',
        profilImg: process.env.PUBLIC_URL +'/assets/profilbild.png',
            /*'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',*/
        imgPlaceholder:
            'data:image/jpeg;base64,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',
        text: ['HelloWorld();', "My name is Philip Eklund and I have a degree in Computer Science. ", 'I do stuff like '],
        typical: [
            'Software developing.',
            2000,
            'Cinematography.',
            2000,
            'Graphics Design.',
            2000,
        ],
        btnText: 'Say hi!',
    },

    assets: {
        spaceInvaders: process.env.PUBLIC_URL + '/assets/spaceInvaders.gif',
        antonsSkafferi: process.env.PUBLIC_URL + '/assets/antons.png',
        vintageBackgroundImg: process.env.PUBLIC_URL + '/assets/backgroundVintage.png',
        coffeeshopbg: process.env.PUBLIC_URL + '/assets/coffeeshopBG.jpg',
        whiteWood: process.env.PUBLIC_URL + '/assets/whiteWood.jpg',
        cork: process.env.PUBLIC_URL + '/assets/cork.jpg',
        schrew: process.env.PUBLIC_URL + '/assets/schrew.png',
        hex: process.env.PUBLIC_URL + '/assets/bghex.png',
        linkedIn: process.env.PUBLIC_URL + '/assets/linkedIn.png',

        exjobb: '',
        androidStudio:'',
    },

    stack: {
        title: 'Stack',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/assets/logo_large.png',
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/prinsta_logo.png',
                alt: 'express',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/turistforening_logo.png',
                alt: 'node',
            },
        ],
        languages: [
            { img: process.env.PUBLIC_URL + '/assets/stacks/cpp_logo.png', alt: 'C plus plus', link:'GameDev', },
            { img: process.env.PUBLIC_URL + '/assets/stacks/c-sharp.png', alt: 'C sharp', link: 'GameDev', },
            { img: process.env.PUBLIC_URL + '/assets/stacks/python.png', alt: 'Python', link: 'Git',},
        ],
        libraries: [
            { img: process.env.PUBLIC_URL + '/assets/stacks/bootstrap.png', alt: 'Bootstrap', link: 'WebDev', },
            { img: process.env.PUBLIC_URL + '/assets/stacks/unity-logo.png', alt: 'Unity', link: 'GameDev', },
            { img: process.env.PUBLIC_URL + '/assets/stacks/sfml.png', alt: 'SFML', link: 'GameDev',},
            { img: process.env.PUBLIC_URL + '/assets/stacks/react.png', alt: 'React', link: 'WebDev', },
            { img: process.env.PUBLIC_URL + '/assets/stacks/android.png', alt: 'Android studio', link: 'AppDev', },
        ],
        icon: {

            AE: { img: process.env.PUBLIC_URL + '/assets/stacks/adobe-ae.png',alt:'Adobe After Effects',},
            PS: { img: process.env.PUBLIC_URL + '/assets/stacks/adobe-ps.png', alt: 'Adobe Photoshop', },
            PR: { img: process.env.PUBLIC_URL + '/assets/stacks/adobe-pr.png', alt: 'Adobe Premiere', },
            ID: { img: process.env.PUBLIC_URL + '/assets/stacks/adobe-id.png', alt: 'Adobe Indesign', },
            CPP: { img: process.env.PUBLIC_URL + '/assets/stacks/cpp_logo.png', alt: 'C plus plus', },
            CS: { img: process.env.PUBLIC_URL + '/assets/stacks/c-sharp.png', alt: 'C sharp', },
            SMFL: { img: process.env.PUBLIC_URL + '/assets/stacks/sfml.png', alt: 'SFML', },
            REACT: { img: process.env.PUBLIC_URL + '/assets/stacks/react.png', alt: 'React', },
            PY: { img: process.env.PUBLIC_URL + '/assets/stacks/python.png', alt: 'Python', },
            BOOTSTRAP: { img: process.env.PUBLIC_URL + '/assets/stacks/bootstrap.png', alt: 'Bootstrap', },
            ANDROID: { img: process.env.PUBLIC_URL + '/assets/stacks/android.png', alt: 'Android studio', },
            ANDROID_ROBOT: { img: process.env.PUBLIC_URL + '/assets/stacks/Android_robot.png', alt: 'Android studio', },
            UNITY: { img: process.env.PUBLIC_URL + '/assets/stacks/unity-logo.png', alt: 'Unity', },
            
        },
        desc: "The languages I am most proficient with are C++, C# and Python. I have also worked with JAVA, Javascript, HTML and CSS.",
        libDesc: "Libraries that I have used in development cycles are Android Studio, Bootstrap, SFML (Simple and Fast Multimedia Library), React and Unity. ",
    },

    work: {
        tankestallet: {
            title:'Tankestället',
            logo: process.env.PUBLIC_URL + '/assets/brands/Tankestallet.png', alt: 'Tankestället',
            text: 'Tankestället requested me to put together a short trailer with music and video material which they provided. This video is used as a showcase displaying what their product is.',
            videoURL:'https://www.youtube.com/embed/oGFnecqP9zc',
        },
        Git: {
            title: 'Git-hub',
            logo: process.env.PUBLIC_URL + '/assets/brands/GitHub-Logo.png', alt: 'github',
            text: "Visiting my GitHub you can browse some mini projects I've developed like Space Invaders and my Bachelor's Thesis project. Projects are including the source code.",
        },
        EG: {
            title: 'EG retail',
            logo: process.env.PUBLIC_URL + '/assets/brands/logo_eg.png',alt:'EG retail',
            text: 'I recorded and edited a sequence of over 10 instructional videos for EG retail and their software to be used in combination with their documentation to showcase how to use features included in thier software.',
            videoURL: 'https://www.youtube.com/embed/Tpyz3kwV5jE',
        },
        logotypes: {
            title: 'Designed Logotypes',
            astorp: process.env.PUBLIC_URL + '/assets/brands/astorp.png', astorp_alt: 'Åstorps turistförening',
            prinsta: process.env.PUBLIC_URL + '/assets/brands/Prinsta_logo.png', prinsta_alt: 'prinsta',
            yogaprovance: process.env.PUBLIC_URL + '/assets/brands/yoga.png', yoga_alt: 'yogaprovence',
            text: 'I designed the logo for Åstorp municipality tourist organisation, Yoga provence and Prinsta',
        },
        manukaHoney: {
            title: 'Otikoki honey label',
            image: process.env.PUBLIC_URL + '/assets/label.jpg',
            text: "In addition to designing logos, I have also designed labels for a farmer's honey products in New Zeeland.",
        },
        Drone: {
            title: 'DROOONE',
            //img: process.env.PUBLIC_URL + '/assets/brands/logo_eg.png', alt: 'EG retail',
            text: '',
        },
    },

    text: {

        about_title: 'About();',
        about_desc: 'My name is Philip Eklund, a developer and cinematographer with a bacherlor´s in Computer Science.',

        cpp_title: 'C++',
        cpp_desc: "C++ is the backbone of an effective windows application. It is fast but don't forget to clean up those pointers.",
        react_title: 'React',
        react_desc: 'React is the backbone of an interactive website, I used it in combination with bootstrap to produce this website.',
        bootstrap_title: 'Bootstrap',
        bootstrap_desc: "Bootsstrap and React are the libraries used for front end and backend web development when constructing this website. Languages used are Javascript, HTML and CSS.",

        unity_title: 'Unity game engine',
        unity_desc: "Unity is a game engine I've worked intensively with to develop web and mobile platform games."+
        " My latest project in Unity was the bachelor's thesis where I together with a classmate developed a mobile game designed to test how different controls affect the gameplay value."+
        " In SFML I developed a small asteroid game in an attempt to become more proficient with pixelart and C++ development.",

        android_title: 'Android Development',
        android_desc: "I've made an application for managing taking orders and serving for a small restaurant. This application communicates with an SQL database server located in the restaurant." +
            " Here all orders are stored until the end of day when the local cache is reset and the days orders are moved to a long-time storage server.",

        cpp_title: 'Webdevelopment',
        cpp_desc: 'This website is made with React and Bootstrap to get a smooth and seemless experience for you, the viewer.',

        sfml_title: 'SFML',
        sfml_desc: "I am also a graphics designer in the ground so all assets including special effects and graphics are made from scratch by me.",
        git_desc: "Welcome to swing around my Git and take a look at some other previous projects.",


    },
};
