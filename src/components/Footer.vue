<template>
  <footer class="footer">
    <router-link class="footer__link" to="/mentions-legales">
      Mentions légales
    </router-link>
    <div class="footer__link">
      © Things 2022
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    padding: 0px 30px;

    &__link {
      margin-left: 20px;
    }
  }

  @media (min-width: 992px) {
    .footer {
      padding: 0px 100px;
    }
  }
</style>
