import React from 'react';
import { Link } from "react-router-dom";
import video from '../Assets/Js/Video';
import image from '../Assets/Js/Image';
import '../Assets/CSS/index.scss';
class Index extends React.Component{
render() {
  return (
    <div className="index">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <nav>
    <div className="logo">
      Kelompok 5
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars" />
    </label>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="#C1">Profile</a></li>
      <li><a href="#C2">Biodata</a></li>
      <li><Link to="Detail">Detail</Link></li>
      <li><Link to="Calculator">Calculator</Link></li>
      <li><a href="#C3">Member</a></li>
    </ul>
  </nav>
  <main>
    <header>
      <div className="wrapperhome">
      </div>
      <div className="welcome-text">
        <h1 id="C0">Kelompok 5 <span>TEFA</span></h1>
        <a href="#C1">Get Started</a>
      </div>
    </header>
    <section>
      <div className="container center">
        <div id="C1" className="card-video">
          <div className="imgBx">
            <video src={video.perkenalan} width="33%" poster={image.Thumbnail} controls />
          </div>
          <div className="contentBx">
            <div className="content">
              <h2>Video Profil</h2>
              <p>Perkenalan dari Setiap Anggota Kelompok 5 TEFA SMK Telkom Malang Spesialisasi Frontend </p>
              <br />
              <Link to="Detail">Read More</Link>
              <h5>ingin tahu lebih detail?
              </h5>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="box">
            <input defaultChecked="checked" id="box1" name="box" type="radio" /> 
            <label id="C2" htmlFor="box1">Anggota 1</label>
            <div className="content">
              <h1>Anggota 1</h1>
              <img src={image.Rasyid} alt="u" />
              <p>Nama  : Muhammad Rasyid Ridho</p>
              <p>TTL   : Sidoarjo, 15 Oktober 2005</p>
              <p>Asal  : Sidoarjo </p>
              <p>Hobi  : Membaca Buku</p> 
              <p>Email : rasyid.rdh05@gmail.com</p> 
            </div>
            <input id="box2" name="box" type="radio" /> 
            <label htmlFor="box2">Anggota 2</label>
            <div className="content">
              <h1>Anggota 2</h1>  
              <img src={image.Zidane} alt="u" />
              <p>Nama  : Muhammad Zidane Fajarianto</p>
              <p>TTL   : Malang, 15 Juli 2006</p>
              <p>Asal  : Malang </p>
              <p>Hobi  : Muay Thai</p>  
              <p>Email : muhammadzidanefaj@gmail.com </p> 
            </div>
            <input id="box3" name="box" type="radio" /> 
            <label htmlFor="box3">Anggota 3</label>
            <div className="content">
              <h1>Anggota 3</h1>
              <img src={image.Nabila} alt="u" />
              <p>Nama  : Nabila Farahana</p>
              <p>TTL   : Mataram, 28 Januari 2006 </p>
              <p>Asal  : Malang </p>
              <p>Hobi  : Mendengarkan Musik</p> 
              <p>Email : nabilafarahana01@gmail.com</p> 
            </div>
            <input id="box4" name="box" type="radio" /> 
            <label htmlFor="box4">Anggota 4</label>
            <div className="content">
              <h1>Anggota 4</h1>
              <img src={image.Novita} alt="u" />
              <p>Nama  : Novita Azka Maghfira</p>
              <p>TTL   : Magetan, 11 November 2005</p>
              <p>Asal  : Magetan</p>
              <p>Hobi  : Memasak</p>
              <p>Email : novitazkaa@gmail.com </p> 
            </div>
          </div>
        </div>
      </div></section>
    <section>
      <h2 id="C3">Our Member</h2>
      <div className="card-container">
        <figure className="card">
          <img src={image.Rasyid} alt="u" />
          <figcaption>
            <h2>Muhammad <br /> Rasyid Ridho</h2>
            <p>You can contact me at :</p><p>
            </p><div className="icons">
              <a href="https://www.linkedin.com/in/muhammad-rasyid-ridho-68a111235/"  ><i className="fab fa-linkedin" /></a>
              <a href="https://wa.me/6282143458812"  ><i className="fab fa-whatsapp" /></a>
              <a href="https://www.instagram.com/rasyidrdh05/"  ><i className="fab fa-instagram" /></a>
              <a href="https://github.com/rasyid15"  ><i className="fab fa-github" /></a>
            </div>
          </figcaption>
        </figure>
        <figure className="card">
          <img src={image.Zidane} alt="i" />
          <figcaption>
            <h2>Muhammad <br /> Zidane Fajarianto</h2>
            <p>You can contact me at :</p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/muhammad-zidane-fajarianto-317393245/"  ><i className="fab fa-linkedin" /></a>
              <a href="https://wa.me/6283144361731"><i className="fab fa-whatsapp" /></a>
              <a href="https://www.instagram.com/dann_moriarty/"><i className="fab fa-instagram" /></a>
              <a href="https://github.com/Dannaire" ><i className="fab fa-github" /></a>
            </div>
          </figcaption>
        </figure>
        <figure className="card">
          <img src={image.Nabila} alt="o" />
          <figcaption>
            <h2>Nabila <br /> Farahana</h2>
            <p>You can contact me at :</p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/nabila-farahana-352a0124b/" target="_blank"><i className="fab fa-linkedin" /></a>
              <a href="https://wa.me/6282141284908"  ><i className="fab fa-whatsapp" /></a>
              <a href="https://www.instagram.com/nabilafrhn_/"  ><i className="fab fa-instagram" /></a>
              <a href="https://github.com/nabilafrhn"  ><i className="fab fa-github" /></a>
            </div>
          </figcaption>
        </figure>
        <figure className="card">
          <img src={image.Novita} alt="p" />
          <figcaption>
            <h2>Novita <br /> Azka Maghfira</h2>
            <p>You can contact me at :</p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/novita-azka-063626254"  ><i className="fab fa-linkedin" /></a>
              <a href="https://wa.me/6281233180050"  ><i className="fab fa-whatsapp" /></a>
              <a href="http://instagram.com/novitazkaa"  ><i className="fab fa-instagram" /></a>
              <a href="https://github.com/nowwie"  ><i className="fab fa-github" /></a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="contact-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-content text-center">
              <h2>TEFA Kelompok 5</h2>
              <p>"Guru membuka pintu, tetapi Anda harus masuk sendiri" <br />Thanks For Our Mentor TEFA Ahmad Muzakki </p>
              <div className="hr" />
              <h6>SMK Telkom Malang</h6>
              <h6>+62 1234 5678<span>|</span>+62 8765 1234</h6>
              <div className="contact-social">
                <ul>
                  <li><a className="hover-target" href="https://github.com/Dannaire/Tugas-TEFA-Frontend-1"><i className="fab fa-github" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p>Copyright © 2022 Kelompok 5 All Rights Reserved.</p>
    </footer>
  </main>
</div>
  );
}
}


export default Index;
