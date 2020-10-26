import React from 'react'
import Title from './Title'
import Experience from './Experience'

const experiences = [
  {
    description: 'Full service digital sales and marketing agency',
    href: 'https://lendio.com/',
    company: 'Lendio',
    position: 'Software Engineer',
    date: '2020',
    data: [
      `Build UI components and pages for Lendio website and applications.`
    ],
  },
  {
    description: 'Full service digital sales and marketing agency',
    href: 'https://vonazon.com/',
    company: 'Vonazon',
    position: 'Web Developer',
    date: '2020',
    data: [
      `Built websites for clients using the HubSpot CMS.
      Translated design and styling guidelines from the Graphics Design team to attractive, responsive web pages.
      Generated custom Bootstrap themes built from the Sass source files using node-sass.
      Created and updated custom templates and modules in HubSpot using the Hubl templating language and Preact, a performant React alternative.`
    ],
  },
  {
    href: 'http://www.uswheel.com/',
    company: 'US Wheel Corp.',
    position: 'software engineer',
    date: '2017 - 2019',
    data: [
      `Wrote code to automate business operations such as order entry, invoicing, reporting, and generating work order bill of materials.
      Helped troubleshoot any IT problems for the office and warehouse.`
    ],
    description: 'Steel wheel assembly and tire distribution',
  },
]

const educations = [
  {
    href: 'https://www.hackreactor.com/',
    company: 'Hack Reactor',
    position: 'Software Engineering Immersive',
    date: '2020',
    data: [
      `Worked on mastering full stack JavaScript and Computer Science fundamentals while exploring new tech using the most refined, up-to-date curriculum.
      Hosted a front end  project on AWS EC2 free tier instances and designed a system to maximize application load.
      Split the proxy, services, and database to individual EC2 instances and configured a load balancer using NGINX.`
    ],
    description:
      'An advanced coding bootcamp focused on building autonomous software engineers ready for any job in the tech industry',
  },
  {
    href: 'https://bootcamp.ce.uci.edu/coding/',
    company: 'UCI Division of Continuing Education',
    position: 'Web Development Bootcamp',
    date: '2018',
    data: [
      'Completed complex projects and received hands-on programming training through experiential learning opportunities.',
    ],
    description: 'A web development program that teaches the key skills for full stack development',
  },
  {
    href: 'https://www.byu.edu/',
    company: 'Brigham Young University, Utah',
    position: "Bachelor's Degree - Business Management",
    date: '2017',
    data: [],
  },
]

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Title left>Experience</Title>
        {experiences.map((data, i) => (
          <Experience key={`experience-${i}`} {...data} i={i} />
        ))}
      </div>
      <div>
        <Title left>Education</Title>
        {educations.map((data, i) => (
          <Experience key={`education-${i}`} {...data} i={i} />
        ))}
      </div>
    </div>
  )
}

export default Right
