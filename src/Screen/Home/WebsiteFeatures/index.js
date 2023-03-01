import Grid from "@mui/material/Grid";
import img2 from '../../../Image/img2.png'
import img3 from '../../../Image/img3.png'
import img4 from '../../../Image/img4.png'
import img5 from '../../../Image/img5.png'
import img6 from '../../../Image/img6.png'
import img7 from '../../../Image/img7.png'
import "./index.css";

const WebsiteFeatures = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        <h3>Website Features For</h3> <br></br> Start-Up And Bussiness Plain
      </h1>
      <Grid container className="website_feature_main">
        <Grid item lg={3.5} className='wesbsite_feature_child'>
            <img src={img2} alt=''/>
            <p><b>Live Chat</b></p>
            <p style={{color:'white',textAlign:'justify',padding:'15px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz
            </p>
        </Grid>
        <Grid item lg={3.5} className='wesbsite_feature_child'>
            <img src={img3} alt=''/>
            <p><b>Responsive Design</b></p>
            <p style={{color:'white',textAlign:'justify',padding:'15px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz
            </p>
        </Grid>
        <Grid item lg={3.5} className='wesbsite_feature_child'>
            <img src={img4} alt=''/>
            <p><b>Payment GateWay Integeration</b></p>
            <p style={{color:'white',textAlign:'justify',padding:'15px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz
            </p>
        </Grid>


        <Grid item lg={3.5} className='wesbsite_feature_child'>
            <img src={img5} alt=''/>
            <p><b>Speed Light</b></p>
            <p style={{color:'white',textAlign:'justify',padding:'15px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz
            </p>
        </Grid>

        <Grid item lg={3.5} className='wesbsite_feature_child'>
            <img src={img6} alt=''/>
            <p><b>Socail Media Integeration</b></p>
            <p style={{color:'white',textAlign:'justify',padding:'15px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz
            </p>
        </Grid>

        <Grid item lg={3.5} className='wesbsite_feature_child'>
            <img src={img7} alt=''/>
            <p><b>24/7 Phone Support</b></p>
            <p style={{color:'white',textAlign:'justify',padding:'15px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumz
            </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default WebsiteFeatures;
