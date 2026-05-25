// language.js - Clean version with NO circular references
const translations = {
    en: {
        // ===== 1ARC_GRAPH.HTML =====
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
        "category_overwhelmingly_positive": "overwhelmingly positive",
        "category_very_positive": "very positive",
        "category_mostly_positive": "mostly positive",
        "category_mixed": "mixed",
        "category_mostly_negative": "mostly negative",
        "category_very_negative": "very negative",
        "category_overwhelmingly_negative": "overwhelmingly negative",
        "category_display_overwhelmingly_positive": "Overwhelmingly Positive",
        "category_display_very_positive": "Very Positive",
        "category_display_mostly_positive": "Mostly Positive",
        "category_display_mixed": "Mixed",
        "category_display_mostly_negative": "Mostly Negative",
        "category_display_very_negative": "Very Negative",
        "category_display_overwhelmingly_negative": "Overwhelmingly Negative",
        "tooltip_games": "Games",
        "tooltip_total_reviews": "Total Reviews",
        "tooltip_recent_reviews": "Recent Reviews",
        "tooltip_recent_reviews_arc": "Recent Reviews",
        "tooltip_number_of_games": "Number of Games",
        "scale_ascending": "Ascending",
        "scale_descending": "Descending",
        "footer_text": "Steam Name and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
        "recent_reviews": "recent reviews",
        "total_reviews": "Total reviews",
        "main_page": "🏠 Main Page",
        "to": "→",
        
        // ===== 2CCU_GRAPH.HTML =====
        "ccu_title": "Only a few games are successful at player retention",
        "ccu_subtitle": "Change in % of player number during one year after CCU peak",
        "search_game": "Search Games (max 5 highlights)",
        "filter_genre": "Filter by Genre (max 3 genres)",
        "genre_placeholder": "Type genre...",
        "player_type": "Filter by Player Type:",
        "display_mode": "Display Mode:",
        "lines_only": "Lines Only",
        "lines_points": "Lines & Points",
        "points_only": "Points Only",
        "aggregate_mode": "Aggregate Mode:",
        "show_aggregate": "Show Aggregate Lines",
        "hide_aggregate": "Hide Aggregate Lines",
        "full_range": "Full Range (0-100%)",
        "high_retention": "High Retention (67-100%)",
        "medium_retention": "Medium Retention (34-66%)",
        "low_retention": "Low Retention (0-33%)",
        "months": "Months →",
        "player_retention": "Player Retention (% of peak)",
        "no_games": "No games to display",
        "filtered_empty": "Filtered games empty",
        "no_svg": "No SVG",
        "aggregate_mode_title": "Aggregate Mode (Scaled to zones):",
        "high_retention_legend": "High Retention (67-100%)",
        "medium_retention_legend": "Medium Retention (34-66%)",
        "low_retention_legend": "Low Retention (0-33%)",
        "incomplete_data_warning": "Games with incomplete data excluded from aggregate",
        "player_types": "Player Types:",
        "highlighted_game": "Highlighted Game",
        "monthly_data_point": "Monthly Data Point",
        "incomplete_data": "Incomplete Data (dashed line)",
        "genres_label": "Genres",
        "games_displayed": "games displayed",
        "genres": "Genres",
        "type": "Type",
        "retention": "Retention",
        "high_retention_range": "High (67-100%)",
        "medium_retention_range": "Medium (34-66%)",
        "low_retention_range": "Low (0-33%)"
    },
    ru: {
        // ===== 1ARC_GRAPH.HTML =====
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
        "category_overwhelmingly_positive": "чрезвычайно положительные",
        "category_very_positive": "очень положительные",
        "category_mostly_positive": "в основном положительные",
        "category_mixed": "смешанные",
        "category_mostly_negative": "в основном отрицательные",
        "category_very_negative": "очень отрицательные",
        "category_overwhelmingly_negative": "крайне отрицательные",
        "category_display_overwhelmingly_positive": "Крайне Положительные",
        "category_display_very_positive": "Очень Положительные",
        "category_display_mostly_positive": "В основном Положительные",
        "category_display_mixed": "Смешанные",
        "category_display_mostly_negative": "В основном Отрицательные",
        "category_display_very_negative": "Очень Отрицательные",
        "category_display_overwhelmingly_negative": "Крайне Отрицательные",
        "tooltip_games": "Игр",
        "tooltip_total_reviews": "Всего обзоров",
        "tooltip_recent_reviews": "Недавних обзоров",
        "tooltip_recent_reviews_arc": "Недавних обзоров",
        "tooltip_number_of_games": "Количество игр",
        "scale_ascending": "Возрастание",
        "scale_descending": "Убывание",
        "footer_text": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        "recent_reviews": "недавних обзоров",
        "total_reviews": "Всего обзоров",
        "main_page": "🏠 Главная",
        "to": "→",
        
        // ===== 2CCU_GRAPH.HTML =====
        "ccu_title": "Лишь немногие игры успешны в удержании игроков",
        "ccu_subtitle": "Изменение % количества игроков в течение года после пика CCU",
        "search_game": "Поиск игр (макс 5 выделенных)",
        "filter_genre": "Фильтр по жанру (макс 3 жанра)",
        "genre_placeholder": "Введите жанр...",
        "player_type": "Фильтр по типу игрока:",
        "display_mode": "Режим отображения:",
        "lines_only": "Только линии",
        "lines_points": "Линии и точки",
        "points_only": "Только точки",
        "aggregate_mode": "Агрегированный режим:",
        "show_aggregate": "Показать агрегированные линии",
        "hide_aggregate": "Скрыть агрегированные линии",
        "full_range": "Полный диапазон (0-100%)",
        "high_retention": "Высокое удержание (67-100%)",
        "medium_retention": "Среднее удержание (34-66%)",
        "low_retention": "Низкое удержание (0-33%)",
        "months": "Месяцы →",
        "player_retention": "Удержание игроков (% от пика)",
        "no_games": "Нет игр для отображения",
        "filtered_empty": "Нет игр по фильтрам",
        "no_svg": "Нет SVG",
        "aggregate_mode_title": "Агрегированный режим (масштабировано по зонам):",
        "high_retention_legend": "Высокое удержание (67-100%)",
        "medium_retention_legend": "Среднее удержание (34-66%)",
        "low_retention_legend": "Низкое удержание (0-33%)",
        "incomplete_data_warning": "Игры с неполными данными исключены из агрегации",
        "player_types": "Типы игроков:",
        "highlighted_game": "Выделенная игра",
        "monthly_data_point": "Ежемесячная точка данных",
        "incomplete_data": "Неполные данные (пунктирная линия)",
        "genres_label": "Жанры",
        "games_displayed": "игр отображается",
        "genres": "Жанры",
        "type": "Тип",
        "retention": "Удержание",
        "high_retention_range": "Высокое (67-100%)",
        "medium_retention_range": "Среднее (34-66%)",
        "low_retention_range": "Низкое (0-33%)"
    }
};

