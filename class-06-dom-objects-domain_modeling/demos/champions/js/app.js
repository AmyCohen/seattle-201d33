// // Will be <li>
// var liEl = document.createElement('li');
//     liEl.textContent = "Hello World from app.js";

// // Should be <ul id="stuff">
// var ulEl = document.getElementById('stuff');
//     ulEl.appendChild(liEl);

var years = [2017,2016,2015,2014,2013,2012];

var nfl = {
    leagueName: "NFL",
    sport: "Football",
    numberOfPlayers: 11,
    champions: ['EAGLES', 'Patriots', 'Broncos', 'Patriots', 'Seahawks'],
    showChampions: function() {
        // Iterate the "champions" property to get each team's name
            // createElement for each one
            // add the content
            // append it to #nfl
    
        var nflContainer = document.getElementById('nfl');
    
        for( var i=0;  i < this.champions.length; i++ ) {
    
            var teamElement = document.createElement('li');
                teamElement.textContent = years[i] + ": " + this.champions[i];
            
            nflContainer.appendChild(teamElement);
        }
    }
};


var nba = {
    leagueName: "NBA",
    sport: "Basketball",
    numberOfPlayers: 11,
    champions: ['Warriors', 'Cavs', 'Warriors', 'Spurs', 'Heat'],
    showChampions: function() {
    
        var nbaContainer = document.getElementById('nba');
    
        for( var i=0;  i < this.champions.length; i++ ) {
    
            var teamElement = document.createElement('li');
                teamElement.textContent = years[i] + ": " + this.champions[i];
            
            nbaContainer.appendChild(teamElement);
        }
    }
};


nfl.champions.push('Nobody Cares');

nfl.showChampions();
nba.showChampions();
