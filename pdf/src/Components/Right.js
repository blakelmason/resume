import React from 'react'
import Title from './Title'
import Experience from './Experience'

const experiences = [
  {
    company: 'US Wheel Corp',
    position: 'software engineer',
    date: '2017 - 2019',
    data: [
      'Built a full stack web application to manage freight and drop ship orders using JavaScript tools and frameworks. Automated the order entry and invoice billing process. Helped troubleshoot any IT problems for the office and warehouse.'
    ],
    description: 'Steel wheel assembly and tire distribution'
  },
  {
    company: 'Brigham Young University, Office of IT',
    position: 'help desk',
    data: [
      "Worked to resolve any IT related issues for BYU customers and employees. Received technical training to help with the support and upkeep of BYU's network."
    ]
  }
]

const educations = [
  {
    company: 'Hack Reactor',
    position: 'Software Engineering Immersive',
    date: '2019',
    data: [
      'Worked on mastering full stack JavaScript and Computer Science fundamentals while exploring new tech using the most refined, up-to-date curriculum.'
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
      'A full stack web development program that teaches the key skills for front end and back end development'
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
      "Built an exact copy of a single product page from IKEA's website from scratch using a JavaScript based framework. Followed the proxy/service design pattern to coordinate the display of multiple React components on a single page."
    ]
  },
  {
    company: 'Hack Reactor',
    position: 'System Design Capstone',
    data: [
      'Hosted a front end capstone project on AWS EC2 free tier instances and designed a system to maximize application load. Split the proxy, services, and database to individual EC2 instances and configured a load balancer using NGINX.'
    ]
  }
]

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <Title left>Projects</Title>
        {projects.map((data, i) => (
          <Experience
            key={`project-${i}`}
            {...data}
            nm={i === projects.length - 1}
          />
        ))}
      </div>
      <div>
        <Title left>Experience</Title>
        {experiences.map((data, i) => (
          <Experience
            key={`experience-${i}`}
            {...data}
            nm={i === experiences.length - 1}
          />
        ))}
      </div>
      <div>
        <Title left>Education</Title>
        {educations.map((data, i) => (
          <Experience
            key={`education-${i}`}
            {...data}
            nm={i === educations.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Right
