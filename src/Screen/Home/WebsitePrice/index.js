import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import img8 from '../../../Image/img8.png'
import img9 from '../../../Image/img9.png'
import img10 from '../../../Image/img10.png'
import img11 from '../../../Image/img11.png'
import img12 from '../../../Image/img12.png'
import img13 from '../../../Image/img13.png'

import "./index.css";

const WebsitePrice = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
    <h1
      style={{
        textAlign: "center",
        color: "white",
        paddingTop: "70px",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      <h3 style={{marginBottom:'-4%'}}>Website Development Price</h3> <br></br> Start-Up And Bussiness Plain
    </h1>
    <Grid container className="website_price_main">
      <Grid item lg={3.5} className='wesbsite_price_child'>
          <img src={img8} alt=''/>
          <p style={{fontSize:'19px'}}><b>Start-Up Plan</b></p>
          <p style={{fontSize:'19px',color:'rgb(0,163,255)'}}><b>@INR 4999/-</b></p>
          <p style={{color:'white',textAlign:'justify',paddingLeft:'45px',paddingRight:'45px'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz. s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many deskto
          </p>
          <Button  style={{textAlign:'end',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px',marginLeft:'11%'}}>Request A Quote</Button>

      </Grid>

      <Grid item lg={3.5} className='wesbsite_price_child'>
          <img src={img9} alt=''/>
          <p style={{fontSize:'19px'}}><b>Classic Bussiness Plan</b></p>
          <p style={{fontSize:'19px',color:'rgb(0,163,255)'}}><b>@INR 4999/-</b></p>
          <p style={{color:'white',textAlign:'justify',paddingLeft:'45px',paddingRight:'45px'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz. s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many deskto
          </p>
          <Button  style={{textAlign:'end',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px',marginLeft:'11%'}}>Request A Quote</Button>

      </Grid>

      <Grid item lg={3.5} className='wesbsite_price_child'>
          <img src={img10} alt=''/>
          <p style={{fontSize:'19px'}}><b>Premimum Bussiness Plan</b></p>
          <p style={{fontSize:'19px',color:'rgb(0,163,255)'}}><b>@INR 4999/-</b></p>
          <p style={{color:'white',textAlign:'justify',paddingLeft:'45px',paddingRight:'45px'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz. s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many deskto
          </p>
          <Button  style={{textAlign:'end',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px',marginLeft:'11%'}}>Request A Quote</Button>

      </Grid>

    </Grid>

{/* E-Commerce bussiness  */}

    <h1
      style={{
        textAlign: "center",
        color: "white",
        paddingTop: "70px",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      <h3 style={{marginBottom:'-4%'}}>Website Development Price</h3> <br></br>E-Commerce And Bussiness Plain
    </h1>
    <Grid container className="website_price_main">
      <Grid item lg={3.5} className='wesbsite_price_child'>
          <img src={img11} alt=''/>
          <p style={{fontSize:'19px'}}><b>Classic E-commerce Plan</b></p>
          <p style={{fontSize:'19px',color:'rgb(0,163,255)'}}><b>@INR 4999/-</b></p>
          <p style={{color:'white',textAlign:'justify',paddingLeft:'45px',paddingRight:'45px'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz. s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many deskto
          </p>
          <Button  style={{textAlign:'end',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px',marginLeft:'11%'}}>Request A Quote</Button>

      </Grid>

      <Grid item lg={3.5} className='wesbsite_price_child'>
          <img src={img12} alt=''/>
          <p style={{fontSize:'19px'}}><b>Premimum E-commerce Plan</b></p>
          <p style={{fontSize:'19px',color:'rgb(0,163,255)'}}><b>@INR 4999/-</b></p>
          <p style={{color:'white',textAlign:'justify',paddingLeft:'45px',paddingRight:'45px'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz. s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many deskto
          </p>
          <Button  style={{textAlign:'end',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px',marginLeft:'11%'}}>Request A Quote</Button>

      </Grid>

      <Grid item lg={3.5} className='wesbsite_price_child'>
          <img src={img13} alt=''/>
          <p style={{fontSize:'19px'}}><b>Multi-Vector E-commerce Plan</b></p>
          <p style={{fontSize:'19px',color:'rgb(0,163,255)'}}><b>@INR 4999/-</b></p>
          <p style={{color:'white',textAlign:'justify',paddingLeft:'45px',paddingRight:'45px'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz. s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many deskto
          </p>
          <Button  style={{textAlign:'end',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px',marginLeft:'11%'}}>Request A Quote</Button>

      </Grid>

    </Grid>
  </div>
  );
};

export default WebsitePrice;
