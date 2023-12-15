import './header.css';
import assets from '../../assets';
import Brand from '../../components/brand/Brand';
import About from '../about/About';
import Features from '../features/Features';
import Possibility from '../possibility/Possibility';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Cta from  '../../components/cta/Cta';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <div className="bestowal__header section__padding" id="home">
      <div className="bestowal__header-content">
        <h1 className="gradient__text">Let&apos;s us know your project idea that you have and bring it to live</h1>
        <p>Never underestimate the power of the people you already know. Family, friends, coworkers and even acquaintances make a great foundation for your campaign community. Our guide will explain how to use your personal network to create a solid base for your crowdfunding audience. </p>

        <div className="bestowal__header-content__input">
          <Link to="/dashboard"><button type="button">Get Started</button></Link>
        </div>

        <div className="bestowal__header-content__people">
          <img src={assets.people} />
          <p>1,640 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="bestowal__header-image">
        <img src={assets.global1} />
      </div>
    </div>
  <Brand />
  <About />
  <Features />
  <Possibility />
  <Cta />
  <Blog />
  <Contact />
</>

);

export default Header;
