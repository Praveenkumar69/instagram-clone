exports.Create = function(req, res){
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var comments= post.comments;
 
	  if (!req.files)
				return res.status(400).send('No files were uploaded.');
 
		var file = req.files.image;
		var img_name=file.name;
 
	  	 if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('public/images/'+file.name, function(err) {
                             
	              if (err)
 
	                return res.status(500).send(err);
      					var sql = "INSERT INTO `posts`(`comments`,`image`) VALUES ('" + comments + "','" + img_name + "')";
 
    						var query = db.query(sql, function(err, result) {
    							//  res.redirect('profile/'+result.insertId);
                          result.insertId;
                          console.log(result.insertId);
                      });
                      console.log(sql);
                      
					   });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            // res.render('index.ejs',{message: message});
          }
   } else {
      res.render('Create');
   }
 
};