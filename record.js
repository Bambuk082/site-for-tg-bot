document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',

    // ⚡️ Хедер в один рядок: кнопки + місяць
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },

    dateClick: function(info) {
      const clicked = info.date;
      const current = calendar.getDate();

      // Ігноруємо кліки по інших місяцях
      if (clicked.getFullYear() !== current.getFullYear() ||
          clicked.getMonth() !== current.getMonth()) {
        return;
      }

      // Прибираємо попередній вибір
      document.querySelectorAll('.fc-daygrid-day').forEach(day => {
        day.classList.remove('selected-date');
      });

      // Додаємо клас вибраній клітинці
      info.dayEl.classList.add('selected-date');
    }
  });

  calendar.render();
});
