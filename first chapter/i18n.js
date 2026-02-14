// Система многоязычности (i18n)

const translations = {
    ru: {
        // Навигация
        'nav.home': 'Главная',
        'nav.calendar': 'Календарь',
        'nav.streams': 'Трансляции',
        'nav.teachers': 'Учителям',
        'nav.cabinet': 'Мой кабинет',

        // Кнопки
        'btn.login': 'Войти',
        'btn.register': 'Регистрация',
        'btn.logout': 'Выйти',
        'btn.edit': '✏️ Редактировать профиль',
        'btn.settings': '⚙️ Параметры аккаунта',
        'btn.save': '💾 Сохранить',
        'btn.cancel': '❌ Отмена',
        'btn.back': '⬅️ Вернуться в профиль',
        'btn.teacher': '📚 Кабинет учителя',

        // Заголовки
        'header.title': '🏆 Tanym',
        'header.welcome': 'Добро пожаловать в ваш личный кабинет',
        'header.login': '🔐 Вход в личный кабинет',
        'header.loginForm': '📝 Вход',
        'header.registerForm': '✍️ Регистрация',
        'header.editProfile': '✏️ Редактирование профиля',
        'header.accountSettings': '⚙️ Параметры аккаунта',

        // Формы
        'form.login': 'Введите логин',
        'form.password': 'Введите пароль',
        'form.email': 'Введите ваш email...',
        'form.chooseRole': 'Выберите вашу роль:',
        'form.currentPassword': 'Введите текущий пароль',
        'form.newPassword': 'Введите новый пароль',
        'form.confirmPassword': 'Подтвердите новый пароль',
        'form.newNickname': 'Введите новый никнейм',

        // Роли
        'role.student': '👨‍🎓 Ученик',
        'role.teacher': '👨‍🏫 Учитель',
        'role.display': 'Роль:',

        // Секции профиля
        'profile.photo': '📷 Фото профиля',
        'profile.email': '📧 Email / Gmail',
        'profile.documents': '📄 Документы и сертификаты',
        'profile.achievements': '⭐ Ваши достижения',
        'profile.experience': '📚 Стаж учёбы',
        'profile.passwordChange': '🔐 Смена пароля',
        'profile.nicknameChange': '👤 Смена никнейма',
        'profile.uploadedDocs': 'Загруженные документы:',
        'profile.notSet': 'Не указан',

        // Сообщения
        'msg.savedSuccess': 'Профиль успешно сохранён!',
        'msg.nicknameSuccess': 'Никнейм успешно изменён!',
        'msg.passwordSuccess': 'Пароль успешно изменён!',
        'msg.loginSuccess': 'Вы успешно вошли',
        'msg.registerSuccess': 'Регистрация успешна',
        'msg.loginError': 'Ошибка входа',
        'msg.registerError': 'Ошибка регистрации',
        'msg.fillFields': 'Заполните логин и пароль',
        'msg.fillAllFields': 'Заполните все поля',
        'msg.passwordMismatch': 'Пароли не совпадают',
        'msg.passwordWrongCurrent': 'Текущий пароль неверен',
        'msg.passwordSame': 'Новый пароль должен отличаться от текущего',
        'msg.passwordMinLength': 'Пароль должен быть не менее 4 символов',
        'msg.nicknameError': 'Новый никнейм не должен совпадать с логином',
        'msg.enterNickname': 'Введите новый никнейм',

        // Фильтры
        'filter.title': 'Фильтр поиска',
        'filter.subject': 'Предмет:',
        'filter.grade': 'Класс:',
        'filter.cost': 'Стоимость:',
        'filter.level': 'Уровень:',
        'filter.country': 'Страна:',
        'filter.allSubjects': 'Все предметы',
        'filter.allGrades': 'Все классы',
        'filter.allCosts': 'Все',
        'filter.allLevels': 'Все уровни',
        'filter.allCountries': 'Все страны',
        'filter.reset': 'Сбросить фильтры',
        'filter.city': 'Город:',
        'filter.allCities': 'Все города',

        // Предметы
        'subject.math': 'Математика',
        'subject.physics': 'Физика',
        'subject.chemistry': 'Химия',
        'subject.biology': 'Биология',
        'subject.literature': 'Литература',
        'subject.history': 'История',
        'subject.english': 'Английский язык',
        'subject.informatics': 'Информатика',

        // Классы и уровни
        'grade.5-6': '5-6 классы',
        'grade.7-8': '7-8 классы',
        'grade.9-10': '9-10 классы',
        'grade.11': '11 класс',

        'cost.free': 'Бесплатные',
        'cost.paid': 'Платные',

        'level.world': 'Мировая',
        'level.country': 'Государственная',
        'level.regional': 'Региональная',
        'level.city': 'Городская',

        'country.russia': 'Россия',
        'country.kazakhstan': 'Казахстан',
        'country.belarus': 'Беларусь',
        'country.ukraine': 'Украина',
        'country.usa': 'США',
        'country.china': 'Китай',
        'country.india': 'Индия',
        'country.international': 'Международная',

        // Города (пример для Казахстана)
        'city.astana': 'Астана',
        'city.shymkent': 'Шымкент',
        'city.almaty': 'Алматы',

        // Дополнительные города Казахстана
        'city.nursultan': 'Нур‑Султан',
        'city.karaganda': 'Караганда',
        'city.pavlodar': 'Павлодар',
        'city.taraz': 'Тараз',
        'city.kostanay': 'Костанай',
        'city.aktobe': 'Актобе',
        'city.semey': 'Семей',

        // Метки для карточек
        'label.grades': 'Классы:',
        'label.city': 'Город:',
        'label.start': 'Начало:',
        'label.deadline': 'Дедлайн:',
        'btn.view': 'Подробнее',
        'priority.primary': 'Национальная (Казахстан)',
        'priority.secondary': 'Международная/Другие',

        // Олимпиады — названия и описания
        'olymp.math.national': 'Республиканская олимпиада по математике',
        'olymp.math.desc': 'Национальная олимпиада по математике для старших классов.',
        'olymp.informatics.republic': 'Республиканская олимпиада по информатике',
        'olymp.informatics.desc': 'Соревнование по алгоритмам и программированию.',
        'olymp.physics.south': 'Южный физический турнир',
        'olymp.physics.desc': 'Региональная олимпиада по физике в южных регионах.',
        'olymp.literature.almaty': 'Олимпиада по литературе (Алматы)',
        'olymp.literature.desc': 'Городская олимпиада по литературе для старшеклассников.',
        'olymp.chemistry.kazakh': 'Республиканская олимпиада по химии',
        'olymp.chemistry.desc': 'Национальный этап по химии с теоретическими задачами.',
        'olymp.biology.kazakh': 'Биологическая олимпиада (региональная)',
        'olymp.biology.desc': 'Региональное соревнование по биологии для школьников.',
        'olymp.history.national': 'Республиканская олимпиада по истории',
        'olymp.history.desc': 'Национальная олимпиада по истории Казахстана и мира.',
        'olymp.english.kazakh': 'Олимпиада по английскому языку',
        'olymp.english.desc': 'Соревнование по английскому языку: чтение, аудирование и эссе.',
        'olymp.math.regional.west': 'Региональная математическая олимпиада (Запад)',
        'olymp.math.regional.desc': 'Региональный этап по математике для школьников западных областей.',
        'olymp.competition.semey': 'Городская олимпиада Семей',
        'olymp.semey.desc': 'Местная олимпиада для младших школьников в Семее.',

        // Основной контент
        'section.olympiads': 'Доступные олимпиады',

        // Прочее
        'footer.copyright': '© 2026 Tanym. Все права защищены.',
        'lang.select': '🌍 Язык',
        'lang.russian': 'Русский',
        'lang.kazakh': 'Қазақша',
        'lang.english': 'English',
    },

    kk: {
        // Навигация
        'nav.home': 'Басты',
        'nav.calendar': 'Күнтізбе',
        'nav.streams': 'Трансляциялар',
        'nav.teachers': 'Мұғалімдерге',
        'nav.cabinet': 'Менің кабинетім',

        // Кнопки
        'btn.login': 'Кіру',
        'btn.register': 'Тіркеу',
        'btn.logout': 'Шығу',
        'btn.edit': '✏️ Профильді өңдеу',
        'btn.settings': '⚙️ Есептік жазба параметрлері',
        'btn.save': '💾 Сохранить',
        'btn.cancel': '❌ Болдырмау',
        'btn.back': '⬅️ Профильге қайту',
        'btn.teacher': '📚 Ұстаз кабинеті',

        // Заголовки
        'header.title': '🏆 Tanym',
        'header.welcome': 'Сіздің жеке кабинетіне қош келдіңіз',
        'header.login': '🔐 Жеке кабинетке кіру',
        'header.loginForm': '📝 Кіру',
        'header.registerForm': '✍️ Тіркеу',
        'header.editProfile': '✏️ Профильді өңдеу',
        'header.accountSettings': '⚙️ Есептік жазба параметрлері',

        // Формы
        'form.login': 'Логинді енгізіңіз',
        'form.password': 'Құпия сөзді енгізіңіз',
        'form.email': 'Сіздің электрондық пошта мекенжайын енгізіңіз...',
        'form.chooseRole': 'Өз рөліңізді таңдаңыз:',
        'form.currentPassword': 'Ағымды құпия сөзін енгізіңіз',
        'form.newPassword': 'Жаңа құпия сөзін енгізіңіз',
        'form.confirmPassword': 'Жаңа құпия сөзді растаңыз',
        'form.newNickname': 'Жаңа ник атын енгізіңіз',

        // Роли
        'role.student': '👨‍🎓 Студент',
        'role.teacher': '👨‍🏫 Ұстаз',
        'role.display': 'Рөл:',

        // Секции профиля
        'profile.photo': '📷 Профиль суреті',
        'profile.email': '📧 Электрондық пошта / Gmail',
        'profile.documents': '📄 Құжаттар және сертификаттар',
        'profile.achievements': '⭐ Өз ынамдарымыз',
        'profile.experience': '📚 Оқыту өтілі',
        'profile.passwordChange': '🔐 Құпия сөзді өзгерту',
        'profile.nicknameChange': '👤 Ник атын өзгерту',
        'profile.uploadedDocs': 'Жүктелген құжаттар:',
        'profile.notSet': 'Көрсетілмеген',

        // Сообщения
        'msg.savedSuccess': 'Профиль сәтті сохранені!',
        'msg.nicknameSuccess': 'Nick аты сәтті өзгертілді!',
        'msg.passwordSuccess': 'Құпия сөз сәтті өзгертілді!',
        'msg.loginSuccess': 'Сіз сәтті кірдіңіз',
        'msg.registerSuccess': 'Тіркеу сәтті',
        'msg.loginError': 'Кіру қателігі',
        'msg.registerError': 'Тіркеу қателігі',
        'msg.fillFields': 'Логин және құпия сөзді толтырыңыз',
        'msg.fillAllFields': 'Барлық өрістерді толтырыңыз',
        'msg.passwordMismatch': 'Құпия сөздер сәйкес келмейді',
        'msg.passwordWrongCurrent': 'Ағымы құпия сөз қате',
        'msg.passwordSame': 'Жаңа құпия сөз ағымдыға ұқсамауы керек',
        'msg.passwordMinLength': 'Құпия сөз ең болмағанда 4 таңба болуы керек',
        'msg.nicknameError': 'Жаңа ник аты логинге сәйкес келмеуі керек',
        'msg.enterNickname': 'Жаңа ник атын енгізіңіз',

        // Фильтры
        'filter.title': 'Іздеу сүзгісі',
        'filter.subject': 'Пән:',
        'filter.grade': 'Сынып:',
        'filter.cost': 'Құны:',
        'filter.level': 'Деңгей:',
        'filter.country': 'Елі:',
        'filter.allSubjects': 'Барлық пәндер',
        'filter.allGrades': 'Барлық сыныптар',
        'filter.allCosts': 'Барлығы',
        'filter.allLevels': 'Барлық деңгейлер',
        'filter.allCountries': 'Барлық елдер',
        'filter.reset': 'Сүзгілерді тазарту',
        'filter.city': 'Қала:',
        'filter.allCities': 'Барлық қалалар',

        // Предметы
        'subject.math': 'Математика',
        'subject.physics': 'Физика',
        'subject.chemistry': 'Химия',
        'subject.biology': 'Биология',
        'subject.literature': 'Әдебиет',
        'subject.history': 'Тарих',
        'subject.english': 'Ағылшын тілі',
        'subject.informatics': 'Информатика',

        // Классы и уровни
        'grade.5-6': '5-6 сыныптар',
        'grade.7-8': '7-8 сыныптар',
        'grade.9-10': '9-10 сыныптар',
        'grade.11': '11 сынып',

        'cost.free': 'Бесплатные',
        'cost.paid': 'Ақылы',

        'level.world': 'Өндіктік',
        'level.country': 'Мемлекеттік',
        'level.regional': 'Аумақтық',
        'level.city': 'Қалалық',

        'country.russia': 'Россия',
        'country.kazakhstan': 'Қазақстан',
        'country.belarus': 'Беларусь',
        'country.ukraine': 'Украина',
        'country.usa': 'АҚШ',
        'country.china': 'Қытай',
        'country.india': 'Индия',
        'country.international': 'Халықаралық',

        // Города (казахские)
        'city.astana': 'Астана',
        'city.shymkent': 'Шымкент',
        'city.almaty': 'Алматы',

        // Қосымша қалалар
        'city.nursultan': 'Нұр‑Сұлтан',
        'city.karaganda': 'Қарағанды',
        'city.pavlodar': 'Павлодар',
        'city.taraz': 'Тараз',
        'city.kostanay': 'Қостанай',
        'city.aktobe': 'Ақтөбе',
        'city.semey': 'Семей',

        // Тақырыпшалар мен таңбалар
        'label.grades': 'Сыныптар:',
        'label.city': 'Қала:',
        'label.start': 'Басталуы:',
        'label.deadline': 'Мерзімі:',
        'btn.view': 'Толығырақ',
        'priority.primary': 'Ұлттық (Қазақстан)',
        'priority.secondary': 'Халықаралық/Басқалар',

        // Олимпиадалар — аттары мен сипаттамалары
        'olymp.math.national': 'Математика бойынша республикалық олимпиада',
        'olymp.math.desc': 'Жоғарғы сыныптар үшін ұлттық математика олимпиадасы.',
        'olymp.informatics.republic': 'Информатика бойынша республикалық олимпиада',
        'olymp.informatics.desc': 'Алгоритмдер мен бағдарламалау бойынша жарыс.',
        'olymp.physics.south': 'Оңтүстік физика турнирі',
        'olymp.physics.desc': 'Оңтүстік өңірлердегі аймақтық физика олимпиадасы.',
        'olymp.literature.almaty': 'Әдебиет олимпиадасы (Алматы)',
        'olymp.literature.desc': 'Жоғары сыныптарға арналған қалалық әдебиет олимпиадасы.',
        'olymp.chemistry.kazakh': 'Химия бойынша республикалық олимпиада',
        'olymp.chemistry.desc': 'Теориялық тапсырмалардан тұратын ұлттық кезең.',
        'olymp.biology.kazakh': 'Биология олимпиадасы (аймақтық)',
        'olymp.biology.desc': 'Мектеп оқушыларына арналған аймақтық жарыс.',
        'olymp.history.national': 'Тарих бойынша республикалық олимпиада',
        'olymp.history.desc': 'Қазақстан және әлем тарихы бойынша ұлттық олимпиада.',
        'olymp.english.kazakh': 'Ағылшын тілі олимпиадасы',
        'olymp.english.desc': 'Оқу, тыңдау және эссе жазуға арналған жарыс.',
        'olymp.math.regional.west': 'Математика бойынша аймақтық олимпиада (Батыс)',
        'olymp.math.regional.desc': 'Батыс облыстарға арналған аймақтық кезең.',
        'olymp.competition.semey': 'Семей қалалық олимпиадасы',
        'olymp.semey.desc': 'Семейдегі кіші сынып оқушыларына арналған жергілікті олимпиада.',

        // Основной контент
        'section.olympiads': 'Қол жетімді олимпиадалар',

        // Прочее
        'footer.copyright': '© 2026 Tanym. Барлық құқықтары сақталған.',
        'lang.select': '🌍 Тіл',
        'lang.russian': 'Русский',
        'lang.kazakh': 'Қазақша',
        'lang.english': 'English',
    },

    en: {
        // Навигация
        'nav.home': 'Home',
        'nav.calendar': 'Calendar',
        'nav.streams': 'Streams',
        'nav.teachers': 'For Teachers',
        'nav.cabinet': 'My Cabinet',

        // Кнопки
        'btn.login': 'Login',
        'btn.register': 'Register',
        'btn.logout': 'Logout',
        'btn.edit': '✏️ Edit Profile',
        'btn.settings': '⚙️ Account Settings',
        'btn.save': '💾 Save',
        'btn.cancel': '❌ Cancel',
        'btn.back': '⬅️ Back to Profile',
        'btn.teacher': '📚 Teacher Cabinet',

        // Заголовки
        'header.title': '🏆 Tanym',
        'header.welcome': 'Welcome to your personal cabinet',
        'header.login': '🔐 Login to your Cabinet',
        'header.loginForm': '📝 Login',
        'header.registerForm': '✍️ Register',
        'header.editProfile': '✏️ Edit Profile',
        'header.accountSettings': '⚙️ Account Settings',

        // Формы
        'form.login': 'Enter your login',
        'form.password': 'Enter your password',
        'form.email': 'Enter your email...',
        'form.chooseRole': 'Choose your role:',
        'form.currentPassword': 'Enter current password',
        'form.newPassword': 'Enter new password',
        'form.confirmPassword': 'Confirm new password',
        'form.newNickname': 'Enter new nickname',

        // Роли
        'role.student': '👨‍🎓 Student',
        'role.teacher': '👨‍🏫 Teacher',
        'role.display': 'Role:',

        // Секции профиля
        'profile.photo': '📷 Profile Photo',
        'profile.email': '📧 Email / Gmail',
        'profile.documents': '📄 Documents and Certificates',
        'profile.achievements': '⭐ Your Achievements',
        'profile.experience': '📚 Study Experience',
        'profile.passwordChange': '🔐 Change Password',
        'profile.nicknameChange': '👤 Change Nickname',
        'profile.uploadedDocs': 'Uploaded documents:',
        'profile.notSet': 'Not set',

        // Сообщения
        'msg.savedSuccess': 'Profile saved successfully!',
        'msg.nicknameSuccess': 'Nickname changed successfully!',
        'msg.passwordSuccess': 'Password changed successfully!',
        'msg.loginSuccess': 'You successfully logged in',
        'msg.registerSuccess': 'Registration successful',
        'msg.loginError': 'Login error',
        'msg.registerError': 'Registration error',
        'msg.fillFields': 'Fill in login and password',
        'msg.fillAllFields': 'Fill in all fields',
        'msg.passwordMismatch': 'Passwords do not match',
        'msg.passwordWrongCurrent': 'Current password is incorrect',
        'msg.passwordSame': 'New password must be different from current',
        'msg.passwordMinLength': 'Password must be at least 4 characters',
        'msg.nicknameError': 'New nickname must not match login',
        'msg.enterNickname': 'Enter new nickname',

        // Фильтры
        'filter.title': 'Search Filter',
        'filter.subject': 'Subject:',
        'filter.grade': 'Grade:',
        'filter.cost': 'Cost:',
        'filter.level': 'Level:',
        'filter.country': 'Country:',
        'filter.allSubjects': 'All subjects',
        'filter.allGrades': 'All grades',
        'filter.allCosts': 'All',
        'filter.allLevels': 'All levels',
        'filter.allCountries': 'All countries',
        'filter.reset': 'Reset filters',
        'filter.city': 'City:',
        'filter.allCities': 'All cities',

        // Предметы
        'subject.math': 'Mathematics',
        'subject.physics': 'Physics',
        'subject.chemistry': 'Chemistry',
        'subject.biology': 'Biology',
        'subject.literature': 'Literature',
        'subject.history': 'History',
        'subject.english': 'English Language',
        'subject.informatics': 'Computer Science',

        // Классы и уровни
        'grade.5-6': 'Grades 5-6',
        'grade.7-8': 'Grades 7-8',
        'grade.9-10': 'Grades 9-10',
        'grade.11': 'Grade 11',

        'cost.free': 'Free',
        'cost.paid': 'Paid',

        'level.world': 'World',
        'level.country': 'National',
        'level.regional': 'Regional',
        'level.city': 'City',

        'country.russia': 'Russia',
        'country.kazakhstan': 'Kazakhstan',
        'country.belarus': 'Belarus',
        'country.ukraine': 'Ukraine',
        'country.usa': 'USA',
        'country.china': 'China',
        'country.india': 'India',
        'country.international': 'International',

        // Cities (Kazakhstan)
        'city.astana': 'Astana',
        'city.shymkent': 'Shymkent',
        'city.almaty': 'Almaty',

        // Additional Kazakh cities
        'city.nursultan': 'Nur-Sultan',
        'city.karaganda': 'Karaganda',
        'city.pavlodar': 'Pavlodar',
        'city.taraz': 'Taraz',
        'city.kostanay': 'Kostanay',
        'city.aktobe': 'Aktobe',
        'city.semey': 'Semey',

        // Labels for cards
        'label.grades': 'Grades:',
        'label.city': 'City:',
        'label.start': 'Start:',
        'label.deadline': 'Deadline:',
        'btn.view': 'View',
        'priority.primary': 'National (Kazakhstan)',
        'priority.secondary': 'International/Others',

        // Olympiad titles and descriptions
        'olymp.math.national': 'Republican Mathematics Olympiad',
        'olymp.math.desc': 'National mathematics olympiad for senior students.',
        'olymp.informatics.republic': 'Republican Informatics Olympiad',
        'olymp.informatics.desc': 'Competition in algorithms and programming.',
        'olymp.physics.south': 'Southern Physics Tournament',
        'olymp.physics.desc': 'Regional physics olympiad in southern regions.',
        'olymp.literature.almaty': 'Literature Olympiad (Almaty)',
        'olymp.literature.desc': 'City literature olympiad for high school students.',
        'olymp.chemistry.kazakh': 'Republican Chemistry Olympiad',
        'olymp.chemistry.desc': 'National chemistry stage with theoretical tasks.',
        'olymp.biology.kazakh': 'Biology Olympiad (Regional)',
        'olymp.biology.desc': 'Regional competition in biology for schoolchildren.',
        'olymp.history.national': 'Republican History Olympiad',
        'olymp.history.desc': 'National olympiad on the history of Kazakhstan and the world.',
        'olymp.english.kazakh': 'English Language Olympiad',
        'olymp.english.desc': 'Competition in English: reading, listening and essay.',
        'olymp.math.regional.west': 'Regional Mathematics Olympiad (West)',
        'olymp.math.regional.desc': 'Regional mathematics stage for western regions.',
        'olymp.competition.semey': 'Semey City Olympiad',
        'olymp.semey.desc': 'Local olympiad for younger students in Semey.',

        // Основной контент
        'section.olympiads': 'Available Olympiads',

        // Прочее
        'footer.copyright': '© 2026 Tanym. All rights reserved.',
        'lang.select': '🌍 Language',
        'lang.russian': 'Русский',
        'lang.kazakh': 'Қазақша',
        'lang.english': 'English',
    }
};

