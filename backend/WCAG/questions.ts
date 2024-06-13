const questions = {
    wcag: {
        question: "With which WCAG standard and level are you compliant?",
        answers: {
            answer1: {
                answer: "Never heard of",
                explanation: "WCAG (Web content accessibility guidelines) are an international standard for web accessibility, including information such as text, images and sound but also code or markup. To allow everybody to enter your website and to keep up with international standards, use the two links below to learn more about how and why to implement WCAG.",
                url: "https://www.w3.org/WAI/standards-guidelines/wcag/#intro"
            },
            answer2: {
                answer: "Unclear",
                explanation: "WCAG (Web content accessibility guidelines) are an international standard for web accessibility, including information such as text, images and sound but also code or markup. To allow everybody to enter your website and to keep up with international standards, use the two links below to learn more about how and why to implement WCAG.",
                url: "https://www.w3.org/WAI/standards-guidelines/wcag/#whatis2"
            },
            answer3: {
                answer: "WCAG 2.1 Level A",
                explanation: "You are already well on your way of complying with a WCAG standard but there is still some room for improvement. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app.",
                url: "https://www.w3.org/TR/WCAG21/#background-on-wcag-2"
            },
            answer4: {
                answer: "WCAG 2.1 Level AA",
                explanation: "You are already well on your way of complying with a WCAG standard but there is still some work to be done. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app or keep up to date with the standards.",
                url: "https://www.w3.org/TR/WCAG21/#background-on-wcag-2"
            },
            answer5: {
                answer: "WCAG 2.1 Level AAA",
                explanation: "You are already well on your way of complying with a WCAG standard but there is still some work to be done. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app or keep up to date with the standards.",
                url: "https://www.w3.org/TR/WCAG21/#background-on-wcag-2"
            },
        }
    },
    https: {
        question: "Does your organisation provide a secured website (https) for older operating systems?",
        answers: {
            answer1: {
                answer: "No",
                explanation: "HTTPS is useful to securing the traffic between your customer's computer and your own website. This security is necessary and also more enforced by browsers. HTTPS does not burden the computer of the network. That is why it is advisable to allow a minimum of encryption to users.",
                url: "https://safeonweb.be/en/blog/https-website-always-safe-true-or-false"
            },
            answer2: {
                answer: "Not yet, but we are considering it",
                explanation: "HTTPS is useful to securing the traffic between your customer's computer and your own website. This security is necessary and also more enforced by browsers. HTTPS does not burden the computer of the network. That is why it is advisable to allow a minimum of encryption to users.",
                url: "https://safeonweb.be/en/blog/https-website-always-safe-true-or-false"
            },
            answer3: {
                answer: "We are planning on providing it for a later update of the website",
                explanation: "If you are already applying HTTPS, make sure you always install updates and patches so that your system is always optimally secured. Your users count on this. Should you now yet apply it, consider doing so for benefit of your users.",
                url: "https://safeonweb.be/en/blog/https-website-always-safe-true-or-false"
            },
            answer4: {
                answer: "We are committed to be putting this in place",
                explanation: "Very good. You are already applying HTTPS. Always make sure you roll out the latest security patches. The cybersecurity world is constantly changing so make sure you have all the latest updates installed.",
                url: "https://safeonweb.be/en/blog/https-website-always-safe-true-or-false"
            },
            answer5: {
                answer: "Yes",
                explanation: "Very good. You are already applying HTTPS. Always make sure you roll out the latest security patches. The cybersecurity world is constantly changing so make sure you have all the latest updates installed.",
                url: "https://safeonweb.be/en/blog/https-website-always-safe-true-or-false"
            },
        }
    },
    accessibility: {
        question: "Is an online accessibility statement published and visible to the end users?",
        answers: {
            answer1: {
                answer: "No",
                explanation: "If websites, apps and devices are well-designed and meet specific standards, people with disabilities will be able to use them too. In today's society, it is almost impossible to live without the internet, smartphones and computers. That is why digital accessibility is necessary: to allow everyone to participate. Mandatory for my organisation? It is worth noting that having an accessibility statement is mandatory for almost all public websites and apps from 2019 and from 2025 in many other sectors, including banking, telecoms, media, transport and e-commerce",
                url: "https://www.w3.org/WAI/planning/statements/"
            },
            answer2: {
                answer: "Not yet, but we are considering it",
                explanation: "If websites, apps and devices are well-designed and meet specific standards, people with disabilities will be able to use them too. In today's society, it is almost impossible to live without the internet, smartphones and computers. That is why digital accessibility is necessary: to allow everyone to participate. Mandatory for my organisation? It is worth noting that having an accessibility statement is mandatory for almost all public websites and apps from 2019 and from 2025 in many other sectors, including banking, telecoms, media, transport and e-commerce",
                url: "https://www.w3.org/WAI/planning/statements/"
            },
            answer3: {
                answer: "We are planning on providing it for a later update of the website",
                explanation: "Consider the accessibility statement a contract with your customers or disabled citizens. Do not let them down, and make sure you develop an organisation-wide vision and strategy so that your accessibility statement will not be a dead letter.",
                url: "https://www.w3.org/WAI/planning/statements/"
            },
            answer4: {
                answer: "We are committed to be putting this in place",
                explanation: "It is great to know that your organisation is fully embracing Digital Accessibility. As a Thought Leader (stage 5 in the W3C's Accessibility maturity model), your organisation or team has extensive knowledge and skills in accessible design and development, and there is clear ownership in the organisation.",
                url: "https://www.w3.org/WAI/planning/statements/"
            },
            answer5: {
                answer: "Yes",
                explanation: "It is great to know that your organisation is fully embracing Digital Accessibility. As a Thought Leader (stage 5 in the W3C's Accessibility maturity model), your organisation or team has extensive knowledge and skills in accessible design and development, and there is clear ownership in the organisation.",
                url: "https://www.w3.org/WAI/planning/statements/"
            },
        }
    }
};

export default questions;