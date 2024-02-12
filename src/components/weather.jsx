export const Weather = ({city, country}) => {
    return (
        <div>
            <div className={'mt-20 flex items-center justify-center gap-36 bg-black text-white max-w-3xl mx-auto '}>
                <div>
                    <p className={'font-bold text-xl'}>City: {city}</p>
                    <p className={''}>Country: {country}</p>
                </div>
                <div>
                    <img src={'public/icons/01d.png'} alt={'weather'}/>
                </div>
            </div>

        {/*    <div>*/}
        {/*        <div className="bottom">*/}
        {/*            <p className="temperature">{Math.round(data.main.temp)}°C</p>*/}
        {/*            <div className="details">*/}
        {/*                <div className="parameter-row">*/}
        {/*                    <span className="parameter-label">Details</span>*/}
        {/*                </div>*/}
        {/*                <div className="parameter-row">*/}
        {/*                    <span className="parameter-label">Feels like</span>*/}
        {/*                    <span className="parameter-value">*/}
        {/*      {Math.round(data.main.feels_like)}°C*/}
        {/*    </span>*/}
        {/*                </div>*/}
        {/*                <div className="parameter-row">*/}
        {/*                    <span className="parameter-label">Wind</span>*/}
        {/*                    <span className="parameter-value">{data.wind.speed} m/s</span>*/}
        {/*                </div>*/}
        {/*                <div className="parameter-row">*/}
        {/*                    <span className="parameter-label">Humidity</span>*/}
        {/*                    <span className="parameter-value">{data.main.humidity}%</span>*/}
        {/*                </div>*/}
        {/*                <div className="parameter-row">*/}
        {/*                    <span className="parameter-label">Pressure</span>*/}
        {/*                    <span className="parameter-value">{data.main.pressure} hPa</span>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        </div>

    );
};