// Broadcasts and UI labels
// (общее: статусы трансляций и кнопки)
translations.ru['broadcasts.pageTitle'] = 'Трансляции олимпиад';
translations.ru['broadcasts.heading'] = '🎥 Прямые трансляции и записи олимпиад';
translations.ru['broadcasts.filter.subject'] = 'Фильтр по предмету:';
translations.ru['broadcasts.filter.type'] = 'Тип:';
translations.ru['broadcasts.option.allBroadcasts'] = 'Все трансляции';
translations.ru['broadcasts.option.allTypes'] = 'Все типы';
translations.ru['broadcast.status.live'] = '🔴 Прямая';
translations.ru['broadcast.status.recorded'] = '📹 Запись';
translations.ru['broadcast.info.heading'] = 'ℹ️ Информация о трансляциях';
translations.ru['broadcast.recommended'] = '⭐ Рекомендуемые трансляции';
translations.ru['btn.watch'] = 'Смотреть';

// Примеры казахстанских трансляций (названия и описания)
translations.ru['broadcast.math.almaty.review'] = 'Разбор задач: Республиканская математика (Алматы)';
translations.ru['broadcast.math.almaty.desc'] = 'Разбор итоговых задач республиканской олимпиады по математике.';
translations.ru['broadcast.informatics.nursultan.live'] = 'Прямая трансляция: Республиканская информатика (Нур‑Султан)';
translations.ru['broadcast.informatics.nursultan.desc'] = 'Смотрите финальные соревнования по информатике в прямом эфире.';
translations.ru['broadcast.physics.shymkent'] = 'Региональная физика — Шымкент (Разбор)';
translations.ru['broadcast.physics.shymkent.desc'] = 'Региональные задачи и разбор по физике.';
translations.ru['broadcast.literature.almaty'] = 'Литературная олимпиада — Алматы (Анализ текстов)';
translations.ru['broadcast.literature.almaty.desc'] = 'Разбор произведений и решений конкурсов.';
translations.ru['broadcast.chemistry.karaganda'] = 'Химия — Караганда (Практический разбор)';
translations.ru['broadcast.chemistry.karaganda.desc'] = 'Пояснения по сложным задачам химической секции.';
translations.ru['broadcast.biology.pavlodar'] = 'Биология — Павлодар (Лекции и решения)';
translations.ru['broadcast.biology.pavlodar.desc'] = 'Лекции экспертов и разбор конкурсных заданий.';
translations.ru['broadcast.history.taraz'] = 'История — Тараз (Интерактивный разбор)';
translations.ru['broadcast.history.taraz.desc'] = 'Обсуждение исторических задач и источников.';
translations.ru['broadcast.english.kostanay.live'] = 'Английский — Костанай (Прямая)';
translations.ru['broadcast.english.kostanay.desc'] = 'Прямая дискуссия с разбором заданий по английскому.';

