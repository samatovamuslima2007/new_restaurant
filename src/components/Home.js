import React from 'react';
import teaimg from './img/233] 1.jpg';
import tortimg from './img/430 1.jpg';
import pinkimg from './img/design box.jpg';
import restoranimg from './img/255 1.jpg';
import pizzaimg from './img/pizza-4968645_1920 (1) 1.jpg';
import hamburgerimg from './img/hamburger-494706_1920 1 (1).jpg';
import gamburgerimg from './img/abstract-1238247_1920 1.jpg';
import odamimg from './img/beard-1845166_1920 1.jpg';
import coocking from './img/cook-196932_1920 1.jpg';
import pizza from './img/pizza-366111_1280 1.jpg';
import image4 from './img/image 4.jpg';


class Home extends React.Component {
    render() { 
        return ( 
            <>
                <div className="home1 container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h1 className="titleh11">Наша <span>История</span></h1>
                            <p className="text-center textp1 mt-5">Как и y любого другого самобытного места,
                                 y нас есть своя, особая история. Идея ресторана пришла
                                  основателям неожиданно. Bo время прогулки по лесу создатель 
                                  нашего ресторана застрял в сотнях километров от ближайшего 
                                  населенного пункта. Вдали от цивилизации и связи им пришлось 
                                  навремя обустровать cebe  нехитрый быт, добывать и готовить 
                                  cebe еду.</p>
                            <ul className="ulli1 mt-5">
                              <li className="text-center"><h1 className="textcolor">93</h1>напитки</li>
                              <li className="text-center"><h1 className="textcolor">206</h1>Еда</li>
                              <li className="text-center"><h1 className="textcolor">71</h1>закуски</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 images1">
                            <div>
                                <div className="image jpg3">
                                    <img src={pinkimg} width={200} height={250}/>
                                </div>
                                <div className="image jpg2">
                                    <img src={tortimg} width={150} height={250}/>
                                </div>
                                <div className="image jpg4">
                                    <img src={restoranimg} width={150} height={200}/>
                                </div>
                                <div className="image jpg1">
                                    <img src={teaimg} width={150} height={200}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page1">
                    <div className="box1 row text-center">
                        <div className=" col-sm-12 col-md-12 col-lg-6">
                            <h1 className="texth11">Отпразднуйте в одном из самых лучших ресторанов.</h1>
                            <b className="text-light">Только в этом месяце бизнес-ланч от 250 ₽</b>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 pt-5">
                            <button className="btn1 text-light">3AKA3 СТОЛИКА</button>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="titleh12 py-5">Наши<span> Блюда</span></h1>
                    <div className="d-flex page2 row">
                        <div className="pizzabox col-lg-5 col-md-6 col-12">
                            <img src={pizzaimg}/>
                        </div>
                        <div className="hamburger col-lg-2 col-md-6 col-12">
                            <div className="DANAR py-2 d-flex">
                                <img src={hamburgerimg} width={180} height={180}/>
                                <div className="miniGamburger d-lg-none text-center"><b>Гамбургер мини <br/> 220 ₽</b></div>
                            </div>
                            <div className="DANAR py-2 d-flex">
                                <img src={hamburgerimg} width={180} height={180}/>
                                <div className="miniGamburger d-lg-none text-center"><b>Гамбургер мини <br/> 220 ₽</b></div>
                            </div>
                            <div className="DANAR py-2 d-flex">
                                <img src={hamburgerimg} width={180} height={180}/>
                                <div className="miniGamburger d-lg-none text-center"><b>Гамбургер мини <br/> 220 ₽</b></div>
                            </div>
                        </div>
                        <div className="list1 col-xl-4">
                            <ul>
                                <li className="li1">Гамбургер мини --------------- 220 ₽</li>
                                <li className="li2">Гамбургер мини --------------- 220 ₽</li>
                                <li className="li2">Гамбургер мини --------------- 220 ₽</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page3">
                    <h1 className='titleh12 text-light'>Наше меню</h1>
                    <div className="cardss d-flex row pt-5">
                        <div className="bg-light card11 col-12 col-md-6 col-lg-3">
                            <div className="images">
                                <img className="img11" src={gamburgerimg}/>
                                <div className="sonlar">420</div>
                            </div>
                            <h4 className="titleh41 py-3">Гамбургер макси</h4>
                            <p className="textp11">Максимально толстый <br/> слой мяса</p>
                            <div className="Button">
                                <button className="btn11">3AKA3ATb</button>
                            </div>
                        </div>
                        <div className="bg-light card11 col-12 col-md-6 col-lg-3">
                            <div className="images">
                                <img className="img11" src={gamburgerimg}/>
                                <div className="sonlar">420</div>
                            </div>
                            <h4 className="titleh41 py-3">Гамбургер макси</h4>
                            <p className="textp11">Максимально толстый <br/> слой мяса</p>
                            <div className="Button">
                                <button className="btn11">3AKA3ATb</button>
                            </div>
                        </div>
                        <div className="bg-light card11 col-12 col-md-6 col-lg-3">
                            <div className="images">
                                <img className="img11" src={gamburgerimg}/>
                                <div className="sonlar">420</div>
                            </div>
                            <h4 className="titleh41 py-3">Гамбургер макси</h4>
                            <p className="textp11">Максимально толстый <br/> слой мяса</p>
                            <div className="Button">
                                <button className="btn11">3AKA3ATb</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="biography py-5 container">
                    <p className="textp12">Я надолго запомню мой День рождения, проведённый в этом 
                    ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде 
                    фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам
                     также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <div className="d-flex imagebox1">
                        <img className="img111" src={odamimg}/>
                    </div>
                    <h5 className="text-center">Посетитель</h5>
                    <p className="text-center">Николай</p>
                </div>
                <h1 className="titleh12 container py-5">Галерея<span> Блюд</span></h1>
                <div className="container flexbox">
                    <div className="itembox grid1"></div>
                    <div className="itembox grid2"></div>
                    <div className="itembox grid3"></div>
                    <div className="itembox grid4"></div>
                    <div className="itembox grid5"></div>
                    <div className="itembox grid6"></div>
                </div>
                <h1 className="titleh12 container py-5">Наши<span> Повара</span></h1>
                <div class="container">
                    <div class="row povr d-md-flex-none">
                        <div class="col-12 col-md-6 col-lg-4 col-xl-4 my-2">
                        <img src={coocking}/>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 col-xl-4 my-2">
                        <img src={pizza}/>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 col-xl-4 my-2">
                        <img src={image4}/>
                        </div>
                    </div>
                </div>
                <div className="page66"></div>
            </>
         );
    }
}
 
export default Home;