import './footer.css'
import $ from 'jquery'

export default function Footer() {
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
        }
    }

    return (
        <div className='footer-main'>
            <div className='footer-container'>
                <div>
                    <a id='home' onClick={sitePlace}>HOME</a>
                    <a id='aboutme' onClick={sitePlace}>SOBRE MIM</a>
                    <a id='cert' onClick={sitePlace}>CERTIFICADOS</a>
                    <a id='projects' onClick={sitePlace}>PROJETOS</a>
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
