import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color='green'/>
    </header>
  )
}

// css in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

Header.defualtProps = {
  title: 'Task Scheduler'
}
export default Header
