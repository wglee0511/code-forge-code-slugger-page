const translations = {
    en: {
        nav_features: "Features",
        nav_tech: "Tech",
        nav_start: "Get Started",
        hero_title: "Brain Game for a<br><span class='highlight'>Home Run</span>",
        hero_subtitle: "Beyond simple number guessing, test your strategy in Code Slugger with baseball mechanics.",
        btn_play: "Play Now",
        btn_more: "Learn More",
        features_title: "Key Features",
        feat_solo_title: "Solo Mode",
        feat_solo_desc: "A classic challenge to guess the secret number thought of by the computer within 9 innings.",
        feat_battle_title: "Battle Mode",
        feat_battle_desc: "Take turns attacking and defending against AI in a strategic showdown.",
        feat_lang_title: "Multi-language",
        feat_lang_desc: "Available in multiple languages including Korean, English, and Japanese.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms & Conditions"
    },
    ko: {
        nav_features: "주요 기능",
        nav_tech: "기술 스택",
        nav_start: "시작하기",
        hero_title: "홈런을 향한<br><span class='highlight'>두뇌 게임</span>",
        hero_subtitle: "단순한 숫자 맞추기를 넘어선 야구 메카닉, Code Slugger에서 당신의 전략을 시험하세요.",
        btn_play: "지금 플레이",
        btn_more: "더 알아보기",
        features_title: "주요 기능",
        feat_solo_title: "솔로 모드",
        feat_solo_desc: "컴퓨터가 생각한 비밀 번호를 9회 안에 맞추는 클래식한 도전.",
        feat_battle_title: "대결 모드",
        feat_battle_desc: "AI와 번갈아 공격하고 수비하며 전략적인 승부를 겨룹니다.",
        feat_lang_title: "다국어 지원",
        feat_lang_desc: "한국어, 영어, 일본어 등 다양한 언어로 전 세계 유저와 만납니다.",
        footer_privacy: "개인정보 처리방침",
        footer_terms: "이용약관"
    },
    ja: {
        nav_features: "機能",
        nav_tech: "技術",
        nav_start: "開始",
        hero_title: "ホームランへの<br><span class='highlight'>頭脳戦</span>",
        hero_subtitle: "単なる数字当てを超えた野球メカニクス、Code Sluggerであなたの戦略を試しましょう。",
        btn_play: "今すぐプレイ",
        btn_more: "詳細を見る",
        features_title: "主な機能",
        feat_solo_title: "ソロモード",
        feat_solo_desc: "コンピュータが隠した数字を9イニング以内に当てるクラシックな挑戦。",
        feat_battle_title: "対戦モード",
        feat_battle_desc: "AIと交互に攻守を入れ替えながら戦略的な勝負を繰り広げます。",
        feat_lang_title: "多言語対応",
        feat_lang_desc: "韓国語、英語、日本語など、複数の言語で世界中のユーザーをサポート。",
        footer_privacy: "プライバシーポリシー",
        footer_terms: "利用規約"
    },
    zh: {
        nav_features: "主要功能",
        nav_tech: "技術棧",
        nav_start: "立即開始",
        hero_title: "邁向全壘打的<br><span class='highlight'>腦力大戰</span>",
        hero_subtitle: "超越簡單的數字猜測，在 Code Slugger 中結合棒구機制的策略考驗。",
        btn_play: "立即遊玩",
        btn_more: "了解更多",
        features_title: "主要功能",
        feat_solo_title: "單人模式",
        feat_solo_desc: "在 9 局內猜中電腦想出的秘密數字，經典的挑戰。",
        feat_battle_title: "對戰模式",
        feat_battle_desc: "與 AI 輪流進攻與防守，展開一場策略對決。",
        feat_lang_title: "多語言支持",
        feat_lang_desc: "提供繁體中文、韓文、英文、日文等多種語言選擇。",
        footer_privacy: "隱私權政策",
        footer_terms: "服務條款"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn-mini').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferred_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language or default to EN
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    changeLanguage(savedLang);

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Handle scroll reveal class injection
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Diamond animation
    const diamond = document.querySelector('.diamond');
    if (diamond) {
        setInterval(() => {
            diamond.style.borderColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        }, 3000);
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

