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

    // Workbook images: each entry has a file name, a tag label, and a display title
    workbookImages: [
        { file: "Animals-RunWild.webp",                              tag: "ILLUSTRATION",  title: "Animals — Run Wild" },
        { file: "Apitive-APICallTracing.webp",                       tag: "PRODUCT UI",    title: "Apitive — API Call Tracing" },
        { file: "Apitive-DesignFirst.webp",                          tag: "PRODUCT UI",    title: "Apitive — Design First" },
        { file: "Apitive-DeveloperPortal.webp",                      tag: "PRODUCT UI",    title: "Apitive — Developer Portal" },
        { file: "Apitive-Gateway.webp",                              tag: "PRODUCT UI",    title: "Apitive — Gateway" },
        { file: "Apitive-PersonaBasedWorkflow.webp",                 tag: "PRODUCT UI",    title: "Apitive — Persona Based Workflow" },
        { file: "Apitive-PowerfulPolicyEngine.webp",                 tag: "PRODUCT UI",    title: "Apitive — Powerful Policy Engine" },
        { file: "Apitive-ResponseCaching.webp",                      tag: "PRODUCT UI",    title: "Apitive — Response Caching" },
        { file: "Cartoon-WrongTool-Cars.webp",                       tag: "CARTOON",       title: "Wrong Tool — Cars" },
        { file: "Cartoon-WrongTool-Digging.webp",                    tag: "CARTOON",       title: "Wrong Tool — Digging" },
        { file: "Character-01.webp",                                 tag: "CHARACTER",     title: "Character Study 01" },
        { file: "Character-02.webp",                                 tag: "CHARACTER",     title: "Character Study 02" },
        { file: "Composability.webp",                                tag: "CONCEPT",       title: "Composability" },
        { file: "Corridor-We-are-about-V2.webp",                     tag: "BRAND",         title: "Corridor — We Are About" },
        { file: "export-deselect-all.webp",                          tag: "PRODUCT UI",    title: "Export — Deselect All" },
        { file: "export-listing-info.webp",                          tag: "PRODUCT UI",    title: "Export — Listing Info" },
        { file: "export-product-info.webp",                          tag: "PRODUCT UI",    title: "Export — Product Info" },
        { file: "full-stack-01.webp",                                tag: "ILLUSTRATION",  title: "Full Stack 01" },
        { file: "full-stack-02.webp",                                tag: "ILLUSTRATION",  title: "Full Stack 02" },
        { file: "full-stack-03.webp",                                tag: "ILLUSTRATION",  title: "Full Stack 03" },
        { file: "full-stack-04.webp",                                tag: "ILLUSTRATION",  title: "Full Stack 04" },
        { file: "Gig-Illustration.webp",                             tag: "ILLUSTRATION",  title: "Gig Illustration" },
        { file: "HeroBanner-V2.webp",                                tag: "BRAND",         title: "Hero Banner V2" },
        { file: "how-to-convert-identifiers.webp",                   tag: "PRODUCT UI",    title: "How to Convert Identifiers" },
        { file: "Image-Banner-aPaaS.webp",                           tag: "BANNER",        title: "aPaaS Banner" },
        { file: "Image-Banner-EnterpriseSoftwareDevelopment.webp",   tag: "BANNER",        title: "Enterprise Software Development Banner" },
        { file: "Image-Banner-ExpertServices.webp",                  tag: "BANNER",        title: "Expert Services Banner" },
        { file: "Image-Banner-NewAppDevelopment.webp",               tag: "BANNER",        title: "New App Development Banner" },
        { file: "Image-Banner-PillarPage-AppModernization.webp",     tag: "BANNER",        title: "App Modernization Banner" },
        { file: "Image-Banner-Prefabs.webp",                         tag: "BANNER",        title: "Prefabs Banner" },
        { file: "Image-Banner-RAD-Studio.webp",                      tag: "BANNER",        title: "RAD Studio Banner" },
        { file: "Image-Banner-Solutions-Enterprises.webp",           tag: "BANNER",        title: "Solutions — Enterprises Banner" },
        { file: "Image-Banner-Telecom.webp",                         tag: "BANNER",        title: "Telecom Banner" },
        { file: "Image-Banner-Training.webp",                        tag: "BANNER",        title: "Training Banner" },
        { file: "Image-Banner-WM-Studio-App.webp",                   tag: "BANNER",        title: "WM Studio App Banner" },
        { file: "Image-Gig-Icons.webp",                              tag: "ILLUSTRATION",  title: "Gig Icons" },
        { file: "Image-Partner-SalesAndPreSales.webp",               tag: "ILLUSTRATION",  title: "Partner — Sales & Pre-Sales" },
        { file: "import-product-identifiers.webp",                   tag: "PRODUCT UI",    title: "Import Product Identifiers" },
        { file: "JumpstartDesign.webp",                              tag: "CONCEPT",       title: "Jumpstart Design" },
        { file: "LowCode-vs-LowCode.webp",                           tag: "CONCEPT",       title: "Low-Code vs Low-Code" },
        { file: "Madras-High-Court.webp",                            tag: "ILLUSTRATION",  title: "Madras High Court" },
        { file: "Mascot-new-gen-yogi.webp",                          tag: "CHARACTER",     title: "Mascot — New Gen Yogi" },
        { file: "People.webp",                                       tag: "ILLUSTRATION",  title: "People" },
        { file: "Prefabs-Banner-V01.webp",                           tag: "BANNER",        title: "Prefabs Banner V01" },
        { file: "Spotcues-BlogBanner-02.webp",                       tag: "BRAND",         title: "SpotCues Blog Banner 02" }
    ],
    workbookPath: "assets/images/workbook/",

    // Shown in place of ANY image or animation that fails to load, on every page
    fallbackImage: "assets/images/missing_asset_fallback.png",

    // Lottie animations: each entry has a file name, a tag label, and a display title
    lottieFiles: [
        { file: "WM-Hero-Banner-Anim.json",          tag: "WAVEMAKER",  title: "WM Hero Banner Animation" },
        { file: "AI-app-creation-with-apis.json",    tag: "AI",         title: "AI App Creation with APIs" },
        { file: "AI-app-creation-V1.json",           tag: "AI",         title: "AI App Creation V1" },
        { file: "AI-App-Creation-V03.json",          tag: "AI",         title: "AI App Creation V03" },
        { file: "BlinkLogoAnimation.json",           tag: "BRAND",      title: "Blink Logo Animation" },
        { file: "botSurfing.json",                   tag: "CHARACTER",  title: "Bot Surfing" },
        { file: "MazeAnim.json",                     tag: "CONCEPT",    title: "Maze Animation" }
    ],
    lottiePath: "assets/lottie/",

    // The Lottie player library every page loads
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