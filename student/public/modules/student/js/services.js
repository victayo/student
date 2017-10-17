angular.module('student.service', [])
        .factory('studentService', ['API_ENDPOINT', '$http', function (API_ENDPOINT, $http) {
                return {
                    getStudent: function (id) {
                        var url = API_ENDPOINT;
                        if (id) {
                            url = url + "/" + id;
                        }
                        return $http.get(url)
                                .then(function (response) {
                                    return response.data;
                                });
                    },
                    saveStudent: function (student) {
                        return $http.post(API_ENDPOINT, student)
                                .then(function (response) {
                                    return response.data;
                                });
                    },
                    removeStudent: function (id) {
                        return $http.delete(API_ENDPOINT+"/"+id)
                                .then(function(response){
                                    return response.data;
                        });
                    },
                    removeMultiple: function(ids){
                        return $http.post(API_ENDPOINT+"/delete", ids)
                                .then(function(response){
                                    return response.data;
                        })
                    }
                };
            }])
        .service('popupService', ['$window', function ($window) {
                this.showPopup = function (message) {
                    return $window.confirm(message);
                };
            }])
        .value('API_ENDPOINT', '/api/student');