// Казахский
translations.kk['broadcasts.pageTitle'] = 'Ойынды трансляциялар';
translations.kk['broadcasts.heading'] = '🎥 Прямой трансляциялар және олимпиада жазбалары';
translations.kk['broadcasts.filter.subject'] = 'Пән бойынша сүзгі:';
translations.kk['broadcasts.filter.type'] = 'Түрі:';
translations.kk['broadcasts.option.allBroadcasts'] = 'Барлық трансляциялар';
translations.kk['broadcasts.option.allTypes'] = 'Барлық түрлер';
translations.kk['broadcast.status.live'] = '🔴 Тікелей';
translations.kk['broadcast.status.recorded'] = '📹 Жазба';
translations.kk['broadcast.info.heading'] = 'ℹ️ Трансляциялар туралы ақпарат';
translations.kk['broadcast.recommended'] = '⭐ Ұсынылған трансляциялар';
translations.kk['btn.watch'] = 'Қарау';

translations.kk['broadcast.math.almaty.review'] = 'Математика тапсырмаларын талқылау: Республикалық (Алматы)';
translations.kk['broadcast.math.almaty.desc'] = 'Математика республикалық олимпиадасының қорытынды тапсырмаларын талдау.';
translations.kk['broadcast.informatics.nursultan.live'] = 'Тікелей эфир: Информатика республикалық (Нұр‑Сұлтан)';
translations.kk['broadcast.informatics.nursultan.desc'] = 'Информатика финалын тікелей эфирден көріңіз.';
translations.kk['broadcast.physics.shymkent'] = 'Физика — Шымкент (Талдау)';
translations.kk['broadcast.physics.shymkent.desc'] = 'Аймақтық физика тапсырмаларын талдау.';
translations.kk['broadcast.literature.almaty'] = 'Әдебиет — Алматы (Мәтін талдауы)';
translations.kk['broadcast.literature.almaty.desc'] = 'Шығармаларды және конкурс шешімдерін талдау.';
translations.kk['broadcast.chemistry.karaganda'] = 'Химия — Қарағанды (Практикалық сараптама)';
translations.kk['broadcast.chemistry.karaganda.desc'] = 'Химия бөліміндегі күрделі тапсырмалардың түсіндірілуі.';
translations.kk['broadcast.biology.pavlodar'] = 'Биология — Павлодар (Лекциялар және шешімдер)';
translations.kk['broadcast.biology.pavlodar.desc'] = 'Маман лекциялары және конкурс тапсырмаларының талдауы.';
translations.kk['broadcast.history.taraz'] = 'Тарих — Тараз (Интерактивті талдау)';
translations.kk['broadcast.history.taraz.desc'] = 'Тарихи тапсырмаларды және дереккөздерді талқылау.';
translations.kk['broadcast.english.kostanay.live'] = 'Ағылшын — Қостанай (Тікелей)';
translations.kk['broadcast.english.kostanay.desc'] = 'Ағылшын тапсырмаларын талқылау және тікелей эфир.';

