var x = [
    ["Aaron Dobson",2,0,22,"6'3''",210,33,0,4.42,113.1,120,0,"26.10%","17.70%",18.1,0,"55",171,129,null,null,null,null,null],
    ["Parris Campbell",2,0,22,"6'0''",205,32.25,0,4.31,117.2,135.5,0,"23.50%","17.90%",18.1,0,"109",95,0,0,0,0,0,0],
    ["Amari Cooper",1,0,20,"6'1''",211,31.5,0,4.42,110.6,116.1,0,"47.20%","19.20%",18.2,0,"28",18,34,22,16,22,0,0],
    ["DeAndre Hopkins",1,0,21,"6'1''",214,33.375,0,4.57,98.1,118.7,0,"39.30%","13.50%",18.2,0,"68",18,5,34,2,3,6,5],
    ["Sammy Watkins",1,0,21,"6'1''",211,32,0,4.43,109.6,120.8,0,"34.20%","13.30%",18.2,0,"33",10,54,51,38,53,71,0],
    ["Rondale Moore",2,0,21,"5'7''",181,28.25,0,4.37,91.1,135.3,0,"25.60%","31.40%",18.2,0,"",0,0,0,0,0,0,0],
    ["DJ Moore",1,0,21,"6'0''",210,31.625,0,4.42,108.5,132.2,0,"53.30%","43.60%",18.4,0,"56",15,27,0,0,0,0,0],
    ["Keenan Allen",3,0,21,"6'2''",206,32.75,0,4.76,81.4,null,0,"49.50%","16.70%",18.4,0,"21",30,6,37,4,12,8,6],
    ["James Washington",2,0,22,"5'11''",213,32.75,0,4.54,97.5,118.7,0,"33.30%","25.70%",18.4,0,"151",70,113,0,0,0,0,0],
    ["Robert Woods",2,0,21,"6'0''",201,31,0,4.51,95.8,115.5,0,"31.60%","18.50%",18.4,0,"73",53,65,69,18,17,14,18],
    ["Stefon Diggs",5,0,21,"6'0''",195,31.25,0,4.46,97.2,117,0,"36.10%","13.20%",18.6,0,"46",13,14,11,24,3,0,0],
    ["Antonio Callaway",4,0,21,"5'11''",200,31.5,0,4.41,102.9,118.3,0,"null","11.20%",18.7,0,"80",140,210,0,0,0,0,0],
    ["Corey Davis",1,0,22,"6'3''",209,33,0,4.53,102,null,0,"51.60%","36.50%",18.7,0,"84",40,81,31,0,0,0,0],
    ["N'Keal Harry",1,0,21,"6'2''",228,33,0,4.53,109.8,126.5,0,"43.90%","31.10%",18.7,0,"112",121,0,0,0,0,0,0],
    ["Tyler Boyd",2,0,21,"6'1''",197,32,0,4.58,89.5,117.3,0,"42.70%","39.80%",18.8,0,"82",102,20,26,38,0,0,0],
    ["Rashod Bateman",1,0,21,"6'0''",190,33,0,4.48,93,122.7,0,"40%","35.70%",18.8,0,"",0,0,0,0,0,0,0],
    ["Josh Doctson",1,0,23,"6'2''",202,31.875,0,4.5,99.9,135.2,0,"38.60%","24.50%",18.8,0,"132",64,90,null,null,0,0,0],
    ["Christian Kirk",2,0,21,"5'10''",201,30.375,0,4.47,96.6,117.9,0,"36.80%","26.60%",18.8,0,"54",34,58,0,0,0,0,0],
    ["John Ross",1,0,21,"5'11''",188,31.5,0,4.22,115.3,129.4,0,"34.10%","31.70%",18.8,0,"200",102,43,201,0,0,0,0],
    ["JuJu Smith-Schuster",2,0,20,"6'1''",215,32.875,0,4.54,101.2,115.3,0,"31.90%","25.80%",18.8,0,"12",8,64,24,0,0,0,0],
    ["Brandin Cooks",1,0,20,"5'10''",189,30.75,0,4.33,103.1,121.2,0,"38.90%","13.50%",18.9,0,"22",20,12,19,18,75,17,0],
    ["Tutu Atwell",2,0,21,"5'9''",155,29.25,0,4.44,75.4,114.6,0,"36.70%","31.30%",18.9,0,"",0,0,0,0,0,0,0],
    ["Miles Boykin",4,0,22,"6'4''",220,33.5,0,4.42,120,144,0,"30.10%","21.70%",18.9,0,"139",132,0,0,0,0,0,0],
    ["Allen Robinson",2,0,21,"6'2''",220,32,0,4.56,103.2,129.8,0,"37.90%","18.30%",19,0,"39",8,35,null,33,10,13,0],
    ["Mike Evans",1,0,21,"6'5''",231,35.125,0,4.53,115.7,124.2,0,"30.20%","12.30%",19,0,"14",23,3,20,10,4,16,0],
    ["Terrace Marshall",2,0,21,"6'2''",205,32.75,0,4.45,106,128.8,0,"33.40%","18.60%",19.2,0,"",0,0,0,0,0,0,0],
    ["Tre'Quan Smith",3,0,22,"6'2''",210,33.375,0,4.49,104.8,128.8,0,"33.00%","22.00%",19.2,0,"84",87,85,0,0,0,0,0],
    ["Laquon Treadwell",1,0,21,"6'2''",221,33.375,0,4.69,92.6,114.6,0,"29.00%","25.10%",19.2,0,"189",150,139,151,124,0,0,0],
    ["Justin Hunter",2,0,22,"6'4''",196,33.25,0,4.44,105,135.2,0,"27.20%","13.80%",19.3,0,"101",72,102,110,160,195,null,null],
    ["Justin Watson",5,0,22,"6'2''",215,33.75,0,4.49,107.2,130,0,"60.30%","null",19.4,0,"",0,0,0,0,0,0,0],
    ["Elijah Moore",2,0,21,"5'9''",178,30.125,0,4.4,89.8,121.6,0,"41.90%","36.70%",19.4,0,"",0,0,0,0,0,0,0],
    ["Chris Godwin",3,0,21,"6'1''",209,31.625,0,4.42,109.5,124.2,0,"34.90%","28.20%",19.5,0,"90",35,2,15,0,0,0,0],
    ["Ja'Marr Chase",1,0,21,"6'0''",201,30.75,0,4.39,106.8,135.7,0,"33.40%","21.00%",19.5,0,"",0,0,0,0,0,0,0],
    ["Nico Collins",3,0,22,"6'4''",215,34.125,0,4.5,109.2,126.3,0,"27.30%","15.60%",19.5,0,"",0,0,0,0,0,0,0],
    ["DaeSean Hamilton",4,0,23,"6'1''",203,31,0,4.57,93.1,117.7,0,"25.40%","22.90%",19.5,0,"61",117,131,0,0,0,0,0],
    ["DeVante Parker",1,0,21,"6'3''",209,33.25,0,4.45,109.5,124.6,0,"46.30%","17.30%",19.6,0,"43",56,47,124,17,42,0,0],
    ["Markus Wheaton",3,0,22,"5'11''",189,32.75,0,4.45,93.8,122.9,0,"36.00%","27.40%",19.6,0,"null",68,62,null,null,null,null,null],
    ["Jaelen Strong",3,0,21,"6'2''",217,32.5,0,4.44,113.2,132.9,0,"31.10%","16.30%",19.6,0,"121",null,null,null,null,null,0,0],
    ["JJ Acrega-Whiteside",2,0,22,"6'2''",225,33.25,0,4.54,107.4,116.8,0,"42.70%","null",19.7,0,"144",184,0,0,0,0,0,0],
    ["Davante Adams",2,0,21,"6'1''",212,32.625,0,4.56,98.1,128.7,0,"40.70%","13.60%",19.7,0,"82",63,11,9,1,5,1,0],
    ["Phillip Dorsett",1,0,22,"5'10''",185,30.25,0,4.33,100.9,123.9,0,"32.60%","20.40%",19.7,0,"136",93,139,86,68,null,0,0],
    ["DK Metcalf",2,0,21,"6'3''",228,34.875,0,4.33,133.3,135.9,0,"26.40%","16.70%",19.7,0,"45",9,0,0,0,0,0,0],
    ["Andy Isabella",2,0,22,"5'9''",188,29.75,0,4.31,103,122.6,0,"52.20%","40.00%",19.8,0,"147",136,0,0,0,0,0,0],
    ["Kenny Golladay",3,0,23,"6'4''",218,32,0,4.5,110.7,120.4,0,"41.80%","36.30%",19.8,0,"60",24,13,36,0,0,0,0],
    ["Jarvis Landry",2,0,21,"5'1''",205,31.25,0,4.65,85.3,103.5,0,"40.00%","15.90%",19.8,0,"36",17,15,5,26,22,40,0],
    ["Odell Beckham Jr.",1,0,21,"5'11''",198,32.75,0,4.43,1000,126.5,0,"34.50%","13.80%",19.8,0,"1",4,4,3,9,35,39,0],
    ["Dyami Brown",3,0,21,"6'1''",185,32.75,0,4.5,90.2,124.4,0,"31.20%","26.00%",19.8,0,"",0,0,0,0,0,0,0],
    ["Tyler Lockett",3,0,22,"5'10''",182,30,0,4.4,93.1,120.9,0,"44.20%","36.10%",19.9,0,"53",72,70,25,23,12,0,0],
    ["Courtland Sutton",2,0,22,"6'3''",218,32.375,0,4.54,105.4,122.4,0,"36.90%","27.50%",19.9,0,"75",29,null,0,0,0,0,0],
    ["Mike Williams",1,0,22,"6'4''",218,33.375,0,4.59,102.3,115.8,0,"27.00%","22.30%",19.9,0,"164",46,51,52,0,0,0,0],
    ["Breshad Perriman",1,0,21,"6'2''",212,32,0,4.3,125.7,125.6,0,"36.60%","11.30%",20,0,"null",91,182,108,62,80,0,0],
    ["Anthony Schwartz",3,0,21,"6'0''",186,31.5,0,4.32,105.3,115.9,0,"28.20%","26.40%",20,0,"",0,0,0,0,0,0,0],
    ["DJ Chark",2,0,21,"6'3''",199,32.375,0,4.34,115.3,132.5,0,"25.30%","22.60%",20,0,"159",20,43,0,0,0,0,0],
    ["Curtis Samuel",2,0,21,"5'11''",196,31.25,0,4.31,110.5,122.4,0,"29.00%","23.70%",20.1,0,"128",36,52,26,0,0,0,0],
    ["Corey Coleman",1,0,22,"5'11''",194,30.25,0,4.42,98.9,133.4,0,"44.20%","33.70%",20.2,0,"66",72,177,null,null,0,0,0],
    ["Cooper Kupp",3,0,24,"6'2''",204,31.5,0,4.62,90.8,110.7,0,"40.40%","null",20.2,0,"29",15,7,28,0,0,0,0],
    ["AJ Brown",2,0,22,"6'0''",226,32.875,0,4.49,109.7,122.1,0,"32.60%","27.40%",20.2,0,"32",7,0,0,0,0,0,0],
    ["Nelson Agholor",1,0,21,"6'0''",198,32.25,0,4.42,102.3,124.6,0,"32.40%","14.60%",20.3,0,"123",114,28,53,73,45,0,0],
    ["J'Mom Moore",4,0,23,"6'3''",207,32.875,0,4.6,95,124.6,0,"27.60%","null",20.3,0,"null",null,null,0,0,0,0,0],
    ["Will Fuller",1,0,22,"6'0''",186,30.75,0,4.32,105.3,120,0,"46.70%","24.80%",20.4,0,"74",33,21,41,8,0,0,0],
    ["Zay Jones",2,0,22,"6'2''",201,32.5,0,4.45,103.9,128.6,0,"37.10%","39.90%",20.4,0,"110",55,158,168,0,0,0,0],
    ["Dorial Green-Beckham",2,0,22,"6'5''",237,32.5,0,4.49,123,116.5,0,"31.80%","10.90%",20.4,0,"75",100,null,null,null,null,0,0],
    ["D'Wayne Eskridge",2,0,24,"5'9''",190,30.125,0,4.45,91.6,121.5,0,"44.60%","33.10%",20.5,0,"",0,0,0,0,0,0,0],
    ["Taywan Taylor",3,0,22,"5'11''",203,32.625,0,4.5,96.3,123,0,"38.60%","30.60%",20.5,0,"149",97,223,223,0,0,0,0],
    ["Michael Gallup",3,0,22,"6'1''",205,31.5,0,4.51,99.1,122.2,0,"37.40%","36.40%",20.5,0,"104",18,54,0,0,0,0,0],
    ["Gary Jennings",4,0,21,"6'1''",214,32.5,0,4.42,112.1,126.4,0,"34.00%","23.60%",20.5,0,"null",null,0,0,0,0,0,0],
    ["Devin Smith",2,0,23,"6'0''",196,31,0,4.42,101.3,127.3,0,"26.80%","16.30%",20.5,0,"151",159,null,null,82,null,0,0],
    ["Deebo Samuel",2,0,23,"5'11''",214,31.375,0,4.48,103.3,127.3,0,"41.30%","23.90%",20.6,0,"36",46,0,0,0,0,0,0],
    ["Sterling Shepard",2,0,23,"5'10''",194,20.375,0,4.48,92.4,131.2,0,"33.20%","26.60%",20.6,0,"45",21,42,28,34,0,0,0],
    ["KeKe Coutee",4,0,21,"5'10''",181,29.875,0,4.43,90.1,115.2,0,"30.80%","22.40%",20.6,0,"50",90,48,0,0,0,0,0],
    ["Carlos Henderson",3,0,22,"5'11''",199,31.375,0,4.46,97.8,126.7,0,"40.00%","26.20%",20.7,0,"null",null,null,null,0,0,0,0],
    ["Calvin Ridley",1,0,23,"6'1''",189,31.625,0,4.43,98.1,107.7,0,"30.10%","29.70%",20.7,0,"27",19,4,0,0,0,0,0],
    ["Darius Slayton",5,0,22,"6'1''",190,32.75,0,4.39,102.3,null,0,"25.40%","19.70%",20.7,0,"42",74,0,0,0,0,0,0],
    ["DeVonta Smith",1,0,22,"6'0''",170,31.875,0,4.44,86.3,null,0,"51.30%","37.50%",20.8,0,"",0,0,0,0,0,0,0],
    ["Stedman Bailey",3,0,22,"5'10''",193,32.75,0,4.52,88.7,117.2,0,"47.40%","13.60%",20.8,0,"100",87,115,null,null,null,null,null],
    ["Diontae Johnson",3,0,22,"5'10''",183,30.875,0,4.53,83.3,118.5,0,"34.00%","23.20%",20.8,0,"58",21,0,0,0,0,0,0],
    ["Dante Pettis",2,0,22,"6'1''",186,32.25,0,4.53,88.3,123.7,0,"31.60%","28.40%",20.9,0,"null",150,142,0,0,0,0,0],
    ["Chris Conley",3,0,22,"6'2''",213,33.75,0,4.35,120.6,146,0,"29.30%","16.80%",20.9,0,"124",103,0,0,0,0,0,0],
    ["Josh Palmer",3,0,21,"6'1''",210,33,0,4.57,96.3,119.8,0,"25.90%","22.80%",21,0,"",0,0,0,0,0,0,0],
    ["Amari Rodgers",3,0,21,"5'9''",212,30.375,0,4.57,91.9,116.6,0,"23.50%","20.80%",21,0,"",0,0,0,0,0,0,0],
    ["Kevin White",1,0,22,"6'3''",215,32.625,0,4.35,123.4,123.6,0,"36.80%","null",21.2,0,"null",64,159,142,null,null,0,0],
    ["Hakeem Butler",4,0,23,"6'5''",227,35.25,0,4.48,113.6,127,0,"43.50%","?",21.3,0,"null",null,0,0,0,0,0,0],
    ["Marquise Brown",1,0,22,"5'9''",166,30.5,0,4.32,90.1,null,0,"30.60%","29.70%",21.3,0,"55",47,0,0,0,0,0,0],
    ["Michael Thomas",2,0,23,"6'3''",212,32.125,0,4.57,99.9,122.5,0,"39.60%","25.90%",21.5,0,"7",7,6,1,41,0,0,0],
    ["Kadarius Toney",1,0,22,"5'1''",193,31.25,0,4.43,97.5,135.2,0,"23.70%","19.40%",21.6,0,"",0,0,0,0,0,0,0],
    ["Hunter Renfrow",5,0,23,"5'10''",184,29.125,0,4.59,79.5,117.5,0,"23.70%","16.60%",21.7,0,"56",79,0,0,0,0,0,0],
    ["Jaylen Waddle",1,0,22,"5'9''",180,30.375,0,4.37,93.3,null,0,"19.70%","14.50%",21.8,0,"",0,0,0,0,0,0,0],
    ["Anthony Miller",2,0,23,"5'11''",201,31.625,0,4.55,91.2,128.8,0,"39.90%","31.40%",21.9,0,"73",77,106,0,0,0,0,0],
    ["Terrance Williams",3,0,24,"6'2''",208,31.25,0,4.52,101,114.8,0,"38.30%","31.80%",22,0,"59",59,54,76,0,null,null,null],
    ["Riley Ridley",5,0,23,"6'1''",199,32.625,0,4.58,90.5,113.9,0,"22.20%","16.20%",22.1,0,"null",null,0,0,0,0,0,0],
    ["Jaleel Scott",4,0,23,"6'5''",218,33.5,0,4.56,106.4,120.7,0,"27.70%","18.30%",22.5,0,"null",null,null,0,0,0,0,0],
    ["Jalen Hurd",3,0,23,"6'5''",226,32,0,4.69,98.5,122.4,0,"24.00%","22.70%",22.6,0,"null",null,0,0,0,0,0,0],
    ["ArDarius Stweart",3,0,23,"5'11''",204,32.5,0,4.49,97.6,119.8,0,"36.40%","24.00%",22.7,0,"null",null,null,null,0,0,0,0],
    ["Tavon Austin",1,0,22,"5'8''",174,null,0,4.34,98.1,114.4,0,"26.30%","26.40%",null,0,"60",93,38,60,136,121,153,189],
    ["Tyreek Hill",5,0,22,"5'10''",185,30.5,0,4.34,100,133.4,0,"19.40%","5.40%",null,0,"31",8,5,11,2,0,0,0],
    ["Mecole Hardman",2,0,21,"5'10''",187,30.25,0,4.33,102,121.6,0,"18.70%","15.10%",null,0,"79",89,0,0,0,0,0,0],
    ["Terry McLaurin",3,0,23,"6'0''",208,31.5,0,4.35,114.6,126.3,0,"17.70%","8.60%",null,0,"30",20,0,0,0,0,0,0],
    ["Cordarrelle Patterson",1,0,22,"6'2''",216,null,0,4.42,113.2,126.9,0,"17.10%","17.60%",null,0,"65",97,192,88,100,109,177,144],
    ["Marquise Goodwin",3,0,22,"5'9''",183,31.5,0,4.27,104.1,134,0,"13.60%","13.10%",null,0,"87",182,135,98,45,83,124,null],
    ["Kelvin Benjamin",1,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Marqise Lee",2,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Jordan Matthews",2,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Paul Richardson",2,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Cody Latimer",2,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Josh Huff",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Donte Moncrief",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["John Brown",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Dri Archer",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Sammie Coates",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Braxton Miller",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Leonte Carroo",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Chad Williams",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0],
    ["Amara Darboh",3,0,0,"",0,0,0,0,0,0,0,"","",0,0,"",0,0,0,0,0,0,0]
  ]
