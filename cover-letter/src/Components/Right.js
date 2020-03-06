import React from 'react'
import Title from './Title'

const data = {
  position: 'Traffic Quality Analyst',
  company: 'Conversant'
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
        I am interested in obtaining full-time employment as a {data.position}{' '}
        at {data.company}. I believe my dependable, personable, and professional
        nature makes me a competitive candidate for this position. I became a
        software engineer because I love code, and I believe my skills will help
        me succeed as a {data.position}.
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
