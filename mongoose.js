var mongoose = require('mongoose');
var lineReader = require('line-reader');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/db1',function(err){
	if(err){
		console.log('false');
	}else{
		console.log('seccess');
		var schema = new mongoose.Schema({
			id: String,
			email: String,
			username: String,
			password: String,
			salt: String,
			ip: String,
			email_suffix: String,
			source: String
		});
		var basic22 = mongoose.model('collection_name',schema);
		
		//读取csv
		lineReader.eachLine('test.csv',function(line,last){
			//获取参数
			var id = line.split(",")[0].replace(/"/g,'');;
			var email = line.split(",")[1].replace(/"/g,'');;
			var username = line.split(",")[2].replace(/"/g,'');
			var password = line.split(",")[3].replace(/"/g,'');
			var salt = line.split(",")[4].replace(/"/g,'');
			var ip = line.split(",")[5].replace(/"/g,'');
			var email_suffix = line.split(",")[6].replace(/"/g,'');
			var source = line.split(",")[7].replace(/"/g,'');
			//实例化对象
			var doc1 = new basic22({
				id: id,
				email: email,
				username: username,
				password: password,
				salt: salt,
				ip: ip,
				email_suffix: email_suffix,
				source: source,
			});
			//写入mongo
			doc1.save(function (err,doc){
				//console.log(err);
		})

		})
	}
});


