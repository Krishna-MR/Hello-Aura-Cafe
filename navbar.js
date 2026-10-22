async function loadHTML(elementId, filePath) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Element #${elementId} was not found.`);
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}: ${response.status}`);
        }

        element.innerHTML = await response.text();
    } catch (error) {
        console.error("Error loading HTML:", error);
    }
}

function setupNavbar() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#primary-navigation");

    if (!toggle || !nav) return;

    const icon = toggle.querySelector("i");

    function closeMenu() {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }

    toggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".navbar")) closeMenu();
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 850) closeMenu();
    });

    // Highlight the link for the current page.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll("a").forEach(function (link) {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    await Promise.all([
        loadHTML("navbar", "navbar.html"),
        loadHTML("footer", "footer.html")
    ]);

    setupNavbar();
});
