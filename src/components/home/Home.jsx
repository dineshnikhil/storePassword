import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import MsgCard from '../ui/MsgCard';
import { msgCardSliceActions } from '../../store/msgCardShow-slice';
// import Loading from '../ui/Loading';
// ======= importing the images =========
import image from '../../images/GDPR-cuate.svg'
import one from '../../images/one.svg';
import two from '../../images/two.svg';
import three from '../../images/three.svg';


function Home() {

  const dispatch = useDispatch();
  // const isShow = useSelector(state => state.msgCardShowSlice.isShow);

  // useEffect(() => {
  //   dispatch(msgCardSliceActions.showToggle());
  // }, []);

  return (
    <React.Fragment>
      {/* {isShow && <MsgCard>
        <h1>Store your passwrods 🔑 and secure your informations from data attacks.</h1>
      </MsgCard>} */}
    {/* ================== Home section =================  */}
    <div className={classes['home-section']}>
      <div className={classes.homeOneDiv}>
        <h1>Secure and remember all your passwords… with a storePass..</h1>
        <div>
          <Link to="/createAccount"><button className={classes.createBtn}>
            Create Account <FontAwesomeIcon style={{marginLeft: "20px"}} icon={faUser} />
          </button></Link>
          <h5 className={classes.note}>*If you already have an account please login from nav.</h5>
        </div>
      </div>
      <div className={classes.homeTwoDiv}>
        <img src={image} />
      </div>
    </div>
    {/* ================= middle Section ============ */}
    <div className={classes.middleSection}>
      <h1>some Heading here.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita accusantium modi atque recusandae quam odio dolor asperiores ex. Ipsam eaque nobis ducimus tenetur nisi? Necessitatibus quos veniam nam doloribus aperiam!</p>
    </div>
    {/*================ Features section ================= */}
    <div className={classes.aboutSection}>
      <h1>Why choose storePass.. for password management?</h1>
      <div className={classes.aboutDiv}>
        <div className={classes.aboutDivs}>
          <img src={one} />
          <h3>Trusted Security</h3>
          <p>Your private information is protected with end-to-end encryption before it ever leaves your device.</p>
        </div>
        <div className={classes.aboutDivs}>
        <img src={two} />
          <h3>Open Source Transparency</h3>
          <p>Bitwarden source code, features, and infrastructure security are vetted and improved by our global community.</p>
        </div>
        <div className={classes.aboutDivs}>
        <img src={three} />
          <h3>Global Access</h3>
          <p>Access Bitwarden from anywhere, with any platform, in 40 languages.</p>
        </div>
      </div>
    </div>
    {/* =============== FOOTER SECTION =================== */}
    {/* <div className={classes.footerSection }>
      made with 💟 by dineshNikhil
    </div> */}
    </React.Fragment>
  )
}

export default Home