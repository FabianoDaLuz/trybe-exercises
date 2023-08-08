export type ForecastType = { 
    weekday: string;
    date: string;
    temp: string;
    image: string;
    weather: string;
};

export const forecastList: ForecastType[] = [
{
    weekday: 'Monday',
    date: 'JAN 1',
    temp: '25°',
    image: 'https://raw.githubusercontent.com/betrybe/images/main/weather/cloudy-day-3.svg',
    weather: 'Cloudy',
}
]