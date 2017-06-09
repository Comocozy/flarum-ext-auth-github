# Flarum OAUTH extension for Naver

[Naver](https://www.naver.com/) is a quite popular website for Korean.  
This extension enables Flarum login with Naver account.  
It works with [oauth2-naver](https://github.com/Comocozy/oauth2-naver) which supports Naver OAUTH 2.0.  
You don't need to install the oauth2-naver manually because it's done automatically by composer.  

## Installation

To install, use composer:

```
composer require comocozy/flarum-ext-auth-naver
```

## Requirement

Administrator must get the client ID and secret from Naver.  
Please refer to the [page](https://developers.naver.com/docs/login/overview/).

## Documents

* [Login session](https://developers.naver.com/docs/login/api/)
* [User profile](https://developers.naver.com/docs/login/profile/)

## Issue report

Please go to [this link](https://github.com/Comocozy/flarum-ext-auth-naver/issues) to report an issue.
