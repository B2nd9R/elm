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
    const grade = document.getElementById('prep-grade').value;
    const btn = document.getElementById('btn-generate-prep');
    const output = document.getElementById('prep-output');

    if (!topic) return alert(i18n.translations['demo_alert_no_topic'] || '...');

    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ...';
    btn.disabled = true;

    output.innerHTML = `<div class="empty-state" style="opacity:0.6"><i class="fa-solid fa-microchip fa-bounce"></i></div>`;

    setTimeout(() => {
        const resTitle = i18n.translations['demo_result_prep_title'] || 'خطة درس';
        const isArabic = i18n.currentLang === 'ar';

        output.innerHTML = `
            <div class="result-box" style="animation:fadeIn 0.5s; text-align:inherit;">
                <h4 style="color:var(--primary); margin-bottom:15px;"><i class="fa-solid fa-check-circle"></i> ${resTitle}: ${topic}</h4>
                <div style="background:var(--bg-soft); padding:20px; border-radius:10px; border-right:4px solid var(--primary);">
                    <p style="margin-bottom:15px; font-weight:600;">${isArabic ? '📚 المرحلة الدراسية' : '📚 Grade Level'}: <span style="color:var(--accent);">${grade}</span></p>
                    <ul style="list-style:none; padding:0; color:var(--text-main);">
                        <li style="margin-bottom:12px; padding:10px; background:#fff; border-radius:8px;">
                            <strong style="color:var(--primary);">${isArabic ? '🎯 الأهداف التعليمية' : '🎯 Learning Objectives'}:</strong><br>
                            <span style="color:var(--text-muted);">${isArabic ? 'تم توليد أهداف تعليمية واضحة ومتوافقة مع المناهج السعودية...' : 'Clear learning objectives aligned with Saudi curriculum generated...'}</span>
                        </li>
                        <li style="margin-bottom:12px; padding:10px; background:#fff; border-radius:8px;">
                            <strong style="color:var(--primary);">${isArabic ? '📖 المحتوى والشرح' : '📖 Content & Explanation'}:</strong><br>
                            <span style="color:var(--text-muted);">${isArabic ? 'شرح تفصيلي مع أمثلة من الثقافة المحلية والسياق السعودي...' : 'Detailed explanation with examples from local culture and Saudi context...'}</span>
                        </li>
                        <li style="margin-bottom:12px; padding:10px; background:#fff; border-radius:8px;">
                            <strong style="color:var(--primary);">${isArabic ? '✍️ الأنشطة والتقويم' : '✍️ Activities & Assessment'}:</strong><br>
                            <span style="color:var(--text-muted);">${isArabic ? 'أنشطة تفاعلية وأسئلة تقويمية تحاكي معايير "نافس"...' : 'Interactive activities and assessment questions matching "Nafis" standards...'}</span>
                        </li>
                    </ul>
                    <p style="margin-top:15px; font-size:0.85rem; color:var(--accent); text-align:center;">
                        <i class="fa-solid fa-sparkles"></i> ${isArabic ? 'تم التوليد بواسطة نموذج علّام (ALLaM) السعودي' : 'Generated by Saudi ALLaM Model'}
                    </p>
                </div>
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
        const isArabic = i18n.currentLang === 'ar';
        const wordCount = text.split(' ').length;

        output.innerHTML = `
            <div class="result-box" style="animation:fadeIn 0.5s; text-align:inherit;">
                <div style="background:var(--bg-soft); padding:20px; border:1px solid #eee; border-radius:10px; margin-bottom:20px;">
                    <h4 style="color:var(--primary); margin-bottom:15px;">
                        <i class="fa-solid fa-file-lines"></i> ${isArabic ? 'النص المُدخل' : 'Input Text'}
                    </h4>
                    <p style="color:var(--text-main); line-height:1.8; padding:15px; background:#fff; border-radius:8px;">
                        ${text.substring(0, 200)}${text.length > 200 ? '...' : ''}
                    </p>
                </div>
                
                <div style="background:linear-gradient(135deg, rgba(0,85,55,0.05), rgba(198,167,94,0.05)); padding:20px; border-radius:10px; border:2px solid var(--accent);">
                    <h4 style="color:var(--accent); margin-bottom:15px;">
                        <i class="fa-solid fa-check-double"></i> ${isArabic ? 'نتيجة التصحيح' : 'Correction Results'}
                    </h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px; padding:10px; background:#fff; border-radius:8px;">
                            <strong style="color:var(--primary);">${isArabic ? '📊 التقييم العام' : '📊 Overall Assessment'}:</strong>
                            <span style="color:var(--accent); font-weight:700;"> ${isArabic ? 'جيد جداً' : 'Very Good'}</span>
                        </li>
                        <li style="margin-bottom:10px; padding:10px; background:#fff; border-radius:8px;">
                            <strong style="color:var(--primary);">${isArabic ? '✍️ الدقة اللغوية' : '✍️ Language Accuracy'}:</strong>
                            <span style="color:var(--text-muted);"> ${isArabic ? 'تم اكتشاف وتصحيح الأخطاء النحوية والإملائية' : 'Grammar and spelling errors detected and corrected'}</span>
                        </li>
                        <li style="padding:10px; background:#fff; border-radius:8px;">
                            <strong style="color:var(--primary);">${isArabic ? '💡 التوصيات' : '💡 Recommendations'}:</strong>
                            <span style="color:var(--text-muted);"> ${isArabic ? 'تحسين التركيب اللغوي وتنويع المفردات' : 'Improve sentence structure and vocabulary variety'}</span>
                        </li>
                    </ul>
                    <p style="margin-top:15px; font-size:0.85rem; color:var(--accent); text-align:center;">
                        <i class="fa-solid fa-sparkles"></i> ${isArabic ? 'تم التصحيح بواسطة نموذج علّام (ALLaM)' : 'Corrected by ALLaM Model'}
                    </p>
                </div>
            </div>
        `;
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
};
