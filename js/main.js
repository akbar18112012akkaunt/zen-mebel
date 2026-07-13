/* ============ МНОГОСТРАНИЧНЫЙ РЕЖИМ ============
   На каждой странице есть не все элементы (карусель только на главной,
   форма только на contact.html и т.д.). Шим ниже возвращает "пустышку"
   вместо null, чтобы весь код работал на любой странице без ошибок. */
const _gebi = document.getElementById.bind(document);
document.getElementById = function(id) {
    return _gebi(id) || document.createElement('div');
};

const translations = {
    en: {
        meta: { title: "ZEN PHARM — Pharmacy Furniture Solutions", desc: "ZEN PHARM designs, manufactures and installs pharmacy furniture across Uzbekistan, Russia and Turkey." },
        brandSub: "Pharmacy Furniture",
        nav: { home: "Home", about: "About", products: "Products", catalog: "Catalog", process: "Process", projects: "Projects", contact: "Contact", quote: "Get a Quote" },
        hero: { title: "Furniture That Makes Pharmacies Work Better", subtitle: "We design, manufacture and install retail furniture built specifically for pharmacies — from reception counters to cold-chain displays — across Turkey, Russia and Central Asia.", cta1: "Get a Free Consultation", cta2: "View Our Work" },
        stats: [{ number: "15+", label: "Years of Experience" }, { number: "420+", label: "Pharmacies Furnished" }, { number: "3", label: "Countries We Serve" }, { number: "98%", label: "Client Satisfaction" }],
        about: { tag: "About Us", heading: "We Build the Furniture Behind Every Great Pharmacy", p1: "For over 15 years, ZEN PHARM has been designing and manufacturing furniture exclusively for pharmacies and drugstores. We understand that a pharmacy is not just a shop — it's a place where trust, hygiene and efficiency have to work together, and the furniture has to support all three.", p2: "From single independent pharmacies to nationwide chains, we combine engineering precision with retail merchandising know-how to help our clients sell more, work faster and build a space customers trust.", list: ["Custom design tailored to your brand", "Certified, hygienic and durable materials", "Full production in our own facilities", "Installation and after-sales support included"] },
        products: {
            tag: "What We Make",
            heading: "Furniture for Every Corner of Your Pharmacy",
            subheading: "A complete, modular product range designed around how pharmacies actually work — easy to reconfigure, easy to keep clean, built to last.",
            items: [
                { title: "Cash & Reception Counters", desc: "Ergonomic checkout and consultation counters for fast, comfortable service and secure storage of prescription medicine." },
                { title: "Wall & Island Shelving", desc: "Modular shelving systems for OTC medicine, supplements and everyday health products, adjustable to any floor plan." },
                { title: "Glass Display Showcases", desc: "Locking glass showcases for premium, prescription and high-value products with clear sightlines and LED lighting." },
                { title: "Cold-chain Display Units", desc: "Refrigerated cabinets and coolers for temperature-sensitive medicine, built to pharmaceutical storage standards." },
                { title: "Storage & Back-office Cabinets", desc: "Secure storerooms, drawer systems and archive cabinets that keep your back office organized and compliant." },
                { title: "Cosmetics & Baby-care Displays", desc: "Bright, brand-forward fixtures for cosmetics, baby care and wellness products that boost impulse purchases." }
            ]
        },
        process: {
            tag: "How We Work",
            heading: "From Idea to Installation in Four Steps",
            subheading: "A clear, transparent process so you always know what happens next.",
            steps: [
                { title: "Consultation & Layout Design", desc: "We visit your space (or review your floor plan), understand your goals and prepare a 3D layout and design concept — free of charge." },
                { title: "Manufacturing", desc: "Once approved, your furniture is manufactured in our own facility under strict quality control, using certified materials." },
                { title: "Delivery & Installation", desc: "We deliver and install everything on site, with minimal disruption to your working hours." },
                { title: "Warranty & Service", desc: "Every project comes with a multi-year warranty and ongoing service support." }
            ]
        },
        features: {
            tag: "Why ZEN PHARM",
            heading: "Built on Experience, Trusted by Pharmacies",
            items: [
                { title: "15+ Years of Focus", desc: "We only design furniture for pharmacies and drugstores — it's our sole specialty, not a side business." },
                { title: "Certified Materials", desc: "All materials meet hygiene and safety standards for pharmaceutical retail environments." },
                { title: "Your Brand, Your Design", desc: "Every project is fully customized to your brand colors, logo and store concept — no cookie-cutter templates." },
                { title: "Full-Cycle Service", desc: "Design, manufacturing, delivery, installation and after-sales support — all from one partner." }
            ]
        },
        custom: { tag: "Custom Solutions", heading: "Need Something Non-Standard? We Build It.", p1: "Unusual floor plan, a very specific brand concept, or a large chain rollout with strict deadlines — our in-house production covers metal, wood, glass and laminate, so we can design and manufacture almost any configuration.", list: ["Custom sizes and configurations for any space", "Full brand-identity integration (colors, logo, materials)", "Production capacity for multi-store chain rollouts", "Engineering support for non-standard layouts"], cta: "Discuss Your Project" },
        p1: {
            tag: "UNLIMITED FLEXIBILITY",
            sub: "Modular wall shelving system",
            desc: "The S25 Wall Unit is a modular wall shelving system designed for modern pharmacies. With its sleek design, high product display capacity and functional storage areas, it improves both the look and the efficiency of your store.",
            featTitle: "Features",
            f1: "Modular design, manufactured to custom dimensions",
            f2: "Electrostatically painted steel support structure",
            f3: "MDF-Laminate or lacquered MDF (MDF-Lake) surface options",
            f4: "Adjustable shelving system",
            f5: "Lightbox advertising area with LED lighting",
            f6: "Flexible use with pegboard and hanging accessories",
            f7: "Drawer and cabinet storage in the lower section",
            f8: "Easy installation, durable and long-lasting construction"
        },
        p2: {
            tag: "SPACE-SAVING STORAGE",
            sub: "Medicine Storage Drawer System",
            desc: "Designed for modern pharmacies, the Medicine Storage Drawer System keeps medicines stored in an organized, secure and quickly accessible way. Its ergonomic structure and high storage capacity increase working efficiency.",
            f1: "Full-extension telescopic rail system",
            f2: "Adjustable transparent dividers",
            f3: "High storage capacity",
            f4: "Durable steel body",
            f5: "Easy-to-clean surface",
            f6: "Available in different sizes",
            closing: "This system is an ideal solution for the organized storage of prescription medicines, OTC products, vitamins and medical supplies.",
            engTitle: "Flawless Engineering",
            e1t: "Robust construction", e1d: "The steel body withstands the intensive daily load of fully loaded drawers.",
            e2t: "Silent operation", e2d: "Telescopic rails open smoothly and quietly even under full load.",
            e3t: "Everyday comfort", e3d: "Thoughtful ergonomics: every medicine is at hand and takes seconds to find.",
            e4t: "Built to last", e4d: "The mechanisms are tested for tens of thousands of opening and closing cycles."
        },
        p2dl: { tag: "Detailed Information", title: "Detailed product information", text: "Download the PDF with technical specifications, dimensions and configuration options.", btn: "Download PDF" },
        ab: {
            tag: "About Us",
            title: "About Us",
            sub: "New-generation pharmacy furniture — since 2011",
            lead: "Founded in 2011, ZEN Pharmacy Mebel is a professional pharmacy furniture manufacturer based in the Yunusabad district of Tashkent, specializing exclusively in the design, production and installation of new-generation pharmacies.",
            p1: "With an experienced team of 25 specialists and more than 20 years of know-how in retail, we develop aesthetic, functional and sales-driven solutions for pharmacies.",
            p2: "With this approach, we provide project-specific design, production and installation services for pharmacy chains and independent pharmacies. Every project is planned individually around the store's size, location, target audience and brand identity.",
            quote: "For us, a pharmacy is not just a space where products are displayed. A well-planned pharmacy is a powerful commercial structure — it strengthens the customer experience, increases space efficiency, makes product categories more visible and raises sales potential.",
            stat1: "Founded", stat2: "Specialists on the team", stat3: "Years of retail experience", stat4: "Central Asian countries",
            cycleTitle: "Full Cycle — With Our Own Team",
            cycleSub: "From design to production and from production to installation, we manage the entire process with our own professional team, offering our clients reliable, high-quality and sustainable solutions.",
            c1t: "Design", c1d: "We design every pharmacy individually — around its space, location, audience and brand identity.",
            c2t: "Production", c2d: "We manufacture in our own facilities under strict quality control, using certified, durable materials.",
            c3t: "Installation", c3d: "Delivery and installation are handled by our own professional team — fast, precise and with minimal disruption to the pharmacy.",
            geoTitle: "Project Geography",
            geoText: "Today we deliver projects across Uzbekistan, combining local needs with international retail standards.",
            geo1: "Uzbekistan",
            final: "We don't just manufacture pharmacy furniture. We build stronger brands, more efficient sales spaces and the new-generation pharmacies of the future."
        },
        cat: { tag: "Catalog", title: "Product Catalog", sub: "All products, dimensions and materials — in one document", dlTitle: "Download the full ZEN PHARM catalog", dlText: "The complete product catalog with dimensions, materials and configuration options.", dlBtn: "Download catalog (PDF)" },
        sol: {
            tag: "Process Management",
            title: "Excellence at Every Step",
            sub: "We make complex processes transparent. Manage risk with our approach — and focus only on the result.",
            expTitle: "Experience ZEN PHARM",
            expQuote: "“The right solution starts with the right material and the right organization”",
            p1t: "The Right Material", p1d: "Certified, hygienic and durable materials selected for the daily demands of a pharmacy.",
            p2t: "The Right Design", p2d: "A layout that guides customer flow, highlights the display and increases sales.",
            p3t: "The Right Production", p3d: "Our own production facilities with strict quality control at every stage.",
            p4t: "The Right Installation", p4d: "Professional installation right on schedule — with minimal impact on your pharmacy's operations.",
            matTitle: "Metal · Wood · Glass · Laminate",
            matSub: "In-house production for every configuration"
        },
        work: { tag: "Making a Difference", title: "Our Work", sub: "Discover the new-generation pharmacy projects we have successfully delivered in Uzbekistan and across Central Asia.", fAll: "All", fTash: "Tashkent", fSam: "Samarkand", proj1: "Project 1", proj2: "Project 2", proj3: "Project 3", view: "View", more: "Show more" },
        act: {
            heading: "Take Action Now",
            c1t: "Get a 3D design of your pharmacy", c1d: "Visualize your investment in advance: we'll prepare a free 3D layout for your space.", c1b: "Request a 3D design",
            c2t: "Download the catalog", c2d: "The complete catalog with dimensions, materials and product specifications.",
            c3t: "Get a quote", c3d: "Contact our team — we'll find the ideal solution for your project.", c3b: "Contact us"
        },
        con: { tag: "Get in Touch", sub: "Ready to hear your ideas and requests" },
        titles: { about: "About Us — ZEN PHARM", catalog: "Catalog — ZEN PHARM", contact: "Contact — ZEN PHARM", solutions: "Custom Solutions — ZEN PHARM", works: "Our Work — ZEN PHARM" },
        projects: {
            tag: "Our Work",
            heading: "Pharmacies We've Furnished",
            subheading: "A selection of recent projects across Uzbekistan, Russia and Turkey.",
            items: [
                { title: "Salomatlik Pharmacy", location: "Tashkent, Uzbekistan" },
                { title: "Apteka Zdorovye", location: "Moscow, Russia" },
                { title: "Şifa Eczaneleri", location: "Istanbul, Turkey" },
                { title: "GreenCross Pharmacy", location: "Samarkand, Uzbekistan" },
                { title: "Doctor Plus", location: "Kazan, Russia" },
                { title: "Sağlık Eczanesi", location: "Ankara, Turkey" }
            ]
        },
        testimonials: {
            tag: "Testimonials",
            heading: "What Our Clients Say",
            items: [
                { quote: "ZEN PHARM redesigned all 12 of our branches within three months, without closing a single one for more than a day. Sales in the front area increased noticeably.", name: "Dilnoza Yusupova", role: "Operations Director", company: "Salomatlik Pharmacy Chain" },
                { quote: "The quality of materials and attention to hygiene requirements is exactly what we needed for a pharmacy environment. Professional from the first meeting to installation.", name: "Irina Sokolova", role: "Owner", company: "Apteka Zdorovye" },
                { quote: "We needed a very specific layout for a small city-center location. The ZEN PHARM team designed a solution that fit perfectly and still looks premium.", name: "Mehmet Aydın", role: "General Manager", company: "Şifa Eczaneleri" }
            ]
        },
        cta: { heading: "Ready to Upgrade Your Pharmacy?", text: "Get a free consultation and 3D layout design — no obligation.", button: "Request a Free Consultation" },
        contact: { tag: "Contact Us", heading: "Let's Talk About Your Project", subheading: "Fill out the form or reach us directly — we typically respond within one business day.", addressLabel: "Address", address: "Ahmad Donish Street, Tashkent, Uzbekistan", phoneLabel: "Phone", emailLabel: "Email", hoursLabel: "Working Hours", hoursValue: "09:00 – 18:00", formName: "Full Name", formPhone: "Phone Number", formEmail: "Email", formCompany: "Pharmacy / Company Name", formMessage: "Tell us about your project", formSubmit: "Send Request", formNote: "By submitting this form you agree to be contacted by our team.", formNote2: "Thank you! We'll get back to you shortly.", formError: "Something went wrong sending your request. Please contact us by phone or email." },
        footer: { about: "ZEN PHARM designs and manufactures furniture exclusively for pharmacies — combining hygiene, durability and retail-grade design.", quickLinksTitle: "Quick Links", productsTitle: "Products", contactTitle: "Contact", rights: "All rights reserved.", cities: "Tashkent, Uzbekistan" }
    },
    ru: {
        meta: { title: "ZEN PHARM — Мебель для аптек", desc: "ZEN PHARM проектирует, производит и устанавливает мебель для аптек в Узбекистане, России и Турции." },
        brandSub: "Мебель для аптек",
        nav: { home: "Главная", about: "О нас", products: "Продукция", catalog: "Каталог", process: "Процесс", projects: "Проекты", contact: "Контакты", quote: "Получить расчёт" },
        hero: { title: "Мебель, которая делает работу аптеки удобнее", subtitle: "Мы проектируем, производим и устанавливаем торговую мебель специально для аптек — от кассовых стоек до холодильных витрин — в Турции, России и Центральной Азии.", cta1: "Бесплатная консультация", cta2: "Наши проекты" },
        stats: [{ number: "15+", label: "Лет опыта" }, { number: "420+", label: "Аптек оборудовано" }, { number: "3", label: "Страны присутствия" }, { number: "98%", label: "Довольных клиентов" }],
        about: { tag: "О компании", heading: "Мы создаём мебель, на которой держится каждая хорошая аптека", p1: "Более 15 лет ZEN PHARM проектирует и производит мебель исключительно для аптек и аптечных сетей. Мы понимаем, что аптека — это не просто магазин: здесь должны сочетаться доверие, гигиена и эффективность, и мебель обязана поддерживать все три составляющие.", p2: "От отдельных частных аптек до федеральных сетей — мы сочетаем инженерную точность с опытом мерчандайзинга, чтобы наши клиенты продавали больше, работали быстрее и создавали пространство, которому доверяют покупатели.", list: ["Индивидуальный дизайн под ваш бренд", "Сертифицированные гигиеничные и износостойкие материалы", "Полный цикл производства на собственных мощностях", "Установка и сервисное обслуживание включены"] },
        products: {
            tag: "Что мы производим",
            heading: "Мебель для каждого уголка вашей аптеки",
            subheading: "Полная модульная линейка продукции, продуманная под реальную работу аптеки — легко перестраивается, легко содержится в чистоте, служит долго.",
            items: [
                { title: "Кассовые и консультационные стойки", desc: "Эргономичные кассовые и консультационные зоны для быстрого и комфортного обслуживания, с защищённым хранением рецептурных препаратов." },
                { title: "Настенные и островные стеллажи", desc: "Модульные стеллажные системы для безрецептурных препаратов, БАДов и товаров повседневного спроса — адаптируются под любую планировку." },
                { title: "Стеклянные витрины", desc: "Запираемые стеклянные витрины для премиальных, рецептурных и дорогостоящих товаров с хорошей обзорностью и LED-подсветкой." },
                { title: "Холодильные витрины", desc: "Холодильное оборудование и шкафы для препаратов, требующих температурного режима, соответствующее фармацевтическим стандартам хранения." },
                { title: "Складские и подсобные шкафы", desc: "Защищённые кладовые, системы ящиков и архивные шкафы для порядка и соответствия требованиям в подсобных помещениях." },
                { title: "Витрины для косметики и товаров для детей", desc: "Яркое, брендированное оборудование для косметики, товаров для детей и wellness-продукции, стимулирующее импульсные покупки." }
            ]
        },
        process: {
            tag: "Как мы работаем",
            heading: "От идеи до установки — в четыре этапа",
            subheading: "Понятный и прозрачный процесс, чтобы вы всегда знали, что будет дальше.",
            steps: [
                { title: "Консультация и проектирование планировки", desc: "Мы выезжаем на объект (или изучаем план помещения), уточняем задачи и готовим 3D-планировку и дизайн-концепцию — бесплатно." },
                { title: "Производство", desc: "После утверждения мебель изготавливается на собственном производстве под строгим контролем качества, с использованием сертифицированных материалов." },
                { title: "Доставка и монтаж", desc: "Мы доставляем и устанавливаем всё оборудование на объекте с минимальным нарушением рабочего графика аптеки." },
                { title: "Гарантия и сервис", desc: "На каждый проект предоставляется многолетняя гарантия и постоянная сервисная поддержка." }
            ]
        },
        features: {
            tag: "Почему ZEN PHARM",
            heading: "Построено на опыте, проверено аптеками",
            items: [
                { title: "15+ лет узкой специализации", desc: "Мы проектируем мебель только для аптек и аптечных сетей — это наша единственная специализация, а не побочное направление." },
                { title: "Сертифицированные материалы", desc: "Все материалы соответствуют требованиям гигиены и безопасности для фармацевтической розницы." },
                { title: "Ваш бренд, ваш дизайн", desc: "Каждый проект полностью адаптирован под цвета бренда, логотип и концепцию магазина — никаких типовых шаблонов." },
                { title: "Полный цикл услуг", desc: "Дизайн, производство, доставка, монтаж и сервис — всё от одного партнёра." }
            ]
        },
        custom: { tag: "Индивидуальные решения", heading: "Нужно нестандартное решение? Мы его создадим.", p1: "Необычная планировка, особая концепция бренда или крупный роллаут сети со сжатыми сроками — наше собственное производство работает с металлом, деревом, стеклом и ламинатом, поэтому мы можем спроектировать и изготовить практически любую конфигурацию.", list: ["Индивидуальные размеры и конфигурации под любое помещение", "Полная интеграция фирменного стиля (цвета, логотип, материалы)", "Производственные мощности для роллаута сети из нескольких точек", "Инженерная поддержка для нестандартных планировок"], cta: "Обсудить проект" },
        p1: {
            tag: "БЕЗГРАНИЧНАЯ ГИБКОСТЬ",
            sub: "Модульная настенная стеллажная система",
            desc: "S25 Wall Unit — модульная настенная стеллажная система, разработанная для современных аптек. Стильный дизайн, высокая ёмкость выкладки товара и функциональные зоны хранения улучшают как внешний вид, так и эффективность вашего торгового зала.",
            featTitle: "Характеристики",
            f1: "Модульная конструкция и изготовление по индивидуальным размерам",
            f2: "Стальная несущая система с электростатической окраской",
            f3: "Варианты поверхностей: МДФ-ламинат (MDF-Lam) или крашеный МДФ (MDF-Lake)",
            f4: "Регулируемая система полок",
            f5: "Рекламная зона Lightbox с LED-подсветкой",
            f6: "Гибкое использование с перфопанелью (pegboard) и навесными аксессуарами",
            f7: "Выдвижные ящики и шкафы для хранения в нижней части",
            f8: "Простой монтаж, прочная и долговечная конструкция"
        },
        p2: {
            tag: "ХРАНЕНИЕ, ЭКОНОМЯЩЕЕ ПРОСТРАНСТВО",
            sub: "Система выдвижных ящиков для хранения лекарств",
            desc: "Система выдвижных ящиков для хранения лекарств, разработанная для современных аптек, обеспечивает упорядоченное и безопасное хранение препаратов и быстрый доступ к ним. Эргономичная конструкция и высокая ёмкость хранения повышают эффективность работы.",
            f1: "Полновыдвижная телескопическая система направляющих",
            f2: "Регулируемые прозрачные разделители",
            f3: "Высокая ёмкость хранения",
            f4: "Прочный стальной корпус",
            f5: "Легко очищаемая поверхность",
            f6: "Изготовление в различных размерах",
            closing: "Эта система — идеальное решение для упорядоченного хранения рецептурных препаратов, безрецептурных (OTC) товаров, витаминов и медицинских изделий.",
            engTitle: "Безупречная инженерия",
            e1t: "Прочная конструкция", e1d: "Стальной корпус выдерживает интенсивную ежедневную нагрузку полностью загруженных ящиков.",
            e2t: "Бесшумный ход", e2d: "Телескопические направляющие открываются плавно и тихо даже при полной загрузке.",
            e3t: "Комфорт каждый день", e3d: "Продуманная эргономика: каждый препарат под рукой, поиск занимает секунды.",
            e4t: "Ресурс на годы", e4d: "Механизмы протестированы на десятки тысяч циклов открывания и закрывания."
        },
        p2dl: { tag: "Подробная информация", title: "Подробная информация о продукте", text: "Скачайте PDF с техническими характеристиками, размерами и вариантами конфигурации.", btn: "Скачать PDF" },
        ab: {
            tag: "О компании",
            title: "О нас",
            sub: "Аптечная мебель нового поколения — с 2011 года",
            lead: "Основанная в 2011 году компания ZEN Pharmacy Mebel работает в Юнусабадском районе Ташкента и специализируется исключительно на проектировании, производстве и монтаже аптек нового поколения.",
            p1: "Опытная команда из 25 специалистов и более чем 20-летний опыт в ритейле позволяют нам создавать для аптек эстетичные, функциональные и ориентированные на продажи решения.",
            p2: "Именно с таким подходом мы предлагаем аптечным сетям и независимым аптекам индивидуальные услуги проектирования, производства и монтажа. Каждый проект планируется с учётом площади и расположения точки, целевой аудитории и фирменного стиля бренда.",
            quote: "Для нас аптека — это не просто пространство, где выставлен товар. Правильно спроектированная аптека — это мощный коммерческий инструмент, который улучшает клиентский опыт, повышает эффективность использования площади, делает товарные категории заметнее и увеличивает потенциал продаж.",
            stat1: "Год основания", stat2: "Специалистов в команде", stat3: "Лет опыта в ритейле", stat4: "Страны Центральной Азии",
            cycleTitle: "Полный цикл — своей командой",
            cycleSub: "Весь процесс — от дизайна до производства и от производства до монтажа — мы ведём собственной профессиональной командой, предлагая клиентам надёжные, качественные и долговечные решения.",
            c1t: "Дизайн", c1d: "Проектируем каждую аптеку индивидуально — под площадь, расположение, аудиторию и фирменный стиль бренда.",
            c2t: "Производство", c2d: "Производим мебель на собственных мощностях под строгим контролем качества — из сертифицированных, долговечных материалов.",
            c3t: "Монтаж", c3d: "Доставку и монтаж выполняет наша профессиональная команда — быстро, аккуратно и с минимальным влиянием на работу аптеки.",
            geoTitle: "География проектов",
            geoText: "Сегодня мы реализуем проекты по всему Узбекистану, объединяя локальные потребности с международными стандартами ритейла.",
            geo1: "Узбекистан",
            final: "Мы не просто производим аптечную мебель. Мы строим более сильные бренды, более эффективные торговые пространства и аптеки нового поколения."
        },
        cat: { tag: "Каталог", title: "Каталог продукции", sub: "Вся продукция, размеры и материалы — в одном документе", dlTitle: "Скачайте полный каталог ZEN PHARM", dlText: "Полный каталог продукции с размерами, материалами и вариантами конфигураций.", dlBtn: "Скачать каталог (PDF)" },
        sol: {
            tag: "Управление процессом",
            title: "Совершенство на каждом шагу",
            sub: "Мы делаем сложные процессы прозрачными. Управляйте рисками с нашим подходом — фокусируйтесь только на результате.",
            expTitle: "Почувствуйте опыт ZEN PHARM",
            expQuote: "«Правильное решение начинается с правильного материала и правильной организации»",
            p1t: "Правильный материал", p1d: "Сертифицированные, гигиеничные и износостойкие материалы, рассчитанные на ежедневную нагрузку аптеки.",
            p2t: "Правильное проектирование", p2d: "Планировка, которая управляет потоком покупателей, делает выкладку заметнее и повышает продажи.",
            p3t: "Правильное производство", p3d: "Собственные мощности и строгий контроль качества на каждом этапе изготовления.",
            p4t: "Правильный монтаж", p4d: "Профессиональная установка точно в срок — с минимальным влиянием на работу вашей аптеки.",
            matTitle: "Металл · Дерево · Стекло · Ламинат",
            matSub: "Собственное производство для любой конфигурации"
        },
        work: { tag: "Создаём разницу", title: "Наши работы", sub: "Откройте для себя проекты аптек нового поколения, успешно реализованные нами в Узбекистане и других странах Центральной Азии.", fAll: "Все", fTash: "Ташкент", fSam: "Самарканд", proj1: "Проект 1", proj2: "Проект 2", proj3: "Проект 3", view: "Смотреть", more: "Показать ещё" },
        act: {
            heading: "Действуйте прямо сейчас",
            c1t: "Получите 3D-проект аптеки", c1d: "Визуализируйте инвестиции заранее: мы бесплатно подготовим 3D-планировку под ваше помещение.", c1b: "Заказать 3D-проект",
            c2t: "Скачайте каталог", c2d: "Полный каталог с размерами, материалами и спецификациями продукции.",
            c3t: "Получите предложение", c3d: "Свяжитесь с нашей командой — подберём идеальное решение под ваш проект.", c3b: "Связаться с нами"
        },
        con: { tag: "Свяжитесь с нами", sub: "Готовы выслушать ваши идеи и предложения" },
        titles: { about: "О нас — ZEN PHARM", catalog: "Каталог — ZEN PHARM", contact: "Контакты — ZEN PHARM", solutions: "Спец. решения — ZEN PHARM", works: "Наши работы — ZEN PHARM" },
        projects: {
            tag: "Наши работы",
            heading: "Аптеки, которые мы оборудовали",
            subheading: "Подборка недавних проектов в Узбекистане, России и Турции.",
            items: [
                { title: "Аптека «Саломатлик»", location: "Ташкент, Узбекистан" },
                { title: "Аптека «Здоровье»", location: "Москва, Россия" },
                { title: "Şifa Eczaneleri", location: "Стамбул, Турция" },
                { title: "GreenCross Pharmacy", location: "Самарканд, Узбекистан" },
                { title: "«Доктор Плюс»", location: "Казань, Россия" },
                { title: "Sağlık Eczanesi", location: "Анкара, Турция" }
            ]
        },
        testimonials: {
            tag: "Отзывы",
            heading: "Что говорят наши клиенты",
            items: [
                { quote: "ZEN PHARM переоборудовала все 12 наших филиалов за три месяца, ни один из них не закрывался больше чем на день. Продажи в торговом зале заметно выросли.", name: "Дилноза Юсупова", role: "Директор по операциям", company: "Сеть аптек «Саломатлик»" },
                { quote: "Качество материалов и внимание к санитарным требованиям — именно то, что нужно для аптеки. Профессионализм от первой встречи до монтажа.", name: "Ирина Соколова", role: "Владелец", company: "Аптека «Здоровье»" },
                { quote: "Нам нужна была очень специфичная планировка для небольшой точки в центре города. Команда ZEN PHARM разработала решение, которое идеально вписалось и при этом выглядит премиально.", name: "Мехмет Айдын", role: "Генеральный директор", company: "Şifa Eczaneleri" }
            ]
        },
        cta: { heading: "Готовы обновить свою аптеку?", text: "Получите бесплатную консультацию и 3D-планировку — без обязательств.", button: "Получить бесплатную консультацию" },
        contact: { tag: "Контакты", heading: "Обсудим ваш проект", subheading: "Заполните форму или свяжитесь с нами напрямую — обычно мы отвечаем в течение одного рабочего дня.", addressLabel: "Адрес", address: "Узбекистан, Ташкент, ул. Ахмада Дониша", phoneLabel: "Телефон", emailLabel: "Email", hoursLabel: "Часы работы", hoursValue: "09:00 – 18:00", formName: "Ваше имя", formPhone: "Номер телефона", formEmail: "Email", formCompany: "Название аптеки / компании", formMessage: "Расскажите о вашем проекте", formSubmit: "Отправить заявку", formNote: "Отправляя форму, вы соглашаетесь на связь с нашей командой.", formNote2: "Спасибо! Мы скоро свяжемся с вами.", formError: "Не удалось отправить заявку. Пожалуйста, свяжитесь с нами по телефону или email." },
        footer: { about: "ZEN PHARM проектирует и производит мебель исключительно для аптек — сочетая гигиеничность, долговечность и торговый дизайн.", quickLinksTitle: "Быстрые ссылки", productsTitle: "Продукция", contactTitle: "Контакты", rights: "Все права защищены.", cities: "Ташкент, Узбекистан" }
    },
    tr: {
        meta: { title: "ZEN PHARM — Eczane Mobilyaları Çözümleri", desc: "ZEN PHARM; Özbekistan, Rusya ve Türkiye'de eczaneler için mobilya tasarlar, üretir ve kurar." },
        brandSub: "Eczane Mobilyaları",
        nav: { home: "Anasayfa", about: "Hakkımızda", products: "Ürünler", catalog: "Katalog", process: "Süreç", projects: "Projeler", contact: "İletişim", quote: "Teklif Alın" },
        hero: { title: "Eczanelerin Daha İyi Çalışmasını Sağlayan Mobilyalar", subtitle: "Türkiye, Rusya ve Orta Asya'da; kasa bankolarından soğuk zincir vitrinlerine kadar, özellikle eczaneler için tasarlanan mağaza mobilyalarını tasarlıyor, üretiyor ve kuruyoruz.", cta1: "Ücretsiz Danışmanlık Alın", cta2: "Çalışmalarımızı İnceleyin" },
        stats: [{ number: "15+", label: "Yıllık Deneyim" }, { number: "420+", label: "Donatılan Eczane" }, { number: "3", label: "Faaliyet Ülkesi" }, { number: "98%", label: "Müşteri Memnuniyeti" }],
        about: { tag: "Hakkımızda", heading: "Her İyi Eczanenin Arkasındaki Mobilyayı Biz Üretiyoruz", p1: "15 yılı aşkın süredir ZEN PHARM, yalnızca eczaneler ve eczane zincirleri için mobilya tasarlıyor ve üretiyor. Bir eczanenin sıradan bir mağaza olmadığını biliyoruz — burada güven, hijyen ve verimliliğin bir arada çalışması gerekir ve mobilyanın bu üçünü de desteklemesi gerekir.", p2: "Bağımsız tek eczanelerden ülke çapında zincirlere kadar; mühendislik hassasiyetini perakende mağazacılık bilgi birikimiyle birleştirerek müşterilerimizin daha çok satmasına, daha hızlı çalışmasına ve müşterilerin güvendiği bir mekân oluşturmasına yardımcı oluyoruz.", list: ["Markanıza özel tasarım", "Sertifikalı, hijyenik ve dayanıklı malzemeler", "Kendi tesislerimizde tam üretim", "Kurulum ve satış sonrası destek dahil"] },
        products: {
            tag: "Neler Üretiyoruz",
            heading: "Eczanenizin Her Köşesi İçin Mobilya",
            subheading: "Eczanelerin gerçek çalışma biçimine göre tasarlanmış, tamamen modüler ürün gamı — kolayca yeniden düzenlenebilir, kolayca temiz tutulabilir, uzun ömürlü.",
            items: [
                { title: "Kasa ve Danışma Bankoları", desc: "Hızlı ve konforlu hizmet için ergonomik kasa ve danışma alanları, reçeteli ilaçların güvenli saklanması dahil." },
                { title: "Duvar ve Ada Rafları", desc: "Reçetesiz ilaçlar, takviyeler ve günlük sağlık ürünleri için her plana uyarlanabilen modüler raf sistemleri." },
                { title: "Camlı Vitrinler", desc: "Premium, reçeteli ve yüksek değerli ürünler için kilitli, net görüş açılı ve LED aydınlatmalı camlı vitrinler." },
                { title: "Soğuk Zincir Vitrinleri", desc: "Sıcaklığa duyarlı ilaçlar için, farmasötik depolama standartlarına uygun soğutuculu dolap ve vitrinler." },
                { title: "Depo ve Arka Ofis Dolapları", desc: "Arka ofisinizi düzenli ve mevzuata uygun tutan güvenli depo, çekmece sistemleri ve arşiv dolapları." },
                { title: "Kozmetik ve Bebek Bakım Vitrinleri", desc: "Kozmetik, bebek bakım ve wellness ürünleri için ani satın almayı artıran, markayı öne çıkaran şık üniteler." }
            ]
        },
        process: {
            tag: "Nasıl Çalışıyoruz",
            heading: "Fikirden Kuruluma Dört Adımda",
            subheading: "Sıradaki adımı her zaman bilmeniz için net ve şeffaf bir süreç.",
            steps: [
                { title: "Danışmanlık ve Yerleşim Tasarımı", desc: "Mekânınızı ziyaret ediyoruz (veya kat planınızı inceliyoruz), hedeflerinizi anlıyoruz ve ücretsiz olarak 3D yerleşim planı ile tasarım konsepti hazırlıyoruz." },
                { title: "Üretim", desc: "Onaylandıktan sonra mobilyalarınız, sertifikalı malzemeler kullanılarak kendi tesisimizde sıkı kalite kontrolü altında üretilir." },
                { title: "Teslimat ve Kurulum", desc: "Her şeyi sahada teslim edip kuruyoruz, çalışma saatlerinizi en az düzeyde etkileyerek." },
                { title: "Garanti ve Servis", desc: "Her proje çok yıllık garanti ve sürekli servis desteğiyle birlikte gelir." }
            ]
        },
        features: {
            tag: "Neden ZEN PHARM",
            heading: "Deneyimle İnşa Edildi, Eczaneler Tarafından Güvenildi",
            items: [
                { title: "15+ Yıllık Uzmanlaşma", desc: "Yalnızca eczaneler ve eczane zincirleri için mobilya tasarlıyoruz — bu bizim tek uzmanlık alanımız, yan bir iş değil." },
                { title: "Sertifikalı Malzemeler", desc: "Tüm malzemeler, farmasötik perakende ortamları için hijyen ve güvenlik standartlarını karşılar." },
                { title: "Sizin Markanız, Sizin Tasarımınız", desc: "Her proje; marka renklerinize, logonuza ve mağaza konseptinize göre tamamen özelleştirilir — hazır şablon yoktur." },
                { title: "Uçtan Uca Hizmet", desc: "Tasarım, üretim, teslimat, kurulum ve satış sonrası destek — tek bir iş ortağından." }
            ]
        },
        custom: { tag: "Özel Çözümler", heading: "Standart Dışı Bir Şeye mi İhtiyacınız Var? Biz Üretiriz.", p1: "Sıra dışı bir kat planı, çok özel bir marka konsepti ya da sıkı teslim tarihleriyle büyük bir zincir yaygınlaştırması — kendi üretimimiz metal, ahşap, cam ve laminat ile çalışır, bu yüzden neredeyse her konfigürasyonu tasarlayıp üretebiliriz.", list: ["Her mekâna özel ölçü ve konfigürasyonlar", "Tam marka kimliği entegrasyonu (renkler, logo, malzemeler)", "Çok şubeli zincir yaygınlaştırmaları için üretim kapasitesi", "Standart dışı yerleşimler için mühendislik desteği"], cta: "Projenizi Konuşalım" },
        p1: {
            tag: "SINIRSIZ ESNEKLİK",
            sub: "Modüler duvar raf sistemi",
            desc: "S25 Wall Unit, modern eczaneler için tasarlanmış modüler bir duvar raf sistemidir. Şık tasarımı, yüksek ürün teşhir kapasitesi ve fonksiyonel depolama alanlarıyla mağazanızın hem görünümünü hem de verimliliğini artırır.",
            featTitle: "Özellikler",
            f1: "Modüler ve ölçüye özel üretim",
            f2: "Elektrostatik boyalı çelik taşıyıcı sistem",
            f3: "MDF-Lam veya MDF-Lake yüzey seçenekleri",
            f4: "Ayarlanabilir raf sistemi",
            f5: "LED aydınlatmalı Lightbox reklam alanı",
            f6: "Pegboard ve askı aksesuarlarıyla esnek kullanım",
            f7: "Alt bölümde çekmece ve dolap depolama alanı",
            f8: "Kolay montaj, dayanıklı ve uzun ömürlü yapı"
        },
        p2: {
            tag: "YERDEN TASARRUF SAĞLAYAN DEPOLAMA",
            sub: "İlaç Depolama Çekmece Sistemi",
            desc: "Modern eczaneler için tasarlanan İlaç Depolama Çekmece Sistemi, ilaçların düzenli, güvenli ve hızlı bir şekilde saklanmasını sağlar. Ergonomik yapısı ve yüksek depolama kapasitesi sayesinde çalışma verimliliğini artırır.",
            f1: "Tam açılır teleskopik ray sistemi",
            f2: "Ayarlanabilir şeffaf bölücüler",
            f3: "Yüksek depolama kapasitesi",
            f4: "Dayanıklı çelik gövde",
            f5: "Kolay temizlenebilir yüzey",
            f6: "Farklı ölçülerde üretim",
            closing: "Bu sistem, reçeteli ilaçlar, OTC ürünleri, vitaminler ve medikal ürünlerin düzenli depolanması için ideal bir çözümdür.",
            engTitle: "Kusursuz Mühendislik",
            e1t: "Sağlam yapı", e1d: "Çelik gövde, tam dolu çekmecelerin yoğun günlük yüküne dayanacak şekilde tasarlanmıştır.",
            e2t: "Sessiz çalışma", e2d: "Teleskopik raylar tam yükte bile yumuşak ve sessiz açılır.",
            e3t: "Her gün konfor", e3d: "Düşünülmüş ergonomi: her ilaç elinizin altında, bulmak yalnızca saniyeler sürer.",
            e4t: "Yıllarca kullanım", e4d: "Mekanizmalar on binlerce açma-kapama döngüsüyle test edilmiştir."
        },
        p2dl: { tag: "Detaylı Bilgi", title: "Ürün hakkında detaylı bilgi", text: "Teknik özellikler, ölçüler ve konfigürasyon seçeneklerini içeren PDF'i indirin.", btn: "PDF indirin" },
        ab: {
            tag: "Hakkımızda",
            title: "Hakkımızda",
            sub: "Yeni nesil eczane mobilyaları — 2011'den beri",
            lead: "2011 yılında kurulan ZEN Pharmacy Mebel, Taşkent'in Yunusobod bölgesinde faaliyet gösteren ve yalnızca yeni nesil eczane tasarımı, üretimi ve uygulaması alanında uzmanlaşmış profesyonel bir eczane mobilyası üreticisidir.",
            p1: "25 kişilik deneyimli ekibimiz ve perakende sektöründeki 20 yılı aşkın bilgi birikimimizle, eczaneler için estetik, fonksiyonel ve satış odaklı çözümler geliştiriyoruz.",
            p2: "Bu anlayışla; zincir eczaneler ve bağımsız eczaneler için projeye özel tasarım, üretim ve montaj hizmetleri sunuyoruz. Her projeyi mağazanın büyüklüğüne, konumuna, hedef müşteri kitlesine ve marka kimliğine göre özel olarak planlıyoruz.",
            quote: "Bizim için bir eczane yalnızca ürünlerin sergilendiği bir alan değildir. Doğru planlanmış bir eczane; müşteri deneyimini güçlendiren, alan verimliliğini artıran, ürün kategorilerini daha görünür hale getiren ve satış potansiyelini yükselten güçlü bir ticari yapıdır.",
            stat1: "Kuruluş yılı", stat2: "Uzman ekip üyesi", stat3: "Yıllık perakende deneyimi", stat4: "Orta Asya ülkesi",
            cycleTitle: "Tüm Süreç Kendi Ekibimizle",
            cycleSub: "Tasarım aşamasından üretime, üretimden montaja kadar tüm süreci kendi profesyonel ekibimizle yönetiyor; müşterilerimize güvenilir, kaliteli ve sürdürülebilir çözümler sunuyoruz.",
            c1t: "Tasarım", c1d: "Her eczaneyi alanına, konumuna, hedef kitlesine ve marka kimliğine göre özel olarak tasarlıyoruz.",
            c2t: "Üretim", c2d: "Mobilyaları kendi tesislerimizde, sıkı kalite kontrolü altında, sertifikalı ve dayanıklı malzemelerle üretiyoruz.",
            c3t: "Montaj", c3d: "Teslimat ve montajı kendi profesyonel ekibimiz gerçekleştirir — hızlı, özenli ve eczanenin işleyişini en az etkileyecek şekilde.",
            geoTitle: "Proje Coğrafyamız",
            geoText: "Bugün Özbekistan genelinde projeler gerçekleştiriyor, yerel ihtiyaçları uluslararası perakende standartlarıyla birleştiriyoruz.",
            geo1: "Özbekistan",
            final: "Biz sadece eczane mobilyası üretmiyoruz. Daha güçlü markalar, daha verimli satış alanları ve geleceğin yeni nesil eczanelerini inşa ediyoruz."
        },
        cat: { tag: "Katalog", title: "Ürün Kataloğu", sub: "Tüm ürünler, ölçüler ve malzemeler — tek bir dokümanda", dlTitle: "ZEN PHARM'ın tam kataloğunu indirin", dlText: "Ölçüler, malzemeler ve konfigürasyon seçenekleriyle eksiksiz ürün kataloğu.", dlBtn: "Kataloğu indirin (PDF)" },
        sol: {
            tag: "Süreç Yönetimi",
            title: "Her Adımda Mükemmellik",
            sub: "Karmaşık süreçleri şeffaf hale getiriyoruz. Yaklaşımımızla riskleri yönetin — yalnızca sonuca odaklanın.",
            expTitle: "ZEN PHARM Deneyimini Hissedin",
            expQuote: "“Doğru çözüm; doğru malzeme ve doğru organizasyonla başlar”",
            p1t: "Doğru Malzeme", p1d: "Eczanenin günlük yoğunluğuna göre seçilmiş sertifikalı, hijyenik ve dayanıklı malzemeler.",
            p2t: "Doğru Tasarım", p2d: "Müşteri akışını yönlendiren, teşhiri öne çıkaran ve satışları artıran yerleşim planı.",
            p3t: "Doğru Üretim", p3d: "Kendi üretim tesislerimiz ve her aşamada sıkı kalite kontrolü.",
            p4t: "Doğru Montaj", p4d: "Tam zamanında profesyonel kurulum — eczanenizin işleyişini en az etkileyerek.",
            matTitle: "Metal · Ahşap · Cam · Laminat",
            matSub: "Her konfigürasyon için kendi üretimimiz"
        },
        work: { tag: "Fark Yaratıyoruz", title: "Çalışmalarımız", sub: "Özbekistan ve Orta Asya'nın diğer ülkelerinde başarıyla hayata geçirdiğimiz yeni nesil eczane projelerini keşfedin.", fAll: "Tümü", fTash: "Taşkent", fSam: "Semerkant", proj1: "Proje 1", proj2: "Proje 2", proj3: "Proje 3", view: "İncele", more: "Daha fazla göster" },
        act: {
            heading: "Hemen Aksiyon Alın",
            c1t: "Eczanenizin 3D projesini alın", c1d: "Yatırımınızı önceden görün: mekânınıza özel 3D yerleşim planını ücretsiz hazırlayalım.", c1b: "3D proje isteyin",
            c2t: "Kataloğu indirin", c2d: "Ölçüler, malzemeler ve ürün özellikleriyle eksiksiz katalog.",
            c3t: "Teklif alın", c3d: "Ekibimizle iletişime geçin — projeniz için ideal çözümü birlikte bulalım.", c3b: "Bize ulaşın"
        },
        con: { tag: "Bize Ulaşın", sub: "Fikirlerinizi ve önerilerinizi dinlemeye hazırız" },
        titles: { about: "Hakkımızda — ZEN PHARM", catalog: "Katalog — ZEN PHARM", contact: "İletişim — ZEN PHARM", solutions: "Özel Çözümler — ZEN PHARM", works: "Çalışmalarımız — ZEN PHARM" },
        projects: {
            tag: "Çalışmalarımız",
            heading: "Donattığımız Eczaneler",
            subheading: "Özbekistan, Rusya ve Türkiye'deki son projelerimizden bir seçki.",
            items: [
                { title: "Salomatlik Eczanesi", location: "Taşkent, Özbekistan" },
                { title: "Аптека Здоровье", location: "Moskova, Rusya" },
                { title: "Şifa Eczaneleri", location: "İstanbul, Türkiye" },
                { title: "GreenCross Eczanesi", location: "Semerkant, Özbekistan" },
                { title: "Doctor Plus", location: "Kazan, Rusya" },
                { title: "Sağlık Eczanesi", location: "Ankara, Türkiye" }
            ]
        },
        testimonials: {
            tag: "Referanslar",
            heading: "Müşterilerimiz Ne Diyor",
            items: [
                { quote: "ZEN PHARM, 12 şubemizin tamamını üç ay içinde, hiçbirini bir günden fazla kapatmadan yeniledi. Ön alandaki satışlar belirgin şekilde arttı.", name: "Dilnoza Yusupova", role: "Operasyon Direktörü", company: "Salomatlik Eczane Zinciri" },
                { quote: "Malzeme kalitesi ve hijyen gereksinimlerine gösterilen özen, tam olarak bir eczane ortamı için ihtiyacımız olan şeydi. İlk görüşmeden kuruluma kadar profesyoneldiler.", name: "Irina Sokolova", role: "İşletme Sahibi", company: "Аптека Здоровье" },
                { quote: "Şehir merkezinde küçük bir lokasyon için çok özel bir yerleşime ihtiyacımız vardı. ZEN PHARM ekibi hem mükemmel oturan hem de premium görünen bir çözüm tasarladı.", name: "Mehmet Aydın", role: "Genel Müdür", company: "Şifa Eczaneleri" }
            ]
        },
        cta: { heading: "Eczanenizi Yenilemeye Hazır mısınız?", text: "Ücretsiz danışmanlık ve 3D yerleşim tasarımı alın — hiçbir taahhüt gerektirmez.", button: "Ücretsiz Danışmanlık Talep Edin" },
        contact: { tag: "İletişim", heading: "Projenizi Konuşalım", subheading: "Formu doldurun veya doğrudan bize ulaşın — genellikle bir iş günü içinde yanıt veriyoruz.", addressLabel: "Adres", address: "Ahmad Donish Caddesi, Taşkent, Özbekistan", phoneLabel: "Telefon", emailLabel: "E-posta", hoursLabel: "Çalışma Saatleri", hoursValue: "09:00 – 18:00", formName: "Ad Soyad", formPhone: "Telefon Numarası", formEmail: "E-posta", formCompany: "Eczane / Şirket Adı", formMessage: "Projenizden bahsedin", formSubmit: "Talep Gönder", formNote: "Bu formu göndererek ekibimiz tarafından aranmayı kabul etmiş olursunuz.", formNote2: "Teşekkürler! En kısa sürede size dönüş yapacağız.", formError: "Talebiniz gönderilirken bir sorun oluştu. Lütfen bizi telefon veya e-posta ile arayın." },
        footer: { about: "ZEN PHARM, hijyen, dayanıklılık ve perakende tasarımını bir araya getirerek yalnızca eczaneler için mobilya tasarlar ve üretir.", quickLinksTitle: "Hızlı Bağlantılar", productsTitle: "Ürünler", contactTitle: "İletişim", rights: "Tüm hakları saklıdır.", cities: "Taşkent, Özbekistan" }
    },
    uz: {
        meta: { title: "ZEN PHARM — Dorixonalar uchun mebel yechimlari", desc: "ZEN PHARM O'zbekiston, Rossiya va Turkiyada dorixonalar uchun mebel loyihalashtiradi, ishlab chiqaradi va o'rnatadi." },
        brandSub: "Dorixona mebellari",
        nav: { home: "Bosh sahifa", about: "Biz haqimizda", products: "Mahsulotlar", catalog: "Katalog", process: "Jarayon", projects: "Loyihalar", contact: "Aloqa", quote: "Hisob-kitob olish" },
        hero: { title: "Dorixonalar Yanada Yaxshi Ishlashi Uchun Mebel", subtitle: "Biz kassa boyimlaridan sovutgichli vitrinalargacha — maxsus dorixonalar uchun savdo mebellarini loyihalashtiramiz, ishlab chiqaramiz va o'rnatamiz. Turkiya, Rossiya va Markaziy Osiyoda faoliyat yuritamiz.", cta1: "Bepul Konsultatsiya Olish", cta2: "Ishlarimizni Ko'rish" },
        stats: [{ number: "15+", label: "Yillik tajriba" }, { number: "420+", label: "Jihozlangan dorixona" }, { number: "3", label: "Faoliyat mamlakati" }, { number: "98%", label: "Mijozlar mamnunligi" }],
        about: { tag: "Biz haqimizda", heading: "Har Bir Yaxshi Dorixona Ortidagi Mebelni Biz Yaratamiz", p1: "15 yildan ortiq vaqt davomida ZEN PHARM faqat dorixonalar va dorixonalar tarmog'i uchun mebel loyihalashtiradi va ishlab chiqaradi. Biz dorixona oddiy do'kon emasligini tushunamiz — bu yerda ishonch, gigiyena va samaradorlik birgalikda ishlashi kerak, mebel esa ushbu uchala talabni ham qo'llab-quvvatlashi lozim.", p2: "Yakka tartibdagi dorixonalardan tortib butun mamlakat bo'ylab tarmoqlargacha — biz muhandislik aniqligini savdo merchandayzingi tajribasi bilan birlashtirib, mijozlarimizga ko'proq sotish, tezroq ishlash va xaridorlar ishonadigan makon yaratishga yordam beramiz.", list: ["Brendingizga mos individual dizayn", "Sertifikatlangan, gigienik va bardoshli materiallar", "O'z ishlab chiqarish quvvatlarimizda to'liq sikl", "O'rnatish va sotishdan keyingi xizmat kiritilgan"] },
        products: {
            tag: "Biz Nima Ishlab Chiqaramiz",
            heading: "Dorixonangizning Har Bir Burchagi Uchun Mebel",
            subheading: "Dorixonalarning haqiqiy ish uslubiga mos ravishda ishlab chiqilgan to'liq modulli mahsulotlar liniyasi — oson qayta tashkil etiladi, oson tozalanadi va uzoq muddat xizmat qiladi.",
            items: [
                { title: "Kassa va Konsultatsiya Boyimlari", desc: "Tez va qulay xizmat ko'rsatish, retsept bo'yicha dorilarni xavfsiz saqlash uchun ergonomik kassa va konsultatsiya zonalari." },
                { title: "Devor va Orolcha Stellajlari", desc: "Retseptsiz dorilar, qo'shimchalar va kundalik sog'liqni saqlash mahsulotlari uchun har qanday rejaga moslashuvchan modulli stellaj tizimlari." },
                { title: "Shisha Vitrinalar", desc: "Premium, retsept bo'yicha va qimmatbaho mahsulotlar uchun qulflanadigan, aniq ko'rinishga ega va LED yoritilgan shisha vitrinalar." },
                { title: "Sovutgichli Vitrinalar", desc: "Harorat rejimini talab qiluvchi dorilar uchun farmatsevtika saqlash standartlariga mos sovutgichli javonlar va vitrinalar." },
                { title: "Ombor va Orqa Ofis Shkaflari", desc: "Orqa ofisingizni tartibli va talablarga muvofiq saqlaydigan xavfsiz omborxonalar, tortmali tizimlar va arxiv shkaflari." },
                { title: "Kosmetika va Bolalar Parvarishi Vitrinalari", desc: "Kosmetika, bolalar parvarishi va sog'lomlashtirish mahsulotlari uchun impulsiv xaridlarni oshiradigan yorqin, brendlangan jihozlar." }
            ]
        },
        process: {
            tag: "Biz Qanday Ishlaymiz",
            heading: "G'oyadan O'rnatishgacha To'rt Bosqichda",
            subheading: "Keyingi qadam nima ekanligini doim bilishingiz uchun aniq va shaffof jarayon.",
            steps: [
                { title: "Konsultatsiya va Joylashuv Dizayni", desc: "Biz sizning maydoningizga tashrif buyuramiz (yoki xonalar rejasini ko'rib chiqamiz), maqsadlaringizni aniqlaymiz va bepul 3D joylashuv va dizayn konsepsiyasini tayyorlaymiz." },
                { title: "Ishlab Chiqarish", desc: "Tasdiqlangandan so'ng mebelingiz sertifikatlangan materiallar yordamida o'z korxonamizda qat'iy sifat nazorati ostida ishlab chiqariladi." },
                { title: "Yetkazib Berish va O'rnatish", desc: "Biz hamma narsani obyektda yetkazib beramiz va o'rnatamiz, ish vaqtingizga eng kam ta'sir ko'rsatgan holda." },
                { title: "Kafolat va Xizmat Ko'rsatish", desc: "Har bir loyiha ko'p yillik kafolat va doimiy texnik xizmat ko'rsatish bilan ta'minlanadi." }
            ]
        },
        features: {
            tag: "Nega Aynan ZEN PHARM",
            heading: "Tajriba Asosida Qurilgan, Dorixonalar Ishonchini Qozongan",
            items: [
                { title: "15+ Yillik Ixtisoslashuv", desc: "Biz faqat dorixonalar va dorixonalar tarmog'i uchun mebel loyihalashtiramiz — bu bizning yagona ixtisosligimiz, qo'shimcha yo'nalish emas." },
                { title: "Sertifikatlangan Materiallar", desc: "Barcha materiallar farmatsevtika chakana savdo muhiti uchun gigiyena va xavfsizlik standartlariga javob beradi." },
                { title: "Sizning Brendingiz, Sizning Dizayningiz", desc: "Har bir loyiha brend ranglaringiz, logotipingiz va do'kon konsepsiyangizga to'liq moslashtiriladi — tayyor shablonlar yo'q." },
                { title: "To'liq Sikl Xizmati", desc: "Dizayn, ishlab chiqarish, yetkazib berish, o'rnatish va sotishdan keyingi xizmat — barchasi bitta hamkordan." }
            ]
        },
        custom: { tag: "Individual Yechimlar", heading: "Nostandart Yechim Kerakmi? Biz Uni Yaratamiz.", p1: "G'ayrioddiy xonalar rejasi, juda o'ziga xos brend konsepsiyasi yoki qattiq muddatlar bilan yirik tarmoqni jihozlash — bizning o'z ishlab chiqarishimiz metall, yog'och, shisha va laminat bilan ishlaydi, shuning uchun deyarli har qanday konfiguratsiyani loyihalashtirib, ishlab chiqarishimiz mumkin.", list: ["Har qanday xona uchun individual o'lchamlar va konfiguratsiyalar", "Brend identifikatsiyasini to'liq integratsiya qilish (ranglar, logotip, materiallar)", "Ko'p filialli tarmoqlarni jihozlash uchun ishlab chiqarish quvvati", "Nostandart joylashuvlar uchun muhandislik yordami"], cta: "Loyihangizni Muhokama Qilaylik" },
        p1: {
            tag: "CHEKSIZ MOSLASHUVCHANLIK",
            sub: "Modulli devor stellaj tizimi",
            desc: "S25 Wall Unit — zamonaviy dorixonalar uchun ishlab chiqilgan modulli devor stellaj tizimi. Zamonaviy dizayni, mahsulotlarni keng namoyish etish imkoniyati va funksional saqlash bo'limlari tufayli u do'koningizning ham ko'rinishini, ham samaradorligini oshiradi.",
            featTitle: "Xususiyatlari",
            f1: "Modulli konstruksiya va individual o'lchamlar bo'yicha ishlab chiqarish",
            f2: "Elektrostatik usulda bo'yalgan po'lat tayanch tizimi",
            f3: "MDF-laminat (MDF-Lam) yoki lak qoplamali MDF (MDF-Lake) yuza variantlari",
            f4: "Sozlanadigan javon tizimi",
            f5: "LED yoritishli Lightbox reklama maydoni",
            f6: "Pegboard (perfopanel) va osma aksessuarlar bilan moslashuvchan foydalanish",
            f7: "Pastki qismida tortmalar va saqlash uchun shkaf bo'limi",
            f8: "Oson o'rnatish, mustahkam va uzoq muddat xizmat qiluvchi konstruksiya"
        },
        p2: {
            tag: "JOYNI TEJAYDIGAN SAQLASH",
            sub: "Dori-darmonlarni saqlash uchun tortma tizimi",
            desc: "Zamonaviy dorixonalar uchun ishlab chiqilgan ushbu dori saqlash tortma tizimi dorilarni tartibli, xavfsiz saqlash va ularni tezda topish imkonini beradi. Ergonomik tuzilishi va yuqori saqlash sig'imi ish samaradorligini oshiradi.",
            f1: "To'liq ochiladigan teleskopik yo'naltiruvchilar tizimi",
            f2: "Sozlanadigan shaffof ajratgichlar",
            f3: "Yuqori saqlash sig'imi",
            f4: "Mustahkam po'lat korpus",
            f5: "Oson tozalanadigan yuza",
            f6: "Turli o'lchamlarda ishlab chiqarish",
            closing: "Ushbu tizim retseptli dorilar, OTC mahsulotlari, vitaminlar va tibbiy buyumlarni tartibli saqlash uchun ideal yechimdir.",
            engTitle: "Benuqson muhandislik",
            e1t: "Mustahkam konstruksiya", e1d: "Po'lat korpus to'liq yuklangan tortmalarning kundalik intensiv yukiga bardosh beradi.",
            e2t: "Shovqinsiz ishlash", e2d: "Teleskopik yo'naltiruvchilar to'liq yuklanganda ham ravon va shovqinsiz ochiladi.",
            e3t: "Har kungi qulaylik", e3d: "Puxta ergonomika: har bir dori qo'l ostida va soniyalarda topiladi.",
            e4t: "Yillarga mo'ljallangan resurs", e4d: "Mexanizmlar o'n minglab ochish-yopish sikllarida sinovdan o'tgan."
        },
        p2dl: { tag: "Batafsil ma'lumot", title: "Mahsulot haqida batafsil ma'lumot", text: "Texnik xususiyatlar, o'lchamlar va konfiguratsiya variantlari keltirilgan PDF-ni yuklab oling.", btn: "PDF yuklab olish" },
        ab: {
            tag: "Biz haqimizda",
            title: "Biz haqimizda",
            sub: "Yangi avlod dorixona mebellari — 2011-yildan beri",
            lead: "2011-yilda tashkil etilgan ZEN Pharmacy Mebel — Toshkentning Yunusobod tumanida faoliyat yurituvchi, faqat yangi avlod dorixonalarini loyihalash, ishlab chiqarish va o'rnatishga ixtisoslashgan professional dorixona mebellari ishlab chiqaruvchisi.",
            p1: "25 nafar tajribali mutaxassisdan iborat jamoamiz va chakana savdodagi 20 yildan ortiq tajribamiz bilan dorixonalar uchun estetik, funksional va sotuvga yo'naltirilgan yechimlarni yaratamiz.",
            p2: "Aynan shu yondashuv bilan dorixona tarmoqlari va mustaqil dorixonalar uchun loyihaga xos dizayn, ishlab chiqarish va o'rnatish xizmatlarini taklif etamiz. Har bir loyihani do'kon maydoni, joylashuvi, maqsadli auditoriyasi va brend uslubiga qarab alohida rejalashtiramiz.",
            quote: "Biz uchun dorixona — bu shunchaki mahsulotlar namoyish etiladigan joy emas. To'g'ri rejalashtirilgan dorixona — mijoz tajribasini kuchaytiradigan, maydondan foydalanish samaradorligini oshiradigan, mahsulot toifalarini ko'zga tashlanadigan qiladigan va sotuv salohiyatini yuksaltiradigan kuchli tijorat tuzilmasi.",
            stat1: "Tashkil etilgan yil", stat2: "Jamoadagi mutaxassislar", stat3: "Yillik chakana savdo tajribasi", stat4: "Markaziy Osiyo mamlakatlari",
            cycleTitle: "To'liq sikl — o'z jamoamiz bilan",
            cycleSub: "Dizayndan ishlab chiqarishgacha, ishlab chiqarishdan o'rnatishgacha — butun jarayonni o'z professional jamoamiz bilan boshqaramiz va mijozlarimizga ishonchli, sifatli va uzoq muddatli yechimlarni taqdim etamiz.",
            c1t: "Dizayn", c1d: "Har bir dorixonani maydoni, joylashuvi, auditoriyasi va brend uslubiga mos ravishda alohida loyihalashtiramiz.",
            c2t: "Ishlab chiqarish", c2d: "Mebelni o'z quvvatlarimizda, qat'iy sifat nazorati ostida, sertifikatlangan va bardoshli materiallardan ishlab chiqaramiz.",
            c3t: "Montaj", c3d: "Yetkazib berish va o'rnatishni o'z professional jamoamiz bajaradi — tez, sifatli va dorixona ishiga eng kam ta'sir bilan.",
            geoTitle: "Loyihalar geografiyasi",
            geoText: "Bugun biz O'zbekiston bo'ylab loyihalarni amalga oshirib, mahalliy ehtiyojlarni xalqaro chakana savdo standartlari bilan uyg'unlashtiramiz.",
            geo1: "O'zbekiston",
            final: "Biz shunchaki dorixona mebeli ishlab chiqarmaymiz. Biz kuchliroq brendlar, samaraliroq savdo maydonlari va kelajakning yangi avlod dorixonalarini barpo etamiz."
        },
        cat: { tag: "Katalog", title: "Mahsulotlar katalogi", sub: "Barcha mahsulotlar, o'lchamlar va materiallar — bitta hujjatda", dlTitle: "ZEN PHARM to'liq katalogini yuklab oling", dlText: "O'lchamlar, materiallar va konfiguratsiya variantlari bilan to'liq mahsulot katalogi.", dlBtn: "Katalogni yuklab olish (PDF)" },
        sol: {
            tag: "Jarayon boshqaruvi",
            title: "Har bir qadamda mukammallik",
            sub: "Biz murakkab jarayonlarni shaffof qilamiz. Bizning yondashuvimiz bilan xavflarni boshqaring — faqat natijaga e'tibor qarating.",
            expTitle: "ZEN PHARM tajribasini his eting",
            expQuote: "“To'g'ri yechim to'g'ri material va to'g'ri tashkil etishdan boshlanadi”",
            p1t: "To'g'ri material", p1d: "Dorixonaning kundalik yukiga mo'ljallangan sertifikatlangan, gigienik va bardoshli materiallar.",
            p2t: "To'g'ri loyihalash", p2d: "Xaridorlar oqimini yo'naltiradigan, mahsulot namoyishini ta'kidlaydigan va sotuvni oshiradigan rejalashtirish.",
            p3t: "To'g'ri ishlab chiqarish", p3d: "O'z ishlab chiqarish quvvatlarimiz va har bir bosqichda qat'iy sifat nazorati.",
            p4t: "To'g'ri o'rnatish", p4d: "O'z vaqtida professional o'rnatish — dorixonangiz ishiga eng kam ta'sir bilan.",
            matTitle: "Metall · Yog'och · Shisha · Laminat",
            matSub: "Har qanday konfiguratsiya uchun o'z ishlab chiqarishimiz"
        },
        work: { tag: "Farq yaratamiz", title: "Bizning ishlarimiz", sub: "O'zbekiston va Markaziy Osiyoning boshqa mamlakatlarida muvaffaqiyatli amalga oshirgan yangi avlod dorixona loyihalarimiz bilan tanishing.", fAll: "Barchasi", fTash: "Toshkent", fSam: "Samarqand", proj1: "Loyiha 1", proj2: "Loyiha 2", proj3: "Loyiha 3", view: "Ko'rish", more: "Yana ko'rsatish" },
        act: {
            heading: "Hoziroq harakat qiling",
            c1t: "Dorixonangizning 3D loyihasini oling", c1d: "Investitsiyangizni oldindan ko'ring: xonangiz uchun 3D joylashuvni bepul tayyorlaymiz.", c1b: "3D loyiha buyurtma qilish",
            c2t: "Katalogni yuklab oling", c2d: "O'lchamlar, materiallar va mahsulot xususiyatlari bilan to'liq katalog.",
            c3t: "Taklif oling", c3d: "Jamoamiz bilan bog'laning — loyihangiz uchun ideal yechimni tanlaymiz.", c3b: "Biz bilan bog'lanish"
        },
        con: { tag: "Biz bilan bog'laning", sub: "G'oyalaringiz va takliflaringizni eshitishga tayyormiz" },
        titles: { about: "Biz haqimizda — ZEN PHARM", catalog: "Katalog — ZEN PHARM", contact: "Aloqa — ZEN PHARM", solutions: "Individual yechimlar — ZEN PHARM", works: "Bizning ishlarimiz — ZEN PHARM" },
        projects: {
            tag: "Bizning Ishlarimiz",
            heading: "Biz Jihozlagan Dorixonalar",
            subheading: "O'zbekiston, Rossiya va Turkiyadagi so'nggi loyihalarimizdan tanlov.",
            items: [
                { title: "Salomatlik Dorixonasi", location: "Toshkent, O'zbekiston" },
                { title: "Apteka Zdorovye", location: "Moskva, Rossiya" },
                { title: "Shifa Eczaneleri", location: "Istanbul, Turkiya" },
                { title: "GreenCross Dorixonasi", location: "Samarqand, O'zbekiston" },
                { title: "Doctor Plus", location: "Qozon, Rossiya" },
                { title: "Sog'lik Eczanesi", location: "Ankara, Turkiya" }
            ]
        },
        testimonials: {
            tag: "Fikrlar",
            heading: "Mijozlarimiz Nima Deyishadi",
            items: [
                { quote: "ZEN PHARM bizning barcha 12 ta filialimizni uch oy ichida, birortasini ham bir kundan ortiq yopmasdan yangiladi. Savdo zonasidagi sotuvlar sezilarli darajada oshdi.", name: "Dilnoza Yusupova", role: "Operatsiyalar bo'yicha direktor", company: "Salomatlik dorixonalar tarmog'i" },
                { quote: "Materiallar sifati va gigiyena talablariga e'tibor — bu aynan dorixona muhiti uchun bizga kerak bo'lgan narsa edi. Birinchi uchrashuvdan o'rnatishgacha professional yondashuv.", name: "Irina Sokolova", role: "Egasi", company: "Apteka Zdorovye" },
                { quote: "Shahar markazidagi kichik joy uchun juda o'ziga xos joylashuv kerak edi. ZEN PHARM jamoasi mukammal moslashadigan va shu bilan birga premium ko'rinishga ega yechim yaratdi.", name: "Mehmet Aydin", role: "Bosh direktor", company: "Shifa Eczaneleri" }
            ]
        },
        cta: { heading: "Dorixonangizni Yangilashga Tayyormisiz?", text: "Bepul konsultatsiya va 3D joylashuv dizaynini oling — hech qanday majburiyatsiz.", button: "Bepul Konsultatsiya So'rash" },
        contact: { tag: "Aloqa", heading: "Loyihangizni Muhokama Qilaylik", subheading: "Formani to'ldiring yoki biz bilan bevosita bog'laning — odatda bir ish kuni ichida javob beramiz.", addressLabel: "Manzil", address: "Ahmad Donish ko'chasi, Toshkent, O'zbekiston", phoneLabel: "Telefon", emailLabel: "Elektron pochta", hoursLabel: "Ish vaqti", hoursValue: "09:00 – 18:00", formName: "Ism va familiya", formPhone: "Telefon raqami", formEmail: "Elektron pochta", formCompany: "Dorixona / Kompaniya nomi", formMessage: "Loyihangiz haqida ayting", formSubmit: "So'rov Yuborish", formNote: "Ushbu formani yuborish orqali siz jamoamiz bilan bog'lanishga rozilik bildirasiz.", formNote2: "Rahmat! Tez orada siz bilan bog'lanamiz.", formError: "So'rovni yuborishda xatolik yuz berdi. Iltimos, biz bilan telefon yoki elektron pochta orqali bog'laning." },
        footer: { about: "ZEN PHARM gigiyena, bardoshlilik va chakana savdo dizaynini birlashtirib, faqat dorixonalar uchun mebel loyihalashtiradi va ishlab chiqaradi.", quickLinksTitle: "Tezkor havolalar", productsTitle: "Mahsulotlar", contactTitle: "Aloqa", rights: "Barcha huquqlar himoyalangan.", cities: "Toshkent, O'zbekiston" }
    }
};

