# Portofolio-Marco

# Personal Portfolio Website for Marco Agusto Saputro

This is a clean, modern, and fully responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. It's designed to be easily customizable and deployed without any build tools.

## How to Run Locally

1.  **Download the project files:** Clone this repository or download the ZIP file and extract it.
2.  **Open in browser:** Navigate to the project folder and open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Safari).

That's it! The website should now be running locally.

## How to Customize

This portfolio is designed for easy content updates. Follow these steps to personalize it with your own information.

### 1. Update Personal Information (`index.html`)

Open `index.html` in a text editor. Look for comments that start with ``. These mark the places you need to edit:

-   **SEO Meta Tags:** Update the `<title>` and `<meta name="description">` in the `<head>` section.
-   **Hero Section:** Change the headline, tagline, and introductory paragraph to match your personal brand.
-   **Resume Link:** Make sure your resume file is placed in the `assets/` folder and the link in the "Download Resume" button points to the correct filename.
-   **About Me Section:** Rewrite the "About Me" paragraph and update the "Core Skills" list.
-   **Experience Section:** Modify the timeline items to reflect your work history.
-   **Contact Section:** Update your email address in the `mailto:` link and change the placeholder URLs for your LinkedIn, GitHub, and other social profiles.

### 2. Update Project Details (`data/projects.js`)

All project information is stored in the `data/projects.js` file.

-   Open `data/projects.js`. You'll see an array of JavaScript objects, where each object represents one project.
-   **To modify a project:** Edit the `title`, `description`, `image` path, and `tags` for any existing project. The `details` property contains the HTML content that appears in the pop-up modal.
-   **To add a new project:** Copy an entire project object (from `{` to `}`), paste it at the end of the array (before the closing `];`), and update its content. Make sure each project has a unique `id`.
-   **To remove a project:** Delete the entire project object from the array.

### 3. Replace Images and Assets

-   **Headshot:** Replace `assets/images/headshot.jpg` with your own professional photo. A square aspect ratio (e.g., 400x400 pixels) works best.
-   **Project Images:** Replace the placeholder project images (e.g., `assets/images/project-srl-dashboard.png`) with screenshots or mockups of your own work. Make sure the filenames match what you've specified in `data/projects.js`.
-   **Resume:** Place your resume file (e.g., `CV_YourName.pdf`) inside the `assets/` folder and update the link in `index.html`.
-   **Favicon:** Replace `assets/images/favicon.ico` with your own site icon.

## Deployment

You can host this website for free on services like [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), or [Vercel](https://vercel.com/).

### Deploying to GitHub Pages (simple method):

1.  Create a new repository on GitHub.
2.  Upload all the project files (`index.html`, `styles.css`, `app.js`, and the `assets` and `data` folders) to the repository.
3.  In your repository's settings, go to the "Pages" section.
4.  Under "Source," select the `main` (or `master`) branch and click "Save."
5.  Your website will be live at `https://<your-username>.github.io/<your-repository-name>/` in a few minutes.

---
