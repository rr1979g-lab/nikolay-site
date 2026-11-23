
/* SEO build: language comes from the path (/ru/, /en/ ...); app and book pages live at /<lang>/apps|books/<slug>/ */
const PATH_LANG=(location.pathname.match(/^\/([a-z]{2})(?:\/|$)/)||[])[1]||"";
const __T0=document.title;
const BOOK_SLUGS_RU=["mysli-po-krugu", "a-chto-esli-vse-budet-horosho", "sudba-po-zakazu", "kod-intuicii", "pravilnyj-vybor", "minus-25-kg", "otkrojsya-svoim-mechtam"];
const APP_SLUGS=["intuition-trainer", "moment-now", "breath-prana-moment", "head-heart", "phone-detox", "perennial", "affirmation", "figure-out-why", "free-again", "pill-reminder", "parent-lock", "ferment-lab", "fridge"];
const MORE_TXT={"en": "Learn more", "ru": "Подробнее", "uk": "Докладніше", "ar": "اعرف المزيد", "zh": "了解更多", "fr": "En savoir plus", "de": "Mehr erfahren", "he": "קראו עוד", "hi": "और जानें", "id": "Selengkapnya", "it": "Scopri di più", "ja": "詳しく見る", "ko": "자세히 보기", "pt": "Saiba mais", "es": "Saber más", "tr": "Daha fazla bilgi", "bn": "আরও জানুন", "mr": "अधिक जाणून घ्या", "te": "మరింత తెలుసుకోండి", "ta": "மேலும் அறிய"};
const PAGE_LANGS=["en", "ru", "uk", "ar", "zh", "fr", "de", "he", "hi", "id", "it", "ja", "ko", "pt", "es", "tr", "bn", "mr", "te", "ta"];
function pl(){ const l=PATH_LANG||lang; return PAGE_LANGS.indexOf(l)>=0?l:"en"; }
function bookHref(i){ const l=pl(); return "/"+l+"/books/"+(l==="ru"?BOOK_SLUGS_RU[i]:SLUGS[i])+"/"; }
function appHref(i){ return "/"+pl()+"/apps/"+APP_SLUGS[i]+"/"; }
function goLang(){ if(PATH_LANG && lang!==PATH_LANG){ location.href="/"+lang+"/"+location.hash; return true; } return false; }

const T = {
  ru:{
    nav_books:"Книги",nav_apps:"Приложения",nav_courses:"Курсы",nav_about:"Об авторе",nav_contact:"Контакты",
    hero_eyebrow:"Книги • Приложения • Курсы",
    hero_title:"Меняйте свою жизнь — шаг за шагом",
    hero_lead:"Откройте для себя книги, мобильные приложения и практические программы, которые помогают лучше понимать себя, развивать интуицию, освобождаться от навязчивых мыслей, формировать полезные привычки и жить осознанно.",
    hero_small:"Маленькие ежедневные действия способны привести к большим переменам.",
    cta_books:"Исследовать книги",cta_apps:"Скачать приложения",cta_courses:"Открыть курсы",
    sig:"ПЕРВЫЙ СИГНАЛ",
    books_eyebrow:"Мои книги",books_title:"Книги, которые меняют мышление",
    books_lead:"Книги для тех, кто хочет изменить мышление, научиться доверять себе и создавать более спокойную, осознанную жизнь.",
    more_book:"Подробнее о книге",en_version:"Английская версия",
    apps_eyebrow:"Мои мобильные приложения",apps_title:"Практические инструменты для повседневной жизни",
    apps_lead:"Каждое приложение создано с определённой целью: помочь человеку сделать полезное действие проще, доступнее и удобнее.",
    gp:"Google Play",learn:"Узнать больше",soon:"Скоро",buy:"Купить на",litres:"Литрес",beta:"Присоединиться к тестированию",
    courses_eyebrow:"Курсы и практические программы",courses_title:"Не просто знания — ежедневная практика",
    courses_lead:"Здесь собраны программы для самостоятельного развития, основанные на темах моих книг и приложений.",
    courses_note:"Статус программ и возможность записи указываются отдельно после подтверждения их готовности.",
    status_soon:"Скоро",with_book:"По книге",with_app:"Вместе с приложением",program:"Программа",days30:"30 дней",
    about_eyebrow:"Об авторе",about_name:"Николай Щербаков",about_role:"Автор книг и разработчик мобильных приложений для личного развития.",
    about_p1:"Я создаю книги, приложения и практические инструменты, которые помогают людям лучше понимать себя, развивать осознанность, формировать полезные привычки и находить собственные ответы.",
    about_p2:"Мой подход основан на простой идее: изменения начинаются не с больших обещаний, а с небольших действий, которые мы повторяем каждый день.",
    about_p3:"Я стремлюсь делать сложные темы понятными, а полезные практики — доступными каждому.",
    about_phil:"Моя философия",
    quotes:["«Не проживайте плохое будущее заранее».","«Мысль не нужно побеждать. Её можно не продолжать».","«Перестаньте решать завтра сегодня»."],
    free_eyebrow:"Бесплатные материалы",free_title:"Практики и новости в Telegram",
    free_lead:"Получайте полезные упражнения, короткие практики и новости о новых книгах и приложениях.",
    free:["Практики развития интуиции","Упражнения для возвращения внимания","Советы по формированию привычек","Дыхательные практики","Новые книги и программы"],
    tg1:"Telegram-канал",tg2:"Telegram «Мысли по кругу»",join:"Присоединиться →",
    contact_eyebrow:"Контакты",contact_title:"Напишите мне",
    contact_lead:"Есть вопросы, предложения о сотрудничестве или идеи для новых проектов? Свяжитесь со мной через контактную форму.",
    f_name:"Имя",f_msg:"Сообщение",f_send:"Отправить сообщение",
    f_err:"Заполните имя, корректный email и сообщение.",
    f_ok:"Сообщение подготовлено. Скопируйте его и отправьте мне в Telegram — так я отвечу быстрее всего.",
    copy_btn:"Скопировать текст",copied:"Скопировано",open_tg:"Открыть Telegram",
    privacy:"Политика конфиденциальности",terms:"Условия использования",
    copy:"© 2026 Nikolay Shcherbakov. Все права защищены.",
    disc:"Материалы сайта предназначены для образования и саморазвития и не заменяют медицинскую или психологическую помощь.",
    legal_body:"Полный текст документа будет опубликован здесь. По вопросам обработки данных пишите через форму контактов или в Telegram.",
    close:"Закрыть"
  },
  en:{
    nav_books:"Books",nav_apps:"Apps",nav_courses:"Courses",nav_about:"About",nav_contact:"Contact",
    hero_eyebrow:"Books • Apps • Courses",
    hero_title:"Change your life, one step at a time",
    hero_lead:"Discover books, mobile apps and practical programs that help you understand yourself, develop intuition, break free from intrusive thoughts, build healthy habits and live mindfully.",
    hero_small:"Small daily actions can lead to big changes.",
    cta_books:"Explore books",cta_apps:"Get the apps",cta_courses:"See courses",
    sig:"FIRST SIGNAL",
    books_eyebrow:"My books",books_title:"Books that change how you think",
    books_lead:"For those who want to change their thinking, learn to trust themselves and build a calmer, more mindful life.",
    more_book:"About the book",en_version:"English edition",
    apps_eyebrow:"My mobile apps",apps_title:"Practical tools for everyday life",
    apps_lead:"Each app has one purpose: to make a helpful action simpler, more accessible and easier to do.",
    gp:"Google Play",learn:"Learn more",soon:"Coming soon",buy:"Buy on",litres:"Litres",beta:"Join the beta",
    courses_eyebrow:"Courses and practical programs",courses_title:"Not just knowledge — daily practice",
    courses_lead:"Self-development programs based on the themes of my books and apps.",
    courses_note:"Program status and enrollment will be announced once each program is ready.",
    status_soon:"Coming soon",with_book:"Based on the book",with_app:"Pairs with the app",program:"Program",days30:"30 days",
    about_eyebrow:"About the author",about_name:"Nikolay Shcherbakov",about_role:"Author and developer of mobile apps for personal growth.",
    about_p1:"I create books, apps and practical tools that help people understand themselves better, develop mindfulness, build healthy habits and find their own answers.",
    about_p2:"My approach rests on a simple idea: change starts not with big promises but with small actions we repeat every day.",
    about_p3:"I aim to make complex topics clear and useful practices available to everyone.",
    about_phil:"My philosophy",
    quotes:["“Don’t live a bad future in advance.”","“A thought doesn’t need to be defeated. You can simply not continue it.”","“Stop solving tomorrow today.”"],
    free_eyebrow:"Free materials",free_title:"Practices and news on Telegram",
    free_lead:"Get helpful exercises, short practices and news about new books and apps.",
    free:["Intuition practices","Exercises to bring attention back","Habit-building tips","Breathing practices","New books and programs"],
    tg1:"Telegram channel",tg2:"Telegram “Thoughts in Circles”",join:"Join →",
    contact_eyebrow:"Contact",contact_title:"Get in touch",
    contact_lead:"Questions, partnership offers or ideas for new projects? Reach me through the contact form.",
    f_name:"Name",f_msg:"Message",f_send:"Send message",
    f_err:"Please fill in your name, a valid email and a message.",
    f_ok:"Your message is ready. Copy it and send it to me on Telegram — that’s the fastest way to get a reply.",
    copy_btn:"Copy text",copied:"Copied",open_tg:"Open Telegram",
    privacy:"Privacy Policy",terms:"Terms of Use",
    copy:"© 2026 Nikolay Shcherbakov. All rights reserved.",
    disc:"The materials on this site are for education and self-development and do not replace medical or psychological care.",
    legal_body:"The full text of this document will be published here. For data questions, use the contact form or Telegram.",
    close:"Close"
  }
};

const IMG = {"b0": "/img/435c8428bf.webp", "b1": "/img/ecfd016b5b.webp", "b2": "/img/bbc04fbfa0.webp", "b3": "/img/d883762388.webp", "a0": "/img/89f6b86143.webp", "a1": "/img/e46ac4704c.webp", "a2": "/img/9a5fa0c869.webp", "a3": "/img/8c85850a0f.webp", "a4": "/img/c2b0ef5669.webp", "a5": "/img/55c20313b2.webp", "a6": "/img/5f4ea98c89.webp", "a8": "/img/8badfbc4b2.webp", "a9": "/img/4e5d0e1a90.webp", "a10": "/img/f51bdf82bd.webp"};
const LINKS = {"b0": ["https://a.co/d/00wHJlcQ", "Amazon"], "b1": ["https://a.co/d/0cz6YLfF", "Amazon"], "b2": ["https://www.litres.ru/74262924/", "Литрес"], "b3": ["https://www.litres.ru/74229332/", "Литрес"], "a0": "https://play.google.com/store/apps/details?id=com.nikolay.intuitiontrainer", "a1": "https://play.google.com/store/apps/details?id=com.nikolay.momentanchor", "a2": "https://play.google.com/store/apps/details?id=com.nikolay.breathpranamoment", "a3": "https://play.google.com/store/apps/details?id=com.nikolay.shouldi", "a4": "https://play.google.com/store/apps/details?id=com.nikolay.phonedetox", "a5": "https://play.google.com/store/apps/details?id=com.nikolay.perennial", "a6": "https://play.google.com/store/apps/details?id=com.nikolay.affirm", "a8": "https://play.google.com/store/apps/details?id=com.nikolay.freeagain", "a9": "https://play.google.com/store/apps/details?id=com.nikolay.pillreminder", "a10": "https://play.google.com/store/apps/details?id=com.nikolay.parentlock"};
const BOOKS = [
  {c:"#2C4A6B",ru:{t:"Мысли по кругу",s:"Как выйти из круга навязчивых мыслей, не споря с собой",d:["Практическое руководство для людей, которые устали от постоянного анализа, сомнений и повторяющихся мыслей.","Вы узнаете, как перестать бесконечно искать ответы, уменьшить вовлечённость в тревожные размышления и возвращать внимание к настоящему.","Внутри — практические упражнения и 30-дневная программа."],q:"«Мысль не нужно побеждать. Её можно не продолжать»."},
    en:{t:"Thoughts in Circles",s:"How to step out of the loop of intrusive thoughts without arguing with yourself",d:["A practical guide for people tired of constant analysis, doubt and repetitive thoughts.","Learn to stop endlessly searching for answers, reduce your involvement in anxious rumination and bring attention back to the present.","Includes practical exercises and a 30-day program."],q:"“A thought doesn’t need to be defeated. You can simply not continue it.”"},enT:"Thoughts in Circles"},
  {c:"#B8643A",ru:{t:"А что, если всё будет хорошо?",s:"Новый взгляд на будущее",d:["Мы часто представляем худшие сценарии, хотя они могут никогда не произойти.","Эта книга помогает изменить привычный способ думать о будущем, перестать заранее проживать неприятности и научиться замечать хорошие возможности."],q:"«Не платите сегодняшним днём за будущее, которого ещё нет»."},
    en:{t:"What If Everything Turns Out Well?",s:"A new way to look at the future",d:["We often imagine worst-case scenarios that may never happen.","This book helps you change how you think about the future, stop living through troubles in advance and start noticing good possibilities."],q:"“Don’t pay with today for a future that doesn’t exist yet.”"},enT:"What If Everything Turns Out Well?"},
  {c:"#5B4A7A",ru:{t:"Судьба по заказу",s:"Метод аффирмаций, который изменил мою жизнь",d:["Книга о силе ежедневных установок, внимании к своим целям и сознательном формировании привычек мышления.","Внутри — объяснения, личный опыт, практические задания и 30-дневная программа работы с аффирмациями."]},
    en:{t:"Destiny to Order",s:"The affirmation method that changed my life",d:["A book about the power of daily intentions, attention to your goals and consciously shaping your thinking habits.","Inside: explanations, personal experience, practical tasks and a 30-day affirmation program."]}},
  {c:"#2F6B5E",ru:{t:"Код интуиции",s:"Как научиться замечать внутренние сигналы, отличать первое ощущение от последующих сомнений и развивать доверие к себе.",d:["Книга о практическом развитии интуиции через наблюдение, упражнения и личный опыт."]},
    en:{t:"The Intuition Code",s:"How to notice inner signals, tell the first sense apart from the doubts that follow, and build self-trust.",d:["A book on developing intuition in practice through observation, exercises and personal experience."]}},
  {c:"#7A3B46",ru:{t:"Правильный выбор",s:"Как принимать решения, когда разум и чувства предлагают разные ответы.",d:["Практический подход к анализу вариантов, пониманию собственных желаний и преодолению нерешительности."]},
    en:{t:"The Right Choice",s:"How to decide when your mind and your feelings give different answers.",d:["A practical approach to weighing options, understanding what you really want and overcoming indecision."]}},
  {c:"#3D5560",ru:{t:"Распознай первый сигнал",s:"Книга о первом интуитивном отклике, который часто появляется раньше длительных размышлений.",d:["Упражнения и наблюдения помогают лучше замечать собственные реакции и осознанно использовать их при принятии решений."]},
    en:{t:"Recognize the First Signal",s:"A book about the first intuitive response that often comes before long deliberation.",d:["Exercises and observations help you notice your own reactions and use them consciously when making decisions."]}}
];

const APPS = [
  {k:"IT",c:"#2F6B5E",n:"INTUITION TRAINER",ru:["Тренажёр интуиции","Тренируйте интуитивное восприятие с помощью коротких интерактивных упражнений. Учитесь замечать первый сигнал, проверять свои ощущения и отслеживать прогресс."],en:["Intuition trainer","Train intuitive perception with short interactive exercises. Learn to notice the first signal, check your sense and track your progress."]},
  {k:"MN",c:"#2C577F",n:"MOMENT NOW",ru:["Момент сейчас","Практики возвращения внимания в настоящий момент. Помогают сделать паузу, выйти из потока размышлений и сосредоточиться на том, что происходит сейчас."],en:["The present moment","Practices that bring attention back to the present. They help you pause, step out of the stream of thoughts and focus on what is happening now."]},
  {k:"BP",c:"#3E7A8C",n:"BREATH PRANA MOMENT",ru:["Дыхательные практики","Дыхательные техники, настраиваемые сессии, голосовые подсказки и статистика прогресса. Box Breathing, 4-7-8, Equal Breathing, Coherent Breathing и другие — плюс собственные упражнения."],en:["Breathing practices","Breathing techniques, custom sessions, voice guidance and progress stats. Box Breathing, 4-7-8, Equal Breathing, Coherent Breathing and more — plus your own exercises."],tags:["Box","4-7-8","Equal","Coherent"]},
  {k:"H&H",c:"#7A3B46",n:"HEAD & HEART",ru:["Помощник в принятии решений","Когда трудно сделать выбор, приложение помогает рассмотреть ситуацию с разных сторон. Ответьте на несколько вопросов, сравните аргументы и определите следующий шаг."],en:["Decision helper","When a choice is hard, the app helps you look at the situation from different sides. Answer a few questions, compare arguments and find your next step."]},
  {k:"PD",c:"#4A5866",n:"PHONE DETOX",ru:["Цифровой баланс","Уменьшайте отвлечения на телефон, выделяйте время для важных дел и отслеживайте время, которое удалось освободить."],en:["Digital balance","Cut down phone distractions, set aside time for what matters and track the time you’ve freed up."]},
  {k:"PE",c:"#4F7A3A",n:"PERENNIAL",ru:["Трекер привычек","Создавайте полезные привычки, отмечайте ежедневный прогресс, наблюдайте за достижениями и сохраняйте последовательность."],en:["Habit tracker","Build healthy habits, mark daily progress, watch your achievements and stay consistent."]},
  {k:"AF",c:"#5B4A7A",n:"AFFIRMATION",ru:["Ежедневные аффирмации","Позитивные установки и тематические практики для развития уверенности, мотивации и осознанного отношения к своим целям."],en:["Daily affirmations","Positive statements and themed practices for confidence, motivation and a mindful approach to your goals."]},
  {k:"WHY",c:"#8A6A2E",n:"FIGURE OUT WHY",ru:["Разберись почему","Инструмент для структурированного анализа информации, вопросов и возможных причин происходящего. Помогает лучше разобраться в ситуации и подготовить вопросы для дальнейшего изучения."],en:["Find out why","A tool for structured analysis of information, questions and possible causes. Helps you understand a situation and prepare questions for further research."]},
  {k:"FA",c:"#B8643A",n:"FREE AGAIN",ru:["Возвращение свободы","Приложение, посвящённое формированию более осознанных привычек и возвращению контроля над повседневными действиями."],en:["Freedom regained","An app for building more mindful habits and regaining control over everyday actions."]},
  {k:"PR",c:"#3D5560",n:"PILL REMINDER",ru:["Напоминания","Удобный инструмент для создания расписаний и своевременных напоминаний."],en:["Reminders","A simple tool for creating schedules and timely reminders."]},
  {k:"PL",c:"#2C4A6B",n:"PARENT LOCK",ru:["Родительский контроль","Помогает родителям устанавливать правила использования телефона ребёнком, настраивать разрешённые приложения и время отдыха."],en:["Parental control","Helps parents set rules for a child’s phone use, choose allowed apps and set rest time."]}
];

