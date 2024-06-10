function skillList({src, skill}) {
  return (
    <span>
        <img src={src} alt="Checkmark" />
        <p>{skill}</p>                 
    </span>
  )
}

export default skillList