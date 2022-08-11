import '../styles/Main.css'
import {IoMdMail} from 'react-icons/io'

const Main = () => {
    return ( 
        <section className="global">
             <div className="Lura-name">
                <h1>Laura Smith</h1>
            </div>
            <div className="profession">
                <small>Frontend Developer</small>
                <small>Laurasmith.Website</small>
            </div>
            <div className="mail">
                <span><IoMdMail/></span><span> Email</span>
            </div>
            <div className="about">
                <h2>About</h2>
                <div className='para-about'>
                <p>
                    I'm a Frontend Developer with a particular interest
                    in making things simple and automating daily
                    task. I try to keep up security and best
                    pratices, and im always looking for new things to
                    learn.
                </p>
                </div>
                <div className='interest'>
                <h2>Interest</h2>
                </div>
               
                <div className='para-interest'>
                <p>
                    Foode expert. Music Scholar.Reader. Internet
                    fanatic. Bacon Buff. Entrepreneur. Travel geek. 
                    Pop culture ninja. Coffee fanatic.

                </p>
                </div>
            
            </div>
        </section>
       
     );
}
 
export default Main;