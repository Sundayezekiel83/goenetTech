import api from "../config/api";
import { ApiEndPoints } from "../config/Endpoints";

export async function FetchCategory() {
  const response = await api.get(`${ApiEndPoints.category}`);
  return response;
}

export async function FetchAllProducts() {
  const response = await api.get(`${ApiEndPoints.all_product}`);
  return response;
}
