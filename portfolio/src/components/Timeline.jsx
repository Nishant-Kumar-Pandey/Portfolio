import React from "react";

const timelineItems = [
  {
    year: "Now",
    title: "AI & Full-Stack Engineer",
    description:
      "Developing AI-powered applications integrating APIs, voice input, file processing, and intelligent automation, Focused on building scalable, production-ready systems with strong backend logic and seamless user experience.",
  },
  {
    year: "2023",
    title: "Expanding Technical Foundations",
    description:
      "Learned C and C++ to strengthen understanding of data structures, algorithms, and system-level concepts. Actively practiced competitive coding to improve analytical thinking and efficiency.",
  },
  {
    year: "2021",
    title: "Introduction to Programming",
    description:
      "Started learning Python and developed a strong foundation in programming logic, problem-solving, and computational thinking. Built small projects to understand core concepts and real-world applications.",
  },
];

const Timeline = () => {
  return (
    <section className="section alt" id="timeline">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        <p className="section-subtitle">
          How I grew from curious learner to mentor and full-stack engineer.
        </p>

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={item.year}
            >
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
