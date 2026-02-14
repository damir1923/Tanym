// Скрипт для страницы "Мой кабинет"

// Получить данные профиля пользователя
function getUserProfileData(username) {
    const profiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
    return profiles[username] || {
        photo: null,
        documents: [],
        achievements: '',
        studyExperience: '',
        email: '',
        nickname: username
    };
}

// Сохранить данные профиля пользователя
function saveUserProfileData(username, data) {
    const profiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
    profiles[username] = data;
    localStorage.setItem('userProfiles', JSON.stringify(profiles));
}

// Отобразить профиль в режиме просмотра
function renderProfileView(cur, profile) {
    const root = document.getElementById('profileRoot');

    let photoHTML = '';
    if (profile.photo) {
        photoHTML = `<img src="${profile.photo}" alt="Фото профиля">`;
    } else {
        photoHTML = `<div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 60px;">👤</div>`;
    }

    let documentsHTML = '';
    if (profile.documents && profile.documents.length > 0) {
        documentsHTML = `
            <div class="profile-section">
                <h3>📄 Документы</h3>
                <ul class="file-list">
                    ${profile.documents.map((doc, idx) => `
                        <li class="file-item">
                            <a href="${doc.data}" download="${doc.name}">📥 ${doc.name}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    let achievementsHTML = profile.achievements ? `
        <div class="profile-section">
            <h3>⭐ Достижения</h3>
            <div class="achievements-display">${profile.achievements}</div>
        </div>
    ` : '';

    let studyExperienceHTML = profile.studyExperience ? `
        <div class="profile-section">
            <h3>📚 Стаж учёбы</h3>
            <div class="achievements-display">${profile.studyExperience}</div>
        </div>
    ` : '';

    root.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar-section">
                <div class="profile-photo">${photoHTML}</div>
            </div>
            <div class="profile-info-section">
                <h2>👤 ${cur.username}</h2>
                <p style="font-size: 18px; color: #666;">${t('header.welcome')}</p>
                <div class="role-badge">${cur.role === 'student' ? t('role.student') : t('role.teacher')}</div>
                <p style="margin-top: 15px; color: #888;"><strong>${t('profile.email')}</strong> ${profile.email || t('profile.notSet')}</p>
            </div>
        </div>

        ${documentsHTML}

        ${achievementsHTML}

        ${studyExperienceHTML}

        <div class="edit-toggle">
            <button class="btn-primary" onclick="toggleEditMode()">${t('btn.edit')}</button>
            <button class="btn-primary" onclick="toggleAccountSettings()">${t('btn.settings')}</button>
            <button class="btn-primary" onclick="logout();">${t('btn.logout')}</button>
            <button class="btn-primary" onclick="goToTeacherArea()" ${cur.role !== 'teacher' ? 'style="display:none;"' : ''}>${t('btn.teacher')}</button>
        </div>
    `;
    if (typeof translateAll === 'function') translateAll();
}

// Отобразить профиль в режиме редактирования
function renderProfileEdit(cur, profile) {
    const root = document.getElementById('profileRoot');

    let photoPreview = '';
    if (profile.photo) {
        photoPreview = `<div class="profile-photo"><img src="${profile.photo}" alt="Фото профиля" style="cursor: pointer; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"></div>`;
    } else {
        photoPreview = `<div class="profile-photo" style="text-align: center; margin: 15px 0;"><div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 60px; margin: 0 auto;">📷</div></div>`;
    }

    let documentsListHTML = '';
    if (profile.documents && profile.documents.length > 0) {
        documentsListHTML = `
            <div style="margin-top: 15px;">
                <label style="display: block; margin-bottom: 12px; font-weight: 600; color: #333;">Загруженные документы:</label>
                <ul class="file-list">
                    ${profile.documents.map((doc, idx) => `
                        <li class="file-item">
                            <span>📄 ${doc.name}</span>
                            <button type="button" onclick="removeDocument('${idx}')" style="color: #ff4757; cursor: pointer; border: none; background: none; font-size: 20px; padding: 5px 10px;">✕</button>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    root.innerHTML = `
        <h2 style="text-align: center; color: #333; margin-bottom: 30px;">${t('header.editProfile')}</h2>
        
        <div class="profile-form">
            <div class="profile-section">
                <h3>${t('profile.photo')}</h3>
                <input type="file" id="profilePhoto" accept="image/*" style="cursor: pointer;">
                ${photoPreview}
            </div>

            <div class="profile-section">
                <h3>${t('profile.email')}</h3>
                <div class="form-group">
                    <input type="email" id="profileEmail" placeholder="${t('form.email')}" value="${profile.email || ''}" data-i18n-placeholder="form.email">
                </div>
            </div>

            <div class="profile-section">
                <h3>${t('profile.documents')}</h3>
                <input type="file" id="profileDocuments" multiple style="cursor: pointer;">
                ${documentsListHTML}
            </div>

            <div class="profile-section">
                <h3>${t('profile.achievements')}</h3>
                <div class="form-group">
                    <textarea id="achievementsText" placeholder="${t('profile.achievements')}" data-i18n-placeholder="profile.achievements">${profile.achievements || ''}</textarea>
                </div>
            </div>

            <div class="profile-section">
                <h3>${t('profile.experience')}</h3>
                <div class="form-group">
                    <textarea id="studyExperienceText" placeholder="${t('profile.experience')}" data-i18n-placeholder="profile.experience">${profile.studyExperience || ''}</textarea>
                </div>
            </div>

            <div class="edit-toggle" style="justify-content: center;">
                <button class="btn-primary" onclick="saveProfileEdit()" style="min-width: 200px;">${t('btn.save')}</button>
                <button class="btn-primary" onclick="cancelEditMode()" style="min-width: 200px; background: linear-gradient(135deg, #ff4757 0%, #ff6348 100%); box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);">${t('btn.cancel')}</button>
            </div>
        </div>
    `;
    if (typeof translateAll === 'function') translateAll();

    // Установить обработчики событий для файлов
    document.getElementById('profileDocuments').addEventListener('change', addDocumentsToProfile);
    document.getElementById('profilePhoto').addEventListener('change', addPhotoToProfile);
}

// Добавить фото в профиль
function addPhotoToProfile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        window.currentProfilePhoto = event.target.result;
    };
    reader.readAsDataURL(file);
}

