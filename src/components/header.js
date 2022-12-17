import { LogoRnaxan } from "./logo";
import { Link } from "react-router-dom";

import "../style/components/header.css"
import "../style/components/navigation.css"

export function Header() {
    return <>
        <header id="navbar">
            <div className="container">
                <Link to="/">
                    <LogoRnaxan />
                </Link>
                <button onClick={() => OpenNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </header>

        <Navigation />
    </>
}

function Navigation() {
    return <section className="nav">
        <div className="container">
            <div className="top">
                <Link to="/">
                    <LogoRnaxan />
                </Link>
                <button onClick={() => OpenNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <ul className="middle">
                {NavLinks !== null && NavLinks.map((link, index) => {
                    return <li key={index}>
                        <Link to={link.shortLink}>{link.text}</Link>
                        {link.subLinks && <ul>
                            {link.subLinks.map((subLink, index) => {
                                return <Link to={subLink.shortLink} key={index}>{subLink.text}</Link>
                            })}
                        </ul>}
                    </li>
                })}
            </ul>
        </div>
    </section>
}

const NavLinks = [
    {
        text: "Recipes",
        shortLink: "/recipes",
        subLinks: [
            {
                text: "Search",
                shortLink: "/recipes/search",
            },
            {
                text: "Your Recipes",
                shortLink: "/recipes/user",
            },
            {
                text: "Archive",
                shortLink: "/recipes/archive",
            }
        ]
    },
    {
        text: "About",
        shortLink: "/about",
        subLinks: [
            {
                text: "FAQ",
                shortLink: "/about/faq",
            },
            {
                text: "Contact",
                shortLink: "/about/contact",
            }
        ]
    }
]

const OpenNav = () => {
    if (document.documentElement.dataset.navState === "open") {
        document.documentElement.dataset.navState = "closed"
    } else {
        document.documentElement.dataset.navState = "open"
    }
}