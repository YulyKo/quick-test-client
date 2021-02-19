# Quick Test Client

## Зміст
1. [Загальні відомості](#Загальні-відомості)
2. [Архітектура модулів](#Архітектура-модулів)

## Загальні відомості

**Anguar: 10.1.7**
> Проект було перенесено на Andular від 17 лютого 2021 року.

**Node: 10.18.0**

**npm: 6.13.4**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### Additional packages:
* normalize.css
* reset.css
* eslint with editorconfig

### CSS preprocessor: SASS

У проекті застосовано архітектуру VMC- vue, model, component.

### Головні модулі frontend частини:
- вебсайт
- панель ментора
- авторизація

### Головні сутності:
- запитання
- тест
- тека

### Типи користувачів:
- незалогінений користувач
- ментор
## Архітектура модулів

Модулі мають деревовидне розгалуження, відповідно до основних програмних модулів із поілом на основні сутності і зав'язкою компонентів, модулів та в'юшок.

>> Схема зв'язків модулів(схема ще у процесі)

<img src="https://firebasestorage.googleapis.com/v0/b/my-collection-e4380.appspot.com/o/quick%20test%2F%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20frontend%20part.jpg?alt=media&token=d0018d19-302d-459d-b70e-68db1fb81f03
">