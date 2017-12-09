> The CS:GO CLI.  

See CS:GO teams information (players, map statistics, results) and last matches results.  
Best CLI tool for those who are both **CS:GO fans** and **Developers**.  

All data comes from [hltv.org](https://www.hltv.org/).  
Using unofficial HLTV Node.js API [HLTV](https://github.com/gigobyte/HLTV)  

## Install

To use cs-go, make sure that you have [Node](https://nodejs.org/) version 6.0.0 or higher.

```
$ npm install -g cs-go
```

## Usage

`cs-go` provides two commands.

1. teams
2. results

### Teams

List teams ordered by HLTV.org rank.  
You can choose a team to get the following information:

- Players info
- Map win statistics
- Recent results

```
$ cs-go teams
```

### Results

Show the last matches results from HLTV.org.

#### Options

##### `-l <limit>` or `--limit <limit>`

Enter a specific number to limit the quantity of matches results.  
If you don't specify the option, the limit by default is 20.

```
$ cs-go results -l 30
```

## Development

To run `cs-go` on your local computer, following this step-by-step instruction:

```
$ git clone https://github.com/lucaspalencia/cs-go.git
$ cd cs-go
$ npm i
$ NODE_ENV=development node bin/cli.js <command>
```

## Inspired on:
 - [nba-go](https://github.com/xxhomey19/nba-go)
 - [HLTV](https://github.com/gigobyte/HLTV)

## License

MIT
