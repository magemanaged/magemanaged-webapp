import { useMsal } from "@azure/msal-react";
import { tokenRequest } from "../merlin/config";
import { loginRequest } from "./aad/config";

//AD Token functions for hook use in react components
export const ADTokenReq = () => {
  const { instance, accounts } = useMsal();

  //Function to grab auth token from AD for signed in user
  const getADAccessToken = async () => {
    return new Promise(function (resolve, reject) {
      const request = {
        ...tokenRequest,
        account: accounts[0],
      };

      instance
        .acquireTokenSilent(request)
        .then((response) => {
          resolve(response.accessToken);
        })
        .catch((e) => {
          instance
            .acquireTokenPopup(request)
            .then((response) => {
              resolve(response.accessToken);
            })
            .catch((e) => reject(e));
        });
    });
  };

  const getGraphAccessToken = async () => {
    return new Promise(function (resolve, reject) {
      const request = {
        ...loginRequest,
        account: accounts[0],
      };

      instance
        .acquireTokenSilent(request)
        .then((response) => {
          resolve(response.accessToken);
        })
        .catch((e) => {
          instance
            .acquireTokenPopup(request)
            .then((response) => {
              resolve(response.accessToken);
            })
            .catch((e) => reject(e));
        });
    });
  };
  return { getADAccessToken, getGraphAccessToken };
};
