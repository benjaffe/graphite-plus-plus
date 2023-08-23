# graphite-plus-plus
Graphite.dev is a phenomenal dev tool that brings branch stacking to the masses (and so much more... they're eating Github's lunch, in my opinion).

This is a repo of links and tools that makes Graphite even more awesome. Feel free to contribute!

## Improving Github Access

### CLI

To open or copy the Graphite or Github links to the clipboard from the CLI, run the following

```
# Open Graphite Page
gt dp

# Open Github Page
gt bi | grep -F app.graphite.dev | sed -E 's|https://app\.graphite\.dev/github/pr/([^/]+)/([^/]+)/([^/]+)|https://github.com/\1/\2/pull/\3|' | xargs open

# Copy Graphite Page
gt bi | grep -F app.graphite.dev | pbcopy

# Copy Github Page
gt bi | grep -F app.graphite.dev | sed -E 's|https://app\.graphite\.dev/github/pr/([^/]+)/([^/]+)/([^/]+)|https://github.com/\1/\2/pull/\3|' | pbcopy
```

You can also alias them, or use fish `abbr`s to put them just a few keystrokes away. I alias them in fish shell like this:

```
# Open Graphite Page
abbr dp "gt dp"

# Open Github Page
abbr dpg "gt bi | grep -F app.graphite.dev | sed -E 's|https://app\.graphite\.dev/github/pr/([^/]+)/([^/]+)/([^/]+)|https://github.com/\1/\2/pull/\3|' | xargs open"

# Copy Graphite Page
abbr dc "gt bi | grep -F app.graphite.dev | pbcopy"

# Copy Github Page
abbr dg "gt bi | grep -F app.graphite.dev | sed -E 's|https://app\.graphite\.dev/github/pr/([^/]+)/([^/]+)/([^/]+)|https://github.com/\1/\2/pull/\3|' | pbcopy"
```

### Browser Extension

There are two options if you're on a Chromium-based browser (Chrome, Brave, Arc, etc):

I made a chrome extension for myself, which you can find in this repo under the folder `graphite-github-buttons`. The new buttons are in a place that's accessible if Graphite gets stuck on the loading screen. This is a good option if you want visiblity and control over the code that's running, and without the possibility of the extension auto-updating. This is also a good option if you want to write your own custom CSS or JS for Graphite. 

Installation: Download the folder and put it somewhere where it won't move. Open the extensions window in your browser and click "Developer Mode", then "Load Unpacked Extension". Choose the folder, and the extension will load. You may have to reload any Graphite windows that are open.

<img width="530" alt="image" src="https://github.com/benjaffe/graphite-plus-plus/assets/573204/7be804c4-f957-4903-8d9c-e9bb0344ad73">

---

Another Graphite user wrote an extension and [published it here](https://chrome.google.com/webstore/detail/github-button-for-graphit/kfeljefjihmhdfhclfippknhgckkpihj) extension to add a link to the Graphite code review page directly to the GitHub PR that it corresponds with. You don't get as much control, but installation is as easy as clicking a button, and updates happen automatically in case Graphite changes their interface in a breaking way.

![GitHub button for Graphite Screenshot](https://user-images.githubusercontent.com/1403638/229561035-a0156d37-1686-41d6-9f39-20074f96a281.jpg)


### Using Arc Browser Boosts (or any other extension that lets you add JS)

Here's some JavaScript that will [add GitHub "copy" and "open" buttons to the top of the Graphite interface](https://gist.github.com/benjaffe/8ce3be07f5221f4ec4f0922c6ad4e470). If you use Arc Browser, you can use Boosts to add this code. Or you can use any Chrome or Firefox extensions that let you inject arbitrary JS.

<img width="486" alt="image" src="https://github.com/benjaffe/graphite-plus-plus/assets/573204/46568bc1-91de-4601-aebb-63bf0b005816">

### Bookmarklet

<img width="328" alt="image" src="https://user-images.githubusercontent.com/573204/229561599-3fa10597-0d40-4f21-a1c7-83054f3606c0.png">

You can add a bookmarklet to easily open Github from any Graphite page. Right-click in the bookmarks bar and click "Add Page". Title can be "Open in GH" or whatever you want, and URL is the following:

```
javascript:(function()%7B(()%3D>%7Bif (window.location.hostname %3D%3D%3D 'app.graphite.dev' %26%26 window.location.pathname.includes('%2Fgithub%2Fpr%2F')) %7Bconst pathname %3D window.location.pathname%3Bconst pieces %3D pathname.replace('%2Fgithub%2Fpr%2F'%2C '').split('%2F')%3Bconst githubUrl %3D %60https%3A%2F%2Fgithub.com%2F%24%7Bpieces%5B0%5D%7D%2F%24%7Bpieces%5B1%5D%7D%2Fpull%2F%24%7Bpieces%5B2%5D.split('%2F')%5B0%5D%7D%2F%60%3Bwindow.open(githubUrl)%3B%7D%7D)()%7D)()
```
![image](https://user-images.githubusercontent.com/573204/229560063-4b55ab38-bb92-40b4-b73b-7ee38c849b46.png)

