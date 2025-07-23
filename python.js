document.addEventListener("DOMContentLoaded", () => {
    const calendarBox = document.getElementById("calendar-box");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementsByClassName("close")[0];
    const jumpButton = document.getElementById("jump-button");
    const optionsHeader = document.getElementById("options-header");
    const optionsList = document.getElementById("options-list");

    function showCalendar(year, month) {
        const date = new Date(year, month);
        let calendarHTML = '<table class="table"><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

        const firstDay = new Date(year, month).getDay();
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<td></td>';
        }

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            calendarHTML += `<td>${day}</td>`;
            if ((day + firstDay) % 7 === 0) {
                calendarHTML += '</tr><tr>';
            }
        }
        calendarHTML += '</tr></table>';
        calendarBox.innerHTML = calendarHTML;
    }

    // Show current month calendar
    const now = new Date();
    showCalendar(now.getFullYear(), now.getMonth());

    // Jump to date modal
    document.getElementById("jump").onclick = function() {
        modal.style.display = "block";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    jumpButton.onclick = function() {
        const dateInput = document.getElementById("jump-date").value;
        if (dateInput) {
            const date = new Date(dateInput);
            showCalendar(date.getFullYear(), date.getMonth());
            modal.style.display = "none";
        }
    }

    // Toggle options dropdown
    optionsHeader.onclick = function() {
        if (optionsList.style.display === "none" || optionsList.style.display === "") {
            optionsList.style.display = "block"; // Show options
        } else {
            optionsList.style.display = "none"; // Hide options
        }
    }

    // Click outside to close the options list
    window.onclick = function(event) {
        if (!optionsHeader.contains(event.target) && !optionsList.contains(event.target)) {
            optionsList.style.display = "none"; // Hide options if clicked outside
        }
    }
});