let currentLanguage = 'en';

// NO global t() function to avoid recursion!
// We'll expose a different method

window.translations = translations;
window.currentLanguage = currentLanguage;

window.translate = function(key) {
    try {
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            return translations[currentLanguage][key];
        }
    } catch(e) {}
    return key;
};

window.setLanguage = function(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferred_language', lang);
        
        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = window.translate(key);
            if (translation !== key) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = translation;
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Update active buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Dispatch event for dynamic content
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
};

window.initLanguage = function() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    
    if (!lang) {
        lang = localStorage.getItem('preferred_language');
    }
    
    if (!lang || !translations[lang]) {
        lang = 'en';
    }
    
    currentLanguage = lang;
    
    // Apply translations to static elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = window.translate(key);
        if (translation !== key) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) {
                    el.placeholder = translation;
                }
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Update URL
    const url = new URL(window.location.href);
    if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
    }
    
    // Update active buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Dispatch event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
};

window.setupLanguageSwitcher = function() {
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                const url = new URL(window.location.href);
                url.searchParams.set('lang', lang);
                window.history.pushState({}, '', url);
                window.setLanguage(lang);
            }
        });
    });
};

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.initLanguage();
        window.setupLanguageSwitcher();
    });
} else {
    window.initLanguage();
    window.setupLanguageSwitcher();
}
