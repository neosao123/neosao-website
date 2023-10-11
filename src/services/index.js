import http from "./http";

export const sendCarrierRequestApi = async (payload, page, search) => {
  const { data: response } = await http.post(`/sendCarrierRequest`, payload);
  return response;
};

export const sendEmail = async (payload, page, search) => {
  const { data: response } = await http.post(`/sendEmail`, payload);
  return response;
};
