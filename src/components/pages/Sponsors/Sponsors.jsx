/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './Sponsors.css';
import Footer from '../../Footer';
import SponsorCard from './SponsorCard';

function Sponsors(props) {
  return (
    <div className="wrapper">
      <div className="current-sponsors">
        <div className="sponsors-container">
          <img src="https://drive.google.com/uc?export=view&id=1-8RfOKm9BmIg-zICOjdV3RX69xz97r2V" />
          <div className="separator-1">
            <div className="line" />
            <h2>Presents</h2>
            <div className="line" />
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1-8RfOKm9BmIg-zICOjdV3RX69xz97r2V" />
          <div className="separator-1">
            <div className="line" />
            <h2>Powered By</h2>
            <div className="line" />
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1ftavQQIClarxTN6gfxFKipEt9Bh_JNxy" />
          <div className="separator-1">
            <div className="line" />
            <h2>Co-Powered By</h2>
            <div className="line" />
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1nLK6rWZGLfCfdb7Y2FMdR7lI7W6-FT0-" />
          <div className="separator-1">
            <div className="line" />
            <h2>Presents</h2>
            <div className="line" />
          </div>
        </div>
        <div className="cards-sponsor">
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1sW-Sn1Sf7p1b1Y7fuyzny6oBTcMYNA0i"
            name="Crypto Trading Partner"
            position="Giottus Technologies"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1sHKrIMVvbXJ4rABs62MTp4N4-TxGiNbo"
            name="Design partner"
            position="Huion"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1u2jXRFm5Nm3sGOxJmdIj-C9yPJxSXhj5"
            name="Book Reading Partner"
            position="Billionbooks"
          />
          <SponsorCard
            className="sponsor-card"
            img="https://drive.google.com/uc?export=view&id=1sW-Sn1Sf7p1b1Y7fuyzny6oBTcMYNA0i"
            name="Giottus"
            position="Giottus Technologies"
          />
        </div>

        <div className="separator-1">
          <div className="line" />
          <h2>Previous Sponsors</h2>
          <div className="line" />
        </div>
        <div className="previous-sponsors">
          <img
            src="https://drive.google.com/uc?export=view&id=12A29XV2fD4rGtifwJopcc2GFFL6WcUWl"
            alt=""
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1EOWn_3PXnOh1sEPe9TlRuqFCK7K-GsvF"
            alt=""
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1XIyjF9ylgxpiz9I9YatfjD0jrZN4UTcN"
            alt=""
          />
          <img
            src="https://drive.google.com/uc?export=view&id=16DGS49dzcLSIgB_0CDIacJoVVH8X_bNR"
            alt=""
          />
          <img
            src="https://drive.google.com/uc?export=view&id=16L6DxNPN3LLePjwuC6Kj_OJ1Jz-XhMNV"
            alt=""
          />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
          <img src="https://drive.google.com/uc?export=view&id=" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
