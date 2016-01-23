angular.module('starter.services', [])

.factory('$newsServices', ['$http','$q',function($http,$q) {
	var newServices = {
		getNewsList:function(params){
		  var deferred = $q.defer();
		  var script = document.createElement("script");   
      	  script.type = "text/javascript";
      	  script.src = "http://roll.news.sina.com.cn/interface/rollnews_ch_out_interface.php?col=89&spec=&type=&ch=&k=&asc=&r=0.05774713959544897&"+params;  
	      script.setAttribute('charset','gbk');
	      document.body.appendChild(script);
	      script.onload = function(){
	        deferred.resolve(jsonData);
	        // document.body.removeChild(script);
	      }
	      return deferred.promise;
		}
	};
	return newServices;
}]);