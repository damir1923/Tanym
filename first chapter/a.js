// Данные олимпиад (только Казахстан)
const olympiads = [
    {
        id: 1,
        nameKey: 'olymp.math.national',
        subject: 'math',
        grades: ['9-10', '11'],
        cost: 'free',
        level: 'country',
        country: 'kazakhstan',
        startDate: '2026-09-20',
        deadlineDate: '2026-09-10',
        descriptionKey: 'olymp.math.desc',
        city: 'Алматы'
    },
    {
        id: 2,
        nameKey: 'olymp.informatics.republic',
        subject: 'informatics',
        grades: ['9-10', '11'],
        cost: 'free',
        level: 'country',
        country: 'kazakhstan',
        startDate: '2026-08-10',
        deadlineDate: '2026-07-25',
        descriptionKey: 'olymp.informatics.desc',
        city: 'Нур‑Султан'
    },
    {
        id: 3,
        nameKey: 'olymp.physics.south',
        subject: 'physics',
        grades: ['10', '11'],
        cost: 'paid',
        level: 'regional',
        country: 'kazakhstan',
        startDate: '2026-10-05',
        deadlineDate: '2026-09-20',
        descriptionKey: 'olymp.physics.desc',
        city: 'Шымкент'
    },
    {
        id: 4,
        nameKey: 'olymp.literature.almaty',
        subject: 'literature',
        grades: ['9-10', '11'],
        cost: 'free',
        level: 'city',
        country: 'kazakhstan',
        startDate: '2026-05-12',
        deadlineDate: '2026-05-01',
        descriptionKey: 'olymp.literature.desc',
        city: 'Алматы'
    },
    {
        id: 5,
        nameKey: 'olymp.chemistry.kazakh',
        subject: 'chemistry',
        grades: ['9-10', '11'],
        cost: 'free',
        level: 'country',
        country: 'kazakhstan',
        startDate: '2026-11-05',
        deadlineDate: '2026-10-25',
        descriptionKey: 'olymp.chemistry.desc',
        city: 'Караганда'
    },
    {
        id: 6,
        nameKey: 'olymp.biology.kazakh',
        subject: 'biology',
        grades: ['7-8', '9-10', '11'],
        cost: 'free',
        level: 'regional',
        country: 'kazakhstan',
        startDate: '2026-06-15',
        deadlineDate: '2026-06-01',
        descriptionKey: 'olymp.biology.desc',
        city: 'Павлодар'
    },
    {
        id: 7,
        nameKey: 'olymp.history.national',
        subject: 'history',
        grades: ['5-6', '7-8', '9-10', '11'],
        cost: 'free',
        level: 'country',
        country: 'kazakhstan',
        startDate: '2026-04-01',
        deadlineDate: '2026-03-20',
        descriptionKey: 'olymp.history.desc',
        city: 'Тараз'
    },
    {
        id: 8,
        nameKey: 'olymp.english.kazakh',
        subject: 'english',
        grades: ['9-10', '11'],
        cost: 'paid',
        level: 'country',
        country: 'kazakhstan',
        startDate: '2026-07-15',
        deadlineDate: '2026-07-01',
        descriptionKey: 'olymp.english.desc',
        city: 'Костанай'
    },
    {
        id: 9,
        nameKey: 'olymp.math.regional.west',
        subject: 'math',
        grades: ['7-8', '9-10'],
        cost: 'free',
        level: 'regional',
        country: 'kazakhstan',
        startDate: '2026-10-01',
        deadlineDate: '2026-09-20',
        descriptionKey: 'olymp.math.regional.desc',
        city: 'Актобе'
    },
    {
        id: 10,
        nameKey: 'olymp.competition.semey',
        subject: 'informatics',
        grades: ['5-6', '7-8'],
        cost: 'free',
        level: 'city',
        country: 'kazakhstan',
        startDate: '2026-03-10',
        deadlineDate: '2026-03-01',
        descriptionKey: 'olymp.semey.desc',
        city: 'Семей'
    }
];

