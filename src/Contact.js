import { useNavigate, useParams } from "react-router-dom";

function Contact() {

    const mynavigation = useNavigate()
    
    const {id}= useParams()
    return (<>
    <h1>Contact - {id}</h1>
    <button onClick={()=>mynavigation('home')}>ClickMe</button>
    </>  );
}

export default Contact;