// English
translations.en['broadcasts.pageTitle'] = 'Olympiad Broadcasts';
translations.en['broadcasts.heading'] = '🎥 Live broadcasts and recordings of olympiads';
translations.en['broadcasts.filter.subject'] = 'Filter by subject:';
translations.en['broadcasts.filter.type'] = 'Type:';
translations.en['broadcasts.option.allBroadcasts'] = 'All broadcasts';
translations.en['broadcasts.option.allTypes'] = 'All types';
translations.en['broadcast.status.live'] = '🔴 Live';
translations.en['broadcast.status.recorded'] = '📹 Recorded';
translations.en['broadcast.info.heading'] = 'ℹ️ About broadcasts';
translations.en['broadcast.recommended'] = '⭐ Recommended broadcasts';
translations.en['btn.watch'] = 'Watch';

translations.en['broadcast.math.almaty.review'] = 'Problem review: Republican Mathematics (Almaty)';
translations.en['broadcast.math.almaty.desc'] = 'Review of final stage problems of the national mathematics olympiad.';
translations.en['broadcast.informatics.nursultan.live'] = 'Live: Republican Informatics (Nur-Sultan)';
translations.en['broadcast.informatics.nursultan.desc'] = 'Watch the final informatics competition live.';
translations.en['broadcast.physics.shymkent'] = 'Regional Physics — Shymkent (Review)';
translations.en['broadcast.physics.shymkent.desc'] = 'Regional physics problems and review.';
translations.en['broadcast.literature.almaty'] = 'Literature — Almaty (Text analysis)';
translations.en['broadcast.literature.almaty.desc'] = 'Analysis of works and contest solutions.';
translations.en['broadcast.chemistry.karaganda'] = 'Chemistry — Karaganda (Practical review)';
translations.en['broadcast.chemistry.karaganda.desc'] = 'Explanations of difficult chemistry section problems.';
translations.en['broadcast.biology.pavlodar'] = 'Biology — Pavlodar (Lectures & solutions)';
translations.en['broadcast.biology.pavlodar.desc'] = 'Expert lectures and review of contest tasks.';
translations.en['broadcast.history.taraz'] = 'History — Taraz (Interactive review)';
translations.en['broadcast.history.taraz.desc'] = 'Discussion of historical problems and sources.';
translations.en['broadcast.english.kostanay.live'] = 'English — Kostanay (Live)';
translations.en['broadcast.english.kostanay.desc'] = 'Live discussion and task review in English.';

