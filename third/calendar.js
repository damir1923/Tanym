let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function getLocale() {
    const lang = getCurrentLanguage();
    if (lang === 'kk') return 'kk-KZ';
    if (lang === 'en') return 'en-US';
    return 'ru-RU';
}

function renderCalendar() {
    const monthYear = document.getElementById('monthYear');
    const calendarGrid = document.getElementById('calendarGrid');

    // Локализованные названия месяцев и дней недели
    const locale = getLocale();
    const months = [];
    for (let i = 0; i < 12; i++) {
        months.push(new Date(2000, i, 1).toLocaleString(locale, { month: 'long' }));
    }
    const daysOfWeek = []; // monday..sunday
    // Создаем дни недели начиная с понедельника
    for (let d = 1; d <= 7; d++) {
        const ref = new Date(2021, 7, d + 1); // arbitrary week containing Mon..Sun
        daysOfWeek.push(ref.toLocaleDateString(locale, { weekday: 'short' }));
    }

    monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

    calendarGrid.innerHTML = '';

    // Добавить дни недели
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // Получить первый день месяца и количество дней
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    // Добавить дни из предыдущего месяца
    for (let i = firstDay === 0 ? 6 : firstDay - 1; i > 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = daysInPrevMonth - i + 1;
        calendarGrid.appendChild(dayDiv);
    }

    // Добавить дни текущего месяца
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';

        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Проверить, является ли это сегодняшний день
        if (today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === day) {
            dayDiv.classList.add('today');
        }

        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        dayDiv.appendChild(dayNumber);

        // Найти события на этот день
        const dayEvents = olympiads.filter(o =>
            o.startDate.startsWith(dateStr) || o.deadlineDate.startsWith(dateStr)
        );

        if (dayEvents.length > 0) {
            const eventsDiv = document.createElement('div');
            eventsDiv.className = 'day-events';
            dayEvents.forEach(event => {
                const eventSpan = document.createElement('div');
                eventSpan.className = 'day-event-item';
                const title = event.nameKey ? t(event.nameKey) : (event.name || '');
                eventSpan.textContent = title.length > 15 ? title.substring(0, 15) + '...' : title;
                eventSpan.title = title;
                eventsDiv.appendChild(eventSpan);
            });
            dayDiv.appendChild(eventsDiv);
        }

        calendarGrid.appendChild(dayDiv);
    }

    // Добавить дни из следующего месяца
    const totalCells = calendarGrid.children.length - 7; // Исключить дни недели
    const remainingCells = 35 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = day;
        calendarGrid.appendChild(dayDiv);
    }
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
    renderTimeline();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
    renderTimeline();
}

function renderTimeline() {
    const timelineEvents = document.getElementById('timelineEvents');
    timelineEvents.innerHTML = '';

    // Получить все события и отсортировать их
    const events = [];
    olympiads.forEach(o => {
        const startDate = new Date(o.startDate);
        const deadlineDate = new Date(o.deadlineDate);
        const title = o.nameKey ? t(o.nameKey) : (o.name || '');
        events.push({
            date: startDate,
            name: title,
            type: 'start',
            olympiad: o
        });
        events.push({
            date: deadlineDate,
            name: `${t('label.deadline')} ${title}`,
            type: 'deadline',
            olympiad: o
        });
    });

    // Отсортировать по дате
    events.sort((a, b) => a.date - b.date);

    // Показать только ближайшие 10 событий
    events.slice(0, 10).forEach(event => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';

        const dateDiv = document.createElement('div');
        dateDiv.className = 'timeline-date';
        dateDiv.textContent = formatDate(event.date.toISOString().split('T')[0]);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'timeline-content';
        contentDiv.innerHTML = `
            <h4>${event.name}</h4>
            <p>
                <span class="event-subject">${getSubjectName(event.olympiad.subject)}</span>
                <span class="event-level ${event.olympiad.level}" style="margin-left: 10px;">
                    ${getLevelName(event.olympiad.level)}
                </span>
            </p>
        `;

        itemDiv.appendChild(dateDiv);
        itemDiv.appendChild(contentDiv);
        timelineEvents.appendChild(itemDiv);
    });
}

function renderEventsList() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';

    // Создать список всех событий
    const events = [];
    olympiads.forEach(o => {
        events.push({
            startDate: new Date(o.startDate),
            deadlineDate: new Date(o.deadlineDate),
            olympiad: o
        });
    });

    // Отсортировать по дате начала
    events.sort((a, b) => a.startDate - b.startDate);

    events.forEach(event => {
        const row = document.createElement('tr');
        const title = event.olympiad.nameKey ? t(event.olympiad.nameKey) : (event.olympiad.name || '');
        row.innerHTML = `
            <td class="event-date">${formatDate(event.olympiad.startDate)}</td>
            <td class="event-date">${formatDate(event.olympiad.deadlineDate)}</td>
            <td><strong>${title}</strong></td>
            <td><span class="event-subject">${getSubjectName(event.olympiad.subject)}</span></td>
            <td><span class="event-level ${event.olympiad.level}">${getLevelName(event.olympiad.level)}</span></td>
        `;
        eventsList.appendChild(row);
    });
}

// Инициализировать календарь при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    renderCalendar();
    renderTimeline();
    renderEventsList();
});
