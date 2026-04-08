let tg = window.Telegram.WebApp;
tg.expand(); // Разворачивает окно на максимум сразу при открытии

// Покрасим хедер в цвет темы Телеграма
tg.setHeaderColor('secondary_bg_color');

// Кнопка внизу экрана Телеграма (Main Button)
tg.MainButton.text = "ОБНОВИТЬ ДАННЫЕ";
tg.MainButton.show();
tg.MainButton.onClick(function() {
    tg.HapticFeedback.notificationOccurred('success');
    location.reload(); // Перезагрузит страницу
});
