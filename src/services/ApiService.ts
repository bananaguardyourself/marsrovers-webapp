import axios, { AxiosInstance } from "axios";
import { MarsRovers, MarsRoversResult } from "../dataTypes";

const baseUrl = process.env.REACT_APP_API_PATH;

export class ApiService {

    private readonly axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create();
    }

    async processMarsRovers(marsRovers: MarsRovers): Promise<MarsRoversResult> {
       const response = await this.axiosInstance.post(`${baseUrl}/marsrovers`, marsRovers);
       return response.data;
    }

}