// Calendar labels
translations.ru['calendar.pageTitle'] = 'Календарь олимпиад';
translations.ru['calendar.heading'] = '📅 Календарь олимпиад 2026';
translations.ru['btn.prevMonth'] = '← Предыдущий месяц';
translations.ru['btn.nextMonth'] = 'Следующий месяц →';
translations.ru['calendar.upcoming'] = '📍 Ближайшие события';
translations.ru['calendar.allEvents'] = '📋 Все события по датам';
translations.ru['table.startDate'] = 'Дата начала';
translations.ru['table.deadline'] = 'Дедлайн';
translations.ru['table.olympiad'] = 'Олимпиада';
translations.ru['table.subject'] = 'Предмет';
translations.ru['table.level'] = 'Уровень';

translations.kk['calendar.pageTitle'] = 'Олимпиадалар күнтізбесі';
translations.kk['calendar.heading'] = '📅 2026 олимпиадалар күнтізбесі';
translations.kk['btn.prevMonth'] = '← Алдыңғы ай';
translations.kk['btn.nextMonth'] = 'Келесі ай →';
translations.kk['calendar.upcoming'] = '📍 Жақын оқиғалар';
translations.kk['calendar.allEvents'] = '📋 Барлық оқиғалар дата бойынша';
translations.kk['table.startDate'] = 'Басталу күні';
translations.kk['table.deadline'] = 'Мерзімі';
translations.kk['table.olympiad'] = 'Олимпиада';
translations.kk['table.subject'] = 'Пән';
translations.kk['table.level'] = 'Деңгей';

