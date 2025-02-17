import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        If you're interested in working together or just want to say hi, feel free to reach out!  
        You can contact me via email or connect with me on LinkedIn and GitHub.
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> jankovic.andjela@outlook.com</p>
        <p>
          <a href="https://github.com/aandjelajankovic" target="_blank" rel="noopener noreferrer">GitHub</a> |  
          <a href="https://linkedin.com/in/jankovicandjela" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
