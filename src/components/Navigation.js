import React from "react";
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div className="nav">
            <Link to = '/'>HOME</Link>
            <Link to = '/detail'> POST CONTENTS</Link>
            <Link to = '/write'>NEW POST</Link>
        </div>
    );
}

export default Navigation;