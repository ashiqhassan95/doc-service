<template>
  <li class="step" :class="{ 'step-active': active, ' step-success': completed }">
    <div class="step-content">
      <span class="step-circle">{{ step }}</span>
      <span class="step-text">{{ title }}</span>
    </div>
  </li>
</template>
<script>
export default {
  name: "WizardStep",
  props: {
    step: {
      type: [String, Number],
      required: true
    },
    title: {
      type: [String],
      required: true
    },
    active: {
      type: [Boolean, String],
      required: false
    },
    completed: {
      type: [Boolean, String],
      required: false
    }
  }
};
</script>