translations.en['calendar.pageTitle'] = 'Olympiad Calendar';
translations.en['calendar.heading'] = '📅 Olympiad Calendar 2026';
translations.en['btn.prevMonth'] = '← Previous Month';
translations.en['btn.nextMonth'] = 'Next Month →';
translations.en['calendar.upcoming'] = '📍 Upcoming events';
translations.en['calendar.allEvents'] = '📋 All events by date';
translations.en['table.startDate'] = 'Start Date';
translations.en['table.deadline'] = 'Deadline';
translations.en['table.olympiad'] = 'Olympiad';
translations.en['table.subject'] = 'Subject';
translations.en['table.level'] = 'Level';

// Teachers page
translations.ru['teacher.pageTitle'] = 'Портал для учителей';
translations.ru['teacher.header'] = '🏆 Tanym - Портал для учителей';
translations.ru['teacher.intro.title'] = '👨‍🏫 Добро пожаловать в портал для учителей';
translations.ru['teacher.intro.desc'] = 'Здесь вы можете отслеживать достижения своих учеников, управлять олимпиадами и анализировать результаты.';
translations.ru['teacher.menu.myStudents'] = '👥 Мои ученики';
translations.ru['teacher.menu.tracked'] = '📚 Отслеживаемые олимпиады';
translations.ru['teacher.menu.results'] = '📊 Результаты учеников';
translations.ru['teacher.menu.upcoming'] = '📅 Предстоящие события';
translations.ru['teacher.menu.analytics'] = '📈 Аналитика';
translations.ru['teacher.menu.resources'] = '📖 Материалы подготовки';
translations.ru['teacher.input.studentName'] = 'Имя ученика';
translations.ru['teacher.select.grade'] = 'Выберите класс';
translations.ru['teacher.btn.addStudent'] = 'Добавить ученика';
translations.ru['teacher.noStudents'] = 'Нет добавленных учеников';
translations.ru['teacher.confirm.delete'] = 'Вы уверены?';
translations.ru['teacher.modal.addOlympiad.title'] = 'Добавить олимпиаду для отслеживания';
translations.ru['teacher.select.chooseOlympiad'] = 'Выберите олимпиаду';
translations.ru['teacher.btn.addTracked'] = 'Добавить';
translations.ru['teacher.noTracked'] = 'Нет отслеживаемых олимпиад';
translations.ru['teacher.noResults'] = 'Нет результатов';
translations.ru['teacher.noUpcoming'] = 'Нет предстоящих событий';
translations.ru['teacher.resources.open'] = 'Открыть материал →';
translations.ru['teacher.status.completed'] = '✓ Завершено';
translations.ru['teacher.status.inprogress'] = '⏳ В процессе';
translations.ru['teacher.status.scheduled'] = '📅 Предстоит';

