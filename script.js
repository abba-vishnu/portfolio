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


//-------------- 2b. Universal Missing-Asset Fallback ----------------------------
// Any <img> that fails to load (on any page) is swapped for the fallback image.
const FALLBACK_SRC = `${rootPath}${SITE_CONFIG.fallbackImage}`;
const FALLBACK_ABS = new URL(FALLBACK_SRC, document.baseURI).href;

function applyImageFallback(img) {
    if (img.src === FALLBACK_ABS) return; // already the fallback: avoid an endless loop
    img.removeAttribute("srcset");
    img.src = FALLBACK_SRC;
}

// "error" events don't bubble, but they can be caught in the capture phase.
// This also covers images that are added later by JavaScript.
document.addEventListener("error", (e) => {
    if (e.target && e.target.tagName === "IMG") applyImageFallback(e.target);
}, true);

// Catch images that already failed before this script started running
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
            applyImageFallback(img);
        }
    });
});

// Replaces a Lottie container's contents with the fallback image
function showLottieFallback(container) {
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = FALLBACK_SRC;
    img.alt = "Missing animation";
    img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
    container.appendChild(img);
}

// Loads a Lottie file; shows the fallback if the JSON is missing or broken
function loadLottieSafely(container, path, loop = true, autoplay = true) {
    if (typeof lottie === "undefined") {
        console.warn("lottie.js is not loaded. Check the <script> tag in the page.");
        showLottieFallback(container);
        return;
    }
    try {
        const anim = lottie.loadAnimation({ container, renderer: "svg", loop, autoplay, path });
        anim.addEventListener("data_failed", () => {
            console.error(
                `Lottie file could not be loaded: ${new URL(path, document.baseURI).href}\n` +
                `If this page's address starts with file://, open the site through a local server instead (see notes).`
            );
            showLottieFallback(container);
        });
    } catch (err) {
        console.error("Lottie rendering failed for:", path, err);
        showLottieFallback(container);
    }
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

    // --- C0. Hero Banner Video (home page only) ---
    const heroIframe = document.getElementById("hero-video-iframe");
    if (heroIframe && SITE_CONFIG.heroVideo && SITE_CONFIG.heroVideo.id) {
        const hv = SITE_CONFIG.heroVideo;
        heroIframe.src = hv.platform === "youtube"
            ? `https://www.youtube-nocookie.com/embed/${hv.id}?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&playlist=${hv.id}`
            : `https://player.vimeo.com/video/${hv.id}?autoplay=1&muted=1&loop=1&controls=0&playsinline=1`;
        heroIframe.referrerPolicy = "strict-origin-when-cross-origin";
    }
    const heroPoster = document.getElementById("hero-poster");
    if (heroPoster && SITE_CONFIG.heroPoster) {
        heroPoster.src = `${rootPath}${SITE_CONFIG.heroPoster}`;
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

    // Footer: built entirely from config so every page just needs an empty .footer-bottom div
    document.querySelectorAll(".footer-bottom").forEach(el => {
        const year = new Date().getFullYear();
        const tagline = SITE_CONFIG.footerText || "Visual design, in motion.";
        el.innerHTML = `<p>&copy; ${year} ${SITE_CONFIG.name} &bull; ${tagline}</p>`;
    });

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
                thumbSrc = FALLBACK_SRC; // placeholder until the Vimeo thumbnail arrives
                dataAttr = `data-vimeo-id="${video.id}"`;
            }

            const cardHTML = `
                <div class="card">
                    <a href="${video.link}" target="_blank" rel="noopener" class="card-link">
                        <div class="thumb-container">
                            <img src="${thumbSrc}" ${dataAttr} alt="${video.title}" loading="lazy" decoding="async">
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

    // --- F. Workbook Image Cards ---
    // Homepage preview (has data-limit): fixed 16:9 card, matching the Showcase/Lottie cards.
    // Full workbook page (no data-limit): masonry, image-only, auto aspect ratio — unchanged.
    const workbookContainer = document.getElementById("workbook-grid-container");

    if (workbookContainer && SITE_CONFIG.workbookImages) {
        const limit = parseInt(workbookContainer.dataset.limit, 10);
        const isPreview = !Number.isNaN(limit);
        const images = isPreview
            ? SITE_CONFIG.workbookImages.slice(0, limit)
            : SITE_CONFIG.workbookImages;
        const fallbackSrc = `${rootPath}${SITE_CONFIG.fallbackImage}`;

        // "190624-Animals-Final.jpg" -> "Animals Final"
        const titleFromFileName = (fileName) => {
            let base = fileName.replace(/\.[^.]+$/, "");
            base = base.replace(/^\d{4,8}(-\d{1,6})?-/, ""); // drop a leading date/time-like prefix
            base = base.replace(/[-_]+/g, " ").trim();
            return base || fileName;
        };

        workbookContainer.innerHTML = "";

        images.forEach((fileName, i) => {
            const card = document.createElement("div");
            const thumb = document.createElement("div");
            const img = document.createElement("img");

            img.loading = "lazy";
            img.decoding = "async";
            img.fetchPriority = "low";
            img.classList.add("js-lightbox");

            let usingFallback = false;
            img.addEventListener("error", () => {
                if (usingFallback) return; // avoid infinite error loop
                usingFallback = true;
                img.src = fallbackSrc;
            });
            img.src = `${rootPath}${SITE_CONFIG.workbookPath}${fileName}`;

            if (isPreview) {
                // Same shape as the Showcase/Lottie cards: fixed 16:9 thumb + tag + title
                card.className = "card";
                thumb.className = "thumb-container";
                img.alt = titleFromFileName(fileName);

                const content = document.createElement("div");
                content.className = "card-content";
                content.innerHTML = `
                    <div class="card-tag">${String(i + 1).padStart(2, "0")} / WORKBOOK</div>
                    <h3>${titleFromFileName(fileName)}</h3>
                `;

                thumb.appendChild(img);
                card.appendChild(thumb);
                card.appendChild(content);
            } else {
                // Full workbook page: image-only masonry tile, natural aspect ratio
                card.className = "card image-card";
                thumb.className = "thumb-container image-thumb";
                thumb.style.setProperty("--ar", "1 / 1");
                img.alt = `Workbook ${String(i + 1).padStart(2, "0")}`;

                img.addEventListener("load", () => {
                    if (!usingFallback && img.naturalWidth && img.naturalHeight) {
                        thumb.style.setProperty("--ar", `${img.naturalWidth} / ${img.naturalHeight}`);
                    }
                });
                img.addEventListener("error", () => {
                    thumb.style.setProperty("--ar", "1 / 1");
                });

                thumb.appendChild(img);
                card.appendChild(thumb);
            }

            workbookContainer.appendChild(card);
        });
    }
});


//-------------- 3b. Lottie Card List Generator (lottie/index.html) -------------
document.addEventListener("DOMContentLoaded", () => {
    const lottieContainer = document.getElementById("lottie-grid-container");
    if (!lottieContainer || !SITE_CONFIG.lottieFiles) return;

    lottieContainer.innerHTML = "";

    // Only start each animation when its card scrolls into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);

            loadLottieSafely(entry.target, entry.target.dataset.src);
        });
    }, { rootMargin: "600px 0px", threshold: 0.01 }); // starts loading well before it's visible, but only once nearby — never during initial render

    // data-limit="6" on the container shows only the first 6; no attribute shows all
    const lottieLimit = parseInt(lottieContainer.dataset.limit, 10);
    const lottieList = Number.isNaN(lottieLimit)
        ? SITE_CONFIG.lottieFiles
        : SITE_CONFIG.lottieFiles.slice(0, lottieLimit);

    lottieList.forEach((fileName, i) => {
        // "MazeAnim.json" -> "MazeAnim"
        const label = fileName.replace(/\.json$/i, "");

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="lottie-thumb"></div>
            <div class="card-content">
                <div class="card-tag">${String(i + 1).padStart(2, "0")} / LOTTIE</div>
                <h3>${label}</h3>
            </div>
        `;

        const stage = card.querySelector(".lottie-thumb");
        stage.dataset.src = `${rootPath}${SITE_CONFIG.lottiePath}${fileName}`;

        lottieContainer.appendChild(card);
        observer.observe(stage);
    });
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
        const imgTarget = e.target.closest('.image-card img, .thumb-container.image-thumb img, .workbook-item img, .js-lightbox');
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

