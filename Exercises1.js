let result = []

if ("0") {
  result.push("A");
}

if (0) {
  result.push("B");
}

if ("") {
  result.push("C");
}

if ([]) {
  result.push("D");
}

result.push("5" == 5);
result.push("5" === 5);

console.log(result.join(" "));
