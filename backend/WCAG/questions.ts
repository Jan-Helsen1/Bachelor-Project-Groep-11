const questions = {
    wcag: {
        question: "With which WCAG standard and level are you compliant?",
        answers: {
            answer1: {
                answer: "Never heard of",
                explanation: "WCAG (Web content accessibility guidelines) are an international standard for web accessibility, including information such as text, images and sound but also code or markup. To allow everybody to enter your website and to keep up with international standards, use the two links below to learn more about how and why to implement WCAG."
            },
            answer2: {
                answer: "Unclear",
                explanation: "WCAG (Web content accessibility guidelines) are an international standard for web accessibility, including information such as text, images and sound but also code or markup. To allow everybody to enter your website and to keep up with international standards, use the two links below to learn more about how and why to implement WCAG."
            },
            answer3: {
                answer: "WCAG 2.1 Level A",
                explanation: "You are already well on your way of complying with a WCAG standard but there is still some room for improvement. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app."
            },
            answer4: {
                answer: "WCAG 2.1 Level AA",
                explanation: "You are already well on your way of complying with a WCAG standard but there is still some work to be done. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app or keep up to date with the standards."
            },
            answer5: {
                answer: "WCAG 2.1 Level AAA",
                explanation: "You are already well on your way of complying with a WCAG standard but there is still some work to be done. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app or keep up to date with the standards."
            },
        }
    },
    https: {
        question: "Does your organisation provide a secured website (https) for older operating systems?",
        answers: {
            answer1: {
                answer: "No",
                explanation: "HTTPS is useful to securing the traffic between your customer's computer and your own website. This security is necessary and also more enforced by browsers. HTTPS does not burden the computer of the network. That is why it is advisable to allow a minimum of encryption to users."
            },
            answer2: {
                answer: "Not yest, but we are considering it",
                explanation: "HTTPS is useful to securing the traffic between your customer's computer and your own website. This security is necessary and also more enforced by browsers. HTTPS does not burden the computer of the network. That is why it is advisable to allow a minimum of encryption to users."
            },
            answer3: {
                answer: "We are planning on providing it for a later update of the website",
                explanation: "If you are already applying HTTPS, make sure you always install updates and patches so that your system is always optimally secured. Your users count on this. Should you now yet apply it, consider doing so for benefit of your users."
            },
            answer4: {
                answer: "We are committed to be putting this in place",
                explanation: "Very good. You are already applying HTTPS. Always make sure you roll out the latest security patches. The cybersecurity world is constantly changing so make sure you have all the latest updates installed."
            },
            answer5: {
                answer: "Yes",
                explanation: "Very good. You are already applying HTTPS. Always make sure you roll out the latest security patches. The cybersecurity world is constantly changing so make sure you have all the latest updates installed."
            },
        }
    }
};

export default questions;