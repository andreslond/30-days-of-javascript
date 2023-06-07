/*
Builder pattern
This pattern allow us to build complex objects easily as step by step process.
It is usefull when the objects had a big quantity of attributes.

The final idea is using the same constructor you can create a complex object or a simple one.

*/

class ProductBuilder {
  constructor() {
    this.name = '';
    this.price = 0;
    this.description = '';
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  build() {
    return {
      name: this.name,
      price: this.price,
      description: this.description,
    };
  }
}

const product = new ProductBuilder()
  .setName('Laptop')
  .setPrice(1000)
  .setDescription('Con esta laptop nunca paras de aprender')
  .build();

console.log(product);
// {
// name: 'Laptop',
// price: 1000,
// description: 'Con esta laptop nunca paras de aprender'
// }

//Example using form builder
class FormBuilder {
  constructor() {
    this.elements = [];
  }

  addInput(type, name, value) {
    this.elements.push({
      type: 'input',
      name: name,
      value: value,
    });
    return this;
  }

  addButton(text) {
    this.elements.push({
      type: 'button',
      text: text,
    });
    return this;
  }

  build() {
    let form = '';
    this.elements.forEach((element) => {
      if (element.type === 'input') {
        form += `${element.type}" name="${element.name}" value="${element.value}">`;
      } else if (element.type === 'button') {
        form += `${element.text}`;
      }
    });
    form += '';
    return form;
  }
}

const form = new FormBuilder()
  .addInput('text', 'username', '')
  .addInput('password', 'password', '')
  .addButton('Submit')
  .build();

console.log(form);

