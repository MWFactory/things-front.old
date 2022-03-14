<template>
  <div class="thing">
    <h2 class="thing__title">
      Titre
    </h2>
    <hr class="thing__separator" />

    <!-- THING INFOS -->
    <div class="thing__infos">
      <!-- THING PURCHASE DATE -->
      <div class="thing__info">
        <div class="thing__info-title">
          > Date d'achat
        </div>
        <div class="thing__info-value">
          00/00/0000
        </div>
      </div>
      <!-- THING END GUARANTEE -->
      <div class="thing__info">
        <div class="thing__info-title">
          > Fin de garantie
        </div>
        <div class="thing__info-value">
          00/00/0000
        </div>
      </div>
    </div>

    <div class="thing__footer">
      <div class="thing__preview">
        <img class="thing__preview-src" src="@/assets/images/preview-icon.svg" alt="Icône de prévisualisation" />
        Prévisualiser
      </div>
      <button class="thing__button">
        Détails
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThingComponent',
};
</script>

<style lang="scss" scoped>
.thing {
  background-color: $secondary;
  padding: 22px 18px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0px;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
  }

  &__separator {
    border-top: 2px dashed $primary;
    background-color: $secondary;
    height: 2px;
    width: 100%;
    margin: 10px 0px;
  }

  &__infos {
    display: flex;
    flex-direction: column;
  }

  &__info {
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

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  &__preview {
    display: flex;
    align-items: center;

    &-src {
      width: 17px;
      margin-right: 10px;
    }
  }

  &__button {
    font-size: 13px;
    margin-top: 0px;
  }
}
</style>
