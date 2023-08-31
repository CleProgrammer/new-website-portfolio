import { useState, useEffect } from 'react'
import CertReact from '../images/certificados/Certificado ReactJS.jpg'
import CertHTML from '../images/certificados/Certificado HTML5 e CSS3.jpg'
import CertJavaScript from '../images/certificados/Certificado Javascript.jpg'
import Certdatabase from '../images/certificados/Certificado Banco de Dados.jpg'
import CertgitHub from '../images/certificados/Certificado Git GitHub.jpg'
import CertTypeScript from '../images/certificados/Certificado Typescript.jpg'
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
                    <img src={CertReact}/>
                    <img src={CertHTML}/>
                    <img src={CertJavaScript}/>
                    <img src={Certdatabase}/>
                    <img src={CertgitHub}/>
                    <img src={CertTypeScript}/>
                </div>
            </div>
            
        </div>
    )
}