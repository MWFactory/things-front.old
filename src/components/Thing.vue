<<<<<<< HEAD:src/components/dashboard/Thing.vue
<template>
  <div class="thing">
    <h2 class="thing__title">
      {{ thing.title }}
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
          {{ new Date(thing.purchase_date).toLocaleDateString() }}
        </div>
      </div>
      <!-- THING END GUARANTEE -->
      <div v-if="thing.warranty_end_date" class="thing__info">
        <div class="thing__info-title">
          > Fin de garantie
        </div>
        <div class="thing__info-value">
          {{ new Date(thing.warranty_end_date).toLocaleDateString() }}
        </div>
      </div>
    </div>

    <div class="thing__footer">
      <div class="thing__preview">
        <img class="thing__preview-src" src="@/assets/images/preview-icon.svg" alt="Icône de prévisualisation" />
        Prévisualiser
      </div>
      <router-link :to="`/thing/${thing.id}`">
        <button class="thing__button button" @click="GET_THING_BY_ID(thing)">
          Détails
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: 'ThingComponent',
    props: {
      thing: Object,
    },
    methods: {
      ...mapMutations('thing', ['GET_THING_BY_ID']),
    }
  };
</script>

<style lang="scss" scoped>
.thing {
  background-color: $secondary;
  padding: 25px 18px;
  margin-bottom: 30px;
  border-bottom: 4px solid $black;

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
    margin-top: 20px;
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
    margin-top: 0px;
  }
}
</style>
=======
<template>
  <div class="thing">
    <!-- THING contains => title, purchase date, warranty end date, button for preview and for thing details -->
    <h2 class="thing__title">
      <!-- title -->
      {{ thing.title }}
    </h2>
    <hr class="thing__separator" />
    <div class="thing__infos">
      <!-- purchase date -->
      <div class="thing__info">
        <div class="thing__info-title">
          > Date d'achat
        </div>
        <div class="thing__info-value">
          {{ new Date(thing.purchase_date).toLocaleDateString() }}
        </div>
      </div>
      <!-- warranty end date -->
      <div v-if="thing.warranty_end_date" class="thing__info">
        <div class="thing__info-title">
          > Fin de garantie
        </div>
        <div class="thing__info-value">
          {{ new Date(thing.warranty_end_date).toLocaleDateString() }}
        </div>
      </div>
    </div>
    <div class="thing__footer">
      <!-- button for preview -->
      <div class="thing__preview">
        <a :href="`http://192.168.1.241:8000${thing.attachments[0].url}`" target="_blank">
          <img class="thing__preview-src" src="../assets/images/preview-icon.svg" alt="Icône de prévisualisation" />
          Prévisualiser
        </a>
      </div>
      <!-- button for thing details -->
      <router-link :to="`/thing/${thing.id}`">
        <ButtonRequest value="Détails" :request="handleGetThing" />
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: 'ThingComponent',
    props: {
      thing: Object,
    },
    methods: {
      // ...map()
      ...mapMutations('thing', ['GET_THING_BY_ID']),

      // when you click on the thing detail button
      handleGetThing() {
        this.GET_THING_BY_ID(this.thing);
      },
    },
  };
</script>

<style lang="scss" scoped>
.thing {
  background-color: $secondary;
  padding: 25px 18px;
  margin-bottom: 30px;
  border-bottom: 4px solid $black;

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
    margin-top: 20px;
  }

  &__preview {
    display: flex;
    align-items: center;

    &-src {
      width: 17px;
      margin-right: 10px;
    }
  }
}

@media (min-width: 768px) {
  .thing {
    margin-bottom: 0;
  }
}
</style>
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c:src/components/Thing.vue
