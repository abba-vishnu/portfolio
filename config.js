const SITE_CONFIG = {
    name: "Abba Vishnu",
    title: "Lead Visual Designer",
    location: "Chennai, India",
    email: "abbavishnu@gmail.com",
    phone: "+91 85478 71997",
    phoneRaw: "+918547871997",

    // Target resume file name
    resumeFile: "assets/Abba_Vishnu_Resume.docx",

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

    // Workbook images: file names inside workbookPath
    workbookImages: [
        "190624-Animals-Final.jpg",
        "Gig-Illustration.png",
        "190325-Apitive-APICallTracing.jpg",
        "190325-Apitive-DesignFirst.jpg",
        "190730-Spotcues-BlogBanner-02.jpg",
        "191116-2035-how-to-convert-identifiers.gif",
        "190325-Apitive-DeveloperPortal.jpg",
        "190325-Apitive-Gateway.jpg",
        "210310-Corridor-We-are-about-V2.png",
        "190325-Apitive-PersonaBasedWorkflow.jpg",
        "191115-2155-import-product-identifiers.gif",
        "190325-Apitive-PowerfulPolicyEngine.jpg",
        "Image-Gig-Icons.png",
        "191116-1455-export-product-info.gif",
        "190325-Apitive-ResponseCaching.jpg",
        "191116-1457-export-listing-info.gif",
        "200908-LowCode-vs-LowCode.png",
        "191116-1500-export-deselect-all.gif",
        "Character-01.png",
        "JumpstartDesign.png",
        "Character-02.png"
    ],
    workbookPath: "assets/images/workbook/",

    // Shown in place of ANY image or animation that fails to load, on every page
    fallbackImage: "assets/images/missing_asset_fallback.png",

    // Lottie animations: file names inside lottiePath (add more file names here)
    lottieFiles: [
        "WM-Hero-Banner-Anim.json",
        "AI-app-creation-with-apis.json",
        "AI-app-creation-V1.json",
        "AI-App-Creation-V03.json",
        "BlinkLogoAnimation.json",
        "botSurfing.json",
		"MazeAnim.json"
    ],
	
    lottiePath: "assets/lottie/",
	// The Lottie player library every page loads. Change the version number here only —
    // both index.html and lottie/index.html read this value instead of hardcoding it.
    // Browse versions at https://cdnjs.com/libraries/lottie-web
    lottiePlayerSrc: "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js",
	
    // Unified Showcase List (YouTube & Vimeo Mixed)
    showcaseVideos: [
        {
            platform: "youtube",
            id: "lJBK13uBVaA",
            tag: "01 / WAVEMAKER",
            title: "WaveMaker Design to Code | Build Pixel-Perfect Enterprise Apps from Figma with AI",
            link: "https://youtu.be/lJBK13uBVaA"
        },
        {
            platform: "youtube",
            id: "UEyhNRlB-6M",
            tag: "02 / WAVEMAKER",
            title: "WaveMaker AI - Agentic App Generation Platform",
            link: "https://youtu.be/UEyhNRlB-6M"
        },
        {
            platform: "youtube",
            id: "3A0COvpltP0",
            tag: "03 / WAVEMAKER",
            title: "WaveMaker Suite Overview: Everything You Need to Build Modern Apps",
            link: "https://youtu.be/3A0COvpltP0"
        },
        {
            platform: "youtube",
            id: "3k5LUZ--Zws",
            tag: "04 / WAVEMAKER",
            title: "WaveMaker Studio for React Native: Build Native Mobile Apps 2X Faster",
            link: "https://youtu.be/3k5LUZ--Zws"
        },
        {
            platform: "youtube",
            id: "XH-i9ZNfil8",
            tag: "05 / WAVEMAKER",
            title: "WaveMaker for Enterprises: Accelerating Modern, Composable Applications",
            link: "https://youtu.be/XH-i9ZNfil8"
        },
        {
            platform: "youtube",
            id: "-r8uLPYdjSE",
            tag: "06 / WAVEMAKER",
            title: "WaveMaker launches a sleek, brand-new, upgraded documentation website",
            link: "https://youtu.be/-r8uLPYdjSE"
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
            id: "zKwFZZUPv0c",
            tag: "08 / WAVEMAKER",
            title: "Banking as a Service (BaaS) with WaveMaker Low-Code Platform",
            link: "https://youtu.be/zKwFZZUPv0c"
        },
        {
            platform: "youtube",
            id: "yS6h3LBCz0c",
            tag: "09 / WAVEMAKER",
            title: "WaveMaker does",
            link: "https://youtu.be/yS6h3LBCz0c"
        },
        {
            platform: "youtube",
            id: "E1R_iKbjxww",
            tag: "10 / WAVEMAKER",
            title: "Build with WaveMaker",
            link: "https://youtu.be/E1R_iKbjxww"
        },
        {
            platform: "vimeo",
            id: "670228081",
            tag: "11 / VIMEO",
            title: "SpotCues - Micro Transformation Animation",
            link: "https://vimeo.com/showcase/10034777?video=670228081"
        },
        {
            platform: "vimeo",
            id: "670225098",
            tag: "12 / VIMEO",
            title: "Vimeo Study - 670225098",
            link: "https://vimeo.com/showcase/10034777?video=670225098"
        },
        {
            platform: "vimeo",
            id: "670239142",
            tag: "13 / VIMEO",
            title: "Vimeo Study - 670239142",
            link: "https://vimeo.com/showcase/10034777?video=670239142"
        },
        {
            platform: "vimeo",
            id: "670246054",
            tag: "14 / VIMEO",
            title: "Vimeo Study - 670246054",
            link: "https://vimeo.com/showcase/10034777?video=670246054"
        },
        {
            platform: "vimeo",
            id: "803883521",
            tag: "15 / VIMEO",
            title: "Vimeo Study - 803883521",
            link: "https://vimeo.com/showcase/10034777?video=803883521"
        },
        {
            platform: "vimeo",
            id: "668544003",
            tag: "16 / VIMEO",
            title: "Vimeo Study - 668544003",
            link: "https://vimeo.com/showcase/10034777?video=668544003"
        },
        {
            platform: "vimeo",
            id: "670229823",
            tag: "17 / VIMEO",
            title: "Vimeo Study - 670229823",
            link: "https://vimeo.com/showcase/10034777?video=670229823"
        }
    ]
};