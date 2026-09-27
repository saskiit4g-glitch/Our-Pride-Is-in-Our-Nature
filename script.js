/**
 * ==========================================================================
 * مشروع اليوم الوطني السعودي - منصة "عزنا بطبعنا"
 * الملف: js/main.js
 * المطور: سامي نوح قورير
 * المدرسة: مدرسة الإمام السخاوي الثانوية
 * الوصف: نظام التفاعلية المتقدم، القاموس المتعدد اللغات، وإدارة الوسائط
 * ==========================================================================
 */

'use strict';

// 1. قاموس الترجمة المتقدم المتعدد اللغات
const translations = {
    ar: {
        platform_title: "عزنا بطبعنا",
        nav_home: "الرئيسية",
        nav_about: "من نحن وعن المشروع",
        nav_main_video: "الفلم الوثائقي",
        nav_games: "مكتبة الألعاب الشعبية",
        nav_flag: "رمز الراية السعودية",
        hero_badge: "المشروع الوطني التراثي 1448 / 2026",
        hero_heading: "عزنا بطبعنا",
        hero_subheading: "منصة إلكترونية احتفالية توثق أصل الألعاب الشعبية السعودية والموروث الثقافي الأصيل لمملكتنا الحبيبة.",
        btn_watch: "شاهد الوثائقي الرئيسي",
        btn_explore: "استكشف الألعاب الشعبية",
        about_section_title: "من نحن وما هي فلسفة \"عزنا بطبعنا\"؟",
        about_section_subtitle: "تعريف شامل باليوم الوطني السعودي، وبمعنى \"العز\" و\"الطبع\"، ورسالة المنصة التراثية.",
        about_national_day_title: "عن اليوم الوطني السعودي",
        about_national_day_desc: "هو يوم توحيد المملكة العربية السعودية على يد المغفور له بإذن الله الملك عبد العزيز بن عبد الرحمن آل سعود. نمرّ في كل عام بهذه المناسبة العزيزة لنستذكر فيها ملحمة التأسيس والبناء، ونحتفي بالرؤية الوطنية والتقدم الشامل مع الحفاظ على الجذور.",
        about_eizz_title: "معنى \"العِــز\"",
        about_eizz_desc: "\"العز\" هو الشموخ والأنفة والكرامة والتلاحم الوطني. هو شعور الفخر المستمد من التوحيد والقيادة الحكيمة، والاعتزاز بتاريخ عريق يرفع رأس كل سعودي وسعودية بين الأمم في الماضي والحاضر والمستقبل.",
        about_tabaa_title: "معنى \"الطَّبِـع\"",
        about_tabaa_desc: "\"الطبع\" هو السجية الأصيلة والشيم العربية والتراث الموروث أبتاً عن جد. يتجسد هذا الطبع في الكرم والنخوة والمروءة والألعاب التراثية الشعبية التي شكلت طفولة الأجداد والآباء وحافظت على الروابط الاجتماعية.",
        about_project_title: "عن المنصة والمشروع المدرسي",
        about_project_desc: "منصة \"عزنا بطبعنا\" هي مبادرة رقمية احتفالية توثق الموروث الشعبي السعودي والألعاب التراثية من مقاطع وثائقية مرئية متكاملة، تهدف إلى إحياء الذاكرة الوطنية ونقل قيم التراث إلى الجيل الصاعد.",
        student_dev: "إعداد وتطوير الطالب: سامي نوح كورير",
        student_school: "المدرسة: مدرسة الإمام السخاوي الثانوية",
        main_video_title: "🎬 الفلم الوثائقي الشامل للألعاب الشعبية",
        main_video_desc: "العرض الكامل الموثق للألعاب الشعبية والتراثية في مختلف مناطق المملكة العربية السعودية. يرجى مشاهدة المقطع للتعرف على الروابط الاجتماعية والتاريخية لألعاب الأجداد.",
        video_info_title: "معلومات المقطع الوثائقي",
        video_info_source: "المصدر: وزارة الثقافة - المملكة العربية السعودية",
        video_info_topic: "الموضوع: الموروث الثقافي والألعاب الشعبية الأصيلة",
        video_info_duration: "المدة: 1:41 دقيقة",
        video_info_scope: "النطاق: كافة مناطق المملكة العربية السعودية",
        games_section_title: "📜 موسوعة الألعاب الشعبية التفصيلية",
        games_section_desc: "استعرض كل لعبة شعبية على حدة مع المقطع المخصص لها وشرح مفصل لأسلوب لعبها ومبادئها التراثية:",
        game_danna_text: "لعبة حركة ومهارة فردية وجماعية شهيرة في التراث السعودي. يعتمد فيها الطفل على عجلة معدنية أو دائرية مثبتة بسلك أو عصا مخصصة، ويقوم بالركض الحر وهو يدفها ببراعة للتسابق والتوازن والوصول إلى نقطة النهاية المحددة مسبقاً دون أن تسقط العجلة.",
        game_masaqil_text: "لعبة تصويب وتدريب على التركيز الدقيق. يُستخدم فيها كرات زجاجية أو حجرية صغيرة مستديرة تسمى (المسقال). يرتكز اللاعبون على الأرض لتصويب كراتهم باتجاه كرات المنافسين أو هدف محدد وسط حلقة مخصصة، ويتفوق فيها من يمتلك الدقة الأعلى والقدرة على التحكم بالقوة.",
        game_khatta_text: "لعبة توازن وحركة خفيفة تُمارس برسم مربعات ترابية أو جيرية متسلسلة على الأرض. يقوم اللاعب برمي حجر صغير داخل إحدى المربعات، ثم يرمي ويتحرك بالقفز على قدم واحدة لتجاوز المربعات بمهارة وتوازن دون ملامسة الخطوط المحددة.",
        game_ghamayda_text: "واحدة من أشهر الألعاب الجماعية الاجتماعية. يقوم أحد اللاعبين بوضع يديه على عينيه وعدّ أرقام معينة بينما يهرع بقية المشاركين للاختباء في المكان. يبدأ بعدها بالبحث عنهم، واللاعب الذي يُكتشف أولاً أو يُلمس يصبح هو الباحث في الجولة التالية.",
        game_nabata_text: "لعبة تراثية تحاكي مهارات الصيد والتصويب الحقيقي. تُصنع القوس التقليدية من غصن خشبي على شكل حرف Y مع مطاط وقاعدة جلدية. يتنافس اللاعبون بإصابة أهداف معينة وثابتة من مسافات محددة لاختبار المهارة وتوافق العين مع اليد.",
        flag_section_title: "🇸🇦 رمز الراية الشريفة - العلم السعودي",
        flag_card_title: "شعار العز والتوحيد",
        flag_card_desc: "راية المملكة العربية السعودية الخضراء الخالدة، ترمز الشهادتان فيها إلى السلام والإسلام والعقيدة، ورمز السيف العربي الصارم يرمز إلى القوة والعدل والأنفة.",
        python_notice: "ملاحظة المطور: تم إرفاق كود خاص بلغة Python الرسمية (flag_drawer.py) لرسم العلم هندسياً باستخدام مكتبة الرسم البرمجي Turtle.",
        footer_text: "جميع الحقوق محفوظة منصة عزنا بطبعنا © 2026 | اليوم الوطني للمملكة العربية السعودية | مدرسة الإمام السخاوي الثانوية"
    },
    en: {
        platform_title: "Ezzna B'Tabana",
        nav_home: "Home",
        nav_about: "About Us & Project",
        nav_main_video: "Documentary",
        nav_games: "Folk Games Library",
        nav_flag: "Saudi Flag Symbol",
        hero_badge: "National Heritage Project 2026",
        hero_heading: "Our Pride is Our Nature",
        hero_subheading: "A celebratory digital platform documenting authentic Saudi traditional games and cultural heritage.",
        btn_watch: "Watch Documentary",
        btn_explore: "Explore Games",
        about_section_title: "About Us & The Philosophy of 'Ezzna B'Tabana'",
        about_section_subtitle: "A comprehensive introduction to Saudi National Day, the concepts of Pride and Heritage, and our mission.",
        about_national_day_title: "About Saudi National Day",
        about_national_day_desc: "It marks the unification of Saudi Arabia by King Abdulaziz Al Saud. Every year, we commemorate this historical milestone and celebrate progress while preserving our roots.",
        about_eizz_title: "The Meaning of 'Eizz' (Pride)",
        about_eizz_desc: "'Eizz' represents dignity, national unity, and pride derived from wise leadership and a rich history.",
        about_tabaa_title: "The Meaning of 'Taba'a' (Heritage)",
        about_tabaa_desc: "'Taba'a' refers to authentic character, generosity, and traditional games passed down through generations.",
        about_project_title: "About Platform & School Project",
        about_project_desc: "'Ezzna B'Tabana' is an educational project documenting heritage games to connect generations with authentic history.",
        student_dev: "Developed by Student: Sami Nooh Gourir",
        student_school: "School: Imam Al-Sakhawi Secondary School",
        main_video_title: "🎬 Comprehensive Folk Games Documentary",
        main_video_desc: "Full documented showcase of traditional games across various regions of Saudi Arabia.",
        video_info_title: "Documentary Information",
        video_info_source: "Source: Ministry of Culture - Saudi Arabia",
        video_info_topic: "Topic: Cultural Heritage & Authentic Games",
        video_info_duration: "Duration: 1:41 mins",
        video_info_scope: "Scope: All Regions of Saudi Arabia",
        games_section_title: "📜 Detailed Folk Games Encyclopedia",
        games_section_desc: "Explore each traditional game with its dedicated video clip and detailed gameplay explanation:",
        game_danna_text: "A popular speed and balance game where players control a rolling wheel with a stick toward a finish line.",
        game_masaqil_text: "A precision aiming game using round marbles (Masaqil) to hit targets inside a marked circle.",
        game_khatta_text: "A agility game played on drawn grid squares where players hop on one foot while navigating obstacles.",
        game_ghamayda_text: "A classic hide-and-seek game that promotes social interaction and strategy among players.",
        game_nabata_text: "A traditional hunting game using a Y-shaped wooden sling to test accuracy and focus.",
        flag_section_title: "🇸🇦 Emblem of the Saudi Flag",
        flag_card_title: "Emblem of Pride & Unity",
        flag_card_desc: "The green flag of Saudi Arabia. The Shahada represents peace and faith, while the curved sword symbolizes justice and strength.",
        python_notice: "Developer Note: Included Python code (flag_drawer.py) renders the flag using the Turtle library.",
        footer_text: "All Rights Reserved © 2026 Ezzna B'Tabana Platform | Saudi National Day | Imam Al-Sakhawi Secondary School"
    },
    zh: {
        platform_title: "我们的骄傲是我们的本色",
        nav_home: "首页",
        nav_about: "关于我们与项目",
        nav_main_video: "纪录片",
        nav_games: "传统游戏库",
        nav_flag: "沙特国旗",
        hero_badge: "2026年国家遗产项目",
        hero_heading: "我们的骄傲是我们的本色",
        hero_subheading: "一个记录沙特传统游戏和地道文化遗产的庆祝数字平台。",
        btn_watch: "观看纪录片",
        btn_explore: "探索游戏",
        about_section_title: "关于我们与核心理念",
        about_section_subtitle: "全面介绍沙特国庆日、骄傲与传统理念及平台使命。",
        about_national_day_title: "关于沙特国庆日",
        about_national_day_desc: "纪念开国国王阿卜杜勒-阿齐兹统一沙特阿拉伯的历史时刻。",
        about_eizz_title: "“骄傲”的含义",
        about_eizz_desc: "代表着尊严、国家团结以及对悠久历史的自豪感。",
        about_tabaa_title: "“本色”的含义",
        about_tabaa_desc: "代表地道性格、慷慨传统以及代代相传的民间游戏。",
        about_project_title: "关于平台与学校项目",
        about_project_desc: "旨在记录民间遗产游戏，将新一代与地道历史紧密相连。",
        student_dev: "开发者学生：Sami Nooh Kourir",
        student_school: "学校：Imam Al-Sakhawi Secondary School",
        main_video_title: "🎬 传统民间游戏完整纪录片",
        main_video_desc: "沙特阿拉伯各地区传统民间游戏的完整记录展示。",
        video_info_title: "纪录片信息",
        video_info_source: "来源：沙特阿拉伯文化部",
        video_info_topic: "主题：文化遗产与地道游戏",
        video_info_duration: "时长：1分41秒",
        video_info_scope: "范围：沙特阿拉伯全境",
        games_section_title: "📜 详细的民间游戏百科全书",
        games_section_desc: "探索每款传统游戏，包含专属视频剪辑和详细玩法说明：",
        game_danna_text: "一种流行的速度与平衡游戏，玩家用木棍推动滚轮奔向终点。",
        game_masaqil_text: "使用圆石或玻璃珠击中目标的精准射击游戏。",
        game_khatta_text: "在画好的方格上单脚跳跃的敏捷度游戏。",
        game_ghamayda_text: "经典的捉迷藏游戏，促进玩家之间的社交互动。",
        game_nabata_text: "使用Y型木弹弓测试精准度与专注力的传统游戏。",
        flag_section_title: "🇸🇦 沙特国旗标志",
        flag_card_title: "骄傲与统一的标志",
        flag_card_desc: "沙特阿拉伯永恒的绿色旗帜。清真言代表和平与信仰，弯刀代表力量与正义。",
        python_notice: "开发者说明：附带的 Python 代码用于使用 Turtle 绘制国旗。",
        footer_text: "版权所有 © 2026 | 沙特国庆日 | Imam Al-Sakhawi Secondary School"
    }
};

