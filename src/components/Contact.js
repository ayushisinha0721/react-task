function Contact(){
    const [name, setName] = useState("ayushi");
    return(
        <div>
            <h1>The owner of this page is {name}</h1>
        </div>
    )
}
export default Contact;