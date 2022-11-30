import Image from "./troll-face.png"

export default function Header(){
    return(
        <nav className="navbar">
            
            <h3 className="header-title">MishraJi Lame Jokes</h3>
            <img src={Image}/>
        </nav>
    )
}