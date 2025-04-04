document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const categoryFilter = document.getElementById("categoryFilter");
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const sortFilter = document.getElementById("sortFilter");
    const toggleViewBtn = document.getElementById("toggleViewBtn");
    const eventList = document.getElementById("eventList");

    function filterEvents() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const checkedFilters = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        const events = document.querySelectorAll(".event");

        events.forEach(event => {
            const category = event.dataset.category;
            const location = event.dataset.location;
            const text = event.innerText.toLowerCase();

            const matchesSearch = text.includes(searchTerm);
            const matchesCategory = selectedCategory === "all" || category === selectedCategory;
            const matchesFilters = checkedFilters.length === 0 || checkedFilters.includes(location);

            event.style.display = matchesSearch && matchesCategory && matchesFilters ? "block" : "none";
        });
    }

    function sortEvents() {
        const eventsArray = Array.from(document.querySelectorAll(".event"));
        const sortBy = sortFilter.value;

        eventsArray.sort((a, b) => {
            if (sortBy === "date") return new Date(a.dataset.date) - new Date(b.dataset.date);
            if (sortBy === "popularity") return b.dataset.popularity - a.dataset.popularity;
            if (sortBy === "location") return a.dataset.location.localeCompare(b.dataset.location);
        });

        eventList.innerHTML = "";
        eventsArray.forEach(event => eventList.appendChild(event));
    }

    searchBar.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    checkboxes.forEach(cb => cb.addEventListener("change", filterEvents));
    sortFilter.addEventListener("change", sortEvents);
    toggleViewBtn.addEventListener("click", () => eventList.classList.toggle("grid-view"));
});

document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.getElementById("calendarDays");
    const currentMonth = document.getElementById("currentMonth");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const eventPopup = document.getElementById("eventPopup");
    const closePopup = document.getElementById("closePopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupDetails = document.getElementById("popupDetails");

    let today = new Date();
    let month = today.getMonth();  // Current month (0-11)
    let year = today.getFullYear(); // Current year

    const events = [
        // April Events
        { date: "2025-04-05", title: "Tech Conference", details: "A great event for tech lovers!" },
        { date: "2025-04-12", title: "Startup Pitch", details: "Entrepreneurs showcase their ideas." },
        { date: "2025-04-20", title: "AI Workshop", details: "Learn AI & ML hands-on." },
        
        // May Events
        { date: "2025-05-02", title: "Hackathon", details: "48-hour coding challenge with prizes!" },
        { date: "2025-05-10", title: "Cybersecurity Meetup", details: "Discussing ethical hacking trends." },
        { date: "2025-05-18", title: "GreenTech Summit", details: "Innovations in sustainable technology." }
    ];

    function renderCalendar() {
        calendarDays.innerHTML = "";
        let firstDay = new Date(year, month, 1).getDay();
        let lastDate = new Date(year, month + 1, 0).getDate();

        currentMonth.innerText = `${new Date(year, month).toLocaleString("default", { month: "long" })} ${year}`;

        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            calendarDays.appendChild(emptyDiv);
        }

        for (let i = 1; i <= lastDate; i++) {
            let dayDiv = document.createElement("div");
            dayDiv.innerText = i;

            let fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

            let event = events.find(e => e.date === fullDate);
            if (event) {
                dayDiv.classList.add("event-day");
                dayDiv.addEventListener("click", function () {
                    popupTitle.innerText = event.title;
                    popupDetails.innerText = event.details;
                    eventPopup.style.display = "flex";
                });
            }

            calendarDays.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener("click", function () {
        if (month === 0) {
            month = 11;
            year--;
        } else {
            month--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", function () {
        if (month === 11) {
            month = 0;
            year++;
        } else {
            month++;
        }
        renderCalendar();
    });

    closePopup.addEventListener("click", function () {
        eventPopup.style.display = "none";
    });

    renderCalendar();
});


document.addEventListener("DOMContentLoaded", function () {
    const newsTickerText = document.getElementById("newsTickerText");
    const newsContainer = document.getElementById("newsContainer");
    const newsCategory = document.getElementById("newsCategory");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let newsData = [
        { title: "Tech Innovation Summit", category: "technology", content: "Join the latest tech event happening soon." },
        { title: "Eco-Friendly Drive", category: "environment", content: "New campaign for reducing plastic waste." },
        { title: "Web Dev Hackathon", category: "events", content: "A 24-hour coding challenge for developers." },
        { title: "AI Breakthrough", category: "technology", content: "New AI model surpasses human capabilities." },
        { title: "Solar Energy Project", category: "environment", content: "A new renewable energy plan is in motion." }
    ];

    let visibleNews = 3; 

    function updateNewsTicker() {
        if (!newsTickerText || !newsData.length) return;
        
        let index = 0;
        function changeNews() {
            newsTickerText.innerText = newsData[index].title;
            index = (index + 1) % newsData.length;
        }
        changeNews();
        setInterval(changeNews, 3000);
    }

    function renderNews(category = "all") {
        newsContainer.innerHTML = "";
        let filteredNews = newsData.filter(news => category === "all" || news.category === category);
        let displayedNews = filteredNews.slice(0, visibleNews);

        displayedNews.forEach(news => {
            let newsDiv = document.createElement("div");
            newsDiv.classList.add("news-item");
            newsDiv.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
            newsContainer.appendChild(newsDiv);
        });

        loadMoreBtn.style.display = displayedNews.length < filteredNews.length ? "block" : "none";
    }

    newsCategory.addEventListener("change", function () {
        visibleNews = 3; 
        renderNews(this.value);
    });

    loadMoreBtn.addEventListener("click", function () {
        visibleNews += 2;
        renderNews(newsCategory.value);
    });

    updateNewsTicker();
    renderNews();
});



document.addEventListener("DOMContentLoaded", function () {
    const eventForm = document.getElementById("eventForm");

    eventForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents page reload

        const submitBtn = eventForm.querySelector(".submit-btn");
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        const eventData = {
            title: document.getElementById("eventTitle").value,
            date: document.getElementById("eventDate").value,
            location: document.getElementById("eventLocation").value,
            description: document.getElementById("eventDescription").value
        };

        fetch("http://localhost:5000/add-event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            eventForm.reset(); // Clear form fields
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting your event. Please try again later.");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Event";
        });
    });
});
