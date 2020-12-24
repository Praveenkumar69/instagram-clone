import React,{useState} from "react"
import {Redirect,useHistory } from 'react-router-dom'
import {Form,Image} from "react-bootstrap"
import img2 from "./Image/03.png"
import img3 from "./Image/04.png"
import img4 from "./Image/05.jpg"
import axios from "axios"

const MainFile=()=>{

  // const [Login, setLogin] = useState({});
  // const fromSubmit = (e) =>{
  //   console.log(Login)

  //   e.preventDefault();
  // }

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setloginStatus] = useState("")
  const history = useHistory();

  const pageLogin=(e)=> {
    axios.post("http://localhost:3001/login",{
      email: email,
      password :password,
    }).then((resp) => {
      if(resp.data.massage){
        setloginStatus(resp.data.massage);
        console.log(resp.data.massage);
      }else{
        console.log("successfully login");
        localStorage.setItem('login',JSON.stringify(resp.data));
        history.push("/dashboard");
      
      }
     
    })
  e.preventDefault();

  }
  var auth = JSON.parse(localStorage.getItem('login'));

  return(

    <>
    {
      auth ? <Redirect to="/dashboard"></Redirect>:null    

    }
    <main>
        <article className="Main_article">
        <div className="main_image_div">
          <div className="main_image_div1">
          <Image vardiant="top" src={img4} />
          </div>
        </div>
        <div className="main_div1">
          <div className="main_div_s1">
              <h1 className="insta_id">Instagram Clone</h1>
              <div className="main_div_s2">
                  {/*-----form and form input 1 start ---------*/}
                <Form className="main_form_s1" onSubmit={pageLogin} >
                   <div className="main_form_s2">
                     <div className="main_form_s3">
                        <div className="form_input_f1">
                      <label className="label">
                        {/* <span className="label_span1">Phone number, username</span> */}
                        <Form.Control className="main_input1" type="text" placeholder="Phone number, username, or email" aria-label="Phone number, username, or email" aria-required="true" autoCapitalize="off"
                         maxlength="75" name="email"  
                        onChange={(e) =>{
                          setemail(e.target.value)
                        }}
                        />
                      </label>
                        </div>
                    {/*----- form input 2 start ---------*/}
                    <div className="main_form_d1" >
                       <div className="main_form_d2">
                         <label className="label">
                         <Form.Control className="main_input1" placeholder="Password" id="password" aria-label="Password" aria-required="true" autoCapitalize="off"
                    autocorrect="off" maxlength="75" name="password"  type="password"
                      onChange={(e)=>{
                        setpassword(e.target.value)
                      }}
                    />
                         </label>
                       </div>
                    </div>
                    {/*----- login button ---------*/}
                      <div className="main_button_div">
                        {/* <Button className="main_button_div1" type="submit" name="submit">
                          Log In
                        </Button> */}
                        <button className="main_button_div1 login_btn" type="submit" name="submit">Log In</button>
                      </div>
                    {/*----- OR tag ---------*/}

                      <div className="Or_div">
                        <div className="Or_div1"></div>
                        <div className="Or_div2">OR</div>
                        <div className="Or_div3"></div>
                    </div>
                    {/*----- Facebook button ---------*/}

                    <div className="facebook_link">
                      <button type="button" className="facebook_button1">
                        <span><i class="fab fa-facebook-square"></i> </span>
                        <span>Log in with Facebook</span>
                      </button>
                    </div>

                    { loginStatus ? 
                      <div className="userErrer">
                        <p>{loginStatus}</p>
                      </div> :
                    ''
                     }
                    <a href="" className="forgot_pass">Forgot password?</a>
                     </div>
                   </div>
                </Form>
              </div>
          </div>
            {/*----- signUp link ---------*/}
          <div className="signUp_div">
            <div className="signUp_div1">
               <p className="signUp_p">Don't have an account?
               <a href="#" ><span> Sign up</span> </a> </p>
            </div>
          </div>
            {/*----- get the app image ---------*/}
            <div className="get_app_div">
              <p className="get_app_p">
                Get the app.
              </p>
              <div className="get_app_img_div">
          
                 <a href className="get_app_link1">
                 <Image src={img2} className="get_app_img1"/>
                 </a>
                 <a href className="get_app_link2">
                 <Image src={img3} className="get_app_img2"/>
                 </a>
              </div>
            </div>
        </div>
        </article>
    </main>    
    </>
  );
}
export default MainFile;