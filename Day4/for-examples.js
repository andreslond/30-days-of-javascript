for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  // 10

// for-in example
const user = {
	name: "Pepito",
  age: 20,
  role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// "Pepito"
// 20
// "JavaScript developer"

//for-of example
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}

// "js"
// "html"
// "node"
// "php"

