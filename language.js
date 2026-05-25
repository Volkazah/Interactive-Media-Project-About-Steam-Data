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
        "footer": "Steam Name and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
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
        "player_retention_aggregate": "Percentage of Games in Zone (0-100%)",
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
        "low_retention_range": "Low (0-33%)",
        
        // Player type button labels
        "player_type_multi": "Multi-player",
        "player_type_single": "Single-player",
        "player_type_both": "Single&Multi-player",
        
        // Month labels
        "month_1": "Month 1",
        "month_2": "Month 2",
        "month_3": "Month 3",
        "month_4": "Month 4",
        "month_5": "Month 5",
        "month_6": "Month 6",
        "month_7": "Month 7",
        "month_8": "Month 8",
        "month_9": "Month 9",
        "month_10": "Month 10",
        "month_11": "Month 11",
        "month_12": "Month 12",
        "month_13": "Month 13",
        
        // ===== 3DIAL_GRAPH.HTML =====
        "dial_title": "BEST OF THE BEST",
        "dial_subtitle": "Look for the most successful videogames of all time. Choose specific years, metrics and genres. Customise dials to your preferences",
        "year": "Year",
        "customize_dials": "Customize Dials",
        "text_orientation": "Text Orientation",
        "radial": "Radial",
        "horizontal": "Horizontal",
        "reset_filters": "⟳ Reset Filters",
        "no_data_message": "No data loaded — please import CSV",
        "no_filters_match": "No games match the current filters — try adjusting the dials",
        "game_word": "game",
        "on_word": "on",
        "in_word": "in",
        "of_all_time": "of all time",
        "any_year": "ANY",
        "single_multi": "Single & Multi",
        
        // Dial ring labels
        "dial_metric": "Metric",
        "dial_genre": "Genre",
        "dial_player_type": "Player Type",
        "dial_supported_os": "Supported OS",
        "dial_price": "Price",
        
        // Metric options
        "metric_most_recommended": "is the most recommended",
        "metric_high_rated": "is the highest rated",
        "metric_most_reviews": "is the most reviewed",
        "metric_most_achievements": "has the most achievements",
        "metric_median_playtime": "has the highest median playtime",
        "metric_peak_ccu": "has the highest CCU peak",
        "metric_most_followers": "is the most followed",
        "is_best": "is the best",
        
        // Metric option labels (on the rings)
        "metric_most_recommended_option": "most recommended",
        "metric_high_rated_option": "high rated",
        "metric_most_reviews_option": "most reviews",
        "metric_most_achievements_option": "most achievements",
        "metric_median_playtime_option": "median playtime",
        "metric_peak_ccu_option": "peak CCU",
        "metric_most_followers_option": "most followers",
        
        // Genre options
        "genre_any": "any",
        "genre_simulation": "simulation",
        "genre_strategy": "strategy",
        "genre_action": "action",
        "genre_rpg": "RPG",
        "genre_racing": "racing",
        "genre_indie": "indie",
        "genre_adventure": "adventure",
        "genre_casual": "casual",
        "genre_sports": "sports",
        
        // Player type options
        "player_any": "any",
        "player_single": "single-player",
        "player_multi": "multi-player",
        "player_both": "single&multi-player",
        "player_single_display": "Singleplayer",
        "player_multi_display": "Multiplayer",
        "player_both_display": "Single&Multiplayer",
        
        // OS options
        "os_any": "any",
        "os_windows": "windows",
        "os_mac": "mac",
        "os_linux": "linux",
        
        // Price options
        "price_any": "any",
        "price_free": "free to play",
        "price_under_5": "<$5",
        "price_under_10": "<$10",
        "price_under_15": "<$15",
        "price_under_20": "<$20",
        "price_under_30": "<$30",
        "price_under_40": "<$40",
        "price_under_60": "<$60",
        "price_over_60": ">$60",
        
        // Price text descriptions
        "free": "free",
        "price_range_under_5": "in a price range under $5",
        "price_range_5_10": "in a price range from $5 to $10",
        "price_range_10_15": "in a price range from $10 to $15",
        "price_range_15_20": "in a price range from $15 to $20",
        "price_range_20_30": "in a price range from $20 to $30",
        "price_range_30_40": "in a price range from $30 to $40",
        "price_range_40_60": "in a price range from $40 to $60",
        "price_range_60_plus": "in a price range of $60 and more"
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
        "player_retention_aggregate": "Процент игр в зоне (0-100%)",
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
        "low_retention_range": "Низкое (0-33%)",
        
        // Player type button labels
        "player_type_multi": "Мультиплеер",
        "player_type_single": "Одиночная игра",
        "player_type_both": "Одиночная и Мультиплеер",
        
        // Month labels
        "month_1": "Месяц 1",
        "month_2": "Месяц 2",
        "month_3": "Месяц 3",
        "month_4": "Месяц 4",
        "month_5": "Месяц 5",
        "month_6": "Месяц 6",
        "month_7": "Месяц 7",
        "month_8": "Месяц 8",
        "month_9": "Месяц 9",
        "month_10": "Месяц 10",
        "month_11": "Месяц 11",
        "month_12": "Месяц 12",
        "month_13": "Месяц 13",
        
        // ===== 3DIAL_GRAPH.HTML =====
        "dial_title": "ЛУЧШИЕ ИЗ ЛУЧШИХ",
        "dial_subtitle": "Ищите самые успешные видеоигры всех времен. Выбирайте определенные годы, метрики и жанры. Настраивайте циферблаты по своему вкусу",
        "year": "Год",
        "customize_dials": "Настройка циферблатов",
        "text_orientation": "Ориентация текста",
        "radial": "Радиальная",
        "horizontal": "Горизонтальная",
        "reset_filters": "⟳ Сбросить фильтры",
        "no_data_message": "Нет данных — пожалуйста, импортируйте CSV",
        "no_filters_match": "Ни одна игра не соответствует текущим фильтрам — попробуйте настроить циферблаты",
        "game_word": "игра",
        "on_word": "на",
        "in_word": "в",
        "of_all_time": "за все время",
        "any_year": "ЛЮБОЙ",
        "single_multi": "Одиночная и Мульти",
        "footer": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        
        // Dial ring labels
        "dial_metric": "Метрика",
        "dial_genre": "Жанр",
        "dial_player_type": "Тип игрока",
        "dial_supported_os": "Поддерживаемая ОС",
        "dial_price": "Цена",
        
        // Metric options
        "metric_most_recommended": "чаще всего рекомендуют",
        "metric_high_rated": "имеет самый высокий рейтинг",
        "metric_most_reviews": "имеет больше всего обзоров",
        "metric_most_achievements": "имеет больше всего достижений",
        "metric_median_playtime": "имеет самое высокое медианное время игры",
        "metric_peak_ccu": "имеет самый высокий пик CCU",
        "metric_most_followers": "имеет больше всего подписчиков",
        "is_best": "является лучшим",
        
        // Metric option labels (on the rings)
        "metric_most_recommended_option": "чаще рекомендуют",
        "metric_high_rated_option": "высокий рейтинг",
        "metric_most_reviews_option": "больше обзоров",
        "metric_most_achievements_option": "больше достижений",
        "metric_median_playtime_option": "время в игре",
        "metric_peak_ccu_option": "пик CCU",
        "metric_most_followers_option": "больше подписчиков",
        
        // Genre options
        "genre_any": "любой",
        "genre_simulation": "симулятор",
        "genre_strategy": "стратегия",
        "genre_action": "экшен",
        "genre_rpg": "RPG",
        "genre_racing": "гонки",
        "genre_indie": "инди",
        "genre_adventure": "приключения",
        "genre_casual": "казуальные",
        "genre_sports": "спорт",
        
        // Player type options
        "player_any": "любой",
        "player_single": "одиночная игра",
        "player_multi": "мультиплеер",
        "player_both": "одиночная и мультиплеер",
        "player_single_display": "Одиночная",
        "player_multi_display": "Мультиплеер",
        "player_both_display": "Одиночная и Мульти",
        
        // OS options
        "os_any": "любая",
        "os_windows": "windows",
        "os_mac": "mac",
        "os_linux": "linux",
        
        // Price options
        "price_any": "любая",
        "price_free": "бесплатно",
        "price_under_5": "<5$",
        "price_under_10": "<10$",
        "price_under_15": "<15$",
        "price_under_20": "<20$",
        "price_under_30": "<30$",
        "price_under_40": "<40$",
        "price_under_60": "<60$",
        "price_over_60": ">60$",
        
        // Price text descriptions
        "free": "бесплатно",
        "price_range_under_5": "в ценовом диапазоне до $5",
        "price_range_5_10": "в ценовом диапазоне от $5 до $10",
        "price_range_10_15": "в ценовом диапазоне от $10 до $15",
        "price_range_15_20": "в ценовом диапазоне от $15 до $20",
        "price_range_20_30": "в ценовом диапазоне от $20 до $30",
        "price_range_30_40": "в ценовом диапазоне от $30 до $40",
        "price_range_40_60": "в ценовом диапазоне от $40 до $60",
        "price_range_60_plus": "в ценовом диапазоне от $60 и выше"
    }
};

let currentLanguage = 'en';

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
