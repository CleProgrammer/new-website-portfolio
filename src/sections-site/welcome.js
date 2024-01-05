import './welcome.css'
import Portuguese from '../languages/portuguese'
import English from '../languages/english'
import Getlanguage from '../getLanguage/getlanguage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Welcome() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='welcome-main' data-aos="fade-up" data-aos-duration="800">
            <div className='about-me'>
                {Getlanguage() === null && (
                        Portuguese().aboutMe[0]
                )}

                {Getlanguage() === 'portuguese' && (
                    Portuguese().aboutMe[0]
                )}

                {Getlanguage() === 'english' && (
                    English().aboutMe[0]
                )}
            </div>
            <div className='about-me2'>
                {Getlanguage() === null && (
                        Portuguese().aboutMe[1]
                )}

                {Getlanguage() === 'portuguese' && (
                        Portuguese().aboutMe[1]
                )}

                {Getlanguage() === 'english' && (
                    English().aboutMe[1]
                )}
            </div>
        </div>
    )
}