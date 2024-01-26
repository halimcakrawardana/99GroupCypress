/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", () => {
  
  beforeEach(() => {
    //Optional
    cy.visit('https://99.co', {
      failOnStatusCode: false,
      "chromeWebSecurity": false,
      headers: {
      'content-type':'text/html; charset=utf-8',
      'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'X-Client-Data':'CJC2yQEIpbbJAQipncoBCIWUywEIlqHLAQiLq8wBCIWgzQEIou7NAQjA7s0BCIPwzQEY9MnNARin6s0BGPnyzQE=',

      }
  });
  });

  it("Test Case 1", () => {
    //Write your automation script here for Test Case 1
  });


  // it("Test Case 2", () => {
  //   //Optional
  // });

  // it("Test Case 3", () => {
  //   //Optional
  // });
});