const COURSES = [
  {d30:true,book:0,ru:["Свобода от навязчивых мыслей","Учитесь замечать повторяющиеся мысли, уменьшать вовлечённость в бесконечный анализ и возвращаться к повседневным действиям."],en:["Freedom from Intrusive Thoughts","Learn to notice repetitive thoughts, reduce involvement in endless analysis and return to everyday actions."]},
  {d30:true,book:2,ru:["Сила аффирмаций","Создавайте личные аффирмации, практикуйте их ежедневно и наблюдайте за изменениями в привычках мышления."],en:["The Power of Affirmations","Create personal affirmations, practice them daily and watch your thinking habits change."]},
  {app:0,ru:["Развитие интуиции","Практические упражнения для тренировки первого сигнала, внимания и осознанного выбора."],en:["Developing Intuition","Practical exercises to train the first signal, attention and conscious choice."]},
  {app:2,ru:["Осознанное дыхание","Знакомство с дыхательными техниками, регулярными короткими практиками и индивидуальным ритмом занятий."],en:["Mindful Breathing","An introduction to breathing techniques, regular short practices and your own pace."]},
  {app:1,ru:["Жизнь в настоящем моменте","Практики внимания, осознанных пауз и возвращения к текущим действиям."],en:["Living in the Present Moment","Practices of attention, mindful pauses and returning to what you are doing."]},
  {app:3,ru:["Искусство принимать решения","Программа для тех, кто хочет меньше сомневаться, лучше понимать собственные приоритеты и принимать более взвешенные решения."],en:["The Art of Decision-Making","For those who want to doubt less, understand their priorities and make more balanced decisions."]}
];

BOOKS.forEach((b,i)=>{ b.img=IMG["b"+i]; const l=LINKS["b"+i]; if(l){b.url=l[0]; b.store=l[1];} });
APPS.forEach((a,i)=>{ a.img=IMG["a"+i]; a.url=LINKS["a"+i]; });

Object.assign(T.ru,{
  brand_sub:"Книги • Приложения • Курсы",nav_home:"Главная",nav_me:"Обо мне",nav_books_h:"Мои книги",apps_h:"Мои приложения",courses_h:"Практические курсы",
  h1a:"Меняйте свою ",h1b:"жизнь",h1c:" — шаг за ",h1d:"шагом",
  hero_lead2:"Книги, приложения и практические программы, которые помогают лучше понимать себя, развивать интуицию, освобождаться от навязчивых мыслей, формировать полезные привычки и жить осознанно.",
  courses_lead2:"Пошаговые программы для спокойствия, осознанности и развития интуиции.",
  apps_hint:"Нажмите на иконку, чтобы прочитать о приложении и скачать его в Google Play.",
  benefits:["Спокойствие и ясность","Развитие интуиции","Выход из круга навязчивых мыслей","Полезные привычки","Больше энергии и осознанности"]
});
Object.assign(T.en,{
  brand_sub:"Books • Apps • Courses",nav_home:"Home",nav_me:"About me",nav_books_h:"My books",apps_h:"My apps",courses_h:"Practical courses",
  h1a:"Change your ",h1b:"life",h1c:", one step at a ",h1d:"time",
  hero_lead2:"Books, apps and practical programs that help you understand yourself, develop intuition, break free from intrusive thoughts, build healthy habits and live mindfully.",
  courses_lead2:"Step-by-step programs for calm, mindfulness and intuition.",
  apps_hint:"Tap an icon to read about the app and download it from Google Play.",
  benefits:["Calm and clarity","Developing intuition","Breaking the loop of intrusive thoughts","Healthy habits","More energy and mindfulness"]
});
const BEN_ICONS=[
 '<path d="M24 9c4 4 5 11 0 19-5-8-4-15 0-19z"/><path d="M24 28c-4-6-9-8-15-8 1 7 7 10 15 8z"/><path d="M24 28c4-6 9-8 15-8-1 7-7 10-15 8z"/><path d="M10 33c6 3 22 3 28 0"/>',
 '<circle cx="24" cy="24" r="16"/><path d="M30 18l-4 8-8 4 4-8z"/><path d="M24 6v3M24 39v3M6 24h3M39 24h3"/>',
 '<path d="M38 20a15 15 0 0 0-27-5"/><path d="M10 9v6h6"/><path d="M10 28a15 15 0 0 0 27 5"/><path d="M38 39v-6h-6"/>',
 '<path d="M10 38V28M20 38V22M30 38V16M40 38V10"/><path d="M28 10h8v8" />',
 '<path d="M24 39S8 29 8 18a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 11-16 21-16 21z"/>'
];

BOOKS[1].urlRu="https://www.litres.ru/74485039/"; BOOKS[1].storeRu="Литрес"; BOOKS[1].imgRu="/img/de6d03d046.webp";
BOOKS[0].urlRu="https://www.litres.ru/74507834/"; BOOKS[0].storeRu="Литрес";
BOOKS.push({"c": "#8A2E1E", "img": "/img/a059a7a8e3.webp", "url": "https://www.litres.ru/74358153/", "store": "Литрес", "ru": {"t": "Минус 25 кг — и лицо без морщин!", "s": "15 лет без привычной еды. Почему я потерял 25 кг за 2 месяца.", "d": ["Честный личный опыт и разбор ошибок: без кофе, без сахара, без мучного, без мяса и без рыбы."]}, "en": {"t": "Minus 25 kg — and a Face Without Wrinkles!", "s": "15 years without my usual food. How I lost 25 kg in 2 months.", "d": ["An honest personal story with a breakdown of mistakes: no coffee, no sugar, no flour, no meat, no fish."]}});
BOOKS.push({"c": "#9A6A12", "img": "/img/cc51504deb.webp", "url": "https://www.litres.ru/74237733/", "store": "Литрес", "ru": {"t": "Откройся своим мечтам", "s": "Как интуиция помогает принимать правильные решения", "d": ["Книга, основанная на 20-летнем опыте: как прислушиваться к интуиции, доверять себе и делать выбор, который ведёт к вашим мечтам."]}, "en": {"t": "Open Up to Your Dreams", "s": "How intuition helps you make the right decisions", "d": ["Based on 20 years of experience: how to listen to your intuition, trust yourself and make choices that lead toward your dreams."]}});
BOOKS[4].img="/img/4ee7f0bbb6.webp"; BOOKS[4].url="https://www.litres.ru/74333723/"; BOOKS[4].store="Литрес";
BOOKS.splice(BOOKS.findIndex(b=>b.ru.t==="Распознай первый сигнал"),1);
const BEN_IMG=["/img/61c98064da.webp", "/img/eee75808c2.webp", "/img/0f1ac38045.webp", "/img/46f614988a.webp", "/img/1b440bc74f.webp"];
const BTN_IMG={"book": "/img/785954497d.webp", "phone": "/img/197c37591f.webp", "cap": "/img/1727b67a38.webp"};
for(const k in BTN_IMG){ const el=document.getElementById("bi-"+k); if(el) el.src=BTN_IMG[k]; }
const BEN_TXT={
 "Мысли по кругу":["Научитесь выходить из круга навязчивых мыслей и возвращать внимание к настоящему.","Learn to step out of looping thoughts and bring your attention back to the present."],
 "А что, если всё будет хорошо?":["Перестаньте ждать худшего и научитесь замечать хорошие возможности.","Stop expecting the worst and start noticing good possibilities."],
 "Судьба по заказу":["Научитесь использовать аффирмации, чтобы менять мышление и двигаться к своим целям.","Learn to use affirmations to change your thinking and move toward your goals."],
 "Код интуиции":["Научитесь слышать внутренние сигналы и увереннее принимать решения.","Learn to hear your inner signals and make decisions with more confidence."],
 "Правильный выбор":["Меньше сомнений — больше уверенности в важных жизненных решениях.","Less doubt, more confidence in important life decisions."],
 "Минус 25 кг — и лицо без морщин!":["Личный опыт изменения питания, снижения веса и заботы о внешности.","A personal story of changing diet, losing weight and caring for your looks."],
 "Откройся своим мечтам":["Научитесь доверять интуиции и делать шаги навстречу своим мечтам.","Learn to trust your intuition and take steps toward your dreams."]
};
BOOKS.forEach(b=>{ const x=BEN_TXT[b.ru.t]; if(x){ b.ru.ben=x[0]; b.en.ben=x[1]; } });
APPS.push(...[{"k": "FL", "c": "#8A6A2E", "n": "FERMENT LAB", "img": "/img/ad91a9400a.webp", "url": "https://play.google.com/store/apps/details?id=com.fermentlab.app", "ru": ["Домашняя ферментация", "Хотите ферментировать дома? Готовьте хлеб на закваске, соленья, квас и йогурт шаг за шагом."], "en": ["Home fermentation", "Want to ferment at home? Make sourdough bread, pickles, kvass and yogurt step by step."]}, {"k": "FR", "c": "#2F6B5E", "n": "FRIDGE", "img": "/img/adc1df88a7.webp", "url": "https://play.google.com/store/apps/details?id=com.nikolay.myfridge", "ru": ["Рецепты из холодильника", "Не знаете, что приготовить? Находите рецепты из того, что уже есть в холодильнике."], "en": ["Recipes from your fridge", "Don’t know what to cook? Find recipes from what’s already in your fridge."]}]);
COURSES[2].url="https://t.me/+2fahYtmjKA1lNGJk";
Object.assign(T.ru,{status_open:"Открыт",join_course:"Присоединиться в Telegram"});
Object.assign(T.en,{status_open:"Open",join_course:"Join on Telegram"});
const I18N={"mr": {"ui": {"brand_sub": "पुस्तके • ॲप्स • कोर्सेस", "nav_home": "मुख्यपृष्ठ", "nav_books": "पुस्तके", "nav_apps": "ॲप्स", "nav_courses": "कोर्सेस", "nav_me": "माझ्याबद्दल", "h1a": "आपले ", "h1b": "आयुष्य", "h1c": " बदला, एकेक ", "h1d": "पाऊल टाकत", "hero_lead2": "पुस्तके, ॲप्स आणि व्यावहारिक कार्यक्रम, जे तुम्हाला स्वतःला समजून घेण्यास, अंतर्ज्ञान विकसित करण्यास, पुन्हा पुन्हा येणाऱ्या विचारांतून मुक्त होण्यास, चांगल्या सवयी लावण्यास आणि जागरूकपणे जगण्यास मदत करतात.", "hero_small": "रोजच्या छोट्या कृती मोठे बदल घडवू शकतात.", "cta_books": "पुस्तके पाहा", "cta_apps": "ॲप्स मिळवा", "cta_courses": "कोर्सेस पाहा", "nav_books_h": "माझी पुस्तके", "books_lead": "ज्यांना आपली विचारसरणी बदलायची आहे, स्वतःवर विश्वास ठेवायला शिकायचे आहे आणि अधिक शांत, जागरूक आयुष्य घडवायचे आहे, त्यांच्यासाठी.", "apps_h": "माझी ॲप्स", "apps_lead": "प्रत्येक ॲपचा एकच उद्देश: एखादी उपयुक्त कृती अधिक सोपी आणि सहज करणे.", "apps_hint": "Google Play वरून ॲप डाउनलोड करण्यासाठी कार्डवर टॅप करा.", "courses_h": "व्यावहारिक कोर्सेस", "courses_lead2": "शांतता, जागरूकता आणि अंतर्ज्ञानासाठी टप्प्याटप्प्याचे कार्यक्रम.", "courses_note": "प्रत्येक कार्यक्रम तयार झाल्यावर त्याची स्थिती आणि प्रवेशाची माहिती जाहीर केली जाईल.", "about_eyebrow": "लेखकाबद्दल", "about_name": "निकोलाय श्चेरबाकोव", "about_role": "लेखक आणि वैयक्तिक विकासासाठी मोबाइल ॲप्सचे निर्माते.", "about_p1": "मी पुस्तके, ॲप्स आणि व्यावहारिक साधने तयार करतो, जी लोकांना स्वतःला अधिक चांगले समजून घेण्यास, जागरूकता वाढवण्यास, चांगल्या सवयी लावण्यास आणि स्वतःची उत्तरे शोधण्यास मदत करतात.", "about_p2": "माझा दृष्टिकोन एका साध्या कल्पनेवर आधारित आहे: बदल मोठ्या वचनांनी नव्हे, तर रोज पुन्हा केल्या जाणाऱ्या छोट्या कृतींनी सुरू होतो.", "about_p3": "गुंतागुंतीचे विषय सोपे करणे आणि उपयुक्त सराव सर्वांपर्यंत पोहोचवणे हे माझे ध्येय आहे.", "free_eyebrow": "मोफत साहित्य", "free_title": "Telegram वर सराव आणि बातम्या", "free_lead": "उपयुक्त व्यायाम, छोटे सराव आणि नवीन पुस्तके व ॲप्सच्या बातम्या मिळवा.", "tg1": "Telegram चॅनेल", "join": "सामील व्हा →", "tg2": "Telegram “Thoughts in Circles”", "contact_eyebrow": "संपर्क", "contact_title": "संपर्क साधा", "contact_lead": "प्रश्न, सहकार्याचे प्रस्ताव किंवा नवीन प्रकल्पांच्या कल्पना आहेत? संपर्क फॉर्मद्वारे लिहा.", "f_name": "नाव", "f_msg": "संदेश", "f_send": "संदेश पाठवा", "nav_about": "लेखकाबद्दल", "nav_contact": "संपर्क", "privacy": "गोपनीयता धोरण", "terms": "वापराच्या अटी", "copy": "© 2026 निकोलाय श्चेरबाकोव. सर्व हक्क राखीव.", "disc": "या साइटवरील साहित्य शिक्षण आणि आत्मविकासासाठी आहे; ते वैद्यकीय किंवा मानसशास्त्रीय मदतीची जागा घेत नाही.", "litres": "Litres", "buy": "खरेदी करा:", "benefits": ["शांतता आणि स्पष्टता", "अंतर्ज्ञानाचा विकास", "त्रासदायक विचारांच्या चक्रातून सुटका", "चांगल्या सवयी", "अधिक ऊर्जा आणि जागरूकता"], "en_version": "इंग्रजी आवृत्ती", "more_book": "पुस्तकाबद्दल", "with_book": "पुस्तकावर आधारित", "with_app": "सोबतचे ॲप", "days30": "30 दिवस", "program": "कार्यक्रम", "status_open": "सुरू", "status_soon": "लवकरच", "join_course": "Telegram वर सामील व्हा", "quotes": ["“वाईट भविष्य आधीच जगू नका.”", "“विचाराला हरवण्याची गरज नाही. तुम्ही फक्त तो पुढे चालू ठेवू नका.”", "“उद्याचे प्रश्न आज सोडवणे थांबवा.”"], "free": ["अंतर्ज्ञानाचे सराव", "लक्ष परत आणण्याचे व्यायाम", "सवयी लावण्याच्या टिप्स", "श्वासाचे सराव", "नवीन पुस्तके आणि कार्यक्रम"], "close": "बंद करा", "gp": "Google Play", "soon": "लवकरच", "legal_body": "या दस्तऐवजाचा संपूर्ण मजकूर येथे प्रकाशित केला जाईल. माहितीसंबंधी प्रश्नांसाठी संपर्क फॉर्म किंवा Telegram वापरा.", "f_err": "कृपया नाव, योग्य ईमेल आणि संदेश लिहा.", "f_ok": "तुमचा संदेश तयार आहे. तो कॉपी करून मला Telegram वर पाठवा — उत्तर मिळवण्याचा हा सर्वात जलद मार्ग आहे.", "copy_btn": "मजकूर कॉपी करा", "open_tg": "Telegram उघडा", "copied": "कॉपी झाले"}, "books": [{"t": "Thoughts in Circles", "s": "स्वतःशी वाद न घालता त्रासदायक विचारांच्या चक्रातून कसे बाहेर पडावे", "d": ["सततचे विश्लेषण, शंका आणि पुन्हा पुन्हा येणाऱ्या विचारांनी थकलेल्या लोकांसाठी एक व्यावहारिक मार्गदर्शक.", "उत्तरांचा अंतहीन शोध थांबवायला, चिंतायुक्त विचारांत कमी गुंतायला आणि लक्ष वर्तमानात परत आणायला शिका.", "आत व्यावहारिक व्यायाम आणि 30 दिवसांचा कार्यक्रम आहे."], "q": "“विचाराला हरवण्याची गरज नाही. तुम्ही फक्त तो पुढे चालू ठेवू नका.”", "ben": "फिरणाऱ्या विचारांतून बाहेर पडायला आणि लक्ष वर्तमानात आणायला शिका."}, {"t": "What If Everything Turns Out Well?", "s": "भविष्याकडे पाहण्याचा एक नवा दृष्टिकोन", "d": ["आपण अनेकदा सर्वात वाईट परिस्थितीची कल्पना करतो, जी कदाचित कधीच घडणार नाही.", "हे पुस्तक तुम्हाला भविष्याबद्दलचा विचार बदलायला, संकटे आधीच अनुभवणे थांबवायला आणि चांगल्या शक्यता पाहायला मदत करते."], "q": "“जे भविष्य अजून आलेच नाही, त्यासाठी आजच्या दिवसाने किंमत मोजू नका.”", "ben": "वाईटाची अपेक्षा थांबवा आणि चांगल्या शक्यता पाहायला सुरुवात करा."}, {"t": "Destiny to Order", "s": "अफर्मेशनची पद्धत, जिने माझे आयुष्य बदलले", "d": ["रोजचे संकल्प, ध्येयांकडे लक्ष आणि विचारांच्या सवयी जाणीवपूर्वक घडवण्याच्या शक्तीबद्दलचे पुस्तक.", "आत: स्पष्टीकरण, वैयक्तिक अनुभव, व्यावहारिक कार्ये आणि 30 दिवसांचा अफर्मेशन कार्यक्रम."], "ben": "विचार बदलण्यासाठी आणि ध्येयाकडे जाण्यासाठी अफर्मेशन वापरायला शिका."}, {"t": "The Intuition Code", "s": "आतील संकेत कसे ओळखावे, पहिली जाणीव नंतरच्या शंकांपासून कशी वेगळी करावी आणि स्वतःवर विश्वास कसा निर्माण करावा.", "d": ["निरीक्षण, व्यायाम आणि वैयक्तिक अनुभवातून प्रत्यक्षात अंतर्ज्ञान विकसित करण्याबद्दलचे पुस्तक."], "ben": "आतील संकेत ऐकायला आणि अधिक आत्मविश्वासाने निर्णय घ्यायला शिका."}, {"t": "The Right Choice", "s": "जेव्हा मन आणि भावना वेगवेगळी उत्तरे देतात, तेव्हा निर्णय कसा घ्यावा.", "d": ["पर्याय तपासण्याचा, खरोखर काय हवे आहे हे समजून घेण्याचा आणि अनिर्णयावर मात करण्याचा व्यावहारिक मार्ग."], "ben": "आयुष्यातील महत्त्वाच्या निर्णयांत कमी शंका, अधिक आत्मविश्वास."}, {"t": "Minus 25 kg — and a Face Without Wrinkles!", "s": "नेहमीच्या अन्नाशिवाय 15 वर्षे. मी 2 महिन्यांत 25 किलो वजन कसे कमी केले.", "d": ["चुकांच्या विश्लेषणासह एक प्रामाणिक वैयक्तिक कथा: कॉफी नाही, साखर नाही, मैदा नाही, मांस नाही, मासे नाहीत."], "ben": "आहार बदलणे, वजन कमी करणे आणि रूपाची काळजी घेणे याची वैयक्तिक कथा."}, {"t": "Open Up to Your Dreams", "s": "अंतर्ज्ञान योग्य निर्णय घेण्यास कशी मदत करते", "d": ["20 वर्षांच्या अनुभवावर आधारित: अंतर्ज्ञान कसे ऐकावे, स्वतःवर विश्वास कसा ठेवावा आणि स्वप्नांकडे नेणारे निर्णय कसे घ्यावे."], "ben": "अंतर्ज्ञानावर विश्वास ठेवायला आणि स्वप्नांकडे पावले टाकायला शिका."}], "apps": [{"name": "INTUITION TRAINER", "sub": "अंतर्ज्ञान प्रशिक्षक", "desc": "छोट्या संवादात्मक व्यायामांनी अंतर्ज्ञानाला प्रशिक्षण द्या. पहिला संकेत ओळखायला, आपली जाणीव तपासायला आणि प्रगती पाहायला शिका."}, {"name": "MOMENT NOW", "sub": "वर्तमान क्षण", "desc": "लक्ष वर्तमानात परत आणणारे सराव. थांबायला, विचारांच्या प्रवाहातून बाहेर पडायला आणि आत्ता जे घडत आहे त्यावर लक्ष केंद्रित करायला मदत करतात."}, {"name": "BREATH PRANA MOMENT", "sub": "श्वासाचे सराव", "desc": "श्वासाची तंत्रे, स्वतःची सत्रे, आवाजातील मार्गदर्शन आणि प्रगतीची आकडेवारी. Box Breathing, 4-7-8, Equal Breathing, Coherent Breathing आणि बरेच काही — तसेच तुमचे स्वतःचे व्यायाम."}, {"name": "HEAD & HEART", "sub": "निर्णय सहाय्यक", "desc": "निवड कठीण असताना ॲप परिस्थिती वेगवेगळ्या बाजूंनी पाहायला मदत करते. काही प्रश्नांची उत्तरे द्या, युक्तिवादांची तुलना करा आणि पुढचे पाऊल शोधा."}, {"name": "PHONE DETOX", "sub": "डिजिटल संतुलन", "desc": "फोनमुळे होणारे विचलन कमी करा, महत्त्वाच्या गोष्टींसाठी वेळ राखून ठेवा आणि वाचवलेल्या वेळेचा हिशोब ठेवा."}, {"name": "PERENNIAL", "sub": "सवय ट्रॅकर", "desc": "चांगल्या सवयी लावा, रोजची प्रगती नोंदवा, यश पाहा आणि सातत्य टिकवा."}, {"name": "AFFIRMATION", "sub": "रोजचे अफर्मेशन", "desc": "आत्मविश्वास, प्रेरणा आणि ध्येयांकडे जागरूक दृष्टिकोनासाठी सकारात्मक वाक्ये आणि विषयानुसार सराव."}, {"name": "FIGURE OUT WHY", "sub": "कारण शोधा", "desc": "माहिती, प्रश्न आणि संभाव्य कारणांचे सुसंगत विश्लेषण करण्याचे साधन. परिस्थिती समजून घ्यायला आणि पुढील शोधासाठी प्रश्न तयार करायला मदत करते."}, {"name": "FREE AGAIN", "sub": "परत मिळालेले स्वातंत्र्य", "desc": "अधिक जागरूक सवयी लावण्यासाठी आणि रोजच्या कृतींवर पुन्हा नियंत्रण मिळवण्यासाठी एक ॲप."}, {"name": "PILL REMINDER", "sub": "स्मरणपत्रे", "desc": "वेळापत्रक तयार करण्यासाठी आणि वेळेवर स्मरणपत्रांसाठी एक सोपे साधन."}, {"name": "PARENT LOCK", "sub": "पालक नियंत्रण", "desc": "मुलाच्या फोन वापराचे नियम ठरवायला, परवानगी असलेली ॲप्स निवडायला आणि विश्रांतीची वेळ ठरवायला पालकांना मदत करते."}, {"name": "FERMENT LAB", "sub": "घरगुती आंबवण", "desc": "घरी आंबवण करायचे आहे? टप्प्याटप्प्याने सावरडो ब्रेड, लोणची, क्वास आणि दही बनवा."}, {"name": "FRIDGE", "sub": "फ्रिजमधील पदार्थांच्या पाककृती", "desc": "काय बनवावे सुचत नाही? फ्रिजमध्ये जे आहे त्यातून पाककृती शोधा."}], "courses": [{"t": "त्रासदायक विचारांपासून मुक्ती", "d": "पुन्हा पुन्हा येणारे विचार ओळखायला, अंतहीन विश्लेषणात कमी गुंतायला आणि रोजच्या कामांकडे परतायला शिका."}, {"t": "अफर्मेशनची शक्ती", "d": "स्वतःची अफर्मेशन तयार करा, रोज सराव करा आणि विचारांच्या सवयी बदलताना पाहा."}, {"t": "अंतर्ज्ञानाचा विकास", "d": "पहिला संकेत, लक्ष आणि जागरूक निवड यांच्या प्रशिक्षणासाठी व्यावहारिक व्यायाम."}, {"t": "जागरूक श्वास", "d": "श्वासाच्या तंत्रांची ओळख, नियमित छोटे सराव आणि स्वतःची गती."}, {"t": "वर्तमान क्षणात जगणे", "d": "लक्षाचे सराव, जागरूक विराम आणि आपण करत असलेल्या कामाकडे परत येणे."}, {"t": "निर्णय घेण्याची कला", "d": "ज्यांना कमी शंका घ्यायच्या आहेत, आपले प्राधान्यक्रम समजून घ्यायचे आहेत आणि अधिक संतुलित निर्णय घ्यायचे आहेत, त्यांच्यासाठी."}]}};
for (const lg in I18N){ const L=I18N[lg]; T[lg]=L.ui;
  L.books.forEach((x,i)=>{ if(BOOKS[i]) BOOKS[i][lg]=x; });
  L.apps.forEach((x,i)=>{ if(APPS[i]) APPS[i][lg]=[x.sub,x.desc]; });
  L.courses.forEach((x,i)=>{ if(COURSES[i]) COURSES[i][lg]=[x.t,x.d]; }); }
