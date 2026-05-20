// Shared language system for all visualizations
const translations = {
    en: {
        // ===== COMMON ELEMENTS (used across multiple pages) =====
        "loading": "Loading...",
        "error": "Error",
        "upload_csv": "Upload CSV",
        "reset_filters": "Reset Filters",
        "search_placeholder": "Search...",
        "games_loaded": "games loaded",
        
        // ===== 1ARC_GRAPH.HTML specific =====
        "arc_title": "Gamers do change their opinion about videogames",
        "arc_subtitle": "and often not in a better way",
        "arc_description": "distribution change in gamer's reviews across 3139 top reviewed games in April 2026",
        "filter_both": "Both",
        "filter_ascending": "Ascending ↑",
        "filter_descending": "Descending ↓",
        "reset_positions": "Reset Positions",
        "clear_all": "🗑 Clear All",
        "compare_games": "Compare up to 5 Games",
        "drag_instruction": "💡 Drag spheres • Hover for details",
        
        // ===== 2CCU_GRAPH.HTML specific =====
        "ccu_title": "Only a few games are successful at player retention",
        "ccu_subtitle": "Change in % of player number during one year after CCU peak",
        "player_type": "Player Type",
        "display_mode": "Display Mode",
        "lines_only": "Lines Only",
        "lines_points": "Lines & Points",
        "points_only": "Points Only",
        "aggregate_mode": "Aggregate Mode",
        "full_range": "Full Range (0-100%)",
        "high_retention": "High Retention (67-100%)",
        "medium_retention": "Medium Retention (34-66%)",
        "low_retention": "Low Retention (0-33%)",
        "search_game": "Search games (max 5 highlights)",
        "filter_genre": "Filter by Genre (max 3 genres)",
        "months": "Months →",
        "player_retention": "Player Retention (% of peak)",
        
        // ===== 3DIAL_GRAPH.HTML specific =====
        "dial_title": "BEST OF THE BEST",
        "dial_subtitle": "Game Discovery Engine",
        "year": "YEAR",
        "customize_dials": "CUSTOMIZE DIALS",
        "metric": "METRIC",
        "genre": "GENRE",
        "player_type_label": "PLAYER TYPE",
        "supported_os": "SUPPORTED OS",
        "price": "PRICE",
        "most_recommended": "most recommended",
        "high_rated": "high rated",
        "most_reviews": "most reviews",
        "most_achievements": "most achievements",
        "median_playtime": "median playtime",
        "peak_ccu": "peak CCU",
        "most_followers": "most followers",
        
        // ===== 4TREEMAP.HTML specific =====
        "treemap_title": "Indie Publishers Hold Their Ground Against AAA",
        "treemap_subtitle": "Publishers and Developers Distribution on Steam",
        "publishers": "publishers",
        "games": "games",
        "tiling": "Tiling",
        "sorting": "Sorting",
        "descending": "Descending (largest first)",
        "ascending": "Ascending (smallest first)",
        "zoom": "Zoom",
        "game_rating": "Game Rating",
        "low_to_high": "Low → High"
    },
    
    ru: {
        // ===== COMMON ELEMENTS =====
        "loading": "Загрузка...",
        "error": "Ошибка",
        "upload_csv": "Загрузить CSV",
        "reset_filters": "Сбросить фильтры",
        "search_placeholder": "Поиск...",
        "games_loaded": "игр загружено",
        
        // ===== 1ARC_GRAPH.HTML specific =====
        "arc_title": "Геймеры меняют свое мнение о видеоиграх",
        "arc_subtitle": "и часто не в лучшую сторону",
        "arc_description": "Распределение пользовательских отзывов среди 3139 ниаболее популярных игр в апреле 2026",
        "filter_both": "Оба варианта",
        "filter_ascending": "Возрастание ↑",
        "filter_descending": "Убывание ↓",
        "reset_positions": "Сброс по умолчанию",
        "clear_all": "Очистить выделения",
        "compare_games": "Сравнение до 5 видеоигр",
        "drag_instruction": "Сферы можно свободно перемещать, для доп информации наведитесь на элементы",
        
        // ===== 2CCU_GRAPH.HTML specific =====
        "ccu_title": "Единицы видеогр успешно удержают игроков",
        "ccu_subtitle": "Изменение в % количества игроков в течение года после пика CCU",
        "player_type": "Режим пользовательской игры",
        "display_mode": "Режим отображения",
        "lines_only": "Только линии",
        "lines_points": "Линии и точки",
        "points_only": "Только точки",
        "aggregate_mode": "Агрегированный режим",
        "full_range": "Полный диапазон (0-100%)",
        "high_retention": "Верхняя треть (67-100%)",
        "medium_retention": "Средняя треть (34-66%)",
        "low_retention": "Нижняя треть (0-33%)",
        "search_game": "Поиск игр (макс 5)",
        "filter_genre": "Фильтр по жанру (макс 3 жанра)",
        "months": "Месяцы →",
        "player_retention": "Удержание игроков (% от пика)",
        
        // ===== 3DIAL_GRAPH.HTML specific =====
        "dial_title": "ЛУЧШИЕ ИЗ ЛУЧШИХ",
        "dial_subtitle": "Инструмент для поиска лучших игр в разных категориях",
        "year": "Год",
        "customize_dials": "Настройка дисков",
        "metric": "Метрика",
        "genre": "Жанр",
        "player_type_label": "Режим пользовательской игры",
        "supported_os": "Операционная система",
        "price": "Стоимость",
        "most_recommended": "наиболее рекомендованная",
        "high_rated": "самая высоко оцененная",
        "most_reviews": "наиболее обозреваемая",
        "most_achievements": "с наибольшим количеством достижений",
        "median_playtime": "с наивысшим медианном временем в игре",
        "peak_ccu": "с наиболее выскоким пиком CCU",
        "most_followers": "наибольшим количеством подписчиков",
        
        // ===== 4TREEMAP.HTML specific =====
        "treemap_title": "Инди издатели удерживают позиции против AAA",
        "treemap_subtitle": "Распределение издателей и разработчиков в Steam",
        "publishers": "издатели",
        "games": "игры",
        "tiling": "Алгоритм структуры",
        "sorting": "Сортировка",
        "descending": "По убыванию",
        "ascending": "По возрастанию",
        "zoom": "Масштаб",
        "game_rating": "Рейтинг игры",
        "low_to_high": "Низкий → Высокий"
    }
};

// Language management
let currentLanguage = 'en';

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferred_language', lang);
        applyTranslationsToPage();
        updateActiveLanguageButton(lang);
    }
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

function applyTranslationsToPage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.value = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
    
    // Trigger page-specific update if needed
    if (typeof updateDynamicTranslations === 'function') {
        updateDynamicTranslations();
    }
}

function updateActiveLanguageButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initLanguage() {
    // Check localStorage and URL parameter
    const savedLang = localStorage.getItem('preferred_language');
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    const lang = urlLang || savedLang || 'en';
    
    if (translations[lang]) {
        currentLanguage = lang;
        applyTranslationsToPage();
        updateActiveLanguageButton(lang);
    }
    
    // Set up language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initLanguage);