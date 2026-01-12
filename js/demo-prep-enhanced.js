// Enhanced Demo Functions with Realistic Pitch-Style Outputs

// --- Mock AI: Smart Prep (Enhanced Version) ---
window.runPrepDemo = () => {
    const topic = document.getElementById('prep-topic').value;
    const grade = document.getElementById('prep-grade').value;
    const btn = document.getElementById('btn-generate-prep');
    const output = document.getElementById('prep-output');

    if (!topic) return alert(i18n.translations['demo_alert_no_topic'] || 'الرجاء إدخال العنوان');

    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التوليد...';
    btn.disabled = true;

    output.innerHTML = `<div class="empty-state" style="opacity:0.6"><i class="fa-solid fa-microchip fa-bounce"></i></div>`;

    setTimeout(() => {
        const isArabic = i18n.currentLang === 'ar';

        output.innerHTML = `
            <div class="result-box" style="animation:fadeIn 0.5s; text-align:inherit;">
                <!-- Premium Header -->
                <div style="background:linear-gradient(135deg, #005537 0%, #C6A75E 100%); color:#fff; padding:25px; border-radius:12px 12px 0 0; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
                    <h3 style="margin:0; display:flex; align-items:center; gap:12px; font-size:1.4rem;">
                        <i class="fa-solid fa-sparkles fa-beat-fade"></i>
                        ${isArabic ? 'خطة درس جاهزة للاستخدام' : 'Ready-to-Use Lesson Plan'}: ${topic}
                    </h3>
                    <p style="margin:12px 0 0; opacity:0.95; font-size:0.95rem; display:flex; align-items:center; gap:15px; flex-wrap:wrap;">
                        <span><i class="fa-solid fa-graduation-cap"></i> ${isArabic ? `المرحلة: ${grade}` : `Grade: ${grade}`}</span>
                        <span><i class="fa-solid fa-clock"></i> ${isArabic ? 'تم التوليد في 2.3 ثانية' : 'Generated in 2.3s'}</span>
                        <span><i class="fa-solid fa-shield-halved"></i> ${isArabic ? 'نموذج علّام السعودي' : 'Saudi ALLaM Model'}</span>
                    </p>
                </div>
                
                <div style="background:#fff; padding:30px; border:1px solid #e0e0e0; border-top:none; border-radius:0 0 12px 12px; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
                    <!-- Organized Summary -->
                    <div style="background:linear-gradient(to right, rgba(0,85,55,0.05), rgba(198,167,94,0.05)); padding:25px; border-radius:10px; margin-bottom:25px; border-right:5px solid var(--primary);">
                        <h4 style="color:var(--primary); margin:0 0 18px 0; display:flex; align-items:center; gap:10px; font-size:1.2rem;">
                            <i class="fa-solid fa-book-open"></i>
                            ${isArabic ? 'الملخص المنظم' : 'Organized Summary'}
                        </h4>
                        <p style="line-height:2; color:var(--text-main); margin:0; font-size:1.05rem;">
                            ${isArabic
                ? `يتناول هذا الدرس موضوع <strong>"${topic}"</strong> بأسلوب تفاعلي يناسب طلاب <strong>${grade}</strong>. يهدف إلى تعزيز الفهم العميق من خلال <span style="background:rgba(198,167,94,0.15); padding:2px 8px; border-radius:4px;">أمثلة محلية</span> و<span style="background:rgba(0,85,55,0.15); padding:2px 8px; border-radius:4px;">تطبيقات عملية</span> مرتبطة بالواقع السعودي والثقافة المحلية.`
                : `This lesson covers <strong>"${topic}"</strong> in an interactive style suitable for <strong>${grade}</strong> students. It aims to enhance deep understanding through <span style="background:rgba(198,167,94,0.15); padding:2px 8px; border-radius:4px;">local examples</span> and <span style="background:rgba(0,85,55,0.15); padding:2px 8px; border-radius:4px;">practical applications</span> related to Saudi context.`
            }
                        </p>
                    </div>

                    <!-- Key Points with Icons -->
                    <div style="margin-bottom:25px;">
                        <h4 style="color:var(--accent); margin:0 0 18px 0; display:flex; align-items:center; gap:10px; font-size:1.2rem;">
                            <i class="fa-solid fa-list-check"></i>
                            ${isArabic ? 'النقاط الرئيسية' : 'Key Points'}
                        </h4>
                        <div style="display:grid; gap:12px;">
                            <div style="padding:18px; background:#f8f9fa; border-radius:8px; border-right:4px solid var(--accent); transition:all 0.3s; cursor:pointer;" onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='#f8f9fa'">
                                <div style="display:flex; align-items:start; gap:12px;">
                                    <span style="font-size:1.5rem;">📚</span>
                                    <div>
                                        <strong style="color:var(--primary); font-size:1.05rem;">${isArabic ? 'التعريف والمفهوم الأساسي' : 'Definition and Basic Concept'}</strong>
                                        <p style="margin:8px 0 0; color:var(--text-muted); line-height:1.7;">${isArabic ? 'شرح واضح مع أمثلة من التراث العربي والثقافة السعودية' : 'Clear explanation with examples from Arab heritage and Saudi culture'}</p>
                                    </div>
                                </div>
                            </div>
                            <div style="padding:18px; background:#f8f9fa; border-radius:8px; border-right:4px solid var(--accent); transition:all 0.3s; cursor:pointer;" onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='#f8f9fa'">
                                <div style="display:flex; align-items:start; gap:12px;">
                                    <span style="font-size:1.5rem;">🎯</span>
                                    <div>
                                        <strong style="color:var(--primary); font-size:1.05rem;">${isArabic ? 'التطبيقات العملية' : 'Practical Applications'}</strong>
                                        <p style="margin:8px 0 0; color:var(--text-muted); line-height:1.7;">${isArabic ? 'ربط المفاهيم بالحياة اليومية والواقع المحلي' : 'Connecting concepts to daily life and local reality'}</p>
                                    </div>
                                </div>
                            </div>
                            <div style="padding:18px; background:#f8f9fa; border-radius:8px; border-right:4px solid var(--accent); transition:all 0.3s; cursor:pointer;" onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='#f8f9fa'">
                                <div style="display:flex; align-items:start; gap:12px;">
                                    <span style="font-size:1.5rem;">✍️</span>
                                    <div>
                                        <strong style="color:var(--primary); font-size:1.05rem;">${isArabic ? 'الأنشطة التفاعلية' : 'Interactive Activities'}</strong>
                                        <p style="margin:8px 0 0; color:var(--text-muted); line-height:1.7;">${isArabic ? 'تمارين متدرجة الصعوبة تناسب جميع مستويات الطلاب' : 'Graduated exercises suitable for all student levels'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Ready Questions (Nafis Standard) -->
                    <div style="background:linear-gradient(135deg, #fff 0%, #f8f9fa 100%); padding:25px; border-radius:10px; border:2px solid #e0e0e0; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                        <h4 style="color:var(--primary); margin:0 0 18px 0; display:flex; align-items:center; gap:10px; font-size:1.2rem;">
                            <i class="fa-solid fa-clipboard-question"></i>
                            ${isArabic ? 'أسئلة جاهزة (تحاكي معايير "نافس")' : 'Ready Questions (Matching "Nafis" Standards)'}
                        </h4>
                        <div style="display:grid; gap:15px;">
                            <div style="padding:20px; background:#fff; border-radius:8px; border:1px solid #ddd; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
                                <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                                    <span style="background:var(--primary); color:#fff; padding:6px 14px; border-radius:20px; font-size:0.85rem; font-weight:700;">
                                        ${isArabic ? 'سؤال 1 - فهم' : 'Q1 - Understanding'}
                                    </span>
                                    <span style="color:var(--accent); font-size:0.85rem;"><i class="fa-solid fa-star"></i> ${isArabic ? 'سهل' : 'Easy'}</span>
                                </div>
                                <p style="margin:0; color:var(--text-main); font-size:1.05rem; line-height:1.8;">
                                    ${isArabic ? `ما المقصود بـ "<strong>${topic}</strong>"؟ اذكر مثالاً من واقعك اليومي.` : `What is meant by "<strong>${topic}</strong>"? Give an example from your daily life.`}
                                </p>
                            </div>
                            <div style="padding:20px; background:#fff; border-radius:8px; border:1px solid #ddd; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
                                <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                                    <span style="background:var(--accent); color:#fff; padding:6px 14px; border-radius:20px; font-size:0.85rem; font-weight:700;">
                                        ${isArabic ? 'سؤال 2 - تحليل' : 'Q2 - Analysis'}
                                    </span>
                                    <span style="color:#ffc107; font-size:0.85rem;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ${isArabic ? 'متوسط' : 'Medium'}</span>
                                </div>
                                <p style="margin:0; color:var(--text-main); font-size:1.05rem; line-height:1.8;">
                                    ${isArabic ? 'قارن بين... واذكر أوجه التشابه والاختلاف (سؤال تحليلي متقدم)' : 'Compare between... and mention similarities and differences (advanced analytical question)'}
                                </p>
                            </div>
                            <div style="padding:20px; background:#fff; border-radius:8px; border:1px solid #ddd; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
                                <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                                    <span style="background:#dc3545; color:#fff; padding:6px 14px; border-radius:20px; font-size:0.85rem; font-weight:700;">
                                        ${isArabic ? 'سؤال 3 - تطبيق' : 'Q3 - Application'}
                                    </span>
                                    <span style="color:#dc3545; font-size:0.85rem;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ${isArabic ? 'صعب' : 'Hard'}</span>
                                </div>
                                <p style="margin:0; color:var(--text-main); font-size:1.05rem; line-height:1.8;">
                                    ${isArabic ? 'كيف يمكن تطبيق هذا المفهوم في حل مشكلة واقعية؟ (سؤال تطبيقي عالي المستوى)' : 'How can this concept be applied to solve a real problem? (high-level application question)'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Export & Stats -->
                    <div style="margin-top:30px; text-align:center; padding-top:25px; border-top:3px dashed #ddd;">
                        <button style="background:linear-gradient(135deg, var(--accent) 0%, #d4a574 100%); color:#fff; border:none; padding:16px 40px; border-radius:30px; font-weight:700; cursor:pointer; font-size:1.1rem; box-shadow:0 6px 20px rgba(198,167,94,0.4); transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(198,167,94,0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(198,167,94,0.4)'">
                            <i class="fa-solid fa-file-pdf"></i> ${isArabic ? 'تصدير كملف PDF جاهز للطباعة' : 'Export as PDF Ready to Print'}
                        </button>
                        <div style="margin-top:20px; display:flex; justify-content:center; gap:30px; flex-wrap:wrap; font-size:0.95rem;">
                            <span style="color:var(--primary); font-weight:600;"><i class="fa-solid fa-clock"></i> ${isArabic ? 'وفّر 80% من وقت التحضير' : 'Save 80% of prep time'}</span>
                            <span style="color:var(--accent); font-weight:600;"><i class="fa-solid fa-chart-line"></i> ${isArabic ? 'جودة عالية متوافقة مع المناهج' : 'High quality aligned with curriculum'}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 2300);
};

// Export to make it available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { runPrepDemo };
}
