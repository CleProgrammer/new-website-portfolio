import './projects.css'
import ImgStreaming from '../images/projetos/sitefilmes.png'
import ImgDesign from '../images/projetos/portfoliodesigner.png'
import ImgCompras from '../images/projetos/compras.png'
import ImgExchange from '../images/projetos/siteexchange.jpg'
import ImgChat from '../images/projetos/talktochatgpt.jpg'
import ImgJogodaVelha from '../images/projetos/jogodavelha.png'
import ImgExtension from '../images/projetos/extensão.png'
import Portuguese from '../languages/portuguese'
import English from '../languages/english'
import Getlanguage from '../getLanguage/getlanguage'

export default function Projects() {
    return (
        <div className="projects-main" data-aos="fade-up" data-aos-duration="600">
            <div className='title-projects'>
                {Getlanguage() === null && (
                    Portuguese().projects[0]
                )}


                {Getlanguage() === 'portuguese' && (
                    Portuguese().projects[0]
                )}

                {Getlanguage() === 'english' && (
                    English().projects[0]
                )}
            </div>
            
            <div className='section-projects'>
                <div>
                    <a href='https://cleprogrammer.github.io/designer-portfolio/'target='_blanked'><img src={ImgDesign}/></a>
                    <h1>
                        {Getlanguage() === null && (
                                Portuguese().projects[1]
                        )}

                        {Getlanguage() === 'portuguese' && (
                                Portuguese().projects[1]
                        )}

                        {Getlanguage() === 'english' && (
                            English().projects[1]
                        )}
                    </h1>
                </div>
                <div>
                    <a href='https://cleprogrammer.github.io/conversor-de-moedas/' target='_blanked'><img src={ImgExchange}/></a>
                    <h1>
                        {Getlanguage() === null && (
                                Portuguese().projects[2]
                        )}

                        {Getlanguage() === 'portuguese' && (
                                Portuguese().projects[2]
                        )}

                        {Getlanguage() === 'english' && (
                            English().projects[2]
                        )}
                    </h1>
                </div>
                <div>
                    <a href='https://cleprogrammer.github.io/website-supermarket/' target='_blanked'><img src={ImgCompras}/></a>
                    <h1>
                        {Getlanguage() === null && (
                                Portuguese().projects[3]
                        )}

                        {Getlanguage() === 'portuguese' && (
                                Portuguese().projects[3]
                        )}

                        {Getlanguage() === 'english' && (
                            English().projects[3]
                        )}
                    </h1>
                </div>


                <div>
                    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7167885968757145603/' target='_blanked'><img src={ImgChat}/></a>
                    <h1>
                        {Getlanguage() === null && (
                                Portuguese().projects[4]
                        )}

                        {Getlanguage() === 'portuguese' && (
                                Portuguese().projects[4]
                        )}

                        {Getlanguage() === 'english' && (
                            English().projects[4]
                        )}
                    </h1>
                </div>


                <div>
                    <a href='https://cleprogrammer.github.io/jogo-da-velha/' target='_blanked'><img src={ImgJogodaVelha}/></a>
                    <h1>
                        {Getlanguage() === null && (
                                Portuguese().projects[5]
                        )}

                        {Getlanguage() === 'portuguese' && (
                                Portuguese().projects[5]
                        )}

                        {Getlanguage() === 'english' && (
                            English().projects[5]
                        )}
                    </h1>
                </div>


                <div>
                    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7158480504474763264/' target='_blanked'><img src={ImgExtension}/></a>
                    <h1>
                        {Getlanguage() === null && (
                                Portuguese().projects[6]
                        )}

                        {Getlanguage() === 'portuguese' && (
                                Portuguese().projects[6]
                        )}

                        {Getlanguage() === 'english' && (
                            English().projects[6]
                        )}
                    </h1>
                </div>
            </div>
        </div>
    )
}
