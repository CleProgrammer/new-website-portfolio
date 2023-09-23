import './welcome.css'
import Portuguese from '../languages/portuguese'
import English from '../languages/english'
import Getlanguage from '../getLanguage/getlanguage'


export default function Welcome() {
    return (
        <div className='welcome-main'>
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