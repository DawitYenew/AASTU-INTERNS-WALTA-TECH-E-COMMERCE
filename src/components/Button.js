const Button = ({color}) => {
    const onclick = (e) =>{
        console.log(e)
    }
    return (
        <button 
            onClick={onclick} 
            style={{backgroundColor: color}} 
            className="btn">Add</button>
  ) 
}

export default Button
