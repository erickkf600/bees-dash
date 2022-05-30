import { AxiosResponse } from "axios";
import { api, axiosRequestConfiguration } from "../../api.axios";
import { InfoCards } from "../../interfaces/info-cards";
const axiosInstance = api(axiosRequestConfiguration);

export const getInfos = (): Promise<InfoCards[]> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get("breweries")
            .then((value: AxiosResponse) => {
                resolve(value.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
