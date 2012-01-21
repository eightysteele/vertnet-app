String.prototype.format = function(i, safe, arg) {
  function format() {
      var str = this, 
          len = arguments.length+1;
      
      for (i=0; i < len; arg = arguments[i++]) {
          safe = typeof arg === 'object' ? JSON.stringify(arg) : arg;
          str = str.replace(RegExp('\\{'+(i-1)+'\\}', 'g'), safe);
      }
      return str;
  }
  format.native = String.prototype.format;
  return format;
}();

couchdb = {};

couchdb.Server = Class.extend(
    {
        init: function(config) {
            this.defaults = {
                headers: {"Accept":"application/json"},
                dataType: "json",
                contentType: "application/json",
                type: "GET",
                url: "/"
            };  
            
            this.requestConfig = _.extend({}, this.defaults, config);
        },
        
        request: function(path, callback) {
            var opts = _.clone(this.requestConfig);
            
            opts.url = '{0}{1}?callback=?'.format(opts.url, path);
            
            $.ajax(opts).then(
                function(response) {
                    callback(response);
                }
            );
        },
        
        allDbs: function(callback) {
            this.request('_all_dbs', callback);
        }
    }   
);

/**
 * config.url specifies the server url.
 */
couchdb.init = function(config) {
    couchdb.server = new couchdb.Server(config);  
};

couchdb.request = function(params) {
    return couchdb.server.request(params);
};

couchdb.allDbs = function(callback) {
    couchdb.server.allDbs(callback);
};