// Функция отображения олимпиад
function displayOlympiads(data = olympiads) {
    const grid = document.getElementById('olympiadGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: white; font-size: 1.2em;">Олимпиады не найдены</p>';
        return;
    }

    // Сортируем: казахстанские олимпиады первыми
    const sorted = data.slice().sort((a, b) => {
        if (a.country === 'kazakhstan' && b.country !== 'kazakhstan') return -1;
        if (b.country === 'kazakhstan' && a.country !== 'kazakhstan') return 1;
        return 0;
    });

    sorted.forEach(olympiad => {
        const card = document.createElement('div');
        card.className = 'olympiad-card';
        const name = olympiad.nameKey ? t(olympiad.nameKey) : (olympiad.name || '');
        const desc = olympiad.descriptionKey ? t(olympiad.descriptionKey) : (olympiad.description || '');
        const subjectName = getSubjectName(olympiad.subject);
        const priorityText = olympiad.country === 'kazakhstan' ? t('priority.primary') : t('priority.secondary');
        const costLabel = olympiad.cost === 'free' ? t('cost.free') : t('cost.paid');
        const levelLabel = t('level.' + olympiad.level);

        card.innerHTML = `
            <div class="olympiad-header">
                <h3>${name}</h3>
                <span class="olympiad-subject">${subjectName}</span>
                <span class="priority-badge ${olympiad.country === 'kazakhstan' ? 'primary' : 'secondary'}">${priorityText}</span>
            </div>
            <div class="olympiad-body">
                <div class="olympiad-info">
                    <p><strong>${t('label.grades')}</strong> ${olympiad.grades.join(', ')}</p>
                    <p class="city-label"><strong>${t('label.city')}</strong> ${olympiad.city ? olympiad.city : '—'}</p>
                    <p><strong>${t('label.start')}</strong> ${formatDate(olympiad.startDate)}</p>
                    <p><strong>${t('label.deadline')}</strong> ${formatDate(olympiad.deadlineDate)}</p>
                </div>
                <div>
                    <span class="badge ${olympiad.cost === 'free' ? 'badge-free' : 'badge-paid'}">
                        ${costLabel}
                    </span>
                    <span class="badge ${getLevelBadgeClass(olympiad.level)}">
                        ${levelLabel}
                    </span>
                </div>
                <p style="margin-top: 15px; color: #666;">${desc}</p>
                <button class="btn-view" onclick="viewOlympiad(${olympiad.id})">${t('btn.view')}</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Фильтрация олимпиад
function filterOlympiads() {
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;
    const cost = document.getElementById('cost').value;
    const level = document.getElementById('level').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city') ? document.getElementById('city').value : '';

    // Включаем фильтр по городу (если выбран)
    function getCityCodeFromName(name) {
        if (!name) return '';
        const n = name.toLowerCase();
        if (n.includes('нур') || n.includes('астан')) return 'astana';
        if (n.includes('шым')) return 'shymkent';
        if (n.includes('алма')) return 'almaty';
        return '';
    }

    let filtered = olympiads.filter(o => {
        const matchesCity = !city || getCityCodeFromName(o.city) === city;
        return (!subject || o.subject === subject) &&
            (!grade || o.grades.includes(grade)) &&
            (!cost || o.cost === cost) &&
            (!level || o.level === level) &&
            (!country || o.country === country) &&
            matchesCity;
    });

    displayOlympiads(filtered);
}

function resetFilters() {
    document.getElementById('subject').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('cost').value = '';
    document.getElementById('level').value = '';
    document.getElementById('country').value = '';
    const cityEl = document.getElementById('city');
    if (cityEl) cityEl.value = '';
    // обновим видимость селектора города
    if (typeof updateCityFilterVisibility === 'function') updateCityFilterVisibility();
    displayOlympiads();
}

// Вспомогательные функции
function getSubjectName(code) {
    return t('subject.' + code) || code;
}

function getLevelName(code) {
    return t('level.' + code) || code;
}

function getLevelBadgeClass(level) {
    const classes = {
        world: 'badge-world',
        country: 'badge-country',
        regional: 'badge-regional',
        city: 'badge-city'
    };
    return classes[level] || 'badge-world';
}

function getCountryName(code) {
    const countries = {
        russia: 'Россия',
        kazakhstan: 'Казахстан',
        belarus: 'Беларусь',
        ukraine: 'Украина',
        usa: 'США',
        china: 'Китай',
        india: 'Индия',
        international: 'Международная'
    };
    return countries[code] || code;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
}

function viewOlympiad(id) {
    window.location.href = `../second/olympiad-detail.html?id=${id}`;
}

// Добавить слушатели событий к фильтрам
document.addEventListener('DOMContentLoaded', function () {
    displayOlympiads();
    document.getElementById('subject').addEventListener('change', filterOlympiads);
    document.getElementById('grade').addEventListener('change', filterOlympiads);
    document.getElementById('cost').addEventListener('change', filterOlympiads);
    document.getElementById('level').addEventListener('change', filterOlympiads);
    // При смене страны показываем/скрываем селектор города и применяем фильтр
    const countryEl = document.getElementById('country');
    if (countryEl) {
        countryEl.addEventListener('change', function () {
            updateCityFilterVisibility();
            filterOlympiads();
        });
    }
    // Слушаем изменение города
    const cityEl = document.getElementById('city');
    if (cityEl) cityEl.addEventListener('change', filterOlympiads);
    // Инициализация видимости селектора города
    updateCityFilterVisibility();
});

// Показать или скрыть селектор города в зависимости от выбранной страны
function updateCityFilterVisibility() {
    const country = document.getElementById('country') ? document.getElementById('country').value : '';
    const cityGroup = document.getElementById('cityFilter');
    if (!cityGroup) return;
    if (country === 'kazakhstan') {
        cityGroup.style.display = 'flex';
    } else {
        // Сбросим значение города при скрытии
        const citySelect = document.getElementById('city');
        if (citySelect) citySelect.value = '';
        cityGroup.style.display = 'none';
    }
}