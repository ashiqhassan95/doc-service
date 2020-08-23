import * as data from "../../../data/data";
import * as types from "./mutation-type";
import ls from "../../../services/ls";

export const fetchServices = ({ commit }) => {
  commit(types.SET_LOADING, true);

  return new Promise((resolve) => {
    const services = data.getServices();
    const customers = data.getCustomers();
    const activeServices = [];

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
            if (status === "ACTIVE") {
              return true;
            }

            return false;
          }
          return false;
        }),
      };
      activeServices.push(service);
    });

    commit(types.SET_LOADING, false);
    commit(types.SET_SERVICES, activeServices);
    resolve(true);
  });
};

export const getClientForService = ({ commit, }, serviceId) => {
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

        if (status === "ACTIVE") {
          return true;
        }
      }
      return false;
    });
    commit(types.SET_CLIENTS_TO_SERIVICE, filteredCustomers);
    resolve(true);
  });
};

export const checkInClient = ({ commit }, { clientId, serviceId }) => {
  return new Promise((resolve, reject) => { 
    if (!clientId || !serviceId) {
      reject({
        success: false,
        message: "required args not passed",
      });
    }

    ls.set(`CLIENT_${clientId}_SERVICE_${serviceId}_STATUS`, "PAYMENT");
    commit(types.REMOVE_CLIENT, clientId);
    resolve(true);
  });
};
