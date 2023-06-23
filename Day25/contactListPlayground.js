//Impementationwhen hastable avoids collisions
export class ContactList {
    constructor(size) {
      this.buckets = new Array(size);
      this.numBuckets = this.buckets.length;
    }
  
    hash(name) {
      let total = 0;
      for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
      }
      return total % this.numBuckets;
    }
  
    insert(name, phone) {
      let index = this.hash(name);
  
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
  
      this.buckets[index].push([name, phone]);
    }
  
    get(name) {
      let index = this.hash(name);
  
      if (!this.buckets[index]) {
        return null;
      }
      return this.buckets[index][0][1];
    }
  
    retrieveAll() {
      let allValues = [];
      for (let i = 0; i < this.numBuckets; i++) {
        if (this.buckets[i]) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            allValues.push(this.buckets[i][j]);
          }
        }
      }
      return allValues;
    }
  
    delete(name) {
      let index = this.hash(name);
  
      if (!this.buckets[index]) {
        return null;
      }
      this.buckets[index] = [];
    }
  }
  