<p align=center>
<img src="https://user-images.githubusercontent.com/7226038/33856044-fd5fb8d8-dead-11e7-988f-84e08eb8f60f.jpg">
</p>  

<p align=center>
<a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.0-green.svg"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>  

> The CS:GO CLI.  

See CS:GO teams information (players, map statistics, results), live/next matches, last matches results and live streams.  
Best CLI tool for those who are both **CS:GO fans** and **Developers**.  

All data comes from [hltv.org](https://www.hltv.org/).  
Using unofficial HLTV Node.js API [HLTV](https://github.com/gigobyte/HLTV)  

## Install

To use cs-go, make sure that you have [Node](https://nodejs.org/) version 6.0.0 or higher.

[![NPM CS-GO](https://nodei.co/npm/cs-go.png)](https://nodei.co/npm/cs-go/)

## Usage

`cs-go` provides four commands.

1. teams
2. matches
3. results
4. streams

### Teams

List teams ordered by HLTV.org rank.  
You can choose a team to get the following information:

- Players info
- Map win statistics
- Recent results

```
$ cs-go teams
```

![cs-go teams](https://user-images.githubusercontent.com/7226038/33832684-3183e76e-de64-11e7-9c60-c11bfe1faba4.png)

![cs-go teams](https://user-images.githubusercontent.com/7226038/33832683-3165e7aa-de64-11e7-8fd8-2ef298368861.png)

### Matches

List live/next matches by HLTV.org.  
You can choose a matche to get the following information:

- Event / Format / Team players
- Vetoes
- Maps results
- Streams
- Last head to head matches

```
$ cs-go matches
```

### Results

Show the last matches results from HLTV.org.

#### Options

##### `-l <limit>` or `--limit <limit>`

Enter a specific number to limit the quantity of matches results.  
If you don't specify the option, the limit by default is 20.

```
$ cs-go results -l 10
```

![cs-go results](https://user-images.githubusercontent.com/7226038/35183319-349531a2-fdcb-11e7-9029-9336ed722d54.png)

### Streams

Show live streams from HLTV.org.

```
$ cs-go streams
```

![cs-go streams](https://user-images.githubusercontent.com/7226038/34922556-baba88e2-f978-11e7-8787-13fff02170a5.png)

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
