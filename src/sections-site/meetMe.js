import LogoCb from '../images/logos/cb-icon-blue.png'
import LogoCbWhite from '../images/logos/cb-icon.png'

import './meetme.css'

export default function Meetme() {
    const c = (cl) => document.querySelector(cl)

    return (
        <div className="section-meet-me">
            <div className='section-meet-me-main'>
                <div className='introduce-myself'>
                    <div className='text1'>
                        Olá, eu sou Clebson, desenvolvedor front-end_
                    </div>
                    <div className='text2'>
                        {'<Sempre buscando evoluir mais a cada dia/>'}
                    </div>
                </div>
                <div className='introduce-section-cert'>
                    <img className='image-logo1' src={LogoCbWhite}/>
                    <img className='image-logo2' src={LogoCb}/>
                    <img className='image-logo3' src={LogoCbWhite}/>
                    <img className='image-logo4' src={LogoCb}/>
                </div>
            </div>
            
        </div>
    )
}