const APP_TXT={"en": [{"head": "Trust Your First Instinct", "desc": "Stop second-guessing yourself. Train your intuition through fun challenges, discover how accurate your instincts are, and build confidence in your first impressions."}, {"head": "Stop Overthinking. Start Living.", "desc": "Caught in worries about the past or future? Return to the present moment, calm your thoughts, and focus on what matters right now."}, {"head": "Breathe Away Stress. Find Your Calm.", "desc": "Feeling stressed or overwhelmed? Explore guided breathing techniques to relax, regain focus, and build a daily habit of calm."}, {"head": "Make Decisions With Confidence", "desc": "Torn between two choices? Understand what your mind and heart are telling you, uncover what holds you back, and find your next step."}, {"head": "Take Back Control of Your Time", "desc": "Tired of endless scrolling? Reduce phone distractions, break unhealthy screen habits, and reclaim time for real life."}, {"head": "Small Habits. Lasting Change.", "desc": "Struggling to stay consistent? Build positive routines, track your progress, and turn small daily actions into lasting habits."}, {"head": "Change Your Thoughts. Empower Your Life.", "desc": "Replace negative self-talk with encouraging affirmations. Strengthen your mindset, build confidence, and bring more positivity into your day."}, {"head": "Find the Reason Behind the Problem", "desc": "Confused about why something keeps happening? Explore possible causes, organize your thoughts, and discover practical next steps."}, {"head": "Break Free. Take Back Control.", "desc": "Feel trapped by unwanted habits? Build awareness, track your progress, and take meaningful steps toward greater personal freedom."}, {"head": "Never Miss an Important Reminder", "desc": "Forget important daily routines? Keep track of scheduled reminders and make everyday tasks easier to manage."}, {"head": "Protect Their Digital World", "desc": "Worried about your child's screen time? Set healthy boundaries, manage app access, and encourage safer digital habits."}, {"head": "Master the Art of Fermentation", "desc": "Struggling with homemade fermentation? Organize your recipes, follow the process, and confidently explore homemade bread, yogurt, kombucha, and more."}, {"head": "Turn What You Have Into Something Delicious", "desc": "Don't know what to cook? Discover meal ideas using ingredients already in your fridge, reduce food waste, and make everyday cooking easier."}], "mr": [{"head": "पहिल्या जाणिवेवर विश्वास ठेवा", "desc": "स्वतःवर सतत शंका घेणे थांबवा. मजेदार आव्हानांतून अंतर्ज्ञानाला प्रशिक्षण द्या, तुमच्या जाणिवा किती अचूक आहेत ते पाहा आणि पहिल्या छापावर आत्मविश्वास वाढवा."}, {"head": "अति विचार थांबवा. जगायला सुरुवात करा.", "desc": "भूतकाळ किंवा भविष्याच्या चिंतेत अडकलात? वर्तमान क्षणात परत या, विचार शांत करा आणि आत्ता जे महत्त्वाचे आहे त्यावर लक्ष द्या."}, {"head": "श्वासाने ताण दूर करा. शांतता मिळवा.", "desc": "ताण किंवा दडपण जाणवते? मार्गदर्शित श्वास तंत्रांनी आराम करा, लक्ष परत मिळवा आणि रोज शांत राहण्याची सवय लावा."}, {"head": "आत्मविश्वासाने निर्णय घ्या", "desc": "दोन पर्यायांमध्ये अडकलात? मन आणि हृदय काय सांगत आहेत ते समजून घ्या, तुम्हाला काय रोखत आहे ते ओळखा आणि पुढचे पाऊल शोधा."}, {"head": "तुमच्या वेळेवर पुन्हा नियंत्रण मिळवा", "desc": "अंतहीन स्क्रोलिंगने कंटाळलात? फोनचे विचलन कमी करा, स्क्रीनच्या वाईट सवयी मोडा आणि खऱ्या आयुष्यासाठी वेळ परत मिळवा."}, {"head": "छोट्या सवयी. टिकणारा बदल.", "desc": "सातत्य टिकवणे कठीण जाते? सकारात्मक दिनक्रम तयार करा, प्रगती पाहा आणि रोजच्या छोट्या कृतींना टिकणाऱ्या सवयीत बदला."}, {"head": "विचार बदला. आयुष्य सक्षम करा.", "desc": "नकारात्मक स्व-संवादाऐवजी प्रोत्साहन देणारी अफर्मेशन वापरा. मानसिकता मजबूत करा, आत्मविश्वास वाढवा आणि दिवसात अधिक सकारात्मकता आणा."}, {"head": "समस्येमागचे कारण शोधा", "desc": "काहीतरी पुन्हा पुन्हा का घडते हे समजत नाही? संभाव्य कारणे तपासा, विचार व्यवस्थित करा आणि व्यावहारिक पुढची पावले शोधा."}, {"head": "मुक्त व्हा. नियंत्रण परत मिळवा.", "desc": "नको असलेल्या सवयींमध्ये अडकल्यासारखे वाटते? जागरूकता वाढवा, प्रगती पाहा आणि अधिक वैयक्तिक स्वातंत्र्याकडे अर्थपूर्ण पावले टाका."}, {"head": "महत्त्वाचे स्मरणपत्र कधीही चुकवू नका", "desc": "रोजची महत्त्वाची कामे विसरता? ठरलेल्या स्मरणपत्रांचा हिशोब ठेवा आणि रोजची कामे सांभाळणे सोपे करा."}, {"head": "त्यांचे डिजिटल जग सुरक्षित ठेवा", "desc": "मुलाच्या स्क्रीन टाइमची काळजी वाटते? निरोगी मर्यादा ठरवा, ॲप्सचा वापर नियंत्रित करा आणि सुरक्षित डिजिटल सवयींना प्रोत्साहन द्या."}, {"head": "आंबवणाची कला आत्मसात करा", "desc": "घरी आंबवण करताना अडचणी येतात? पाककृती व्यवस्थित ठेवा, प्रक्रिया पाळा आणि आत्मविश्वासाने घरी ब्रेड, दही, कोम्बुचा आणि बरेच काही बनवा."}, {"head": "जे आहे त्यातूनच काहीतरी स्वादिष्ट बनवा", "desc": "काय शिजवावे कळत नाही? फ्रिजमधील पदार्थांतून जेवणाच्या कल्पना शोधा, अन्नाची नासाडी कमी करा आणि रोजचा स्वयंपाक सोपा करा."}]};
const APP_HINT={"en": "Tap a card to download the app from Google Play.", "mr": "Google Play वरून ॲप डाउनलोड करण्यासाठी कार्डवर टॅप करा."};
for(const lg in APP_HINT){ if(T[lg]) T[lg].apps_hint=APP_HINT[lg]; }
const BOOK_TXT={"en": [{"head": "Can't Stop Overthinking?", "desc": "The same thoughts keep coming back, stealing your peace? Learn how to break the cycle of repetitive thinking without fighting your mind — and finally make room for the present."}, {"head": "Always Expecting the Worst?", "desc": "Tired of worrying about problems that haven't even happened? Stop living through tomorrow's fears today. Discover how to face uncertainty with more calm, hope, and confidence."}, {"head": "Feel Stuck in the Same Life Patterns?", "desc": "Do negative thoughts and limiting beliefs keep holding you back? Discover a practical affirmation method to reshape your thinking, strengthen self-belief, and move toward the life you want."}, {"head": "Do You Ignore Your Inner Voice?", "desc": "Ever had a gut feeling you ignored — only to regret it later? Learn to recognize your first intuitive signals, understand them better, and trust yourself without endless second-guessing."}, {"head": "Afraid of Making the Wrong Decision?", "desc": "Do you overthink every important choice and fear making a mistake? Learn to separate fear from intuition, find clarity, and make decisions with greater confidence."}, {"head": "Tired of Diets That Never Last?", "desc": "Struggling with weight, restrictive diets, or concerns about aging? Discover my personal journey of losing 25 kg, changing my eating habits, and rethinking how I care for my appearance."}, {"head": "Are Fear and Doubt Holding You Back?", "desc": "Have you put your dreams aside because you're afraid of failing or choosing the wrong path? Learn to listen to your intuition, overcome hesitation, and take your first steps toward what truly matters."}], "mr": [{"head": "अति विचार थांबवता येत नाही?", "desc": "तेच विचार पुन्हा पुन्हा येऊन शांतता हिरावून घेतात? मनाशी लढा न देता विचारांचे चक्र कसे मोडावे ते शिका — आणि शेवटी वर्तमानासाठी जागा करा."}, {"head": "नेहमी वाईटाचीच अपेक्षा करता?", "desc": "जे प्रश्न अजून घडलेच नाहीत त्यांच्या चिंतेने थकलात? उद्याची भीती आज जगणे थांबवा. अनिश्चिततेला अधिक शांतता, आशा आणि आत्मविश्वासाने कसे सामोरे जावे ते शिका."}, {"head": "आयुष्याच्या त्याच चक्रात अडकलात?", "desc": "नकारात्मक विचार आणि मर्यादित समजुती तुम्हाला मागे ओढतात? विचार बदलण्यासाठी, स्वतःवरचा विश्वास वाढवण्यासाठी आणि हवे ते आयुष्य घडवण्यासाठी अफर्मेशनची व्यावहारिक पद्धत जाणून घ्या."}, {"head": "तुम्ही आतला आवाज दुर्लक्षित करता?", "desc": "कधी मनाची जाणीव दुर्लक्षित करून नंतर पश्चात्ताप केला आहे? पहिले अंतर्ज्ञानी संकेत ओळखायला, ते समजून घ्यायला आणि अंतहीन शंकांशिवाय स्वतःवर विश्वास ठेवायला शिका."}, {"head": "चुकीच्या निर्णयाची भीती वाटते?", "desc": "प्रत्येक महत्त्वाच्या निवडीवर अति विचार करता आणि चुकीची भीती वाटते? भीती आणि अंतर्ज्ञान वेगळे ओळखायला, स्पष्टता मिळवायला आणि अधिक आत्मविश्वासाने निर्णय घ्यायला शिका."}, {"head": "न टिकणाऱ्या डाएटने कंटाळलात?", "desc": "वजन, कडक डाएट किंवा वय दिसण्याची चिंता आहे? 25 किलो वजन कमी करण्याचा, आहाराच्या सवयी बदलण्याचा आणि रूपाच्या काळजीबद्दल नव्याने विचार करण्याचा माझा वैयक्तिक प्रवास जाणून घ्या."}, {"head": "भीती आणि शंका तुम्हाला मागे ओढतात?", "desc": "अपयशाच्या किंवा चुकीचा मार्ग निवडण्याच्या भीतीने स्वप्ने बाजूला ठेवली आहेत? अंतर्ज्ञान ऐकायला, संकोचावर मात करायला आणि खरोखर महत्त्वाच्या गोष्टीकडे पहिले पाऊल टाकायला शिका."}]};
const LP_LANGS=[["en", "English", "English"], ["ar", "Arabic", "العربية"], ["bn", "Bengali", "বাংলা"], ["zh", "Chinese", "中文"], ["fr", "French", "Français"], ["de", "German", "Deutsch"], ["he", "Hebrew", "עברית"], ["hi", "Hindi", "हिन्दी"], ["id", "Indonesian", "Bahasa Indonesia"], ["it", "Italian", "Italiano"], ["ja", "Japanese", "日本語"], ["ko", "Korean", "한국어"], ["mr", "Marathi", "मराठी"], ["pt", "Portuguese (Brazil)", "Português"], ["ru", "Russian", "Русский"], ["es", "Spanish", "Español"], ["ta", "Tamil", "தமிழ்"], ["te", "Telugu", "తెలుగు"], ["tr", "Turkish", "Türkçe"], ["uk", "Ukrainian", "Українська"]];
const LP_TXT={"en": ["Language", "Choose the site language", "Continue"], "ru": ["Язык", "Выберите язык сайта", "Продолжить"], "uk": ["Мова", "Оберіть мову сайту", "Продовжити"], "ar": ["اللغة", "اختر لغة الموقع", "متابعة"], "he": ["שפה", "בחרו את שפת האתר", "המשך"], "tr": ["Dil", "Site dilini seçin", "Devam"], "fr": ["Langue", "Choisissez la langue du site", "Continuer"], "de": ["Sprache", "Wählen Sie die Sprache der Website", "Weiter"], "es": ["Idioma", "Elige el idioma del sitio", "Continuar"], "pt": ["Idioma", "Escolha o idioma do site", "Continuar"], "it": ["Lingua", "Scegli la lingua del sito", "Continua"], "zh": ["语言", "选择网站语言", "继续"], "ja": ["言語", "サイトの言語を選択", "続ける"], "ko": ["언어", "사이트 언어를 선택하세요", "계속"], "hi": ["भाषा", "साइट की भाषा चुनें", "आगे बढ़ें"], "id": ["Bahasa", "Pilih bahasa situs", "Lanjutkan"], "bn": ["ভাষা", "সাইটের ভাষা বেছে নিন", "চালিয়ে যান"], "mr": ["भाषा", "साइटची भाषा निवडा", "पुढे चला"], "te": ["భాష", "సైట్ భాషను ఎంచుకోండి", "కొనసాగించండి"], "ta": ["மொழி", "தளத்தின் மொழியைத் தேர்ந்தெடுங்கள்", "தொடரவும்"]};
const LP_FLAGS={"en": "/img/6410d6150f.webp", "ar": "/img/83f0b54709.webp", "zh": "/img/aa6060930b.webp", "fr": "/img/bb1146a1ab.webp", "de": "/img/404c2d0a68.webp", "he": "/img/743ea12bea.webp", "hi": "/img/3e25b8f394.webp", "id": "/img/06c906bcc8.webp", "it": "/img/9a522eeb3e.webp", "ja": "/img/da25fc0159.webp", "ko": "/img/177a992bf3.webp", "pt": "/img/89285bea8f.webp", "ru": "/img/3f51a96048.webp", "es": "/img/e64710b7dd.webp", "tr": "/img/8347013e27.webp", "uk": "/img/f563a74960.webp", "bn": "/img/3e25b8f394.webp", "mr": "/img/3e25b8f394.webp", "te": "/img/3e25b8f394.webp", "ta": "/img/3e25b8f394.webp"};
const LP_GLOBE="/img/09a39106e2.webp";
let lang = "en";

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const t = k => (T[lang] && T[lang][k] !== undefined) ? T[lang][k] : T.en[k];
const arrow = '<svg class="i" viewBox="0 0 24 24" style="width:16px;height:16px"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const RV={"0": {"r": 5.0, "n": 111, "u": "https://www.litres.ru/74507834/"}, "1": {"r": 5.0, "n": 90, "u": "https://www.litres.ru/74485039/"}, "2": {"r": 5.0, "n": 166, "u": "https://www.litres.ru/74262924/"}, "3": {"r": 4.8, "n": 115, "u": "https://www.litres.ru/74229332/"}, "4": {"r": 5.0, "n": 42, "u": "https://www.litres.ru/74333723/"}, "5": {"r": 5.0, "n": 79, "u": "https://www.litres.ru/74358153/"}, "6": {"r": 4.7, "n": 65, "u": "https://www.litres.ru/74237733/"}}, RV_TXT={"en": {"one": "{n} review", "other": "{n} reviews", "src": "on Litres", "sum": "Average rating {r} from {n} reader reviews on Litres", "read": "Read reviews"}, "ru": {"one": "{n} отзыв", "few": "{n} отзыва", "many": "{n} отзывов", "other": "{n} отзыва", "src": "на Литрес", "sum": "Средняя оценка {r} по {n} отзывам читателей на Литрес", "read": "Читать отзывы"}, "uk": {"one": "{n} відгук", "few": "{n} відгуки", "many": "{n} відгуків", "other": "{n} відгуку", "src": "на Літрес", "sum": "Середня оцінка {r} за {n} відгуками читачів на Літрес", "read": "Читати відгуки"}, "ar": {"zero": "{n} مراجعة", "one": "مراجعة واحدة", "two": "مراجعتان", "few": "{n} مراجعات", "many": "{n} مراجعة", "other": "{n} مراجعة", "src": "على Litres", "sum": "متوسط التقييم {r} من {n} مراجعة للقراء على Litres", "read": "اقرأ المراجعات"}, "he": {"one": "ביקורת אחת", "two": "{n} ביקורות", "many": "{n} ביקורות", "other": "{n} ביקורות", "src": "ב-Litres", "sum": "דירוג ממוצע {r} מתוך {n} ביקורות קוראים ב-Litres", "read": "לקריאת הביקורות"}, "tr": {"one": "{n} yorum", "other": "{n} yorum", "src": "Litres'te", "sum": "Litres'te {n} okur yorumuna göre ortalama puan {r}", "read": "Yorumları oku"}, "fr": {"one": "{n} avis", "many": "{n} avis", "other": "{n} avis", "src": "sur Litres", "sum": "Note moyenne {r} sur {n} avis de lecteurs sur Litres", "read": "Lire les avis"}, "de": {"one": "{n} Bewertung", "other": "{n} Bewertungen", "src": "auf Litres", "sum": "Durchschnittlich {r} aus {n} Leserbewertungen auf Litres", "read": "Bewertungen lesen"}, "es": {"one": "{n} reseña", "many": "{n} reseñas", "other": "{n} reseñas", "src": "en Litres", "sum": "Valoración media de {r} según {n} reseñas de lectores en Litres", "read": "Leer reseñas"}, "pt": {"one": "{n} avaliação", "many": "{n} avaliações", "other": "{n} avaliações", "src": "no Litres", "sum": "Nota média {r} em {n} avaliações de leitores no Litres", "read": "Ler avaliações"}, "it": {"one": "{n} recensione", "many": "{n} recensioni", "other": "{n} recensioni", "src": "su Litres", "sum": "Valutazione media {r} su {n} recensioni dei lettori su Litres", "read": "Leggi le recensioni"}, "zh": {"other": "{n} 条评论", "src": "来自 Litres", "sum": "Litres 上 {n} 条读者评论，平均评分 {r}", "read": "查看评论"}, "ja": {"other": "レビュー {n} 件", "src": "Litres", "sum": "Litresの読者レビュー {n} 件・平均評価 {r}", "read": "レビューを読む"}, "ko": {"other": "리뷰 {n}개", "src": "Litres 기준", "sum": "Litres 독자 리뷰 {n}개, 평균 평점 {r}", "read": "리뷰 보기"}, "hi": {"one": "{n} समीक्षा", "other": "{n} समीक्षाएँ", "src": "Litres पर", "sum": "Litres पर {n} पाठक समीक्षाओं के आधार पर औसत रेटिंग {r}", "read": "समीक्षाएँ पढ़ें"}, "id": {"other": "{n} ulasan", "src": "di Litres", "sum": "Rating rata-rata {r} dari {n} ulasan pembaca di Litres", "read": "Baca ulasan"}, "bn": {"one": "{n}টি রিভিউ", "other": "{n}টি রিভিউ", "src": "Litres-এ", "sum": "Litres-এ পাঠকদের {n}টি রিভিউয়ের গড় রেটিং {r}", "read": "রিভিউ পড়ুন"}, "mr": {"one": "{n} पुनरावलोकन", "other": "{n} पुनरावलोकने", "src": "Litres वर", "sum": "Litres वरील वाचकांच्या {n} पुनरावलोकनांचे सरासरी रेटिंग {r}", "read": "पुनरावलोकने वाचा"}, "te": {"one": "{n} సమీక్ష", "other": "{n} సమీక్షలు", "src": "Litres‌లో", "sum": "Litres‌లో పాఠకుల {n} సమీక్షల సగటు రేటింగ్ {r}", "read": "సమీక్షలు చదవండి"}, "ta": {"one": "{n} மதிப்புரை", "other": "{n} மதிப்புரைகள்", "src": "Litres-இல்", "sum": "Litres-இல் வாசகர்களின் {n} மதிப்புரைகளின் சராசரி மதிப்பீடு {r}", "read": "மதிப்புரைகளைப் படியுங்கள்"}}, RV_TOT={r:4.9,n:668};
const rvLoc=()=>({pt:"pt-BR",zh:"zh-CN"})[lang]||lang;
const rvNum=x=>{ try{ return new Intl.NumberFormat(rvLoc(),{minimumFractionDigits:1,maximumFractionDigits:1}).format(x);}catch(e){return String(x);} };
const rvCount=n=>{ const L=RV_TXT[lang]||RV_TXT.en; let k="other"; try{ k=new Intl.PluralRules(rvLoc()).select(n);}catch(e){} return (L[k]||L.other).replace("{n}", n.toLocaleString(rvLoc())); };
const STAR='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.2 6.1 20.4l1.3-6.5L2.5 9.4l6.6-.8z"/></svg>';
function rvBadge(i,big){ const R=RV[i]; if(!R) return ""; const L=RV_TXT[lang]||RV_TXT.en;
  return `<a class="rv${big?" big":""}" href="${R.u}" target="_blank" rel="noopener" title="${esc(L.read)}"><span class="rv-s">${STAR}<b>${rvNum(R.r)}</b></span><span class="rv-n">${esc(rvCount(R.n))} ${esc(L.src)}</span></a>`; }
