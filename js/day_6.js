var input = require('fs').readFileSync('../res/day_6').toString();

var Command = {
    ON: 'on',
    OFF: 'off',
    TOGGLE: 'toggle'
};

function parseCommand(line) {
    if (line.match('turn on')) {
        return Command.ON;
    } 
    if (line.match('turn off')) {
        return Command.OFF;
    } 
    if (line.match('toggle')) {
        return Command.TOGGLE;
    }
}

function parseCoords(line) {
    return line.match(/\d+/g).map(function(m) {
        return Number(m);
    });
}

function createGrid(size) {
    var grid = new Array(size);
    for (var i = 0; i < size; i++) {
        grid[i] = new Array(size).fill(0);
    }
    return grid;
}

function doAction(grid, coords, action) {
    for (var x = coords[0]; x <= coords[2]; x++) {
        for (var y = coords[1]; y <= coords[3]; y++) {
            grid[x][y] = action(grid[x][y]);
        }
    }
}

function part1() {
    var grid = createGrid(1000);
    input.split('\n').forEach(function(line) {
        var coords = parseCoords(line);
        var action;
        switch (parseCommand(line)) {
            case Command.ON:
                action = function() { return 1; };
                break;
            case Command.OFF:
                action = function() { return 0; };
                break;
            case Command.TOGGLE:
                action = function(value) { return (value + 1)  % 2; };
            default:
                // nothing
        }
        doAction(grid, coords, action);
    });
    var answer = grid.reduce(function(t1, row) {
        return row.reduce(function(t2, value) {
            return t2 + value;
        }, t1);
    }, 0);
    
    console.log('Part 1:', answer);
};

function part2() {
    var grid = createGrid(1000);
    input.split('\n').forEach(function(line) {
        var coords = parseCoords(line);
        var action;
        switch (parseCommand(line)) {
            case Command.ON:
                action = function(value) { return 1 + value; };
                break;
            case Command.OFF:
                action = function(value) { return Math.max(value - 1, 0); };
                break;
            case Command.TOGGLE:
                action = function(value) { return value + 2; };
            default:
                // nothing
        }
        doAction(grid, coords, action);
    });
    var answer = grid.reduce(function(t1, row) {
        return row.reduce(function(t2, value) {
            return t2 + value;
        }, t1);
    }, 0);
    
    console.log('Part 2:', answer);
};
    
   

part1();
part2();