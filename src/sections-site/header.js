import './header.css'
import $ from 'jquery'
import LogoCB from '../images/logos/cb-logo-blue.png'
import menuOpened from '../images/openmenumobilerotate.png'
import menuClosed from '../images/openmenumobile.png'

export default function Header() {
    const c = (cl) => document.querySelector(cl)

    function sitePlace(e) {
        if( e.target.id === 'home' ) {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        } else if( e.target.id === 'aboutme' ) {
            $('html, body').animate({
                scrollTop: 230
            }, 500)
        } else if( e.target.id === 'cert' ) {
            $('html, body').animate({
                scrollTop: 550
            }, 500)
        } else if( e.target.id === 'projects' ) {
            $('html, body').animate({
                scrollTop: 800
            }, 500)
        } else if( e.target.id === 'contacts' ) {
            $('html, body').animate({
                scrollTop: 1000
            }, 500)
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

    return (
        <div className="header-main">
            <div className='box-header1'><a href=''><img src={LogoCB}/></a></div>
            <div className='box-header2'>
                <div id='disable' className='menu-mobile' onClick={openMobileMenu}>
                    <ul style={{listStyleType: 'none'}}>
                        <li id='home' onClick={sitePlace}>HOME</li>
                        <li id='aboutme' onClick={sitePlace}>SOBRE MIM</li>
                        <li id='cert' onClick={sitePlace}>CERTIFICADOS</li>
                        <li id='projects' onClick={sitePlace}>PROJETOS</li>
                        <li id='contacts' onClick={sitePlace}>CONTATOS</li>
                    </ul>
                </div>
                <ul className='menu-desktop' style={{listStyleType: 'none'}}>
                    <li id='home' onClick={sitePlace}>HOME</li>
                    <li id='aboutme' onClick={sitePlace}>SOBRE MIM</li>
                    <li id='cert' onClick={sitePlace}>CERTIFICADOS</li>
                    <li id='projects' onClick={sitePlace}>PROJETOS</li>
                    <li id='contacts' onClick={sitePlace}>CONTATOS</li>
                </ul>
            </div>
        </div>
    )
}