function rvSummary(){ const el=document.getElementById("rv-sum"); if(!el) return; const L=RV_TXT[lang]||RV_TXT.en;
  el.innerHTML=`<span class="rv-stars">${STAR.repeat(5)}</span><span>${esc(L.sum.replace("{r}",rvNum(RV_TOT.r)).replace("{n}",RV_TOT.n.toLocaleString(rvLoc())))}</span>`; }


const FREE_TXT={"en": {"app_free": "Free", "free_banner": "Completely free: MOMENT NOW and BREATH PRANA MOMENT — download and use without paying anything."}, "mr": {"app_free": "मोफत", "free_banner": "पूर्णपणे मोफत: MOMENT NOW आणि BREATH PRANA MOMENT — एकही पैसा न देता डाउनलोड करा आणि वापरा."}};
for(const lg in FREE_TXT){ if(T[lg]) Object.assign(T[lg],FREE_TXT[lg]); }
const FREE_APPS=["MOMENT NOW","BREATH PRANA MOMENT"];
function isFree(a){ return !!a && FREE_APPS.includes(a.n); }
function freeTag(a){ return isFree(a)?`<span class="free">${esc(t("app_free"))}</span>`:""; }


const ALSO_TXT={"en": {"also_on": "Also on"}, "mr": {"also_on": "तसेच"}};
for(const lg in ALSO_TXT){ if(T[lg]) Object.assign(T[lg],ALSO_TXT[lg]); }
function alsoBtn(b,cls){ if(!b.url||!b.urlRu) return ""; const ru=lang==="ru";
  const url=ru?b.url:b.urlRu, st=ru?b.store:b.storeRu;
  return `<a class="${cls||"btn gold sm"}" href="${url}" target="_blank" rel="noopener">${t("buy")} ${esc(storeName({store:st}))}</a>`; }
function buyStack(b,cls){ const two=alsoBtn(b,cls); return two?`<div class="buy-stack">${buyBtn(b,cls)}${two}</div>`:buyBtn(b,cls); }

function storeName(b){ return b.store==="Литрес" ? t("litres") : b.store; }
function buyBtn(b,cls){ const ru=lang==="ru"&&b.urlRu; const url=ru?b.urlRu:b.url; if(!url) return ""; const st=ru?{store:b.storeRu}:b; return `<a class="${cls||"btn gold sm"}" href="${url}" target="_blank" rel="noopener">${t("buy")} ${esc(storeName(st))}</a>`; }
function genCover(b,i){
  const off=[0,20,-15,30,10,-25][i];
  return `<span class="gen" style="background:linear-gradient(160deg,${b.c},#141B3D)"><small>Nikolay Shcherbakov</small><svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="30"/><circle cx="100" cy="100" r="55"/><circle cx="100" cy="100" r="80"/><circle class="sd" cx="${40+off}" cy="${30+Math.abs(off)/2}" r="7"/></svg><b>${esc(b[lang].t)}</b></span>`;
}
function cov(b){ return (lang==="ru"&&b.imgRu)||b.img; }
function appIcon(a){ return a.img ? `<img loading="lazy" decoding="async" src="${a.img}" alt="" loading="lazy">` : `<span class="gi" aria-hidden="true">${esc(a.k)}</span>`; }

function render(){
  document.documentElement.lang = ({pt:"pt-BR",zh:"zh-CN"})[lang] || lang;
  document.documentElement.dir = (lang==="ar"||lang==="he") ? "rtl" : "ltr";
  const cur=document.getElementById("lang-cur"); if(cur){ const L=LP_LANGS.find(x=>x[0]===lang); cur.textContent=L?L[2]:lang; }
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang===lang));
  document.getElementById("benefits").innerHTML = t("benefits").map((x,i)=>`<li><img loading="lazy" decoding="async" src="${BEN_IMG[i]}" alt="">${esc(x)}</li>`).join("");

  ["shelf","captions"].forEach(id=>document.getElementById(id).style.setProperty("--n",BOOKS.length));
  document.getElementById("shelf").innerHTML = BOOKS.map((b,i)=> `<button class="bk" type="button" data-book="${i}" aria-label="${esc(b[lang].t)}">${cov(b)?`<img loading="lazy" decoding="async" src="${cov(b)}" alt="">`:genCover(b,i)}</button>`).join("");
  document.getElementById("captions").innerHTML = BOOKS.map((b,i)=>{
    const L=b[lang]; const x=(BOOK_TXT[lang]||BOOK_TXT.en)[i]||{head:"",desc:L.ben||""}; const c=cov(b);
    return `<article class="bookc" id="book-${i}"><button class="bookc-cov" type="button" data-book="${i}" aria-label="${esc(L.t)}">${c?`<img loading="lazy" decoding="async" src="${c}" alt="">`:genCover(b,i)}</button><div class="bookc-b"><b>${esc(L.t)}</b>${rvBadge(i)}<h3>${esc(x.head)}</h3><p>${esc(x.desc)}</p>${lang==="ru"&&b.enT?`<span class="en">${t("en_version")}: ${esc(b.enT)}</span>`:""}${edPill(b)}<div class="bookc-a">${buyStack(b,"btn gold sm cb")}${exBtn(b)}<a class="linkbtn" href="${bookHref(i)}">${t("more_book")} ${arrow}</a></div></div></article>`;
  }).join("");

  document.getElementById("apps-list").innerHTML = APPS.map((a,i)=>{
    const x=(APP_TXT[lang]||APP_TXT.en)[i]||{head:a[lang]?a[lang][0]:"",desc:a[lang]?a[lang][1]:""};
    const btn=a.url?`<a class="btn gold sm" href="${a.url}" target="_blank" rel="noopener">${t("gp")}</a>`:`<span class="btn sm off" aria-disabled="true">${t("soon")}</span>`;
    return `<article class="appc${isFree(a)?" is-free":""}">${appIcon(a)}<div class="appc-b"><b>${esc(a.n)} <span class="plat">${t("android")}</span>${freeTag(a)}</b><h3>${esc(x.head)}</h3><p>${esc(x.desc)}</p><div class="appc-a">${btn}<a class="linkbtn more-app" href="${appHref(i)}">${esc(MORE_TXT[lang]||MORE_TXT.en)} <span aria-hidden="true">→</span></a></div></div></article>`;
  }).join("");

  document.getElementById("course-list").innerHTML = COURSES.map(c=>{
    const L=c[lang];
    const link = c.book!==undefined ? `${t("with_book")} <b>${esc(BOOKS[c.book][lang].t)}</b>` : `${t("with_app")} <b>${esc(APPS[c.app].n)}</b>`;
    return `<article class="course"><div class="meta"><span class="pill">${c.d30?t("days30"):t("program")}</span>${c.url?`<span class="pill open">${t("status_open")}</span>`:`<span class="pill soon">${t("status_soon")}</span>`}</div><h3>${esc(L[0])}</h3><p>${esc(L[1])}</p><p class="link">${link}</p>${c.url?`<div><a class="btn gold sm" href="${c.url}" target="_blank" rel="noopener">${t("join_course")}</a></div>`:""}</article>`;
  }).join("");

  document.getElementById("quotes").innerHTML = t("quotes").map(q=>`<blockquote>${esc(q)}</blockquote>`).join("");
  document.getElementById("free-list").innerHTML = t("free").map(x=>`<li>${esc(x)}</li>`).join("");
}

const dlg = document.getElementById("dlg"), dlgBody = document.getElementById("dlg-body");
function openDialog(html){
  dlgBody.innerHTML = html + `<button class="btn sm close" type="button" id="dlg-close">${t("close")}</button>`;
  document.getElementById("dlg-close").onclick = () => dlg.close();
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open","");
}
dlg.addEventListener("click", e => { if(e.target===dlg) dlg.close(); });

document.addEventListener("click", e => {
  const bb = e.target.closest("[data-book]");
  if (bb){
    const B=BOOKS[+bb.dataset.book], L=B[lang];
    openDialog(`<div class="dlg-top">${cov(B)?`<img loading="lazy" decoding="async" src="${cov(B)}" alt="">`:""}<div style="display:grid;gap:10px;min-width:0"><h3>${esc(L.t)}</h3><p class="sub">${esc(L.s)}</p>${buyBtn(B)?`<div>${buyBtn(B)}</div>`:""}</div></div>
      ${L.d.map(p=>`<p>${esc(p)}</p>`).join("")}${L.q?`<blockquote>${esc(L.q)}</blockquote>`:""}`);
    return;
  }
  const ab = e.target.closest("[data-app]");
  if (ab){
    const A=APPS[+ab.dataset.app], L=A[lang];
    const btn = A.url ? `<a class="btn gold sm" href="${A.url}" target="_blank" rel="noopener">${t("gp")}</a>` : `<span class="btn sm off" aria-disabled="true">${t("soon")}</span>`;
    openDialog(`<div class="dlg-top app-d">${appIcon(A)}<div style="display:grid;gap:8px;min-width:0"><h3>${esc(A.n)}</h3><p class="sub">${esc(L[0])}</p><div>${btn}</div></div></div><p>${esc(L[1])}</p>`);
    return;
  }
  const lb = e.target.closest(".lang button");
  if (lb){ lang = lb.dataset.lang; try{localStorage.setItem("ns-lang",lang)}catch(err){} if(!goLang()) render(); }
});
document.getElementById("btn-privacy").onclick = () => openDialog(`<h3>${t("privacy")}</h3><p>${t("legal_body")}</p>`);
document.getElementById("btn-terms").onclick = () => openDialog(`<h3>${t("terms")}</h3><p>${t("legal_body")}</p>`);


