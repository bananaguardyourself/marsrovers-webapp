import React, { FC, PropsWithChildren, useContext, useMemo } from "react";
import { ApiService } from "../services/ApiService";

export const ApiContext = React.createContext({} as ApiService);

export const ApiProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const apiService = useMemo(() => new ApiService(), []);
    return (<ApiContext.Provider value={apiService}>{children}</ApiContext.Provider>)
};

export const useApi = (): ApiService => {
    return useContext(ApiContext)
};