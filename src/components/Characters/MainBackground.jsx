import mainBack from "../../assets/mainBack.png";

function MainBackground() {
    return (
        <div className="flex w-full h-full items-start justify-center">
            <img 
                src={mainBack} 
                alt="background rick y morty" 
            />
        </div>
    );
}

export default MainBackground;