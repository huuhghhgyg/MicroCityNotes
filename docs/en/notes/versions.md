# Versions of MicroCity
## MicroCity
![GitHub release (latest by date)](https://img.shields.io/github/v/release/microcity/Desktop) [![GitHub release (by tag)](https://img.shields.io/github/downloads/microcity/Desktop/latest/total)](https://github.com/microcity/Desktop/releases/latest)

When MicroCity software was initially launched, there was only a desktop version available, which could only run on Windows operating systems. Over time, the developer ([@mixwind](https://github.com/sunzhuo)) realized that this limitation prevented many potential users from using the software because they might be using other operating systems such as MacOS, Linux, and others.

## MicroCityWeb
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/microcity/microcity.github.io/master)

🎯[Visit MicroCity Web](https://microcityweb.gitee.io) 📍[(Offline version) Download](https://gitee.com/microcityweb/microcityweb/releases/latest)

To address this issue, the developer decided to develop MicroCityWeb, which is a version that can be directly run in a web browser. MicroCityWeb does not require any installation, just access its website using a modern browser such as Google Chrome or Microsoft Edge. Although running in a browser may cause some performance loss compared to the desktop version, it allows users to use the software on almost any operating system, such as Windows, MacOS, Linux for computers, and Android for mobile devices and tablets.

Although MicroCityWeb has been developed by the creators of MicroCity, you can still continue to use the previously developed desktop version of MicroCity. However, the desktop version will no longer receive updates for new features. All new features and improvements will be focused on the MicroCityWeb version. This decision aims to ensure that MicroCity can focus on one version and provide the best possible experience in that version. It also makes it easier to manage and maintain MicroCity, avoiding version control issues.

It should be noted that although the desktop version will no longer receive updates for new features, it can still be used. If users are already accustomed to using the desktop version, they can continue to do so. However, if users want to experience the latest features and improvements, they will need to switch to the MicroCityWeb version.

The MicroCityWeb version also provides an offline version packaged for browsers (see link above 🔗[link](#microcityweb)).

::: warning
However, due to updates to the Chromium browser engine, certain outdated system versions may not be supported (such as Windows versions 8.1 and below, 32-bit Windows operating systems, etc.).
:::

## Compatibility
Due to the use of experimental JavaScript functions, MicroCityWeb may have compatibility issues running on the following browser engines:
* Most browsers on iOS and iPadOS (due to Apple's requirement to use Safari's browser engine)
* Firefox browser

**Compatibility issues and some technical details encountered during testing on 29th September 2023**
* iOS and iPadOS:
  * Unable to open local files (due to the use of `showOpenFilePicker()` method)
* Firefox:
  * Unable to open local files (due to the use of `showOpenFilePicker()` method)

Regarding the impact of the `showOpenFilePicker()` method, please refer to [MDN Web Docs | showOpenFilePicker()](https://developer.mozilla.org/zh-CN/docs/Web/API/window/showOpenFilePicker#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7).

## Summary
The launch of MicroCityWeb version makes the software more user-friendly and popular, benefiting a wider range of users. At the same time, the MicroCity desktop version is still available, allowing users who are accustomed to this version to continue using it and facilitating their transition to the MicroCityWeb version.

At the time of writing this note, the MicroCityWeb is being used for the first time in a teaching environment and is able to function properly and provide certain simulation capabilities. The author's learning experience with MicroCity is as follows:
* MicroCity (desktop version): Logistics information management
* MicroCityWeb: Logistics system simulation

The content of this note is for reference only. If there are any discrepancies in the content due to time factors, you are also welcome to make corrections to the content of this note on Github through a Pull Request 🥳. Please check the [Pull Request](https://github.com/huuhghhgyg/MicroCityNotes/pulls) for further details.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.