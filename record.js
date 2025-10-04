document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const monthLabel = document.getElementById('month-label');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false,
    contentHeight: 'auto'
  });

  calendar.render();

  // Оновлення місяця у шапці
  function updateMonthLabel() {
    const date = calendar.getDate();
    const monthNames = [
      "Січень","Лютий","Березень","Квітень","Травень","Червень",
      "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
    ];
    monthLabel.textContent = monthNames[date.getMonth()] + " " + date.getFullYear();
  }

  updateMonthLabel();

  // Кнопки перемикання
  document.getElementById('prev').addEventListener('click', () => {
    calendar.prev();
    updateMonthLabel();
  });

  document.getElementById('next').addEventListener('click', () => {
    calendar.next();
    updateMonthLabel();
  });

  // Вибір дати
  calendarEl.addEventListener('click', function(e){
    if(e.target.closest('.fc-daygrid-day')){
      document.querySelectorAll('.fc-daygrid-day').forEach(day => {
        day.classList.remove('selected-date');
      });
      e.target.closest('.fc-daygrid-day').classList.add('selected-date');
    }
  });
});
