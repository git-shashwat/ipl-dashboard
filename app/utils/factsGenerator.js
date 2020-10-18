import _ from 'lodash';

export default matches => {
    const facts = [];
    const matchesWonByCSK = _.filter(matches, (match) => match.winner === "Chennai Super Kings")

    // Biggest win by runs
    const biggestWinByRuns = _.maxBy(matchesWonByCSK, match => match.win_by_runs);
    const againstTeam = biggestWinByRuns.team1 === "Chennai Super Kings" ? biggestWinByRuns.team2 : biggestWinByRuns.team1;
    facts.push(`CSK's best defense game was a win by ${biggestWinByRuns.win_by_runs} runs in ${biggestWinByRuns.season} against ${againstTeam}`);

    // Most lucky season
    let luckiestSeason = _(
        matches
        .filter(match => match.toss_winner === "Chennai Super Kings")
    )
    .groupBy('season')
    .map((match, index) => {
        let obj = {};
        obj[index] = _.countBy(match, 'toss_winner')
        return obj;
    }).value();

    let luckiestSeasonArr = luckiestSeason.map(season => {
        let year = Object.keys(season)[0];
        let tossWins = season[year]["Chennai Super Kings"];
        return ({ year, tossWins });
    });
    
    luckiestSeason = _.maxBy(luckiestSeasonArr, season => season.tossWins);
    facts.push(`CSK was most lucky in season ${luckiestSeason.year} with ${luckiestSeason.tossWins} toss wins in 14 matches!`);

    // Most unlucky umpire
    const unluckyUmpireObj = {};
    matches.forEach(match => {
        if ((match.team1 === "Chennai Super Kings" || match.team2 === "Chennai Super Kings") && (match.winner !== "Chennai Super Kings")) {
            if(!unluckyUmpireObj[match.umpire1]) {
                unluckyUmpireObj[match.umpire1] = 1;
            } else {
                unluckyUmpireObj[match.umpire1]++;
            }

            if(!unluckyUmpireObj[match.umpire2]) {
                unluckyUmpireObj[match.umpire2] = 1;
            } else {
                unluckyUmpireObj[match.umpire2]++;
            }
        }
    });

    const unluckyUmpireArr = Object.keys(unluckyUmpireObj).map(umpire => ({ umpire, count: unluckyUmpireObj[umpire] }));
    const unluckyUmpire = _.maxBy(unluckyUmpireArr, umpire => umpire.count);
    facts.push(`CSK lost the most (${unluckyUmpire.count}) matches during ${unluckyUmpire.umpire}'s umpiring 😔`);

    return facts;
}