translations.kk['teacher.pageTitle'] = 'Ұстаздар порталы';
translations.kk['teacher.header'] = '🏆 Tanym - Ұстаздар порталы';
translations.kk['teacher.intro.title'] = '👨‍🏫 Ұстаздар порталына қош келдіңіз';
translations.kk['teacher.intro.desc'] = 'Бұл жерде сіз оқушыларыңыздың жетістіктерін қадағалап, олимпиадаларды басқара аласыз және нәтижелерді талдай аласыз.';
translations.kk['teacher.menu.myStudents'] = '👥 Менің оқушыларым';
translations.kk['teacher.menu.tracked'] = '📚 Қадағаланып отырған олимпиадалар';
translations.kk['teacher.menu.results'] = '📊 Оқушылар нәтижелері';
translations.kk['teacher.menu.upcoming'] = '📅 Алдағы оқиғалар';
translations.kk['teacher.menu.analytics'] = '📈 Аналитика';
translations.kk['teacher.menu.resources'] = '📖 Дайындық материалдары';
translations.kk['teacher.input.studentName'] = 'Оқушының аты';
translations.kk['teacher.select.grade'] = 'Сыныпты таңдаңыз';
translations.kk['teacher.btn.addStudent'] = 'Оқушыны қосу';
translations.kk['teacher.noStudents'] = 'Қосылған оқушылар жоқ';
translations.kk['teacher.confirm.delete'] = 'Сіз сенімдісіз бе?';
translations.kk['teacher.modal.addOlympiad.title'] = 'Қадағалауға олимпиада қосу';
translations.kk['teacher.select.chooseOlympiad'] = 'Олимпиаданы таңдаңыз';
translations.kk['teacher.btn.addTracked'] = 'Қосу';
translations.kk['teacher.noTracked'] = 'Қадағаланатын олимпиадалар жоқ';
translations.kk['teacher.noResults'] = 'Нәтижелер жоқ';
translations.kk['teacher.noUpcoming'] = 'Алдағы оқиғалар жоқ';
translations.kk['teacher.resources.open'] = 'Материалды ашу →';
translations.kk['teacher.status.completed'] = '✓ Аяқталған';
translations.kk['teacher.status.inprogress'] = '⏳ Процесc';
translations.kk['teacher.status.scheduled'] = '📅 Күтілуде';

