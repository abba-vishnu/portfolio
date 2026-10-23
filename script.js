//-------------- Helper: Determine Root Path -----------------------------------
const path = window.location.pathname;
const isSubdir = path.includes('/showcase/') || (path.split('/').filter(Boolean).length > 1 && !path.endsWith('/index.html'));
const rootPath = isSubdir ? "../" : "./";

//-------------- Dynamically inject universal favicons -----------------------------------
const head = document.querySelector("head");
if (head) {
    const lightIcon = document.createElement("link");
    lightIcon.rel = "icon";
    lightIcon.href = `${rootPath}assets/images/logo_white.png`;
    lightIcon.media = "(prefers-color-scheme: light)";
    head.appendChild(lightIcon);

    const darkIcon = document.createElement("link");
    darkIcon.rel = "icon";
    darkIcon.href = `${rootPath}assets/images/logo_black.png`;
    darkIcon.media = "(prefers-color-scheme: dark)";
    head.appendChild(darkIcon);
}

//-------------- Dynamic Navigation Header & DOM Injection -----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Dynamic Header
    const header = document.getElementById("site-header");
    if (header) {
        header.innerHTML = `
            <a href="${rootPath}index.html" id="header-brand-link" class="nav-brand" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;">
                <img src="${rootPath}assets/images/logo_white.png" alt="Logo" style="height: 24px; width: auto; display: block;" />
                <span id="brand-name">${SITE_CONFIG.name.toUpperCase()}</span>
            </a>
            <nav class="nav-links">
                <a href="${rootPath}index.html#work">Showcase</a>
                <a href="${rootPath}workbook/index.html">Workbook</a>
                <a href="${rootPath}index.html#capabilities">Capabilities</a>
                <a href="${rootPath}index.html#toolkit">Toolkit</a>
                <a href="${rootPath}index.html#journey">Journey</a>
                <a href="${rootPath}index.html#contact">Contact</a>
            </nav>
        `;

        // Header Scroll Animation
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-visible');
            } else {
                header.classList.remove('header-visible');
            }
        });
    }

    // 2. Inject Page Title & Brand Names from SITE_CONFIG
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) pageTitle.textContent = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`;

    const brandName = document.getElementById("brand-name");
    if (brandName) brandName.textContent = SITE_CONFIG.name.toUpperCase();

    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = SITE_CONFIG.name;

    const footerName = document.getElementById("footer-name");
    if (footerName) footerName.textContent = SITE_CONFIG.name;

    // 3. Inject Hero Badge (Title & Location)
    const heroBadge = document.getElementById("hero-badge");
    if (heroBadge) heroBadge.textContent = `${SITE_CONFIG.title} · ${SITE_CONFIG.location}`;

    // 4. Inject Email
    const emailLinks = document.querySelectorAll(".contact-email");
    emailLinks.forEach(el => {
        el.textContent = SITE_CONFIG.email;
        el.href = `mailto:${SITE_CONFIG.email}`;
    });

    // 5. Inject Resume Link
    const resumeBtns = document.querySelectorAll(".resume-btn");
    resumeBtns.forEach(el => {
        el.href = SITE_CONFIG.resumeFile;
    });

    // 6. Inject Phone Number
    const phoneLinks = document.querySelectorAll("a[href^='tel:']");
    phoneLinks.forEach(el => {
        el.textContent = SITE_CONFIG.phone;
        el.href = `tel:${SITE_CONFIG.phoneRaw}`;
    });

    // 7. Inject Social Links
    const linkedinLinks = document.querySelectorAll("a[href*='linkedin.com']");
    linkedinLinks.forEach(el => el.href = SITE_CONFIG.socials.linkedin);

    const vimeoLinks = document.querySelectorAll("a[href*='vimeo.com']");
    vimeoLinks.forEach(el => el.href = SITE_CONFIG.socials.vimeo);
});

//-------------- Toolkit Marquee / Scroll Logic -----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll('.toolkit-track-wrapper');

    wrappers.forEach(wrapper => {
        const track = wrapper.querySelector('.toolkit-track');
        if (!wrapper || !track) return;

        // Duplicate inner items for a seamless infinite loop
        track.innerHTML += track.innerHTML;

        let isPaused = false;
        const speed = 1;

        function autoScroll() {
            if (!isPaused) {
                wrapper.scrollLeft += speed;
                const halfWidth = track.scrollWidth / 2;
                if (halfWidth > 0 && wrapper.scrollLeft >= halfWidth) {
                    wrapper.scrollLeft = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        }

        requestAnimationFrame(autoScroll);

        wrapper.addEventListener('mouseenter', () => { isPaused = true; });
        wrapper.addEventListener('mouseleave', () => { isPaused = false; });

        let isDown = false;
        let startX, scrollLeftStart;

        wrapper.addEventListener('mousedown', (e) => {
            isDown = true;
            isPaused = true;
            startX = e.pageX - wrapper.offsetLeft;
            scrollLeftStart = wrapper.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                isPaused = false;
            }
        });

        wrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - wrapper.offsetLeft;
            const walk = (x - startX) * 1.5;
            wrapper.scrollLeft = scrollLeftStart - walk;
        });

        wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            isPaused = true;
            wrapper.scrollLeft += e.deltaY * 0.5;

            clearTimeout(wrapper.wheelTimeout);
            wrapper.wheelTimeout = setTimeout(() => {
                isPaused = false;
            }, 800);
        }, { passive: false });
    });
});