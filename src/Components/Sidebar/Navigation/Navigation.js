import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faChartPie, faLaptopCode, faWallet, faCommentDots, faCog } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

export default function Navigation() {
    const values = [
        { id: 1, hasSubmenu: 0,text: "Dashboard", icon: faChartPie, submenus: [] },
        { id: 2, hasSubmenu: 1, text: "DevOps", icon: faLaptopCode, submenus: [
            { id: 2.1, text: "SubMenu 1", icon: faLaptopCode },
            { id: 2.2, text: "SubMenu 2", icon: faLaptopCode },
        ] },
        { id: 3, hasSubmenu: 1, text: "Finance", icon: faWallet, submenus: [] },
        { id: 4, hasSubmenu: 0, text: "Chat", icon: faCommentDots, submenus: [] },
    ];
    const quick_tasks = [
        { id: 5, hasSubmenu: 0, text: "Settings", icon: faCog, submenus: [] },
    ];
    const [activeId, setActiveId] = useState(1); // 1 == Default Page ID
    const [SubActiveId, setSubActiveId] = useState();
    // TODO: After page refresh we should return to last state
    function handleClick(parent, submenu) {
        if(typeof(submenu) !== 'undefined' && submenu != null) {
            setSubActiveId(submenu.id);
            setActiveId(parent.id);
        }
        else {
            if(parent.submenus.length !== 0) {
                setSubActiveId(parent.submenus[0].id);
            } else {
                setSubActiveId();
            }
            setActiveId(parent.id);
        }
    }

    return (
        <>
            <ul>
                <label for="">OVERVIEW</label>
                {values.map((val) => (
                    <li key={val.id} onClick={() => { handleClick(val) }} className={activeId === val.id ? "active" : ""}>
                        <FontAwesomeIcon icon={val.icon}/> {val.text} {(val.submenus).length !== 0 ? <FontAwesomeIcon icon={faCaretDown} className="dropdownCaret"/> : ""}
                        {(val.submenus).length !== 0 ? 
                            <>
                                <ul>
                                    {val.submenus.map((submenu) => 
                                        <li key={submenu.id} onClick={(e) => {e.stopPropagation(); handleClick(val, submenu); }}        
                                            className={SubActiveId === submenu.id ? "active" : ""}>
                                            <FontAwesomeIcon icon={submenu.icon}/> {submenu.text}
                                        </li>
                                    )}
                                </ul>
                            </>
                            : ""
                        }
                    </li>
                ))}
            </ul>
            <ul>
                <label for="">QUICK TASKS</label>
                { quick_tasks.map((qt) => 
                    <li key={qt.id} onClick={() => handleClick(qt)} className={activeId === qt.id ? "active" : ""}>
                        <FontAwesomeIcon icon={qt.icon}/> {qt.text}
                    </li>
                )}
            </ul>
        </>
    )
}