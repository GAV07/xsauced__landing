import * as React from "react"
import "../styles/main.scss"
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import Conduct from '../components/Conduct'

// markup
const About = () => {
  return (
    <main>
        <Header />
        <title>About Page</title>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2EC4B6" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,128C672,139,768,181,864,165.3C960,149,1056,75,1152,69.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <section className="about">
            <div className="story">
                <h1 className="story__title">Our Story</h1>
                <p>We know that shoes can play a large role in how you're perceived socially. Unfortunately, not all of us can afford sneakers that match our personality or ambitions. At Xsauced, we believe that everyone should have the opportunity to look good and feel confident. <br/> <br/>
                    This is personal for us. My brother and I loved sneakers but could never afford them. We always wondered what it would be like to have a massive collection of sneakers at our disposal. We realized that the only thing stopping us or anyone else was a platform that could connect sneakerheads with the shoes they want and love.
                    <br/> <br/>
                    From this ambition, Xsauced was born.
                    </p>
            </div>
            <FAQ />
            <Conduct />
        </section>
    </main>
    
  )
}

export default About
