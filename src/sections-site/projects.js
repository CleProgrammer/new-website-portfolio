import './projects.css'
import ImgStreaming from '../images/projetos/sitefilmes.png'
import ImgOldSite from '../images/projetos/siteportfólio.png'
import ImgCompras from '../images/projetos/compras.png'

export default function Projects() {
    return (
        <div className="projects-main">
            <div className='title-projects'>
                P R O J E T O S
            </div>
            <div className='title-division'>

            </div>
            <div>
                <a href='https://cleprogrammer.github.io/movies-website/'target='_blanked'><img src={ImgStreaming}/></a>
                <h1>Site de Streaming</h1>
            </div>
            <div>
                <a href='https://cleprogrammer.github.io/my-portfolio/' target='_blanked'><img src={ImgOldSite}/></a>
                <h1>Antigo Site de Portfólio</h1>
            </div>
            <div>
                <a href='https://cleprogrammer.github.io/website-supermarket/' target='_blanked'><img src={ImgCompras}/></a>
                <h1>Site de Compras</h1>
            </div>
        </div>
    )
}
