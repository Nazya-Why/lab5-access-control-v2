/*
  ЗМІСТ ПРЕЗЕНТАЦІЇ — тільки текст. Дизайн у style.css, логіка в app.js.
  steps: { t: 'текст кроку', f: номер рисунка (assets/fig-NN.png) }
  key:   головний прийом завдання (короткий рядок коду).
*/
window.REPORT = {
  meta: {
    course: 'Безпека веб-додатків',
    lab: 'Лабораторна робота № 5',
    topic: 'Уразливості контролю доступу: несанкціонований доступ до функцій, зміна ролей та ідентифікаторів користувачів, обхід перевірок',
    group: 'КБ-307',
    teacher: 'Побережник В. О.',
    teacherTitle: 'д.філ., ст. викл. каф. ЗІ',
    org: 'НУ «Львівська політехніка»',
    dept: 'ІКТА · кафедра ЗІ',
    city: 'Львів',
    year: '2026',
    goal: 'Практичне дослідження уразливостей контролю доступу вебзастосунків: виявлення несанкціонованого доступу до адміністративних функцій, маніпуляції ролями, підміни ідентифікаторів користувачів та обходу перевірок авторизації.',
    tools: ['Burp Suite · Proxy', 'Burp Suite · Repeater', 'DevTools', 'PortSwigger Web Security Academy']
  },

  captions: {
    5: 'Завдання виконано', 9: 'Завдання виконано', 20: 'Завдання виконано',
    26: 'Завдання виконано', 31: 'Завдання виконано', 37: 'Завдання виконано',
    42: 'Завдання виконано', 49: 'Завдання виконано', 55: 'Завдання виконано'
  },

  labs: [
    {
      uk: 'Незахищений адмін-функціонал',
      en: 'Unprotected admin functionality',
      kind: 'v', key: 'GET /robots.txt → /administrator-panel',
      url: 'https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality',
      steps: [
        { t: 'Звернення до файлу <code>robots.txt</code> в адресному рядку браузера.', f: 1 },
        { t: 'Вміст <code>robots.txt</code> розкриває прихований шлях до панелі адміністратора <code>/administrator-panel</code>.', f: 2 },
        { t: 'Перехід до прихованої панелі: виявлений шлях вводиться прямо в адресний рядок.', f: 3 },
        { t: 'Незахищена панель адміністратора з переліком користувачів і доступною функцією їх видалення.', f: 4 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 5 }
      ]
    },
    {
      uk: 'Адмін-функціонал з непередбачуваним URL',
      en: 'Unprotected admin functionality with unpredictable URL',
      kind: 'v', key: 'JS-код сторінки → /admin-dhn3zv',
      url: 'https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url',
      steps: [
        { t: 'Витік непередбачуваної адреси адмін-панелі <code>/admin-dhn3zv</code> у клієнтському JavaScript-коді — знайдено через Burp Suite.', f: 6 },
        { t: 'Перехід до прихованої панелі за виявленою адресою <code>/admin-dhn3zv</code>.', f: 7 },
        { t: 'Панель адміністратора з переліком користувачів і доступною функцією їх видалення.', f: 8 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 9 }
      ]
    },
    {
      uk: 'Роль користувача в параметрі запиту',
      en: 'User role controlled by request parameter',
      kind: 'v', key: 'Cookie: Admin=false → Admin=true',
      url: 'https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter',
      steps: [
        { t: 'Авторизація користувача <code>wiener</code> у вебзастосунку.', f: 10 },
        { t: 'Звичайному користувачу доступ до адміністративного інтерфейсу обмежено.', f: 11 },
        { t: 'GET-запит до сторінки профілю в історії HTTP-трафіку Burp Suite.', f: 12 },
        { t: 'Оригінальний запит у Repeater із cookie <code>Admin=false</code>.', f: 13 },
        { t: 'У відповіді сервера для звичайного користувача немає посилань на адмін-панель.', f: 14 },
        { t: 'Модифікація cookie <code>Admin</code> на значення <code>true</code> у Repeater.', f: 15 },
        { t: 'Відповідь сервера тепер містить посилання на адміністративну панель.', f: 16 },
        { t: 'Початкове значення cookie <code>Admin</code> у браузері.', f: 17 },
        { t: 'Значення cookie <code>Admin</code> змінено на <code>true</code> у браузері.', f: 18 },
        { t: 'Отримано несанкціонований доступ до панелі адміністратора.', f: 19 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 20 }
      ]
    },
    {
      uk: 'Роль змінюється в профілі користувача',
      en: 'User role can be modified in user profile',
      kind: 'v', key: '{"email": "…", "roleid": 2}',
      url: 'https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile',
      steps: [
        { t: 'Профіль користувача з формою оновлення електронної пошти.', f: 21 },
        { t: 'Перехоплений POST-запит на оновлення пошти в Burp Suite.', f: 22 },
        { t: 'У тіло JSON-запиту додано параметр <code>roleid</code>.', f: 23 },
        { t: 'Відповідь сервера підтверджує зміну ролі користувача.', f: 24 },
        { t: 'Отримано доступ до адміністративної панелі керування користувачами.', f: 25 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 26 }
      ]
    },
    {
      uk: 'ID користувача в параметрі запиту',
      en: 'User ID controlled by request parameter',
      kind: 'h', key: '/my-account?id=wiener → id=carlos',
      url: 'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter',
      steps: [
        { t: 'Сторінка профілю <code>wiener</code> з параметром <code>id</code> в URL-адресі.', f: 27 },
        { t: 'Заміна параметра <code>id</code> в адресному рядку з <code>wiener</code> на <code>carlos</code>.', f: 28 },
        { t: 'Несанкціонований доступ до сторінки профілю <code>carlos</code>.', f: 29 },
        { t: 'API-ключ користувача <code>carlos</code> введено у форму перевірки.', f: 30 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 31 }
      ]
    },
    {
      uk: 'ID користувача — непередбачувані GUID',
      en: 'User ID controlled by request parameter, with unpredictable user IDs',
      kind: 'h', key: '?id=<GUID користувача carlos>',
      url: 'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids',
      steps: [
        { t: 'Відкриття публікації автора <code>carlos</code>.', f: 32 },
        { t: 'Сторінка автора з його GUID у параметрі URL <code>userId</code>.', f: 33 },
        { t: 'Модифікація параметра <code>id</code> в URL-адресі сторінки профілю.', f: 34 },
        { t: 'Доступ до профілю <code>carlos</code> і виявлення його API-ключа.', f: 35 },
        { t: 'Вилучений API-ключ введено у форму підтвердження.', f: 36 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 37 }
      ]
    },
    {
      uk: 'ID користувача — витік даних у редиректі',
      en: 'User ID controlled by request parameter with data leakage in redirect',
      kind: 'h', key: '302 Found + API-ключ у тілі',
      url: 'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect',
      steps: [
        { t: 'Оригінальний GET-запит до профілю авторизованого користувача <code>wiener</code>.', f: 38 },
        { t: 'Параметр <code>id</code> у GET-запиті змінено на цільового користувача <code>carlos</code>.', f: 39 },
        { t: 'Відповідь <code>302 Found</code>, але в HTML-тілі редиректу — API-ключ <code>carlos</code>.', f: 40 },
        { t: 'Вилучений API-ключ введено у форму підтвердження.', f: 41 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 42 }
      ]
    },
    {
      uk: 'ID користувача — розкриття пароля',
      en: 'User ID controlled by request parameter with password disclosure',
      kind: 'h', key: '<input type="password" value="…">',
      url: 'https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-password-disclosure',
      steps: [
        { t: 'Сторінка профілю користувача <code>wiener</code>.', f: 43 },
        { t: 'Модифікація параметра <code>id</code> в URL-адресі.', f: 44 },
        { t: 'Несанкціонований доступ до профілю адміністратора.', f: 45 },
        { t: 'Пароль адміністратора відкритим текстом у вихідному коді сторінки.', f: 46 },
        { t: 'Вхід під скомпрометованим акаунтом адміністратора.', f: 47 },
        { t: 'Доступ до адміністративної панелі.', f: 48 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 49 }
      ]
    },
    {
      uk: 'Небезпечні прямі посилання на об’єкти',
      en: 'Insecure direct object references',
      kind: 'h', key: 'GET /download-transcript/1.txt',
      url: 'https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references',
      steps: [
        { t: 'Тестове повідомлення та запит транскрипту в розділі Live chat.', f: 50 },
        { t: 'Оригінальний GET-запит на завантаження власного транскрипту.', f: 51 },
        { t: 'Запит змінено, щоб завантажити файл <code>1.txt</code>.', f: 52 },
        { t: 'У відповіді — чат іншого користувача з витоком пароля.', f: 53 },
        { t: 'Вхід за скомпрометованими обліковими даними.', f: 54 },
        { t: 'Завдання успішно виконано — стенд позначено як «Solved».', f: 55 }
      ]
    }
  ],

  conclusions: {
    intro: ['Контроль доступу, який спирається на клієнта або на приховування,', 'не є контролем доступу.'],
    cards: [
      { h: 'Перевірки — лише на сервері', p: 'Роль і права визначає сервер за сесією, а не cookie, поле форми чи JSON-параметр від клієнта.' },
      { h: 'Приховування ≠ захист', p: 'Непередбачуваний URL чи запис у robots.txt не захищає адмін-функції — потрібна явна авторизація на кожен запит.' },
      { h: 'Перевірка власника об’єкта', p: 'Для кожного профілю, файлу чи запису сервер перевіряє, чи має поточний користувач на нього право (захист від IDOR).' },
      { h: 'Не віддавати зайвого', p: 'Ні паролів у value, ні даних у тілі редиректу, ні зайвих полів у моделі запиту (Mass Assignment).' }
    ],
    principles: ['Deny by default', 'Server-side authorization', 'Централізована перевірка прав', 'Least privilege', 'Перевірка власника об’єкта']
  }
};
