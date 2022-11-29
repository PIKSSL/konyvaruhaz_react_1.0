import './Kosar.css';

function Kosar(props){
    function addDb(){
        props.addDb(props.kosar);
    }
    return (

        <tr>          
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.ar}</td> 
            <td>{props.kosar.db}</td> 
            <td><button onClick={addDb}>+</button></td>
            <td><button>-</button></td>
            <td><button>Töröl</button></td>
        </tr> 
      );

}

export default Kosar;