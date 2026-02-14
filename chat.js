// Локальный "ИИ" — улучшенная эвристика для рекомендаций
const skillProjects = {
    math: [
        { title: 'Проект: Математическая модель', desc: 'Исследовательский проект по моделированию задач.' },
        { title: 'Курс: Олимпиадная математика', desc: 'Углублённые задачи и теории.' }
    ],
    informatics: [
        { title: 'Проект: Веб-приложение для задач', desc: 'Создайте платформу для генерации задач.' },
        { title: 'Курс: Алгоритмы и структуры', desc: 'Практика алгоритмов и олимпиадное программирование.' }
    ],
    physics: [
        { title: 'Лабораторный проект: Моделирование', desc: 'Практические эксперименты и симуляции.' }
    ],
    chemistry: [{ title: 'Проект: Анализ реакций', desc: 'Исследование реакций и отчёт' }],
    biology: [{ title: 'Проект: Исследование экосистем', desc: 'Полевые наблюдения и анализ' }],
    literature: [{ title: 'Проект: Аналитика текстов', desc: 'Сбор и анализ литературных произведений' }],
    english: [{ title: 'Проект: Блог на английском', desc: 'Практика письма и публикация работ' }]
};

function appendMessage(text, cls = '') {
    const container = document.getElementById('messages');
    const el = document.createElement('div');
    el.className = 'message ' + cls;
    el.textContent = text;
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;
    return el;
}

function extractSubjects(text) {
    const map = {
        math: ['мат', 'алг', 'геом', 'матем'],
        informatics: ['программ', 'алгоритм', 'код', 'информ'],
        physics: ['физик', 'механ', 'электр', 'оптик'],
        chemistry: ['хими', 'реакц', 'органик', 'неорганик'],
        biology: ['биол', 'организм', 'эколог'],
        literature: ['литер', 'поэт', 'стих', 'анализ текст'],
        english: ['англ', 'english']
    };
    const found = new Set();
    const s = text.toLowerCase();
    Object.keys(map).forEach(key => {
        map[key].forEach(token => { if (s.includes(token)) found.add(key); });
    });
    return Array.from(found);
}

function extractStrengthsWeaknesses(text) {
    const s = text.toLowerCase();
    const strengths = [];
    const weaknesses = [];

    // простые эвристики
    if (s.includes('сильн') || s.includes('хорошо') || s.includes('умею')) strengths.push('confidence');
    if (s.includes('слаб') || s.includes('трудн') || s.includes('не умею')) weaknesses.push('practice');

    // предметы как сильные/слабые
    const subjects = extractSubjects(text);
    subjects.forEach(sub => {
        if (s.includes('не') && (s.includes(sub) || s.includes(sub.slice(0, 3)))) weaknesses.push(sub);
        else strengths.push(sub);
    });

    return { strengths: Array.from(new Set(strengths)), weaknesses: Array.from(new Set(weaknesses)) };
}

function buildRecommendation(analysis) {
    const { strengths, weaknesses } = analysis;
    const suggestions = [];

    // если есть предметы в сильных — давать проекты для них
    strengths.forEach(s => {
        if (skillProjects[s]) {
            skillProjects[s].forEach(p => suggestions.push({ reason: `Сильная сторона: ${s}`, ...p }));
        }
    });

    // если есть слабые места — давать шаги для прокачки
    weaknesses.forEach(w => {
        if (w === 'practice') suggestions.push({ title: 'План прокачки', desc: 'Регулярные тренировки: 3 задачи в день, разбор решений и повторение тем.' });
        if (skillProjects[w]) suggestions.push({ title: `Курс для улучшения в ${w}`, desc: `Курс и практические задания по ${w}.` });
    });

    // общий совет если ничего не найдено
    if (suggestions.length === 0) {
        suggestions.push({ title: 'Общий путь', desc: 'Определите предметы, которые вам интересны, и сделайте 2 небольших проекта в год.' });
    }

    return suggestions;
}

function analyzeAndRespond(text) {
    const analysis = extractStrengthsWeaknesses(text);
    appendMessage('Анализирую ваш ввод...', 'bot');

    setTimeout(() => {
        const recs = buildRecommendation(analysis);
        appendMessage('Вот что могу предложить:', 'bot');
        const suggestions = document.getElementById('suggestions');
        suggestions.innerHTML = '';
        recs.forEach(r => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.marginBottom = '10px';
            card.innerHTML = `<div style="font-weight:700">${r.title}</div><div style="font-size:0.95em;color:#444">${r.desc}</div>`;
            suggestions.appendChild(card);
        });
        appendMessage('Готово — посмотрите рекомендации справа. Могу детализировать план по выбранному проекту.', 'bot');
    }, 400);
}

// Включите этот флаг, чтобы использовать удалённый OpenAI через локальный прокси (/api/chat)
const USE_REMOTE_AI = true;

async function detectRemoteAI(timeoutMs = 1000) {
    if (!USE_REMOTE_AI) return false;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const resp = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'health_check' }),
            signal: controller.signal
        });
        clearTimeout(id);
        if (!resp.ok) return false;
        const j = await resp.json();
        return !!(j && (j.reply || j.result));
    } catch (e) {
        clearTimeout(id);
        return false;
    }
}

async function remoteChat(message) {
    try {
        const resp = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        if (!resp.ok) throw new Error('Network response not ok');
        const j = await resp.json();
        return j.reply || j.result || '';
    } catch (e) {
        console.error('remoteChat error', e);
        return 'Ошибка подключения к ИИ-серверу.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // проверяем доступность удалённого ИИ и при недоступности отключаем
    (async () => {
        if (USE_REMOTE_AI) {
            const ok = await detectRemoteAI(1200);
            if (!ok) {
                appendMessage('Ошибка подключения к ИИ-серверу. Использую локальную логику.', 'bot');
                // переключаем режим локального ИИ
                window.USE_REMOTE_AI = false;
            }
        }
    })();
    const input = document.getElementById('chatInput');
    const send = document.getElementById('sendBtn');
    const advice = document.getElementById('adviceBtn');

    send.addEventListener('click', () => {
        const v = input.value.trim();
        if (!v) return;
        appendMessage(v, 'user');
        input.value = '';
        if (USE_REMOTE_AI) {
            const placeholder = appendMessage('...', 'bot');
            remoteChat(v).then(reply => {
                // если ответ — сообщение об ошибке, делаем локальный fallback
                if (!reply || /ошиб|error|Ошибка/i.test(reply)) {
                    console.warn('Remote AI failed, falling back to local analyzer. Reply:', reply);
                    placeholder.textContent = 'Ошибка подключения к ИИ-серверу. Использую локальную логику.';
                    // небольшая задержка чтобы пользователь увидел сообщение
                    setTimeout(() => analyzeAndRespond(v), 300);
                } else {
                    placeholder.textContent = reply;
                }
            }).catch(err => {
                console.error('remoteChat promise error', err);
                const placeholder = appendMessage('Ошибка подключения к ИИ-серверу. Использую локальную логику.', 'bot');
                setTimeout(() => analyzeAndRespond(v), 300);
            });
        } else {
            analyzeAndRespond(v);
        }
    });

    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send.click(); });

    advice.addEventListener('click', () => {
        appendMessage('Хочу развивать программирование и алгоритмы, но слаб в решении задач.', 'user');
        analyzeAndRespond('программирование алгоритмы слаб в решении задач');
    });

    // greeting
    appendMessage('Привет! Опишите ваши сильные и слабые стороны по предметам и навыкам — предложу проекты и план прокачки.', 'bot');
});
