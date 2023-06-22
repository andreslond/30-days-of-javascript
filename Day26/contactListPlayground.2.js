//Implmenetation when collisions are possibles.
export class ContactList {
    constructor(size) {
      // Tu código aquí 👈
      this.buckets = new Array(size);
      this.numBuckets = this.buckets.length
    }
  
    hash(name) {
      let total = 0;
      for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
      }
      console.log(total % this.numBuckets);
      return total % this.numBuckets;
    }
  
    insert(name, phone) {
      // Tu código aquí 👈
      let index = this.hash(name)
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      this.buckets[index].push([name, phone])
    }
  
    get(name) {
      // Tu código aquí 👈
      let index = this.hash(name);
      if (!this.buckets[index]) {
        return null
      }
  
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === name) {
          return this.buckets[index][i][1]
        }
      }
    }
  
    retrieveAll() {
      // Tu código aquí 👈
      let allValues = []
      for (let i = 0; i < this.numBuckets; i++) {
        if (this.buckets[i]) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            allValues.push(this.buckets[i][j])
          }
        }
      }
  
      return allValues
    }
  
    delete(name) {
      // Tu código aquí 👈
      let index = this.hash(name)
      console.log(index);
      if (!this.buckets[index]) {
        return null
      }
      if (this.buckets[index]) {
        this.buckets[index] = []
      }
    }
  }