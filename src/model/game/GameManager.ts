import Game from '../../model/game/Game';
import StorePlatformMetadata from '../../model/game/StorePlatformMetadata';
import { StorePlatform } from '../../model/game/StorePlatform';
import { GameSelectionDisplayMode } from '../../model/game/GameSelectionDisplayMode';
import { GameInstanceType } from '../../model/game/GameInstanceType';
import { PackageLoader } from '../../model/installing/PackageLoader';
import PathResolver from '../../r2mm/manager/PathResolver';
import FileUtils from '../../utils/FileUtils';
import * as path from 'path';

export default class GameManager {

    private static _activeGame: Game;

    private static _gameList = [
        new Game('Risk of Rain 2', 'RiskOfRain2', 'RiskOfRain2',
            'Risk of Rain 2', ['Risk of Rain 2.exe'], 'Risk of Rain 2_Data',
            'https://thunderstore.io/api/v1/package/', 'riskofrain2', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "632360"),
                new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "4b3dcc5723454a47a9112d8fe8fd5f5c"),
            ], "RiskOfRain2.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["ROR2"]),

        new Game('Thunderstore Dev', 'ThunderstoreDev', 'ThunderstoreBeta',
            'Risk of Rain 2', ['Risk of Rain 2.exe'], 'Risk of Rain 2_Data',
            'https://thunderstore.dev/api/v1/package/', 'riskofrain2', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "632360")], "ThunderstoreBeta.jpg",
            GameSelectionDisplayMode.HIDDEN, GameInstanceType.GAME, PackageLoader.BEPINEX, ["TS Dev"]),

        new Game('Risk of Rain 2 Dedicated Server', 'RiskOfRain2', 'RiskOfRain2Server',
            'Risk of Rain 2 Dedicated Server', ['Risk of Rain 2.exe'], 'Risk of Rain 2_Data',
            'https://thunderstore.io/api/v1/package/', 'riskofrain2', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1180760")], "RiskOfRain2.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.SERVER, PackageLoader.BEPINEX, ["ROR2"]),

        new Game('Dyson Sphere Program', 'DysonSphereProgram', 'DysonSphereProgram',
            'Dyson Sphere Program', ['DSPGAME.exe'], 'DSPGAME_Data',
            'https://dsp.thunderstore.io/api/v1/package/', 'dsp', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "1366540"),
                new StorePlatformMetadata(StorePlatform.XBOX_GAME_PASS, "GameraGame.DysonSphereProgram")
            ], "DysonSphereProgram.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["DSP"]),

        new Game('Valheim', 'Valheim', 'Valheim',
            'Valheim', ['valheim.exe', 'valheim.x86_64'], 'valheim_Data',
            'https://valheim.thunderstore.io/api/v1/package/', 'valheim', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "892970"),
                new StorePlatformMetadata(StorePlatform.XBOX_GAME_PASS, "CoffeeStainStudios.Valheim")
            ], "Valheim.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Valheim Dedicated Server', 'Valheim', 'ValheimServer',
            'Valheim dedicated server', ['valheim_server.exe', 'valheim_server.x86_64'], 'valheim_server_Data',
            'https://valheim.thunderstore.io/api/v1/package/', 'valheim', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "896660")
            ], "Valheim.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.SERVER, PackageLoader.BEPINEX),

        new Game('GTFO', 'GTFO', 'GTFO',
            'GTFO', ['GTFO.exe'], 'GTFO_Data',
            'https://gtfo.thunderstore.io/api/v1/package/', 'gtfo', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "493520")], "GTFO.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Outward', 'Outward', 'Outward',
            'Outward', ['Outward.exe'], 'Outward_Data',
            'https://outward.thunderstore.io/api/v1/package/', 'outward', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "794260"),
                new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Viola"),
                new StorePlatformMetadata(StorePlatform.OTHER)
            ], "Outward.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Outward Definitive', 'OutwardDe', 'OutwardDe',
            'Outward/Outward_Defed', ['Outward Definitive Edition.exe'], 'Outward Definitive Edition_Data',
            'https://outward.thunderstore.io/api/v1/package/', 'outward', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "1758860"),
                new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "f07a51af8ac845ea96f792fb485e04a3"),
                new StorePlatformMetadata(StorePlatform.OTHER)
            ], "OutwardDe.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('TaleSpire', 'TaleSpire', 'TaleSpire',
            'TaleSpire', ['TaleSpire.exe'], 'TaleSpire_Data',
            'https://talespire.thunderstore.io/api/v1/package/', 'talespire', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "720620")], "TaleSpire.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["TS"]),

        new Game("H3VR", "H3VR", "H3VR",
            "H3VR", ["h3vr.exe"], "h3vr_Data",
            "https://h3vr.thunderstore.io/api/v1/package/", 'h3vr', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "450540")], "H3VR.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["Hot Dogs, Horseshoes & Hand Grenades", "Hot Dogs, Horseshoes and Hand Grenades"]),

        new Game("ROUNDS", "ROUNDS", "ROUNDS",
            "ROUNDS", ["Rounds.exe"], "Rounds_Data",
            "https://rounds.thunderstore.io/api/v1/package/", 'rounds', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1557740")], "ROUNDS.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("Mechanica", "Mechanica", "Mechanica",
            "Mechanica", ["Mechanica.exe"], "Mechanica_Data",
            "https://mechanica.thunderstore.io/api/v1/package/", 'mechanica', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1226990")], "Mechanica.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("Muck", "Muck", "Muck",
            "Muck", ["Muck.exe", "Muck.x86_64"], "Muck_Data",
            "https://muck.thunderstore.io/api/v1/package/", 'muck', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1625450")], "Muck.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("BONEWORKS", "BONEWORKS", "BONEWORKS",
            path.join("BONEWORKS", "BONEWORKS"), ["BONEWORKS.exe", "Boneworks_Oculus_Windows64.exe"], "BONEWORKS_Data",
            "https://boneworks.thunderstore.io/api/v1/package/", 'boneworks', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "823500"), new StorePlatformMetadata(StorePlatform.OCULUS_STORE)], "BONEWORKS.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.MELON_LOADER, ["BW"]),

        new Game("Lethal League Blaze", "LethalLeagueBlaze", "LethalLeagueBlaze",
            "LLBlaze", ["LLBlaze.exe", "LLBlaze.x86_64", "LLBlaze.x86", "LLBlaze.app"], "LLBlaze_Data",
            "https://lethal-league-blaze.thunderstore.io/api/v1/package/", 'lethal-league-blaze', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "553310")], "LethalLeagueBlaze.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["LLB"]),

        new Game("Timberborn", "Timberborn", "Timberborn",
            "Timberborn", ["Timberborn.exe"], "Timberborn_Data",
            "https://timberborn.thunderstore.io/api/v1/package/", 'timberborn', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1062090"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "972a4ca2631e43b4ba7bc3b7586ad8c4"), new StorePlatformMetadata(StorePlatform.OTHER)], "Timberborn.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["TB"]),

        new Game("TABS", "TABS", "TotallyAccurateBattleSimulator",
            "Totally Accurate Battle Simulator", ["TotallyAccurateBattleSimulator.exe"], "TotallyAccurateBattleSimulator_Data",
            "https://totally-accurate-battle-simulator.thunderstore.io/api/v1/package/", 'totally-accurate-battle-simulator', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "508440"),
                new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Driftfish"),
                new StorePlatformMetadata(StorePlatform.XBOX_GAME_PASS, "LandfallGames.TotallyAccurateBattleSimulator")
            ], "TotallyAccurateBattleSimulator.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["Totally Accurate Battle Simulator"]),

        new Game("Nickelodeon All‑Star Brawl", "NASB", "NASB",
            "Nickelodeon All-Star Brawl", ["Nickelodeon All-Star Brawl.exe"], "Nickelodeon All-Star Brawl_Data",
            "https://nasb.thunderstore.io/api/v1/package/", 'nasb', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1414850")], "NASB.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["Nickelodeon All-Star Brawl", "NASB"]),

        new Game("Inscryption", "Inscryption", "Inscryption",
            "Inscryption", ["Inscryption.exe"], "Inscryption_Data",
            "https://inscryption.thunderstore.io/api/v1/package/", 'inscryption', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1092790"), new StorePlatformMetadata(StorePlatform.OTHER)], "Inscryption.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game("Starsand", "Starsand", "Starsand",
            "Starsand", ["Starsand.exe"], "Starsand_Data",
            "https://starsand.thunderstore.io/api/v1/package/", 'starsand', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1380220"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "a774278c0813447c96a76b053cbf73ff")], "Starsand.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX),

        new Game('Cats are Liquid - A Better Place', 'CatsAreLiquidABP', 'CatsAreLiquidABP',
            'Cats are Liquid - A Better Place', ['CaL-ABP-Windows.exe', "CaL-ABP-Linux.x86_64", 'CaL-ABP-macOS.app'], 'CaL-ABP-Windows_Data',
            'https://cats-are-liquid.thunderstore.io/api/v1/package/', 'cats-are-liquid', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "1188080"),
                new StorePlatformMetadata(StorePlatform.OTHER)
            ], "CatsAreLiquidABP.jpg", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX,
            ['calabp', 'cal', 'abp']),


        new Game('Potion Craft', 'PotionCraft', 'PotionCraft',
            'Potion Craft', ['Potion Craft.exe'], 'Potion Craft_Data',
            'https://potion-craft.thunderstore.io/api/v1/package/', 'potion-craft', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1210320")], 'PotionCraft.jpg',
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX,
            ['pc']),

        new Game('Nearly Dead', 'NearlyDead', 'NearlyDead',
            'Nearly Dead', ['Nearly Dead.exe'], 'Nearly Dead_Data',
            'https://nearly-dead.thunderstore.io/api/v1/package/', 'nearly-dead', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1268900")], 'NearlyDead.png',
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX,
            ['nd']),

        new Game('AGAINST', 'AGAINST', 'AGAINST',
            'AGAINST_steam', ['AGAINST.exe'], "AGAINST_Data",
            'https://against.thunderstore.io/api/v1/package/', 'against', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1584840")], "AGAINST.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game('Rogue Tower', 'RogueTower', 'RogueTower',
            'Rogue Tower', ['Rogue Tower.exe'], "Rogue Tower_Data",
            'https://rogue-tower.thunderstore.io/api/v1/package/', 'rogue-tower', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1843760")], "RogueTower.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ['rt']),

        new Game('House of the Dying Sun', 'HOTDS', 'HOTDS',
            'DyingSun', ['dyingsun.exe'], 'dyingsun_Data',
            'https://hotds.thunderstore.io/api/v1/package/', 'hotds', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, '283160')], "HOTDS.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ['hotds']),

        new Game('For The King', 'ForTheKing', 'ForTheKing',
            'For The King', ['FTK.exe'], 'FTK_Data',
            'https://for-the-king.thunderstore.io/api/v1/package/', 'for-the-king', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "527230"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Discus")], "ForTheKing.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["ftk"]),

        new Game('Subnautica', 'Subnautica', 'Subnautica',
            'Subnautica', ['Subnautica.exe'], 'Subnautica_Data',
            'https://subnautica.thunderstore.io/api/v1/package/', 'subnautica', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, "264710"),
                new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Jaguar"),
                new StorePlatformMetadata(StorePlatform.XBOX_GAME_PASS, "UnknownWorldsEntertainmen.GAMEPREVIEWSubnautica"),
            ], "Subnautica.png", GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game('Subnautica: Below Zero', 'SubnauticaBZ', 'SubnauticaBZ',
            'SubnauticaZero', ['SubnauticaZero.exe'], 'SubnauticaZero_Data',
            'https://belowzero.thunderstore.io/api/v1/package/', 'belowzero', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [
                new StorePlatformMetadata(StorePlatform.STEAM, '848450'),
                new StorePlatformMetadata(StorePlatform.XBOX_GAME_PASS, "UnknownWorldsEntertainmen.SubnauticaBelowZero"),
            ], 'SubnauticaBelowZero.png', GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["bz", "sbz", "s:bz"]),

        new Game("Core Keeper", "CoreKeeper", "CoreKeeper",
            "Core Keeper", ["CoreKeeper.exe"], "CoreKeeper_Data",
            'https://core-keeper.thunderstore.io/api/v1/package/', 'core-keeper', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM, "1621690")], "CoreKeeper.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["ck"]),

        new Game("Titanfall 2", "Titanfall2", "Titanfall2",
            "Titanfall2", ["NorthstarLauncher.exe", "Titanfall2.exe"], "",
            'https://northstar.thunderstore.io/api/v1/package/', 'northstar', 'https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md',
            [new StorePlatformMetadata(StorePlatform.STEAM_DIRECT, "1237970"), new StorePlatformMetadata(StorePlatform.ORIGIN, "")], "Titanfall2.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.NORTHSTAR, ["northstar", "ns", "tf2", "tf|2"]),

        new Game("Peglin", "Peglin", "Peglin",
            "Peglin", ["Peglin.exe"], "Peglin_Data",
            "https://thunderstore.io/c/peglin/api/v1/package/", 'peglin', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1296610"), new StorePlatformMetadata(StorePlatform.OTHER)], "Peglin.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game("V Rising", "VRising", "VRising",
            "VRising", ["VRising.exe"], "VRising_Data",
            "https://thunderstore.io/c/v-rising/api/v1/package/", 'v-rising', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1604030")], "VRising.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["vrising"]),

        new Game("Hard Bullet", "HardBullet", "HardBullet",
            "Hard Bullet", ["Hard Bullet.exe"], "Hard Bullet_Data",
            "https://thunderstore.io/c/hard-bullet/api/v1/package/", 'hard-bullet', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1294760")], "HardBullet.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.MELON_LOADER, ["hb"]),
        new Game("20 Minutes Till Dawn", "20MinutesTillDawn", "20MinutesTillDawn",
            "20MinuteTillDawn", ["MinutesTillDawn.exe"], "MinutesTillDawn_Data",
            "https://thunderstore.io/c/20-minutes-till-dawn/api/v1/package/", '20-minutes-till-dawn', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1966900")], "20MinutesTillDawn.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["mtd", "20mtd"]),

        new Game("Green Hell VR", "GreenHellVR", "GreenHellVR",
            "Green Hell VR", ["GHVR.exe"], "GHVR_Data",
            "https://thunderstore.io/c/green-hell-vr/api/v1/package/", 'green-hell-vr', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1782330"), new StorePlatformMetadata(StorePlatform.OCULUS_STORE)], "GreenHellVR.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["ghvr"]),

        new Game("VTOL VR", "VTOL_VR", "VTOL_VR",
            "VTOL VR", ["VTOLVR.exe"], "VTOLVR_Data",
            "https://thunderstore.io/c/vtol-vr/api/v1/package/", 'vtol-vr', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "667970")], "VtolVR.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game("Backpack Hero", "BackpackHero", "BackpackHero",
            "Backpack Hero", ["Backpack Hero.exe", "linux.x86_64"], "Backpack Hero_Data",
            "https://thunderstore.io/c/backpack-hero/api/v1/package/", 'backpack-hero', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1970580")], "BackpackHero.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.MELON_LOADER, ["bh", "farlands"]),

        new Game("Stacklands", "Stacklands", "Stacklands",
            "Stacklands", ["Stacklands.exe"], "Stacklands_Data",
            "https://thunderstore.io/c/stacklands/api/v1/package/", 'stacklands', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1948280")], "Stacklands.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game("Enter the Gungeon", "ETG", "EnterTheGungeon",
            "Enter the Gungeon", ["EtG.exe"], "EtG_Data",
            "https://thunderstore.io/c/enter-the-gungeon/api/v1/package/", 'enter-the-gungeon', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "311690"), new StorePlatformMetadata(StorePlatform.EPIC_GAMES_STORE, "Garlic"), new StorePlatformMetadata(StorePlatform.OTHER)], "EnterTheGungeon.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["etg"]),

        new Game("Ravenfield", "Ravenfield", "Ravenfield",
            "Ravenfield", ["ravenfield.exe"], "ravenfield_Data",
            "https://thunderstore.io/c/ravenfield/api/v1/package/", 'ravenfield', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "636480")], "Ravenfield.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["rf"]),

        new Game("Aloft", "Aloft", "Aloft",
            "Aloft Demo", ["Aloft.exe"], "Aloft_Data",
            "https://thunderstore.io/c/aloft/api/v1/package/", 'aloft', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "2051980")], "Aloft.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game("Cult of the Lamb", "COTL", "COTL",
            "Cult of the Lamb", ["Cult Of The Lamb.exe"], "Cult Of The Lamb_Data",
            "https://thunderstore.io/c/cult-of-the-lamb/api/v1/package/", 'cult-of-the-lamb', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1313140")], "Cotl.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["cotl"]),

        new Game("Chrono Ark", "ChronoArk", "ChronoArk",
            path.join("Chrono Ark", "x64", "Master"), ["ChronoArk.exe"], "ChronoArk_Data",
            "https://thunderstore.io/c/chrono-ark/api/v1/package/", 'chrono-ark', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1188930")], "ChronoArk.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game("BONELAB", "BONELAB", "BONELAB",
            "BONELAB", ["BONELAB_Steam_Windows64.exe", "BONELAB_Oculus_Windows64.exe"], "BONELAB_Steam_Windows64",
            "https://thunderstore.io/c/bonelab/api/v1/package/", 'bonelab', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1592190"), new StorePlatformMetadata(StorePlatform.OCULUS_STORE)], "BONELAB.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.MELON_LOADER, ["BL"]),

        new Game("Trombone Champ", "TromboneChamp", "TromboneChamp",
            "TromboneChamp", ["TromboneChamp.exe"], "TromboneChamp_Data",
            "https://thunderstore.io/c/trombone-champ/api/v1/package/", 'trombone-champ', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1059990")], "TromboneChamp.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["tc"]),

        new Game("Rogue : Genesia", "RogueGenesia", "RogueGenesia",
            "Rogue Genesia", ["Rogue Genesia.exe"], "Rogue Genesia_Data",
            "https://thunderstore.io/c/rogue-genesia/api/v1/package/", 'rogue-genesia', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "2067920")], "RogueGenesia.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["rg"]),

        new Game("Across the Obelisk", "AcrossTheObelisk", "AcrossTheObelisk",
            "Across the Obelisk", ["AcrossTheObelisk.exe"], "AcrossTheObelisk_Data",
            "https://thunderstore.io/c/across-the-obelisk/api/v1/package/", 'across-the-obelisk', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1385380")], "AcrossTheObelisk.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["ato", "ao"]),

        new Game("ULTRAKILL", "ULTRAKILL", "ULTRAKILL",
            "ULTRAKILL", ["ULTRAKILL.exe"], "ULTRAKILL_Data",
            "https://thunderstore.io/c/ultrakill/api/v1/package/", 'ultrakill', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1229490")], "ULTRAKILL.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["uk"]),

        new Game("Ultimate Chicken Horse", "UltimateChickenHorse", "UltimateChickenHorse",
            "Ultimate Chicken Horse", ["UltimateChickenHorse.exe"], "UltimateChickenHorse_Data",
            "https://thunderstore.io/c/ultimate-chicken-horse/api/v1/package/", 'ultimate-chicken-horse', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "386940")], "ultimate-chicken-horse.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["uch"]),

        new Game("Atrio: The Dark Wild", "AtrioTheDarkWild", "AtrioTheDarkWild",
            "Atrio The Dark Wild", ["Atrio.exe"], "Atrio_Data",
            "https://thunderstore.io/c/atrio-the-dark-wild/api/v1/package/", 'atrio-the-dark-wild', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1125390")], "atrio-the-dark-wild.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["adw"]),

        new Game("Brotato", "Brotato", "Brotato",
            "Brotato", ["Brotato.exe"], "",
            "https://thunderstore.io/c/brotato/api/v1/package/", 'brotato', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1942280")], "brotato.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.GODOT_ML, []),

        new Game("Ancient Dungeon VR", "AncientDungeonVR", "AncientDungeonVR",
            "Ancient Dungeon VR", ["Ancient_Dungeon.exe"], "Ancient_Dungeon_Data",
            "https://thunderstore.io/c/ancient-dungeon-vr/api/v1/package/", 'ancient-dungeon-vr', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1125240"), new StorePlatformMetadata(StorePlatform.OCULUS_STORE)], "ancient-dungeon-vr.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.ANCIENT_DUNGEON_VR, ["adv"]),

        new Game("RUMBLE", "RUMBLE", "RUMBLE",
            "RUMBLE", ["RUMBLE.exe"], "RUMBLE_Data",
            "https://thunderstore.io/c/rumble/api/v1/package/", 'rumble', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "890550")], "RUMBLE.png",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.MELON_LOADER, []),

        new Game("Dome Keeper", "DomeKeeper", "DomeKeeper",
            "Dome Keeper", ["domekeeper.exe"], "",
            "https://thunderstore.io/c/dome-keeper/api/v1/package/", 'dome-keeper', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1637320")], "dome-keeper.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.GODOT_ML, ["dk"]),

        new Game("Skul: The Hero Slayer", "SkulTheHeroSlayer", "SkulTheHeroSlayer",
            "Skul", ["Skul.exe"], "Skul_Data",
            "https://thunderstore.io/c/skul-the-hero-slayer/api/v1/package/", 'skul-the-hero-slayer', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1147560")], "skul-the-hero-slayer.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, []),

        new Game("Sons Of The Forest", "SonsOfTheForest", "SonsOfTheForest",
            "Sons Of The Forest", ["SonsOfTheForest.exe"], "SonsOfTheForest_Data",
            "https://thunderstore.io/c/sons-of-the-forest/api/v1/package/", 'sons-of-the-forest', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1326470")], "sons-of-the-forest.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["sotf"]),

        new Game("The Ouroboros King", "TheOuroborosKing", "TheOuroborosKing",
            "The Ouroboros King", ["The Ouroboros King.exe"], "The Ouroboros King_Data",
            "https://thunderstore.io/c/the-ouroboros-king/api/v1/package/", 'the-ouroboros-king', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "2096510")], "the-ouroboros-king.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["tok"]),

        new Game("Wrestling Empire", "WrestlingEmpire", "WrestlingEmpire",
            "Wrestling Empire", ["Wrestling Empire.exe"], "Wrestling Empire_Data",
            "https://thunderstore.io/c/wrestling-empire/api/v1/package/", 'wrestling-empire', "https://raw.githubusercontent.com/ebkr/r2modmanPlus/master/modExclusions.md",
            [new StorePlatformMetadata(StorePlatform.STEAM, "1620340")], "wrestling-empire.jpg",
            GameSelectionDisplayMode.VISIBLE, GameInstanceType.GAME, PackageLoader.BEPINEX, ["we"]),
    ];

    static get activeGame(): Game {
        return this._activeGame;
    }

    static get gameList(): Game[] {
        return [...this._gameList];
    }

    static set activeGame(game: Game) {
        this._activeGame = game;
    }

    public static async activate(game: Game, platform: StorePlatform) {
        this._activeGame = game;
        this._activeGame.setActivePlatformByStore(platform);
        PathResolver.MOD_ROOT = path.join(PathResolver.ROOT, game.internalFolderName);
        await FileUtils.ensureDirectory(PathResolver.MOD_ROOT);
    }

    // Return RiskOfRain2 game as base startup to be used for settings load.
    public static unsetGame(): Game {
        return this._gameList.find(value => value.internalFolderName === "RiskOfRain2")!;
    }

    public static findByFolderName(name?: string|null) {
        return name
            ? this._gameList.find((game) => game.internalFolderName === name)
            : undefined;
    }
}
