function Cup(temp, handle, liquid, hasLid) {
  this.temp = temp,
  this.handle = handle,
  this.liquid = liquid
  this.full = true,
  this.sweet = false,
  this.hasLid = hasLid
}

Cup.prototype.drink = function protoDrink() {
  this.full = false;
};

Cup.prototype.fillCup = function protoFillCup() {
  this.fill = true;
};

Cup.prototype.addSugar = function protoAddSugar() {
  this.sweet = true;
};

Cup.prototype.addIce = function protoAddIce() {
  this.temp = 'cold';
};

Cup.prototype.knockedOver = function protoKnockedOver() {
  if (this.full === false) {
    console.log('There is nothing in your cup to spill!');
  }else if (this.hasLid === true) {
    console.log('Thankfully you had a lid on your cup');
  }else {
    console.log('Oh no, you spilled your drink everywhere!');
  }
};



var hotCoco = new Cup('hot', true, 'hot coco', true);

hotCoco.knockedOver()

hotCoco.drink();

console.log(hotCoco);