translations.en['teacher.pageTitle'] = 'Teachers Portal';
translations.en['teacher.header'] = '🏆 Tanym - Teachers Portal';
translations.en['teacher.intro.title'] = '👨‍🏫 Welcome to the Teachers Portal';
translations.en['teacher.intro.desc'] = 'Here you can track your students\' achievements, manage olympiads and analyze results.';
translations.en['teacher.menu.myStudents'] = '👥 My Students';
translations.en['teacher.menu.tracked'] = '📚 Tracked Olympiads';
translations.en['teacher.menu.results'] = '📊 Student Results';
translations.en['teacher.menu.upcoming'] = '📅 Upcoming Events';
translations.en['teacher.menu.analytics'] = '📈 Analytics';
translations.en['teacher.menu.resources'] = '📖 Preparation Materials';
translations.en['teacher.input.studentName'] = 'Student name';
translations.en['teacher.select.grade'] = 'Choose grade';
translations.en['teacher.btn.addStudent'] = 'Add student';
translations.en['teacher.noStudents'] = 'No students added';
translations.en['teacher.confirm.delete'] = 'Are you sure?';
translations.en['teacher.modal.addOlympiad.title'] = 'Add olympiad to track';
translations.en['teacher.select.chooseOlympiad'] = 'Choose olympiad';
translations.en['teacher.btn.addTracked'] = 'Add';
translations.en['teacher.noTracked'] = 'No tracked olympiads';
translations.en['teacher.noResults'] = 'No results';
translations.en['teacher.noUpcoming'] = 'No upcoming events';
translations.en['teacher.resources.open'] = 'Open material →';
translations.en['teacher.status.completed'] = '✓ Completed';
translations.en['teacher.status.inprogress'] = '⏳ In progress';
translations.en['teacher.status.scheduled'] = '📅 Scheduled';

// Получить текущий язык
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ru';
}

// Установить язык
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem('language', lang);
        window.location.reload();
    }
}

// Получить перевод по ключу
function t(key) {
    const lang = getCurrentLanguage();
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Fallback to Russian if translation not found
    if (translations['ru'] && translations['ru'][key]) {
        return translations['ru'][key];
    }
    return key;
}

// Переводить все элементы
function translateAll() {
    // Переводим все элементы с data-i18n атрибутом
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        const text = t(key);
        el.textContent = text;
    });

    // Переводим placeholder'ы
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Переводим title
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // Переводим value
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-value');
        el.value = t(key);
    });
}

// Инициализировать переводы при загрузке
document.addEventListener('DOMContentLoaded', function () {
    translateAll();

    // Установить текущий язык в selec'tor
    var selector = document.getElementById('languageSelector');
    if (selector) {
        selector.value = getCurrentLanguage();
    }
});