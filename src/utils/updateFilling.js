export const updateFilling = (id) => {
  const steps = document.querySelectorAll('.inscription__step');

  const selectedStep = document.querySelector(`#step-${id}`);

  if (id >= 2) {
    const selectedStepLine = document.querySelector(`#line-${id - 1}`);
    selectedStepLine.classList.add('active');
  }

  const selectedStepNumber = selectedStep.querySelector('.inscription__step-number');
  selectedStep.classList.add('active');
  selectedStepNumber.classList.add('active');
  selectedStepNumber.classList.add('complete');

  steps.forEach((step) => {
    const stepId = parseInt(step.id[5], 10);
    const selectedStepId = parseInt(selectedStep.id[5], 10);

    if (stepId < selectedStepId) {
      const prevStepNumber = step.querySelector('.inscription__step-number');
      prevStepNumber.classList.remove('active');
      prevStepNumber.classList.add('complete');
    } else if (stepId > selectedStepId) {
      const nextStepNumber = step.querySelector('.inscription__step-number');
      nextStepNumber.classList.remove('active');
    }
  });
};
