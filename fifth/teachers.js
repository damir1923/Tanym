// Данные учеников учителя
let myStudents = JSON.parse(localStorage.getItem('myStudents')) || [];
let trackedOlympiads = JSON.parse(localStorage.getItem('trackedOlympiads')) || [];
let studentResults = JSON.parse(localStorage.getItem('studentResults')) || [];

// Проверка авторизации: доступ только для пользователей с ролью 'teacher'
const __currentUser_guard = JSON.parse(localStorage.getItem('currentUser'));
if (!__currentUser_guard || __currentUser_guard.role !== 'teacher') {
    // Если страница загружена напрямую, перенаправляем на главную
    alert(t('msg.loginError') + ': ' + t('teacher.confirm.delete'));
    window.location.href = '../first chapter/a.html';
}

// Материалы подготовки
const prepMaterials = [
    {
        id: 1,
        title: 'Основы алгебры для олимпиад',
        subject: 'math',
        description: 'Полный курс алгебраических методов для решения олимпиадных задач',
        url: '#'
    },
    {
        id: 2,
        title: 'Механика - Углубленный курс',
        subject: 'physics',
        description: 'Подробное изучение законов механики и их применения',
        url: '#'
    },
    {
        id: 3,
        title: 'Органическая химия',
        subject: 'chemistry',
        description: 'Полный курс органической химии с примерами задач',
        url: '#'
    },
    {
        id: 4,
        title: 'Биология клетки',
        subject: 'biology',
        description: 'Изучение структуры и функций клетки',
        url: '#'
    },
    {
        id: 5,
        title: 'Русская литература XIX века',
        subject: 'literature',
        description: 'Анализ произведений классической литературы',
        url: '#'
    },
    {
        id: 6,
        title: 'История России',
        subject: 'history',
        description: 'Хронология и ключевые события истории России',
        url: '#'
    }
];

// Переключение между разделами
function showSection(sectionId) {
    // Скрыть все разделы
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Деактивировать все кнопки
    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Показать нужный раздел
    document.getElementById(sectionId).classList.add('active');

    // Активировать нужную кнопку
    event.target.classList.add('active');

    // Обновить содержимое
    if (sectionId === 'my-students') {
        displayStudents();
    } else if (sectionId === 'tracked-olympiads') {
        displayTrackedOlympiads();
    } else if (sectionId === 'student-results') {
        displayStudentResults();
    } else if (sectionId === 'upcoming-events') {
        displayUpcomingEvents();
    } else if (sectionId === 'analytics') {
        displayAnalytics();
    } else if (sectionId === 'resources') {
        displayResources();
    }
}

// Функции для управления учениками
function addStudent() {
    const name = document.getElementById('studentName').value;
    const grade = document.getElementById('studentGrade').value;

    if (!name || !grade) {
        alert(t('msg.fillAllFields'));
        return;
    }

    const student = {
        id: Date.now(),
        name: name,
        grade: grade,
        joinDate: new Date().toLocaleDateString(getCurrentLanguage() === 'kk' ? 'kk-KZ' : (getCurrentLanguage() === 'en' ? 'en-US' : 'ru-RU'))
    };

    myStudents.push(student);
    localStorage.setItem('myStudents', JSON.stringify(myStudents));

    document.getElementById('studentName').value = '';
    document.getElementById('studentGrade').value = '';

    displayStudents();
}

