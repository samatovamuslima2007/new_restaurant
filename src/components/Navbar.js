import React from 'react';
import logoimg from './img/LOGO.png'
import issiqtaom from './img/Mask Group (1).png'

function Navbar() {
    return(
        <>
            <div className="fon">
                <div className="Navfon d-flex pt-4">
                    <div>
                        <img src={logoimg} width={70} height={60}/>
                    </div>
                    <ul className="d-flex list mt-3">
                        <li className="text-light"><a>ГЛАВНАЯ</a></li>
                        <li className="text-light"><a>МЕНЮ</a></li>
                        <li className="text-light"><a>O HAC</a></li>
                        <li className="text-light"><a>БРОНЬ</a></li>
                    </ul>
                    <ul className="d-flex">
                        <li className="text-secondary p-3 border-end shop "><i class="fa-solid fa-cart-shopping"></i></li>
                        <li className="text-light px-4"><i class="fa-solid fa-phone-volume"></i> +999-888-76-54 <br/><p className="navp">Свяжитесь c нами для <br/> бронирования</p></li>
                        <li><button className="btn1 text-light">3AKA3 СТОЛИКА</button></li>
                    </ul>
                    {/* <div className="katalog">
                        <a href="#"><i class=" fa-solid fa-bars"></i></a>
                    </div> */}
                </div>
                <div className="hometext">
                    <h2 className="titleh2">Добро пожаловать в</h2>
                    <h1 className="titleh1">Наш ресторан</h1>
                    <div className="Button1">
                        <p className="textp1">---- ДОМ ЛУЧШЕЙ ЕДЫ</p>
                    </div>
                    <div className="Button1">
                        <button className="btn1">VIEW MENU</button>
                    </div>
                </div>

                <div className="divcard container row d-flex flex-row flex-wrap">
                    <div className="card1 bg-light col-3 text-center">
                        <img src={issiqtaom}/>
                        <h6 className="titleh6">Магическая <span className="textcolor">Атмосфера</span></h6>
                        <p className="textp2">B нашем заведении царит <br/> магическая атмосфера <br/>
                        наполненная вкусными <br/> ароматами</p>
                    </div>
                    <div className="card1 bg-light col-3 text-center">
                        <img src={issiqtaom}/>
                        <h6 className="titleh6">Лучшее качество <span className="textcolor">Еды</span> </h6>
                        <p className="textp2">Качество нашей <br/> Еды - отменное!</p>
                    </div>
                    <div className="card1 bg-light col-3 text-center">
                        <img src={issiqtaom}/>
                        <h6 className="titleh6">Недорогая <span className="textcolor">Eдa</span></h6>
                        <p className="textp2">Стоимость нашей Еды <br/> зависит только от ee <br/>
                         количества. Качество <br/> всегда на высоте!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar