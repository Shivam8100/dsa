//spinal case :
//variable naming convention where each word is in lower case, and separated by dashes

// Ques.>Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// ---------------------------------test cases------------------------------------------------------
// 1.Waiting:spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap
// 2.Waiting:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// 3.spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

// ++++++++++++++++++++++++++steps+++++++++++++++++++++

function spinalCase() {
  // 1.Create a regular expression for all white spaces and underscores.
  const regex = /\s+|_+/g;
  // 2.You will also have to make everything lowercase.
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  //   This regular expression is looking for a lowercase letter immediately followed by an uppercase letter. The parentheses () create capturing groups, and in this case, there are two capturing groups:

  // ([a-z]): This captures a lowercase letter.
  // ([A-Z]): This captures an uppercase letter.
  // Now, in the replacement string "$1 $2", $1 refers to the content of the first capturing group (([a-z])), and $2
}