/* ============ ICONS ============ */
const productIcons = [
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>'
];
const featureIcons = [
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>'
];
const checkIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const tileGradients = [
    ['#1656a8', '#1f6fbd'],
    ['#0c3868', '#2f8fe0'],
    ['#123f5c', '#1d6fa5'],
    ['#0c3868', '#1656a8'],
    ['#1a6fbd', '#2f8fe0'],
    ['#1656a8', '#071b33']
];

let currentLang = localStorage.getItem("zenLang") || "ru";

function renderContent(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang === 'uz' ? 'uz' : lang;
    const titleEl = document.querySelector('title[data-meta-title]');
    if (titleEl) titleEl.textContent = t.meta.title;
    const descEl = document.querySelector('meta[data-meta-desc]');
    if (descEl) descEl.setAttribute('content', t.meta.desc);

    // simple key path text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const path = el.getAttribute('data-i18n').split('.');
        let val = t;
        for (const p of path) { val = val && val[p]; }
        if (typeof val === 'string') { el.textContent = val; }
    });

    // stats
    const statsBar = document.getElementById('statsBar');
    statsBar.innerHTML = t.stats.map(s => `<div class="stat-item"><div class="stat-num">${s.number}</div><div class="stat-label">${s.label}</div></div>`).join('');

    // about list
    document.getElementById('aboutList').innerHTML = t.about.list.map(item => `<li>${checkIcon}<span>${item}</span></li>`).join('');

    // products
    document.getElementById('productsGrid').innerHTML = t.products.items.map((p, i) => `
    <div class="product-card reveal">
      <div class="icon-box">${productIcons[i]}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>`).join('');

    // process
    document.getElementById('processSteps').innerHTML = t.process.steps.map((s, i) => `
    <div class="step-item reveal">
      <div class="step-num">0${i+1}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');

    // features
    document.getElementById('featuresGrid').innerHTML = t.features.items.map((f, i) => `
    <div class="feature-card reveal">
      <div class="icon-box">${featureIcons[i]}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`).join('');

    // custom list
    document.getElementById('customList').innerHTML = t.custom.list.map(item => `<li>${checkIcon}<span>${item}</span></li>`).join('');

    // projects
    document.getElementById('projectsGrid').innerHTML = t.projects.items.map((p, i) => {
        const g = tileGradients[i % tileGradients.length];
        return `<div class="project-card reveal" style="--tile-a:${g[0]};--tile-b:${g[1]}">
      <div><div class="p-tag">${t.projects.tag}</div><h3>${p.title}</h3><div style="font-size:13px;color:rgba(255,255,255,.8);margin-top:4px;">${p.location}</div></div>
    </div>`;
    }).join('');

    // testimonials
    document.getElementById('testimonialsGrid').innerHTML = t.testimonials.items.map(item => {
        const initials = item.name.split(' ').map(w => w[0]).join('').slice(0, 2);
        return `<div class="testimonial-card reveal">
      <div class="quote-mark">"</div>
      <p class="quote">${item.quote}</p>
      <div class="t-person">
        <div class="t-avatar">${initials}</div>
        <div><div class="t-name">${item.name}</div><div class="t-role">${item.role} · ${item.company}</div></div>
      </div>
    </div>`;
    }).join('');

    // footer products
    document.getElementById('footerProducts').innerHTML = t.products.items.map(p => `<li>${p.title}</li>`).join('');
    document.getElementById('footerAddress').textContent = t.contact.address;

    // lang switch active state
    document.querySelectorAll('[data-lang-switch] button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    currentLang = lang;
    observeReveals();
}

function setLang(lang) {
    if (!translations[lang]) return;
    localStorage.setItem("zenLang", lang); /* язык сохраняется при переходе между страницами */
    renderContent(lang);
    document.getElementById('mobileNav').classList.remove('open');
}

document.querySelectorAll('[data-lang-switch] button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});

document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('open');
});

document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
});

/* ============ TELEGRAM LEAD DELIVERY ============
   Form submissions are sent straight to a Telegram chat via the Bot API.
   Note: since this is a static site (no backend), the bot token below is
   visible in the page source. That's an accepted trade-off for a simple
   zero-infrastructure setup — worst case someone could use this bot to
   send messages into the same chat. Swap to a server-side proxy later if
   that risk becomes a concern. */
const TELEGRAM_BOT_TOKEN = "8930465796:AAH9yAYB1BmnUJxiCZ8Ouq7ftALdVDXbZD8";
const TELEGRAM_CHAT_ID = "-1004494400064";

function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = this;
    const t = translations[currentLang];
    const btn = document.getElementById('formSubmitBtn');
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');
    successEl.classList.remove('show');
    errorEl.classList.remove('show');

    const name = document.getElementById('fieldName').value.trim();
    const phone = document.getElementById('fieldPhone').value.trim();
    const email = document.getElementById('fieldEmail').value.trim();
    const company = document.getElementById('fieldCompany').value.trim();
    const message = document.getElementById('fieldMessage').value.trim();

    const lines = [
        '🆕 <b>ZEN PHARM — новая заявка с сайта</b>',
        '🌐 ' + currentLang.toUpperCase(),
        '',
        '👤 <b>' + escapeHtml(t.contact.formName) + ':</b> ' + escapeHtml(name),
        '📞 <b>' + escapeHtml(t.contact.formPhone) + ':</b> ' + escapeHtml(phone)
    ];
    if (email) lines.push('✉️ <b>' + escapeHtml(t.contact.formEmail) + ':</b> ' + escapeHtml(email));
    if (company) lines.push('🏢 <b>' + escapeHtml(t.contact.formCompany) + ':</b> ' + escapeHtml(company));
    if (message) lines.push('', '💬 ' + escapeHtml(message));

    const originalBtnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = '...';

    try {
        const res = await fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ chat_id: TELEGRAM_CHAT_ID, text: lines.join('\n'), parse_mode: 'HTML' })
        });
        const data = await res.json();
        if (!data.ok) throw new Error(data.description || 'Telegram API error');
        successEl.classList.add('show');
        form.reset();
    } catch (err) {
        console.error('Telegram send failed:', err);
        errorEl.textContent = t.contact.formError;
        errorEl.classList.add('show');
    } finally {
        btn.disabled = false;
        btn.textContent = originalBtnText;
    }
});

document.getElementById('year').textContent = new Date().getFullYear();

function observeReveals() {
    /* Content is always visible by default (see .reveal CSS rule) so the
       page never depends on scroll/JS timing to show its content. */
}

/* ============ CAROUSEL ============ */
let carouselIndex = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');
const totalSlides = carouselSlides.length;

function initCarouselDots() {
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlide(index) {
    carouselIndex = (index % totalSlides + totalSlides) % totalSlides;
    showSlide(carouselIndex);
}

function nextSlide() {
    goToSlide(carouselIndex + 1);
}

function prevSlide() {
    goToSlide(carouselIndex - 1);
}

initCarouselDots();
document.getElementById('carouselNext').addEventListener('click', nextSlide);
document.getElementById('carouselPrev').addEventListener('click', prevSlide);

// Auto-rotate carousel every 5 seconds
setInterval(nextSlide, 5000);

renderContent(currentLang);

/* ============================================================
   PREMIUM UPGRADE — новые скрипты (добавлено поверх, старая логика не тронута)
   ============================================================ */

/* ---- Scroll-reveal через IntersectionObserver ----
   Класс js-anim на body включает CSS-анимации только когда JS работает,
   поэтому без JS контент по-прежнему виден (ничего не ломаем). */
document.body.classList.add('js-anim');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

function observeAllReveals() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}
observeAllReveals();

/* renderContent пересоздаёт карточки при смене языка — переподключаем observer */
const _origRenderContent = renderContent;
renderContent = function(lang) {
    _origRenderContent(lang);
    observeAllReveals();
};

/* ---- Хедер: прячется при скролле вниз, появляется при скролле вверх ---- */
const siteHeader = document.getElementById('siteHeader');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (siteHeader) {
        siteHeader.classList.toggle('header-scrolled', y > 10);
        if (y > 140 && y > lastScrollY) {
            siteHeader.classList.add('header-hidden');
            document.getElementById('mobileNav').classList.remove('open');
        } else {
            siteHeader.classList.remove('header-hidden');
        }
    }
    lastScrollY = y;
}, { passive: true });

/* ---- Портфолио: фильтры категорий (как Tümü/Marketler/... на sovaretail) ---- */
const filterBtns = document.querySelectorAll('#portfolioFilters .filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('#portfolioGrid .portfolio-card').forEach(card => {
            const show = filter === 'all' || card.getAttribute('data-category') === filter;
            card.classList.toggle('filtered-out', !show);
            if (show) {
                /* маленькая анимация появления при смене фильтра */
                card.style.animation = 'none';
                void card.offsetWidth; /* reflow — перезапуск анимации */
                card.style.animation = 'portfolioIn .5s cubic-bezier(.4,0,.2,1)';
            }
        });
    });
});
/* keyframes для фильтра добавляем из JS, чтобы не трогать основной CSS */
const portfolioStyle = document.createElement('style');
portfolioStyle.textContent = '@keyframes portfolioIn{from{opacity:0;transform:translateY(20px) scale(.97);}to{opacity:1;transform:translateY(0) scale(1);}}';
document.head.appendChild(portfolioStyle);

/* ---- «Показать ещё» (заглушка — сюда позже подключаются реальные проекты) ---- */
const showMoreBtn = document.getElementById('showMoreBtn');
if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        /* показываем скрытые проекты (7-9) с анимацией и прячем кнопку */
        document.querySelectorAll('.portfolio-card.hidden-card').forEach((card, i) => {
            card.classList.remove('hidden-card');
            card.classList.add('visible');
            card.style.animation = 'portfolioIn .5s cubic-bezier(.4,0,.2,1) ' + (i * 0.12) + 's both';
        });
        showMoreBtn.style.display = 'none';
    });
}

/* ---- Newsletter (заглушка — позже подключить реальную рассылку) ---- */
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = newsletterForm.querySelector('button');
        btn.textContent = '[Готово! Сюда подключить сервис рассылки]';
        newsletterForm.reset();
    });
}

/* ============================================================
   SOVA-STYLE UPGRADE v2 — скрипты по видео (старая логика не тронута)
   ============================================================ */

/* ---- Dropdown в хедере: клик для тач-устройств (hover уже в CSS) ---- */
document.querySelectorAll('.nav-dropdown .nav-drop-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dd = btn.closest('.nav-dropdown');
        document.querySelectorAll('.nav-dropdown.open').forEach(d => { if (d !== dd) d.classList.remove('open'); });
        dd.classList.toggle('open');
    });
});
document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
});

/* ---- Кнопка языка: показывает текущий язык (RU ▾ / EN ▾ ...) ---- */
function syncLangDropBtn(lang) {
    const btn = document.getElementById('langDropBtn');
    if (btn) {
        btn.childNodes[0].nodeValue = lang.toUpperCase() + ' ';
    }
}
syncLangDropBtn(currentLang);
/* оборачиваем renderContent ещё раз: после смены языка обновляем кнопку */
const _renderContentV2 = renderContent;
renderContent = function(lang) {
    _renderContentV2(lang);
    syncLangDropBtn(lang);
    /* echo-заголовки: подставляем текст в watermark, если заголовок переведён */
    document.querySelectorAll('.echo-heading').forEach(h => {
        if (h.hasAttribute('data-i18n')) h.setAttribute('data-echo', h.textContent);
    });
};

/* ---- Слайдер фото продукта (Pharmafix): точки переключают фотографии ---- */
document.querySelectorAll('.slider-dots').forEach(dots => {
    const media = dots.closest('.product-media');
    const slides = media ? media.querySelectorAll('.product-slider .p-slide') : [];
    dots.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            dots.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            slides.forEach((s, i) => s.classList.toggle('active', i === idx));
        });
    });
});

/* ---- Активная ссылка меню подсвечивается по мере скролла ---- */
const navSections = ['portfolio', 'custom', 'product1', 'product2', 'catalog'];
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.sova-header nav.main-nav a').forEach(a => {
                a.classList.toggle('nav-active', a.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: .25 });
navSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
});

/* ============================================================
   PREMIUM POLISH v3 — финальные скрипты (поверх, база не тронута)
   ============================================================ */

/* ---- Анимированные счётчики статистики (15+, 420+ и т.д. на главной) ---- */
function animateCounters() {
    document.querySelectorAll('.stat-num').forEach(el => {
        const raw = el.textContent.trim();
        const m = raw.match(/^(\d+)(.*)$/);
        if (!m) return;
        const target = parseInt(m[1], 10),
            suffix = m[2] || '';
        let started = false;
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    const t0 = performance.now(),
                        dur = 1400;
                    (function tick(now) {
                        const p = Math.min((now - t0) / dur, 1);
                        const eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
                        el.textContent = Math.round(target * eased) + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    })(t0);
                    io.disconnect();
                }
            });
        }, { threshold: .5 });
        io.observe(el);
    });
}
animateCounters();
/* при смене языка статистика перерисовывается — перезапускаем счётчики */
const _renderContentV3 = renderContent;
renderContent = function(lang) {
    _renderContentV3(lang);
    animateCounters();
};

/* ---- Лёгкий параллакс декора в баннерах при скролле ---- */
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelectorAll('.page-banner').forEach(b => {
        const r = b.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
            b.style.setProperty('--par', (y * 0.08) + 'px');
        }
    });
}, { passive: true });

/* ============================================================
   DECAP CMS — подгрузка контента из content/*.json
   Эти файлы правит заказчик через админ-панель /admin/.
   Если файлов нет (например, сайт открыт локально без них),
   используются тексты, зашитые выше, — ничего не ломается.
   ============================================================ */
(function() {
    function grab(url) {
        return fetch(url, { cache: 'no-cache' })
            .then(function(r) { return r.ok ? r.json() : null; })
            .catch(function() { return null; });
    }

    function applyProduct(data, key, maxFeatures) {
        ['en', 'ru', 'tr', 'uz'].forEach(function(l) {
            var d = data[l];
            var t = translations[l] && translations[l][key];
            if (!d || !t) return;
            if (d.sub) t.sub = d.sub;
            if (d.desc) t.desc = d.desc;
            if (d.closing) t.closing = d.closing;
            if (Array.isArray(d.features)) {
                for (var i = 0; i < maxFeatures; i++) {
                    if (d.features[i]) t['f' + (i + 1)] = d.features[i];
                }
            }
        });
    }

    Promise.all([
        grab('./content/product1.json'),
        grab('./content/product2.json'),
        grab('./content/contacts.json'),
        grab('./content/catalog.json')
    ]).then(function(res) {
        var p1 = res[0], p2 = res[1], contacts = res[2], catalog = res[3];

        if (p1) {
            applyProduct(p1, 'p1', 8);
            if (p1.image) document.querySelectorAll('[data-product1-img]').forEach(function(img) { img.src = p1.image; });
        }

        if (p2) {
            applyProduct(p2, 'p2', 6);
            var slides = document.querySelectorAll('.product-slider .p-slide');
            if (p2.photo1 && slides[0]) slides[0].src = p2.photo1;
            if (p2.photo2 && slides[1]) slides[1].src = p2.photo2;
        }

        if (contacts) {
            ['en', 'ru', 'tr', 'uz'].forEach(function(l) {
                if (contacts.address && contacts.address[l]) translations[l].contact.address = contacts.address[l];
                if (contacts.hours) translations[l].contact.hoursValue = contacts.hours;
            });
            if (contacts.phone) document.querySelectorAll('[data-contact="phone"]').forEach(function(el) { el.textContent = contacts.phone; });
            if (contacts.email) document.querySelectorAll('[data-contact="email"]').forEach(function(el) { el.textContent = contacts.email; });
            if (contacts.instagram) document.querySelectorAll('[data-contact="instagram"]').forEach(function(el) {
                el.setAttribute('href', 'https://instagram.com/' + String(contacts.instagram).replace(/^@/, ''));
            });
        }

        if (catalog && catalog.file) {
            document.querySelectorAll('[data-catalog-link]').forEach(function(a) { a.setAttribute('href', catalog.file); });
        }

        if (p1 || p2 || contacts) renderContent(currentLang);
    });
})();