// Добавить документы в профиль
function addDocumentsToProfile(e) {
    if (!window.currentProfileDocuments) window.currentProfileDocuments = [];

    Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (event) {
            window.currentProfileDocuments.push({
                name: file.name,
                data: event.target.result
            });
        };
        reader.readAsDataURL(file);
    });
}

// Удалить документ
function removeDocument(idx) {
    const cur = getCurrentUser();
    if (!cur) return;

    const profile = getUserProfileData(cur.username);
    profile.documents = profile.documents.filter((_, i) => i !== parseInt(idx));
    saveUserProfileData(cur.username, profile);
    toggleEditMode();
    setTimeout(() => toggleEditMode(), 10);
}

// Переключить режим редактирования
function toggleEditMode() {
    const isEditing = document.getElementById('achievementsText') !== null;
    const cur = getCurrentUser();

    if (!cur) {
        renderProfile();
        return;
    }

    const profile = getUserProfileData(cur.username);
    if (isEditing) {
        renderProfileView(cur, profile);
    } else {
        window.currentProfilePhoto = null;
        window.currentProfileDocuments = [];
        renderProfileEdit(cur, profile);
    }
}

// Сохранить изменения профиля
function saveProfileEdit() {
    const cur = getCurrentUser();
    if (!cur) return;

    const profile = getUserProfileData(cur.username);

    // Обновить фото если загружено новое
    if (window.currentProfilePhoto) {
        profile.photo = window.currentProfilePhoto;
    }

    // Обновить email
    profile.email = document.getElementById('profileEmail').value.trim();

    // Добавить новые документы
    if (window.currentProfileDocuments && window.currentProfileDocuments.length > 0) {
        profile.documents = profile.documents || [];
        profile.documents = profile.documents.concat(window.currentProfileDocuments);
    }

    // Обновить текстовые поля
    profile.achievements = document.getElementById('achievementsText').value;
    profile.studyExperience = document.getElementById('studyExperienceText').value;

    saveUserProfileData(cur.username, profile);
    window.currentProfilePhoto = null;
    window.currentProfileDocuments = [];
    alert(t('msg.savedSuccess'));
    renderProfile();
}

// Отменить редактирование
function cancelEditMode() {
    window.currentProfilePhoto = null;
    window.currentProfileDocuments = [];
    renderProfile();
}

// Переключить режим параметров аккаунта
function toggleAccountSettings() {
    const isEditing = document.getElementById('accountSettingsForm') !== null;
    const cur = getCurrentUser();

    if (!cur) {
        renderProfile();
        return;
    }

    const profile = getUserProfileData(cur.username);
    if (isEditing) {
        renderProfileView(cur, profile);
    } else {
        renderAccountSettings(cur, profile);
    }
}

// Отобразить форму параметров аккаунта
function renderAccountSettings(cur, profile) {
    const root = document.getElementById('profileRoot');

    root.innerHTML = `
        <h2 style="text-align: center; color: #333; margin-bottom: 30px;">${t('header.accountSettings')}</h2>
        
        <div class="profile-form" id="accountSettingsForm">
            <div class="profile-section">
                <h3>${t('profile.nicknameChange')}</h3>
                <div class="form-group">
                    <label data-i18n="form.newNickname">Новый никнейм</label>
                    <input type="text" id="newNicknameInput" placeholder="${t('form.newNickname')}" data-i18n-placeholder="form.newNickname" value="${profile.nickname || cur.username}">
                </div>
                <button class="btn-primary" onclick="changeNickname()" style="margin-top: 10px;">${t('btn.save')}</button>
            </div>

            <div class="profile-section">
                <h3>${t('profile.passwordChange')}</h3>
                <div class="form-group">
                    <label data-i18n="form.currentPassword">Текущий пароль</label>
                    <input type="password" id="currentPasswordInput" placeholder="${t('form.currentPassword')}" data-i18n-placeholder="form.currentPassword">
                </div>
                <div class="form-group">
                    <label data-i18n="form.newPassword">Новый пароль</label>
                    <input type="password" id="newPasswordInput" placeholder="${t('form.newPassword')}" data-i18n-placeholder="form.newPassword">
                </div>
                <div class="form-group">
                    <label data-i18n="form.confirmPassword">Подтвердить новый пароль</label>
                    <input type="password" id="confirmPasswordInput" placeholder="${t('form.confirmPassword')}" data-i18n-placeholder="form.confirmPassword">
                </div>
                <button class="btn-primary" onclick="changePassword()" style="margin-top: 10px;">${t('btn.save')}</button>
            </div>

            <div class="edit-toggle" style="justify-content: center;">
                <button class="btn-primary" onclick="toggleAccountSettings()" style="min-width: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">⬅️ Вернуться в профиль</button>
            </div>
        </div>
    `;
}

