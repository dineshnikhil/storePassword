import React from 'react'
import classes from './WellcomePage.module.css'
import homeOne from '../../images/homeOne.svg'
import card1 from '../../images/card1.svg'
import card2 from '../../images/card2.svg'
import card3 from '../../images/card3.svg'

function WellcomePage() {
  return (
    <React.Fragment>
        <div className={classes.sectionOne}>
            <div className={classes.oneOne}>
                <h1>Now No need to Remember all your passwords Store at One place and access it any time</h1>
            </div>
            <div className={classes.oneTwo}>
                <img src={homeOne} alt="storing password in the secure cloude" />
            </div>
        </div>
        <div className={classes.sectionTwo}>
            <h1>99% of enterprise users reuse passwords across accounts</h1>
            <p>The study found that more than 99% of enterprise users reuse passwords, either across work accounts, or between work and personal accounts. Password reuse is widely prevalent due to the desire for convenience and speed when navigating various accounts. The report also discovered that on average, every single user password is shared across 2.7 accounts.</p>
            <p>What’s more, the average user has more than 8 passwords shared between accounts, with 7.5 passwords shared between work and personal accounts and 0.8 passwords shared between internal and SaaS accounts.</p>
            <p>“The rapid shift to remote work as a result of COVID-19 has simultaneously shifted the balance of control away from IT and towards employees,” said Abe Smith, cybersecurity veteran with decades of information security leadership roles in the Bay Area.</p>
            <p>“Even well-intentioned users won’t have identity best practices, such as multifactor authentication and avoiding password reuse, in mind when adopting new tools. Security teams must find ways to automate identification of password risks.”</p>
        </div>
        <div className={classes.sectionThree}>
            <div className={classes.threeCards}>
                <img src={card1} alt="do" />
                <h2>some thing</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem natus magnam.</p>
            </div>
            <div className={classes.threeCards}>
                <img src={card2} alt="do something" />
                <h2>some thing</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem natus magnam.</p>
            </div>
            <div className={classes.threeCards}>
                <img src={card3} alt="alter" />
                <h2>some thing</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem natus magnam.</p>
            </div>
        </div>
        <div className={classes.fotter}>
            <div className={classes.fotterOne}>
                <h1>storePass</h1>
                <button>Show Tech Stack</button>
            </div>
            <div className={classes.fotterTwo}>
                <ul>
                    <li>Home</li>
                    <li>case Study</li>
                    <li>features</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
  )
}

export default WellcomePage