it("should calculate the monthly rate correctly", function () {
  const values = { amount: 12000, years: 4, rate: 7.5 };
  expect(calculateMonthlyPayment(values)).toEqual("290.15");
});

it("should return a result with high loan amounts", function () {
  const values = { amount: 6000000, years: 40, rate: 2.5 };
  expect(calculateMonthlyPayment(values)).toEqual("19786.69");
});

it("should work with long loan terms", function () {
  const values = { amount: 12000, years: 80, rate: 3 };
  expect(calculateMonthlyPayment(values)).toEqual("33.00");
});

it("should work with high interest rates", function () {
  const values = { amount: 10000, years: 2, rate: 99 };
  expect(calculateMonthlyPayment(values)).toEqual("969.66");
});

/// etc
