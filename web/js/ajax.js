function AJAXInteraction(url, callback, type) {

    var req = init();
    req.onreadystatechange = processRequest;
        
    function init() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    
    function processRequest () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                if (callback){
                    if(type=='XML'){
                        callback(req.responseXML);
                    }else{
                        callback(req.responseText);
                    }
                }             
            }
            else 
                alert("Problems during requirement");
        }
    }

    this.doGet = function() {
        req.open("GET",encodeURI(url), true);
        req.send(null);
    }
    
    this.doPost = function(body) {
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(body);
    }     
    
    this.doPostFiles = function(params) {
        req.open("POST", encodeURI(url), true);
        req.setRequestHeader("Content-Type", "multipart/form-data");
        req.setRequestHeader("Content-length", params.length);
        req.send(params);
    }    
}