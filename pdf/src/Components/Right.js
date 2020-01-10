import React from 'react'
import Title from './Title'
import Experience from './Experience'

const experiences = [
  {
    company: 'US Wheel Corp',
    position: 'junior software engineer',
    date: '2017 - 2019',
    data: [
      'Set up a local Ubuntu server with PostgreSQL for capturing FedEx and UPS tracking information. Designed a new invoice template and automated an invoice emailing process using Node.js as previously all invoices were being physically mailed. Automated the order entry for U-Haul and Summit Racing orders using Node.js. Coordinated relationships for any outsourced IT solutions.'
    ],
    description: 'Steel wheel assembly and tire distribution'
  }
]

const educations = [
  {
    company: 'Hack Reactor',
    position: 'Software Engineering Immersive',
    date: '2019',
    data: [
      'Worked on mastering full stack JavaScript and Computer Science fundamentals while exploring new tech. Practiced pair programming and learned to code on a team using the most refined, up-to-date curriculum. Designed and built production grade web applications from scratch.'
    ],
    description:
      'An advanced coding bootcamp focused on building autonomous software engineers ready for any job in the tech industry'
  },
  {
    company: 'University of California, Irvine',
    position: 'Web Development Bootcamp',
    date: '2018',
    data: [
      'Completed complex projects and received hands-on programming training through experiential learning opportunities.'
    ],
    description:
      'A full stack web development program that teaches the key skills for front-end and back-end development'
  },
  {
    company: 'Brigham Young University, Utah',
    position: "Bachelor's Degree - Business Management",
    date: '2017',
    data: []
  }
]

const projects = [
  {
    company: 'Hack Reactor',
    position: 'Front End Capstone',
    data: [
      "Built an exact copy of a single product page from IKEA's website from scratch. Followed the proxy/service design pattern to coordinate the display of multiple React components on a single page."
    ]
  }
]

function Right() {
  return (
    <div style={{ borderLeft: '2px solid #4c5867', paddingLeft: 24 }}>
      <div style={{ marginBottom: 48 }}>
        <Title left>Projects</Title>
        {projects.map((data, i) => (
          <Experience key={`project-${i}`} {...data} />
        ))}
      </div>
      <div style={{ marginBottom: 48 }}>
        <Title left>Experience</Title>
        {experiences.map((data, i) => (
          <Experience key={`experience-${i}`} {...data} />
        ))}
      </div>
      <Title left>Education</Title>
      {educations.map((data, i) => (
        <Experience key={`education-${i}`} {...data} />
      ))}
    </div>
  )
}

export default Right
