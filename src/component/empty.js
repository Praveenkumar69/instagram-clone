<Card style={{ width: '18rem' }}>
  <Card>
  <h1>Instagram</h1>
  <Card>
  <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <span>Phone number, username, or email</span> */}
    <Form.Control type="text" placeholder="Phone number, username, or email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Card>
  <Button variant="primary" type="submit">
    Log In
  </Button>
  </Card>
  <Card>
    <Card><hr></hr></Card>
    <Card>or</Card>
    <Card><hr></hr></Card>
  </Card>
</Form>
  </Card>
  </Card>
</Card>




import React from "react"
// import './App.css';
import {Button,Card,Main,Form} from "react-bootstrap"
import img1 from "./Image/02.png"

const MainFile=()=>{

  return(
    <>
    <main>
    <article className="article">

        <Card style={{ width: '18rem' }} className="div1">
  <Card.Body>
    <h1>Instagram</h1>
    <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <span>Phone number, username, or email</span> */}
    <Form.Control type="text" placeholder="Phone number, username, or email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </Card.Body>
  <hr />
  <Card>
  <h1>dk</h1>
</Card>
</Card>



<Card style={{ width: '18rem' }} className="div25">
  <Card.Img vardiant="top" src={img1} />
</Card>
</article>
    </main>
    
    </>
  );
}
export default MainFile;























<Card.Body>
    <h1 className="insta">Instagram</h1>
    <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <span>Phone number, username, or email</span> */}
    <Form.Control type="text" placeholder="Phone number, username, or email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </Card.Body>
  <hr />
  <Card>
  <p >Don't have an account? Sign up</p>
</Card>




// 0	17	17:37:45	INSERT INTO `instagram-clone`.`password_log` (`id`, `person_id`, `email`, `created_on`, `retried_on`, `retried_attempt`, `password`) VALUES ('1', '1', 'fs@yopmail.com', 'now()', 'now()', b'0', 'jkahfkjhsdfkjhsdkfjhsdkfhkashdfkashdfksjdhfashfkhsdkf')	1292: Incorrect datetime value: 'now()' for column 'created_on' at row 1	














exports.index = function(req, res){
  message = '';
 if(req.method == "POST"){
    var post  = req.body;
    var name= post.user_name;
    var pass= post.password;
    var fname= post.first_name;
    var lname= post.last_name;
    var mob= post.mob_no;

  if (!req.files)
      return res.status(400).send('No files were uploaded.');

  var file = req.files.uploaded_image;
  var img_name=file.name;

     if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                               
            file.mv('public/images/upload_images/'+file.name, function(err) {
                           
              if (err)

                return res.status(500).send(err);
              var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";

              var query = db.query(sql, function(err, result) {
                 res.redirect('profile/'+result.insertId);
              });
           });
        } else {
          message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
          res.render('index.ejs',{message: message});
        }
 } else {
    res.render('index');
 }

};