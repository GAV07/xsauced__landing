import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { MdExpandMore } from 'react-icons/md'
import {withStyles, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    root: {
        background: "black",
        color: "white"
    }
})

const data = [
    {
        "type": "general",
        "question":"What is Xsauced?",
        "answer": "Xsauced is a community-owned ecosystem of sneaker lovers. The aim is to create a more accessible and sustainable  sneaker culture built on sharing."
    },
    {
        "type": "general",
        "question":"How do I join?",
        "answer": "Xsauced is invite-only. We accept applications on our website or you can skip the process if you get a cosign from a current member (www.xsauced.com)."
    },
    {
        "type": "general",
        "question":"How does it work?",
        "answer": "We allow members to either make money from renting their shoes out or save money by renting instead of paying resale. All kicks are cleaned and sterilized between rentals. We also offer pickup and deliver in metro areas."
    },
    {
        "type": "suppliers",
        "question":"What happens if my shoes get scuffed?",
        "answer": "We have a 3-layer insurance policy. All renters must provide a deposit, we have our own in-house insurance and we also have 3rd party insurance if we need to replace the listed value of your shoe. So you covered in any circumstance."
    },
    {
        "type": "suppliers",
        "question":"What happens if someone runs off with them?",
        "answer": "We will replace the value of your shoe in line with the depreciation schedule, so if someone runs of with your shoe in the first rental, you will get your money back up to the listed value. If it’s after 5 rentals, it will obviously be less because you’ve made money, you feel me. (BTW, you will face a lifetime ban and criminal charges if you even attempt to steal from our members)."
    },
    {
        "type": "suppliers",
        "question":"What’s the average rental price?",
        "answer": "Most shoes rent for $30 - $50 per weekend, but you can do a few things to make it cheaper (see discounts section)."
    },
    {
        "type": "suppliers",
        "question":"How and when will I get paid?",
        "answer": "You get paid 25% when we pick the shoes up, the remaining 75% is paid on the backend."
    },
    {
        "type": "renters",
        "question":"Where are the services offered?",
        "answer": "Currently we offer sneakers for rent, ranging from 1 day to 1 week. We also have some dope ideas we can share in the coming months."
    },
    {
        "type": "renters",
        "question":"What's required?",
        "answer": "All rentals require a refundable deposit and or collateral equal to the 30% of the listed value of the shoe. For instance, you want to rock some Yeezy Boost 350s (valued at $300) you will need to provide a refundable deposit valued at $90 dollars."
    },
    {
        "type": "renters",
        "question":"What happens if I damage the shoe?",
        "answer": "Minor scuffs are ok as long as they aren’t a result of exercise, running or playing sports. Any significant damage will be assessed upon collection and potentially deducted from your rental deposit. Let us know immediately if something has happened and we’ll work with you. Please review our ‘Wear and Tear Policy’ for further questions."
    },
    {
        "type": "renters",
        "question":"What if I want to extend my rental?",
        "answer": "You must let us know by 12PM on Sunday if you’d like to extend your rental, otherwise you will be hit with a late fee if you choose to keep them looking than your original booking."
    },
    {
        "type": "renters",
        "question":"What if I want to keep the shoes after the rental?",
        "answer": "This is a case by case decision depending on the wishes of the supplier."
    },
    {
        "type": "renters",
        "question":"How do I get discounts?",
        "answer": "By paying with a cryptocurrency such as Dai or Algo; Inviting 3 or more members to form a node (We can tell you more about that); Posting 3 or more sneakers as a supplier. "
    },
]



const FAQ = () => {
    const classes = useStyles()

    return (
        <section className="faq">
            <div className="faq__copy">
                <h1>FAQ</h1>
                <p>Below are a list of frequently asked question </p>
            </div>
            <div className="faq__block">
                <h2>General</h2>
                {
                    data.map((set) => {
                        if (set.type == "general") {
                            return (
                                <Accordion key={set.question} className={classes.root}>
                                    <AccordionSummary expandIcon={<MdExpandMore />}><h3>{set.question}</h3></AccordionSummary>
                                    <AccordionDetails><p>{set.answer}</p></AccordionDetails>
                                </Accordion>
                            )
                        }
                    })
                }
                <h2>Suppliers</h2>
                {
                    data.map((set) => {
                        if (set.type == "suppliers") {
                            return (
                                <Accordion key={set.question} className={classes.root}>
                                    <AccordionSummary expandIcon={<MdExpandMore />}><h3>{set.question}</h3></AccordionSummary>
                                    <AccordionDetails><p>{set.answer}</p></AccordionDetails>
                                </Accordion>
                            )
                        }
                    })
                }
                <h2>Renters</h2>
                {
                    data.map((set) => {
                        if (set.type == "renters") {
                            return (
                                <Accordion key={set.question} className={classes.root}>
                                    <AccordionSummary expandIcon={<MdExpandMore />}><h3>{set.question}</h3></AccordionSummary>
                                    <AccordionDetails><p>{set.answer}</p></AccordionDetails>
                                </Accordion>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}

export default FAQ