import React from 'react'

function Experience({ company, position, date, data, description, href, i }) {
  return (
    <div style={{ display: 'flex', marginBottom: i === 0 || i === 1 ? 24 : 0 }}>
      <div
        style={{
          fontSize: 28,
          marginRight: 10,
          position: 'relative',
          bottom: 5,
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
            marginBottom: 4,
          }}
        >
          <div style={{ fontWeight: 500, fontSize: 18 }}>
            <a rel="noopener noreferrer" target="_blank" href={href}>
              {company}
            </a>
          </div>
          <div style={{ color: '#6c757d', position: 'relative', top: 2 }}>{date}</div>
        </div>
        <div
          style={{
            textTransform: 'uppercase',
            fontSize: 18,
            color: '#4c5867',
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          {position}
        </div>
        {description && (
          <div
            style={{
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#6c757d',
              fontSize: 12,
              marginBottom: 14,
            }}
          >
            {description}
          </div>
        )}
        {data.map((item, i) => (
          <div
            style={{
              marginTop: 4,
              lineHeight: 1.4,
              textAlign: 'justify',
              textJustify: 'inter-word',
              marginBottom: i + 1 === data.length ? 0 : 10,
            }}
            key={`company-data-${i}`}
          >
            - {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
