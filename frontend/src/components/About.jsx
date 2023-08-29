import React from 'react';
import charismaticImage from '../assets/charismatic.jpg';
import fashionImage from '../assets/fashion.jpg';
import intelligentImage from '../assets/intelligent.jpg';

const About = () => {
  return (
    <div id="about" className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">About Patrick Bateman</h2>
        <p className="text-lg mb-8">
          Patrick Bateman is a complex character known for his meticulously crafted image and his dark, twisted psyche.
          With a superficial charm and impeccable taste, he navigates the world of high finance and luxury in the heart of New York City.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-xl transform transition hover:scale-105">
            <img src={charismaticImage} alt="Charismatic" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Charismatic and Charming</h3>
            <p>Patrick's magnetic personality draws people in effortlessly.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-xl transform transition hover:scale-105">
            <img src={fashionImage} alt="Fashion Sense" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Impeccable Fashion Sense</h3>
            <p>His impeccable style and attention to detail set him apart.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-xl transform transition hover:scale-105">
            <img src={intelligentImage} alt="Highly Intelligent" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Highly Intelligent</h3>
            <p>Patrick's intelligence allows him to manipulate situations to his advantage.</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-4">Strengths and Weaknesses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Strengths</h4>
              <ul className="list-disc list-inside">
                <li>Excellent social skills</li>
                <li>Ability to blend in and manipulate</li>
                <li>Ambitious and driven</li>
                <li>Keen observation and analysis</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Weaknesses</h4>
              <ul className="list-disc list-inside">
                <li>None</li>
                {/* <li>Extreme materialism</li>
                <li>Psychopathic tendencies</li>
                <li>Instability and violence</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
