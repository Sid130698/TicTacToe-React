import './Square.css';
function Square({move,onClick}){
return (
    
    <div className="square" onClick ={onClick} >
        {move}
    </div>
)
}
export default Square;