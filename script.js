// const result = document.getElementById("resultView");
// const contentArray = [];

// function appendButtonValue(content) {
//   let resultNumber;
//   if (content !== "enter" && content !== "backspace") {
//     if (content !== "+" && content !== "-" && content !== "/" && content !== "*") {
//       result.textContent += content;
//     }else {
//         resultNumber = result.textContent;
//         result.textContent += content;
//         contentArray.push(resultNumber,content);
//         resultNumber = '';
//     }
// }else if (content === 'enter') {
//     contentArray.push(resultNumber);
//     console.log(contentArray)
//     if (contentArray[1] == '+') {
//         result.textContent = parseInt(contentArray[0]) + parseInt(contentArray[2])
//     }else if (contentArray[1] == '-') {
//         result.textContent = parseInt(contentArray[0]) - parseInt(contentArray[2])
//     }else if (contentArray[1] == '*') {
//         result.textContent = parseInt(contentArray[0]) * parseInt(contentArray[2])
//     }else if (contentArray[1] == '/') {
//         result.textContent = parseInt(contentArray[0]) / parseInt(contentArray[2])
//     }
//     contentArray.length=0;
//   }
// }

const result = document.getElementById("resultView");
const contentArray = [];
let resultNumber = "";

function appendButtonValue(content) {
  if (content !== "enter" && content !== "backspace") {
    if (
      content !== "+" &&
      content !== "-" &&
      content !== "/" &&
      content !== "*"
    ) {
      result.textContent += content;
      resultNumber += content; // Update resultNumber with the current content
    } else {
      resultNumber = result.textContent;
      result.textContent += content;
      contentArray.push(resultNumber, content);
      resultNumber = "";
    }
  } else if (content === "enter") {
    if (resultNumber !== "") {
      contentArray.push(resultNumber); // Push the resultNumber if it's not empty
    }
    if (contentArray[1] == "+") {
      result.textContent =
        parseInt(contentArray[0]) + parseInt(contentArray[2]);
    } else if (contentArray[1] == "-") {
      result.textContent =
        parseInt(contentArray[0]) - parseInt(contentArray[2]);
    } else if (contentArray[1] == "*") {
      result.textContent =
        parseInt(contentArray[0]) * parseInt(contentArray[2]);
    } else if (contentArray[1] == "/") {
      result.textContent =
        parseInt(contentArray[0]) / parseInt(contentArray[2]);
    }
    console.log(contentArray);
    contentArray.length = 0;
    resultNumber = result.textContent;
  } else if (content === "backspace") {
    result.textContent = result.textContent.slice(0, -1);
    resultNumber = resultNumber.slice(0, -1);
  }
}
