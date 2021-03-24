const submission = require("./answer");

test("Data types", () => {
  const studentAnswers = submission();

  let myValue;

  const values = [
    42,
    "JavaScript",
    new Array(),
    "7" + "8",
    "7" + 8,
    +"37",
    !true,
    false,
    Math.pow(2, 2),
    "myValue",
  ];

  expect(values.map((value) => typeof value)).toEqual(
    studentAnswers
  );
});
