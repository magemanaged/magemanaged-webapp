import { msalConfig } from "./auth/ms/aad/config";

describe("Sanitize configuration object", () => {
  beforeAll(() => {});

  it("should define the config object", () => {
    expect(msalConfig).toBeDefined();
  });

  it("should not contain credentials", () => {
    const regexGuid =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(regexGuid.test(msalConfig.auth.clientId)).toBe(false);
  });

  it("should not contain authority URI", () => {
    const regexUri =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    expect(regexUri.test(msalConfig.auth.authority)).toBe(false);
  });
});
