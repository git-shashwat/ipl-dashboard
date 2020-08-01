export const filterSensorDataByTag = (data, tag) => {
    const filteredRecords = {
        labels: [],
        data: []
    };

    data.forEach(({ record, timestamp }) => {
        const dateObj = new Date(timestamp * 1000);
        const utcString = dateObj.toUTCString();
        filteredRecords.labels.push(utcString);
        filteredRecords.data.push(record[tag].data);
    })

    return filteredRecords;
}