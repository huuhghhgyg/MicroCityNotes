# Version Information of MicroCity

MicroCity is a simple and fast spatial planning and modeling software, which can be used for mathematical model construction, solving, and simulation experiments, especially suitable for the field of digital modeling in logistics. Initially, MicroCity was only available as a Desktop version that could only run on the Windows operating system. Later, there was a demand for cross-platform use, so MicroCity Web version was introduced, which can run well on browsers with the Chromium kernel.

## MicroCity
![GitHub release (latest by date)](https://img.shields.io/github/v/release/microcity/Desktop) [![GitHub release (by tag)](https://img.shields.io/github/downloads/microcity/Desktop/latest/total)](https://github.com/microcity/Desktop/releases/latest)

## MicroCityWeb
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/microcity/microcity.github.io/master)

🎯[Visit MicroCity Web](https://microcityweb.gitee.io) 📍[Download (Offline Version)](https://gitee.com/microcityweb/microcityweb/releases/latest)

MicroCity Web does not require any installation, just use a modern browser (such as Google Chrome, Microsoft Edge) to access its website. Although running on a browser may cause some performance loss compared to the desktop version, it allows users to use the software on almost any operating system, such as computer systems Windows, MacOS, Linux, and mobile/tablet systems Android, etc.

Even with the release of MicroCity Web, you can still continue to use the previously developed Desktop version of MicroCity. However, the desktop version will no longer be updated with new features, all new functions and improvements will be delivered continuously to MicroCity Web, in order to provide the best user experience and avoid version control issues. If you want to experience the latest features and improvements, it is necessary to switch to MicroCity Web.

The MicroCity Web version also provides an offline version bundled for export using the browser (see above 🔗[link](#microcityweb)).

> [!warning]
> However, due to updates in the Chromium browser kernel, some older system versions may not be supported (such as Windows versions below 8.1, 32-bit Windows operating systems, etc.)

## Compatibility
MicroCity Web version uses Lua 5.4 as the scripting language. You can enter the command `print(_VERSION)` in the MicroCity Web runtime environment or editor to view the Lua version used.

Due to the use of experimental JavaScript functions, there may be compatibility issues when running MicroCity Web in the following browser kernels:
* Browsers with Safari kernel, such as most browsers on iOS, iPad OS (due to Apple's mandatory use of Safari browser kernel), Safari browser on MacOS
* FireFox browser

**Compatibility issues encountered during testing on 2023/9/29 and some technical details:**
* iOS and iPad OS:
  * Unable to open local files (due to the use of `showOpenFilePicker()` method)
* FireFox:
  * Unable to open local files (due to the use of `showOpenFilePicker()` method)

## Additional Information
For the impact of the `showOpenFilePicker()` method, please refer to [MDN Web Docs | showOpenFilePicker()](https://developer.mozilla.org/zh-CN/docs/Web/API/window/showOpenFilePicker#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7).

The author of this note was in the process of writing when MicroCity Web was being used for the first time in an educational environment. It can now operate properly and simulate certain functions. The author's relevant learning experiences are as follows:
* MicroCity Desktop: Logistics Information Management
* MicroCity Web: Logistics System Simulation

The content of this note is for reference only. If there are any deviations in the content due to the passage of time, corrections to the content of this site are welcome via [Pull Request](https://github.com/huuhghhgyg/MicroCityNotes/pulls) on GitHub 🥳.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.