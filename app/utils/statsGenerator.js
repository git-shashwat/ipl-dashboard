import _ from 'lodash';

export default matches => {
    const stats = {};

    // Punjabi Trend
    const punjabiCountSeason = _(
        matches
        .filter(match => match.player_of_match.endsWith('Singh'))
    )
    .groupBy('season')
    .value();

    let punjabiCountSeasonArr = Object.keys(punjabiCountSeason).map(season => {
        let punjabiCount = punjabiCountSeason[season].length;
        return punjabiCount;
    });

    stats.punjabi_count = punjabiCountSeasonArr;

    // D/L Stat
    const dlMatchArr = matches.filter(match => (
        match.dl_applied === 1
    ));

    const dlFieldChampCount = dlMatchArr.filter(match => (
        (match.toss_decision === "field" &&
        match.toss_winner === match.winner) ||
        (match.toss_decision === "bat" &&
        match.toss_winner !== match.winner)
    )).length;

    stats.dl_field_champ_per = dlFieldChampCount / dlMatchArr.length * 100;

    return stats;
};