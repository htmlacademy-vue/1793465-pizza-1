<template>
  <header class="header">
    <div class="header__logo">
      <a href="#" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>
    <div class="header__cart">
      <router-link to="/cart">{{ $store.state.Cart.pizzasSum }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link v-if="auth" to="/login" class="header__login"
        ><span>Войти</span></router-link
      >
      <router-link v-else to="/profile" class="header__login"
        ><span>Войти</span></router-link
      >
    </div>
  </header>
</template>
<script>
export default {
  name: "AppLayoutHeader",
  props: {
    auth: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
