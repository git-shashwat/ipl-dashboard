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

    // RCB hope
    const rcbHopeCountSeason = _(
        matches
        .filter(match => match.winner === "Royal Challengers Bangalore")
    )
    .groupBy('season')
    .value();

    let rcbHopeCountSeasonArr = Object.keys(rcbHopeCountSeason).map(season => {
        let rcbHopeCount = rcbHopeCountSeason[season].length;
        return rcbHopeCount;
    });

    stats.rcb_hope_per = rcbHopeCountSeasonArr;

    // Max player of match
    const maxPMCountSeason = {};
    matches.forEach(match => {
        if(!maxPMCountSeason[match.player_of_match]) {
            maxPMCountSeason[match.player_of_match] = 1;
        } else {
            maxPMCountSeason[match.player_of_match]++;
        }
    })

    const maxPMCountSeasonArr = Object.keys(maxPMCountSeason).map(player => ({ player, count: maxPMCountSeason[player]}));
    const maxPMCount = _.maxBy(maxPMCountSeasonArr, player => player.count);

    stats.max_pm_count = maxPMCount;

    // Best batting team
    const bestBattingPerf = {};
    matches.forEach(match => {
        if (match.win_by_wickets !== 0) {
            if(!bestBattingPerf[match.winner]) {
                bestBattingPerf[match.winner] = 1;
            } else {
                bestBattingPerf[match.winner]++;
            }
        }
    })

    const bestBattingPerfArr = Object.keys(bestBattingPerf).map(team => ({ team, count: bestBattingPerf[team]}));
    const bestBattingTeam = _.maxBy(bestBattingPerfArr, team => team.count);

    stats.best_batting_team = bestBattingTeam;

    // Best bowling team
    const bestBowlingPerf = {};
    matches.forEach(match => {
        if (match.win_by_runs !== 0) {
            if(!bestBowlingPerf[match.winner]) {
                bestBowlingPerf[match.winner] = 1;
            } else {
                bestBowlingPerf[match.winner]++;
            }
        }
    })

    const bestBowlingPerfArr = Object.keys(bestBowlingPerf).map(team => ({ team, count: bestBowlingPerf[team]}));
    const bestBowlingTeam = _.maxBy(bestBowlingPerfArr, team => team.count);

    stats.best_bowling_team = bestBowlingTeam;

    // spirit of delhi
    const delhiDLPerfSeason = {};
    matches.forEach(match => delhiDLPerfSeason[match.season] = 0);

    matches
    .filter(match => match.dl_applied)
    .forEach(match => {
        if (match.winner === "Delhi Daredevils") {
            delhiDLPerfSeason[match.season]++;
        }
    });

    let delhiDLPerfSeasonArr = Object.keys(delhiDLPerfSeason).map(season => {
        const delhiDLPerf = delhiDLPerfSeason[season];
        return delhiDLPerf;
    });

    console.log(delhiDLPerfSeasonArr)
    stats.dd_dl_perf = delhiDLPerfSeasonArr;

    return stats;
};