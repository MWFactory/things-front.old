<<<<<<< HEAD
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
    <div class="thing-detail__content">
      <div class="thing-detail__files-wrapper">
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
      </div>
      <div class="thing-detail__data-wrapper">
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
        console.log('HANDLE EDIT!!!');
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

  @media (min-width: 992px) {
    .thing-detail {
      display: flex;
      flex-direction: column;
      max-width: 70%;
      margin: 30px auto;

      &__content {
        display: flex;
        flex-direction: row-reverse;
      }

      &__data-wrapper, &__files-wrapper {
        width: 50%;
      }

      &__data-wrapper {
        margin-right: 30px;
      }

      &__description {
        margin-top: 0px;
      }
    }
  }
</style>

<router>
  {
    path: '/thing/:id?',
  }
</router>
=======
<template>
  <main class="thing-detail">
    <!-- THING DETAIL contains => title, edit button, content with attachments, name of active file, description, purchase date & warranty en date -->
    <section class="thing-detail__header">
      <!-- title -->
      <h1 class="thing-detail__title">
        {{ thing.title }}
      </h1>
      <!-- edit button -->
      <router-link :to="`/thing/modifier/${ thing.id }`" class="thing-detail__edit-thing">
        <img class="thing-detail__edit-thing-ico" src="../../assets/images/edit-thing-icon.svg" alt="Modification d'une Thing" />
      </router-link>
    </section>
    <section class="thing-detail__content">
      <!-- content with -->
      <div class="thing-detail__files">
        <!-- attachments -->
        <div class="thing-detail__files-wrapper">
          <div class="thing-detail__files-preview" />
          <div class="thing-detail__files-sources">
            <div v-for="attachment of thing.attachments" :key="attachment.id" :id="attachment.id" :class="attachment.onActive === false ? 'thing-detail__file' : 'thing-detail__file active'" @click="changeActiveFile" />
          </div>
        </div>
        <div class="thing-detail__files-infos">
          <!-- name of active file -->
          <h2 class="thing-detail__files-subtitle">
            <img class="thing-detail__files-preview-icon" src="../../assets/images/preview-icon.svg" alt="Prévisualisation" />
            Nom et format du fichier
          </h2>
          <div v-if="activeFile" class="thing-detail__file-name">
            {{ activeFile.originalFilename }}
          </div>
        </div>
      </div>
      <div class="thing-detail__data">
        <!-- description -->
        <p class="thing-detail__description">
          {{ thing.description }}
        </p>
        <div class="thing-detail__dates">
          <div class="thing-detail__date">
            <h2 class="thing-detail__date-subtitle">
              > Date d'achat
            </h2>
            <!-- purchase date -->
            <div class="thing-detail__date-value">
              {{ new Date(thing.purchaseDate).toLocaleDateString() }}
            </div>
          </div>
          <div v-if="thing.warrantyEndDate" class="thing-detail__date">
            <h2 class="thing-detail__date-subtitle">
              > Fin de garantie
            </h2>
            <!-- warranty end date -->
            <div class="thing-detail__date-value">
              {{ new Date(thing.warrantyEndDate).toLocaleDateString() }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'ThingDetailPage',
    data() {
      return {
        activeFile: null,
      };
    },
    computed: {
      ...mapState({
        thing: state => state.thing,
      }),
    },
    mounted() {
      this.thing.attachments.forEach((attachment) => {
        if (attachment.onActive) {
          this.activeFile = attachment;
        } else {
          this.CHANGE_ACTIVE_FILE({ id: this.thing.attachments[0].id });
          this.activeFile = this.thing.attachments[0]
        }
      });
    },
    methods: {
      // ...map()
      ...mapMutations('thing', ['CHANGE_ACTIVE_FILE']),

      /**
       * when the user clicks on the thumbnail of a file, we change the active file
       * @method
       * @name changeActiveFile
       * @param {Object} event - the clicked DOM node
       */
      changeActiveFile(event) {
        const attachmentId = parseInt(event.target.id, 10);

        this.CHANGE_ACTIVE_FILE({ id: attachmentId });

        this.thing.attachments.forEach((attachment) => {
          if (attachment.onActive === true) {
            this.activeFile = attachment;
          }
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .thing-detail {
    @include main-container;
    @include flex-column-align-center;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-height: 45px;
    }

    &__edit-thing {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 45px;
      min-width: 45px;
      background-color: $primary;
      margin-left: 1.875rem;
    }

    /**
      * CONTENT => files
     */
    &__content {
      width: 100%;
    }

    &__files {
      margin: 1.875rem 0;

      &-preview {
        display: none;
      }

      &-sources {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-infos {
        margin-top: 0.938rem;
      }

      &-subtitle {
        margin-bottom: 0.313rem;
      }
    }

    &__file {
      cursor: pointer;
      overflow: hidden;
      height: 86px;
      width: 86px;
      min-height: 86px;
      min-width: 86px;
      border: 1px solid $black;

      &.active {
        border: 1px solid $primary;
      }
    }

    &__description {
      margin: 1.875rem 0;
      padding: 1.25rem 0;
      border: dashed $primary;
      border-width: 2px 0;
    }

    &__date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.938rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) {
    .thing-detail {
      width: 100%;

      &__content {
        display: flex;
        flex-direction: row-reverse;
      }

      &__files, &__data {
        width: 50%;
        margin: 1.875rem 0;
      }

      &__files {
        margin-left: 0.938rem;
      }

      &__data {
        margin-right: 0.938rem;
      }

      &__description {
        margin-top: 0;
      }

      &__files-preview {
        display: block;
        border: 1px solid $black;
        width: 100%;
        height: 100%;
      }

      &__files-wrapper {
        display: flex;
        height: 450px;
      }

      &__files-sources {
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        padding-left: 1.875rem;
        padding-right: 10px;
      }

      &__file {
        margin-right: 0;
        margin-bottom: 0.938rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .thing-detail {
      padding: 0 6.25rem;
    }
  }

  @media (min-width: 1200px) {
    .thing-detail {
      max-width: 80%;
      margin: 1.875rem auto;
    }
  }
</style>

<router>
  {
    path: '/thing/:id?',
  }
</router>
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
