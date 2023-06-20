export class MyArray {
    constructor() {
      this.data = {};
      this.length = 0;
    }
  
    map(func) {
      console.log('map');
      let newArr = new MyArray();
      for (let prop in this.data) {
        newArr.push(func(this.data[prop]));
      }
      return newArr;
    }
  
    filter(func) {
      console.log('filter');
      let newArr = new MyArray();
      for (let prop in this.data) {
        if (func(this.data[prop]))
          newArr.push(this.data[prop]);
      }
      return newArr;
    }
  
    push(item) {
      console.log('push');
      this.data[this.length] = item;
      this.length++;
      console.log('length:', this.length);
    }
  
    pop() {
      console.log('pop');
      this.length--;
      let deleted = this.data[this.length];
      console.log(deleted);
      delete this.data[this.length];
      return deleted;
    }
  
    join(character = ",") {
      console.log('join');
      let joinedData = '';
      for (let prop in this.data) {
        joinedData = `${joinedData}${this.data[prop]}${character}`;
      }
      return joinedData.substring(0, joinedData.length - 1);
    }
  
    shift() {
      console.log('shift');
      const first = this.data[0];
      this.length--;
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length];
      return first;
    }
  
    unshift(item) {
      console.log('unshift');
      if (item !== undefined && item !== null && item !== '') {
        let dataCopy = structuredClone(this.data);
        for (let i = 1; i <= this.length; i++) {
          this.data[i] = dataCopy[i - 1];
        }
        this.data[0] = item;
        return ++this.length;
      }
    }
  }
  