//-------------- 7. Automatic Lottie Animation Injector ------------------------------

// --- Bulletproof & Lazy-Loaded Custom Lottie Web Component ---
class LottieBox extends HTMLElement {
    connectedCallback() {
        try {
            // 1. Safe Styling Setup
            this.style.display = 'block';
            this.style.width = this.getAttribute('width') || '100%';
            this.style.maxWidth = this.getAttribute('max-width') || '800px';
            this.style.height = this.getAttribute('height') || '600px';
            this.style.margin = this.getAttribute('margin') || '0 auto';

            const jsonFile = this.getAttribute('src') || 'MazeAnim.json';
            // Uses the global rootPath variable established at the top of your script
            const jsonPath = jsonFile.startsWith('http') ? jsonFile : `${rootPath}${jsonFile}`;
            
            const loopVal = this.getAttribute('loop') !== 'false';
            const autoplayVal = this.getAttribute('autoplay') !== 'false';

            // 2. Intersection Observer for Performance & Viewport Triggering
            const observerOptions = {
                root: null,
                rootMargin: '600px 0px', // Starts loading well before it enters the screen, so it's ready by the time you scroll to it
                threshold: 0.01
            };

            const observer = new IntersectionObserver((entries, observerInstance) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observerInstance.unobserve(entry.target); // Stop observing once triggered
                        
                        // 3. Safe Execution Check
                        loadLottieSafely(this, jsonPath, loopVal, autoplayVal);
                    }
                });
            }, observerOptions);

            observer.observe(this);

        } catch (initError) {
            console.error("LottieBox component failed to initialize:", initError);
        }
    }
}

// Register the custom element safely
if (!customElements.get('lottie-box')) {
    customElements.define('lottie-box', LottieBox);
}