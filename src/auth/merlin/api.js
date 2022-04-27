import { ADTokenReq } from "../ms/ADTokenReq";

//Exports promise
export const Merlin = () => {
  const { getADAccessToken } = ADTokenReq();

  //Resolves to promise
  const callMerlin = async (endpoint, ops) => {
    return getADAccessToken()
      .then((token) => {
        const headers = new Headers();
        const bearer = `Bearer ${token}`;

        headers.append("Authorization", bearer);
        headers.append("Content-Type", "application/json");

        const options = {
          method: ops.method,
          headers: headers,
          body: ops.body,
        };

        return fetch(endpoint, options);
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { callMerlin };
};

export default Merlin;
