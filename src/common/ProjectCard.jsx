// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, title, info  }) {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={src} alt={`${title} Logo`} />
        <h3>{title}</h3>
        <p>{info}</p>
    </a>
  )
}

export default ProjectCard