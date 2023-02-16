import React from "react"

function Popup({isPopupOpen, setIsPopupOpen, errorList}) {

    function closePopup(){
        setIsPopupOpen(false)
    }

    return (
        <div className={`popup ${isPopupOpen ? "popup_is-opened" : ""}`}>
            <div className="popup_error">
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                    onClick={closePopup}>
                </button>
                <p className="popup_text">Ошибка!</p>
                <div className="error_items">
                    {errorList.map(error => <span className="error_item" key={error}>{error}</span> ) }
                </div>
            </div>
        </div>
    )
}

export default Popup
