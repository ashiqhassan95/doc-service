<template>
  <b-card no-body class="text-left">
    <b-card-header class="d-flex align-items-center">
      <div class="flex-grow-1">
        <p class="m-0">
          <strong>Request</strong>
        </p>
        <p class="m-0">
          <strong class="text-muted font-13">{{
            client.requestedOn | unixToShortReadable
          }}</strong>
        </p>
      </div>
      <div>
        <WizardSteps>
          <WizardStep title="Request" step="1" :active="true" />
          <WizardStep title="Service" step="2" :active="false" />
          <WizardStep title="Payment" step="3" :active="false" />
        </WizardSteps>
      </div>
    </b-card-header>

    <b-card-body>
      <div class="row align-items-center">
        <div class="col-6">
          <div class="d-flex align-items-center">
            <b-avatar variant="info" :src="client.avatar" />
            <div class="ml-3">
              <p class="m-0 font">
                <strong class="text-primary">{{ client.name }}</strong>
              </p>
              <p class="m-0 font-13 text-muted">{{ client.location }}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex align-items-center">
            <img
              style="width: 32px;height: 32px;"
              alt="Vue logo"
              src="../../assets/hand-icon.png"
            />
            <div class="ml-3">
              <p class="m-0">
                <strong>You two had {{ client.deals }} deals before.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <p class="m-0">This customer is available at:</p>
        <div class="d-flex mt-2">
          <i class="icon-calendar icons"></i>
          <div class="flex-grow-1 ml-3">
            <p
              class="m-0"
              v-for="(time, index) in client.avaiableSlots"
              :key="index"
            >
              {{ time | unixToLongReadable }}
            </p>
          </div>
        </div>

        <div class="d-flex mt-2">
          <i class="icon-location-pin icons"></i>
          <div class="flex-grow-1 ml-3">
            <p class="m-0 text-primary">{{ client.avaiableAt }}</p>
          </div>
        </div>
      </div>
    </b-card-body>

    <b-card-footer>
      <b-button
        size="sm"
        variant="primary"
        @click="$emit('on-primary-action', client.id, client.serviceId)"
        >{{ primaryActionText }}</b-button
      >
      <b-button size="sm" variant="outline-primary" class="ml-3"
        >{{ secondaryActionText }}</b-button
      >
      <b-button size="sm" variant="outline-primary" class="ml-3">
        <i class="icon-options-vertical icons"></i>{{ secondaryAction2Text }}
      </b-button>
    </b-card-footer>
  </b-card>
</template>
<script>
export default {
  name: "ClientCard",
  props: {
      name,
      location,
      cardTitle,
      cardSubtitle,
      avatar,
      deals,
      primaryActionText,
      secondaryActionText,
      secondaryAction2Text, 
  }
};
</script>
