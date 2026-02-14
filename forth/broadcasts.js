// Данные трансляций — казахстанские соревнования
const broadcasts = [
    {
        id: 1,
        olympiadId: 1,
        nameKey: 'broadcast.math.almaty.review',
        descriptionKey: 'broadcast.math.almaty.desc',
        subject: 'math',
        type: 'recorded',
        date: '2026-09-21',
        duration: '2ч 30м',
        views: 5420,
        rating: 4.8,
        thumbnail: '📐',
        city: 'Алматы'
    },
    {
        id: 2,
        olympiadId: 2,
        nameKey: 'broadcast.informatics.nursultan.live',
        descriptionKey: 'broadcast.informatics.nursultan.desc',
        subject: 'informatics',
        type: 'live',
        date: '2026-08-10',
        duration: 'прямая трансляция',
        views: 12840,
        rating: 4.9,
        thumbnail: '💻',
        city: 'Нур‑Султан'
    },
    {
        id: 3,
        olympiadId: 3,
        nameKey: 'broadcast.physics.shymkent',
        descriptionKey: 'broadcast.physics.shymkent.desc',
        subject: 'physics',
        type: 'recorded',
        date: '2026-10-05',
        duration: '3ч',
        views: 3210,
        rating: 4.7,
        thumbnail: '⚛️',
        city: 'Шымкент'
    },
    {
        id: 4,
        olympiadId: 4,
        nameKey: 'broadcast.literature.almaty',
        descriptionKey: 'broadcast.literature.almaty.desc',
        subject: 'literature',
        type: 'recorded',
        date: '2026-05-12',
        duration: '2ч',
        views: 4350,
        rating: 4.5,
        thumbnail: '📚',
        city: 'Алматы'
    },
    {
        id: 5,
        olympiadId: 5,
        nameKey: 'broadcast.chemistry.karaganda',
        descriptionKey: 'broadcast.chemistry.karaganda.desc',
        subject: 'chemistry',
        type: 'recorded',
        date: '2026-11-05',
        duration: '2ч 15м',
        views: 4350,
        rating: 4.6,
        thumbnail: '🧪',
        city: 'Караганда'
    },
    {
        id: 6,
        olympiadId: 6,
        nameKey: 'broadcast.biology.pavlodar',
        descriptionKey: 'broadcast.biology.pavlodar.desc',
        subject: 'biology',
        type: 'recorded',
        date: '2026-06-15',
        duration: '2ч',
        views: 6780,
        rating: 4.7,
        thumbnail: '🔬',
        city: 'Павлодар'
    },
    {
        id: 7,
        olympiadId: 7,
        nameKey: 'broadcast.history.taraz',
        descriptionKey: 'broadcast.history.taraz.desc',
        subject: 'history',
        type: 'recorded',
        date: '2026-04-01',
        duration: '3ч',
        views: 7420,
        rating: 4.8,
        thumbnail: '📖',
        city: 'Тараз'
    },
    {
        id: 8,
        olympiadId: 8,
        nameKey: 'broadcast.english.kostanay.live',
        descriptionKey: 'broadcast.english.kostanay.desc',
        subject: 'english',
        type: 'live',
        date: '2026-07-15',
        duration: 'прямая трансляция',
        views: 9210,
        rating: 4.9,
        thumbnail: '🌐',
        city: 'Костанай'
    }
];

// Функция отображения трансляций
function displayBroadcasts(data = broadcasts) {
    const grid = document.getElementById('broadcastsGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2em;">Трансляции не найдены</p>';
        return;
    }

    data.forEach(broadcast => {
        const card = document.createElement('div');
        card.className = 'broadcast-card';

        const videoDiv = document.createElement('div');
        videoDiv.className = `broadcast-video ${broadcast.type}`;
        videoDiv.textContent = broadcast.thumbnail;
        videoDiv.setAttribute('data-type', broadcast.type === 'live' ? t('broadcast.status.live') : t('broadcast.status.recorded'));

        const infoDiv = document.createElement('div');
        infoDiv.className = 'broadcast-info-card';
        const title = broadcast.nameKey ? t(broadcast.nameKey) : (broadcast.name || '');
        const desc = broadcast.descriptionKey ? t(broadcast.descriptionKey) : (broadcast.description || '');
        infoDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${desc}</p>
            <div class="broadcast-meta">
                <span class="broadcast-tag">${getSubjectName(broadcast.subject)}</span>
                <span class="broadcast-status ${broadcast.type}">${broadcast.type === 'live' ? t('broadcast.status.live') : t('broadcast.status.recorded')}</span>
            </div>
            <div class="broadcast-meta">
                <span>⏱️ ${broadcast.duration}</span>
                <span>👁️ ${broadcast.views} просмотров</span>
            </div>
            <div class="rating">⭐ ${broadcast.rating} / 5.0</div>
            <p class="broadcast-date">📅 ${formatDate(broadcast.date)}</p>
            <button class="btn-watch" onclick="watchBroadcast(${broadcast.id})">${t('btn.watch')}</button>
        `;

        card.appendChild(videoDiv);
        card.appendChild(infoDiv);
        grid.appendChild(card);
    });
}

// Фильтрация трансляций
function filterBroadcasts() {
    const subject = document.getElementById('broadcastSubject').value;
    const type = document.getElementById('broadcastType').value;
    const city = (document.getElementById('broadcastCity') ? document.getElementById('broadcastCity').value : '');

    let filtered = broadcasts.filter(b => {
        return (!subject || b.subject === subject) &&
            (!type || b.type === type) &&
            (!city || b.city === city);
    });

    displayBroadcasts(filtered);
}

// Отображение рекомендаций
function displayRecommendations() {
    const grid = document.getElementById('recommendationsGrid');
    grid.innerHTML = '';

    // Отсортировать по рейтингу
    const topBroadcasts = [...broadcasts].sort((a, b) => b.rating - a.rating).slice(0, 3);

    topBroadcasts.forEach(broadcast => {
        const item = document.createElement('div');
        item.className = 'recommendation-item';
        item.innerHTML = `
            <h4>⭐ ${broadcast.name}</h4>
            <p>${broadcast.description}</p>
            <div class="rating">
                ${'⭐'.repeat(Math.round(broadcast.rating))}
                <span> (${broadcast.rating})</span>
            </div>
            <p style="margin-top: 10px; color: #667eea; font-weight: 600;">
                👁️ ${broadcast.views} просмотров
            </p>
        `;
        grid.appendChild(item);
    });
}

// Просмотр трансляции
function watchBroadcast(id) {
    const broadcast = broadcasts.find(b => b.id === id);
    alert(`Открытие трансляции: "${broadcast.name}"\n\nТип: ${broadcast.type === 'live' ? 'Прямая трансляция' : 'Запись'}\nДата: ${formatDate(broadcast.date)}`);
}

// Инициализировать при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    displayBroadcasts();
    displayRecommendations();

    document.getElementById('broadcastSubject').addEventListener('change', filterBroadcasts);
    document.getElementById('broadcastType').addEventListener('change', filterBroadcasts);
    if (document.getElementById('broadcastCity')) {
        document.getElementById('broadcastCity').addEventListener('change', filterBroadcasts);
    }
});
