// Простая клиентская авторизация (localStorage)
const USERS_KEY = 'siteUsers';
const CURRENT_USER_KEY = 'currentUser';

function loadUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    updateHeaderUI();
}

function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    updateHeaderUI();
}

function registerUser(username, password, role) {
    const users = loadUsers();
    if (users.find(u => u.username === username)) {
        return { ok: false, message: 'Пользователь с таким логином уже существует' };
    }
    const user = { id: Date.now(), username, password, role };
    users.push(user);
    saveUsers(users);
    setCurrentUser({ id: user.id, username: user.username, role: user.role });
    return { ok: true };
}

function loginUser(username, password) {
    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return { ok: false, message: 'Неверный логин или пароль' };
    setCurrentUser({ id: user.id, username: user.username, role: user.role });
    return { ok: true };
}

function logout() {
    clearCurrentUser();
    alert('Вы вышли');
}

// UI helpers (вызываются из a.html модалок)
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}
function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}
function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

function loginUserFromUI() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const res = loginUser(username, password);
    if (!res.ok) { alert(res.message); return; }
    closeLoginModal();
    updateHeaderUI();
    // Перенаправление: если роль teacher и находитесь вне teachers.html, можно перейти
    const cur = getCurrentUser();
    if (cur && cur.role === 'teacher' && !location.pathname.includes('teachers.html')) {
        // не перенаправляем принудительно, оставим выбор пользователю
    }
}

function registerUserFromUI() {
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;
    if (!username || !password) { alert('Заполните логин и пароль'); return; }
    const res = registerUser(username, password, role);
    if (!res.ok) { alert(res.message); return; }
    closeRegisterModal();
    updateHeaderUI();
}

function updateHeaderUI() {
    const cur = getCurrentUser();
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const userInfo = document.getElementById('userInfo') || document.getElementById('userInfoHeader');
    if (!btnLogin || !btnRegister || !userInfo) return;

    if (cur) {
        btnLogin.style.display = 'none';
        btnRegister.style.display = 'none';
        btnLogin.style.display = 'none';
        btnRegister.style.display = 'none';
        userInfo.style.display = 'flex';
        // Ссылка на профиль. Подбираем относительный путь к profile.html
        const profileLink = location.pathname.includes('/first%20chapter/') || location.pathname.includes('/first chapter/') ? 'profile.html' : '../first chapter/profile.html';
        userInfo.innerHTML = `${cur.username} (${cur.role}) &nbsp; <a href="${profileLink}" style="color:#667eea; font-weight:600; margin-left:8px;">Мой кабинет</a> <button class=\"btn-small\" style=\"margin-left:12px;\" onclick=\"logout();\">Выйти</button>`;
    } else {
        btnLogin.style.display = '';
        btnRegister.style.display = '';
        userInfo.style.display = 'none';
        userInfo.innerHTML = '';
    }
}

// При загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    updateHeaderUI();
});
