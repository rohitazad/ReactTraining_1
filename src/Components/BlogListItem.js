import React  from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const BlogListComponents = (props)=>{
    const _data = props.post;
    const redirectToPostPage = props && props.redirect && props.redirect !== '' ? props.redirect : '';
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title>{_data.title}</Card.Title>
                <Card.Text>
               {_data.body}
                </Card.Text>
                {
                    redirectToPostPage === '' ? <Link className="btn btn-primary" to={`/post/${_data.id}`}>Click to more {_data.id}</Link> : <Link className="btn btn-primary" to='/contact'>Go to back post list</Link>
                }
                
            </Card.Body>
        </Card> 
        </>
    )
}
export default BlogListComponents;