function displayStudents() {
    const grid = document.getElementById('studentsList');
    grid.innerHTML = '';

    if (myStudents.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">${t('teacher.noStudents')}</p>`;
        return;
    }

    myStudents.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <div class="student-name">👤 ${student.name}</div>
            <div class="student-grade">📚 Класс: ${student.grade}</div>
            <div class="student-grade" style="font-size: 0.85em; color: #999;">Добавлен: ${student.joinDate}</div>
                <div class="student-actions">
                <button class="btn-small" onclick="viewStudentProfile(${student.id})">${t('btn.view')}</button>
                <button class="btn-small btn-delete" onclick="deleteStudent(${student.id})">${t('teacher.student.delete') || t('btn.cancel')}</button>
            </div>
        `;
        grid.appendChild(card);
    });
    // Перевести сгенерированные элементы
    if (typeof translateAll === 'function') translateAll();
}

function deleteStudent(id) {
    if (confirm('Вы уверены?')) {
        myStudents = myStudents.filter(s => s.id !== id);
        localStorage.setItem('myStudents', JSON.stringify(myStudents));
        displayStudents();
    }
}

function viewStudentProfile(id) {
    const student = myStudents.find(s => s.id === id);
    alert(`Профиль ученика: ${student.name}\nКласс: ${student.grade}`);
}

// Функции для управления олимпиадами
function showAddOlympiadModal() {
    const modal = document.getElementById('addOlympiadModal');
    const select = document.getElementById('olympiadSelect');

    select.innerHTML = `<option value="">${t('teacher.select.chooseOlympiad')}</option>`;
    olympiads.forEach(o => {
        const option = document.createElement('option');
        option.value = o.id;
        option.textContent = o.nameKey ? t(o.nameKey) : (o.name || '');
        select.appendChild(option);
    });

    // Перевести опции
    if (typeof translateAll === 'function') translateAll();

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('addOlympiadModal').style.display = 'none';
}

function addTrackedOlympiad() {
    const olympiadId = document.getElementById('olympiadSelect').value;

    if (!olympiadId) {
        alert('Выберите олимпиаду');
        return;
    }

    const olympiad = olympiads.find(o => o.id === parseInt(olympiadId));

    if (!trackedOlympiads.find(o => o.id === parseInt(olympiadId))) {
        trackedOlympiads.push({
            ...olympiad,
            participants: 0,
            addedDate: new Date().toLocaleDateString('ru-RU')
        });
        localStorage.setItem('trackedOlympiads', JSON.stringify(trackedOlympiads));
    }

    closeModal();
    displayTrackedOlympiads();
}

function displayTrackedOlympiads() {
    const list = document.getElementById('trackedOlympiadsList');
    list.innerHTML = '';

    if (trackedOlympiads.length === 0) {
        list.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">${t('teacher.noTracked')}</p>`;
        return;
    }

    trackedOlympiads.forEach(olympiad => {
        const participants = studentResults.filter(r => r.olympiadId === olympiad.id).length;

        const card = document.createElement('div');
        card.className = 'olympiad-track-card';
        card.innerHTML = `
            <h4>${olympiad.nameKey ? t(olympiad.nameKey) : (olympiad.name || '')}</h4>
            <p><strong>${t('filter.subject')}</strong> ${getSubjectName(olympiad.subject)}</p>
            <p><strong>${t('filter.level')}</strong> ${getLevelName(olympiad.level)}</p>
            <p><strong>${t('label.deadline')}</strong> ${formatDate(olympiad.deadlineDate)}</p>
            <div class="stats">
                <div class="stat-small">
                    <span>${participants}</span>
                    <p>${t('label.participants') || 'Участников'}</p>
                </div>
                <div class="stat-small">
                    <span>${olympiad.grades.length}</span>
                    <p>${t('label.grades') || 'Классов'}</p>
                </div>
            </div>
            <button class="btn-small" style="margin-top: 15px; width: 100%;" onclick="removeTrackedOlympiad(${olympiad.id})">${t('teacher.student.delete') || 'Удалить'}</button>
        `;
        list.appendChild(card);
    });
    if (typeof translateAll === 'function') translateAll();
}

function removeTrackedOlympiad(id) {
    trackedOlympiads = trackedOlympiads.filter(o => o.id !== id);
    localStorage.setItem('trackedOlympiads', JSON.stringify(trackedOlympiads));
    displayTrackedOlympiads();
}

// Функции для результатов
function displayStudentResults() {
    const studentSelect = document.getElementById('resultsStudent');
    const olympiadSelect = document.getElementById('resultsOlympiad');

    studentSelect.innerHTML = `<option value="">${t('filter.allSubjects')}</option>`;
    myStudents.forEach(s => {
        const option = document.createElement('option');
        option.value = s.id;
        option.textContent = s.name;
        studentSelect.appendChild(option);
    });

    olympiadSelect.innerHTML = `<option value="">${t('filter.allSubjects')}</option>`;
    trackedOlympiads.forEach(o => {
        const option = document.createElement('option');
        option.value = o.id;
        option.textContent = o.nameKey ? t(o.nameKey) : (o.name || '');
        olympiadSelect.appendChild(option);
    });
    if (typeof translateAll === 'function') translateAll();

    updateResults();
}

function updateResults() {
    const studentId = document.getElementById('resultsStudent').value;
    const olympiadId = document.getElementById('resultsOlympiad').value;
    const tbody = document.getElementById('resultsTableBody');

    tbody.innerHTML = '';

    let filtered = studentResults;

    if (studentId) {
        filtered = filtered.filter(r => r.studentId === parseInt(studentId));
    }

    if (olympiadId) {
        filtered = filtered.filter(r => r.olympiadId === parseInt(olympiadId));
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: #999;">${t('teacher.noResults')}</td></tr>`;
        return;
    }

    filtered.forEach(result => {
        const student = myStudents.find(s => s.id === result.studentId);
        const olympiad = trackedOlympiads.find(o => o.id === result.olympiadId);

        const row = document.createElement('tr');
        const statusText = result.status === 'completed' ? t('teacher.status.completed') : result.status === 'pending' ? t('teacher.status.inprogress') : t('teacher.status.scheduled');
        row.innerHTML = `
            <td>${student ? student.name : t('profile.notSet')}</td>
            <td>${olympiad ? (olympiad.nameKey ? t(olympiad.nameKey) : olympiad.name) : t('profile.notSet')}</td>
            <td><span class="status-badge ${result.status}">${statusText}</span></td>
            <td>${result.score || '-'}</td>
            <td>${result.place || '-'}</td>
            <td>${result.certificate ? `<a class="certificate-link" onclick="downloadCertificate(${result.id})">${t('teacher.resources.open')}</a>` : '-'}</td>
        `;
        tbody.appendChild(row);
    });
    if (typeof translateAll === 'function') translateAll();
}

