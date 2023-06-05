# graphite-plus-plus
Graphite.dev is a phenomenal dev tool that brings branch stacking to the masses (and so much more... they're eating Github's lunch, in my opinion).

This is a repo of links and tools that makes Graphite even more awesome. Feel free to contribute!

## Improving Github Access

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

### Chrome Extension

If you're on a Chromium-based browser, you can install the [GitHub Button for Graphite](https://chrome.google.com/webstore/detail/github-button-for-graphit/kfeljefjihmhdfhclfippknhgckkpihj) extension to add a link to the Graphite code review page directly to the GitHub PR that it corresponds with.

![GitHub button for Graphite Screenshot](https://user-images.githubusercontent.com/1403638/229561035-a0156d37-1686-41d6-9f39-20074f96a281.jpg)
