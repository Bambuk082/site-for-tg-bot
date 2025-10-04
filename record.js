document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const monthLabel = document.getElementById('month-label');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false, // ховаємо стандартний тулбар

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

  // Функція для оновлення тексту місяць/рік
  function updateMonthLabel() {
    const date = calendar.getDate();
    const monthNames = [
      "Січень","Лютий","Березень","Квітень","Травень","Червень",
      "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
    ];
    monthLabel.textContent = monthNames[date.getMonth()] + " " + date.getFullYear();
  }

  updateMonthLabel();

  // Навігація
  document.getElementById('prev').addEventListener('click', () => {
    calendar.prev();
    updateMonthLabel();
  });

  document.getElementById('next').addEventListener('click', () => {
    calendar.next();
    updateMonthLabel();
  });
});

