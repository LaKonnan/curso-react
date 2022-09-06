

export const ElementoGif = ({ titulo, enlace, id }) => {
  return (
    <div className="card">
        <img src={ enlace } alt={ titulo } />
        <p>{ titulo }</p>
    </div>
  )
}
