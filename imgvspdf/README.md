# Local Image & PDF Tool (with Google AdSense)

A privacy-focused, 100% client-side web application for editing, resizing, compressing, and converting images and PDFs.

---

## 💰 Google AdSense Setup Guide

This project is pre-configured with Google AdSense ad slots, responsive ad layout CSS, `ads.txt`, and an AdSense-compliant **Privacy Policy** to pass Google site approval seamlessly.

### Step 1: Get your AdSense Publisher ID & Ad Slot IDs
1. Log in to your [Google AdSense Account](https://www.google.com/adsense).
2. Go to **Account** -> **Account Information** and copy your **Publisher ID** (looks like `ca-pub-1234567890123456`).
3. Go to **Ads** -> **By ad unit** -> **Display ads** and create 2-3 responsive ad units.
4. Note down your `data-ad-slot` numbers for each unit.

---

### Step 2: Update Code Files with your Publisher ID

#### 1. Update `index.html`
- Replace `ca-pub-YOUR_ADSENSE_PUBLISHER_ID` in the `<head>` tag script with your real ID:
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
  ```
- Replace `ca-pub-YOUR_ADSENSE_PUBLISHER_ID` and `data-ad-slot="..."` values in the `<ins class="adsbygoogle">` tags in `index.html`.

#### 2. Update `public/ads.txt`
- Open `public/ads.txt` and replace `pub-YOUR_ADSENSE_PUBLISHER_ID` with your pub ID (without `ca-` prefix):
  ```
  google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
  ```

---

## 🚀 How to Deploy to GitHub Pages

### Option 1: Built-in GitHub Pages deployment (Recommended)
1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add Google AdSense integration"
   git push origin main
   ```
2. Build the production site locally or via command line:
   ```bash
   npm run build
   ```
3. In your GitHub Repository, go to **Settings** -> **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch** or **GitHub Actions**.
   - If using branch, select `main` (or `gh-pages`) and folder `/docs` or root `/dist`.

### Option 2: Deploying `dist` folder automatically via `gh-pages` package
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "build": "vite build",
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run `npm run deploy` to publish live to GitHub Pages!

---

## 🛡️ Privacy & Compliance
Google AdSense requires all publishing sites to have a public Privacy Policy page disclosing cookie and advertising practices. 

This project includes a ready-to-use Privacy Policy page accessible at `/privacy.html` and linked in both landing & editor footers.

---

## 🛠️ Local Development & Preview
To run locally:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. During local testing, AdSense displays placeholder ad containers so you can preview layout positions before going live.
