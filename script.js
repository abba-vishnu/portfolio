/**
 * ============================================================================
 * CRITICAL REMINDER: HIERARCHY MATTERS
 * Keep global path detection and head-injection routines at the top, and wrap 
 * all DOM-dependent UI injectors inside DOMContentLoaded blocks so elements 
 * are fully rendered before JavaScript tries to target them.
 * ============================================================================
 */

//-------------- 1. Automatically Determine Root Path (Infinite Scalability) ---
const scriptTag = document.querySelector('script[src*="script.js"]');
let rootPath = "./";

if (scriptTag) {
    const srcAttr = scriptTag.getAttribute('src');
    const index = srcAttr.indexOf('script.js');
    if (index > 0) {
        rootPath = srcAttr.substring(0, index); 
    }
}


//-------------- 2. Universal Favicon Injector -----------------------------------
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


//-------------- 3. DOM-Dependent Initializers & UI Injectors ------------------
document.addEventListener("DOMContentLoaded", () => {

    // --- A. Universal Back Button Injector ---
    const backContainer = document.getElementById("back-button-container");
    if (backContainer) {
        let pathToHome = "./";
        if (scriptTag) {
            const srcAttr = scriptTag.getAttribute('src');
            const index = srcAttr.indexOf('script.js');
            if (index > 0) {
                pathToHome = srcAttr.substring(0, index) + "index.html";
            }
        }

        backContainer.innerHTML = `
            <a href="${pathToHome}" class="btn" style="display: inline-flex; width: auto; padding: 10px 20px; font-size: 0.9rem; align-items: center; gap: 8px; text-decoration: none;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back
            </a>
        `;
    }

    // --- B. Dynamic Navigation Header Injector ---
    const header = document.getElementById("site-header");
    if (header) {
        header.innerHTML = `
            <a href="${rootPath}index.html" id="header-brand-link" class="nav-brand" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;">
                <img src="${rootPath}assets/images/logo_white.png" alt="Logo" style="height: 24px; width: auto; display: block;" />
                <span id="brand-name">${SITE_CONFIG.name.toUpperCase()}</span>
            </a>
            <button class="mobile-menu-toggle" aria-label="Toggle Navigation">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <nav class="nav-links">
                <a href="${rootPath}index.html#work">Showcase</a>
                <a href="${rootPath}index.html#workbook">Workbook</a>
                <a href="${rootPath}index.html#capabilities">Capabilities</a>
                <a href="${rootPath}index.html#toolkit">Toolkit</a>
                <a href="${rootPath}index.html#journey">Journey</a>
                <a href="${rootPath}index.html#contact">Contact</a>
            </nav>
        `;

        // Mobile Menu Toggle Logic
        const toggleBtn = header.querySelector('.mobile-menu-toggle');
        const navLinks = header.querySelector('.nav-links');

        if (toggleBtn && navLinks) {
            toggleBtn.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-active');
            });

            // Close mobile menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('mobile-active');
                });
            });
        }

        // Header Scroll Visibility Trigger
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-visible');
            } else {
                header.classList.remove('header-visible');
            }
        });
    }

    // --- C. Dynamic Banner Hero Injector ---
    const heroBar = document.getElementById("hero-top-bar");
    if (heroBar) {
        // Automatically grabs from HTML data-badge attribute, or falls back to global config
        const badgeText = heroBar.dataset.badge || `${SITE_CONFIG.title} · ${SITE_CONFIG.location}`;
        const taglineText = heroBar.dataset.tagline || "Over a decade of motion design and visual storytelling...";

        heroBar.innerHTML = `
            <div class="hero-left" style="display: flex; align-items: center; gap: 16px;">
                <img src="${rootPath}assets/images/logo_white.png" alt="${SITE_CONFIG.name} Logo" style="height: 48px; width: auto; display: block;">
                <h1 class="hero-name" id="hero-name">${SITE_CONFIG.name}</h1>
            </div>
            <div class="hero-separator"></div>
            <div class="hero-right">
                <span class="hero-badge" id="hero-badge">${badgeText}</span>
                <p class="hero-tagline" id="hero-tagline">${taglineText}</p>
            </div>
        `;
    }

    // --- D. Global Config Data Binding (Titles, Names, Links) ---
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) pageTitle.textContent = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`;

    const brandName = document.getElementById("brand-name");
    if (brandName) brandName.textContent = SITE_CONFIG.name.toUpperCase();

    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = SITE_CONFIG.name;

    const footerName = document.getElementById("footer-name");
    if (footerName) footerName.textContent = SITE_CONFIG.name;

    // Contact & Social Data Binding
    document.querySelectorAll(".contact-email").forEach(el => {
        el.textContent = SITE_CONFIG.email;
        el.href = `mailto:${SITE_CONFIG.email}`;
    });

    document.querySelectorAll(".resume-btn").forEach(el => {
        el.href = SITE_CONFIG.resumeFile;
    });

    document.querySelectorAll("a[href^='tel:']").forEach(el => {
        el.textContent = SITE_CONFIG.phone;
        el.href = `tel:${SITE_CONFIG.phoneRaw}`;
    });

    document.querySelectorAll("a[href*='linkedin.com']").forEach(el => {
        el.href = SITE_CONFIG.socials.linkedin;
    });

    document.querySelectorAll("a[href*='vimeo.com']").forEach(el => {
        el.href = SITE_CONFIG.socials.vimeo;
    });


    // --- E. Automatic Mixed Showcase Generator (YouTube & Vimeo) ---
    const container = document.getElementById("vimeo-grid-container");
    
    if (container && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.showcaseVideos) {
        container.innerHTML = ""; // Clear existing placeholder content

        SITE_CONFIG.showcaseVideos.forEach(video => {
            let thumbSrc = "";
            let dataAttr = "";

            if (video.platform === "youtube") {
                thumbSrc = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            } else if (video.platform === "vimeo") {
                thumbSrc = ""; 
                dataAttr = `data-vimeo-id="${video.id}"`;
            }

            const cardHTML = `
                <div class="card">
                    <a href="${video.link}" target="_blank" rel="noopener" class="card-link">
                        <div class="thumb-container">
                            <img src="${thumbSrc}" ${dataAttr} alt="${video.title}">
                            <div class="play-overlay">
                                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="card-tag">${video.tag}</div>
                            <h3>${video.title}</h3>
                        </div>
                    </a>
                </div>
            `;
            container.innerHTML += cardHTML;
        });

        // Automatically fetch high-res Vimeo thumbnails asynchronously
        document.querySelectorAll('img[data-vimeo-id]').forEach(img => {
            const videoId = img.getAttribute('data-vimeo-id');
            if (!videoId) return;

            fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.thumbnail_url) {
                        img.src = data.thumbnail_url.replace(/_\d+x\d+/, '_1280x720');
                    }
                })
                .catch(err => console.error(`Error loading Vimeo thumbnail for ${videoId}:`, err));
        });
    }

    // --- F. Workbook Image Cards (single class, auto aspect ratio) ---
    const workbookContainer = document.getElementById("workbook-grid-container");

    if (workbookContainer && SITE_CONFIG.workbookImages) {
        const limit = parseInt(workbookContainer.dataset.limit, 10);
        const images = Number.isNaN(limit)
            ? SITE_CONFIG.workbookImages
            : SITE_CONFIG.workbookImages.slice(0, limit);
        const fallbackSrc = `${rootPath}${SITE_CONFIG.workbookFallback}`;

        workbookContainer.innerHTML = "";

        images.forEach((fileName, i) => {
            const card = document.createElement("div");
            card.className = "card image-card";

            const thumb = document.createElement("div");
            thumb.className = "thumb-container image-thumb";
            thumb.style.setProperty("--ar", "1 / 1");

            const img = document.createElement("img");
            img.alt = `Workbook ${String(i + 1).padStart(2, "0")}`;
            img.loading = "lazy";

            let usingFallback = false;

            img.addEventListener("load", () => {
                // Fallback stays square; real images use their own ratio
                if (!usingFallback && img.naturalWidth && img.naturalHeight) {
                    thumb.style.setProperty("--ar", `${img.naturalWidth} / ${img.naturalHeight}`);
                }
            });

            img.addEventListener("error", () => {
                if (usingFallback) return; // avoid infinite error loop
                usingFallback = true;
                thumb.style.setProperty("--ar", "1 / 1");
                img.src = fallbackSrc;
            });

            img.src = `${rootPath}${SITE_CONFIG.workbookPath}${fileName}`;

            thumb.appendChild(img);
            card.appendChild(thumb);
            workbookContainer.appendChild(card);
        });
    }
});


//-------------- 4. Dynamic Header Height Calculator ----------------------------
function updateHeaderOffset() {
    const header = document.getElementById('site-header');
    if (header) {
        const headerHeight = header.offsetHeight + 16;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
}

window.addEventListener('load', updateHeaderOffset);
window.addEventListener('resize', updateHeaderOffset);


//-------------- 5. Toolkit Marquee / Scroll Logic ------------------------------
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


//-------------- 6. Universal Image Lightbox Viewer across all pages ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // 1. Automatically create and inject the modal container if it doesn't exist
    if (!document.getElementById('image-lightbox')) {
        const lightboxModal = document.createElement('div');
        lightboxModal.id = 'image-lightbox';
        lightboxModal.className = 'lightbox-modal';
        lightboxModal.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img id="lightbox-img" src="" alt="Zoomed view">
        `;
        document.body.appendChild(lightboxModal);
    }

    // 2. Event listener: Open lightbox on clicking any workbook image or image card
    document.addEventListener('click', function (e) {
        const imgTarget = e.target.closest('.image-card img, .thumb-container.image-thumb img, .workbook-item img');
        if (imgTarget) {
            e.preventDefault();
            const lightbox = document.getElementById('image-lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            if (lightbox && lightboxImg) {
                lightboxImg.src = imgTarget.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scrolling
            }
        }
    });

    // 3. Event listener: Close lightbox when clicking close button, background, or pressing Escape key
    document.addEventListener('click', function (e) {
        const lightbox = document.getElementById('image-lightbox');
        if (lightbox && (e.target.id === 'image-lightbox' || e.target.classList.contains('lightbox-close'))) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore background scrolling
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const lightbox = document.getElementById('image-lightbox');
            if (lightbox && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});