/** Utility bar korporat — lokasi, email, open-to-work, WhatsApp. */
export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="utility-inner">
        <div className="utility-group">
          <span className="utility-item"><i className="bi bi-geo-alt" aria-hidden="true"></i> Depok, Jawa Barat</span>
          <span className="utility-item"><a href="mailto:aripstrike@gmail.com"><i className="bi bi-envelope" aria-hidden="true"></i> aripstrike@gmail.com</a></span>
        </div>
        <div className="utility-group">
          <span className="utility-open">Open to Work</span>
          <span className="utility-item">
            <a href="https://wa.me/6285817048266" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" aria-hidden="true"></i> 0858-1704-8266
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
