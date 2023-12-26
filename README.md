# Auto Post Badge

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/litalino/flarum-auto-post-count-badge.svg)](https://packagist.org/packages/litalino/flarum-auto-post-count-badge) [![Total Downloads](https://img.shields.io/packagist/dt/litalino/flarum-auto-post-count-badge.svg)](https://packagist.org/packages/litalino/flarum-auto-post-count-badge)

A [Flarum](https://flarum.it) funny extension. Add Automatic badge and label to user after certain number of posts

PLugin Developer: justoverclock/country-flags

PLugin Clone Co-development: Litalino/flarum-country-flags

![Immagine 2021-11-26 225014](https://user-images.githubusercontent.com/79002016/143657265-40e0e0f2-5a5d-4565-9adf-b446314f20eb.png)

## Actual Auto Badges

   - less than 0 post: The Baby => icon `<i class="fas fa-baby" />`
   - less than 10 post: The Newbie => icon `<i class="fas fa-child" />`
   - less than 50 post: The Talker => icon `<i class="fas fa-bullhorn" />`
   - less than 100 post: The Teacher => icon `<i class="fas fa-chalkboard-teacher" />`
   - less than 300 post: The Monster! => icon `<i class="fab fa-optin-monster" />`
   - less than 600 post: The Guru! => icon `<i class="fas fa-graduation-cap" />`
   - less than 1000 post: The Flarumist! => icon `<i class="fas fa-medal" />`
   - more than 2000 posts Expert => icon `<i class="fas fa-stethoscope" />`
   - more than 4000 posts Gol* => icon `<i class="fas fa-bible" />`
   - more than 8000 posts *Untouchable* => icon `<i class="fas fa-user-shield" />`

## If you need more customization, consider the PRO version of this extension

https://extiverse.com/extension/justoverclock/auto-post-badge-pro

## Installation

Install with composer:

```sh
composer require litalino/flarum-auto-post-count-badge:"*"
```

## Updating

```sh
composer update litalino/flarum-auto-post-count-badge:"*"
php flarum cache:clear
```

## Updating from justoverclock

This extension replaces [Auto Post Badge](https://github.com/justoverclockl/auto-post-count-badge).

**Please backup your data before attempting the update!**

You can upgrade from any of the older versions of the Auto Post Badge extension.

Then upgrade from the old extension to the new one:

```sh
composer remove justoverclock/auto-post-count-badge
composer require litalino/flarum-auto-post-count-badge
```

When you enable the new extension, the permissions, settings and the data from Justoverclockl Auto Post Badge will be moved to Litalino Auto Post Badge.

## Links

- [Packagist](https://packagist.org/packages/litalino/flarum-auto-post-count-badge)
- [GitHub](https://github.com/justoverclockl/auto-post-count-badge)

An extension by [Litalino](https://khatvongsong.vn)