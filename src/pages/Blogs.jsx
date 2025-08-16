import './Blogs.css';

const Blogs = () => {
  return (
    <section className="blogs">
      <h2>Our Blog</h2>
      <p>Explore insights, tips, and the latest trends in web design, development, and digital marketing. Our team shares their knowledge to help you make smarter digital decisions.</p>

      <article>
        <h3>5 Tips to Improve Website Performance</h3>
        <p>Speed matters. Learn practical strategies to reduce load times and increase user engagement, including image optimization, caching, and lazy loading techniques.</p>
      </article>

      <article>
        <h3>2025 Design Trends You Need to Know</h3>
        <p>From bold typography to immersive micro-interactions, we break down what’s next in UI/UX design for the coming year.</p>
      </article>

      <article>
        <h3>Responsive Design: Beyond Mobile</h3>
        <p>Explore how to create flexible, device-agnostic layouts that ensure a smooth experience across phones, tablets, desktops — and everything in between.</p>
      </article>
    </section>
  );
};

export default Blogs