document.addEventListener('DOMContentLoaded', () => {
    
    // --- THEME TOGGLE ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }
        localStorage.setItem('theme', theme);
    });
    
    // --- MOBILE NAVIGATION ---
    const menuToggleButton = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggleButton.classList.toggle('active');
        const isExpanded = menuToggleButton.getAttribute('aria-expanded') === 'true';
        menuToggleButton.setAttribute('aria-expanded', !isExpanded);
    });
    
    // --- HEADER SCROLL EFFECT ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- RENDER PROJECTS ---
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && typeof projects !== 'undefined') {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-project-id', project.id);
            
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-card__image">
                <div class="project-card__content">
                    <h3 class="project-card__title">${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-card__tags">
                        ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // --- PROJECT MODAL ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    projectsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (card) {
            const projectId = card.getAttribute('data-project-id');
            const project = projects.find(p => p.id == projectId);
            
            if (project) {
                modalTitle.textContent = project.title;
                modalContent.innerHTML = project.details;
                modal.classList.add('is-open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        }
    });

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__overlay') || e.target.closest('.modal__close')) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
    
    // --- FADE-IN ANIMATION ON SCROLL ---
    const faders = document.querySelectorAll('.section');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.classList.add('fade-in');
        appearOnScroll.observe(fader);
    });

    // --- RENDER CERTIFICATIONS & HANDLE MODAL ---
    const certificationsGrid = document.getElementById('certifications-grid');
    if (certificationsGrid && typeof certifications !== 'undefined') {
        // Render kartu sertifikasi
        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'project-card'; // Menggunakan style yang sama dengan project card
            card.setAttribute('data-cert-id', cert.id);
            
            card.innerHTML = `
                <div class="project-card__content">
                    <h3 class="project-card__title">${cert.title}</h3>
                    <p>Issued by: <strong>${cert.issuer}</strong></p>
                    <div class="project-card__tags" style="margin-top: 1rem;">
                        <span class="project-card__tag">View Details</span>
                    </div>
                </div>
            `;
            certificationsGrid.appendChild(card);
        });

        // Tambahkan event listener untuk modal
        certificationsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (card) {
                const certId = card.getAttribute('data-cert-id');
                const cert = certifications.find(c => c.id == certId);
                
                if (cert) {
                    modalTitle.textContent = cert.title;
                    // Buat konten modal dengan tombol link ke Drive
                    modalContent.innerHTML = `
                        ${cert.details}
                        <div class="modal__links">
                            <a href="${cert.driveLink}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
                        </div>
                    `;
                    modal.classList.add('is-open');
                    modal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    }

});