function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listeners) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listeners);
  console.log(this.events);
};

Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listeners) {
      listeners();
    });
  }
};

let emitter = new Emitter();

emitter.on("Hello", function() {
  console.log("They say Hello");
});

emitter.emit("Hello");

console.log(emitter);