const navLinks=[...document.querySelectorAll("nav.main a")];
const secs=["top","books","apps","courses","about"].map(id=>document.getElementById(id));
addEventListener("scroll",()=>{ let cur=0; secs.forEach((s,i)=>{ if(s && s.getBoundingClientRect().top<160) cur=i; }); navLinks.forEach((a,i)=>a.classList.toggle("on",i===cur)); },{passive:true});

(function(){
  const dlgL=document.getElementById("lp"), grid=document.getElementById("lp-grid");
  document.getElementById("lp-globe").src=LP_GLOBE;
  let pick=lang;
  function paint(){
    const s=LP_TXT[lang]||LP_TXT.en;
    document.getElementById("lp-title").textContent=s[0]; document.getElementById("lp-sub").textContent=s[1]; document.getElementById("lp-go-t").textContent=s[2];
    document.getElementById("lp-close").setAttribute("aria-label", t("close"));
    grid.innerHTML=LP_LANGS.map(([c,en,nat])=>`<button class="lp-btn" type="button" role="radio" aria-checked="${c===pick}" data-lg="${c}" lang="${c}"><img loading="lazy" decoding="async" src="${LP_FLAGS[c]}" alt=""><span class="nm"><b>${en}</b>${nat!==en?`<small>${nat}</small>`:""}</span><span class="ck"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span></button>`).join("");
  }
  function open(){ pick=lang; paint(); if(dlgL.showModal) dlgL.showModal(); else dlgL.setAttribute("open",""); const c=grid.querySelector('[aria-checked="true"]'); if(c) c.focus(); }
  function close(){ if(dlgL.close) dlgL.close(); else dlgL.removeAttribute("open"); }
  document.getElementById("lang-open").addEventListener("click", open);
  document.getElementById("lp-close").addEventListener("click", close);
  dlgL.addEventListener("click", e=>{ if(e.target===dlgL) close(); });
  grid.addEventListener("click", e=>{ const b=e.target.closest(".lp-btn"); if(!b) return; pick=b.dataset.lg; grid.querySelectorAll(".lp-btn").forEach(x=>x.setAttribute("aria-checked", x===b)); });
  grid.addEventListener("dblclick", e=>{ const b=e.target.closest(".lp-btn"); if(b){ lang=b.dataset.lg; saveLang(); close(); if(!goLang()) render(); } });
  document.getElementById("lp-go").addEventListener("click", ()=>{ lang=pick; saveLang(); close(); if(!goLang()) render(); });
})();
const FX = k => ((FEAT[lang] && FEAT[lang][k]) || FEAT.en[k] || "");
const TOPICS = {
  overthink:{b:0,a:1,c:0,p:"thought"}, worry:{b:1,a:2,c:4,p:"breath"}, decide:{b:4,a:3,c:5,p:"signal"}, intuition:{b:3,a:0,c:2,p:"signal"},
  habits:{b:2,a:4,c:null,p:"thought"}, stress:{b:1,a:2,c:3,p:"breath"}, goals:{b:6,a:6,c:1,p:"signal"}, weight:{b:5,a:12,c:null,p:"breath"}
};
const PATHS = [{t:"path1",b:0,a:1,c:0},{t:"path2",b:4,a:3,c:5},{t:"path3",b:1,a:2,c:3}];
const LOTUS = '<svg class="lotus" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="lotus-g" cx="50%" cy="60%" r="50%"><stop offset="0" stop-color="#FFF6C8"/><stop offset=".5" stop-color="#FFC93C" stop-opacity=".55"/><stop offset="1" stop-color="#FFC93C" stop-opacity="0"/></radialGradient><linearGradient id="lotus-p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF1B0"/><stop offset="1" stop-color="#F2A31A"/></linearGradient></defs><circle cx="50" cy="58" r="40" fill="url(#lotus-g)"/><g fill="url(#lotus-p)" stroke="#FFE9A6" stroke-width=".8"><path d="M50 22c8 9 9 22 0 38-9-16-8-29 0-38z"/><path d="M50 60c-6-12-16-18-28-18 2 13 12 19 28 18z"/><path d="M50 60c6-12 16-18 28-18-2 13-12 19-28 18z"/><path d="M50 60c-10-6-22-6-32 0 10 7 22 7 32 0z" opacity=".85"/><path d="M50 60c10-6 22-6 32 0-10 7-22 7-32 0z" opacity=".85"/></g><g fill="#FFF8D8"><circle cx="20" cy="22" r=".9"/><circle cx="80" cy="18" r="1.1"/><circle cx="72" cy="80" r=".8"/><circle cx="26" cy="78" r="1"/><circle cx="86" cy="50" r=".7"/><circle cx="12" cy="52" r=".8"/></g></svg>';
const SUN = '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="9" fill="#fff"/><g stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.9 9.9l4.2 4.2M33.9 33.9l4.2 4.2M9.9 38.1l4.2-4.2M33.9 14.1l4.2-4.2"/></g></svg>';
const appBtn = a => a.url ? `<a class="btn gold sm" href="${a.url}" target="_blank" rel="noopener">${t("gp")}</a>` : `<span class="btn sm off" aria-disabled="true">${t("soon")}</span>`;
const bookHead = i => ((BOOK_TXT[lang]||BOOK_TXT.en)[i]||{}).head || "";
const appHead = i => ((APP_TXT[lang]||APP_TXT.en)[i]||{}).head || "";
function courseBtn(c){ return c.url ? `<a class="btn gold sm" href="${c.url}" target="_blank" rel="noopener">${t("join_course")}</a>` : `<span class="pill soon">${t("status_soon")}</span>`; }

/* quiz */
const QZ = {step:1, topic:null, fmt:null, time:null};
function qzOpts(list, key){ return `<div class="qz-opts${list.length<4?' one':''}">${list.map(([v,l])=>`<button type="button" class="qz-opt" data-k="${key}" data-v="${v}">${esc(FX(l))}</button>`).join("")}</div>`; }
function renderQuiz(){
  const el=document.getElementById("quiz"); if(!el) return;
  if(QZ.step<=3){
    const q = QZ.step===1 ? ["q1", qzOpts(Object.keys(TOPICS).map(k=>[k,"t_"+k]),"topic")]
            : QZ.step===2 ? ["q2", qzOpts([["book","f_book"],["app","f_app"],["course","f_course"]],"fmt")]
            : ["q3", qzOpts([["2","m_2"],["15","m_15"],["30","m_30"]],"time")];
    el.innerHTML = `<div class="qz-top"><span class="qz-step">${esc(FX("q_step").replace("{n}",QZ.step))}</span>${QZ.step>1?`<button type="button" class="qz-link" id="qz-back"><span class="arr">←</span> ${esc(FX("q_back"))}</button>`:""}</div>
      <div class="qz-bar"><i style="width:${(QZ.step-1)/3*100+8}%"></i></div><h3 class="qz-q">${esc(FX(q[0]))}</h3>${q[1]}`;
    return;
  }
  const T0=TOPICS[QZ.topic], b=BOOKS[T0.b], a=APPS[T0.a], c=T0.c!==null?COURSES[T0.c]:null;
  const cards={
    book:`<div class="qz-card" data-kind="book">${cov(b)?`<img loading="lazy" decoding="async" class="book" src="${cov(b)}" alt="">`:`<span class="cv">📖</span>`}<div><small>${esc(FX("r_book"))}</small><b>${esc(b[lang].t)}</b><p>${esc(bookHead(T0.b))}</p>${buyBtn(b)}</div></div>`,
    app:`<div class="qz-card" data-kind="app">${appIcon(a)}<div><small>${esc(FX("r_app"))}</small><b>${esc(a.n)}</b><p>${esc(appHead(T0.a))}</p>${appBtn(a)}</div></div>`,
    course: c ? `<div class="qz-card" data-kind="course"><span class="cv">✦</span><div><small>${esc(FX("r_course"))}</small><b>${esc(c[lang][0])}</b><p>${esc(c[lang][1])}</p>${courseBtn(c)}</div></div>` : ""
  };
  let order=[QZ.fmt, ...["book","app","course"].filter(x=>x!==QZ.fmt)].filter(k=>cards[k]);
  const html=order.map((k,i)=> i===0 ? cards[k].replace('class="qz-card"','class="qz-card best"').replace('<div><small>',`<span class="badge">${esc(FX("r_best"))}</span><div><small>`) : cards[k]).join("");
  el.innerHTML = `<div class="qz-res"><div class="qz-bar"><i style="width:100%"></i></div><h3>${esc(FX("r_title"))}</h3><p class="qz-tip">${esc(FX("r_tip_"+QZ.time))}</p><div class="qz-cards">${html}</div>
    <div class="qz-acts"><a class="btn sm" href="#practice" id="qz-try">${esc(FX("r_try"))} <span class="arr">→</span></a><button type="button" class="qz-link" id="qz-restart">↺ ${esc(FX("q_restart"))}</button></div></div>`;
}
document.addEventListener("click", e=>{
  const o=e.target.closest(".qz-opt");
  if(o){ QZ[o.dataset.k]=o.dataset.v; QZ.step++; renderQuiz(); const f=document.querySelector("#quiz .qz-opt, #quiz .qz-res h3"); if(f&&f.focus) f.setAttribute("tabindex","-1"), f.focus({preventScroll:true}); return; }
  if(e.target.closest("#qz-back")){ QZ.step=Math.max(1,QZ.step-1); renderQuiz(); return; }
  if(e.target.closest("#qz-restart")){ Object.assign(QZ,{step:1,topic:null,fmt:null,time:null}); renderQuiz(); return; }
  if(e.target.closest("#qz-try")){ const p=TOPICS[QZ.topic]; if(p) showTab(p.p); }
});

/* practice tabs */
function showTab(name){
  ["breath","signal","thought"].forEach(n=>{ document.getElementById("tab-"+n).setAttribute("aria-selected", n===name); document.getElementById("pp-"+n).hidden = n!==name; });
  if(name!=="breath") brStop(false);
}
document.querySelector(".pr-tabs").addEventListener("click", e=>{ const b=e.target.closest("[data-tab]"); if(b) showTab(b.dataset.tab); });
document.querySelector(".pr-tabs").addEventListener("keydown", e=>{
  if(e.key!=="ArrowRight" && e.key!=="ArrowLeft") return;
  const tabs=[...document.querySelectorAll(".pr-tabs [role=tab]")]; let i=tabs.findIndex(x=>x.getAttribute("aria-selected")==="true");
  i=(i+(e.key==="ArrowRight"?1:-1)+3)%3; if(document.documentElement.dir==="rtl") {}
  showTab(tabs[i].dataset.tab); tabs[i].focus();
});

/* breathing */
const BR = {mode:"box", run:false, timer:null, left:120, phase:0, sec:0};
const BR_PAT = {box:[["b_in",4],["b_hold",4],["b_out",4],["b_hold",4]], "478":[["b_in",4],["b_hold",7],["b_out",8]]};
const brEl = id => document.getElementById(id);
function brPaint(){
  brEl("br-go").innerHTML = (BR.run?'<svg viewBox="0 0 24 24" aria-hidden="true" class="pl"><rect x="6" y="5" width="4.5" height="14" rx="1"/><rect x="13.5" y="5" width="4.5" height="14" rx="1"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true" class="pl"><path d="M7 4.5v15l12-7.5z"/></svg>')+"<span>"+esc(FX(BR.run ? "b_stop" : "b_start"))+"</span>";
  brEl("br-time").textContent = Math.floor(BR.left/60)+":"+String(BR.left%60).padStart(2,"0");
  if(!BR.run){ brEl("br-phase").textContent=""; brEl("br-count").textContent=""; if(!brEl("br-done").hidden) brEl("br-msg").textContent=""; else brEl("br-msg").textContent=FX("b_ready"); }
  document.querySelectorAll(".br-modes .chip").forEach(c=>c.setAttribute("aria-pressed", c.dataset.mode===BR.mode));
}
function brPhase(){
  const [k,s]=BR_PAT[BR.mode][BR.phase]; const c=brEl("br-circle");
  brEl("br-phase").textContent=FX(k); BR.sec=s; brEl("br-count").textContent=s;
  c.style.transitionDuration = s+"s";
  if(k==="b_in") c.style.transform="scale(1)"; else if(k==="b_out") c.style.transform="scale(.55)";
}
function brTick(){
  BR.left--; BR.sec--;
  if(BR.left<=0){ brStop(true); return; }
  if(BR.sec<=0){ BR.phase=(BR.phase+1)%BR_PAT[BR.mode].length; brPhase(); } else brEl("br-count").textContent=BR.sec;
  brEl("br-time").textContent = Math.floor(BR.left/60)+":"+String(BR.left%60).padStart(2,"0");
}
function brStart(){ BR.run=true; BR.left=120; BR.phase=0; brEl("br-done").hidden=true; brEl("br-msg").textContent=""; brPhase(); BR.timer=setInterval(brTick,1000); brPaint(); }
function brStop(done){
  clearInterval(BR.timer); BR.timer=null; const wasRun=BR.run; BR.run=false; const c=brEl("br-circle"); c.style.transitionDuration="1s"; c.style.transform="scale(.55)";
  if(done && wasRun){ BR.left=0; const d=brEl("br-done"); d.hidden=false; d.innerHTML=`<p>${esc(FX("b_done"))}</p><span>${esc(FX("b_more"))}</span><div class="row">${appBtn(APPS[2])}<a class="btn sm" href="https://t.me/nikolayintuition" target="_blank" rel="noopener">${esc(FX("tg_follow"))}</a></div>`; }
  if(!done) BR.left=120;
  brPaint();
}
brEl("br-go").addEventListener("click", ()=> BR.run ? brStop(false) : brStart());
document.querySelector(".br-modes").addEventListener("click", e=>{ const c=e.target.closest(".chip"); if(!c) return; BR.mode=c.dataset.mode; if(BR.run){ brStop(false); } brPaint(); });

/* first signal */
const SG = {round:1, score:0, target:0, busy:false};
function sgDeal(){
  SG.target=Math.floor(Math.random()*4); SG.busy=false;
  brEl("sg-round").textContent=FX("s_round").replace("{n}",SG.round); brEl("sg-msg").textContent="";
  brEl("sg-cards").innerHTML=[0,1,2,3].map(i=>`<button type="button" class="sg-card" data-i="${i}" aria-label="${i+1}"><span class="cb">${LOTUS}</span></button>`).join("");
}
function sgReset(){ SG.round=1; SG.score=0; brEl("sg-done").hidden=true; brEl("sg-cards").hidden=false; brEl("sg-round").hidden=false; sgDeal(); }
brEl("sg-cards").addEventListener("click", e=>{
  const b=e.target.closest(".sg-card"); if(!b||SG.busy) return; SG.busy=true;
  const pick=+b.dataset.i, hit=pick===SG.target; if(hit) SG.score++;
  brEl("sg-cards").querySelectorAll(".sg-card").forEach((c,i)=>{ c.disabled=true; c.classList.add("open"); c.textContent=""; if(i===SG.target){ c.classList.add("win"); c.innerHTML=SUN; } if(i===pick) c.classList.add("picked"); });
  brEl("sg-msg").textContent=FX(hit?"s_hit":"s_miss");
  setTimeout(()=>{
    if(SG.round>=10){ brEl("sg-cards").hidden=true; brEl("sg-round").hidden=true; brEl("sg-msg").textContent="";
      const d=brEl("sg-done"); d.hidden=false; d.innerHTML=`<p>${esc(FX("s_score").replace("{n}",SG.score))}</p><span>${esc(FX("s_note"))}</span><span>${esc(FX("s_more"))}</span><div class="row">${appBtn(APPS[0])}<button type="button" class="btn sm" id="sg-again">${esc(FX("s_again"))}</button></div>`;
    } else { SG.round++; sgDeal(); }
  }, 1300);
});
document.addEventListener("click", e=>{ if(e.target.closest("#sg-again")) sgReset(); });

/* let the thought go */
const TH_ILL="/img/723a87e794.webp";
const TH = {step:0, word:""};
function renderThought(){
  const el=brEl("th"); if(!el) return;
  const dots=`<div class="th-dots">${[1,2,3,4].map(i=>`<i class="${i<=TH.step?'on':''}"></i>`).join("")}</div>`;
  const nextBtn=`<button type="button" class="btn gold" id="th-next">${esc(FX("th_next"))}</button>`;
  if(TH.step===0) el.innerHTML=`<p class="th-q th-intro">${esc(FX("th_intro"))}</p><div class="th-ill"><img loading="lazy" decoding="async" src="${TH_ILL}" alt=""></div><button type="button" class="pr-go" id="th-next"><svg viewBox="0 0 24 24" aria-hidden="true" class="pl"><path d="M7 4.5v15l12-7.5z"/></svg><span>${esc(FX("th_begin"))}</span></button>`;
  else if(TH.step===1) el.innerHTML=`${dots}<p class="th-q">${esc(FX("th_1"))}</p><input id="th-word" maxlength="40" placeholder="${esc(FX("th_ph"))}" value="${esc(TH.word)}">${nextBtn}`;
  else if(TH.step===2) el.innerHTML=`${dots}<p class="th-q">${esc(FX("th_2"))}</p>${nextBtn}`;
  else if(TH.step===3) el.innerHTML=`${dots}<p class="th-q">${esc(FX("th_3"))}</p><div class="th-float"><span class="th-word">${esc(TH.word||"…")}</span></div>${nextBtn}`;
  else if(TH.step===4) el.innerHTML=`${dots}<p class="th-q">${esc(FX("th_4"))}</p>${nextBtn}`;
  else el.innerHTML=`<div class="pr-done"><p>${esc(FX("th_done"))}</p><span>${esc(FX("th_more"))}</span><div class="row">${buyBtn(BOOKS[0])}<button type="button" class="btn sm" id="th-again">${esc(FX("s_again"))}</button></div></div>`;
}
document.addEventListener("click", e=>{
  if(e.target.closest("#th-next")){ const w=document.getElementById("th-word"); if(w) TH.word=w.value.trim(); TH.step++; renderThought(); const i=document.getElementById("th-word"); if(i) i.focus(); return; }
  if(e.target.closest("#th-again")){ TH.step=0; TH.word=""; renderThought(); }
});
document.addEventListener("keydown", e=>{ if(e.key==="Enter" && e.target.id==="th-word"){ e.preventDefault(); document.getElementById("th-next").click(); } });

