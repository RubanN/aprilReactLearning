import React from 'react'
import ContactCard from './ContactCard'
import "./style.css"
const ReactLearning = () => {
    return (
        <>
            <ContactCard
                avatarUrl="https://via.placeholder.com/150"
                name="Jenny Max"
                email="Jenny@gmail.com"
                age={56} />
            <ContactCard
                avatarUrl="https://via.placeholder.com/150"
                name="paul jones"
                email="paul@gmail.com"
                age={26} />
            <ContactCard
                avatarUrl="https://via.placeholder.com/150"
                name="peter Pan"
                email="Peter@gmail.com"
                age={28} />
        </>

    )
}

export default ReactLearning