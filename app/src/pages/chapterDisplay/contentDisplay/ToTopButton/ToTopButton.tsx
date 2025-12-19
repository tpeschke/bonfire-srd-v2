import './ToTopButton.css'

export default function ToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={scrollToTop} className='to-top-button-component'>
            <i className="fa-solid fa-up"></i>
        </button>
    )
}