/* paths */
function renderPaths(){
  const el=document.getElementById("paths-list"); if(!el) return;
  el.innerHTML=PATHS.map(p=>{ const b=BOOKS[p.b], a=APPS[p.a], c=COURSES[p.c];
    return `<article class="path"><h3>${esc(FX(p.t))}</h3><ol>
      <li>${cov(b)?`<img loading="lazy" decoding="async" class="book" src="${cov(b)}" alt="">`:`<span class="cv">📖</span>`}<div><small>${esc(FX("step_book"))}</small><b>${esc(b[lang].t)}</b></div></li>
      <li>${appIcon(a)}<div><small>${esc(FX("step_app"))}</small><b>${esc(a.n)}</b></div></li>
      <li><span class="cv">✦</span><div><small>${esc(FX("step_course"))}</small><b>${esc(c[lang][0])}</b></div></li>
    </ol><div class="go">${b.url||b.urlRu ? buyBtn(b).replace(/>[^<]*<\/a>$/, `>${esc(FX("path_start"))}</a>`) : ""}</div></article>`; }).join("");
}

function renderFeat(){
  document.querySelectorAll("[data-f]").forEach(el=>{ el.textContent=FX(el.dataset.f); });
  renderQuiz(); brPaint(); renderPaths(); renderThought();
  if(!brEl("sg-cards").children.length) sgReset(); else { brEl("sg-round").textContent=FX("s_round").replace("{n}",SG.round); }
}
const __render = render; render = function(){ __render(); renderFeat(); };

