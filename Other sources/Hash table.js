// task : Implement a hash table from scratch to fully understand how it works underneath the hood


class HashTable{
	constructor(size){  // defining the constructor
		this.data = new Array(size)
	}
 
  _hash(key) {
  //random hash function to generate a hash for a given key
	let hash = 0;
	for (let i=0; i<key.length; i++){
		hash = (hash+ key.charCodeAt(i)*i)
		%this.data.length
	}
	return hash;
  }
  
  set(key,value){
  //setting the key velue pair  of the hash table
	let address = this._hash(key);
	if (!this.data[address]){
		this.data[address]=[] // if there is no collision then create a new empty array to store the key value pair
	}
	this.data[address].push([key,value])
	console.log(this.data)
  }

  //given any given key retrieving the value stored with that key
  get(key){
    let address = this._hash(key)
    const holdingBucket= this.data[address]
    if (holdingBucket){
      for (let i=0; i<holdingBucket.length ; i++){
        if (holdingBucket[i][0] === key){
          return holdingBucket[i][1]
        }
      }
    }
    return undefined
    }
}

const myHashTable = new HashTable(50); // initialzing with array size of 50
myHashTable.set("grapes",1000);
myHashTable.set("oranges",500);
myHashTable.set("watermelons ",75);
myHashTable.get("grapes");
