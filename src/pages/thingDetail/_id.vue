<template>
  <main class="thing-detail">
    <!-- THING DETAIL contains => title, edit button, content with attachments, name of active file, description, purchase date & warranty en date -->
    <section class="thing-detail__header">
      <!-- title -->
      <h1 class="thing-detail__title">
        {{ thing.title }}
      </h1>
      <!-- edit button -->
      <router-link :to="`/thing/modifier/${thing.id}`" class="thing-detail__edit-thing">
        <img class="thing-detail__edit-thing-ico" src="@/assets/images/edit-thing-icon.svg" alt="Modification d'une Thing" />
      </router-link>
    </section>
    <section class="thing-detail__content">
      <!-- content with -->
      <div class="thing-detail__files-wrapper">
        <!-- attachments -->
        <div class="thing-detail__files-src">
          <div class="thing-detail__files-preview"></div>
          <div class="thing-detail__files">
            <div v-for="attachment of thing.attachments" :key="attachment.id" :class="attachment.onActive === false ? 'thing-detail__file' : 'thing-detail__file active'" @click="changeActiveFile">
              <canvas id="canvas-id"></canvas>
            </div>
          </div>
        </div>
        <div class="thing-detail__files-infos">
          <!-- name of active file -->
          <h2 class="thing-detail__files-subtitle">
            <img class="thing-detail__files-preview-icon" src="@/assets/images/preview-icon.svg" alt="Prévisualisation" />
            Nom et format du fichier
          </h2>
          <div v-if="activeFile" class="thing-detail__files-path">
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
        if (attachment.onActive === true) {
          this.activeFile = attachment;
        }
      });
    },
    methods: {
      // ...map()
      ...mapMutations('thing', ['CHANGE_ACTIVE_FILE']),

      changeActiveFile(event) {
        const attachmentId = parseInt(event.target.id, 10);

        this.thing.attachments.forEach((attachment) => {
          if (attachment.onActive === true) {
            this.activeFile = attachment;
          }
        });

        this.CHANGE_ACTIVE_FILE({ id: attachmentId });
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
      height: 45px;
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

    &__content {
      width: 100%;
    }

    &__files-wrapper {
      width: 100%;
      margin: 1.875rem 0;
    }

    &__files-preview {
      display: none;
    }

    &__files-infos {
      margin-top: 0.938rem;
    }

    &__files-subtitle {
      margin-bottom: 0.313rem;
    }

    &__files {
      display: flex;
      align-items: center;
      width: 100%;
      overflow: hidden;
      overflow-x: scroll;
    }

    &__file {
      height: 86px;
      width: 86px;
      min-height: 86px;
      min-width: 86px;
      border: 1px solid $black;
      margin-right: 0.938rem;

      &:last-child {
        margin-right: 0;
      }

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

      &__files-wrapper, &__data {
        width: 50%;
      }

      &__files-wrapper {
        margin-left: 0.938rem;
      }

      &__files-preview {
        display: block;
        border: 1px solid $black;
        width: 100%;
        height: 100%;
      }

      &__files-src {
        display: flex;
        height: 450px;
      }

      &__data {
        margin-right: 0.938rem;
      }

      &__files {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding-left: 1.875rem;
        padding-right: 10px;
        width: auto;
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
