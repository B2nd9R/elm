// Enhanced Correction Demo with Color-Coded Errors and Analytics

window.runCorrectDemo = () => {
    const text = document.getElementById('correct-input').value;
    const btn = document.getElementById('btn-run-correct');
    const output = document.getElementById('correct-output');

    if (!text) return alert(i18n.translations['demo_alert_no_text'] || 'الرجاء إدخال النص');

    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التحليل...';
    btn.disabled = true;

    output.innerHTML = `<div class="empty-state" style="opacity:0.6"><i class="fa-solid fa-cloud-bolt fa-bounce"></i></div>`;

    setTimeout(() => {
        const isArabic = i18n.currentLang === 'ar';
        const sampleText = text.substring(0, 150);
        const words = text.split(' ');

        output.innerHTML = `
            <div class="result-box" style="animation:fadeIn 0.5s; text-align:inherit;">
                <!-- Premium Header -->
                <div style="background:linear-gradient(135deg, #005537 0%, #C6A75E 100%); color:#fff; padding:25px; border-radius:12px 12px 0 0; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
                    <h3 style="margin:0; display:flex; align-items:center; gap:12px; font-size:1.4rem;">
                        <i class="fa-solid fa-check-double fa-beat-fade"></i>
                        ${isArabic ? 'تحليل شامل للنص' : 'Comprehensive Text Analysis'}
                    </h3>
                    <p style="margin:12px 0 0; opacity:0.95; font-size:0.95rem; display:flex; align-items:center; gap:15px; flex-wrap:wrap;">
                        <span><i class="fa-solid fa-user"></i> ${isArabic ? 'الطالب: خالد' : 'Student: Khaled'}</span>
                        <span><i class="fa-solid fa-clock"></i> ${isArabic ? 'تم التحليل في 1.8 ثانية' : 'Analyzed in 1.8s'}</span>
                        <span><i class="fa-solid fa-shield-halved"></i> ${isArabic ? 'نموذج علّام' : 'ALLaM Model'}</span>
                    </p>
                </div>

                <div style="background:#fff; padding:30px; border:1px solid #e0e0e0; border-top:none; border-radius:0 0 12px 12px; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
                    <!-- Color-Coded Text Analysis -->
                    <div style="background:#f8f9fa; padding:25px; border-radius:10px; margin-bottom:25px; border:2px solid #e0e0e0;">
                        <h4 style="color:var(--primary); margin:0 0 18px 0; display:flex; align-items:center; gap:10px; font-size:1.2rem;">
                            <i class="fa-solid fa-file-lines"></i>
                            ${isArabic ? 'النص مع التصحيحات الملونة' : 'Text with Color-Coded Corrections'}
                        </h4>
                        <div style="line-height:2.2; padding:20px; background:#fff; border-radius:8px; border:1px solid #ddd; font-size:1.05rem;">
                            <span style="background:rgba(220,53,69,0.15); border-bottom:3px solid #dc3545; padding:3px 6px; border-radius:4px; cursor:help; transition:all 0.3s;" title="${isArabic ? 'خطأ نحوي: يجب استخدام الفعل الماضي' : 'Grammar Error: Past tense should be used'}" onmouseover="this.style.background='rgba(220,53,69,0.25)'" onmouseout="this.style.background='rgba(220,53,69,0.15)'">
                                ${words[0] || 'كلمة'}
                            </span>
                            <span> ${words.slice(1, 5).join(' ')} </span>
                            <span style="background:rgba(255,193,7,0.15); border-bottom:3px solid #ffc107; padding:3px 6px; border-radius:4px; cursor:help; transition:all 0.3s;" title="${isArabic ? 'خطأ إملائي: التاء المربوطة بدلاً من المفتوحة' : 'Spelling Error: Ta Marbuta instead of Ta Maftuha'}" onmouseover="this.style.background='rgba(255,193,7,0.25)'" onmouseout="this.style.background='rgba(255,193,7,0.15)'">
                                ${words[5] || 'كلمة'}
                            </span>
                            <span> ${words.slice(6, 10).join(' ')} </span>
                            <span style="background:rgba(0,123,255,0.15); border-bottom:3px solid #007bff; padding:3px 6px; border-radius:4px; cursor:help; transition:all 0.3s;" title="${isArabic ? 'تحسين أسلوبي: يُفضل استخدام مرادف أكثر دقة' : 'Style Improvement: A more precise synonym is preferred'}" onmouseover="this.style.background='rgba(0,123,255,0.25)'" onmouseout="this.style.background='rgba(0,123,255,0.15)'">
                                ${words[10] || 'كلمة'}
                            </span>
                            <span> ${words.slice(11).join(' ')}...</span>
                        </div>
                        <div style="display:flex; gap:20px; margin-top:18px; flex-wrap:wrap; font-size:0.95rem; justify-content:center;">
                            <span style="display:flex; align-items:center; gap:8px; padding:8px 15px; background:#fff; border-radius:20px; border:1px solid #ddd;">
                                <span style="display:inline-block; width:14px; height:14px; background:#dc3545; border-radius:3px;"></span>
                                <strong>${isArabic ? 'نحوي' : 'Grammar'}</strong>
                            </span>
                            <span style="display:flex; align-items:center; gap:8px; padding:8px 15px; background:#fff; border-radius:20px; border:1px solid #ddd;">
                                <span style="display:inline-block; width:14px; height:14px; background:#ffc107; border-radius:3px;"></span>
                                <strong>${isArabic ? 'إملائي' : 'Spelling'}</strong>
                            </span>
                            <span style="display:flex; align-items:center; gap:8px; padding:8px 15px; background:#fff; border-radius:20px; border:1px solid #ddd;">
                                <span style="display:inline-block; width:14px; height:14px; background:#007bff; border-radius:3px;"></span>
                                <strong>${isArabic ? 'أسلوبي' : 'Style'}</strong>
                            </span>
                        </div>
                    </div>

                    <!-- Educational Feedback (Like in Pitch) -->
                    <div style="background:linear-gradient(135deg, rgba(198,167,94,0.1) 0%, rgba(0,85,55,0.05) 100%); padding:25px; border-radius:10px; border-right:5px solid var(--accent); margin-bottom:25px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                        <h4 style="color:var(--accent); margin:0 0 18px 0; display:flex; align-items:center; gap:10px; font-size:1.2rem;">
                            <i class="fa-solid fa-comment-dots"></i>
                            ${isArabic ? 'تعليق تربوي مخصص' : 'Personalized Educational Feedback'}
                        </h4>
                        <div style="background:#fff; padding:22px; border-radius:8px; border:1px solid #ddd;">
                            <p style="margin:0; line-height:2; color:var(--text-main); font-size:1.05rem;">
                                <strong style="color:var(--primary); font-size:1.15rem;">💚 ${isArabic ? 'عمل رائع يا خالد!' : 'Great work, Khaled!'}</strong><br><br>
                                ${isArabic
                ? 'لديك فهم جيد للموضوع وأسلوب كتابة واضح. <strong style="color:var(--accent);">انتبه مستقبلاً للفرق بين التاء المربوطة (ة) والتاء المفتوحة (ت)</strong> لمزيد من الإتقان. استمر في هذا المستوى الممتاز! 🌟'
                : 'You have a good understanding of the topic and a clear writing style. <strong style="color:var(--accent);">Pay attention in the future to the difference between Ta Marbuta (ة) and Ta Maftuha (ت)</strong> for more mastery. Keep up this excellent level! 🌟'
            }
                            </p>
                        </div>
                    </div>

                    <!-- Interactive Analytics Dashboard (As in Pitch) -->
                    <div style="background:#f8f9fa; padding:25px; border-radius:10px; border:2px solid #e0e0e0;">
                        <h4 style="color:var(--primary); margin:0 0 20px 0; display:flex; align-items:center; gap:10px; font-size:1.2rem;">
                            <i class="fa-solid fa-chart-pie"></i>
                            ${isArabic ? 'لوحة البيانات التفاعلية' : 'Interactive Analytics Dashboard'}
                        </h4>
                        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:18px; margin-bottom:20px;">
                            <div style="background:linear-gradient(135deg, #fff 0%, #f8f9fa 100%); padding:22px; border-radius:10px; text-align:center; border:2px solid #ddd; box-shadow:0 3px 10px rgba(0,0,0,0.08); transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)'">
                                <div style="font-size:2.5rem; color:var(--accent); font-weight:800; margin-bottom:8px;">70%</div>
                                <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">
                                    <i class="fa-solid fa-users"></i><br>
                                    ${isArabic ? 'من الطلاب يواجهون صعوبة في همزة الوصل والقطع' : 'Students struggle with Hamza types'}
                                </div>
                            </div>
                            <div style="background:linear-gradient(135deg, #fff 0%, #f8f9fa 100%); padding:22px; border-radius:10px; text-align:center; border:2px solid #ddd; box-shadow:0 3px 10px rgba(0,0,0,0.08); transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)'">
                                <div style="font-size:2.5rem; color:var(--primary); font-weight:800; margin-bottom:8px;">85%</div>
                                <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">
                                    <i class="fa-solid fa-star"></i><br>
                                    ${isArabic ? 'الدقة الإجمالية للطالب خالد' : 'Khaled\'s Overall Accuracy'}
                                </div>
                            </div>
                            <div style="background:linear-gradient(135deg, #fff 0%, #f8f9fa 100%); padding:22px; border-radius:10px; text-align:center; border:2px solid #ddd; box-shadow:0 3px 10px rgba(0,0,0,0.08); transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)'">
                                <div style="font-size:2.5rem; color:#28a745; font-weight:800; margin-bottom:8px;">+20%</div>
                                <div style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">
                                    <i class="fa-solid fa-arrow-trend-up"></i><br>
                                    ${isArabic ? 'تحسن عن الواجب السابق' : 'Improvement from last assignment'}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Smart Recommendation -->
                        <div style="margin-top:20px; padding:20px; background:rgba(0,85,55,0.05); border-radius:8px; border-right:4px solid var(--primary);">
                            <p style="margin:0; font-size:1rem; color:var(--text-main); line-height:1.9;">
                                <strong style="color:var(--primary); font-size:1.1rem;">💡 ${isArabic ? 'توصية ذكية (التعليم الموجّه بالبيانات)' : 'Smart Recommendation (Data-Driven Education)'}:</strong><br><br>
                                ${isArabic
                ? 'بناءً على تحليل أنماط الأخطاء، يُنصح <strong>الأستاذ محمد</strong> بتصميم <span style="background:rgba(198,167,94,0.2); padding:2px 8px; border-radius:4px; font-weight:600;">درس مخصص حول "همزة الوصل والقطع"</span> لمعالجة هذه الفجوة بدقة. سيساعد ذلك في تحسين أداء 70% من الطلاب.'
                : 'Based on error pattern analysis, <strong>Teacher Mohammed</strong> is recommended to design <span style="background:rgba(198,167,94,0.2); padding:2px 8px; border-radius:4px; font-weight:600;">a dedicated lesson on "Hamza types"</span> to address this gap precisely. This will help improve the performance of 70% of students.'
            }
                            </p>
                        </div>
                    </div>

                    <!-- Footer Message -->
                    <div style="margin-top:30px; text-align:center; padding-top:25px; border-top:3px dashed #ddd;">
                        <p style="margin:0; font-size:1.1rem; color:var(--primary); font-weight:600;">
                            <i class="fa-solid fa-sparkles"></i> ${isArabic ? 'هذا هو التعليم الموجّه بالبيانات' : 'This is Data-Driven Education'} <i class="fa-solid fa-sparkles"></i>
                        </p>
                        <p style="margin:12px 0 0; font-size:0.9rem; color:var(--text-muted);">
                            ${isArabic ? 'تحويل وقت المعلم من مهام روتينية... إلى إبداع وتفاعل' : 'Transforming teacher time from routine tasks... to creativity and interaction'}
                        </p>
                    </div>
                </div>
            </div>
        `;
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1800);
};

// Export to make it available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { runCorrectDemo };
}
