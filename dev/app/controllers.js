(function(){


  //
    var app = angular.module('App')    

    app.controller('IndexController',[IndexController]);
    function IndexController(){
        var  vm = this;
        vm.title = 'Teste'

        console.log('oi');
        console.log('oi')
    }
    
})();