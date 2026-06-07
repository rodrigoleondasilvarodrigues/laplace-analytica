function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    mobileBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Supabase Configuration
    const supabaseUrl = 'https://nymhigtioibpnzhahttc.supabase.co';
    const supabaseKey = 'sb_publishable_lPGf5UXVBMKYYwSPC2XpXg_JlwcLwPL';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    // Google Sheets (Apps Script Web App URL — cole aqui após fazer o deploy)
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwMOkDjs0ay-_Tb0LFCJ18aKb4YVjv4zxXcpz7oHU3DCLmqJyxrp9Q-EQ3r45Xt3n2v/exec';

    async function handleFormSubmit(event, formId) {
        event.preventDefault();
        const form = document.getElementById(formId);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;

        // Loading state
        submitBtn.innerText = 'Enviando...';
        submitBtn.disabled = true;

        // Gather form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Envia pro Supabase e pro Google Sheets ao mesmo tempo
            const supabaseInsert = supabase
                .from('leads')
                .insert([{
                    person_name: data.person_name,
                    company_name: data.company_name,
                    email: data.email,
                    phone: data.phone,
                    instagram: data.instagram,
                    role: data.role,
                    revenue: data.revenue,
                    budget: data.budget
                }]);

            if (APPS_SCRIPT_URL !== 'COLE_A_URL_AQUI') {
                const params = new URLSearchParams({
                    person_name: data.person_name || '',
                    company_name: data.company_name || '',
                    email: data.email || '',
                    phone: data.phone || '',
                    instagram: data.instagram || '',
                    role: data.role || '',
                    revenue: data.revenue || '',
                    budget: data.budget || ''
                });
                fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
                    method: 'GET',
                    mode: 'no-cors'
                });
            }

            const { error } = await supabaseInsert;
            if (error) throw error;

            // Success state
            submitBtn.innerText = 'Enviado com Sucesso!';
            submitBtn.style.background = '#10b981';

            showToast(`Obrigado, ${data.person_name}! Entraremos em contato em breve.`, 'success');

            // Reset form
            form.reset();

            // Close modal if applicable
            if (formId === 'modalLeadForm') {
                setTimeout(() => {
                    closeContactModal();
                }, 2000);
            }

        } catch (error) {
            console.error('Error submitting lead:', error);
            showToast('Erro ao enviar. Por favor, tente novamente.', 'error');
            submitBtn.innerText = 'Erro ao Enviar';
            submitBtn.style.background = '#ef4444';
        } finally {
            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    }

    // Attach handlers to both forms
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => handleFormSubmit(e, 'leadForm'));
    }

    const modalLeadForm = document.getElementById('modalLeadForm');
    if (modalLeadForm) {
        modalLeadForm.addEventListener('submit', (e) => handleFormSubmit(e, 'modalLeadForm'));
    }

    // Smooth Scroll for Anchor Links (Polyfill-like behavior if needed, but CSS scroll-behavior covers most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Projects Auto-scroll (direita para esquerda, infinito)
    const track = document.querySelector('.projects-track');

    if (track) {
        const slides = Array.from(track.querySelectorAll('.project-slide'));
        slides.forEach(slide => track.appendChild(slide.cloneNode(true)));

        const cardWidth = 224;
        const originalWidth = slides.length * cardWidth;
        let scrollAmount = 0;

        setInterval(() => {
            scrollAmount += cardWidth;
            track.style.transition = 'transform 0.6s ease-in-out';
            track.style.transform = `translateX(-${scrollAmount}px)`;

            if (scrollAmount >= originalWidth) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    scrollAmount = 0;
                    track.style.transform = `translateX(0)`;
                }, 650);
            }
        }, 2800);
    }
});

function scrollToForm() {
    const formCard = document.getElementById('capture-card');
    if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Modal Logic
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'flex';
        // Small delay to allow display:flex to apply before adding class for transition
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match transition duration
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeContactModal();
    }
}