// 2. تطبيق مدير النظام الرئيسي عند تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgressBar();
    initLanguageSystem();
    initVideoController();
    initSmoothNavigation();
    initBackToTopButton();
    initCardHoverEffects();
    console.log("✅ تم تشغيل نظام منصة عزنا بطبعنا بنجاح.");
});

/**
 * إنشاء شريط تقدم التصفح العلوي
 */
function initScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.right = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#D4AF37';
    progressBar.style.zIndex = '9999';
    progressBar.style.width = '0%';
    progressBar.style.transition = 'width 0.1s ease-out';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/**
 * نظام تغيير اللغة الديناميكي والتحكم باتجاه النص
 */
function initLanguageSystem() {
    const langSelect = document.getElementById('languageSelector');
    if (!langSelect) return;

    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        const langData = translations[selectedLang];

        if (!langData) return;

        // تحديث اتجاه لغة الصفحة
        document.documentElement.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = selectedLang;

        // تحديث كل عنصر يحمل خاصية data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });

        // حفظ تفضيل اللغة في التخزين المحلي
        try {
            localStorage.setItem('preferred_language', selectedLang);
        } catch (err) {
            console.warn("Storage not available:", err);
        }
    });

    // استعادة اللغة المحفوظة إن وجدت
    try {
        const savedLang = localStorage.getItem('preferred_language');
        if (savedLang && translations[savedLang]) {
            langSelect.value = savedLang;
            langSelect.dispatchEvent(new Event('change'));
        }
    } catch (err) {
        console.warn("Storage not accessible:", err);
    }
}

