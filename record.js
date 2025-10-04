class Calendar {
  constructor(containerEl, labelEl) {
    this.container = containerEl;
    this.labelEl = labelEl;

    const today = new Date();
    this.month = today.getMonth() + 1; // 1–12
    this.year = today.getFullYear();

    this.render();
  }

  updateLabel() {
    const monthNames = [
      "Січень","Лютий","Березень","Квітень","Травень","Червень",
      "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
    ];
    this.labelEl.textContent = `${monthNames[this.month - 1]} ${this.year}`;
  }

  render() {
    this.container.innerHTML = "";
    this.updateLabel();

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

// ініціалізація
const cal = new Calendar(
  document.getElementById("calendar"),
  document.getElementById("month-label")
);

document.getElementById("prev").onclick = () => cal.goPrev();
document.getElementById("next").onclick = () => cal.goNext();
