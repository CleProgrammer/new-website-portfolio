import './cert.css'
import CertReact from '../images/certificados/Certificado ReactJS.jpg'
import CertHTML from '../images/certificados/Certificado HTML5 e CSS3.jpg'
import CertJavaScript from '../images/certificados/Certificado Javascript.jpg'
import Certdatabase from '../images/certificados/Certificado Banco de Dados.jpg'
import CertgitHub from '../images/certificados/Certificado Git GitHub.jpg'
import CertTypeScript from '../images/certificados/Certificado Typescript.jpg'

export default function Cert() {
    return(
        <div className='section-cert'>
            <div className='section-cert-main'>
                <div>
                    <img src={CertReact}/>
                    ReactJS
                    <a href='https://drive.google.com/file/d/1GbQ0uLvn4rJG4gAei1yYGysfygSzcTJB/view' target='_blank'>VER</a>
                </div>
                <div>
                    <img src={CertHTML}/>
                    HTML e CSS
                    <a href='https://drive.google.com/file/d/14m_FkfR5A0ZgX3aQHMN-7D9BLlAjNHCj/view?usp=sharing' target='_blank'>VER</a>
                </div>
                <div>
                    <img src={CertJavaScript}/>
                    JavaScript
                    <a href='https://drive.google.com/file/d/1Cr7xx13SqiHwKBkNiCundf76qF3TZW1N/view?usp=sharing' target='_blank'>VER</a>
                </div>
                <div>
                    <img src={Certdatabase}/>
                    Banco de Dados
                    <a href='https://drive.google.com/file/d/1xJKaRYOWkMeg5W_7tkwbTy-68pW6Okcu/view?usp=sharing' target='_blank'>VER</a>
                </div>
                <div>
                    <img src={CertgitHub}/>
                    Git/GitHub
                    <a href='https://drive.google.com/file/d/14QPgGwKzPy_1tomtVf1zawvCU7yWizBp/view?usp=sharing' target='_blank'>VER</a>
                </div>
                <div>
                    <img src={CertTypeScript}/>
                    TypeScript
                    <a href='https://drive.google.com/file/d/1mqKXbdtQVr93vzb1vYslUyGpmBTZ6N_u/view?usp=sharing' target='_blank'>VER</a>
                </div>
            </div>
        </div>
    )
}
