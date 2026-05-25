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
        "remove": "Remove",
        
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

        // ===== 5spiral.HTML specific =====
        "spiral_title": "How prices for videogames on Steam changed for the last 30 years",
        "spiral_subtitle": "Games distribution between price categories throughout the years and genres",
        "spiral_genre": "Genre",
        "spiral_player_type": "Player Type",
        "spiral_supported_os": "Supported OS",
        "spiral_search_games": "Search Games",
        "spiral_search_placeholder": "Type game name...",
        "spiral_reset_filters": "⟳ Reset All Filters",
        "spiral_hover_hint": "Hover over bars → see detailed game count & price info | Highlighted games color entire bars",
        "spiral_upload_csv": "Upload CSV File",
        "spiral_no_data": "No data loaded. Please upload a CSV file below.",
        "spiral_loading": "No data loaded. Please upload a CSV file below.",
        "spiral_max_games": "Maximum 5 games can be highlighted. Remove a game first.",
        "spiral_showing_games": "Showing",
        "spiral_games": "games (of",
        "spiral_total": "total)",
        "spiral_filters_active": "Filters active.",
        "spiral_no_match": "No games match.",
        "spiral_no_price_data": "No price data available for selected filters.",
        "spiral_price_range": "Price range",
        "spiral_games_count": "Games",
        "spiral_total_in_year": "Total in year",
        "spiral_highlighted": "Highlighted",
        "spiral_games_center": "GAMES",
        "spiral_older_years": "← Older years → Recent years",
        "spiral_free": "Free",
        "spiral_under_5": "<5$",
        "spiral_under_10": "<10$",
        "spiral_under_15": "<15$",
        "spiral_under_20": "<20$",
        "spiral_under_30": "<30$",
        "spiral_under_40": "<40$",
        "spiral_over_40": ">40$",

        // ===== 6radar.HTML specific =====
        "radar_title": "Game Performance Radar Tool",
        "radar_subtitle": "Interactive comparison of videogames based on several metrics",
        "radar_upload_csv": "Upload CSV",
        "radar_no_file": "No file",
        "radar_games_loaded": "games loaded",
        "radar_active_metrics": "Active metrics",
        "radar_selected": "selected",
        "radar_search_placeholder": "Search game...",
        "radar_min_radars_warning": "Cannot remove: minimum {min} radars required",
        "radar_max_radars_warning": "Maximum {max} radars allowed",
        "radar_need_metrics": "Need at least 3 metrics selected<br/>Enable more metrics above.",
        "radar_max_metrics_warning": "Maximum 7 metrics allowed",
        "radar_min_metrics_warning": "Minimum 3 metrics required for radar charts",
        "radar_csv_missing_columns": "CSV missing required columns: {columns}",
        "radar_csv_empty": "CSV is empty",
        "radar_no_valid_games": "No valid game entries found.",
        "radar_error_parsing": "Error parsing CSV: {error}",
        "radar_failed_read": "Failed to read file.",
        "radar_metric_recommendations": "recommendations",
        "radar_metric_reviews": "reviews",
        "radar_metric_rating": "rating %",
        "radar_metric_playtime": "playtime (min)",
        "radar_metric_peak": "peak players",
        "radar_metric_achievements": "achievements",
        "radar_metric_follows": "follows",
        "radar_value": "Value",
        "radar_max": "Max (100%)",
        "radar_proportion": "Proportion",
        "radar_count": "count",
        "radar_rating_percent": "rating %",
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
        "remove": "Удалить",
        
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
        "low_to_high": "Низкий → Высокий",

        // ===== 5spiral.HTML specific =====
        "spiral_title": "Как менялись цены на видеоигры в Steam за последние 30 лет",
        "spiral_subtitle": "Распределение игр по ценовым категориям по годам и жанрам",
        "genre_label": "Жанр",
        "player_type_spiral": "Тип игрока",
        "supported_os_spiral": "Поддерживаемая ОС",
        "search_games_spiral": "Поиск игр",
        "type_game_name": "Введите название игры...",
        "reset_all_filters": "⟳ Сбросить все фильтры",
        "hover_instruction": "Наведите на столбцы → подробная информация о количестве игр и ценах | Выделенные игры окрашивают целые столбцы",
        "no_data_loaded": "Данные не загружены. Пожалуйста, загрузите CSV файл ниже.",
        "showing_games": "Показано",
        "games_of_total": "игр (из",
        "total": "всего)",
        "filters_active": "Фильтры активны.",
        "no_games_match": "Нет подходящих игр.",
        "maximum_games_highlight": "Максимум 5 игр можно выделить. Сначала удалите игру.",
        "no_price_data": "Нет данных о ценах для выбранных фильтров.",
        "no_data_upload": "Нет данных. Загрузите CSV или измените фильтры.",
        "price_range_free": "Бесплатно",
        "games_center": "ИГР",
        "older_years": "← Старшие годы",
        "recent_years": "Новые годы →",
        "year": "Год",
        "price_range": "Ценовой диапазон",
        "total_in_year": "Всего в",
        "highlighted": "Выделено",

         // ===== 6radar.HTML specific =====
        "radar_title": "Инструмент сравнения производительности игр",
        "radar_subtitle": "Интерактивное сравнение видеоигр по нескольким метрикам",
        "radar_upload_csv": "Загрузить CSV",
        "radar_no_file": "Нет файла",
        "radar_games_loaded": "игр загружено",
        "radar_active_metrics": "Активные метрики",
        "radar_selected": "выбрано",
        "radar_search_placeholder": "Поиск игры...",
        "radar_min_radars_warning": "Нельзя удалить: минимум {min} радаров требуется",
        "radar_max_radars_warning": "Максимум {max} радаров разрешено",
        "radar_need_metrics": "Нужно минимум 3 включенных метрики<br/>Включите больше метрик выше.",
        "radar_max_metrics_warning": "Максимум 7 метрик разрешено",
        "radar_min_metrics_warning": "Минимум 3 метрики требуется для радарных диаграмм",
        "radar_csv_missing_columns": "В CSV отсутствуют обязательные столбцы: {columns}",
        "radar_csv_empty": "CSV файл пуст",
        "radar_no_valid_games": "Не найдено действительных записей об играх.",
        "radar_error_parsing": "Ошибка парсинга CSV: {error}",
        "radar_failed_read": "Не удалось прочитать файл.",
        "radar_metric_recommendations": "рекомендации",
        "radar_metric_reviews": "обзоры",
        "radar_metric_rating": "рейтинг %",
        "radar_metric_playtime": "время (мин)",
        "radar_metric_peak": "пик игроков",
        "radar_metric_achievements": "достижения",
        "radar_metric_follows": "подписчики",
        "radar_value": "Значение",
        "radar_max": "Максимум (100%)",
        "radar_proportion": "Доля",
        "radar_count": "количество",
        "radar_rating_percent": "рейтинг %",
    }
};

// Language management
let currentLanguage = 'en';

function t(key) {
    return translations[currentLanguage][key] || key;
}

function applyTranslations() {
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
    
    // Update the page title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const currentTitle = titleElement.textContent;
        // Don't translate title if it's not in translations
    }
    
    console.log('Translations applied for language:', currentLanguage);
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferred_language', lang);
        applyTranslations();
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Dispatch custom event for any page-specific updates
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
}

function initLanguage() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    
    // Then check localStorage
    if (!lang) {
        lang = localStorage.getItem('preferred_language');
    }
    
    // Default to English
    if (!lang || !translations[lang]) {
        lang = 'en';
    }
    
    currentLanguage = lang;
    applyTranslations();
    
    // Update URL without reloading
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
    
    console.log('Language initialized to:', lang);
}

// Setup language switcher buttons
function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                // Update URL parameter
                const url = new URL(window.location.href);
                url.searchParams.set('lang', lang);
                window.history.pushState({}, '', url);
                // Apply translation without reload
                setLanguage(lang);
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initLanguage();
        setupLanguageSwitcher();
    });
} else {
    initLanguage();
    setupLanguageSwitcher();
}
