import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <p>Whether you have a question, want to collaborate, or just want to say hello — we’d love to hear from you. Send us a message and we’ll get back to you within 24 hours.</p>
      
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <h3>Our Office</h3>
      <p>123 Web Avenue, Innovation City, Techland</p>

      <h3>Email</h3>
      <p><a href="mailto:contact@mysite.com">contact@mysite.com</a></p>

      <h3>Follow Us</h3>
      <ul className="social-links">
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </section>
  );
};

export default Contact;
