/**
 * Created by victor on 21/01/2017.
 */


angular.module('factoryServices', []).factory('factory',factoryFnc);
factoryFnc.$inject = [];
function factoryFnc(){

    var factoryContainer = {
        userCreation: userCreation
    };

   /* function userCreation(login) {
        return
    }*/

    return factoryContainer;
};
