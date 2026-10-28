# Pipeline Resort — Nantucket

*"Experience the crown"*

This is the website for the fictional Pipeline Resort, a student project. It's plain HTML, CSS and JavaScript, with no build step and nothing to install.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Homepage: hero, slogan and both promo ads |
| `accommodations.html` | Oceanfront Cottage, Private Pool Villa and Luxury Suite, each with a booking button |
| `dining.html` | Millar Munches, Whale Wings and Frat Fried |
| `wellness.html` | Spa, Oceanfront Sauna and Yoga Deck |
| `activities.html` | 3 off-site excursions and 3 on-site activities |
| `book.html` | Reservation request form (the room is pre-selected from the Accommodations buttons) |
| `gallery.html` | 10-picture gallery with a click-to-enlarge view |
| `employment.html` | 3 job listings with salaries and benefits |
| `contact.html` | Contact info box and an embedded Google Map of Nantucket |

## Preview locally

Double-click `index.html` to open it in a browser.

## Launch it free with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**. Pick your branch and the `/ (root)` folder, then click **Save**.
4. After about a minute, the site is live at `https://<your-username>.github.io/<repo-name>/`.

Another option is to drag the whole folder onto <https://app.netlify.com/drop>.

## Customizing

- **Real photos:** each picture is a styled `<div class="scene ...">` block. To use a real photo, put it in `assets/` and add `<img class="photo" src="assets/your-photo.jpg" alt="...">` inside that block. The photo covers the artwork automatically.
- **Google Form:** the booking form shows a confirmation on screen but doesn't send data anywhere. To collect real submissions, replace the `<form>` in `book.html` with your Google Form's embed `<iframe>` (in Google Forms, click **Send → <> Embed**).
- **Colors and fonts** are set at the top of `assets/style.css`.
