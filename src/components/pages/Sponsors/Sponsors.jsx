/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './Sponsors.css';
import Footer from '../../Footer';
import SponsorCard from './SponsorCard';
import PrevSponsorCard from './PrevSponsorCard';

function Sponsors(props) {
  return (
    <div className="wrapper">
      <div className="current-sponsors">
        <div className="sponsors-container">
          {/* <img src="https://drive.google.com/uc?export=view&id=1-8RfOKm9BmIg-zICOjdV3RX69xz97r2V" />
          <div className="separator-1">
            <div className="line_1" />
            <h2>Presents</h2>
            <div className="line_2" />
          </div> */}

          <a href="https://picsart.com/create" target="_blank" rel="noreferrer">
            <img src="https://drive.google.com/uc?export=view&id=1fsc_Fq1gE-eGUuDfPCbApWUxqs3Wqy6U" />
          </a>
          <div className="separator-1">
            <div className="line_1" />
            <h2>Presents</h2>
            <div className="line_2" />
          </div>
          <img src="https://drive.google.com/uc?export=view&id=128UU4QrdniNQj2LCVkf-MomRRR1udwkU" />
          <div className="separator-1">
            <div className="line_1" />
            <h2>Co-Presented By</h2>
            <div className="line_2" />
          </div>
          <a href="https://xp-pen.co.in/" target="_blank" rel="noreferrer">
            <img src={process.env.REACT_APP_AWS_S3_URI + "/XPpenco-title.png"} />
          </a>
          <div className="separator-1">
            <div className="line_1" />
            <h2>Powered By</h2>
            <div className="line_2" />
          </div>
          <a href="https://www.lapcare.com/" target="_blank" rel="noreferrer">
            <img src="https://drive.google.com/uc?export=view&id=1ftavQQIClarxTN6gfxFKipEt9Bh_JNxy" />
          </a>
          <div className="separator-1">
            <div className="line_1" />
            <h2>Co-Powered By</h2>
            <div className="line_2" />
          </div>
          <a href="https://www.tickertape.in/" target="_blank" rel="noreferrer">
            <img src="https://drive.google.com/uc?export=view&id=1nLK6rWZGLfCfdb7Y2FMdR7lI7W6-FT0-" />
          </a>
          <div className="separator-1">
            <div className="line_1" />
            <h2>Co-Powered By</h2>
            <div className="line_2" />
          </div>
          <a href="https://indiafilmproject.co/" target="_blank" rel="noreferrer">
            <img src="https://drive.google.com/uc?export=view&id=1fqzXH6KtY_kM8KrSTYAin0zXOhnZis0x" />
          </a>

          {/* <div className="separator-1">
            <div className="line_1" />
            <h2>Presents</h2>
            <div className="line_2" />
          </div> */}
        </div>
        <div className="cards-sponsor">
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1u2jXRFm5Nm3sGOxJmdIj-C9yPJxSXhj5"
            name="Design partner"
            position="Huion"
            websiteLink="https://www.huion.com/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1hCKPGMn4BeDqc8kmtVWy6j_ToPdRFAjp"
            name="Audio Electronics Partner"
            position="Urbanista"
            websiteLink="https://www.urbanista.com/gl/"
          />
          <SponsorCard
            className="sponsor-card"
            img={process.env.REACT_APP_AWS_S3_URI + "/ims.png"}
            name="MBA Prep Partner"
            position="IMS"
            websiteLink="https://www.imsindia.com/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1mH6JcC1poom7Yi7NaJLBqwuGTr3P265u"
            name="Dating Partner"
            position="NyuCrush"
            websiteLink="https://www.nyucrush.com/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1sW-Sn1Sf7p1b1Y7fuyzny6oBTcMYNA0i"
            name="Crypto Trading Partner"
            position="Giottus Technologies"
            websiteLink="https://giottus.com/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1g5MXjiel7FwzJUTaGGhbLQtc7f--2XKi"
            name="Learning Partner"
            position="Geeks For Geeks"
            websiteLink="https://www.geeksforgeeks.org/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=11shE6eN5q8k_a3lC-CknFSyTETHX5Q0z"
            name="Book Reading Partner"
            position="Billionbooks"
            websiteLink="https://thebillionbooks.store/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1Osvu9_SgRHSEC_zSw2Vm0Ruetug7e6eb"
            name="Merch Partner"
            position="Festee"
            websiteLink="https://www.instagram.com/festee_official/?hl=en"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1g24NVNEBcteGSJTCjQxU2q4rQW37ouWX"
            name="National Media Partner"
            position="Amar Ujala"
            websiteLink="https://www.amarujala.com/"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=18_qjpzNdXMukOYIPS8jv0G96pIhAxlax"
            name="Media Partner"
            position="India Education"
            websiteLink="https://www.indiaeducation.net/"
          />
        </div>
      </div>
      <div className="sponsors_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Sponsors;
