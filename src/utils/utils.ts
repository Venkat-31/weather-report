export function getNextSevenDays(): string[] {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const next7Days = [];
    for (let i = 0; i < 8; i++) {
        const date = new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000);
        // const currentDate = date.getDate();
        next7Days.push(`${date.getDate()}/${date.getMonth() + 1} - ${days[date.getDay()]}`);
    }
    return next7Days;
}

//unit conversion
export function kelvinToCelcius(num: number) {
    return Math.round(num - 273.15);
}

export function celciusToFahrenheit(c: number) {
    return Math.round(c * (9 / 5) + 32);
}

export function fahrenheitToCelcius(f: number) {
    return Math.round(((f - 32) * 5) / 9);
}

export function kMToMile(n: number) {
    return Math.round(n / 1.60934);
}

export function mileToKM(n: number) {
    return Math.round(n * 1.60934);
}