/**
 * إدارة الفيديوهات التفاعلية والتوقف التلقائي عند تشغيل فيديو آخر
 */
function initVideoController() {
    const allVideos = document.querySelectorAll('video');

    allVideos.forEach(video => {
        // عند تشغيل أي فيديو يتم إيقاف باقي المقاطع
        video.addEventListener('play', () => {
            allVideos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });

        // تحسين الأداء ومستوى الصوت
        video.volume = 0.85;
    });
}

/**
 * التنقل السلس وإضاءة القسم النشط في شريط الملاحة
 */
function initSmoothNavigation() {
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * زر العودة للأعلى
 */
function initBackToTopButton() {
    const topBtn = document.createElement('button');
    topBtn.innerHTML = '⬆️';
    topBtn.id = 'backToTopBtn';
    topBtn.style.position = 'fixed';
    topBtn.style.bottom = '25px';
    topBtn.style.left = '25px';
    topBtn.style.width = '45px';
    topBtn.style.height = '45px';
    topBtn.style.borderRadius = '50%';
    topBtn.style.border = '2px solid #D4AF37';
    topBtn.style.backgroundColor = '#006C35';
    topBtn.style.color = '#FFFFFF';
    topBtn.style.fontSize = '1.2rem';
    topBtn.style.cursor = 'pointer';
    topBtn.style.display = 'none';
    topBtn.style.zIndex = '1000';
    topBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    topBtn.style.transition = 'all 0.3s ease';

    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * تأثيرات التفاعل والتحويم على البطاقات
 */
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.game-detail-card, .about-card-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
}
