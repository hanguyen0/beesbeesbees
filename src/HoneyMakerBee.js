var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

HoneyMakerBee.prototpye = Object.create(Bee.prototpye);
HoneyMakerBee.prototpye.constructor = HoneyMakerBee;
HoneyMakerBee.prototpye.makeHoney = function() {
  this.honeyPot += 1;
}
HoneyMakerBee.prototpye.giveHoney = function() {
  this.honeyPot -= 1;
}