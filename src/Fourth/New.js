import React from 'react';
import {Link} from 'react-router-dom';

        const New = () => {
        return (
 <>
        <ul>
        <li> <Link to="/"> Home </Link> </li>
         <li> <Link to="/page1"> Page1 </Link> </li>
         <li> <Link to="/page2"> Page2 </Link> </li>
         <li> <Link to="/page3"> Page3 </Link> </li>
        </ul>
</>
        );
        };

export default New;