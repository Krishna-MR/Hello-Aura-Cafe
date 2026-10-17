
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

    document.addEventListener("DOMContentLoaded", async function () {
        await Promise.all([
            loadHTML("navbar", "navbar.html"),
            loadHTML("footer", "footer.html")
        ]);
    });

