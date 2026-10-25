const SITE_CONFIG = {
    name: "Abba Vishnu",
    title: "Lead Visual Designer",
    location: "Chennai, India",
    email: "abbavishnu@gmail.com",
    phone: "+91 85478 71997",
    phoneRaw: "+918547871997",

    // Footer tagline (shown after "© year Name •" on every page; edit from admin.html)
    footerText: "Visual design, in motion.",

    // Target resume file name
    resumeFile: "assets/Abba_Vishnu_Resume.pdf",//"assets/Abba_Vishnu_Resume.docx",
	
	// Target resume file paths
	resumePdf: "assets/Abba_Vishnu_Resume.pdf",
	resumeDocx: "assets/Abba_Vishnu_Resume.docx",

    // Social links
    socials: {
        linkedin: "https://www.linkedin.com/in/abbavishnu",
        vimeo: "https://vimeo.com/showcase/10034777"
    },

    // Hero banner video (plays full-width at the top of the home page)
    heroVideo: {
        platform: "vimeo",
        id: "1239136069"
    },
    heroPoster: "assets/images/home/hero_poster.png",

    // Number of masonry columns on desktop/tablet (mobile automatically uses 2)
    workbookMasonryColumns: 4,
	
	// Number of video columns on desktop/tablet (mobile automatically uses 1)
	showcaseVideoColumns: 4,
	
    // Show image titles under Workbook cards
    workbookShowTitles: false,

    // Show image tags under Workbook cards
    workbookShowTags: true,

    // Workbook images: each entry has a file name, a tag label, and a display title
    workbookImages: [
        {
            file: "Animals-RunWild.webp",
            tag: "ILLUSTRATION",
            title: "Animals — Run Wild"
        },
        {
            file: "Image-Banner-WM-Studio-App.webp",
            tag: "BANNER",
            title: "WM Studio App Banner"
        },
        {
            file: "Gig-Illustration.webp",
            tag: "ILLUSTRATION",
            title: "Gig Illustration"
        },
        {
            file: "People.webp",
            tag: "ILLUSTRATION",
            title: "People"
        },
        {
            file: "Mascot-new-gen-yogi.webp",
            tag: "CHARACTER",
            title: "Mascot — New Gen Yogi"
        },
        {
            file: "Image-Banner-RAD-Studio.webp",
            tag: "BANNER",
            title: "RAD Studio Banner"
        },
        {
            file: "Cartoon-WrongTool-Cars.webp",
            tag: "CARTOON",
            title: "Wrong Tool — Cars"
        },
        {
            file: "Apitive-DesignFirst.webp",
            tag: "PRODUCT UI",
            title: "Apitive — Design First"
        },
        {
            file: "Apitive-DeveloperPortal.webp",
            tag: "PRODUCT UI",
            title: "Apitive — Developer Portal"
        },
        {
            file: "Apitive-Gateway.webp",
            tag: "PRODUCT UI",
            title: "Apitive — Gateway"
        },
        {
            file: "Apitive-PowerfulPolicyEngine.webp",
            tag: "PRODUCT UI",
            title: "Apitive — Powerful Policy Engine"
        },
        {
            file: "Apitive-APICallTracing.webp",
            tag: "PRODUCT UI",
            title: "Apitive — API Call Tracing"
        },
        {
            file: "Apitive-ResponseCaching.webp",
            tag: "PRODUCT UI",
            title: "Apitive — Response Caching"
        },
        {
            file: "Cartoon-WrongTool-Digging.webp",
            tag: "CARTOON",
            title: "Wrong Tool — Digging"
        },
        {
            file: "Corridor-We-are-about-V2.webp",
            tag: "BRAND",
            title: "Corridor — We Are About"
        },
        {
            file: "HeroBanner-V2.webp",
            tag: "BRAND",
            title: "Hero Banner V2"
        },
        {
            file: "Composability.webp",
            tag: "CONCEPT",
            title: "Composability"
        },
        {
            file: "Character-01.webp",
            tag: "CHARACTER",
            title: "Character Study 01"
        },
        {
            file: "Spotcues-BlogBanner-02.webp",
            tag: "BRAND",
            title: "SpotCues Blog Banner 02"
        },
        {
            file: "full-stack-01.webp",
            tag: "ILLUSTRATION",
            title: "Full Stack 01"
        },
        {
            file: "Character-02.webp",
            tag: "CHARACTER",
            title: "Character Study 02"
        },
        {
            file: "Image-Banner-aPaaS.webp",
            tag: "BANNER",
            title: "aPaaS Banner"
        },
        {
            file: "Image-Banner-EnterpriseSoftwareDevelopment.webp",
            tag: "BANNER",
            title: "Enterprise Software Development Banner"
        },
        {
            file: "Image-Banner-ExpertServices.webp",
            tag: "BANNER",
            title: "Expert Services Banner"
        },
        {
            file: "Image-Banner-NewAppDevelopment.webp",
            tag: "BANNER",
            title: "New App Development Banner"
        },
        {
            file: "Image-Banner-PillarPage-AppModernization.webp",
            tag: "BANNER",
            title: "App Modernization Banner"
        },
        {
            file: "Image-Banner-Prefabs.webp",
            tag: "BANNER",
            title: "Prefabs Banner"
        },
        {
            file: "Image-Banner-Solutions-Enterprises.webp",
            tag: "BANNER",
            title: "Solutions — Enterprises Banner"
        },
        {
            file: "Image-Banner-Telecom.webp",
            tag: "BANNER",
            title: "Telecom Banner"
        },
        {
            file: "Image-Banner-Training.webp",
            tag: "BANNER",
            title: "Training Banner"
        },
        {
            file: "Image-Gig-Icons.webp",
            tag: "ILLUSTRATION",
            title: "Gig Icons"
        },
        {
            file: "Image-Partner-SalesAndPreSales.webp",
            tag: "ILLUSTRATION",
            title: "Partner — Sales & Pre-Sales"
        },
        {
            file: "Prefabs-Banner-V01.webp",
            tag: "BANNER",
            title: "Prefabs Banner V01"
        },
        {
            file: "Madras-High-Court.webp",
            tag: "ILLUSTRATION",
            title: "Madras High Court"
        },
        {
            file: "JumpstartDesign.webp",
            tag: "CONCEPT",
            title: "Jumpstart Design"
        },
        {
            file: "LowCode-vs-LowCode.webp",
            tag: "CONCEPT",
            title: "Low-Code vs Low-Code"
        },
        {
            file: "Apitive-PersonaBasedWorkflow.webp",
            tag: "PRODUCT UI",
            title: "Apitive — Persona Based Workflow"
        },
        {
            file: "import-product-identifiers.webp",
            tag: "PRODUCT UI",
            title: "Import Product Identifiers"
        },
        {
            file: "how-to-convert-identifiers.webp",
            tag: "PRODUCT UI",
            title: "How to Convert Identifiers"
        },
        {
            file: "JustAskPooch.webm",
            tag: "WORKBOOK",
            title: "JustAskPooch"
        },
        {
            file: "JustAskPoochCharacter.webm",
            tag: "WORKBOOK",
            title: "JustAskPoochCharacter"
        },
        {
            file: "JustAskPoochCharacterAlone.webm",
            tag: "WORKBOOK",
            title: "JustAskPoochCharacterAlone"
        }
    ],
    workbookPath: "assets/images/workbook/",

    // Shown in place of ANY image or animation that fails to load, on every page
    fallbackImage: "assets/images/missing_asset_fallback.png",

    // Lottie animations: each entry has a file name, a tag label, and a display title
    lottieFiles: [
        {
            file: "WM-Hero-Banner-Anim.json",
            tag: "WAVEMAKER",
            title: "WM Hero Banner Animation"
        },
        {
            file: "AI-app-creation-with-apis.json",
            tag: "AI",
            title: "AI App Creation with APIs"
        },
        {
            file: "AI-app-creation-V1.json",
            tag: "AI",
            title: "AI App Creation V1"
        },
        {
            file: "AI-App-Creation-V03.json",
            tag: "AI",
            title: "AI App Creation V03"
        },
        {
            file: "BlinkLogoAnimation.json",
            tag: "BRAND",
            title: "Blink Logo Animation"
        },
        {
            file: "botSurfing.json",
            tag: "CHARACTER",
            title: "Bot Surfing"
        },
        {
            file: "MazeAnim.json",
            tag: "CONCEPT",
            title: "Maze Animation"
        }
    ],
    lottiePath: "assets/lottie/",

    // The Lottie player library every page loads
    lottiePlayerSrc: "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js",

    // Unified Showcase List (YouTube & Vimeo Mixed)
    showcaseVideos: [
        {
            platform: "youtube",
            id: "60-JCTDcWNc",
            tag: "01 / WAVEMAKER",
            title: "Abba Vishun Demo Reel 2026",
            link: "https://youtu.be/60-JCTDcWNc"
        },
        {
            platform: "youtube",
            id: "gymmZqbyyKc",
            tag: "02 / WAVEMAKER",
            title: "DemoReel LogoAnimations",
            link: "https://youtu.be/gymmZqbyyKc"
        },
        {
            platform: "youtube",
            id: "lJBK13uBVaA",
            tag: "03 / WAVEMAKER",
            title: "WaveMaker Design to Code | Build Pixel-Perfect Enterprise Apps from Figma with AI",
            link: "https://youtu.be/lJBK13uBVaA"
        },
        {
            platform: "youtube",
            id: "UEyhNRlB-6M",
            tag: "04 / WAVEMAKER",
            title: "WaveMaker AI - Agentic App Generation Platform",
            link: "https://youtu.be/UEyhNRlB-6M"
        },
        {
            platform: "youtube",
            id: "-r8uLPYdjSE",
            tag: "05 / WAVEMAKER",
            title: "WaveMaker launches a sleek, brand-new, upgraded documentation website",
            link: "https://youtu.be/-r8uLPYdjSE"
        },
        {
            platform: "youtube",
            id: "3A0COvpltP0",
            tag: "06 / WAVEMAKER",
            title: "WaveMaker Suite Overview: Everything You Need to Build Modern Apps",
            link: "https://youtu.be/3A0COvpltP0"
        },
        {
            platform: "youtube",
            id: "ZebU_YIBwmc",
            tag: "07 / WAVEMAKER",
            title: "WaveMaker: Launching Progressive Web Apps",
            link: "https://youtu.be/ZebU_YIBwmc"
        },
        {
            platform: "youtube",
            id: "3k5LUZ--Zws",
            tag: "08 / WAVEMAKER",
            title: "WaveMaker Studio for React Native: Build Native Mobile Apps 2X Faster",
            link: "https://youtu.be/3k5LUZ--Zws"
        },
        {
            platform: "youtube",
            id: "XH-i9ZNfil8",
            tag: "09 / WAVEMAKER",
            title: "WaveMaker for Enterprises: Accelerating Modern, Composable Applications",
            link: "https://youtu.be/XH-i9ZNfil8"
        },
        {
            platform: "youtube",
            id: "zKwFZZUPv0c",
            tag: "10 / WAVEMAKER",
            title: "Banking as a Service (BaaS) with WaveMaker Low-Code Platform",
            link: "https://youtu.be/zKwFZZUPv0c"
        },
        {
            platform: "youtube",
            id: "yS6h3LBCz0c",
            tag: "11 / WAVEMAKER",
            title: "WaveMaker does",
            link: "https://youtu.be/yS6h3LBCz0c"
        },
        {
            platform: "youtube",
            id: "BCsLB-p9SxM",
            tag: "12 / WAVEMAKER",
            title: "SwimWithWaveMaker V1",
            link: "https://youtu.be/BCsLB-p9SxM"
        },
        {
            platform: "youtube",
            id: "E1R_iKbjxww",
            tag: "13 / WAVEMAKER",
            title: "Build with WaveMaker",
            link: "https://youtu.be/E1R_iKbjxww"
        },
        {
            platform: "youtube",
            id: "r_0z-c8JP5Q",
            tag: "14 / WAVEMAKER",
            title: "WM Banner",
            link: "https://youtu.be/r_0z-c8JP5Q"
        },
        {
            platform: "youtube",
            id: "SDYdp2ggJQ8",
            tag: "15 / WAVEMAKER",
            title: "Logo Annual Day 2023",
            link: "https://youtu.be/SDYdp2ggJQ8"
        },
        {
            platform: "youtube",
            id: "aYzfgnqXA3w",
            tag: "16 / WAVEMAKER",
            title: "Logo AutoCode V2",
            link: "https://youtu.be/aYzfgnqXA3w"
        },
        {
            platform: "youtube",
            id: "ShrCxjOeBaE",
            tag: "17 / WAVEMAKER",
            title: "Logo AutoCode V1",
            link: "https://youtu.be/ShrCxjOeBaE"
        },
        {
            platform: "youtube",
            id: "cub3-7mHdno",
            tag: "18 / WAVEMAKER",
            title: "LogoApplied Intelligence",
            link: "https://youtu.be/cub3-7mHdno"
        },
        {
            platform: "youtube",
            id: "5tm66WJuV4I",
            tag: "19 / WAVEMAKER",
            title: "Logo Annual Day 2021",
            link: "https://youtu.be/5tm66WJuV4I"
        },
        {
            platform: "youtube",
            id: "fafAjcOxqL4",
            tag: "20 / WAVEMAKER",
            title: "Logo Groupe io",
            link: "https://youtu.be/fafAjcOxqL4"
        },
        {
            platform: "vimeo",
            id: "803883521",
            tag: "21 / VIMEO",
            title: "Vimeo Study - 803883521",
            link: "https://vimeo.com/showcase/10034777?video=803883521"
        },
        {
            platform: "vimeo",
            id: "670225098",
            tag: "22 / VIMEO",
            title: "Vimeo Study - 670225098",
            link: "https://vimeo.com/showcase/10034777?video=670225098"
        },
        {
            platform: "vimeo",
            id: "670239142",
            tag: "23 / VIMEO",
            title: "Vimeo Study - 670239142",
            link: "https://vimeo.com/showcase/10034777?video=670239142"
        },
        {
            platform: "vimeo",
            id: "670228081",
            tag: "24 / VIMEO",
            title: "SpotCues - Micro Transformation Animation",
            link: "https://vimeo.com/showcase/10034777?video=670228081"
        },
        {
            platform: "youtube",
            id: "4kG0HfzXscI",
            tag: "25 / WAVEMAKER",
            title: "Infinity 2020 Teaser",
            link: "https://youtu.be/4kG0HfzXscI"
        },
        {
            platform: "youtube",
            id: "Ef0UA_3UV4c",
            tag: "26 / WAVEMAKER",
            title: "Banking Application",
            link: "https://youtu.be/Ef0UA_3UV4c"
        },
        {
            platform: "vimeo",
            id: "670246054",
            tag: "27 / VIMEO",
            title: "Vimeo Study - 670246054",
            link: "https://vimeo.com/showcase/10034777?video=670246054"
        },
        {
            platform: "youtube",
            id: "9T58a7SOfA0",
            tag: "28 / WAVEMAKER",
            title: "Ledgerline",
            link: "https://youtu.be/9T58a7SOfA0"
        },
        {
            platform: "youtube",
            id: "XuACUrcBa78",
            tag: "29 / WAVEMAKER",
            title: "BFS Introduction",
            link: "https://youtu.be/XuACUrcBa78"
        },
        {
            platform: "youtube",
            id: "uqanq0xHVpU",
            tag: "30 / WAVEMAKER",
            title: "DataAnimation",
            link: "https://youtu.be/uqanq0xHVpU"
        },
        {
            platform: "youtube",
            id: "50IyxsydWlY",
            tag: "31 / WAVEMAKER",
            title: "Cardboard Animation",
            link: "https://youtu.be/50IyxsydWlY"
        },
        {
            platform: "youtube",
            id: "6Ext801lpTM",
            tag: "32 / WAVEMAKER",
            title: "Hyscale Kubernetes Troubleshooting",
            link: "https://youtu.be/6Ext801lpTM"
        },
        {
            platform: "youtube",
            id: "BbRa2NMlr_E",
            tag: "33 / WAVEMAKER",
            title: "Modernizatoin Woes V1",
            link: "https://youtu.be/BbRa2NMlr_E"
        },
        {
            platform: "youtube",
            id: "s33uYuRnfIE",
            tag: "34 / WAVEMAKER",
            title: "Modernizatoin Woes V2",
            link: "https://youtu.be/s33uYuRnfIE"
        },
        {
            platform: "youtube",
            id: "_GQU1DLxpvA",
            tag: "35 / WAVEMAKER",
            title: "ThumbSignIn",
            link: "https://youtu.be/_GQU1DLxpvA"
        },
        {
            platform: "youtube",
            id: "cgz0gIUcYnQ",
            tag: "36 / WAVEMAKER",
            title: "ThumbSignIn Loop",
            link: "https://youtu.be/cgz0gIUcYnQ"
        },
        {
            platform: "youtube",
            id: "v-AFz1mS2kQ",
            tag: "37 / WAVEMAKER",
            title: "PersonalizedBankingApps V2",
            link: "https://youtu.be/v-AFz1mS2kQ"
        },
        {
            platform: "youtube",
            id: "aq7Ap8_I1NI",
            tag: "38 / WAVEMAKER",
            title: "WaveXD Intro",
            link: "https://youtu.be/aq7Ap8_I1NI"
        },
        {
            platform: "youtube",
            id: "_m020SQef1s",
            tag: "39 / WAVEMAKER",
            title: "Speed with Control V3",
            link: "https://youtu.be/_m020SQef1s"
        },
        {
            platform: "youtube",
            id: "M8_Yxr8F9M8",
            tag: "40 / WAVEMAKER",
            title: "Ad for video creation",
            link: "https://youtu.be/M8_Yxr8F9M8"
        }
    ]
};
