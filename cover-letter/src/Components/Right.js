import React from 'react'
import Title from './Title'

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Title left>Cover Letter</Title>
      <div style={{}}>Hello!</div>
      <P>
        I am a software engineer who loves code. After college I thought I would do something with finance or business, but then
        my older brother introduced me to JavaScript. This opened me up to the world of coding, and I dove in. That was three
        years ago and my only regret is that I didn't find out about coding sooner! Since then I have eaten up every opportunity
        I could find to learn more and work toward a professional career in with coding.
      </P>
      <P>
        Currently I work at a marketing company building websites, but I still continue my glorious quest for a place on a team
        of ardent coders like myself. Recently I completed the Software Engineering Immersive at Hack Reactor in Los Angeles,
        where I worked with others in a simulated professional coding environment. We worked six days a week from 9AM to 9PM to
        build fully functional apps from scratch. It was wonderful, and I hope to find a job with a team that follows the same
        principles I learned at Hack Reactor: to work hard, have fun, and be empathetic in our attitude and communication toward
        one another.
      </P>
      <P>
        My time spent coding is not exclusive to my job or educational opportunities, I spend my free time coding as well! I
        love learning new principles, or exploring a new tool or library. I enjoy learning code from others, or teaching someone
        else what I know whenever I can.
      </P>
      <P>
        To be frank, I have applied to lots of coding jobs and read lots of requirements. Most of the time my skills partialy
        fit the requirements, but with the Software Developer Intern position at BlenderBotttle I think my skills are a perfect
        fit. I believe that if I became a part of the team, there would be no doubt or regret in the decision to bring me on.
      </P>
      <P>I hope to hear back from you soon!</P>
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
        textAlign: 'justify',
      }}
    >
      {children}
    </div>
  )
}

export default Right
