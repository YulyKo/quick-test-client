<template>
  <button type="button" @click="logout">Logout</button>
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
