module SpringBatch {

    export function SpringBatchController($scope, $http) {
        $http.get('/hawtio/proxy/localhost:8181/jobs/executions.json',{
            cache:false
        }).success(function(data){

            }).error(function(data){

            });

    }

}