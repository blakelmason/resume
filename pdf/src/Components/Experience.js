import React from 'react'

function Experience({ company, position, date, data, description, nm }) {
  return (
    <div style={{ display: 'flex', marginBottom: nm ? 0 : 26 }}>
      <div
        style={{
          fontSize: 22,
          marginRight: 12,
          position: 'relative',
          bottom: 4
        }}
      >
        •
      </div>
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-bottom',
            marginBottom: 4
          }}
        >
          <div style={{ fontWeight: 500, fontSize: 16 }}>{company}</div>
          <div style={{ color: '#6c757d', position: 'relative', top: 2 }}>
            {date}
          </div>
        </div>
        <div
          style={{
            textTransform: 'uppercase',
            fontSize: 18,
            color: '#4c5867',
            fontWeight: 700,
            marginBottom: 4
          }}
        >
          {position}
        </div>
        <div
          style={{
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#6c757d',
            marginBottom: 12,
            fontSize: 11
          }}
        >
          {description}
        </div>
        {data.map((item, i) => (
          <div
            style={{
              marginTop: 12,
              lineHeight: 1.4,
              textAlign: 'justify',
              textJustify: 'inter-word'
            }}
            key={`company-data-${i}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
