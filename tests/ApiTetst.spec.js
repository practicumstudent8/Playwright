const { test, expect, request } = require('@playwright/test');

test.only('verify the API login test', async () => {
  const apiContext = await request.newContext();

  const requestPayload = {
    email: "student@example.com",
    password: "welcome"
  };

  const loginResponse = await apiContext.post('https://skryabin.com/recruit/api/v1/login', {
    data: requestPayload
  });

  // Log the status code
  console.log("Status Code:", loginResponse.status());

  // Expect status to be 200 (OK)
  expect(loginResponse.status()).toBe(200);

  // Parse and log the response body
  const responseBody = await loginResponse.json();
  console.log("Response JSON:", responseBody);

  // Optionally, add an assertion on a specific field in the response
  expect(responseBody).toHaveProperty('token'); // or another known field
});