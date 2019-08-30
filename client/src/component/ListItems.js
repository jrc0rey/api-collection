import React from 'react';

const ListItems = ({children}) => {
return(
<ul className= "list-unstyled row">
    {children}
</ul>
  )
}
export default ListItems;
