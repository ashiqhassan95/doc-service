import json from "./sample-data.json";

const getCustomers = () => {
  const services = getServices();
  const customers = json.data.customers.map((item) => {
    const serviceChosen = services.filter(
      (serviceItem) => serviceItem.id === item.service_id
    );

    return {
      id: item.id,
      name: item.name,
      location: item.location,
      avaiableAt: item.avaiable_at,
      avaiableFrom: item.avaiable_from,
      avaiableTo: item.avaiable_to,
      requestedOn: item.requested_on,
      serviceId: item.service_id,
      deals: item.deals,
      avatar: item.avatar,
      avaiableSlots: item.avaiable_slots,
      service: serviceChosen.length ? serviceChosen[0] : null,
    };
  });
  return customers;
};

const getServices = () => {
  const services = json.data.services;
  return services;
};

export { getCustomers, getServices };
