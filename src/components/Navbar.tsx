import Link from "next/link";


export default function () {
    return (
        <div className="navbar">
            <ul className="navbar-list" >
                <li >
                    <Link href="/">Home</Link>
                </li>
                <li >
                    <Link href="/about">About-us</Link>
                </li>
                <li >
                    <Link href="/contact">Contact-us</Link>
                </li>
                <li >
                    <Link href="/skills">Skills</Link>
                </li>
                <li>
                    <Link href="/experience">Experience</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                
                
            </ul>
           
               
        </div>
    );
}
