# Hello Aura Cafe ☕

### Coffee, comfort & good vibes

Welcome to **Hello Aura Cafe**, a cosy cafe website concept built to
share our love of coffee, fresh bakery favourites, sweet treats, and the
little moments that bring people together.

## About the Website

The Hello Aura Cafe website is designed to give visitors a warm,
welcoming online experience. It helps customers discover the cafe,
explore the menu, and find the order page.

### Brand Feel

-   Warm, cosy, and uplifting
-   Welcoming for everyday coffee breaks and meet-ups
-   Focused on coffee, comfort, connection, fresh bakery, and sweet
    treats

## Website Features

-   **Home page** --- introduces Hello Aura Cafe and its atmosphere.
-   **Navigation bar** --- shared navigation loaded from `navbar.html`.
-   **Menu page** --- lets visitors explore cafe favourites.
-   **Order Now page** --- displays menu items, category filters,
    quantity controls, and a cart total.
-   **Footer** --- shared footer content loaded from `footer.html`.
-   **Responsive styling** --- CSS can be used to adapt the pages to
    different screen sizes.

## Design Direction

Use a consistent **green, cream, and gold** colour palette to create a
natural, relaxed, and welcoming cafe identity. Keep typography readable,
spacing comfortable, and buttons easy to find.

Suggested design principles: 1. Use inviting coffee and bakery imagery.
2. Keep navigation simple and consistent across pages. 3. Make menu
prices and order controls easy to read. 4. Ensure pages work on both
desktop and mobile screens. 5. Use clear calls to action such as **View
Menu** and **Order Now**.

## Project Structure

Example structure for the website:

``` text
hello-aura-cafe/
├── index.html
├── home.html
├── menu.html
├── order.html
├── navbar.html
├── footer.html
├── nav.css
├── index.css
├── home.css
├── pages.css
├── order.css
└── README.md
```

Your actual project may contain additional files or use slightly
different names.

## Run the Website Locally

The navigation and footer are shared HTML files that are inserted into
page placeholders with JavaScript `fetch()`.

Because browsers usually block local `fetch()` requests from pages
opened directly with `file://`, run the project through a local
development server.

### Using VS Code Live Server

1.  Open the project folder in Visual Studio Code.
2.  Install the **Live Server** extension if it is not already
    installed.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.
5.  Use the local URL opened by Live Server to navigate the website.

## Shared Navigation and Footer

Pages that use the shared navigation or footer should include: - A
placeholder element for the content. - A JavaScript loader that fetches
`navbar.html` and/or `footer.html`. - The appropriate CSS files.

Check the browser's developer console if the navigation or footer does
not appear. Confirm that file names and paths match exactly and that the
site is running through Live Server.

## Order Page Notes

The order page concept includes: - Menu item cards and prices in Indian
rupees (₹) - Category filters - Quantity controls - Cart totals - Pickup
or delivery selection

**Important:** The front-end order experience is a website interface
only unless a backend is connected. Real order submission, payment
processing, inventory management, and delivery handling must be
integrated separately before accepting customer orders.

## Future Improvements

-   Add real cafe contact details, address, opening hours, and social
    links.
-   Connect a backend or ordering service to process orders.
-   Add secure payment integration if online payments are needed.
-   Validate order forms and show clear success or error messages.
-   Improve accessibility with semantic HTML, keyboard support, and
    image alt text.
-   Test the layout on mobile, tablet, and desktop screens.
-   Optimise images and page loading speed.

## Project Goal

**Hello Aura Cafe --- a little coffee, a little comfort, and good vibes
in every visit.**
