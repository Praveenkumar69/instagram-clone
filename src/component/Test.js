import React from "react"
// import './App.css';
import {Button,Card,Main,Form} from "react-bootstrap"
import img1 from "./Image/02.png"

const Test=()=>{

  return(
    <>
    <main>
        <article className="T_article">


<Card style={{ width: '26rem' }} className="div25">
  <Card.Img vardiant="top" src={img1} />
</Card>

<Card className="f_div1"
// style={{ width: '18rem' }}
>
<Card className="f_div2">
<h1 className="insta">Instagram</h1>
<Card className="f_div3">
<Form className="form">
    <Card className="form_div">
      <Card className="form_div1">
        <Card className="form_input">
        <label className="label">
        {/* <span className="label_span1">Phone number, username, or email</span> */}
            <Form.Control className="input1" type="text" placeholder="Phone number, username, or email" aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off"
            autocorrect="off" maxlength="75" name="username" />
        </label>
        </Card>
      </Card>

      <Card className="form_card1">
          <Card className="form_card2">
          <label className="pass_label">
        {/* <span className="label_span1">Phone number, username, or email</span> */}
            <Form.Control className="pass_input2" placeholder="Password" aria-label="Password" aria-required="true" autocapitalize="off"
            autocorrect="off" maxlength="75" name="password" type="password"/>
        </label>
          </Card>
      </Card>
      <Card className="button_div1">
          <Button className="button_div2">
          Log In
              {/* <Card className="button_div3">
              Log In
              </Card> */}
          </Button>
      </Card>
      <div className="o_div">
        <div className="o_div1"></div>
        <div className="o_div2">OR</div>
        <div className="o_div3"></div>
      </div>

      <div className="facebook_div">
      <button type="button" className="facebook_div1">
        <span>=</span>
        <span>Log in with Facebook</span>
      </button>

      
      </div>
   </Card>


</Form>
</Card>
</Card>
  
</Card>

        </article>
    </main>    
    </>
  );
}
export default Test;