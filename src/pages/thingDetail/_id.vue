<template>
  <div class="thing-detail">
    <header class="thing-detail__header">
      <h1 class="thing-detail__title">
        {{ thing.title }}
      </h1>
      <button class="thing-detail__edit-thing" @click="handleEdit">
        <img class="thing__edit-thing-src" src="@/assets/images/edit-thing-icon.svg" alt="Icône de modification" />
      </button>
    </header>
    <div class="thing-detail__files">
      <div v-for="attachment of thing.attachments" :key="attachment.id" :class="attachment.onActive === false ? 'thing-detail__file' : 'thing-detail__file active'" @click="changeActiveFile">
        <embed :id="attachment.id" class="thing-detail__file-src" :src="`http://192.168.1.241:8000${attachment.url}`" width="86" height="86" type="application/pdf"/>
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
    <p class="thing-detail__description">
      {{ thing.description }}
    </p>
    <div class="thing-detail__dates">
      <div class="thing-detail__date">
        <h2 class="thing-detail__date-subtitle">
          > Date d'achat
        </h2>
        <div class="thing-detail__date-value">
          {{ new Date(thing.purchaseDate).toLocaleDateString() }}
        </div>
      </div>
      <div v-if="thing.warrantyEndDate" class="thing-detail__date">
        <h2 class="thing-detail__date-subtitle">
          > Fin de garantie
        </h2>
        <div class="thing-detail__date-value">
          {{ new Date(thing.warrantyEndDate).toLocaleDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'ThingDetailPage',
    data() {
      return {
        nameActiveFile: '',
      };
    },
    computed: {
      ...mapState({
          thing: state => state.thing,
      }),
    },
    mounted() {
      this.thing.attachments.forEach((attachment) => {
        if (attachment.onActive === true) {
          this.nameActiveFile = attachment.originalFilename;
        }
      });
    },
    methods: {
      ...mapMutations('thing', ['CHANGE_ACTIVE_FILE']),
      ...mapActions('thing', ['sendEditRequest']),

      changeActiveFile(event) {
        const attachmentId = parseInt(event.target.id, 10);

        this.thing.attachments.forEach((attachment) => {
          if (attachment.id === attachmentId) {
            this.nameActiveFile = attachment.originalFilename;
          }
        });

        this.CHANGE_ACTIVE_FILE({ id: attachmentId });
      },
      handleEdit() {
        // console.log('HANDLE EDIT!!!');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .thing-detail {
    padding: 0px 30px;
    margin: 30px 0px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
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
    }
  }
</style>

<router>
  {
    path: '/thing/:id?',
  }
</router>
