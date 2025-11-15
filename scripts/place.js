document.addEventListener('DOMContentLoaded', function () {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind').textContent);
    const windChillSpan = document.getElementById('wind-chill');

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChillSpan.textContent = windChill;
    } else {
        windChillSpan.textContent = 'N/A';
    }

    // Update footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = document.lastModified;
});