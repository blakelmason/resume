import React from 'react'
import Title from './Title'

const data = {
  site: 'procore.com',
  position: 'Business Intelligence Analyst',
  company: 'Casa Pacifica'
}

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Title left>Cover Letter</Title>
      <div style={{}}>Dear Hiring Manager,</div>
      {/* <P>
        This letter is to express my interest in your posting on {data.site} for
        the {data.position} position, and my confidence in my ability to be a
        productive contributor to your team. I believe that {data.company} works
        toward a valuable purpose, and it would be a privilege to work toward
        such a goal. I became a software engineer because I love code, and my
        skills will clearly succeed as a {data.position} for {data.company}.
      </P>
      <P>
        Most recently I worked on three software projects while attending Hack
        Reactor: a front end capstone, a system design capstone, and a full
        stack final project. Each project required rigorous teamwork and
        collaboration while using real world, production grade practices and
        coding standards. Because I have prior experience working with
        JavaScript frameworks, I helped teach and guide each team I worked on.
        From forming an optimal toolchain, to managing git workflows, or simply
        providing words of encouragement, I was personally involved with each
        member while also providing my own technical contributions to the
        project.
      </P>
      <P>
        My skills as a {data.position} will be valuable to {data.company}, and I
        would like to further discuss my qualifications. Please feel free to
        contact me by email at blakelmason@gmail.com or by phone at (714)
        878-5117.
      </P> */}
      <P>
        I am interested in obtaining full-time employment as a {data.position}{' '}
        at {data.company}. I believe my dependable, personable, and professional
        nature makes me a competitive candidate for this position. My (a)
        experience at U.S. Wheel Corporation and (b) education at BYU, UCI, and
        Hack Reactor have provided me with the skills necessary to succeed at
        this job.
      </P>
      <P>
        <strong>Experience.</strong> As a Business and Technology Specialist at
        U.S. Wheel Corp, I specialized in identifying business problems, and
        providing tech solutions. I worked closely with all business teams to
        optimize current processes, improve systems, and resolve issues. Some
        examples of work I did are automating order entries for U-Haul and
        Summit Racing orders, setting up a SQL database to track drop ship
        orders, and generating bill of materials for the wheel assembly process.
      </P>
      <P>
        <strong>Education.</strong> Through my software engineering programs at
        UCI and Hack Reactor, I have enhanced my ability to think sharply and
        quickly by practicing complicated logic with JavaScript-centered
        technologies. I have also learned how to build, manage, and operate
        MySQL, PostgreSQL, and MongoDB databases. I apply this knowledge in
        business settings to provide simple technology solutions to complicated
        business problems. My degree in business from BYU coupled with my
        certificates from UCI and Hack Reactor give me a powerful toolset that I
        feel would help me thrive as a {data.position}.
      </P>
      <P>
        I am confident my skills as a {data.position} will be valuable to{' '}
        {data.company}, and I would like to further discuss my qualifications.
        Please feel free to contact me by email at blakelmason@gmail.com or by
        phone at (714) 878-5117.
      </P>
      <div style={{ marginBottom: 14 }}>Sincerely,</div>
      <div>Blake Mason</div>
    </div>
  )
}

function P({ children }) {
  return (
    <div
      style={{
        lineHeight: 1.5,
        textJustify: 'inter-word',
        textAlign: 'justify'
      }}
    >
      {children}
    </div>
  )
}

export default Right
