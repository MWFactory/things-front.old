<template>
  <div class="thing">
    <div class="thing__header">
      <h1 class="thing__title">
        Titre
      </h1>
      <div class="thing__edit">
        ON
      </div>
    </div>
    <div class="thing__files">
      <div class="thing__file">
        FILE
      </div>
      <div class="thing__file">
        FILE
      </div>
      <div class="thing__file">
        FILE
      </div>
    </div>
    <div class="thing__file-infos">
      <div class="thing__file-name">
        Nom du fichier
      </div>
      <div class="thing__file-path">
        lorem-ipsum-dolor-sit-amet.pdf
      </div>
    </div>
    <p class="thing__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius nibh et nunc elementum, efficitur vehicula tellus malesuada. Quisque placerat velit nec libero iaculis euismod. Curabitur non tempor sem. Nullam ante massa, blandit in ante vel, bibendum sagittis eros. Aliquam aliquet tristique interdum. Integer pharetra in neque quis imperdiet. Proin sit amet nisi faucibus, pharetra tellus et, sagittis sapien. Nulla ultricies, nunc sit amet interdum commodo, ligula metus consequat nunc, sodales tempus urna massa in lacus.
    </p>
    <div class="thing__dates">
      <div class="thing__date">
        <div class="thing__date-title">
          Date d'achat
        </div>
        <div class="thing__date-value">
          00/00/0000
        </div>
      </div>
      <div class="thing__date">
        <div class="thing__date-title">
          Fin de garantie
        </div>
        <div class="thing__date-value">
          00/00/0000
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThingDetailPage',
  }
</script>

<style lang="scss" scoped>
  .thing {
    padding: 0px 30px;
    margin: 30px 0px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
     }

    &__title {
      margin-bottom: 0px;
    }

    &__edit {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 26px;
      width: 26px;
      background-color: $primary;
      color: $white;
    }

    &__files {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__file {
      height: 86px;
      width: 86px;
      border: 1px solid $black;
      margin-right: 10px;

      &:last-child {
        margin-right: 0px;
      }

      &-infos {
        display: flex;
        flex-direction: column;
      }

      &-name {
        font-weight: 700;
      }

      &-path {
        font-size: 13px;
      }
    }

    &__description {
      margin: 30px 0px;
      padding: 15px 0px;
      border: dashed $primary;
      border-width: 2px 0px;
    }

    &__dates {
      display: flex;
      flex-direction: column;
    }

    &__date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0px;
      }

      &-title {
        font-weight: 700;
      }
    }
  }
</style>

<router>
  {
  path: '/thing',
  }
</router>
