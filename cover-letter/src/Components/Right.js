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
        my older brother introduced me to JavaScript. This opened me up to the world of coding, and I dove in. That was 
        years ago and my only regret is that I didn't find out about coding sooner! Since then I have eaten up every opportunity
        I could find to learn more and expand my coding career.
      </P>
      <P>
        I am applying to this job with Morgan Stanley because my strengths are a great fit. I enjoy working across the full stack, and I get to work to find a solution, no matter what the issue or challenge may be.
        I'm looking for a team that is full of smart, hard-working, and empathetic people who build great things with modern tools. Working alongside other engineers is a joy to me, and
        I love learning how to write better code while teaching others to do the same. Whatever the company, toolset, or framework, I can be counted on to provide a strong and lasting contribution.
      </P>
      <P>
        Whatever the responsibilities may be, I believe my positive attitude, resourcefulness, and stubborn perseverance when
        facing a challenge make me a productive contributor to any professional team.
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
