// --- I18n Manager ---
class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('elm_lang') || 'ar';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations(this.currentLang);
        this.applyTranslations();
        this.updateDirection();
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`i18n/${lang}.json`);
            this.translations = await response.json();
        } catch (e) {
            console.error('Failed to load translations', e);
        }
    }

    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (this.translations[key]) {
                el.innerHTML = this.translations[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (this.translations[key]) {
                el.placeholder = this.translations[key];
            }
        });

        document.querySelectorAll('[data-i18n-meta]').forEach(el => {
            const key = el.getAttribute('data-i18n-meta');
            if (this.translations[key]) {
                el.setAttribute('content', this.translations[key]);
            }
        });

        document.querySelectorAll('[data-i18n-href]').forEach(el => {
            const key = el.getAttribute('data-i18n-href');
            if (this.translations[key]) {
                el.setAttribute('href', this.translations[key]);
            }
        });
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) toggleBtn.textContent = this.currentLang === 'ar' ? 'English' : 'عربي';
    }

    updateDirection() {
        const dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', this.currentLang);
    }

    async switchLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('elm_lang', this.currentLang);
        await this.loadTranslations(this.currentLang);
        this.applyTranslations();
        this.updateDirection();
    }
}

// Initialize Global
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18nManager();
});

// --- Mobile Menu Logic ---
window.toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleBtn = document.querySelector('.mobile-toggle');
    const icon = toggleBtn.querySelector('i');

    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');

    toggleBtn.setAttribute('aria-expanded', isActive);

    // Toggle Icon
    if (isActive) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
};

// Close menu when clicking a link
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const toggleBtn = document.querySelector('.mobile-toggle');

    // Close on Link Click
    if (e.target.closest('.nav-link')) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        }
    }

    // Close on Click Outside
    if (!e.target.closest('.nav-container')) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            }
        }
    }
});

// --- Internal Demo Router (Widget Only) ---
window.demoRouter = (panelId) => {
    // 1. Sidebar Active
    document.querySelectorAll('.demo-nav li').forEach(el => el.classList.remove('active'));
    const clickedItem = document.querySelector(`.demo-nav li[onclick*="'${panelId}'"]`);
    if (clickedItem) clickedItem.classList.add('active');

    // 2. Switch Panel
    document.querySelectorAll('.demo-panel').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    const target = document.getElementById(`demo-${panelId}`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
};

// --- Mock AI: Smart Prep ---
window.runPrepDemo = () => {
    const topic = document.getElementById('prep-topic').value;
    const btn = document.getElementById('btn-generate-prep');
    const output = document.getElementById('prep-output');

    if (!topic) return alert(i18n.translations['demo_alert_no_topic'] || '...');

    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ...';
    btn.disabled = true;

    output.innerHTML = `<div class="empty-state" style="opacity:0.6"><i class="fa-solid fa-microchip fa-bounce"></i></div>`;

    setTimeout(() => {
        const resTitle = i18n.translations['demo_result_prep_title'] || '...';
        output.innerHTML = `
            <div class="result-box" style="animation:fadeIn 0.5s; text-align:inherit;">
                <h4 style="color:var(--primary); margin-bottom:10px;"><i class="fa-solid fa-check-circle"></i> ${resTitle}: ${topic}</h4>
                <ul style="list-style:disc; margin-inline-start:20px; color:var(--text-muted);">
                    <li><strong>${i18n.currentLang === 'ar' ? 'التمهيد' : 'Intro'}:</strong> ...</li>
                    <li><strong>${i18n.currentLang === 'ar' ? 'شرح القاعدة' : 'Explanation'}:</strong> ...</li>
                    <li><strong>${i18n.currentLang === 'ar' ? 'التقويم' : 'Evaluation'}:</strong> ...</li>
                </ul>
            </div>
        `;
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
};

// --- Mock AI: Auto Correct ---
window.runCorrectDemo = () => {
    const text = document.getElementById('correct-input').value;
    const btn = document.getElementById('btn-run-correct');
    const output = document.getElementById('correct-output');

    if (!text) return alert(i18n.translations['demo_alert_no_text'] || '...');

    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ...';
    btn.disabled = true;

    output.innerHTML = `<div class="empty-state" style="opacity:0.6"><i class="fa-solid fa-cloud-bolt fa-bounce"></i></div>`;

    setTimeout(() => {
        const resEval = i18n.translations['demo_result_correct_eval'] || '...';
        const resBy = i18n.translations['demo_result_correct_by'] || '...';
        output.innerHTML = `
            <div class="result-box" style="animation:fadeIn 0.5s; text-align:inherit;">
                <div style="background:var(--bg-soft); padding:15px; border:1px solid #eee; border-radius:10px; margin-bottom:15px; color:var(--text-main);">
                    <span class="error-mark" style="background:rgba(255,0,0,0.1); border-bottom:2px solid red;">${text.split(' ')[0] || '...'}</span> ...
                </div>
                <p style="color:var(--primary); font-weight:bold; margin-bottom:5px;">${resEval}</p>
                <small style="color:var(--text-muted); opacity:0.8;">${resBy}</small>
            </div>
        `;
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
};