// Изменить никнейм
function changeNickname() {
    const cur = getCurrentUser();
    if (!cur) return;

    const newNickname = document.getElementById('newNicknameInput').value.trim();

    if (!newNickname) {
        alert(t('msg.enterNickname'));
        return;
    }

    if (newNickname === cur.username) {
        alert(t('msg.nicknameError'));
        return;
    }

    const profile = getUserProfileData(cur.username);
    profile.nickname = newNickname;
    saveUserProfileData(cur.username, profile);

    alert(t('msg.nicknameSuccess'));
    toggleAccountSettings();
}

// Изменить пароль
function changePassword() {
    const cur = getCurrentUser();
    if (!cur) return;

    const currentPassword = document.getElementById('currentPasswordInput').value;
    const newPassword = document.getElementById('newPasswordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    // Проверка текущего пароля
    const users = JSON.parse(localStorage.getItem('siteUsers') || '[]');
    const user = users.find(u => u.username === cur.username);

    if (!user || user.password !== currentPassword) {
        alert(t('msg.passwordWrongCurrent'));
        return;
    }

    if (!newPassword || !confirmPassword) {
        alert(t('msg.fillAllFields'));
        return;
    }

    if (newPassword !== confirmPassword) {
        alert(t('msg.passwordMismatch'));
        return;
    }

    if (newPassword === currentPassword) {
        alert(t('msg.passwordSame'));
        return;
    }

    if (newPassword.length < 4) {
        alert(t('msg.passwordMinLength'));
        return;
    }

    // Обновить пароль
    user.password = newPassword;
    localStorage.setItem('siteUsers', JSON.stringify(users));

    alert(t('msg.passwordSuccess'));
    toggleAccountSettings();
}

function renderProfile() {
    const root = document.getElementById('profileRoot');
    const cur = getCurrentUser();
    if (!root) return;

    if (!cur) {
        root.innerHTML = `
            <h2 style="text-align: center; color: #333; margin-bottom: 40px;">🔐 Вход в личный кабинет</h2>
            <div class="login-grid">
                <div class="login-card">
                    <h3>📝 Вход</h3>
                    <input id="pageLoginUsername" placeholder="Введите логин" />
                    <input id="pageLoginPassword" type="password" placeholder="Введите пароль" />
                    <button class="btn-primary" onclick="pageLogin()" style="width: 100%; margin-top: 15px;">Войти</button>
                </div>
                <div class="login-card">
                    <h3>✍️ Регистрация</h3>
                    <input id="pageRegUsername" placeholder="Придумайте логин" />
                    <input id="pageRegPassword" type="password" placeholder="Придумайте пароль" />
                    <label style="display:block; margin-bottom:8px; font-weight: 600;">Выберите вашу роль:</label>
                    <select id="pageRegRole" style="width:100%; padding:12px; margin-bottom:15px; border: 2px solid #e0e0e0; border-radius: 8px; font-family: inherit; font-size: 14px; transition: border-color 0.3s ease;">
                        <option value="student">👨‍🎓 Ученик</option>
                        <option value="teacher">👨‍🏫 Учитель</option>
                    </select>
                    <button class="btn-primary" onclick="pageRegister()" style="width: 100%;">Зарегистрироваться</button>
                </div>
            </div>
        `;
    } else {
        const profile = getUserProfileData(cur.username);
        renderProfileView(cur, profile);
    }
}

function pageLogin() {
    const username = document.getElementById('pageLoginUsername').value.trim();
    const password = document.getElementById('pageLoginPassword').value;
    const res = loginUser(username, password);
    if (!res.ok) { alert(res.message); return; }
    alert(t('msg.loginSuccess'));
    renderProfile();
    updateHeaderUI();
}

function pageRegister() {
    const username = document.getElementById('pageRegUsername').value.trim();
    const password = document.getElementById('pageRegPassword').value;
    const role = document.getElementById('pageRegRole').value;
    if (!username || !password) { alert(t('msg.fillFields')); return; }
    const res = registerUser(username, password, role);
    if (!res.ok) { alert(res.message); return; }
    alert(t('msg.registerSuccess'));
    renderProfile();
    updateHeaderUI();
}

function goToTeacherArea() {
    window.location.href = '../fifth/teachers.html';
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
    renderProfile();
});
