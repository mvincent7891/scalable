export class Bidash {
  constructor(originalHash) {
    this.hash = {};
    this.set = this.set.bind(this);
    this.delete = this.delete.bind(this);
    if (originalHash) {
      Object.keys(originalHash).forEach(key => {
        this.set(key, originalHash[key]);
      });
    }
  }

  set(key, val) {
    this.hash[key] = val;
    this.hash[val] = key;
  }

  delete(key) {
    let val = this.hash[key];
    this.hash[key] = undefined;
    this.hash[val] = undefined;
  }
}
