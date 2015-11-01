(function(){
  
  if(!window.Pld){
    window.Pld = {};
  }
  
  var pld = window.Pld;
  
  /* O objeto "obj" possui as seguintes propriedades:
   *  => method; (String)
   *  => url; (String)
   *  => callback; (Function) (sempre verifique a propriedade "status")
   *  => body; (String ou Object)
   *  => headers; (Object)   
   */
   
  pld.XHR = function(obj){
    
	var xhr = new XMLHttpRequest();
	
	xhr.open(obj.method, obj.url, true);
	
	if(typeof obj.headers === 'object'){
	  
	  for(prop in obj.headers){
	    
        xhr.setRequestHeader(prop, obj.headers[prop]);
		
	  }
	  
	}
	
	xhr.addEventListener('readystatechange', function(){
	  
	  if(xhr.readyState == 4){
	    obj.callback(xhr);
	  }
	  
	}, false);
	
	var bodyRequest = (typeof obj.body  == 'string') ? obj.body : null;
	
	xhr.send(bodyRequest);
	
  }
  
}());






