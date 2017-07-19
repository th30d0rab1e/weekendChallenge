console.log('JS sourced');

// First param link to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []); // Leave array empty for now

myApp.controller('Controller', function(){
  var vm = this;

  //populate array from button - with string values
  vm.pictureArray = [];
  console.log(vm.pictureArray.length);

  var pic = {
    description: 'I hate balsamic vinegar',
    imageUrl: 'images/balsamic.jpg',
    likes: 0
  }; // end temp event
  vm.pictureArray.push( pic);

  var pic = {
    description: 'My car',
    imageUrl: 'images/camaro.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  pic = {
    description: 'Scott and I on a camel',
    imageUrl: '/images/camel.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);
  pic = {
    description: 'trip to France',
    imageUrl: '/images/eiffel.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);
  pic = {
    description: 'my familry',
    imageUrl: '/images/family.jpg'
  }
  vm.pictureArray.push( pic);

  pic = {
    description: 'friends trip to Mt.Rushmoore',
    imageUrl: '/images/friends.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  pic={
    description: 'hecro',
    imageUrl: '/images/hecro.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  pic={
    description: 'my nephew',
    imageUrl: '/images/nephew.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  pic={
    description: 'Vex Robotics Team',
    imageUrl: '/images/robot.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  pic={
    description: 'me on a tank',
    imageUrl: '/images/tank.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  pic={
    description: 'shaved my name on my friend',
    imageUrl: '/images/tedShaved.jpg',
    likes: 0
  }
  vm.pictureArray.push( pic);

  vm.like = function(eventIndex){
    vm.pictureArray[ eventIndex ].likes++;
  }
});
