class Config {
    // Weather API from https://openweathermap.org/.
    get weatherAPIKey() {
        return process.env.REACT_APP_WEATHER_API_KEY;
    }

    get APIBaseUrl() {
        return 'https://api.openweathermap.org/data/2.5';
    }

    get weatherUrl() {
        return `${this.APIBaseUrl}/weather`;
    }

    get forecastUrl() {
        return `${this.APIBaseUrl}/forecast`;
    }

    get onCallUrl() {
        return `${this.APIBaseUrl}/onecall`;
    }

    get citiesFetchUrl() {
        return 'https://places-dsn.algolia.net/1/places/query';
    }
}

export const config = new Config();
