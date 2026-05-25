// language.js - Complete working version
const translations = {
    en: {
        // 1ARC_GRAPH.HTML
        "arc_title": "Gamers do change their opinion about videogames and often not in a better way",
        "arc_description": "distribution change in gamer's reviews across 3139 top reviewed games in April 2026",
        "search_placeholder": "Search game...",
        "filter_both": "Both",
        "filter_ascending": "Ascending ↑",
        "filter_descending": "Descending ↓",
        "reset_positions": "Reset Positions",
        "clear_all": "Clear All",
        "compare_games": "Highlighted Games",
        "drag_instruction": "Drag spheres • Hover for details",
        "games_loaded": "games loaded",
        "upload_csv": "Upload CSV File",
        "click_or_drag": "Click or drag & drop CSV file",
        "remove_button": "Remove",
        "max_games": "Maximum 5 games can be compared at once. Remove a game first.",
        
        // Category names (full)
        "category_overwhelmingly_positive": "overwhelmingly positive",
        "category_very_positive": "very positive",
        "category_mostly_positive": "mostly positive",
        "category_mixed": "mixed",
        "category_mostly_negative": "mostly negative",
        "category_very_negative": "very negative",
        "category_overwhelmingly_negative": "overwhelmingly negative",
        
        // Display names for tooltips
        "category_display_overwhelmingly_positive": "Overwhelmingly Positive",
        "category_display_very_positive": "Very Positive",
        "category_display_mostly_positive": "Mostly Positive",
        "category_display_mixed": "Mixed",
        "category_display_mostly_negative": "Mostly Negative",
        "category_display_very_negative": "Very Negative",
        "category_display_overwhelmingly_negative": "Overwhelmingly Negative",
        
        // Tooltip labels
        "tooltip_games": "Games",
        "tooltip_total_reviews": "Total Reviews",
        "tooltip_recent_reviews": "Recent Reviews",
        "tooltip_recent_reviews_arc": "Recent Reviews",
        "tooltip_number_of_games": "Number of Games",
        
        // Scale info
        "scale_ascending": "Ascending",
        "scale_descending": "Descending",
        
        // Footer
        "footer_text": "Steam Name and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
        
        // Other UI
        "recent_reviews": "recent reviews",
        "total_reviews": "Total reviews",
        "to": "→"
    },
    ru: {
        // 1ARC_GRAPH.HTML
        "arc_title": "Геймеры меняют свое мнение о видеоиграх и часто не в лучшую сторону",
        "arc_description": "изменение распределения отзывов геймеров среди 3139 лучших игр апреля 2026",
        "search_placeholder": "Поиск игры...",
        "filter_both": "Оба",
        "filter_ascending": "Возрастание ↑",
        "filter_descending": "Убывание ↓",
        "reset_positions": "Сбросить позиции",
        "clear_all": "Очистить всё",
        "compare_games": "Выделенные игры",
        "drag_instruction": "Перетаскивайте сферы • Наведите для деталей",
        "games_loaded": "игр загружено",
        "upload_csv": "Загрузить CSV файл",
        "click_or_drag": "Нажмите или перетащите CSV файл",
        "remove_button": "Удалить",
        "max_games": "Максимум 5 игр можно сравнить. Сначала удалите игру.",
        
        // Category names (full)
        "category_overwhelmingly_positive": "чрезвычайно положительно",
        "category_very_positive": "очень положительно",
        "category_mostly_positive": "в основном положительно",
        "category_mixed": "смешанные",
        "category_mostly_negative": "в основном отрицательно",
        "category_very_negative": "очень отрицательно",
        "category_overwhelmingly_negative": "чрезвычайно отрицательно",
        
        // Display names for tooltips
        "category_display_overwhelmingly_positive": "Чрезвычайно Положительно",
        "category_display_very_positive": "Очень Положительно",
        "category_display_mostly_positive": "В основном Положительно",
        "category_display_mixed": "Смешанные",
        "category_display_mostly_negative": "В основном Отрицательно",
        "category_display_very_negative": "Очень Отрицательно",
        "category_display_overwhelmingly_negative": "Чрезвычайно Отрицательно",
        
        // Tooltip labels
        "tooltip_games": "Игр",
        "tooltip_total_reviews": "Всего обзоров",
        "tooltip_recent_reviews": "Недавних обзоров",
        "tooltip_recent_reviews_arc": "Недавних обзоров",
        "tooltip_number_of_games": "Количество игр",
        
        // Scale info
        "scale_ascending": "Возрастание",
        "scale_descending": "Убывание",
        
        // Footer
        "footer_text": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        
        // Other UI
        "recent_reviews": "недавних обзоров",
        "total_reviews": "Всего обзоров",
        "to": "→"
    }
};

let currentLanguage = 'en';

function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key;
}

function applyTranslations() {
    console.log('Applying translations for language:', currentLanguage);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (translation && translation !== key) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferred_language', lang);
        applyTranslations();
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
        console.log('Language changed to:', lang);
    }
}

function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    
    if (!lang) {
        lang = localStorage.getItem('preferred_language');
    }
    
    if (!lang || !translations[lang]) {
        lang = 'en';
    }
    
    currentLanguage = lang;
    applyTranslations();
    
    const url = new URL(window.location.href);
    if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    console.log('Language initialized to:', lang);
}

function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.removeEventListener('click', setupLanguageSwitcher.handler);
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                const url = new URL(window.location.href);
                url.searchParams.set('lang', lang);
                window.history.pushState({}, '', url);
                setLanguage(lang);
            }
        });
    });
}

// Expose globally
window.translations = translations;
window.currentLanguage = currentLanguage;
window.t = t;
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;
window.setupLanguageSwitcher = setupLanguageSwitcher;
window.applyTranslations = applyTranslations;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initLanguage();
        setupLanguageSwitcher();
    });
} else {
    initLanguage();
    setupLanguageSwitcher();
}
