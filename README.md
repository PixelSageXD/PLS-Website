# PLS Website
This is the source code for the [Pixel's Life Series Website](https://pixels-life-series.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f9984488-7147-4f13-968b-c04bdc0ea425/deploy-status)](https://app.netlify.com/sites/pixels-life-series/deploys)

# How to update
The player information is stored in [src/lib/index.js](https://github.com/TofuBeans/PLS-Website/blob/main/src/lib/index.js)
This information contains *all* the players involved in the series. If someone is already in the dictionary then **DO NOT** add their data again.

As for the individual Life Series', the lives data is stored in each series' respective +page.svelte (e.g. [Third Life's +page.svelte](https://github.com/TofuBeans/PLS-Website/blob/main/src/routes/thirdlife/%2Bpage.svelte))

# Adding a new series
When you want to add a new page for a series, just copy the route, change the name and then directly edit the information inside the +page.svelte.
All assets for the series logos must be put in the static folder in order to work properly.

# Misc Info
When the website builds, it will say the build failed, however as long as the following has a tick, it should work properly.

![](https://i.imgur.com/xcU6QVZ.png)
