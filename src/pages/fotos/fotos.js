import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import FooterFotos from '../../components/footerfotos/footer'

function Fotos(){
  return (
    <>
    <Header />
    <div className="foto">
      <img className="img-fotos" src='https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/05/03/2067028637-i2316.jpeg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://www.guiadasemana.com.br/contentFiles/system/pictures/2016/1/151869/original/mad.jpg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://ovicio.com.br/wp-content/uploads/madmax_ovicio.jpeg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://i.uai.com.br/_rY1cVE7-fFVvCAucTUDMNcyHIQ=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2022/06/17/287978/charlize-theron-como-furiosa-em-mad-max-estrada-da-furia_1_50017.jpg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://www.numerama.com/wp-content/uploads/2019/02/454455-jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://s2-autoesporte.glbimg.com/Z58C924F99VzxmICzMdK531jXK4=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/3/F/SXszrKSgqBLZAxVArtWg/2015-05-11-pacificador.png'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://static3.srcdn.com/wordpress/wp-content/uploads/2020/09/Mad-Max-Fury-Road-Guitar-Guy-Coma-Doof-Warrior.jpg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/05/screenshot-2024-05-22-at-10-27-38-pm.jpg'/>
    </div>

    <div className="foto">
      <img className="img-fotos" src='https://mmc.tirto.id/image/otf/640x0/2019/09/02/mad-max-1_ratio-16x9.jpg'/>
    </div>
    <FooterFotos />
    </>
  )
}

export default Fotos;