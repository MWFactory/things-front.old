<template>
  <div class="thing-detail">
    <header class="thing-detail__header">
      <InputFormLocal id="title" name="title" type="text" label="Titre" :value="title" v-model.trim="title" />
      <div class="thing-detail__edit-thing" @click="handleSaveThing">
        <img class="thing__edit-thing-src" src="@/assets/images/save-edit-thing-icon.svg" alt="Icône de sauvegarde de la modification" />
      </div>
    </header>
    <div class="thing-detail__content">
      <div class="thing-detail__files-wrapper">
        <div class="thing-detail__files">
          <div class="thing-detail__file-wrapper">
            <div v-for="attachment of attachments" :key="attachment.id" :class="attachment.onActive === false ? 'thing-detail__file' : 'thing-detail__file active'" @click="changeActiveFile">
              <embed :id="attachment.id" class="thing-detail__file-src" :src="`http://192.168.1.241:8000${attachment.url}`" width="86" height="86" type="application/pdf"/>
              <div class="thing-detail__delete" @click="deleteThingFile">
                <img class="thing-detail__delete-src" src="@/assets/images/delete-thing-icon.svg" alt="Icône pour supprimer la photo de profil utilisateur" />
              </div>
            </div>
          </div>
        </div>
        <div class="thing-detail__file-infos">
          <h2 class="thing-detail__file-subtitle">
            <img class="thing__file-preview-src" src="@/assets/images/preview-icon.svg" alt="Icône de prévisualisation" />
            Nom et format du fichier
          </h2>
          <div class="thing-detail__file-path">
            {{ nameActiveFile }}
          </div>
        </div>
      </div>
      <div class="thing-detail__data-wrapper">
        <div class="thing-detail__description">
          <textarea class="thing-detail__description-textarea" id="description" name="description" placeholder="Description" :value="description" @change="description = $event.target.value"></textarea>
        </div>
        <div class="thing-detail__dates">
          <div class="thing-detail__date">
            <h2 class="thing-detail__date-subtitle">
              > Date d'achat
            </h2>
            <div class="thing-detail__date-value">
              <InputFormLocal id="purchase-date" name="purchase-date" type="date" label="" :value="purchaseDate" v-model.trim="purchaseDate" />
            </div>
          </div>
          <div class="thing-detail__date">
            <h2 class="thing-detail__date-subtitle">
              > Fin de garantie
            </h2>
            <div class="thing-detail__date-value">
              <InputFormLocal id="warranty-end-date" name="warranty-end-date" type="date" label="" :value="warrantyEndDate" v-model.trim="warrantyEndDate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThingDetailEdit',
    data() {
      return {
        title: '',
        description: '',
        attachments: [],
        purchaseDate: '',
        warrantyEndDate: '',
        nameActiveFile: '',
      };
    },
    methods: {
      handleSaveThing() {
        console.log('HANDLE SAVE THING');
      },
      deleteThingFile() {
        console.log('DELETE THING FILE');
      },
    },
  };
</script>

<style lang="scss" scoped>
.thing-detail {
  padding: 0px 30px;
  margin: 30px 0px;

  .input__group {
    margin: 0px;
    padding-top: 0px;
  }

  &__edit-thing {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 45px;
    min-width: 45px;
    background-color: $primary;
    margin-left: 30px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .input__group {
      font-size: 22px;
    }
  }

  &__edit-thing {
    &--cancel {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 45px;
      min-width: 45px;
      margin-left: 30px;
      background-color: $black;
      color: $white;
    }
  }

  &__delete {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: -11px;
    right: -11px;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 25px;
    height: 25px;
    background-color: $black;

    img {
      width: 55%;
    }
  }

  &__files {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__file {
    height: 86px;
    width: 86px;
    border: 1px solid $black;
    overflow: hidden;

    &-wrapper {
      position: relative;
    }

    &.active {
      border: 1px solid $primary;
    }

    &-infos {
      display: flex;
      flex-direction: column;
    }

    &-subtitle {
      font-weight: 700;
      margin-bottom: 5px;
    }

    &-path {
      font-size: 13px;
    }
  }

  &__description {
    margin: 30px 0px;
    padding: 20px 0px;
    border: dashed $primary;
    border-width: 2px 0px;

    &-textarea {
      position: relative;
      width: 100%;
      min-height: 200px;
      border: 0;
      border-bottom: 1px solid $black;
      outline: 0;
      color: $black;
      background: transparent;
      padding: 7px 10px;
      transition: border-color 0.2s, background-color 0.2s;

      &:focus {
        border-width: 1px;
        border-color: $primary;
        background-color: $secondary;
      }
    }
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

    &-subtitle {
      font-weight: 700;
    }

    &-value {
      max-width: 135px;
    }
  }
}
</style>

<router>
    {
    path: '/thing/creer',
    }
</router>