// Функции для событий
function displayUpcomingEvents() {
    const list = document.getElementById('upcomingEventsList');
    list.innerHTML = '';

    // Отсортировать олимпиады по дедлайну
    const upcoming = trackedOlympiads
        .filter(o => new Date(o.deadlineDate) > new Date())
        .sort((a, b) => new Date(a.deadlineDate) - new Date(b.deadlineDate))
        .slice(0, 5);

    if (upcoming.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: #999;">${t('teacher.noUpcoming')}</p>`;
        return;
    }

    upcoming.forEach(event => {
        const daysLeft = Math.ceil((new Date(event.deadlineDate) - new Date()) / (1000 * 60 * 60 * 24));

        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-info">
                <h4>${event.nameKey ? t(event.nameKey) : (event.name || '')}</h4>
                <p>📚 ${getSubjectName(event.subject)}</p>
                <p>${event.grades.join(', ')} ${t('label.grades')}</p>
            </div>
            <div class="event-date">
                ${daysLeft} дней<br>
                <small>${formatDate(event.deadlineDate)}</small>
            </div>
        `;
        list.appendChild(card);
    });
    if (typeof translateAll === 'function') translateAll();
}

// Функции для аналитики
function displayAnalytics() {
    document.getElementById('totalStudents').textContent = myStudents.length;
    document.getElementById('totalTracked').textContent = trackedOlympiads.length;
    document.getElementById('totalParticipations').textContent = studentResults.length;

    // Средний результат
    const avgScore = studentResults.length > 0
        ? Math.round(studentResults.reduce((sum, r) => sum + (r.score || 0), 0) / studentResults.length)
        : 0;
    document.getElementById('avgScore').textContent = avgScore + '%';

    // График участий
    displayParticipationChart();
}

function displayParticipationChart() {
    const chart = document.getElementById('participationChart');
    chart.innerHTML = '';

    const chartData = trackedOlympiads.map(o => {
        const count = studentResults.filter(r => r.olympiadId === o.id).length;
        return { name: o.name.substring(0, 20), count: count };
    });

    const maxCount = Math.max(...chartData.map(d => d.count), 1);

    chartData.forEach(data => {
        const percentage = (data.count / maxCount) * 100;

        const item = document.createElement('div');
        item.className = 'bar-item';
        item.innerHTML = `
            <div class="bar-name" title="${data.name}">${data.name}</div>
            <div class="bar" style="width: ${percentage}%"></div>
            <div class="bar-value">${data.count}</div>
        `;
        chart.appendChild(item);
    });

    if (chartData.length === 0) {
        chart.innerHTML = '<p style="text-align: center; color: #999;">Нет данных</p>';
    }
}

// Функция скачивания сертификата
function downloadCertificate(resultId) {
    const result = studentResults.find(r => r.id === resultId);
    const student = myStudents.find(s => s.id === result.studentId);
    const olympiad = trackedOlympiads.find(o => o.id === result.olympiadId);

    alert(`Скачивание сертификата для ${student.name}\nОлимпиада: ${olympiad.name}\nРезультат: ${result.score} баллов`);
}

// Функции для ресурсов
function displayResources() {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = '';

    prepMaterials.forEach(material => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <h4>📖 ${material.title}</h4>
            <p>${material.description}</p>
            <p style="color: #999; font-size: 0.85em;">${t('filter.subject')} ${getSubjectName(material.subject)}</p>
            <a href="${material.url}" class="resource-link">${t('teacher.resources.open')}</a>
        `;
        grid.appendChild(card);
    });
    if (typeof translateAll === 'function') translateAll();
}

// Инициализировать при загрузке
document.addEventListener('DOMContentLoaded', function () {

    displayStudents();

    // Добавить тестовые данные для демонстрации
    if (studentResults.length === 0) {
        studentResults = [
            {
                id: 1,
                studentId: 0,
                olympiadId: 1,
                status: 'completed',
                score: 85,
                place: 3,
                certificate: true
            }
        ];
    }
    // Перевести сгенерированные элементы после инициализации
    if (typeof translateAll === 'function') translateAll();
});

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    const modal = document.getElementById('addOlympiadModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
