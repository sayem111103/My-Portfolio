import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
              <NavLink
                    to={to}
                    className={({ isActive }) =>  isActive? 'uppercase text-md hover:bg-transparent font-bold hover:text-purple-500 text-purple-500':'uppercase text-md hover:bg-transparent font-bold hover:text-purple-500'}
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;