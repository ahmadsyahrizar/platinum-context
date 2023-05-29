import { DOMAIN_API } from "../../constants";
import fetchAPI from "../fetchAPI";

const apiURL = `${DOMAIN_API}/customer/auth/login`;

// mocking data response / apapun
// mocking = membuat data palsu

//1 CREATE DATA MOCK
//
const dataMock = {
  email: "customer@bcr.io",
  role: "Customer",
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4NTM3MDI2MX0.s86PruZ6jqNn9Pr2Wpy8IfEf0WZtgRwxH4MGjEKvdjE",
};

global.fetch = jest.fn((api, options) => {
  return Promise.resolve({
    json: () => {
      const { email, password } = JSON.parse(options.body);
      console.log({ options, api });
      if (email === "customer@bcr.io" && password === "123456") {
        return Promise.resolve(dataMock);
      } else {
        return Promise.reject({
          name: "Not Found",
          message: "Email not found.",
        });
      }
    },
  });
});

describe("Fetch API", () => {
  test("hit login api and works correctly", async () => {
    const res = await fetchAPI(
      {
        email: "customer@bcr.io",
        password: "123456",
      },
      apiURL
    );

    expect(res).toEqual(dataMock);
  });

  test("HIT LOGIN API and fail", async () => {
    await expect(
      async () =>
        await fetchAPI(
          {
            email: "customer@bcr.io",
            password: "123456",
          },
          ""
        )
    ).rejects.toThrowError("this function needs API to works !");
  });

  test("HIT login api and got response for wrong data user", async () => {
    // PASS ketika errornya expected;
    await expect(async () => {
      await fetchAPI(
        {
          email: "ahmad.binar@gmail.com",
          password: "123456",
        },
        apiURL
      );
    }).rejects.toEqual({
      name: "Not Found",
      message: "Email not found.",
    });
  });
});

// Test case tiap tiap unit test, berhasil, gagal,
