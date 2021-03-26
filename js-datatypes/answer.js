function submission() {
  /**
   * Instructions:
   *
   * The array called `values` consists of 10 values.
   * Your task is to determine the data type of each value. Please write down each of the answers as a string in the `answers` array.
   *
   * Do not use any method to programatically produce the answer, or you will receive zero credit for this assessment.
   *
   * The first answer is given as an example.
   */

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

  const answers = [
    // put your answers here in strings, separated by comma
    // the first answer is provided as an example
      "number",
      "string",
      "object",
      "string",
      "string",
      "number",   //but I think it may be not "number" because typeof(+"run")  also equal to "number"
      //I google and think so:
      //I have find "number" include NaN(stand for"not a number"),so if the values in the form of expression, it is treated as a number, but it cannot actually perform any arithmetic operations
      "boolean",
      "boolean",
      "number",
      "string",
  ];

  return answers;
}

module.exports = submission;
