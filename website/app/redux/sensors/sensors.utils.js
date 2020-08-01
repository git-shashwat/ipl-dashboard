import _ from 'lodash';

export const filterSensorDataByTag = (data, tag) => {
    const filteredRecords = {
        labels: [],
        data: []
    };

    data.forEach(({ record, timestamp }) => {
        const dateObj = new Date(timestamp * 1000);
        const utcString = dateObj.toUTCString();
        filteredRecords.labels.push(utcString);
        filteredRecords.data.push(record[tag].data.toFixed(2));
    })

    return filteredRecords;
};

export const filterCropScoreByTag = (data, tag) => {
    const filteredRecords = {
        // labels: [],
        temperatureScores: [],
        humidityScores: [],
        lightScores: [],
        cumulativeScores: []
    };

    _.filter(data, { record: { crop: tag } }).forEach(({ temperature, light, humidity }) => {
        filteredRecords.temperatureScores.push(temperature);
        filteredRecords.humidityScores.push(humidity);
        filteredRecords.lightScores.push(light);
        filteredRecords.cumulativeScores.push(((temperature+humidity+light)/300).toFixed(2));
    })

    return filteredRecords;
}