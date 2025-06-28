import Navbar from '@/components/Navbar';
import '@/app/globals.css';
import '@/styles/about.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about__container">
        <div className = "about__content">
          <h1 id="about__title">About ChemistrAI</h1>
          <p>
            ChemistrAI is an innovative platform designed to revolutionize the way we interact with chemical data. It leverages the power of AI to provide users with a comprehensive suite of tools for chemical analysis, data visualization, and educational resources. Whether you're a student, researcher, or industry professional, ChemistrAI offers a user-friendly interface and advanced features to enhance your understanding of chemistry.
          </p>
        </div>
      </div>
    </>
  );
}
