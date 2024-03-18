import './header.css'
import $ from 'jquery'
import {useState, useEffect} from 'react'

import LogoCB from '../images/logos/cb-logo-blue.png'
import LogoCBWhite from '../images/logos/cb-icon.png'
import menuOpened from '../images/openmenumobilerotate.png'
import menuClosed from '../images/openmenumobile.png'
import dayMode from '../images/daySide.png'
import nightMode from '../images/nightSite.png'
import brazilFlag from '../images/brazilflag.jpg'
import usaFlag from '../images/usaflag.webp'
import Portuguese from '../languages/portuguese'
import English from '../languages/english'
import Getlanguage from '../getLanguage/getlanguage'

export default function Header() {
    const c = (cl) => document.querySelector(cl)

    function sitePlace(e) {
        if( e.target.id === 'home' ) {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        } else if( e.target.id === 'aboutme' || e.target.id === 'sobre mim' ) {
            $('html, body').animate({
                scrollTop: 450
            }, 500)
        } else if( e.target.id === 'cert' || e.target.id === 'certificados' ) {
            $('html, body').animate({
                scrollTop: 700
            }, 500)
        } else if( e.target.id === 'projects' || e.target.id === 'projetos' ) {
            c('.projects-main').scrollIntoView({
                behavior: 'smooth'
            })
        } else if( e.target.id === 'contacts' || 'contatos' ) {
            c('.footer-main').scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    function openMobileMenu(e) {
        if( e.target.id === 'disable' ) {
            c('.menu-mobile').style.backgroundImage = 'url('+`${menuOpened}`+')'
            c('.menu-mobile ul').style.display = 'block'
            c('.menu-mobile ul').style.position = 'absolute'
            e.target.id = 'enable'
        } else {
            c('.menu-mobile').style.backgroundImage = 'url('+`${menuClosed}`+')'
            c('.menu-mobile ul').style.display = 'none'
            e.target.id = 'disable'
        }
    }

    
    /*DAY THEME*/
    function setDayTheme() {
        if( c('.dayTheme').id === 'disable' ) {
            c('.dayTheme').id = 'enable'
            c('.dayTheme').style.opacity = '100%'
            c('.darkTheme').id = 'disable'
            c('.darkTheme').style.opacity = '60%'

            document.body.style.backgroundColor = 'white'
            c('.box-header1 img').src = LogoCB
            c('.box-header2').style.color = 'rgb(0, 99, 165)'

            c('.welcome-main .about-me2').style.color = 'rgb(141, 141, 141)'
            c('.welcome-main .about-me').style.backgroundColor = 'rgb(21, 92, 184)'

            c('.section-cert').style.backgroundColor = 'rgb(rgb(3, 76, 172)'

            c('.projects-main').style.color = 'rgb(0, 83, 190)'
            //c('.projects-main .title-division').style.border = '2px solid rgb(0, 86, 199)'

            c('.footer-main').style.backgroundColor = 'rgb(0, 61, 173)'
            c('.section-cert').style.backgroundColor = 'rgb(3, 76, 172)'
            
        }

        localStorage.setItem('thememode', 'daytheme')
    }


    /*DARKTHEME*/
    function setDarkTheme() {
        if( c('.darkTheme').id === 'disable' ) {
            c('.darkTheme').id = 'enable'
            c('.darkTheme').style.opacity = '100%'
            c('.dayTheme').id = 'disable'
            c('.dayTheme').style.opacity = '60%'

            document.body.style.backgroundColor = 'black'
            c('.box-header1 img').src = LogoCBWhite
            c('.box-header2').style.color = 'white'

            c('.welcome-main .about-me2').style.color = 'white'
            c('.welcome-main .about-me').style.backgroundColor = 'rgb(0, 23, 65)'

            c('.projects-main').style.color = 'white'
            //c('.projects-main .title-division').style.border = '2px solid white'

            c('.footer-main').style.backgroundColor = 'rgb(0, 23, 65)'
            c('.section-cert').style.backgroundColor = 'rgb(0, 23, 65)'
        }

        localStorage.setItem('thememode', 'darktheme')
    }

    useEffect(() => {
        if( localStorage.getItem('thememode') === 'darktheme' ) {
            setDarkTheme()
        } else if( localStorage.getItem('thememode') === 'daytheme' ) {
            setDayTheme()
        }
    }, [])


    /*PORTUGUESE LANGUAGE*/
    function choosePortuguese() {
        if( c('.portugueseLanguage').id === 'disable' ) {
            c('.portugueseLanguage').id = 'enable'
            c('.englishLanguage').id = 'disable'
        }

        localStorage.setItem('language', 'portuguese')
    }

    /*ENGLISH LANGUAGE*/
    function chooseEnglish() {
        if( c('.englishLanguage').id === 'disable' ) {
            c('.englishLanguage').id = 'enable'
            c('.portugueseLanguage').id = 'disable'
        }

        localStorage.setItem('language', 'english')
    }

    //console.log( Getlanguage() )

    return (
        <div className="header-main">
            <div className='box-header1'><a href=''><img src={LogoCB}/></a></div>
            <div className='box-header2'>
                <div id='disable' className='menu-mobile' onClick={openMobileMenu}>
                    <ul style={{listStyleType: 'none'}}>
                    { Getlanguage() === null && (
                        Portuguese().header.map((item) => (
                            <li id={item.toLowerCase()} onClick={sitePlace}>{item}</li>
                        ) )
                    )}

                    { Getlanguage() === 'portuguese' && (
                        Portuguese().header.map((item) => (
                            <li id={item.toLowerCase()} onClick={sitePlace}>{item}</li>
                        ) )
                    )}

                    { Getlanguage() === 'english' && (
                        English().header.map((item) => (
                            <li id={item.toLowerCase()} onClick={sitePlace}>{item}</li>
                        ) )
                    )}
                    </ul>
                </div>
                <ul className='menu-desktop' style={{listStyleType: 'none'}}>
                    { Getlanguage() === null && (
                        Portuguese().header.map((item) => (
                            <li id={item.toLowerCase()} onClick={sitePlace}>{item}</li>
                        ) )
                    )}

                    { Getlanguage() === 'portuguese' && (
                        Portuguese().header.map((item) => (
                            <li id={item.toLowerCase()} onClick={sitePlace}>{item}</li>
                        ) )
                    )}

                    { Getlanguage() === 'english' && (
                        English().header.map((item) => (
                            <li id={item.toLowerCase()} onClick={sitePlace}>{item}</li>
                        ) )
                    )}

                </ul>
            </div>
            <div className='box-header3'>
                <div className='theme-modes'>
                    <img className='dayTheme' id='enable' onClick={setDayTheme} src={dayMode} style={{cursor: 'pointer'}}/>
                    <img className='darkTheme' id='disable' onClick={setDarkTheme} src={nightMode} style={{opacity: '60%', cursor: 'pointer'}}/>
                </div>
                <div className='choose-language'>
                    <a href=''><img className='portugueseLanguage' id='enable' onClick={choosePortuguese} src={brazilFlag} style={{cursor: 'pointer'}}/></a>
                    <a href=''><img className='englishLanguage' id='disable' onClick={chooseEnglish} src={usaFlag} style={{opacity: '60%', cursor: 'pointer'}}/></a>
                </div>
            </div>
        </div>
    )
}
