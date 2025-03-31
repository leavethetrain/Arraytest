let array = [2, 3, 4, 8];

function inputValue() {
  const userInput = document.getElementById("input").valueAsNumber;
  array.push(userInput);

  document.getElementById("input").value = "";
  showArray();
  document.getElementById("result").innerHTML = array;
}

function deleteContent() {
  const content = Number(document.getElementById("deleteContent").value);
  const newListe = array.filter((element) => {
    return element !== content;
  });
  array = newListe;

  document.getElementById("deleteContent").value = "";
  showArray();
  document.getElementById("result").innerHTML = newListe;
}

/*function deleteContent() {
  const zahl = document.getElementById("deleteContentt").value;
  const inputValue = parseInt(zahl, 10);
  console.log(inputValue);

  const index = array.indexOf(inputValue);

  if (index !== -1) {
    array.splice(index, 1);
    console.log("Das Element" + inputValue + " wurde gelöscht");
  } else {
    console.log("Das Element " + inputValue + " wurde nicht gefunden");
  }

  console.log(array);
  document.getElementById("deleteContentt").value = "";
}*/

function deleteByPosition() {
  const position = document.getElementById("deleteId").value;
  if (position < array.length) {
    array.splice(position, 1);
    document.getElementById("result").innerHTML = array;
  } else {
    console.log("Die Position muss kleiner als " + array.length + " sein");
    document.getElementById("result").innerHTML =
      "Die Position muss kleiner als " + array.length + " sein.";
  }
  document.getElementById("deleteId").value = "";
  showArray();
}

function multiplyArray() {
  const multiplyArray = array.map((element) => {
    return element * 2;
  });

  array = multiplyArray;
  showArray();
  document.getElementById("result").innerHTML = multiplyArray;
}

function sumArray() {
  const sumArray = array.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
  });
  console.log(sumArray);
  document.getElementById("result").innerHTML = sumArray;
}

function showArray() {
  console.log(array);
  array.forEach((element) => {
    console.log(element);
  });
}

function reset() {
  window.location.reload();
}
