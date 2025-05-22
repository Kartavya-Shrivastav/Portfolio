// A reusable button component

const Button = ({text, className, id}) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();          // Stop the link from jumping instantly
                const target = document.getElementById(id);             // Find the section with ID "counter"

                if(target && id){           // Only scroll if we found the section and an ID is passed in that prevents the contact button from scrolling to the top
                    const offset = window.innerHeight * 0.15;           // Calculate how far down the page we need to scroll
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({top, behavior: "smooth"});         // Scroll smoothly to that position
                }
            }}
        
        className={`${className ?? ''} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;