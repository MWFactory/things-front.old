<template>
  <div class="inscription">
    <div class="inscription__timeline">
      <div class="inscription__steps">
        <div id="step-1" class="inscription__step active">
          <div class="inscription__step-number active" :style="cssVars" v-on="currentStep !== 5 ? { click: changeStep } : {}">
            1
          </div>
          <div class="inscription__step-text desktop">
            <div class="inscription__step-title">
              Vos identifiants de connexion
            </div>
            <div class="inscription__step-subtitle">
              Merci d'indiquer votre adresse mail
            </div>
          </div>
        </div>
        <span id="line-1" class="inscription__step-line-between" />
        <div id="step-2" class="inscription__step">
          <div class="inscription__step-number" :style="cssVars" v-on="currentStep !== 5 && validatedStep >= 1 ? { click: changeStep } : {}">
            2
          </div>
          <div class="inscription__step-text desktop">
            <div class="inscription__step-title">
              Vos identifiants de connexion
            </div>
            <div class="inscription__step-subtitle">
              Choisissez un mot de passe sécurisé
            </div>
          </div>
        </div>
        <span id="line-2" class="inscription__step-line-between" />
        <div id="step-3" class="inscription__step">
          <div class="inscription__step-number" :style="cssVars" v-on="currentStep !== 5 && validatedStep >= 2 ? { click: changeStep } : {}">
            3
          </div>
          <div class="inscription__step-text desktop">
            <div class="inscription__step-title">
              Vos informations personnelles
            </div>
            <div class="inscription__step-subtitle">
              Merci d'indiquer votre nom et prénom
            </div>
          </div>
        </div>
        <span id="line-3" class="inscription__step-line-between" />
        <div id="step-4" class="inscription__step">
          <div class="inscription__step-number" :style="cssVars" v-on="currentStep !== 5 && validatedStep >= 3 ? { click: changeStep } : {}">
            4
          </div>
          <div class="inscription__step-text desktop">
            <div class="inscription__step-title">
              Votre photo de profil
            </div>
            <div class="inscription__step-subtitle">
              Sélectionnez une photo de profil (facultative)
            </div>
          </div>
        </div>
        <span id="line-4" class="inscription__step-line-between" />
        <div id="step-5" class="inscription__step">
          <div class="inscription__step-number" >
            5
          </div>
          <div class="inscription__step-text desktop">
            <div class="inscription__step-title">
              Félicitations !
            </div>
            <div class="inscription__step-subtitle">
              Vous avez terminé, bien joué
            </div>
          </div>
        </div>
      </div>
      <div class="inscription__line" />
    </div>
    <div class="inscription__main">
      <Step1 v-if="currentStep === 1" :change-step="changeStep" :validate-step="validateStep" />
      <Step2 v-if="currentStep === 2" :change-step="changeStep" :validate-step="validateStep" />
      <Step3 v-if="currentStep === 3" :change-step="changeStep" :validate-step="validateStep" />
      <Step4 v-if="currentStep === 4" :change-step="changeStep" :validate-step="validateStep" />
      <Step5 v-if="currentStep === 5" :reset-steps="resetSteps"/>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  import { updateFilling } from "@/utils/updateFilling";

  export default {
    name: 'InscriptionPage',
    data() {
      return {
        lengthLineVertical: 0,
        lengthLineHorizontal: 0,
      };
    },
    computed: {
      ...mapState({
        currentStep: state => state.inscription.currentStep,
        validatedStep: state => state.inscription.validatedStep,
      }),

      cssVars() {
        return {
          '--length-line-vertical': this.lengthLineVertical,
          '--length-line-horizontal': this.lengthLineHorizontal,
        };
      },
    },
    mounted() {
      const steps = document.querySelectorAll('.inscription__step');

      // length of the line between two steps (horizontal & vertical)
      this.lengthLineHorizontal = (Math.abs(steps[0].offsetLeft - steps[1].offsetLeft) - 36) + 'px';
      this.lengthLineVertical = (Math.abs(steps[0].offsetTop - steps[1].offsetTop) - 36) + 'px';
    },
    methods: {
      ...mapMutations('inscription', ['CHANGE_STEP']),
      ...mapMutations('inscription', ['VALIDATE_STEP']),

      changeStep(step) {
        if (step.target) {
          if (step.target.classList[0] === 'inscription__step-number') {
            const stepNode = document.querySelector(`#step-${parseInt(step.target.innerHTML, 10)}`);
            step = parseInt(stepNode.id[5], 10);
          }
        }

        this.CHANGE_STEP({ stepId: step });

        updateFilling(step);
      },
      validateStep(step) {
        if (this.validatedStep <= step) {
          this.VALIDATE_STEP({ stepId: step });
        }
      },
      resetSteps() {
        this.CHANGE_STEP({ stepId: 1 });
        this.VALIDATE_STEP({ stepId: 0 });
      }
    },
  };
</script>

<style lang="scss">
  .inscription {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);

    &__timeline {
      position: relative;
      height: calc(36px + 30px);
      padding: 0px 30px;
      background-color: $primary;
    }

    &__steps {
      display: flex;
      justify-content: space-between;
    }

    &__step {
      opacity: 0.5;
      display: flex;
      align-items: center;

      &.complete, &.active {
        opacity: 1;
      }

      &-number {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        width: 36px;
        background-color: $white;
        color: $black;
        font-weight: 700;

        &.active {
          cursor: pointer;
          background-color: $black;
          color: $white;
        }

        &.complete {
          cursor: pointer;
        }
      }

      &-line-between {
        position: relative;
        opacity: 0.5;
        background-color: $white;
        margin-top: calc(33px / 2);
        height: 2px;
        width: 100%;

        &.active {
          opacity: 1;
        }
      }

      &-text {
        display: flex;
        flex-direction: column;
        color: $white;
      }

      &-title {
        font-weight: 700;
        margin-bottom: 2px;
      }

      &-subtitle {
        font-size: 13px;
      }
    }

    &__main {
      padding: 0px 30px;
      margin: 40px 0px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      height: 100%;
    }
  }

  .step {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 80%;

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__text {
      text-align: center;
    }

    &__form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__profile-picture {
      overflow: hidden;
      width: 115px;
      height: 115px;
      margin-top: 30px;
      border: 2px solid $black;
      border-radius: 100px;

      img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
      }
    }

    &__file {
      margin-top: 30px;
    }

    &__user-name {
      margin-top: 30px;
      font-size: 23px;
      font-weight: 700;
      text-align: center;
    }

    &__error-message {
      position: absolute;
      bottom: -30px;
      font-weight: 700;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .step {
      min-height: 50%;
      max-width: 535px;
    }
  }

  @media (min-width: 992px) {
    .inscription {
      flex-direction: row;
      align-items: center;
      height: calc(100vh - 160px);

      &__timeline {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 40%;
        height: 100vh;
        display: flex;
        align-items: center;
        padding: 0px 100px;
      }

      &__step {
        &-number {
          margin-right: 30px;
        }
      }

      &__steps {
        flex-direction: column;
        height: 65%;
      }

      &__step {
        &-line-between {
          margin-top: 0px;
          margin-left: calc(33px / 2);
          width: 2px;
          height: 100%;

          &.active {
            opacity: 1;
          }
        }
      }

      &__main {
        margin: 0px 0px 0px 40%;
      }
    }

    .step {
      min-height: 65%;
      max-width: 535px;
    }
  }
</style>
