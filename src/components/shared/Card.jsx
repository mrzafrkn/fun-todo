import PropTypes from 'prop-types'
function Card({children, reverse}) {
  return (
    <div className="card"
    style={{
        backgroundColor: reverse ? '#fff' : '#e07a5f' ,
        color: reverse ? '#e07a5f' : '#fff'
    }}
    >
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}



export default Card



