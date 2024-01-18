import './projects.css'
import ImgStreaming from '../images/projetos/sitefilmes.png'
import ImgDesign from '../images/projetos/portfoliodesigner.png'
import ImgCompras from '../images/projetos/compras.png'
import ImgExchange from '../images/projetos/siteexchange.jpg'
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
            <div className='title-division'>

            </div>
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
        </div>
    )
}
