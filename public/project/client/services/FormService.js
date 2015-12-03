(function(){
    'use strict';
    angular
        .module("ProjectApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {

    var api = {
        createFormForUser: createFormForUser,
        findAllFormsForUser: findAllFormsForUser,
        deleteFormById: deleteFormById,
        updateFormById: updateFormById,
        getFormById : getFormById
    };
        return api;

        function uniqueIdForm() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4();
        }

        function createFormForUser(userId, form) {
            var deferred = $q.defer();
            $http.post("/api/project/user/" + userId + "/form", form)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }

        function findAllFormsForUser(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + userId + "/form")
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;

        }

        function getFormById(formId) {
            var deferred = $q.defer();
            $http.get("/api/project/form/" + formId)
                .success(function(form){
                    deferred.resolve(form);
                });

            return deferred.promise;

        }

        function deleteFormById(formId) {
            var deferred = $q.defer();
            $http.delete("/api/project/form/"+ formId)
                .success(function(forms){
                    deferred.resolve(forms);
                });
            return deferred.promise;

        }

        function updateFormById(formId, newForm) {
            var deferred = $q.defer();
            $http.put("/api/project/form/" + formId, newForm)
                .success(function(form){
                    console.log("Update successful!!!");
                    deferred.resolve(form);
                });

            return deferred.promise;

        }
    }
})();