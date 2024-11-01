const eventsData = {
    "2024-11-01": [
        { title: "National AI Conference", description: "An in-depth discussion on AI trends." },
    ],
    "2024-11-02": [
        { title: "Tech Expo", description: "Showcasing the latest technology." },
    ],
    "2024-11-04": [
        { title: "Robotics Workshop", description: "Hands-on workshop on robotics." },
    ],
    "2024-11-07": [
        { title: "Blockchain Seminar", description: "Understanding blockchain technology." },
    ],
    "2024-11-09": [
        { title: "Cybersecurity Conference", description: "Discussing cybersecurity threats." },
    ],
    "2024-11-11": [
        { title: "Virtual Reality Experience", description: "Explore VR technologies." },
    ],
    "2024-11-15": [
        { title: "Machine Learning Bootcamp", description: "An intensive bootcamp on ML." },
    ],
};

const calendarCells = document.querySelectorAll('.calendar td');
const eventsSection = document.getElementById('events-section');
const eventList = document.getElementById('event-list');
const selectedDateSpan = document.getElementById('selected-date');

calendarCells.forEach(cell => {
    cell.addEventListener('click', () => {
        const date = cell.getAttribute('data-date');
        selectedDateSpan.textContent = date;

        // Clear previous events
        eventList.innerHTML = '';

        // Get events for the selected date
        const events = eventsData[date] || [];

        // Populate event list
        if (events.length === 0) {
            eventList.innerHTML = '<p>No events scheduled.</p>';
        } else {
            events.forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.classList.add('event-item');
                eventItem.innerHTML = `<div class="event-title">${event.title}</div><p class="event-description">${event.description}</p>`;
                eventList.appendChild(eventItem);
            });
        }

        // Show the events section with transition
        eventsSection.classList.add('visible');

        // Ensure the section is reset to allow the transition
        setTimeout(() => {
            eventsSection.style.maxHeight = `${eventsSection.scrollHeight}px`;
        }, 10);
    });
});

// Close event section on clicking outside
document.addEventListener('click', (event) => {
    if (!eventsSection.contains(event.target) && !Array.from(calendarCells).some(cell => cell.contains(event.target))) {
        eventsSection.classList.remove('visible');
        eventsSection.style.maxHeight = '0';
        eventList.innerHTML = '';
        selectedDateSpan.textContent = 'Select a date';
    }
});