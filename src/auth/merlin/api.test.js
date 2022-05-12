import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Merlin } from "./api";

afterEach(cleanup);

//Setup mock to imitate ADTokenReq allowing for Merlin API to execute with
//fake AzureAD token.
jest.mock("../ms/ADTokenReq", () => {
  const ADTokenReq = () => {
    const getADAccessToken = async () => {
      return new Promise(function (resolve, reject) {
        //THis is the fake access token that will be returned for authentication within Merlin call
        resolve("abd123");
      });
    };
    //Utilize the es6 destructuring assignment
    return { getADAccessToken };
  };
  return { ADTokenReq };
});

describe("Merlin API", () => {
  it("Responds correctly", () => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
      });

    const { callMerlin } = Merlin();
    callMerlin("camelot-endpoint", {
      method: "GET",
    }).then((response) => {
      expect(response.status).toBe(200);
    });
  });
  it("Error is thrown when no arguments are given.", () => {
    global.fetch = () => Promise.reject("API is down");

    const { callMerlin } = Merlin();
    expect(
      callMerlin("camelot-endpoint", {
        method: "GET",
      }).then((response) => {
        expect(response).toBe("API is down");
      })
    );
  });
});
