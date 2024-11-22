/* HANDLES THE CARD COMPONENT - Shows only the content the HOMECARDS COMPONENT PASSES */ 

import proptypes from 'prop-types'

//The class is passed to the component as a prop and added to the other hardcoded classes
const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card

Card.propTypes = {
  children: proptypes.node.isRequired,
  bg: proptypes.string
}