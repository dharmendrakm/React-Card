import React from 'react'


class Nav extends React.Component
{
    render(){
        return(
            <div className="menuWrapper">
              <nav>
                <ul>
                  <li>
                    <a href='/'>People</a>                    
                  </li>
                  <li>
                  <a href='/films'>Films</a>                   
                  </li>
                  <li>
                  <a href='/planets'>Planet</a>                    
                  </li>
                </ul>
              </nav>
            </div>
        )
    }

}

export default Nav;