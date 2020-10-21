<template>
  <button type="button"
          @click="logout"
          class="text form__button-submit">Logout</button>
</template>

<script>
export default {
  name: 'LogOut',
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style scoped>

</style>
