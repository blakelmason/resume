import React from 'react'
import Title from './Title'

const data = {
  site: 'indeed.com',
  position: 'Web Developer',
  company: 'Purple'
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
      <P>
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
      </P>
      <div style={{ marginBottom: 14 }}>Sincerely,</div>
      <div>Blake Mason</div>
    </div>
  )
}

console.log(`Dear Hiring Manager,

This letter is to express my interest in your posting on ${data.site} for
the ${data.position} position, and my confidence in my ability to be a
productive contributor to your team. I believe that ${data.company} works
toward a valuable purpose, and it would be a privilege to work toward
such a goal. I became a software engineer because I love code, and my
skills will clearly succeed as a ${data.position} for ${data.company}.

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

My skills as a ${data.position} will be valuable to ${data.company}, and I
would like to further discuss my qualifications. Please feel free to
contact me by email at blakelmason@gmail.com or by phone at (714)
878-5117.

Sincerely,

Blake Mason
`)

function P({ children }) {
  return (
    <div
      style={{
        lineHeight: 2,
        textJustify: 'inter-word',
        textAlign: 'justify'
      }}
    >
      {children}
    </div>
  )
}

export default Right
