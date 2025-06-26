import "./imageModal.css";

function ImageModal({ imagenSrc, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={imagenSrc} alt="Expanded" />
      </div>
    </div>
  );
}

export default ImageModal;