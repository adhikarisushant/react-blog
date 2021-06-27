import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="data:image/jpeg;base64,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" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum dicta iure dolor reprehenderit praesentium tenetur molestias eligendi.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <li className="sidebarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}
