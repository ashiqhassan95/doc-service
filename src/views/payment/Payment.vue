<template>
  <b-container>
    <b-row>
      <b-col>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="0"
          controls
          indicators
          background="#ababab"
          img-width="720"
          img-height="360"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-end="onSlideChanged"
        >
          <b-carousel-slide
            v-for="service in services"
            :key="service.id"
            :caption="service.name"
            :img-src="service.poster"
          >
            <p class="mb-1">{{ service.price | formatMoney }} for one session</p>
            <p>
              {{ service.description }}
            </p>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row class="mt-4" v-if="clients.length === 0">
      <b-col>
        <b-alert show variant="info">No clients available</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class="col-12 col-lg-6 mt-4"
        v-for="client in clients"
        :key="client.id"
      >
        <b-card no-body class="text-left">
          <b-card-header class="d-flex align-items-center">
            <div class="flex-grow-1">
              <p class="m-0">
                <strong>Pending Payment</strong>
              </p>
              <p class="m-0">
                <strong class="text-muted font-13">{{
                  client.requestedOn | unixToShortReadable
                }}</strong>
              </p>
            </div>
            <div>
              <WizardSteps>
                <WizardStep title="Request" step="1" :completed="true" />
                <WizardStep title="Service" step="2" :completed="true" />
                <WizardStep title="Payment" step="3" :active="true" />
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
                      <strong
                        >You two had {{ client.deals }} deals before.</strong
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <p class="m-0">
                Service is complete, please confirm payment amount:
              </p>
              <div class="d-flex mt-2">
                <i class="icon-info icons"></i>
                <div class="flex-grow-1">
                  <strong class="ml-3">Invoice item:</strong>
                  <div class="d-flex">
                    <p class="m-0 ml-3 mt-2 flex-grow-1">Session price</p>
                    <p class="m-0 ml-3 mt-2 font-weight-bold">
                      {{ client.service.price | formatMoney }}
                    </p>
                  </div>
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
            <b-button size="sm" variant="primary" @click="resendInvoice"
              >Resend Invoice</b-button
            >
            <b-button
              size="sm"
              variant="outline-primary"
              class="ml-3"
              @click="startChat"
              >Start a Chat</b-button
            >
            <b-button size="sm" variant="outline-primary" class="ml-3">
              <i class="icon-options-vertical icons"></i>More
            </b-button>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WizardSteps from "@/components/custom/WizardSteps.vue";
import WizardStep from "@/components/custom/WizardStep.vue";

export default {
  name: "Payment",
  components: {
    WizardStep,
    WizardSteps,
  },
  data() {
    return {
      message: "",
      slide: 0,
    };
  },
  computed: {
    ...mapGetters("payment", {
      services: "services",
      isLoading: "isLoading",
      clients: "clients",
    }),
  },
  async mounted() {
    await this.fetchServices();
    await this.onSlideChanged();
  },
  methods: {
    ...mapActions("payment", ["fetchServices", "getClientForService"]),

    async onSlideChanged() {
      const service = this.services[this.slide];
      await this.getClientForService(service.id);
    },

    async createInvoice(clientId, serviceId) {
      await this.geerateInvoice({ clientId, serviceId });
    },

    resendInvoice() {
      alert("Resend Invoice Clicked");
    },

    startChat() {
      alert("Start Chat Clicked");
    },
  },
};
</script>
