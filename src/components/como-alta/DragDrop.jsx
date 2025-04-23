import './DragDrop.scss';

const DragDrop = () => {

  const handleDrop = () => {

  }

  const handleChange = () => {

  }

  const srcImagen = ''

  return (
    <div className='drop-area' onDrop={handleDrop}>
        <p>
            Subir imagen al servidor con <b>File Dialog</b> o con
            <b> drag and drop</b> dentro del area punteada.
        </p>
        <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
        <label className="drop-area-button" htmlFor="lbl-foto">
            File Dialog
        </label>
        <div className='drop-area-image'>
            <img src={srcImagen} alt="" />
        </div>
    </div>
  )
}

export default DragDrop