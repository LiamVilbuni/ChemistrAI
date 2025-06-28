import Navbar from '@/components/Navbar';
import '@/app/globals.css';
import '@/styles/features.css';

export default function Features() {
  return (
    <>
      <Navbar />
      <div className="features__container">
        <div className = "features__content">
          <h1 id="features__title">ChemistrAI currently supports the following features: </h1>
          <ul>
            <li>AI-driven chemical property & reaction predictions</li>
            <li>Suggesting optimal, environmental-friendly synthesis pathways</li>
            <li>Identifying potential hazards and safety measures</li>
            <li>Real-time chemical data analysis</li>
            <li>Interactive molecular visualizations</li>
            <li>Comprehensive educational resources</li>
            <li>Collaboration tools for researchers</li>
          </ul>
        </div>
      </div>
    </>
  );
}