const FEAT={"en": {"nav_start": "Start here", "start_cta": "Not sure where to start? Find your next step in 30 seconds", "q_eyebrow": "Start here", "q_title": "Find your next step in 30 seconds", "q_lead": "Answer three quick questions and get a personal recommendation: a book, an app and a practice.", "q_step": "Question {n} of 3", "q1": "What troubles you most right now?", "q2": "How do you prefer to make changes?", "q3": "How much time can you give it each day?", "t_overthink": "My thoughts keep going in circles", "t_worry": "I worry and expect the worst", "t_decide": "It's hard to make decisions", "t_intuition": "I don't trust my intuition", "t_habits": "Bad habits and too much phone time", "t_stress": "Stress and tension", "t_goals": "I feel stuck and lack self-belief", "t_weight": "Weight and healthy eating", "f_book": "Read a book", "f_app": "Practice with an app", "f_course": "Follow a guided program", "m_2": "2–5 minutes", "m_15": "10–15 minutes", "m_30": "30 minutes or more", "q_back": "Back", "q_restart": "Start over", "r_title": "Your next step", "r_best": "Best match for you", "r_tip_2": "Even 2–5 minutes a day works. Start with a short daily practice in the app.", "r_tip_15": "10–15 minutes a day is enough for real change: one chapter or one exercise at a time.", "r_tip_30": "With 30 minutes a day you can combine all three: read, practice and follow the program.", "r_try": "Try a free 2-minute practice now", "r_book": "Book", "r_app": "App", "r_course": "Program", "p_eyebrow": "Free practice", "p_title": "Try it free — 2 minutes, right here", "p_lead": "Three short exercises from my books and apps. No installation, no sign-up.", "p_tab_breath": "Calm breathing", "p_tab_signal": "First signal", "p_tab_thought": "Let the thought go", "b_box": "Box 4-4-4-4", "b_478": "4-7-8", "b_start": "Start", "b_stop": "Stop", "b_in": "Inhale", "b_hold": "Hold", "b_out": "Exhale", "b_ready": "Sit comfortably, relax your shoulders and press Start", "b_left": "Time left", "b_done": "Well done. Notice how your body feels now.", "b_more": "Guided sessions, voice prompts and progress stats are in BREATH PRANA MOMENT.", "s_intro": "Four cards lie face down. One of them hides the sun. Don't think — tap the first card your hand reaches for.", "s_round": "Round {n} of 10", "s_hit": "Yes! You felt it.", "s_miss": "Not this time. Notice what you felt just before choosing.", "s_score": "Your result: {n} of 10. Random guessing averages 2–3.", "s_note": "This is a game, not a test. What matters is learning to notice your first impulse.", "s_again": "Play again", "s_more": "Train your first signal every day in INTUITION TRAINER.", "th_intro": "A 60-second exercise from the book “Thoughts in Circles”.", "th_1": "Name the thought that keeps coming back — in one or two words.", "th_ph": "for example: work, money, that conversation", "th_2": "Say to yourself: “This is just a thought. I don't have to continue it.”", "th_3": "Watch it float away. You don't push it away — you simply don't follow it.", "th_4": "Come back to now: name three things you can see around you.", "th_next": "Next", "th_begin": "Begin", "th_done": "A thought doesn't need to be defeated. You can simply not continue it.", "th_more": "The full method and a 30-day program are in the book.", "paths_eyebrow": "Ready-made paths", "paths_title": "Choose your path", "paths_lead": "A book to understand, an app to practice every day, a program to make the change last.", "path1": "From racing thoughts to calm", "path2": "From doubt to confident decisions", "path3": "From stress to inner balance", "path_start": "Start with the book", "step_book": "Understand", "step_app": "Practice", "step_course": "Make it a habit", "tg_follow": "Get new free practices on Telegram"}, "mr": {"nav_start": "येथून सुरुवात करा", "start_cta": "कुठून सुरुवात करावी कळत नाही? 30 सेकंदांत पुढचे पाऊल शोधा", "q_eyebrow": "येथून सुरुवात करा", "q_title": "30 सेकंदांत पुढचे पाऊल शोधा", "q_lead": "तीन छोट्या प्रश्नांची उत्तरे द्या आणि वैयक्तिक शिफारस मिळवा: एक पुस्तक, एक ॲप आणि एक सराव.", "q_step": "प्रश्न {n} / 3", "q1": "सध्या तुम्हाला सर्वात जास्त काय त्रास देत आहे?", "q2": "तुम्हाला बदल कसे करायला आवडतात?", "q3": "रोज यासाठी किती वेळ देऊ शकता?", "t_overthink": "माझे विचार गोल गोल फिरत राहतात", "t_worry": "मी चिंता करतो आणि वाईटाचीच अपेक्षा करतो", "t_decide": "निर्णय घेणे कठीण जाते", "t_intuition": "माझा माझ्या अंतर्ज्ञानावर विश्वास नाही", "t_habits": "वाईट सवयी आणि फोनवर जास्त वेळ", "t_stress": "ताण आणि तणाव", "t_goals": "मी अडकलो आहे, स्वतःवर विश्वास नाही", "t_weight": "वजन आणि आरोग्यदायी आहार", "f_book": "पुस्तक वाचून", "f_app": "ॲपमध्ये सराव करून", "f_course": "मार्गदर्शित कार्यक्रम पाळून", "m_2": "2–5 मिनिटे", "m_15": "10–15 मिनिटे", "m_30": "30 मिनिटे किंवा अधिक", "q_back": "मागे", "q_restart": "पुन्हा सुरू करा", "r_title": "तुमचे पुढचे पाऊल", "r_best": "तुमच्यासाठी सर्वात योग्य", "r_tip_2": "दिवसाला 2–5 मिनिटेही पुरेशी आहेत. ॲपमधील छोट्या रोजच्या सरावाने सुरुवात करा.", "r_tip_15": "खऱ्या बदलासाठी दिवसाला 10–15 मिनिटे पुरेशी: एका वेळी एक प्रकरण किंवा एक व्यायाम.", "r_tip_30": "दिवसाला 30 मिनिटे असतील तर तिन्ही एकत्र करा: वाचा, सराव करा आणि कार्यक्रम पाळा.", "r_try": "आत्ताच 2 मिनिटांचा मोफत सराव करून पाहा", "r_book": "पुस्तक", "r_app": "ॲप", "r_course": "कार्यक्रम", "p_eyebrow": "मोफत सराव", "p_title": "मोफत करून पाहा — 2 मिनिटे, इथेच", "p_lead": "माझ्या पुस्तकांतून आणि ॲप्समधून तीन छोटे व्यायाम. इन्स्टॉल किंवा नोंदणीची गरज नाही.", "p_tab_breath": "शांत श्वास", "p_tab_signal": "पहिला संकेत", "p_tab_thought": "विचाराला जाऊ द्या", "b_box": "बॉक्स 4-4-4-4", "b_478": "4-7-8", "b_start": "सुरू करा", "b_stop": "थांबा", "b_in": "श्वास घ्या", "b_hold": "रोखा", "b_out": "श्वास सोडा", "b_ready": "आरामात बसा, खांदे सैल करा आणि सुरू करा दाबा", "b_left": "उरलेला वेळ", "b_done": "छान. आता शरीराला कसे वाटते याकडे लक्ष द्या.", "b_more": "मार्गदर्शित सत्रे, आवाजातील सूचना आणि प्रगतीची आकडेवारी BREATH PRANA MOMENT मध्ये आहे.", "s_intro": "चार कार्डे उलटी ठेवली आहेत. त्यापैकी एकाखाली सूर्य लपला आहे. विचार करू नका — ज्या कार्डकडे हात आधी जातो त्यावर टॅप करा.", "s_round": "फेरी {n} / 10", "s_hit": "होय! तुम्हाला जाणवले.", "s_miss": "या वेळी नाही. निवड करण्याआधी काय जाणवले त्याकडे लक्ष द्या.", "s_score": "तुमचा निकाल: 10 पैकी {n}. अंदाजाने सरासरी 2–3 येतात.", "s_note": "हा खेळ आहे, परीक्षा नाही. महत्त्वाचे म्हणजे पहिली प्रेरणा ओळखायला शिकणे.", "s_again": "पुन्हा खेळा", "s_more": "INTUITION TRAINER मध्ये रोज पहिल्या संकेताचे प्रशिक्षण घ्या.", "th_intro": "“Thoughts in Circles” पुस्तकातील 60 सेकंदांचा व्यायाम.", "th_1": "पुन्हा पुन्हा येणाऱ्या विचाराला नाव द्या — एक-दोन शब्दांत.", "th_ph": "उदा.: काम, पैसा, ते संभाषण", "th_2": "स्वतःला सांगा: “हा फक्त एक विचार आहे. मला तो पुढे चालू ठेवायची गरज नाही.”", "th_3": "तो तरंगत दूर जाताना पाहा. तुम्ही त्याला ढकलत नाही — फक्त त्याच्या मागे जात नाही.", "th_4": "आत्ताकडे परत या: आजूबाजूला दिसणाऱ्या तीन गोष्टींची नावे सांगा.", "th_next": "पुढे", "th_begin": "सुरू करा", "th_done": "विचाराला हरवण्याची गरज नाही. तुम्ही फक्त तो पुढे चालू ठेवू नका.", "th_more": "संपूर्ण पद्धत आणि 30 दिवसांचा कार्यक्रम पुस्तकात आहे.", "paths_eyebrow": "तयार मार्ग", "paths_title": "तुमचा मार्ग निवडा", "paths_lead": "समजून घेण्यासाठी पुस्तक, रोज सरावासाठी ॲप, बदल टिकवण्यासाठी कार्यक्रम.", "path1": "धावणाऱ्या विचारांपासून शांततेकडे", "path2": "शंकेपासून आत्मविश्वासपूर्ण निर्णयांकडे", "path3": "ताणापासून आंतरिक संतुलनाकडे", "path_start": "पुस्तकाने सुरुवात करा", "step_book": "समजून घ्या", "step_app": "सराव करा", "step_course": "सवय बनवा", "tg_follow": "Telegram वर नवीन मोफत सराव मिळवा"}};
function renderStory(){
  const el=document.getElementById("story"); if(!el || typeof STORY==="undefined") return;
  const S=STORY[lang]||STORY.en;
  let html=`<div class="eyebrow">${esc(S.eyebrow)}</div><h3 class="st-title">${esc(S.title)}</h3><div class="stats">${S.stats.map(([n,l])=>`<div class="stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}</div>`;
  S.blocks.forEach(b=>{
    if(b.p) html+=`<p>${esc(b.p)}</p>`;
    else if(b.h) html+=`<h4>${esc(b.h)}</h4>`;
    else if(b.ul) html+=`<ul class="st-q">${b.ul.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
    else if(b.books) html+=`<ul class="st-items">${b.books.map(([i,tx])=>{ const B=BOOKS[i]; if(!B) return ""; const c=cov(B); return `<li>${c?`<img loading="lazy" decoding="async" class="book" src="${c}" alt="">`:"<span></span>"}<p><b>${esc(B[lang].t)}</b>${/^[：:]/.test(tx)?"":" "}${esc(tx)}</p></li>`; }).join("")}</ul>`;
    else if(b.apps) html+=`<ul class="st-items">${b.apps.map(([i,tx])=>{ const A=APPS[i]; if(!A) return ""; return `<li>${appIcon(A)}<p><b>${esc(A.n)}</b>${/^[：:]/.test(tx)?"":" "}${esc(tx)}</p></li>`; }).join("")}</ul>`;
    else if(b.final) html+=`<blockquote class="st-final">${b.final.map(x=>`<span>${esc(x)}</span>`).join("")}</blockquote>`;
  });
  el.innerHTML=html;
}
const __render2 = render; render = function(){ __render2(); renderStory(); };
const STORY={"en": {"eyebrow": "My story", "title": "More than 20 years of personal experience, turned into books, practices and apps", "stats": [["20+", "years of personal practice"], ["15+", "years of changing how I eat"], ["7", "books"], ["13", "apps"], ["30", "days in hands-on programs"], ["20", "site languages"]], "blocks": [{"p": "My name is Nikolay Shcherbakov. I write books about thinking, intuition, mindfulness, habits and personal change, and I create practical mobile apps."}, {"p": "My journey didn't begin with a wish to write books. It began with a wish to understand myself better — my thoughts, and what a person is truly capable of."}, {"p": "For more than 20 years I have been studying and practicing meditation, breathwork, affirmations, attention techniques and self-observation."}, {"p": "I have always been drawn to questions like these:"}, {"ul": ["Why do some thoughts help us move forward, while others keep us trapped in endless doubt?", "Why do we so often worry about a future that hasn't even arrived yet?", "Can we learn to hear our intuition more clearly?", "How do small daily actions gradually change our lives?"]}, {"p": "I didn't want to stop at beautiful theories. It mattered to me to test ideas against my own experience, watch the results, notice my mistakes and find what truly works in everyday life."}, {"h": "Why I started writing books"}, {"p": "Over time I gathered observations, exercises and practical methods that I wanted to share."}, {"p": "That is how my books came about — on intuition, decision-making, affirmations, intrusive thoughts and fear of the future. Each book is devoted to one specific problem."}, {"books": [[3, "helps you learn to notice the first inner signal."], [4, "— about the moments when fear and doubt get in the way of making a decision."], [2, "shares my many years of experience working with affirmations."], [0, "helps you relate differently to recurring thoughts, without getting pulled into an endless argument with them."], [1, "— about anxiety over the future and the skill of bringing your attention back to the present."]]}, {"p": "My experience of changing how I eat holds a special place. For more than 15 years I have lived without many everyday foods. This path has given me a chance to observe how habits, well-being and my relationship with my own body change."}, {"p": "I don't write to promise instant transformation. I write to give people clear tools they can practice on their own."}, {"h": "Why I started creating apps"}, {"p": "At some point I realized that reading a book isn't enough. We can learn a useful technique or feel inspired by a new idea, and a few days later slip back into old habits."}, {"p": "That's where the idea came from: mobile apps that help carry knowledge into everyday life. You don't need to reread a whole chapter every time to remember your breathing, your attention or how to make a decision. You can open the app, do a short practice and get on with your day."}, {"apps": [[1, "— to bring your attention back to the present moment."], [2, "— to use breathing practices to relax and restore a sense of calm."], [0, "— to train your attention to the first intuitive answer."], [3, "— to make decisions more consciously."], [4, "— to reduce the distracting pull of your phone and take your time back."]]}, {"p": "Gradually, other projects followed, focused on habits, everyday tasks and personal growth."}, {"h": "My core principle"}, {"p": "I'm convinced that change doesn't always require complex systems or hours of practice. Sometimes it's enough to notice a thought, take a few mindful breaths, pause before a habitual reaction or take one small action."}, {"p": "That's why my books and apps are built around simple, practical steps. My goal is to help people get lost in their thoughts less, understand themselves better and find more calm and clarity in everyday life."}, {"p": "I keep learning, experimenting, writing and creating new tools. Because working on yourself isn't a destination — it's a path that continues every single day."}, {"final": ["Don't pay with today for a future that doesn't exist yet.", "Life is happening now.", "And right now is when you can take the next step."]}]}, "mr": {"eyebrow": "माझी कथा", "title": "20 वर्षांहून अधिक वैयक्तिक अनुभव, जो पुस्तके, सराव आणि ॲप्समध्ये बदलला", "stats": [["20+", "वर्षांचा वैयक्तिक सराव"], ["15+", "वर्षे आहारातील बदल"], ["7", "पुस्तके"], ["13", "ॲप्स"], ["30", "दिवसांचे व्यावहारिक कार्यक्रम"], ["20", "साइटच्या भाषा"]], "blocks": [{"p": "माझे नाव निकोलाय श्चेरबाकोव. मी विचार, अंतर्ज्ञान, जागरूकता, सवयी आणि वैयक्तिक बदल याबद्दल पुस्तके लिहितो आणि व्यावहारिक मोबाइल ॲप्स तयार करतो."}, {"p": "माझा प्रवास पुस्तके लिहिण्याच्या इच्छेने सुरू झाला नाही. तो स्वतःला अधिक चांगले समजून घेण्याच्या इच्छेने सुरू झाला — माझे विचार, आणि माणूस खरोखर काय करू शकतो."}, {"p": "20 वर्षांहून अधिक काळ मी ध्यान, श्वासाचे सराव, अफर्मेशन, लक्षाची तंत्रे आणि आत्मनिरीक्षण यांचा अभ्यास आणि सराव करत आहे."}, {"p": "मला नेहमी अशा प्रश्नांनी आकर्षित केले:"}, {"ul": ["काही विचार आपल्याला पुढे जायला मदत का करतात, तर काही अंतहीन शंकेत अडकवतात?", "जे भविष्य अजून आलेच नाही, त्याची आपण इतकी चिंता का करतो?", "आपण आपले अंतर्ज्ञान अधिक स्पष्टपणे ऐकायला शिकू शकतो का?", "रोजच्या छोट्या कृती हळूहळू आयुष्य कसे बदलतात?"]}, {"p": "मला सुंदर सिद्धांतांवर थांबायचे नव्हते. कल्पना स्वतःच्या अनुभवावर तपासणे, परिणाम पाहणे, चुका ओळखणे आणि रोजच्या आयुष्यात खरोखर काय उपयोगी पडते ते शोधणे माझ्यासाठी महत्त्वाचे होते."}, {"h": "मी पुस्तके का लिहू लागलो"}, {"p": "कालांतराने माझ्याकडे निरीक्षणे, व्यायाम आणि व्यावहारिक पद्धती जमा झाल्या, ज्या मला इतरांसोबत वाटायच्या होत्या."}, {"p": "अशा प्रकारे माझी पुस्तके आली — अंतर्ज्ञान, निर्णय घेणे, अफर्मेशन, त्रासदायक विचार आणि भविष्याची भीती यांवर. प्रत्येक पुस्तक एका विशिष्ट समस्येला समर्पित आहे."}, {"books": [[3, "पहिला आतील संकेत ओळखायला शिकवते."], [4, "— त्या क्षणांबद्दल, जेव्हा भीती आणि शंका निर्णयात अडथळा आणतात."], [2, "अफर्मेशनसोबतचा माझा अनेक वर्षांचा अनुभव सांगते."], [0, "पुन्हा येणाऱ्या विचारांशी अंतहीन वादात न अडकता त्यांच्याकडे वेगळ्या नजरेने पाहायला मदत करते."], [1, "— भविष्याची चिंता आणि लक्ष वर्तमानात परत आणण्याच्या कौशल्याबद्दल."]]}, {"p": "आहार बदलण्याचा अनुभव माझ्यासाठी विशेष आहे. 15 वर्षांहून अधिक काळ मी अनेक नेहमीच्या पदार्थांशिवाय जगत आहे. या मार्गाने मला सवयी, आरोग्य आणि स्वतःच्या शरीराशी असलेले नाते कसे बदलते हे पाहण्याची संधी दिली."}, {"p": "मी तात्काळ परिवर्तनाचे वचन देण्यासाठी लिहीत नाही. लोक स्वतः सराव करू शकतील अशी स्पष्ट साधने देण्यासाठी मी लिहितो."}, {"h": "मी ॲप्स का तयार करू लागलो"}, {"p": "एका क्षणी मला जाणवले की फक्त पुस्तक वाचणे पुरेसे नाही. आपण एखादे उपयुक्त तंत्र शिकू शकतो किंवा नव्या कल्पनेने प्रेरित होऊ शकतो, आणि काही दिवसांनी पुन्हा जुन्या सवयींकडे वळतो."}, {"p": "यातूनच कल्पना आली: ज्ञान रोजच्या आयुष्यात आणणारी मोबाइल ॲप्स. श्वास, लक्ष किंवा निर्णयाची आठवण करून घेण्यासाठी प्रत्येक वेळी संपूर्ण प्रकरण पुन्हा वाचण्याची गरज नाही. ॲप उघडा, छोटा सराव करा आणि दिवस पुढे चालू ठेवा."}, {"apps": [[1, "— लक्ष वर्तमान क्षणात परत आणण्यासाठी."], [2, "— श्वासाच्या सरावाने आराम करण्यासाठी आणि शांतता परत मिळवण्यासाठी."], [0, "— पहिल्या अंतर्ज्ञानी उत्तराकडे लक्ष देण्याचे प्रशिक्षण घेण्यासाठी."], [3, "— अधिक जाणीवपूर्वक निर्णय घेण्यासाठी."], [4, "— फोनचे विचलन कमी करून स्वतःचा वेळ परत मिळवण्यासाठी."]]}, {"p": "हळूहळू सवयी, रोजची कामे आणि वैयक्तिक विकासावरचे इतर प्रकल्प आले."}, {"h": "माझे मुख्य तत्त्व"}, {"p": "मला खात्री आहे की बदलासाठी नेहमी गुंतागुंतीच्या प्रणाली किंवा तासन्तास सराव लागत नाही. कधी एखादा विचार ओळखणे, काही जागरूक श्वास घेणे, नेहमीच्या प्रतिक्रियेआधी थांबणे किंवा एक छोटी कृती करणे पुरेसे असते."}, {"p": "म्हणूनच माझी पुस्तके आणि ॲप्स सोप्या, व्यावहारिक पावलांवर आधारित आहेत. लोकांना विचारांत कमी हरवायला, स्वतःला अधिक चांगले समजून घ्यायला आणि रोजच्या आयुष्यात अधिक शांतता व स्पष्टता मिळवायला मदत करणे हे माझे ध्येय आहे."}, {"p": "मी शिकत राहतो, प्रयोग करतो, लिहितो आणि नवी साधने तयार करतो. कारण स्वतःवर काम करणे हे गंतव्य नाही — तो रोज पुढे चालणारा मार्ग आहे."}, {"final": ["जे भविष्य अजून आलेच नाही, त्यासाठी आजच्या दिवसाने किंमत मोजू नका.", "आयुष्य आत्ता घडत आहे.", "आणि आत्ताच तुम्ही पुढचे पाऊल टाकू शकता."]}]}};
BOOKS[0].imgRu="/img/b7c4e3b871.webp";
const EXTRA={"en": {"ed_en": "English edition", "ed_ru": "Russian edition", "read_free": "Read a free excerpt", "android": "Android", "ios_note": "Not on iPhone yet — get the news on Telegram", "back_books": "All books", "pairs": "Goes well with", "copy_link": "Copy link", "link_copied": "Link copied"}, "mr": {"ed_en": "इंग्रजी आवृत्ती", "ed_ru": "रशियन आवृत्ती", "read_free": "मोफत उतारा वाचा", "android": "Android", "ios_note": "iPhone वर अजून नाही — बातम्यांसाठी Telegram पाहा", "back_books": "सर्व पुस्तके", "pairs": "यासोबत छान जुळते", "copy_link": "लिंक कॉपी करा", "link_copied": "लिंक कॉपी झाली"}};
for(const lg in EXTRA){ if(T[lg]) Object.assign(T[lg],EXTRA[lg]); }
const SLUGS=["thoughts-in-circles","what-if-everything-turns-out-well","destiny-to-order","the-intuition-code","the-right-choice","minus-25-kg","open-up-to-your-dreams"];
const BOOK_PAIRS=[[1,0],[2,4],[6,1],[0,2],[3,5],[12,null],[0,2]];
function bookLink(b){ const ru=lang==="ru"&&b.urlRu; return ru?{url:b.urlRu,store:b.storeRu}:{url:b.url,store:b.store}; }
function edPill(b){ const l=bookLink(b); if(!l.url) return ""; return `<span class="ed">${l.store==="Литрес"?"🇷🇺 "+esc(t("ed_ru")):"🇬🇧 "+esc(t("ed_en"))}</span>`; }
function exBtn(b){ const l=bookLink(b); return l.url?`<a class="btn sm ghost2" href="${l.url}" target="_blank" rel="noopener">${esc(t("read_free"))}</a>`:""; }
function renderBookPage(i){
  const b=BOOKS[i], L=b[lang], x=(BOOK_TXT[lang]||BOOK_TXT.en)[i]||{head:"",desc:""}, c=cov(b), pr=BOOK_PAIRS[i]||[];
  const A=APPS[pr[0]], C=pr[1]!=null?COURSES[pr[1]]:null;
  const appCard = A ? (()=>{ const ax=(APP_TXT[lang]||APP_TXT.en)[pr[0]]||{head:"",desc:""}; return `<article class="appc">${appIcon(A)}<div class="appc-b"><b>${esc(A.n)} <span class="plat">${t("android")}</span>${freeTag(A)}</b><h3>${esc(ax.head)}</h3><p>${esc(ax.desc)}</p><div class="appc-a">${appBtn(A)}</div></div></article>`; })() : "";
  const courseCard = C ? `<article class="course"><div class="meta"><span class="pill">${C.d30?t("days30"):t("program")}</span>${C.url?`<span class="pill open">${t("status_open")}</span>`:`<span class="pill soon">${t("status_soon")}</span>`}</div><h3>${esc(C[lang][0])}</h3><p>${esc(C[lang][1])}</p>${C.url?`<div><a class="btn gold sm" href="${C.url}" target="_blank" rel="noopener">${t("join_course")}</a></div>`:""}</article>` : "";
  document.getElementById("bookpage-in").innerHTML = `<a class="bp-back" href="#books"><span class="arr">←</span> ${esc(t("back_books"))}</a>
    <div class="bp"><div class="bp-cov">${c?`<img loading="lazy" decoding="async" src="${c}" alt="${esc(L.t)}">`:genCover(b,i)}</div>
    <div class="bp-main">${edPill(b)}<h1>${esc(L.t)}</h1>${rvBadge(i,true)}<p class="pain">${esc(x.head)}</p><p class="lead">${esc(x.desc)}</p>
      <div class="bp-acts">${buyStack(b,"btn gold")}${exBtn(b)}<button type="button" class="linkbtn" id="bp-copy">🔗 ${esc(t("copy_link"))}</button></div>
      ${L.s?`<p class="sub">${esc(L.s)}</p>`:""}${(L.d||[]).map(p=>`<p class="d">${esc(p)}</p>`).join("")}${L.q?`<blockquote>${esc(L.q)}</blockquote>`:""}
    </div></div>
    ${appCard||courseCard?`<div class="bp-pairs"><h2>${esc(t("pairs"))}</h2><div class="grid">${appCard}${courseCard}</div></div>`:""}`;
  document.title = L.t + " — Nikolay Shcherbakov";
}
let wasBook=false;
function route(){
  const m=location.hash.match(/^#book-([a-z0-9-]+)$/), i=m?SLUGS.indexOf(m[1]):-1;
  document.body.classList.toggle("route-book", i>=0);
  if(i>=0){ location.replace(bookHref(i)); return; renderBookPage(i); if(!wasBook) window.scrollTo(0,0); wasBook=true; return; }
  document.title=__T0;
  if(wasBook){ wasBook=false; const tg=document.getElementById(location.hash.slice(1)); if(tg) tg.scrollIntoView(); }
}
addEventListener("hashchange", route);
document.addEventListener("click", e=>{
  const bb=e.target.closest("[data-book]"); if(!bb) return;
  e.preventDefault(); e.stopPropagation(); location.href=bookHref(+bb.dataset.book);
}, true);
document.addEventListener("click", async e=>{
  const c=e.target.closest("#bp-copy"); if(!c) return;
  try{ await navigator.clipboard.writeText(location.href); c.textContent="✓ "+t("link_copied"); }catch(err){ c.textContent=location.href; }
});
const __render3 = render; render = function(){ __render3(); rvSummary(); if(document.body.classList.contains("route-book")) route(); };

APPS.forEach(a=>{ if(a.n==="FIGURE OUT WHY"){ a.img="/img/a69e9fd36a.webp"; a.url="https://play.google.com/store/apps/details?id=com.nikolay.why"; } });
const ML_TXT={"en": {"ml_title": "Free practices by email", "ml_lead": "Short exercises, new books and apps — about twice a month.", "ml_ph": "Your email", "ml_btn": "Subscribe", "ml_ok": "Almost done! Check your inbox and confirm your subscription.", "ml_note": "No spam. Unsubscribe anytime.", "ml_bad": "Enter a valid email address.", "ml_err": "Couldn't subscribe right now. Please try again later or join on Telegram."}, "mr": {"ml_title": "ईमेलवर मोफत सराव", "ml_lead": "छोटे व्यायाम, नवीन पुस्तके आणि ॲप्स — महिन्यातून साधारण दोनदा.", "ml_ph": "तुमचा ईमेल", "ml_btn": "सदस्य व्हा", "ml_ok": "जवळजवळ झाले! इनबॉक्स तपासा आणि सदस्यत्वाची पुष्टी करा.", "ml_note": "स्पॅम नाही. कधीही सदस्यत्व रद्द करा.", "ml_bad": "योग्य ईमेल पत्ता लिहा.", "ml_err": "सध्या सदस्य होता आले नाही. नंतर पुन्हा प्रयत्न करा किंवा Telegram वर सामील व्हा."}};
for(const lg in ML_TXT){ if(T[lg]) Object.assign(T[lg],ML_TXT[lg]); }
const ML_URL="https://assets.mailerlite.com/jsonp/2795156/forms/204109170489689154/subscribe";
(function(){
  const f=document.getElementById("ml-form"); if(!f) return;
  const inp=document.getElementById("ml-email"), msg=document.getElementById("ml-msg"), btn=document.getElementById("ml-btn");
  const paintPh=()=>{ inp.placeholder=t("ml_ph"); };
  const __r=render; render=function(){ __r(); paintPh(); };
  paintPh();
  f.addEventListener("submit", async e=>{
    e.preventDefault();
    const em=inp.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){ msg.className="ml-msg err"; msg.textContent=t("ml_bad"); inp.focus(); return; }
    btn.disabled=true; msg.className="ml-msg"; msg.textContent="…";
    const body=new URLSearchParams({"fields[email]":em,"ml-submit":"1","anticsrf":"true"});
    try{
      await fetch(ML_URL,{method:"POST",mode:"no-cors",body});
      f.classList.add("done"); msg.className="ml-msg ok"; msg.textContent=t("ml_ok");
    }catch(err){
      msg.className="ml-msg err"; msg.innerHTML=esc(t("ml_err"))+' <a href="https://t.me/nikolayintuition" target="_blank" rel="noopener">Telegram →</a>';
    }finally{ btn.disabled=false; }
  });
})();

const CT_TXT={"en": {"ct_note": "Write to me — I read every message.", "ct_mail": "Email me", "ct_copy": "Copy address", "ct_copied": "Address copied", "ct_tg": "Or follow the Telegram channel"}, "mr": {"ct_note": "मला लिहा — मी प्रत्येक संदेश वाचतो.", "ct_mail": "ईमेल करा", "ct_copy": "पत्ता कॉपी करा", "ct_copied": "पत्ता कॉपी झाला", "ct_tg": "किंवा Telegram चॅनेल फॉलो करा"}};
for(const lg in CT_TXT){ if(T[lg]) Object.assign(T[lg],CT_TXT[lg]); }
document.getElementById("ct-copy")?.addEventListener("click", async e=>{
  const b=e.currentTarget, a="hello@nikolayshcherbakov.com";
  try{ await navigator.clipboard.writeText(a); b.textContent="✓ "+t("ct_copied"); setTimeout(()=>{ b.textContent=t("ct_copy"); },2500); }
  catch(err){ const r=document.createRange(); r.selectNodeContents(document.getElementById("ct-addr")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }
});

const CF_TXT={"en": {"cf_sending": "Sending…", "cf_ok": "Thank you! Your message has been sent. I'll reply to your email.", "cf_fail": "Couldn't send the message. Please try again later or write to me on Telegram.", "cf_tg": "Or write on Telegram"}, "mr": {"cf_sending": "पाठवत आहे…", "cf_ok": "धन्यवाद! तुमचा संदेश पाठवला गेला. मी तुमच्या ईमेलवर उत्तर देईन.", "cf_fail": "संदेश पाठवता आला नाही. नंतर पुन्हा प्रयत्न करा किंवा मला Telegram वर लिहा.", "cf_tg": "किंवा Telegram वर लिहा"}};
for(const lg in CF_TXT){ if(T[lg]) Object.assign(T[lg],CF_TXT[lg]); }
(function(){
  const f=document.getElementById("contact-form"); if(!f) return;
  const msg=document.getElementById("cf-msg"), btn=document.getElementById("cf-btn");
  f.addEventListener("submit", async e=>{
    e.preventDefault();
    const name=f.name.value.trim(), email=f.email.value.trim(), text=f.message.value.trim();
    if(!name || !text || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){ msg.className="cf-msg err"; msg.textContent=t("f_err"); return; }
    if(document.getElementById("cf-bot").checked) return;
    btn.disabled=true; msg.className="cf-msg"; msg.textContent=t("cf_sending");
    try{
      const r=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({access_key:"b9e900ae-aaca-4c7c-9569-b0e3089bacbb",subject:"Сообщение с сайта nikolayshcherbakov.com",from_name:"nikolayshcherbakov.com",name,email,message:text,language:lang,botcheck:false})});
      const d=await r.json().catch(()=>({}));
      if(!r.ok || d.success===false) throw new Error(d.message||r.status);
      f.classList.add("done"); msg.className="cf-msg ok"; msg.textContent=t("cf_ok"); f.reset();
    }catch(err){ msg.className="cf-msg err"; msg.textContent=t("cf_fail"); }
    finally{ btn.disabled=false; }
  });
})();

/* GoatCounter: private stats — outbound clicks and book pages */
(function(){
  const gc=(path,title)=>{ try{ if(window.goatcounter && window.goatcounter.count) window.goatcounter.count({path,title,event:true}); }catch(e){} };
  const slug=s=>String(s||"").toLowerCase().replace(/[^a-z0-9а-яё]+/gi,"-").replace(/^-|-$/g,"").slice(0,60);
  document.addEventListener("click", e=>{
    const a=e.target.closest("a[href]"); if(!a) return;
    const u=a.href; let kind=null;
    if(/play\.google\.com/.test(u)) kind="google-play";
    else if(/litres\.ru/.test(u)) kind="litres";
    else if(/(^https?:\/\/)?(a\.co|[^\/]*amazon\.)/.test(u)) kind="amazon";
    else if(/t\.me\//.test(u)) kind="telegram";
    if(!kind) return;
    let what="";
    const card=a.closest(".appc,.qz-card,.bookc,.bp,.path,.st-items li");
    if(kind==="google-play"){ const m=u.match(/id=([\w.]+)/); what=m?m[1].replace(/^com\.(nikolay\.)?/,""):""; }
    else if(kind==="telegram"){ what=u.split("t.me/")[1]||""; }
    else { const b=card&&card.querySelector("h1,b,h3"); what=b?b.textContent:""; }
    const where=a.closest("section,[id]"); const from=where?(where.id||""):"";
    gc("click/"+kind+"/"+slug(what), kind+" · "+(what||"")+(from?" · from "+from:""));
  }, true);
  const f1=document.getElementById("ml-form"); if(f1) f1.addEventListener("submit",()=>gc("event/subscribe-email","Email subscription"));
  const f2=document.getElementById("contact-form"); if(f2) f2.addEventListener("submit",()=>gc("event/contact-message","Contact form sent"));
  document.addEventListener("click", e=>{ const o=e.target.closest(".qz-opt"); if(o && o.dataset.k==="time") gc("event/quiz-finished/"+(QZ.topic||""),"Quiz finished: "+(QZ.topic||"")); 
    const tb=e.target.closest(".pr-tabs [data-tab]"); if(tb) gc("event/practice/"+tb.dataset.tab,"Practice opened: "+tb.dataset.tab);
    if(e.target.closest("#br-go") && !BR.run) gc("event/practice/breath-start","Breathing started"); });
  addEventListener("hashchange", ()=>{ const m=location.hash.match(/^#book-([a-z0-9-]+)$/); if(m) setTimeout(()=>{ try{ window.goatcounter&&window.goatcounter.count&&window.goatcounter.count({path:"/book/"+m[1], title:"Book page: "+m[1]}); }catch(e){} },50); });
})();

/* Start language: 1) ?lang= in the ad link, 2) the visitor's earlier choice, 3) the phone's language, 4) English */
function saveLang(){ try{ localStorage.setItem("ns-lang",lang); }catch(err){} }
(function(){
  const ok=c=>LP_LANGS.some(x=>x[0]===c);
  const norm=c=>{ c=String(c||"").toLowerCase().split(/[-_]/)[0]; return ({iw:"he",in:"id",ua:"uk"})[c]||c; };
  if(PATH_LANG && ok(PATH_LANG)){ lang=PATH_LANG; saveLang(); return; }
  let q=""; try{ q=norm(new URLSearchParams(location.search).get("lang")); }catch(err){}
  if(ok(q)){ lang=q; saveLang(); return; }
  let s=""; try{ s=localStorage.getItem("ns-lang")||""; }catch(err){}
  if(ok(s)){ lang=s; return; }
  const list=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language];
  for(const c of list){ const n=norm(c); if(ok(n)){ lang=n; return; } }
  lang="en";
})();
render();
route();

/* On Android phones open Google Play links straight in the Play Store app (market://), with the web page as a fallback */
window.nsGo=window.nsGo||function(u){ location.href=u; };
document.addEventListener("click",function(e){
  if(e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey) return;
  const a=e.target.closest&&e.target.closest('a[href*="play.google.com/store/apps/details"]'); if(!a) return;
  const ua=navigator.userAgent, isAndroid=/Android/i.test(ua)||(navigator.userAgentData&&navigator.userAgentData.platform==="Android")||(/Linux/i.test(ua)&&!/CrOS/i.test(ua)&&navigator.maxTouchPoints>0);
  if(!isAndroid) return;
  let id=""; try{ id=new URL(a.href).searchParams.get("id")||""; }catch(err){} if(!/^[\w.]+$/.test(id)) return;
  e.preventDefault(); const web=a.href; let left=false;
  const onHide=()=>{ if(document.hidden) left=true; }; document.addEventListener("visibilitychange",onHide);
  const inApp=/FBAN|FBAV|FB_IAB|Instagram/i.test(navigator.userAgent);
  window.nsGo(inApp ? "market://details?id="+id
    : "intent://details?id="+id+"#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url="+encodeURIComponent(web)+";end");
  setTimeout(()=>{ document.removeEventListener("visibilitychange",onHide); if(!left && !document.hidden) window.nsGo(web); },1600);
});

/* ===== Promo popup: the app or book of the day =====
   Default for everyone: PROMO_DEFAULT. An ad link can override it: ?promo=<slug>, or ?promo=none to switch it off. */
const PROMO_DEFAULT="phone-detox";
const PROMO_EXTRA={"parent-lock": {"img": "/img/22073441a8.webp", "icons": [["#1E7BF2", "<circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.2\"/><path d=\"M12 7.5V12l3 2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"], ["#7B4DF0", "<rect x=\"5\" y=\"5\" width=\"6\" height=\"6\" rx=\"1.6\" fill=\"#fff\"/><rect x=\"13\" y=\"5\" width=\"6\" height=\"6\" rx=\"1.6\" fill=\"#fff\"/><rect x=\"5\" y=\"13\" width=\"6\" height=\"6\" rx=\"1.6\" fill=\"#fff\"/><rect x=\"13\" y=\"13\" width=\"6\" height=\"6\" rx=\"1.6\" fill=\"#fff\"/>"], ["#20A845", "<path d=\"M12 4l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V7z\" fill=\"#fff\"/><path d=\"M8.8 12.2l2.2 2.2 4.2-4.4\" fill=\"none\" stroke=\"#20A845\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"], ["#F5891A", "<rect x=\"5\" y=\"12\" width=\"3.4\" height=\"7\" rx=\"1\" fill=\"#fff\"/><rect x=\"10.3\" y=\"8\" width=\"3.4\" height=\"11\" rx=\"1\" fill=\"#fff\"/><rect x=\"15.6\" y=\"5\" width=\"3.4\" height=\"14\" rx=\"1\" fill=\"#fff\"/>"], ["#EC3E8F", "<circle cx=\"8.5\" cy=\"7\" r=\"2.4\" fill=\"#fff\"/><circle cx=\"15.5\" cy=\"7\" r=\"2.4\" fill=\"#fff\"/><path d=\"M5 19v-6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v6zM12 19v-6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v6z\" fill=\"#fff\"/>"]], "feats": {"en": ["Screen time control", "App limits", "Safe use", "Reports & stats", "Healthy digital habits"], "ru": ["Контроль экранного времени", "Ограничение приложений", "Безопасное использование", "Отчёты и статистика", "Полезные цифровые привычки"], "uk": ["Контроль екранного часу", "Обмеження застосунків", "Безпечне користування", "Звіти й статистика", "Корисні цифрові звички"], "ar": ["التحكم في وقت الشاشة", "تقييد التطبيقات", "استخدام آمن", "تقارير وإحصاءات", "عادات رقمية صحية"], "zh": ["屏幕时间管理", "应用限制", "安全使用", "报告与统计", "健康的数字习惯"], "fr": ["Contrôle du temps d'écran", "Limites d'applis", "Usage sécurisé", "Rapports et statistiques", "Bonnes habitudes numériques"], "de": ["Bildschirmzeit steuern", "App-Limits", "Sichere Nutzung", "Berichte & Statistik", "Gesunde digitale Gewohnheiten"], "he": ["שליטה בזמן מסך", "הגבלת אפליקציות", "שימוש בטוח", "דוחות וסטטיסטיקה", "הרגלים דיגיטליים בריאים"], "hi": ["स्क्रीन टाइम नियंत्रण", "ऐप सीमाएँ", "सुरक्षित उपयोग", "रिपोर्ट और आँकड़े", "अच्छी डिजिटल आदतें"], "id": ["Kontrol waktu layar", "Batas aplikasi", "Penggunaan aman", "Laporan & statistik", "Kebiasaan digital sehat"], "it": ["Controllo del tempo schermo", "Limiti alle app", "Uso sicuro", "Report e statistiche", "Sane abitudini digitali"], "ja": ["スクリーンタイム管理", "アプリ制限", "安全な使い方", "レポートと統計", "健全なデジタル習慣"], "ko": ["화면 시간 관리", "앱 사용 제한", "안전한 사용", "보고서와 통계", "건강한 디지털 습관"], "pt": ["Controle do tempo de tela", "Limite de apps", "Uso seguro", "Relatórios e estatísticas", "Hábitos digitais saudáveis"], "es": ["Control del tiempo de pantalla", "Límites de apps", "Uso seguro", "Informes y estadísticas", "Hábitos digitales sanos"], "tr": ["Ekran süresi kontrolü", "Uygulama sınırları", "Güvenli kullanım", "Raporlar ve istatistikler", "Sağlıklı dijital alışkanlıklar"], "bn": ["স্ক্রিন টাইম নিয়ন্ত্রণ", "অ্যাপ সীমা", "নিরাপদ ব্যবহার", "রিপোর্ট ও পরিসংখ্যান", "ভালো ডিজিটাল অভ্যাস"], "mr": ["स्क्रीन टाइम नियंत्रण", "ॲप मर्यादा", "सुरक्षित वापर", "अहवाल आणि आकडेवारी", "चांगल्या डिजिटल सवयी"], "te": ["స్క్రీన్ టైమ్ నియంత్రణ", "యాప్ పరిమితులు", "సురక్షిత వినియోగం", "నివేదికలు, గణాంకాలు", "మంచి డిజిటల్ అలవాట్లు"], "ta": ["திரை நேரக் கட்டுப்பாடு", "செயலி வரம்புகள்", "பாதுகாப்பான பயன்பாடு", "அறிக்கைகள், புள்ளிவிவரம்", "நல்ல டிஜிட்டல் பழக்கங்கள்"]}}};
const PROMO_TXT={"en": ["Today's pick", "Download on Google Play", "Maybe later", "Buy the book", "The app is", "FREE", "Choose site language"], "ru": ["Выбор дня", "Скачать в Google Play", "Не сейчас", "Купить книгу", "Приложение", "БЕСПЛАТНОЕ", "Выбрать язык сайта"], "uk": ["Вибір дня", "Завантажити з Google Play", "Не зараз", "Купити книгу", "Застосунок", "БЕЗКОШТОВНИЙ", "Обрати мову сайту"], "ar": ["اختيار اليوم", "التنزيل من Google Play", "ليس الآن", "اشترِ الكتاب", "التطبيق", "مجاني", "اختر لغة الموقع"], "zh": ["今日推荐", "在 Google Play 下载", "以后再说", "购买本书", "应用", "完全免费", "选择网站语言"], "fr": ["Le choix du jour", "Télécharger sur Google Play", "Plus tard", "Acheter le livre", "Application", "GRATUITE", "Choisir la langue"], "de": ["Tipp des Tages", "Bei Google Play laden", "Später", "Buch kaufen", "Die App ist", "KOSTENLOS", "Sprache wählen"], "he": ["הבחירה של היום", "להורדה מ-Google Play", "לא עכשיו", "לקנות את הספר", "האפליקציה", "בחינם", "בחירת שפת האתר"], "hi": ["आज की पसंद", "Google Play से डाउनलोड करें", "अभी नहीं", "किताब खरीदें", "ऐप", "बिल्कुल मुफ़्त", "साइट की भाषा चुनें"], "id": ["Pilihan hari ini", "Unduh di Google Play", "Nanti saja", "Beli bukunya", "Aplikasi", "GRATIS", "Pilih bahasa situs"], "it": ["La scelta di oggi", "Scarica da Google Play", "Più tardi", "Acquista il libro", "App", "GRATUITA", "Scegli la lingua"], "ja": ["今日のおすすめ", "Google Play でダウンロード", "あとで", "本を購入", "アプリは", "無料", "言語を選択"], "ko": ["오늘의 추천", "Google Play에서 다운로드", "나중에", "책 구매하기", "앱", "무료", "사이트 언어 선택"], "pt": ["Escolha do dia", "Baixar no Google Play", "Agora não", "Comprar o livro", "App", "GRATUITO", "Escolher idioma"], "es": ["La elección del día", "Descargar en Google Play", "Ahora no", "Comprar el libro", "App", "GRATIS", "Elegir idioma"], "tr": ["Günün seçimi", "Google Play'den indir", "Şimdi değil", "Kitabı satın al", "Uygulama", "ÜCRETSİZ", "Site dilini seç"], "bn": ["আজকের বাছাই", "Google Play থেকে ডাউনলোড করুন", "এখন নয়", "বইটি কিনুন", "অ্যাপটি", "বিনামূল্যে", "সাইটের ভাষা বাছুন"], "mr": ["आजची निवड", "Google Play वरून डाउनलोड करा", "आत्ता नाही", "पुस्तक खरेदी करा", "ॲप", "मोफत", "साइटची भाषा निवडा"], "te": ["ఈరోజు ఎంపిక", "Google Play నుండి డౌన్‌లోడ్ చేయండి", "ఇప్పుడు కాదు", "పుస్తకం కొనండి", "యాప్", "ఉచితం", "సైట్ భాష ఎంచుకోండి"], "ta": ["இன்றைய தேர்வு", "Google Play-இல் பதிவிறக்குங்கள்", "இப்போது வேண்டாம்", "புத்தகத்தை வாங்குங்கள்", "செயலி", "இலவசம்", "தள மொழியைத் தேர்ந்தெடு"]};
(function(){
  const PT=k=>{ const L=PROMO_TXT[lang]||PROMO_TXT.en; return L[{label:0,dl:1,later:2,buy:3,free1:4,free2:5,lang:6}[k]]; };
  const slugOf=a=>a.n.toLowerCase().replace(/&/g," ").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  let q=""; try{ q=(new URLSearchParams(location.search).get("promo")||"").toLowerCase().trim(); }catch(e){}
  const fromAd=!!q||/[?&](utm_[a-z]+|fbclid|gclid|yclid)=/i.test(location.search); if(!fromAd) return;
  const slug=q||PROMO_DEFAULT; if(!slug||slug==="none") return;
  let item=null;
  const ai=APPS.findIndex(a=>slugOf(a)===slug); if(ai>=0 && APPS[ai].url) item={type:"app",i:ai};
  const bi=SLUGS.indexOf(slug); if(!item && bi>=0) item={type:"book",i:bi};
  if(!item) return;
  const key="ns-promo-"+slug; try{ if(!q && sessionStorage.getItem(key)) return; }catch(e){}
  const gc=(path,title)=>{ try{ if(window.goatcounter&&window.goatcounter.count) window.goatcounter.count({path,title,event:true}); }catch(e){} };
  const d=document.createElement("dialog"); d.id="promo"; d.setAttribute("aria-labelledby","pm-h"); document.body.appendChild(d);
  const PLAY='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 5 3.5z"/></svg>';
  const EX=PROMO_EXTRA[slug]||null;
  function heroOf(){ if(!EX) return ""; const L=EX.feats[lang]||EX.feats.en;
    return `<div class="pm-hero"><img loading="lazy" decoding="async" class="pm-ph" src="${EX.img}" alt=""><ul class="pm-fe">${EX.icons.map((ic,i)=>`<li><span class="ic" style="background:${ic[0]}"><svg viewBox="0 0 24 24" aria-hidden="true">${ic[1]}</svg></span><span>${esc(L[i]||"")}</span></li>`).join("")}</ul></div>`; }
  function langBtn(){ const L=LP_LANGS.find(x=>x[0]===lang); 
    return `<button class="pm-lang" type="button" id="pm-lang" aria-haspopup="dialog"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" fill="none" stroke="currentColor" stroke-width="2"/></svg><span>${esc(PT("lang"))}</span><svg class="cv" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>`; }
  { const __rPromo=render; render=function(){ const r=__rPromo.apply(this,arguments); try{ if(d.open) paint(); }catch(e){} return r; }; }
  function paint(){
    let body="";
    if(item.type==="app"){ const a=APPS[item.i], x=(APP_TXT[lang]||APP_TXT.en)[item.i]||{}, sub=(a[lang]||a.en||[])[0]||"";
      body=`<div class="pm-ic">${appIcon(a)}</div><p class="pm-n">${esc(a.n)}${sub?" · "+esc(sub):""}</p>
        <h2 class="pm-h" id="pm-h">${esc(x.head||"")}</h2>${heroOf()}<p class="pm-d">${esc(x.desc||"")}</p>${isFree(a)?`<div class="pm-free"><span class="ray l" aria-hidden="true"><i></i><i></i><i></i></span><span class="pill"><small>${esc(PT("free1"))}</small><b>${esc(PT("free2"))}</b></span><span class="ray r" aria-hidden="true"><i></i><i></i><i></i></span></div>`:""}
        <a class="btn gold pm-go" id="pm-go" href="${a.url}" target="_blank" rel="noopener">${PLAY}<span>${esc(PT("dl"))}</span><svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`;
    } else { const b=BOOKS[item.i], L=b[lang]||b.en, x=(BOOK_TXT[lang]||BOOK_TXT.en)[item.i]||{};
      body=`<img loading="lazy" decoding="async" class="pm-cv" src="${cov(b)}" alt=""><p class="pm-n">${esc(L.t||b.en.t)}</p>
        <h2 class="pm-h" id="pm-h">${esc(x.head||"")}</h2><p class="pm-d">${esc(x.desc||"")}</p>
        <div id="pm-go">${buyStack(b,"btn gold")}</div>`;
    }
    d.innerHTML=`<div class="pm${EX?" rich":""}" tabindex="-1"><button class="pm-x" type="button" id="pm-x" aria-label="${esc(t("close"))}">×</button>
      <div class="pm-tagw"><svg class="lau" viewBox="0 0 40 48" aria-hidden="true"><path d="M30 46C16 40 9 28 10 8" fill="none" stroke="#D99A1E" stroke-width="2.4" stroke-linecap="round"/><g fill="#E8B23A"><ellipse cx="8" cy="12" rx="3.2" ry="6" transform="rotate(-20 8 12)"/><ellipse cx="17" cy="15" rx="3" ry="6" transform="rotate(50 17 15)"/><ellipse cx="7" cy="22" rx="3.2" ry="6" transform="rotate(-35 7 22)"/><ellipse cx="17" cy="25" rx="3" ry="6" transform="rotate(60 17 25)"/><ellipse cx="10" cy="32" rx="3.2" ry="6" transform="rotate(-50 10 32)"/><ellipse cx="21" cy="35" rx="3" ry="6" transform="rotate(70 21 35)"/></g></svg><span class="pm-tag">${esc(PT("label"))}</span><svg class="lau r" viewBox="0 0 40 48" aria-hidden="true"><path d="M30 46C16 40 9 28 10 8" fill="none" stroke="#D99A1E" stroke-width="2.4" stroke-linecap="round"/><g fill="#E8B23A"><ellipse cx="8" cy="12" rx="3.2" ry="6" transform="rotate(-20 8 12)"/><ellipse cx="17" cy="15" rx="3" ry="6" transform="rotate(50 17 15)"/><ellipse cx="7" cy="22" rx="3.2" ry="6" transform="rotate(-35 7 22)"/><ellipse cx="17" cy="25" rx="3" ry="6" transform="rotate(60 17 25)"/><ellipse cx="10" cy="32" rx="3.2" ry="6" transform="rotate(-50 10 32)"/><ellipse cx="21" cy="35" rx="3" ry="6" transform="rotate(70 21 35)"/></g></svg></div>${body}
      <div class="pm-foot">${langBtn()}<button class="pm-later" type="button" id="pm-later">${esc(PT("later"))}</button></div></div>`;
    const close=()=>{ try{d.close()}catch(e){d.removeAttribute("open")} };
    d.querySelector("#pm-lang").onclick=()=>{ const b=document.getElementById("lang-open"); if(b) b.click(); };
    d.querySelector("#pm-x").onclick=close; d.querySelector("#pm-later").onclick=()=>{ gc("event/promo-later/"+slug,"Promo dismissed: "+slug); close(); };
    d.querySelector("#pm-go").addEventListener("click",e=>{ if(e.target.closest("a")) gc("event/promo-click/"+slug,"Promo click: "+slug); });
  }
  d.addEventListener("click",e=>{ if(e.target===d){ try{d.close()}catch(_){} } });
  setTimeout(()=>{
    if(document.querySelector("dialog[open]")) return;
    paint(); try{ d.showModal(); }catch(e){ d.setAttribute("open",""); } try{ d.querySelector(".pm").focus(); }catch(e){}
    try{ sessionStorage.setItem(key,"1"); }catch(e){}
    gc("event/promo-shown/"+slug,"Promo shown: "+slug);
  }, 1200);
})();
