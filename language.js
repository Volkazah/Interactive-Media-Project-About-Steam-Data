// language.js - Clean version with NO circular references
const translations = {
    en: {
        "hero_eyebrow": "Interactive Mediaproject about Steam Data",
        "hero_title": "8,000 most popular games. How Steam users influnce the data and does it change over time?",
        "hero_sub": "Six interactive visualisations based on real Steam data — each one offers insights into different platform aspects.",
        "stat_games": "4",
        "stat_games_label": "Open data-sources",
        "stat_viz": "7",
        "stat_viz_label": "Visualisation formats",
        "stat_months": "13",
        "stat_months_label": "Types of interactive mechanics",
        "explore": "Explore",
        "stories_label": "Infographics",
        "stories_headline": "Each graph provides different perspective on the Steam marketplace. Click on any card to engage with statistics.",
        "explore_cta": "Explore →",
        "arc_index": "Arc Diagram",
        "arc_question": "Do gamers change their opinion about videogames?",
        "arc_insight": "Tracks how the review sentiment for 3,139 top-reviewed games has shifted — and how often its going downwards.",
        "arc_tag": "3,139 games | April 2026",
        "arc_improving": "ascending",
        "arc_worsening": "descending",
        "ccu_index": "CCU Line Graph",
        "ccu_question": "Which games are great at keeping players — and which vanish overnight?",
        "ccu_insight": "Numbers for concurrent players peaks during 13 months, revealing which titles build lasting communities after peak success.",
        "ccu_tag": "250 games | 13 months",
        "ccu_long_tail": "high retention",
        "ccu_flash": "low retention",
        "dial_index": "Dial Graph",
        "dial_question": "What are really the best games — based on metrics you choose?",
        "dial_insight": "Spin circular dials — and find best games of all time.",
        "dial_tag": "7450 games | 29 years",
        "dial_genre": "GENRE",
        "dial_metric": "METRIC",
        "dial_player": "PLAYER_TYPE",
        "dial_best": "BEST",
        "dial_of_best": "OF BEST",
        "treemap_index": "Treemap + Dendrogam",
        "treemap_question": "How Indie and AAA publishers are distributed across the Steam?",
        "treemap_insight": "A map of publishers and developers — see who dominates by volume, and how much territory big players actually hold.",
        "treemap_tag": "3919 Publishers | 4000+ Developers",
        "spiral_index": "Spiral Plot",
        "spiral_question": "How has number of game releases changed across prise categories?",
        "spiral_insight": "A time spiral that represents prise categories, genre patterns and the long arc of Steam's growth.",
        "spiral_tag": "7407 games | 29 Years",
        "radar_index": "Radar Charts",
        "radar_question": "Lethal Company or R.E.P.O? Clair Obscur: Expedition 33 or Kingdom Come: Deliverance II?",
        "radar_insight": "Compare any games based on 7 measurable metrics.",
        "radar_tag": "7444 Games | 7 Metrics",
        "radar_rating": "RATING",
        "radar_sales": "SALES",
        "radar_players": "PLAYERS",
        "radar_retention": "FOLLOWS",
        "radar_reviews": "REVIEWS",
        "radar_hours": "HOURS",
        "radar_game_a": "Game A",
        "radar_game_b": "Game B",
        "data_provenance": "Data Sources",
        "data_tagline": "All visualisations are based on open data from three main sources, collected and cross-referenced in April 2026.",
        "source_api_icon": "",
        "source_api_name": "Steam and Steam Store API",
        "source_api_desc": "Game metadata: developers, publishers, release date, genres, categories, recommendations and platforms are pulled directly from Valve's public endpoints.",
        "source_api_meta": "General Metadata",
        "source_spy_icon": "",
        "source_spy_name": "SteamSpy",
        "source_spy_desc": "Estimated owners, playtime minutes, and genre, tags sourced from SteamSpy.",
        "source_spy_meta": "General Metadata",
        "source_kaggle_icon": "",
        "source_kaggle_name": "SteamDB",
        "source_kaggle_desc": "Followers, price, estimated owners, rating, reviews, peak CCU.",
        "source_kaggle_meta": "CCU data",
        "footer": "Steam and the Steam logo are trademarks of Valve Corporation. All other trademarks are property of their respective owners.",

        // ===== 1ARC_GRAPH.HTML =====
        "arc_title": "Gamers do change their opinion about videogames and often not in a better way",
        "arc_description": "distribution change in gamer's reviews across 3139 top reviewed games in April 2026",
        "search_placeholder": "Search game...",
        "filter_both": "Both",
        "filter_ascending": "Ascending",
        "filter_descending": "Descending",
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
        "scale_ascending": "Ascending reviews",
        "scale_descending": "Descending reviews",
        "footer_text": "Steam Name and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
        "footer": "Steam Name and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
        "recent_reviews": "recent reviews",
        "total_reviews": "Total reviews",
        "main_page": "Main Page",
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
        "months": "Months",
        "player_retention": "Player Retention %",
        "player_retention_aggregate": "Percentage of Games in Thirds",
        "no_games": "No games to display",
        "filtered_empty": "No games with these filters",
        "no_svg": "No SVG",
        "aggregate_mode_title": "Aggregate Mode:",
        "high_retention_legend": "High Retention (67-100%)",
        "medium_retention_legend": "Medium Retention (34-66%)",
        "low_retention_legend": "Low Retention (0-33%)",
        "incomplete_data_warning": " -",
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
        "player_type_multi": "Multiplayer",
        "player_type_single": "Singleplayer",
        "player_type_both": "Single&Multiplayer",
        
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
        "dial_title": "Which Games Are Statistically Best Of The Best?",
        "dial_subtitle": "Videogame Leaders Determination Tool",
        "year": "Year",
        "customize_dials": "Customize Dials",
        "text_orientation": "Text Orientation",
        "radial": "Radial",
        "horizontal": "Horizontal",
        "reset_filters": "⟳ Reset Filters",
        "no_data_message": "No data find",
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
        "metric_high_rated": "is the most high rated",
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
        "price_under_5": "0-5$",
        "price_under_10": "5-10$",
        "price_under_15": "10-15$",
        "price_under_20": "15-20$",
        "price_under_30": "20-30$",
        "price_under_40": "30-40$",
        "price_under_60": "40-60$",
        "price_over_60": ">$60",
        
        // Price text descriptions
        "free": "free",
        "price_range_under_5": "in a price range under 5$",
        "price_range_5_10": "in a price range from 5$ to 10$",
        "price_range_10_15": "in a price range from 10$ to 15$",
        "price_range_15_20": "in a price range from 15$ to 20$",
        "price_range_20_30": "in a price range from 20$ to 30$",
        "price_range_30_40": "in a price range from 30$ to 40$",
        "price_range_40_60": "in a price range from 40$ to 60$",
        "price_range_60_plus": "in a price range above 60$",

        // ===== 4TREEMAP.HTML =====
        "treemap_title": "Indie Publishers Hold Their Ground Against AAA",
        "treemap_subtitle": "Publishers and Developers Distribution on Steam",
        "tiling": "Tiling:",
        "sorting": "Sorting:",
        "descending": "Descending",
        "ascending": "Ascending",
        "search_placeholder4": "Search game, publisher, developer... (up to 5 requests)",
        "search_hint": "Add up to 5 items to compare publishers side by side",
        "layer1_label": "Layer 1: Top 40 Publishers",
        "back_to_treemap": "Back to Treemap",
        "zoom": "Zoom:",
        "game_rating": "Game Rating",
        "low_to_high": "From Low to High",
        "close": "Close",
        "upload_csv": "Upload CSV",
        "no_file": "No file",
        "footer_credit": "Steam name and Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
        "publishers": "publishers",
        "games": "games",
        "max_search_items": "Maximum 5 search items allowed.",
        "clear_all": "Clear all",
        "publisher_type": "publisher",
        "developer_type": "developer",
        "game_type": "game",
        "no_games_found": "No games found for publisher:",
        "games_count": "Games",
        "total_owners": "Total Owners",
        "game": "Game",
        "owners": "Owners",
        "rating": "Rating",
        "excellent": "Overhelmingly Positive",
        "very_good": "Very Positive",
        "good": "Positive",
        "mixed": "Mixed",
        "poor": "Negative",
        "no_data": "No data",
        "no_publishers": "No publishers to display",
        "others": "Others",
        "publishers_lower": "publishers",
        "layer2_title": "Layer 2 Remaining Publishers",
        "click_to_expand": "click to expand",
        "developers_count": "Developers",
        "orange_intensity": "Orange intensity",
        "click_to_explore": "Click to explore game hierarchy",
        "games_lower": "games",
        "devs_lower": "devs",
        "layer2": "Layer 2",
        "layer1": "Layer 1 Top 40",
        // ===== 5SPIRAL_GRAPH.HTML =====
        "spiral_title": "How prices for videogames on Steam changed for the last 30 years",
        "spiral_subtitle": "Games distribution between price categories, years and genres",
        "spiral_genre": "Genre",
        "spiral_player_type": "Player Type",
        "spiral_supported_os": "Supported OS",
        "spiral_search_games": "Search Games",
        "spiral_search_placeholder": "Type game name...",
        "spiral_reset_filters": "⟳ Reset All Filters",
        "spiral_hover_hint": "Additional info is displayed when hovering above bars",
        "spiral_upload_csv": "Upload CSV File",
        "spiral_no_data": "No data loaded. Try another set of filters.",
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
        "spiral_older_years": "Past — Present",
        "spiral_free": "Free",
        "spiral_under_5": "0-5$",
        "spiral_under_10": "5-10$",
        "spiral_under_15": "10-15$",
        "spiral_under_20": "15-20$",
        "spiral_under_30": "20-30$",
        "spiral_under_40": "30-40$",
        "spiral_over_40": ">40$",
        "genre_any": "Any",
        "footer_credit": "Steam Name and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.",
        "filter_or": "Or",
        "filter_and": "And",
        "genre_action": "Action",
        "genre_adventure": "Adventure",
        "genre_rpg": "RPG",
        "genre_strategy": "Strategy",
        "genre_simulation": "Simulation",
        "genre_casual": "Casual",
        "genre_indie": "Indie",
        "genre_racing": "Racing",
        "genre_sports": "Sports",
        "player_type_single": "Singleplayer",
        "player_type_multi": "Multiplayer",
        "player_type_both": "Hybrid",

        // ===== 6RADAR_GRAPH.HTML =====
        "radar_title": "Can inspired games be more successful than a pioneer?",
        "radar_subtitle": "Game Success Comparison Radar Tool",
        "radar_active_metrics": "Active metrics",
        "radar_selected": "selected",
        "radar_games_loaded": "games loaded",
        "radar_no_file": "No file",
        "radar_auto_loaded": "6_radar.csv (auto-loaded)",
        "radar_auto_load_error": "Could not auto-load 6_radar.csv",
        "radar_manual_upload_prompt": "Please use the Upload button below",
        "radar_upload_csv_btn": "Upload CSV",
        "radar_no_data": "No data loaded",
        "radar_upload_prompt": "Upload a CSV file or wait for auto-load",
        "radar_search_placeholder": "Search game...",
        "radar_need_metrics": "Need at least 3 metrics selected<br/>Enable more metrics above.",
        "radar_max_radars_warning": "Maximum {max} radars allowed",
        "radar_min_radars_warning": "Cannot remove: minimum {min} radars required",
        "radar_max_metrics_warning": "Maximum 7 metrics allowed",
        "radar_min_metrics_warning": "Minimum 3 metrics required for radar charts",
        "radar_csv_missing_columns": "CSV missing required columns: {columns}",
        "radar_no_valid_games": "No valid game entries found.",
        "radar_error_parsing": "Error parsing CSV: {error}",
        "radar_failed_read": "Failed to read file.",
        "radar_value": "Value",
        "radar_max": "Max (100%)",
        "radar_proportion": "Proportion",
        "radar_count": "count",
        
        // Radar metric labels
        "radar_metric_recommendations": "recommendations",
        "radar_metric_reviews": "reviews",
        "radar_metric_rating": "rating %",
        "radar_metric_playtime": "playtime (min)",
        "radar_metric_peak": "peak players",
        "radar_metric_achievements": "achievements",
        "radar_metric_follows": "follows"
    },
    ru: {
        // ===== INDEX.HTML (Landing Page) - Russian =====
        "hero_eyebrow": "Интерактивный медиапроект о данных Steam",
        "hero_title": "8 000 самых популярных игр. Как пользователи Steam влияют на данные и меняются ли они со временем?",
        "hero_sub": "Шесть интерактивных визуализаций на основе реальных данных Steam — каждая предлагает понимание различных аспектов платформы.",
        "stat_games": "4",
        "stat_games_label": "Источника данных",
        "stat_viz": "7",
        "stat_viz_label": "Форматов визуализации",
        "stat_months": "13",
        "stat_months_label": "Типов интерактивных механик",
        "explore": "Исследовать",
        "stories_label": "Инфографика",
        "stories_headline": "Каждый график предлагает разную перспективу на рынок Steam. Нажмите на любой график, чтобы подробнее ознакомиться с данными.",
        "explore_cta": "Исследовать →",
        
        "arc_index": "Дуговая диаграмма",
        "arc_question": "Меняют ли геймеры свое мнение о видеоиграх?",
        "arc_insight": "Как менялись категории отзывов для 3 139 наиболее популярных игр — и как часто не в лучшую сторону.",
        "arc_tag": "3 139 игр | Апрель 2026",
        "arc_improving": "возрастание",
        "arc_worsening": "убывание",
        
        "ccu_index": "Линейный график CCU",
        "ccu_question": "Какие игры отлично удерживают игроков — а какие забываются за неделю?",
        "ccu_insight": "Значения пика одновременных игроков за 13 месяцев, показывающие, какие проекты сохраняют базу игроков после пикового успеха.",
        "ccu_tag": "250 игр | 13 месяцев",
        "ccu_long_tail": "высокое удержание",
        "ccu_flash": "низкое удержание",
        
        "dial_index": "Дисковый график",
        "dial_question": "Какие игры действительно лучшие — на основе выбранных вами метрик?",
        "dial_insight": "Вращайте кольца — и находите лучшие игры всех времен.",
        "dial_tag": "7 450 игр | 29 лет",
        "dial_genre": "ЖАНР",
        "dial_metric": "МЕТРИКА",
        "dial_player": "ТИП ИГРОКА",
        "dial_best": "ЛУЧШИЕ",
        "dial_of_best": "ИЗ ЛУЧШИХ",
        
        "treemap_index": "Древовидная схема + Дендрограмма",
        "treemap_question": "Какое распределение Инди и AAA издателей в Steam?",
        "treemap_insight": "Карта издателей и разработчиков — кто доминирует по объему и какой сегмент на самом деле занимают крупные игроки.",
        "treemap_tag": "3 919 издателей | 4 000+ разработчиков",
        
        "spiral_index": "Спиральная диаграмма",
        "spiral_question": "Как менялось количество выпущенных игр по ценовым категориям?",
        "spiral_insight": "Временная спираль, которая отображает ценовые категории, жанровые паттерны и долгую историю роста Steam.",
        "spiral_tag": "7 407 игр | 29 лет",
        
        "radar_index": "Радарные диаграммы",
        "radar_question": "Lethal Company или R.E.P.O? Clair Obscur: Expedition 33 или Kingdom Come: Deliverance II?",
        "radar_insight": "Сравнивайте любые игры по 7 измеримым метрикам.",
        "radar_tag": "7 444 игры | 7 метрик",
        "radar_rating": "РЕЙТИНГ",
        "radar_sales": "ПРОДАЖИ",
        "radar_players": "ИГРОКИ",
        "radar_retention": "ПОДПИСЧИКИ",
        "radar_reviews": "ОБЗОРЫ",
        "radar_hours": "ЧАСЫ",
        "radar_game_a": "Игра А",
        "radar_game_b": "Игра Б",
        
        "data_provenance": "Источники данных",
        "data_tagline": "Все визуализации основаны на открытых данных из четырех основных источников, собранных и обработанных в апреле 2026 года.",
        "source_api_icon": "",
        "source_api_name": "Steam и Steam Store API",
        "source_api_desc": "Метаданные игр: разработчики, издатели, дата релиза, жанры, категории, рекомендации и платформы — получены по публичным API от Valve.",
        "source_api_meta": "Общие метаданные",
        "source_spy_icon": "",
        "source_spy_name": "SteamSpy",
        "source_spy_desc": "Приблизительное количество владельцев, время в минутах, жанры и теги из SteamSpy.",
        "source_spy_meta": "Общие метаданные",
        "source_kaggle_icon": "",
        "source_kaggle_name": "SteamDB",
        "source_kaggle_desc": "Подписчики, цена, приблизительное количество владельцев, рейтинг, обзоры, пик CCU.",
        "source_kaggle_meta": "Данные CCU",
        
        "footer": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        // ===== 1ARC_GRAPH.HTML =====
        "arc_title": "Геймеры меняют свое мнение о видеоиграх и часто не в лучшую сторону",
        "arc_description": "Распределения отзывов игроков среди 3139 наиболее обсуждаемых игр апреля 2026",
        "search_placeholder": "Поиск игры...",
        "filter_both": "Оба",
        "filter_ascending": "Возрастание",
        "filter_descending": "Убывание",
        "reset_positions": "По умолчанию",
        "clear_all": "Сброс выделений",
        "compare_games": "Выделенные игры",
        "drag_instruction": "Можно перетаскивать сферы. При наведении доступна дополнительная информация",
        "games_loaded": "игр загружено",
        "upload_csv": "Загрузить CSV файл",
        "click_or_drag": "Нажмите или перетащите CSV файл",
        "remove_button": "Удалить",
        "max_games": "Максимум 5 игр можно сравнить. Сначала удалите игру.",
        "category_overwhelmingly_positive": "крайне положительные",
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
        "tooltip_number_of_games": "Игр",
        "scale_ascending": "Возрастающих оценок",
        "scale_descending": "Убывающих оценок",
        "footer_text": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        "recent_reviews": "Недавних обзоров",
        "total_reviews": "Всего обзоров",
        "main_page": "Главная",
        "to": "→",
        
        // ===== 2CCU_GRAPH.HTML =====
        "ccu_title": "Лишь немногие игры успешно удержают игроков",
        "ccu_subtitle": "Изменение в % количества игроков в течение года после пика CCU",
        "search_game2": "Поиск игр (максимум 5 выделенных)",
        "filter_genre": "Фильтр по жанру (максимум 3 жанра)",
        "genre_placeholder": "Введите жанр...",
        "player_type": "Фильтр по типу игры:",
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
        "months": "Месяцы",
        "player_retention": "Удержание игроков в %",
        "player_retention_aggregate": "Процент игр в третях",
        "no_games": "Нет игр для отображения",
        "filtered_empty": "Нет игр по выбранным фильтрам",
        "no_svg": "Нет SVG",
        "aggregate_mode_title": "Агрегированный режим:",
        "high_retention_legend": "Высокое удержание (67-100%)",
        "medium_retention_legend": "Среднее удержание (34-66%)",
        "low_retention_legend": "Низкое удержание (0-33%)",
        "incomplete_data_warning": " -",
        "player_types": "Типы игры:",
        "highlighted_game": "Выделенная игра",
        "monthly_data_point": "Точка с данными",
        "incomplete_data": "Неполные данные (пунктирная линия)",
        "genres_label": "Жанры",
        "games_displayed": "игр отображено",
        "genres": "Жанры",
        "type": "Тип",
        "retention": "Удержание",
        "high_retention_range": "Высокое (67-100%)",
        "medium_retention_range": "Среднее (34-66%)",
        "low_retention_range": "Низкое (0-33%)",
        
        // Player type button labels
        "player_type_multi": "Многопользовательские",
        "player_type_single": "Одиночные",
        "player_type_both": "Смешанные",
        
        // Month labels
        "month_1": "1 Месяц",
        "month_2": "2 Месяц",
        "month_3": "3 Месяц",
        "month_4": "4 Месяц",
        "month_5": "5 Месяц",
        "month_6": "6 Месяц",
        "month_7": "7 Месяц",
        "month_8": "8 Месяц",
        "month_9": "9 Месяц",
        "month_10": "10 Месяц",
        "month_11": "11 Месяц",
        "month_12": "12 Месяц",
        "month_13": "13 Месяц",
        
        // ===== 3DIAL_GRAPH.HTML =====
        "dial_title": "Какие игры можно назвать лучшими из лучших?",
        "dial_subtitle": "Инструмент определения видеоигровых лидеров в разных категориях",
        "year": "Год",
        "customize_dials": "Настройка дисков",
        "text_orientation": "Наклон текста",
        "radial": "Радиальный",
        "horizontal": "Горизонтальный",
        "reset_filters": "⟳ Сбросить фильтры",
        "no_data_message": "Нет найденных данных",
        "no_filters_match": "Ни одна игра не соответствует выбранным фильтрам — попробуйте другие комбинации",
        "game_word": "игра",
        "on_word": "на",
        "in_word": "в",
        "of_all_time": "за все время",
        "any_year": "ЛЮБОЙ",
        "single_multi": "как смешанная",
        "footer": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        
        // Dial ring labels
        "dial_metric": "Метрика",
        "dial_genre": "Жанр",
        "dial_player_type": "Тип игрока",
        "dial_supported_os": "Поддерживаемая ОС",
        "dial_price": "Цена",
        
        // Metric options
        "metric_most_recommended": "самая рекомендованная",
        "metric_high_rated": "самая высокоцененная",
        "metric_most_reviews": "самая обозреваемая",
        "metric_most_achievements": "имеет больше всего достижений",
        "metric_median_playtime": "имеет самое высокое медианное время в игре",
        "metric_peak_ccu": "имеет наибольшее значение одновременных игроков",
        "metric_most_followers": "самая отслеживаемая",
        "is_best": "является лучшей",
        
        // Metric option labels (on the rings)
        "metric_most_recommended_option": "больше рекомендаций",
        "metric_high_rated_option": "высокий рейтинг",
        "metric_most_reviews_option": "больше обзоров",
        "metric_most_achievements_option": "больше достижений",
        "metric_median_playtime_option": "время в игре",
        "metric_peak_ccu_option": "пик CCU",
        "metric_most_followers_option": "больше подписчиков",
        
        // Genre options
        "genre_any": "любой",
        "genre_simulation": "симуляция",
        "genre_strategy": "стратегия",
        "genre_action": "экшен-игра",
        "genre_rpg": "РПГ",
        "genre_racing": "гонка",
        "genre_indie": "инди",
        "genre_adventure": "адвенчура",
        "genre_casual": "казуальная",
        "genre_sports": "спортивная",
        
        // Player type options
        "player_any": "любая",
        "player_single": "одиночная",
        "player_multi": "многопользовательская",
        "player_both": "смешанная",
        "player_single_display": "Одиночная",
        "player_multi_display": "Многопользовательская",
        "player_both_display": "Смешанная",
        
        // OS options
        "os_any": "любая",
        "os_windows": "windows",
        "os_mac": "mac",
        "os_linux": "linux",
        
        // Price options
        "price_any": "любая",
        "price_free": "бесплатно",
        "price_under_5": "0-5$",
        "price_under_10": "5-10$",
        "price_under_15": "10-15$",
        "price_under_20": "15-20$",
        "price_under_30": "20-30$",
        "price_under_40": "30-40$",
        "price_under_60": "40-60$",
        "price_over_60": ">60$",
        
        // Price text descriptions
        "free": "в бесплатном сегменте",
        "price_range_under_5": "в ценовом диапазоне до 5$",
        "price_range_5_10": "в ценовом диапазоне от 5$ до 10$",
        "price_range_10_15": "в ценовом диапазоне от 10$ до 15$",
        "price_range_15_20": "в ценовом диапазоне от 15$ до 20$",
        "price_range_20_30": "в ценовом диапазоне от 20$ до 30$",
        "price_range_30_40": "в ценовом диапазоне от 30$ до 40$",
        "price_range_40_60": "в ценовом диапазоне от 40$ до 60$",
        "price_range_60_plus": "в ценовом диапазоне от 60$ и выше",
        
        // ===== 4TREEMAP.HTML =====
        "treemap_title": "Независимые издатели удерживают позиции против AAA",
        "treemap_subtitle": "Распределение издателей и разработчиков в Steam",
        "tiling": "Тайлинг:",
        "sorting": "Сортировка:",
        "descending": "По убыванию",
        "ascending": "По возрастанию",
        "search_placeholder4": "Поиск игры, издателя, разработчика... (до 5 запросов)",
        "search_hint": "Добавьте до 5 запросов для сравнения",
        "layer1_label": "1 Слой: Топ 40 издателей",
        "back_to_treemap": "Назад к тепловой карте",
        "zoom": "Масштаб:",
        "game_rating": "Рейтинг игры",
        "low_to_high": "От Низкого к Высокому",
        "close": "Закрыть",
        "upload_csv": "Загрузить CSV",
        "no_file": "Нет файла",
        "footer_credit": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        "publishers": "издателей",
        "games": "игр",
        "max_search_items": "Максимум 5 запросов для поиска.",
        "clear_all": "Очистить всё",
        "publisher_type": "издатель",
        "developer_type": "разработчик",
        "game_type": "игра",
        "no_games_found": "Игры не найдены для издателя:",
        "games_count": "Игр",
        "total_owners": "Всего владельцев",
        "game": "Игра",
        "owners": "Владельцев",
        "rating": "Рейтинг",
        "excellent": "Крайне позитивные",
        "very_good": "Очень позитивныее",
        "good": "Позитивные",
        "mixed": "Смешанные",
        "poor": "Негативные",
        "no_data": "Нет данных",
        "no_publishers": "Нет издателей для отображения",
        "others": "Остальные",
        "publishers_lower": "издателей",
        "layer2_title": "Слой 2 Оставшиеся издатели",
        "click_to_expand": "нажмите чтобы открыть",
        "developers_count": "Разработчиков",
        "orange_intensity": "Интенсивность оранжевого",
        "click_to_explore": "Нажмите чтобы посмотреть иерархию",
        "games_lower": "игр",
        "devs_lower": "студий",
        "layer2": "2 Слой",
        "layer1": "1 Слой: Топ 40",
        
        "spiral_title": "Как менялись цены на видеоигры в Steam за последние 30 лет",
        "spiral_subtitle": "Распределение игр по ценовым категориям, годам и жанрам",
        "spiral_genre": "Жанр",
        "spiral_player_type": "Тип игры",
        "spiral_supported_os": "Поддерживаемая ОС",
        "spiral_search_games": "Поиск игр",
        "spiral_search_placeholder": "Введите название игры...",
        "spiral_reset_filters": "⟳ Сбросить все фильтры",
        "spiral_hover_hint": "Подробная информация отображается при наведении на столбцы",
        "spiral_upload_csv": "Загрузить CSV файл",
        "spiral_no_data": "Нет данных для выбранных фильтров.",
        "spiral_max_games": "Максимум 5 игр можно выделить. Удалите запросы.",
        "spiral_showing_games": "Показано",
        "spiral_games": "игр (из",
        "spiral_total": "всего)",
        "spiral_filters_active": "Фильтры активны.",
        "spiral_no_match": "Нет подходящих игр.",
        "spiral_no_price_data": "Нет данных для выбранных фильтров.",
        "spiral_price_range": "Ценовой диапазон",
        "spiral_games_count": "Игр",
        "spiral_total_in_year": "Всего за год",
        "spiral_highlighted": "Выделенные",
        "spiral_games_center": "Игр",
        "spiral_older_years": "Прошлое — Настоящее",
        "spiral_free": "Бесплатно",
        "spiral_under_5": "0-5$",
        "spiral_under_10": "5-10$",
        "spiral_under_15": "10-15$",
        "spiral_under_20": "15-20$",
        "spiral_under_30": "20-30$",
        "spiral_under_40": "30-40$",
        "spiral_over_40": ">40$",
        "genre_any": "Любой",
        "footer_credit": "Название Steam и логотип Steam являются товарными знаками и/или зарегистрированными товарными знаками компании Valve Corporation. Все прочие товарные знаки принадлежат их соответствующим владельцам.",
        "filter_or": "Или",
        "filter_and": "И",
        "genre_action": "Экшен",
        "genre_adventure": "Адвенчуры",
        "genre_rpg": "РПГ",
        "genre_strategy": "Стратегии",
        "genre_simulation": "Симуляции",
        "genre_casual": "Казуальные",
        "genre_indie": "Инди",
        "genre_racing": "Гонки",
        "genre_sports": "Спортивные",
        "player_type_single": "Однопользовательские",
        "player_type_multi": "Многопользовательские",
        "player_type_both": "Смешанные",
        
        // ===== 6RADAR_GRAPH.HTML =====
        "radar_title": "Могут ли последователи быть успешнее оригинала?",
        "radar_subtitle": "Инструмент сравнения успешности видеоигр",
        "radar_active_metrics": "Активные метрики",
        "radar_selected": "выбрано",
        "radar_games_loaded": "игр загружено",
        "radar_no_file": "Нет файла",
        "radar_auto_loaded": "6_radar.csv (автозагружено)",
        "radar_auto_load_error": "Не удалось автозагрузить 6_radar.csv",
        "radar_manual_upload_prompt": "Пожалуйста, используйте кнопку загрузки ниже",
        "radar_upload_csv_btn": "Загрузить CSV",
        "radar_no_data": "Нет данных",
        "radar_upload_prompt": "Загрузите CSV файл или дождитесь автозагрузки",
        "radar_search_placeholder": "Поиск игры...",
        "radar_need_metrics": "Нужно минимум 3 выбранные метрики<br/>Включите больше метрик выше.",
        "radar_max_radars_warning": "Максимум {max} радаров разрешено",
        "radar_min_radars_warning": "Нельзя удалить: минимум {min} радаров требуется",
        "radar_max_metrics_warning": "Максимум 7 метрик разрешено",
        "radar_min_metrics_warning": "Минимум 3 метрики требуется для радарных диаграмм",
        "radar_csv_missing_columns": "В CSV отсутствуют обязательные столбцы: {columns}",
        "radar_no_valid_games": "Не найдено действительных записей об играх.",
        "radar_error_parsing": "Ошибка парсинга CSV: {error}",
        "radar_failed_read": "Не удалось прочитать файл.",
        "radar_value": "Значение",
        "radar_max": "Максимум (100%)",
        "radar_proportion": "Доля",
        "radar_count": "количество",
        
        // Radar metric labels
        "radar_metric_recommendations": "рекомендации",
        "radar_metric_reviews": "обзоры",
        "radar_metric_rating": "рейтинг %",
        "radar_metric_playtime": "время (мин)",
        "radar_metric_peak": "пик игроков",
        "radar_metric_achievements": "достижения",
        "radar_metric_follows": "подписчики"
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
