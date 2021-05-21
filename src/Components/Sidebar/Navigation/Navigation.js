import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faLaptopCode, faWallet, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

export default function Navigation() {
    const values = [
        { id: 1, text: "Dashboard", icon: faChartPie },
        { id: 2, text: "Overview", icon: faLaptopCode },
        { id: 3, text: "Finance", icon: faWallet },
        { id: 4, text: "Chat", icon: faCommentDots }
      ];
    const [activeId, setActiveId] = useState(1); // 1 == default page id

    return (
        <ul>
            {values.map((val) => (
                <li key={val.id} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : ""}>
                   <FontAwesomeIcon icon={val.icon}/> {val.text} 
                   {/* {activeId === val.id ? "Active" : "Inactive"} */}
                </li>
            ))}
        </ul>
    )
}