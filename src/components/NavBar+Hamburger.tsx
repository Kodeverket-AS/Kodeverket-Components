import { useState } from "react";
import Link from "next/link";

export default function NavBarHamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // optional: close menu when a link is clicked
    };

    return (
        <nav className=""/* nav container styles */ >
            <div className="flex items-center justify-between" /* wrapper for logo and toggle */ > 
                <div className=""/* logo wrapper */>
                    <Link href="/" scroll={true}>
                        <img
                            src="/path-to-logo.png"
                            alt="Site Logo"
                            width="100" /* placeholder width */
                            height="40" /* placeholder height */
                            className=""/* logo image styles */
                        />
                    </Link>
                </div>

                <button
                    className="lg:hidden" /* mobile menu toggle styles */
                    onClick={toggleMenu}
                    aria-label="Toggle menu">                        
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>

            <ul
                className={`${isOpen ? 'flex' : 'hidden'} flex-col mt-4 space-y-2 lg:flex lg:flex-row lg:space-y-0 lg:space-x-6`} /* menu styles */>
                <li>
                    <Link
                        href="/placeholder-link-1"
                        className="..."/* link styles */
                        onClick={handleLinkClick}>Link 1
                    </Link>
                </li>
                <li>
                    <Link
                        href="/placeholder-link-2"
                        className="..."/* link styles */
                        onClick={handleLinkClick}>Link 2
                    </Link>
                </li>
                <li>
                    <Link
                        href="/placeholder-link-3"
                        className="..."/* link styles */
                        onClick={handleLinkClick}>Link 3
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
