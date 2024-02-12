export const Weather = ({ city, country }) => {
    return (
        <div className={'mt-20 flex items-center justify-center gap-36 bg-black text-white max-w-3xl mx-auto '}>
            <div >
                <p className={'font-bold text-xl'}>City: {city}</p>
                <p className={''}>Country: {country}</p>
            </div>
            <div>
                <img src={'public/icons/01d.png'} alt={'weather'} />
            </div>
        </div>
    );
};
