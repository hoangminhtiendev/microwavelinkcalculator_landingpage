# Microwave Link Calculator landing page

A responsive, static landing page for the iOS and Android apps.

## Files
- `index.html` — page content and store links
- `styles.css` — responsive styling
- `script.js` — screenshot carousel and mobile navigation
- `assets/favicon.svg`, `assets/og-image.svg` — branding assets

## Publish with Netlify
1. Extract this ZIP.
2. Open Netlify and choose **Add new site → Deploy manually**.
3. Drag the extracted project folder (the folder containing `index.html`) into the deploy area.
4. Netlify will provide a public URL. You can later connect a custom domain.

## Screenshots
The screenshot carousel uses image URLs from the public Google Play image CDN, referenced directly in `index.html`. This avoids copying or rehosting store images. If Google changes those image URLs, replace the `src` values with current screenshots.

## Before publishing
- Confirm that all feature descriptions match the current Android and iOS releases.
- Consider adding a dedicated privacy-policy page and support contact details.
- Test the page on a phone and desktop after deployment.


## App Store screenshots

The screenshot gallery uses the supplied iOS App Store screenshots, stored locally in
`assets/screenshots/` as optimized WebP files. No Google Play screenshot CDN links are
needed for the gallery. The gallery preserves the screenshots' portrait aspect ratio.
