# taxikutalombok.com

Simple static thank-you/promo site for Suparman, a taxi driver in Kuta, Lombok. Plain HTML/CSS/JS, no build step, no dependencies.

Files:
- `index.html` / `styles.css` / `script.js` — the site (English + Bahasa Indonesia toggle)
- `images/` — Lombok photos (Unsplash License — free for commercial use, no attribution required)
- `robots.txt` / `sitemap.xml` — for search engines & AI crawlers
- `CNAME` — custom domain config for GitHub Pages

## Preview locally

```
cd taxi_kuta
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy for free with GitHub Pages

1. Create a new **public** GitHub repo, e.g. `taxi-kuta-lombok`.
2. Push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/taxi-kuta-lombok.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `(root)`. Save.
4. GitHub will publish it at `https://<your-username>.github.io/taxi-kuta-lombok/` within a minute or two.

## Connect the custom domain (once taxikutalombok.com is purchased)

1. At your domain registrar, add these DNS records:
   - **Apex domain** (`taxikutalombok.com`) — four `A` records pointing to GitHub Pages' IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **www subdomain** — one `CNAME` record:
     ```
     www.taxikutalombok.com  →  <your-username>.github.io
     ```
2. Back in the repo's **Settings → Pages**, enter `taxikutalombok.com` as the Custom domain and save (this keeps the `CNAME` file in the repo in sync).
3. Wait for DNS to propagate (can take up to a few hours), then tick **Enforce HTTPS** once it becomes available — GitHub issues a free auto-renewing certificate.

This setup is free indefinitely (no hosting fees, no expiring free tiers) — the only ongoing cost is the domain registration itself.
