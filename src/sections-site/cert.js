import './cert.css'
import CertReact from '../images/certificados/Certificado ReactJS.jpg'
import CertHTML from '../images/certificados/Certificado HTML5 e CSS3.jpg'
import CertJavaScript from '../images/certificados/Certificado Javascript.jpg'
import Certdatabase from '../images/certificados/Certificado Banco de Dados.jpg'
import CertgitHub from '../images/certificados/Certificado Git GitHub.jpg'
import CertTypeScript from '../images/certificados/Certificado Typescript.jpg'
import Portuguese from '../languages/portuguese'
import English from '../languages/english'
import Getlanguage from '../getLanguage/getlanguage'

export default function Cert() {
    return(
        <div className='section-cert'>
            <div className='section-cert-main'>
                <div>
                    <img src={CertReact}/>
                    {Getlanguage() === 'portuguese' && (
                    Portuguese().certificates[0][1]
                    )}

                    {Getlanguage() === 'english' && (
                        English().certificates[0][1]
                    )}
                    <a href='https://drive.google.com/file/d/1GbQ0uLvn4rJG4gAei1yYGysfygSzcTJB/view' target='_blank'>
                        {Getlanguage() === 'portuguese' && (
                        Portuguese().certificates[0][0]
                        )}

                        {Getlanguage() === 'english' && (
                            English().certificates[0][0]
                        )}
                    </a>
                </div>
                <div>
                    <img src={CertHTML}/>
                    {Getlanguage() === 'portuguese' && (
                    Portuguese().certificates[1][1]
                    )}

                    {Getlanguage() === 'english' && (
                        English().certificates[1][1]
                    )}
                    <a href='https://drive.google.com/file/d/14m_FkfR5A0ZgX3aQHMN-7D9BLlAjNHCj/view?usp=sharing' target='_blank'>
                        {Getlanguage() === 'portuguese' && (
                        Portuguese().certificates[1][0]
                        )}

                        {Getlanguage() === 'english' && (
                            English().certificates[1][0]
                        )}
                    </a>
                </div>
                <div>
                    <img src={CertJavaScript}/>
                    {Getlanguage() === 'portuguese' && (
                    Portuguese().certificates[2][1]
                    )}

                    {Getlanguage() === 'english' && (
                        English().certificates[2][1]
                    )}
                    <a href='https://drive.google.com/file/d/1Cr7xx13SqiHwKBkNiCundf76qF3TZW1N/view?usp=sharing' target='_blank'>
                        {Getlanguage() === 'portuguese' && (
                        Portuguese().certificates[2][0]
                        )}

                        {Getlanguage() === 'english' && (
                            English().certificates[2][0]
                        )}
                    </a>
                </div>
                <div>
                    <img src={Certdatabase}/>
                    {Getlanguage() === 'portuguese' && (
                    Portuguese().certificates[3][1]
                    )}

                    {Getlanguage() === 'english' && (
                        English().certificates[3][1]
                    )}
                    <a href='https://drive.google.com/file/d/1xJKaRYOWkMeg5W_7tkwbTy-68pW6Okcu/view?usp=sharing' target='_blank'>
                        {Getlanguage() === 'portuguese' && (
                        Portuguese().certificates[3][0]
                        )}

                        {Getlanguage() === 'english' && (
                            English().certificates[3][0]
                        )}
                    </a>
                </div>
                <div>
                    <img src={CertgitHub}/>
                    {Getlanguage() === 'portuguese' && (
                    Portuguese().certificates[4][1]
                    )}

                    {Getlanguage() === 'english' && (
                        English().certificates[4][1]
                    )}
                    <a href='https://drive.google.com/file/d/14QPgGwKzPy_1tomtVf1zawvCU7yWizBp/view?usp=sharing' target='_blank'>
                        {Getlanguage() === 'portuguese' && (
                        Portuguese().certificates[4][0]
                        )}

                        {Getlanguage() === 'english' && (
                            English().certificates[4][0]
                        )}
                    </a>
                </div>
                <div>
                    <img src={CertTypeScript}/>
                    {Getlanguage() === 'portuguese' && (
                    Portuguese().certificates[5][1]
                    )}

                    {Getlanguage() === 'english' && (
                        English().certificates[5][1]
                    )}
                    <a href='https://drive.google.com/file/d/1mqKXbdtQVr93vzb1vYslUyGpmBTZ6N_u/view?usp=sharing' target='_blank'>
                        {Getlanguage() === 'portuguese' && (
                        Portuguese().certificates[5][0]
                        )}

                        {Getlanguage() === 'english' && (
                            English().certificates[5][0]
                        )}
                    </a>
                </div>
            </div>
        </div>
    )
}
