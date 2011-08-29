(function(){var e=Array.prototype.slice,b=Object.prototype.hasOwnProperty,d=function(i,g){for(var f in g){if(b.call(g,f)){i[f]=g[f]}}function h(){this.constructor=i}h.prototype=g.prototype;i.prototype=new h;i.__super__=g.prototype;return i},c=Array.prototype.indexOf||function(h){for(var g=0,f=this.length;g<f;g++){if(this[g]===h){return g}}return -1},a=function(f,g){return function(){return f.apply(g,arguments)}};this.Node=(function(){f.prototype.next=null;f.prototype.prev=null;function f(g){this.value=g}f.prototype.toString=function(){return this.value};return f})();this.LinkedList=(function(){f.prototype.first=null;f.prototype.length=0;function f(h){var j,i,g;if(h==null){h=false}if(h.length){for(i=0,g=h.length;i<g;i++){j=h[i];this.add(j)}}this}f.prototype.add=function(){var m,j,l,i,k,h,g;i=1<=arguments.length?e.call(arguments,0):[];g=[];for(k=0,h=i.length;k<h;k++){l=i[k];j=new Node(l);if(this.first!=null){m=this.first;while(m.next!=null){m=m.next}m.next=j}else{this.first=j}g.push(this.length++)}return g};f.prototype.remove=function(g){var k,h,j;if((-1<g&&g<this.length)){k=this.first;h=0;if(g===0){this.first=k.next}else{while(h++<g){j=k;k=k.next}j.next=k.next}this.length--;return k.value}};f.prototype.item=function(g){var j,h;if((-1<g&&g<this.length)){j=this.first;h=0;while(h++<g){j=j.next}return j.value}};return f})();this.U={};this.U.extend=function(j){var h,g,f,i;h=arguments[0],f=arguments[1];for(g in f){i=f[g];j[g]=i}return j};this.Lodis=(function(){function f(h,g){this.storage=h!=null?h:new f.prototype.Storage.prototype.LocalStorage;this.expiration_storage=g!=null?g:new f.prototype.Storage.prototype.SessionStorage;U.extend(this,new f.prototype.Command.prototype.Key);U.extend(this,new f.prototype.Command.prototype.String);U.extend(this,new f.prototype.Command.prototype.Hash);U.extend(this,new f.prototype.Command.prototype.List)}f.prototype.flushall=function(){this.storage.flush();return this.expiration_storage.flush()};f.prototype.dbsize=function(){return this.storage.size()};return f})();Lodis.prototype.Storage=(function(){function f(){}return f})();Lodis.prototype.Storage.prototype.LocalStorage=(function(){function f(){this.storage=window.localStorage}f.prototype.set=function(g,h){return this.storage.setItem(g,h)};f.prototype.get=function(g){return this.storage.getItem(g)};f.prototype.remove=function(g){return this.storage.removeItem(g)};f.prototype.flush=function(){return this.storage.clear()};f.prototype.index=function(g){return this.storage.key(g)};f.prototype.size=function(){return this.storage.length};return f})();Lodis.prototype.Storage.prototype.SessionStorage=(function(){function f(){this.storage=window.sessionStorage}f.prototype.set=function(g,h){return this.storage.setItem(g,h)};f.prototype.get=function(g){return this.storage.getItem(g)};f.prototype.remove=function(g){return this.storage.removeItem(g)};f.prototype.flush=function(){return this.storage.clear()};f.prototype.index=function(g){return this.storage.key(g)};f.prototype.size=function(){return this.storage.length};return f})();Lodis.prototype.Command=(function(){function f(){}return f})();Lodis.prototype.Command.prototype.Base=(function(){function f(){}f.prototype.__get_from_storage=function(g){return this.storage.get(g)};f.prototype.__set_in_storage=function(g,h){return this.storage.set(g,h)};f.prototype.__exists_in_storage=function(g){return this.__get_from_storage(g)!=null};return f})();Lodis.prototype.Command.prototype.Hash=(function(){d(f,Lodis.prototype.Command.prototype.Base);function f(){f.__super__.constructor.apply(this,arguments)}f.prototype.__get_from_hash=function(i,h){var l,g,k,j;if(h==null){h={with_keys:true,with_values:true,only:[]}}l=this.__get_hash(i);g=[];j=l.values;for(i in j){k=j[i];if(h.with_keys){g.push(i)}if(h.with_values||(h.only&&c.call(h.only,i)>=0)){g.push(k)}}return g};f.prototype.__get_hash=function(g){return new Lodis.prototype.DataType.prototype.Hash(this.__get_from_storage(g)).unpack()};f.prototype.__alter_integer_value_for_hash=function(i,h,k){var g,j;if(this.hexists(i,h)){j=parseInt(this.hget(i,h));if(typeof j==="number"){g=j+k;this.hset(i,h,g);return g}else{throw new Lodis.prototype.DataType.prototype.InvalidType}}else{this.hset(i,h,k);return k}};f.prototype.hexists=function(h,g){var i;if(this.__exists_in_storage(h)){i=this.__get_hash(h);return i.get(g)!=null}};f.prototype.hset=function(h,g,i){var j;j=this.__exists_in_storage(h)?this.__get_hash(h):new Lodis.prototype.DataType.prototype.Hash;j.add(g,i);j.pack();i=j.toString();this.__set_in_storage(h,i);return true};f.prototype.hget=function(h,g){var i;if(this.__exists_in_storage(h)){i=this.__get_hash(h);return i.get(g)}};f.prototype.hdel=function(h,g){var j,i;if(this.hexists(h,g)){j=this.__get_hash(h);j.remove(g);j.pack();i=j.toString();this.__set_in_storage(h,i);return true}else{return false}};f.prototype.hgetall=function(g){if(this.__exists_in_storage(g)){return this.__get_from_hash(g)}};f.prototype.hincrby=function(h,g,i){return this.__alter_integer_value_for_hash(h,g,i)};f.prototype.hkeys=function(g){if(this.exists(g)){return this.__get_from_hash(g,{with_keys:true,with_values:false})}};f.prototype.hlen=function(g){if(this.exists(g)){return this.hkeys(g).length}};f.prototype.hmget=function(){var g,h;g=arguments[0],h=2<=arguments.length?e.call(arguments,1):[];if(this.exists(g)){return this.__get_from_hash(g,{with_values:true,with_keys:false,only:h})}};f.prototype.hmset=function(){var k,j,h,g,l;k=arguments[0],h=2<=arguments.length?e.call(arguments,1):[];g=new Lodis.prototype.DataType.prototype.Hash;for(j in h){l=h[j];if(j%2){g.add(h[j-1],l)}}g.pack();l=g.toString();return this.__set_in_storage(k,l)};f.prototype.hsetnx=function(h,g,i){if(!this.hexists(h,g)){this.hset(h,g,i);return true}else{return false}};f.prototype.hvals=function(g){if(this.exists(g)){return this.__get_from_hash(g,{with_keys:false,with_values:true})}};return f})();Lodis.prototype.Command.prototype.Key=(function(){d(f,Lodis.prototype.Command.prototype.Base);function f(){this.__expire_key=a(this.__expire_key,this);f.__super__.constructor.apply(this,arguments)}f.prototype.__expire_key=function(h,i,g){i.remove(h);return g.remove(h)};f.prototype.__get_expiration=function(g){return JSON.parse(this.expiration_storage.get(g))};f.prototype.__set_expiration=function(g,h){return this.expiration_storage.set(g,JSON.stringify(h))};f.prototype.__del_expiration=function(g){return this.expiration_storage.remove(g)};f.prototype.del=function(){var h,i,j,g;i=1<=arguments.length?e.call(arguments,0):[];for(j=0,g=i.length;j<g;j++){h=i[j];this.storage.remove(h)}return true};f.prototype.expire=function(h,j){var g,k,i;g=j*1000;k=setTimeout(this.__expire_key,g,h,this.storage,this.expiration_storage);i={id:k,timeout:new Date().getTime()+g};this.__set_expiration(h,i);return true};f.prototype.expireat=function(h,g){var i;if((g<new Date().getTime())||!this.exists(h)){return false}i=(g-new Date().getTime())/1000;this.expire(h,i);return true};f.prototype.ttl=function(g){var h;if(this.exists(g)){if(h=this.__get_expiration(g)){return Math.floor((h.timeout-new Date().getTime())/1000)}else{return -1}}};f.prototype.keys=function(l){var j,h,g,k;j=[];for(h=0,k=this.dbsize();0<=k?h<k:h>k;0<=k?h++:h--){g=this.storage.index(h);if(g.match(l)){j.push(g)}}return j};f.prototype.persist=function(g){var h;if(this.exists(g)){if(h=this.__get_expiration(g)){clearTimeout(h.id);return this.__del_expiration(g)}}};f.prototype.rename=function(g,h){var i;i=this.get(g);this.del(g);return this.set(h,i)};f.prototype.renamenx=function(g,h){if(!this.exists(h)){return this.rename(g,h)}};return f})();Lodis.prototype.Command.prototype.List=(function(){d(f,Lodis.prototype.Command.prototype.Base);function f(){f.__super__.constructor.apply(this,arguments)}f.prototype.__get_list=function(g){return new Lodis.prototype.DataType.prototype.List(this.__get_from_storage(g)).unpack()};f.prototype.__save_list=function(g,i,j){var h;i.set(j);i.pack();h=i.toString();return this.__set_in_storage(g,h)};f.prototype.llen=function(g){var h;if(this.__exists_in_storage(g)){h=this.__get_list(g);return h.length()}};f.prototype.lindex=function(h,g){var i;if(this.__exists_in_storage(h)){i=this.__get_list(h);if(g<0){g=i.length()+g}return i.values[g]||false}};f.prototype.blpop=function(g){return this.lpop(g)};f.prototype.lpop=function(g){var i,h;if(this.__exists_in_storage(g)){i=this.__get_list(g);h=i.values.slice(1);i.set(h);i.pack();h=i.toString();this.__set_in_storage(g,h);return h}};f.prototype.lpushx=function(g,h){if(this.__exists_in_storage(g)){return this.lpush(g,h)}else{return false}};f.prototype.lrem=function(n,i,o){var j,k,g,p,m,h,l;if(this.__exists_in_storage(n)){g=Math.abs(i);k=this.__get_list(n);j=k.values;if(i<0){j=j.reverse()}p=[];for(h=0,l=j.length;h<l;h++){m=j[h];if(m===o&&g>0){g-=1}else{p.push(m)}}if(i<0){p=p.reverse()}k.set(p);k.pack();m=k.toString();return this.__set_in_storage(n,m)}};f.prototype.linsert=function(o,k,h,m){var l,j,p,g,n,i;if(this.__exists_in_storage(o)){k=(function(){switch(k.toUpperCase()){case"BEFORE":return -1;case"AFTER":return 1}})();j=this.__get_list(o);n=j.values;h=n.indexOf(h)+k;i=[n.slice(0,h),n.slice(h)],l=i[0],g=i[1];p=l.concat([m]);p=p.concat(g);j.set(p);j.pack();p=j.toString();return this.__set_in_storage(o,p)}};f.prototype.rpush=function(){var i,j,m,l,h,k,g;i=arguments[0],h=2<=arguments.length?e.call(arguments,1):[];m=this.__get_list(i);for(k=0,g=h.length;k<g;k++){l=h[k];m.add(l)}j=m.length();m.pack();l=m.toString();this.__set_in_storage(i,l);return j};f.prototype.lrange=function(i,k,h){var j,g;h+=1;j=this.__get_list(i);if(h<1){h=j.length()+h}g=j.values.slice(k,h);if(g.constructor===String){g=[g]}return g};f.prototype.lpush=function(){var m,i,l,k,h,j,g;i=arguments[0],h=2<=arguments.length?e.call(arguments,1):[];l=this.__get_list(i);m=l.values;for(j=0,g=h.length;j<g;j++){k=h[j];m.unshift(k)}this.__save_list(i,l,m);return l.length()};f.prototype.lset=function(h,g,j){var k,i;if(this.__exists_in_storage(h)){i=this.__get_list(h);k=i.values;if(g<0){g=k.length+g}k[g]=j;return this.__save_list(h,i,k)}};f.prototype.ltrim=function(i,l,h){var k,j,g;if(this.__exists_in_storage(i)){j=this.__get_list(i);k=j.values;if(h<0){h=k.length+h}g=k.slice(l,(h+1)||9000000000);return this.__save_list(i,j,g)}};f.prototype.brpop=function(g){return this.rpop(g)};f.prototype.rpop=function(g){var j,i,h;if(this.__exists_in_storage(g)){i=this.__get_list(g);j=i.values;h=j.pop();this.__save_list(g,i,j);return h}};f.prototype.brpoplpush=function(g,h){return this.rpoplpush(g,h)};f.prototype.rpoplpush=function(g,h){var i;if(this.__exists_in_storage(g)){i=this.rpop(g);this.lpush(h,i);return i}};f.prototype.rpushx=function(g,h){if(this.__exists_in_storage(g)){return this.rpush(g,h)}};return f})();Lodis.prototype.Command.prototype.String=(function(){d(f,Lodis.prototype.Command.prototype.Base);function f(){f.__super__.constructor.apply(this,arguments)}f.prototype.__alter_integer_value=function(g,i){var h;if(this.exists(g)){h=parseInt(this.get(g));if(typeof h==="number"){h=h+i;this.set(g,h);return h}else{throw new Lodis.prototype.DataType.prototype.InvalidType}}else{return this.set(g,i)}};f.prototype.append=function(i,j){var h,g;g=this.get(i)||"";h=g.toString()+j;this.set(i,h);return h.length};f.prototype.decr=function(g){return this.decrby(g,1)};f.prototype.incr=function(g){return this.incrby(g,1)};f.prototype.decrby=function(g,h){return this.__alter_integer_value(g,-h)};f.prototype.incrby=function(g,h){return this.__alter_integer_value(g,h)};f.prototype.set=function(h,i){var g;g=new Lodis.prototype.DataType.prototype.String;g.set(i);g.pack();this.__set_in_storage(h,g.toString());return true};f.prototype.exists=function(g){return this.__get_from_storage(g)!=null};f.prototype.get=function(g){if(this.exists(g)){return new Lodis.prototype.DataType.prototype.String(this.__get_from_storage(g)).toString()}else{return null}};f.prototype.setbit=function(g,i,h){};f.prototype.getbit=function(g){};f.prototype.getrange=function(i,j,g){var h;if(this.exists(i)){h=this.get(i);if(j<0){j=h.length+j}if(g<0){g=h.length+g}return h.substr(j,g+1)}};f.prototype.getset=function(h,i){var g;if(this.exists(h)){g=this.get(h);this.set(h,i);return g}};f.prototype.mget=function(){var i,j,g,k,h;j=1<=arguments.length?e.call(arguments,0):[];g=[];for(k=0,h=j.length;k<h;k++){i=j[k];g.push(this.get(i))}return g};f.prototype.mset=function(){var j,g,k,h;g=1<=arguments.length?e.call(arguments,0):[];h=[];for(j in g){k=g[j];if(j%2){h.push(this.set(g[j-1],k))}}return h};f.prototype.msetnx=function(){var j,h,g;g=1<=arguments.length?e.call(arguments,0):[];for(j in g){h=g[j];if(!(j%2)&&this.exists(h)){return}}return this.mset.apply(this,g)};f.prototype.setex=function(h,g,i){this.set(h,i);return this.expire(h,g)};f.prototype.setnx=function(g,h){if(!this.exists(g)){return this.set(g,h)}};f.prototype.setrange=function(k,m,l){var j,h,g;h=(function(){if(this.exists(k)){return this.get(k).substr(0,m)}else{g="";for(j=0;0<=m?j<m:j>m;0<=m?j++:j--){g+=" "}return g}}).call(this);return this.set(k,""+h+l)};f.prototype.strlen=function(g){if(this.exists(g)){return this.get(g).length}else{return 0}};return f})();Lodis.prototype.DataType=(function(){function f(){}f.prototype.find=function(h){var g,i;i=h[0],g=2<=h.length?e.call(h,1):[];return{0:Lodis.prototype.DataType.prototype.String,1:Lodis.prototype.DataType.prototype.Hash,2:Lodis.prototype.DataType.prototype.List}[i]};return f})();(Lodis.prototype.DataType.prototype.InvalidType=(function(){function f(){}return f})())<Error;Lodis.prototype.DataType.prototype.Base=(function(){function f(g){this.values=g;this.unpack()}f.prototype.toJSON=function(g){return JSON.stringify(g)};f.prototype.fromJSON=function(g){return JSON.parse(g)};f.prototype.toString=function(){return this.values};f.prototype.parse=function(g){return g};f.prototype.pack=function(){return this.values=""+(this.type.toString())+(this.packer(this.values))};f.prototype.packer=function(g){return g};f.prototype.check_valid_type=function(g){if(parseInt(g!==this.type)){throw new Lodis.prototype.DataType.prototype.InvalidType}};f.prototype.unpack=function(){var h,g,i,j;if((i=this.values)!=null?i.length:void 0){j=this.values,h=j[0],g=2<=j.length?e.call(j,1):[];this.check_valid_type(h);this.values=g.join("");return this}};return f})();Lodis.prototype.DataType.prototype.Hash=(function(){d(f,Lodis.prototype.DataType.prototype.Base);f.prototype.type=1;function f(g){this.values=g!=null?g:{}}f.prototype.packer=function(g){return this.toJSON(g)};f.prototype.unpack=function(){f.__super__.unpack.apply(this,arguments);this.set(this.fromJSON(this.values));return this};f.prototype.set=function(g){return this.values=g};f.prototype.add=function(g,h){return this.values[g]=h};f.prototype.remove=function(g){return delete this.values[g]};f.prototype.get=function(g){return this.values[g]};return f})();Lodis.prototype.DataType.prototype.List=(function(){d(f,Lodis.prototype.DataType.prototype.Base);f.prototype.type=2;function f(g){this.values=g!=null?g:[]}f.prototype.set=function(g){return this.values=g};f.prototype.length=function(){return this.values.length};f.prototype.add=function(g){return this.values.push(g)};f.prototype.packer=function(g){return this.toJSON(g)};f.prototype.unpack=function(){f.__super__.unpack.apply(this,arguments);if(typeof this.values==="string"){this.set(this.fromJSON(this.values))}return this};return f})();Lodis.prototype.DataType.prototype.String=(function(){d(f,Lodis.prototype.DataType.prototype.Base);function f(){f.__super__.constructor.apply(this,arguments)}f.prototype.type=0;f.prototype.set=function(g){return this.values=g};f.prototype.parse=function(){return this.toJSON(this.values)};return f})()}).call(this);