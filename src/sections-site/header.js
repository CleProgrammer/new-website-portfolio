import './header.css'
import $ from 'jquery'
import LogoCB from '../images/logos/cb-logo-blue.png'

export default function Header() {

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

    return (
        <div className="header-main">
            <div className='box-header1'><img src={LogoCB}/></div>
            <div className='box-header2'>
                <ul style={{listStyleType: 'none'}}>
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