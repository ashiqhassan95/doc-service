import * as data from "../../../data/data";
import * as types from "./mutation-type";
import ls from "../../../services/ls";

export const fetchRequests = ({ commit }) => {
  commit(types.SET_LOADING, true);

  return new Promise((resolve) => {
    const services = data.getServices();
    const customers = data.getCustomers();
    const serviceOnRequestStage = [];

    services.forEach((serviceItem) => {
      const { id, name, description, category, price, poster } = serviceItem;
      const service = {
        id,
        name,
        description,
        category,
        price,
        poster,
        clients: customers.filter((clienItem) => {
          if (clienItem.serviceId === id) {
            const status = ls.get(
              `CLIENT_${clienItem.id}_SERVICE_${id}_STATUS`
            );

            if (status === null || status === "PENDING") {
              return true;
            }

            return false;
          }
          return false;
        }),
      };
      serviceOnRequestStage.push(service);
    });

    commit(types.SET_LOADING, false);
    commit(types.SET_REQUESTS, serviceOnRequestStage);
    resolve(true);
  });
};

export const getClientForService = ({ commit }, serviceId) => {
  return new Promise((resolve, reject) => {
    if (!serviceId) {
      reject({
        success: false,
        message: "required args not passed",
      });
    }

    const customers = data.getCustomers();
    const filteredCustomers = customers.filter((clienItem) => {
      if (clienItem.serviceId === serviceId) {
        const status = ls.get(
          `CLIENT_${clienItem.id}_SERVICE_${serviceId}_STATUS`
        );

        if (status === null || status === "PENDING") {
          return true;
        }
      }
      return false;
    });
    commit(types.SET_CLIENT_TO_SERIVICE_REQUEST, filteredCustomers);
    resolve(customers);
  });
};

export const acceptClientRequest = ({ commit }, { clientId, serviceId }) => {
  return new Promise((resolve, reject) => { 
    if (!clientId || !serviceId) {
      reject({
        success: false,
        message: "required args not passed",
      });
    }

    ls.set(`CLIENT_${clientId}_SERVICE_${serviceId}_STATUS`, "ACTIVE");
    commit(types.REMOVE_CLIENT, clientId);
    resolve(true);
  });
};
