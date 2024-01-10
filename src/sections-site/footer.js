import './footer.css'
import $ from 'jquery'
import Portuguese from '../languages/portuguese'
import English from '../languages/english'
import Getlanguage from '../getLanguage/getlanguage'

export default function Footer() {
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
            $('html, body').animate({
                scrollTop: 950
            }, 500)
        }
    }

    return (
        <div className='footer-main'>
            <div className='footer-container'>
                <div>
                    {Getlanguage() === null && (
                        Portuguese().footer.map((item) => (
                            <a id={item.toLowerCase()} onClick={sitePlace}>{item}</a>
                        ) )
                    )}

                    {Getlanguage() === 'portuguese'&& (
                        Portuguese().footer.map((item) => (
                            <a id={item.toLowerCase()} onClick={sitePlace}>{item}</a>
                        ) )
                    )}

                    {Getlanguage() === 'english' && (
                        English().footer.map((item) => (
                            <a id={item.toLowerCase()} onClick={sitePlace}>{item}</a>
                        ) )
                    )}
        
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/clebson-barbosa-7976a677/' target='_blanked'>LINKEDIN</a>
                    <a href='https://github.com/CleProgrammer' target='_blanked'>GITHUB</a>
                    <a>clebsondev@hotmail.com</a>
                    <a>INSTAGRAM</a>
                </div>
            </div>
        </div>
    )
}
