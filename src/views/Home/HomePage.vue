<template>
  <div>
    <header class="header row">
      <div class="header__logo">
        <router-link class="header__logo_link" tag="a" to="/">
          <img class="link__logo-img" src="@/assets/images/logo.png" alt="logo">
        </router-link>
      </div>
      <nav>
        <ul class="header__menu">
          <li>
            <router-link class="link text" tag="a" to="/login">Login</router-link>
          </li>
          <li>
            <router-link tag="a"
                         to="/registration"
                         class="header__menu_link link text">
              Sign up</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="text container">
      <h1 class="title">Вітаємо у Quick Test</h1>
      <ul class="container__list">
        <li class="container__list_item">Створіть предмет</li>
        <li class="container__list_item">Створіть тему</li>
        <li class="container__list_item">Додайте запитання</li>
        <li class="container__list_item">Сформуйте тест</li>
        <li class="container__list_item">Відпрвте запршення на проходження тесту</li>
        <li class="container__list_item">Слідкуйте за ститистикою проходження</li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style lang="sass" scoped>

.header
  width: 100%
  height: 7rem
  display: flex
  justify-content: space-between
  align-items: center
  &__menu
    width: auto
    height: 50%
    text-align: end
    display: flex
    flex-direction: column
    justify-content: space-between
    &_link
      display: block
      margin-top: .5rem

.link__logo-img
  height: 3rem

.container__list
  margin: 0 auto
  width: 84%
  list-style-type: decimal
  &_item
    margin-bottom: 2rem
    padding-left: 1.6rem
</style>
