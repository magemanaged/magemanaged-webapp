import { ADTokenReq } from "../ADTokenReq";
import { graphConfig } from '../graph/config'

export const MSGraph = () => {
    const { getGraphAccessToken } = ADTokenReq();

    const callMSGraph = async (endpoint, type) => {
        return getGraphAccessToken().then((token) => {
            const headers = new Headers();
            const bearer = `Bearer ${token}`;
          
            headers.append("Authorization", bearer);
        
            const options = {
                method: "GET",
                headers: headers
            };

            return fetch(endpoint, options)

        }).then(response => {
            if (type == 'blob')
            {
                return response.blob();
            }
            else
            {
                return response.json();
            }
        })
    }

    const RequestProfileInfo = async() => {
        return callMSGraph(graphConfig.graphMeEndpoint, 'json');
    }

    return { callMSGraph, RequestProfileInfo };
}