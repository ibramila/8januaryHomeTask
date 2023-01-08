import React from 'react'
import "./../assets/scss/_footer.scss";
import facebook from "./../assets/images/facebook.svg";
import twitter from "./../assets/images/twitter.svg";
import instagram from "./../assets/images/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_top">
            <ul>
              <h5>Menu</h5>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <ul>
              <h5>Service</h5>
              <li>planning</li>
              <li>management</li>
              <li>strategy</li>
              <li>Market</li>
            </ul>
            <ul className='medias'>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={instagram} alt="instagram " />
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer_bottom">
            <span>Copyright © 2022 Quizbaj. All Rights Reserved.</span>
            <div className='right_side'>
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer