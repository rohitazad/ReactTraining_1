import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const ListItemComponents = ()=>{
    return (
        <>
            <ListGroup>
                <ListGroup.Item><Link to="/about/5">Go to ABout Page Id 5</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/about/6">Go to ABout Page Id 6</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/about/7">Go to ABout Page Id 7</Link></ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default ListItemComponents;