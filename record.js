class Calendar {
  constructor(containerEl) {
    this.container = containerEl;
    const today = new Date();
    this.month = today.getMonth() + 1; // 1–12
    this.year = today.getFullYear();
    this.render();
  }

  render() {
    // Очистити контейнер
    this.container.innerHTML = "";

    // Створити кнопки назад / вперед
    const btnPrev = document.createElement("button");
    btnPrev.textContent = "<";
    btnPrev.onclick = () => { this.goPrev(); };

    const btnNext = document.createElement("button");
    btnNext.textContent = ">";
    btnNext.onclick = () => { this.goNext(); };

    const header = document.createElement("div");
    header.textContent = `${this.year} — ${this.month}`;
    header.style.display = "inline-block";
    header.style.margin = "0 10px";

    this.container.appendChild(btnPrev);
    this.container.appendChild(header);
    this.container.appendChild(btnNext);

    // Генерація днів місяця
    const daysContainer = document.createElement("div");
    daysContainer.style.marginTop = "10px";

    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const dayEl = document.createElement("span");
      dayEl.textContent = d;
      dayEl.style.margin = "0 5px";
      daysContainer.appendChild(dayEl);
    }

    this.container.appendChild(daysContainer);
  }

  goNext() {
    if (this.month < 12) {
      this.month += 1;
    } else {
      this.month = 1;
      this.year += 1;
    }
    this.render();
  }

  goPrev() {
    if (this.month > 1) {
      this.month -= 1;
    } else {
      this.month = 12;
      this.year -= 1;
    }
    this.render();
  }
}

// Припустимо є <div id="calendar"></div> в HTML
const cal = new Calendar(document.getElementById("calendar"));
