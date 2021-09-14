var data = [
    ["Name", "Round_drafted", "null", "Rookie_year_age", "Height", "Weight", "Arm_Length", "null", "40-yard dash", "Speed_Score", "Burst_Score", "null", "College_Dominator", "College_Target_Share", "Breakout_Age", "null", "1st_year_finish", "2nd_year_finish", "3rd_year_finish", "4th_year_finish", "5th_year_finish", "6th_year_finish", "7th_year_finish", "null"],
    ["Aaron Dobson", 2, "null", "22", "6'3''", "210", "33", "null", "4.42", "113.1", "120", "null", "26.10%", "17.70%", "18.1", "null", "55", "171", "129", "null", "null", "null", "null", "null"],
    ["Parris Campbell", 2, "null", "22", "6'0''", "205", "32.25", "null", "4.31", "117.2", "135.5", "null", "23.50%", "17.90%", "18.1", "null", "109", "95", "null", "null", "null", "null", "null", "null"],
    ["Amari Cooper", 1, "null", "20", "6'1''", "211", "31.5", "null", "4.42", "110.6", "116.1", "null", "47.20%", "19.20%", "18.2", "null", "28", "18", "34", "22", "16", "22", "null", "null"],
    ["DeAndre Hopkins", 1, "null", "21", "6'1''", "214", "33.375", "null", "4.57", "98.1", "118.7", "null", "39.30%", "13.50%", "18.2", "null", "68", "18", "5", "34", "2", "3", "6", "5"],
    ["Sammy Watkins", 1, "null", "21", "6'1''", "211", "32", "null", "4.43", "109.6", "120.8", "null", "34.20%", "13.30%", "18.2", "null", "33", "10", "54", "51", "38", "53", "71", "null"],
    ["Rondale Moore", 2, "null", "21", "5'7''", "181", "28.25", "null", "4.37", "91.1", "135.3", "null", "25.60%", "31.40%", "18.2", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["DJ Moore", 1, "null", "21", "6'0''", "210", "31.625", "null", "4.42", "108.5", "132.2", "null", "53.30%", "43.60%", "18.4", "null", "56", "15", "27", "null", "null", "null", "null", "null"],
    ["Keenan Allen", 3, "null", "21", "6'2''", "206", "32.75", "null", "4.76", "81.4", "null", "null", "49.50%", "16.70%", "18.4", "null", "21", "30", "6", "37", "4", "12", "8", "6"],
    ["James Washington", 2, "null", "22", "5'11''", "213", "32.75", "null", "4.54", "97.5", "118.7", "null", "33.30%", "25.70%", "18.4", "null", "151", "70", "113", "null", "null", "null", "null", "null"],
    ["Robert Woods", 2, "null", "21", "6'0''", "201", "31", "null", "4.51", "95.8", "115.5", "null", "31.60%", "18.50%", "18.4", "null", "73", "53", "65", "69", "18", "17", "14", "18"],
    ["Stefon Diggs", 5, "null", "21", "6'0''", "195", "31.25", "null", "4.46", "97.2", "117", "null", "36.10%", "13.20%", "18.6", "null", "46", "13", "14", "11", "24", "3", "null", "null"],
    ["Antonio Callaway", 4, "null", "21", "5'11''", "200", "31.5", "null", "4.41", "102.9", "118.3", "null", "null", "11.20%", "18.7", "null", "80", "140", "210", "null", "null", "null", "null", "null"],
    ["Corey Davis", 1, "null", "22", "6'3''", "209", "33", "null", "4.53", "102", "null", "null", "51.60%", "36.50%", "18.7", "null", "84", "40", "81", "31", "null", "null", "null", "null"],
    ["N'Keal Harry", 1, "null", "21", "6'2''", "228", "33", "null", "4.53", "109.8", "126.5", "null", "43.90%", "31.10%", "18.7", "null", "112", "121", "null", "null", "null", "null", "null", "null"],
    ["Tyler Boyd", 2, "null", "21", "6'1''", "197", "32", "null", "4.58", "89.5", "117.3", "null", "42.70%", "39.80%", "18.8", "null", "82", "102", "20", "26", "38", "null", "null", "null"],
    ["Rashod Bateman", 1, "null", "21", "6'0''", "190", "33", "null", "4.48", "93", "122.7", "null", "40%", "35.70%", "18.8", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Josh Doctson", 1, "null", "23", "6'2''", "202", "31.875", "null", "4.5", "99.9", "135.2", "null", "38.60%", "24.50%", "18.8", "null", "132", "64", "90", "null", "null", "null", "null", "null"],
    ["Christian Kirk", 2, "null", "21", "5'10''", "201", "30.375", "null", "4.47", "96.6", "117.9", "null", "36.80%", "26.60%", "18.8", "null", "54", "34", "58", "null", "null", "null", "null", "null"],
    ["John Ross", 1, "null", "21", "5'11''", "188", "31.5", "null", "4.22", "115.3", "129.4", "null", "34.10%", "31.70%", "18.8", "null", "200", "102", "43", "201", "null", "null", "null", "null"],
    ["JuJu Smith-Schuster", 2, "null", "20", "6'1''", "215", "32.875", "null", "4.54", "101.2", "115.3", "null", "31.90%", "25.80%", "18.8", "null", "12", "8", "64", "24", "null", "null", "null", "null"],
    ["Brandin Cooks", 1, "null", "20", "5'10''", "189", "30.75", "null", "4.33", "103.1", "121.2", "null", "38.90%", "13.50%", "18.9", "null", "22", "20", "12", "19", "18", "75", "17", "null"],
    ["Tutu Atwell", 2, "null", "21", "5'9''", "155", "29.25", "null", "4.44", "75.4", "114.6", "null", "36.70%", "31.30%", "18.9", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Miles Boykin", 4, "null", "22", "6'4''", "220", "33.5", "null", "4.42", "120", "144", "null", "30.10%", "21.70%", "18.9", "null", "139", "132", "null", "null", "null", "null", "null", "null"],
    ["Allen Robinson", 2, "null", "21", "6'2''", "220", "32", "null", "4.56", "103.2", "129.8", "null", "37.90%", "18.30%", "19", "null", "39", "8", "35", "null", "33", "10", "13", "null"],
    ["Mike Evans", 1, "null", "21", "6'5''", "231", "35.125", "null", "4.53", "115.7", "124.2", "null", "30.20%", "12.30%", "19", "null", "14", "23", "3", "20", "10", "4", "16", "null"],
    ["Terrace Marshall", 2, "null", "21", "6'2''", "205", "32.75", "null", "4.45", "106", "128.8", "null", "33.40%", "18.60%", "19.2", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Tre'Quan Smith", 3, "null", "22", "6'2''", "210", "33.375", "null", "4.49", "104.8", "128.8", "null", "33.00%", "22.00%", "19.2", "null", "84", "87", "85", "null", "null", "null", "null", "null"],
    ["Laquon Treadwell", 1, "null", "21", "6'2''", "221", "33.375", "null", "4.69", "92.6", "114.6", "null", "29.00%", "25.10%", "19.2", "null", "189", "150", "139", "151", "124", "null", "null", "null"],
    ["Justin Hunter", 2, "null", "22", "6'4''", "196", "33.25", "null", "4.44", "105", "135.2", "null", "27.20%", "13.80%", "19.3", "null", "101", "72", "102", "110", "160", "195", "null", "null"],
    ["Justin Watson", 5, "null", "22", "6'2''", "215", "33.75", "null", "4.49", "107.2", "130", "null", "60.30%", "null", "19.4", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Elijah Moore", 2, "null", "21", "5'9''", "178", "30.125", "null", "4.4", "89.8", "121.6", "null", "41.90%", "36.70%", "19.4", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Chris Godwin", 3, "null", "21", "6'1''", "209", "31.625", "null", "4.42", "109.5", "124.2", "null", "34.90%", "28.20%", "19.5", "null", "90", "35", "2", "15", "null", "null", "null", "null"],
    ["Ja'Marr Chase", 1, "null", "21", "6'0''", "201", "30.75", "null", "4.39", "106.8", "135.7", "null", "33.40%", "21.00%", "19.5", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Nico Collins", 3, "null", "22", "6'4''", "215", "34.125", "null", "4.5", "109.2", "126.3", "null", "27.30%", "15.60%", "19.5", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["DaeSean Hamilton", 4, "null", "23", "6'1''", "203", "31", "null", "4.57", "93.1", "117.7", "null", "25.40%", "22.90%", "19.5", "null", "61", "117", "131", "null", "null", "null", "null", "null"],
    ["DeVante Parker", 1, "null", "21", "6'3''", "209", "33.25", "null", "4.45", "109.5", "124.6", "null", "46.30%", "17.30%", "19.6", "null", "43", "56", "47", "124", "17", "42", "null", "null"],
    ["Markus Wheaton", 3, "null", "22", "5'11''", "189", "32.75", "null", "4.45", "93.8", "122.9", "null", "36.00%", "27.40%", "19.6", "null", "null", "68", "62", "null", "null", "null", "null", "null"],
    ["Jaelen Strong", 3, "null", "21", "6'2''", "217", "32.5", "null", "4.44", "113.2", "132.9", "null", "31.10%", "16.30%", "19.6", "null", "121", "null", "null", "null", "null", "null", "null", "null"],
    ["JJ Acrega-Whiteside", 2, "null", "22", "6'2''", "225", "33.25", "null", "4.54", "107.4", "116.8", "null", "42.70%", "null", "19.7", "null", "144", "184", "null", "null", "null", "null", "null", "null"],
    ["Davante Adams", 2, "null", "21", "6'1''", "212", "32.625", "null", "4.56", "98.1", "128.7", "null", "40.70%", "13.60%", "19.7", "null", "82", "63", "11", "9", "1", "5", "1", "null"],
    ["Phillip Dorsett", 1, "null", "22", "5'10''", "185", "30.25", "null", "4.33", "100.9", "123.9", "null", "32.60%", "20.40%", "19.7", "null", "136", "93", "139", "86", "68", "null", "null", "null"],
    ["DK Metcalf", 2, "null", "21", "6'3''", "228", "34.875", "null", "4.33", "133.3", "135.9", "null", "26.40%", "16.70%", "19.7", "null", "45", "9", "null", "null", "null", "null", "null", "null"],
    ["Andy Isabella", 2, "null", "22", "5'9''", "188", "29.75", "null", "4.31", "103", "122.6", "null", "52.20%", "40.00%", "19.8", "null", "147", "136", "null", "null", "null", "null", "null", "null"],
    ["Kenny Golladay", 3, "null", "23", "6'4''", "218", "32", "null", "4.5", "110.7", "120.4", "null", "41.80%", "36.30%", "19.8", "null", "60", "24", "13", "36", "null", "null", "null", "null"],
    ["Jarvis Landry", 2, "null", "21", "5'1''", "205", "31.25", "null", "4.65", "85.3", "103.5", "null", "40.00%", "15.90%", "19.8", "null", "36", "17", "15", "5", "26", "22", "40", "null"],
    ["Odell Beckham Jr.", 1, "null", "21", "5'11''", "198", "32.75", "null", "4.43", "1000", "126.5", "null", "34.50%", "13.80%", "19.8", "null", "1", "4", "4", "3", "9", "35", "39", "null"],
    ["Dyami Brown", 3, "null", "21", "6'1''", "185", "32.75", "null", "4.5", "90.2", "124.4", "null", "31.20%", "26.00%", "19.8", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Tyler Lockett", 3, "null", "22", "5'10''", "182", "30", "null", "4.4", "93.1", "120.9", "null", "44.20%", "36.10%", "19.9", "null", "53", "72", "70", "25", "23", "12", "null", "null"],
    ["Courtland Sutton", 2, "null", "22", "6'3''", "218", "32.375", "null", "4.54", "105.4", "122.4", "null", "36.90%", "27.50%", "19.9", "null", "75", "29", "null", "null", "null", "null", "null", "null"],
    ["Mike Williams", 1, "null", "22", "6'4''", "218", "33.375", "null", "4.59", "102.3", "115.8", "null", "27.00%", "22.30%", "19.9", "null", "164", "46", "51", "52", "null", "null", "null", "null"],
    ["Breshad Perriman", 1, "null", "21", "6'2''", "212", "32", "null", "4.3", "125.7", "125.6", "null", "36.60%", "11.30%", "20", "null", "null", "91", "182", "108", "62", "80", "null", "null"],
    ["Anthony Schwartz", 3, "null", "21", "6'0''", "186", "31.5", "null", "4.32", "105.3", "115.9", "null", "28.20%", "26.40%", "20", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["DJ Chark", 2, "null", "21", "6'3''", "199", "32.375", "null", "4.34", "115.3", "132.5", "null", "25.30%", "22.60%", "20", "null", "159", "20", "43", "null", "null", "null", "null", "null"],
    ["Curtis Samuel", 2, "null", "21", "5'11''", "196", "31.25", "null", "4.31", "110.5", "122.4", "null", "29.00%", "23.70%", "20.1", "null", "128", "36", "52", "26", "null", "null", "null", "null"],
    ["Corey Coleman", 1, "null", "22", "5'11''", "194", "30.25", "null", "4.42", "98.9", "133.4", "null", "44.20%", "33.70%", "20.2", "null", "66", "72", "177", "null", "null", "null", "null", "null"],
    ["Cooper Kupp", 3, "null", "24", "6'2''", "204", "31.5", "null", "4.62", "90.8", "110.7", "null", "40.40%", "null", "20.2", "null", "29", "15", "7", "28", "null", "null", "null", "null"],
    ["AJ Brown", 2, "null", "22", "6'0''", "226", "32.875", "null", "4.49", "109.7", "122.1", "null", "32.60%", "27.40%", "20.2", "null", "32", "7", "null", "null", "null", "null", "null", "null"],
    ["Nelson Agholor", 1, "null", "21", "6'0''", "198", "32.25", "null", "4.42", "102.3", "124.6", "null", "32.40%", "14.60%", "20.3", "null", "123", "114", "28", "53", "73", "45", "null", "null"],
    ["J'Mom Moore", 4, "null", "23", "6'3''", "207", "32.875", "null", "4.6", "95", "124.6", "null", "27.60%", "null", "20.3", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Will Fuller", 1, "null", "22", "6'0''", "186", "30.75", "null", "4.32", "105.3", "120", "null", "46.70%", "24.80%", "20.4", "null", "74", "33", "21", "41", "8", "null", "null", "null"],
    ["Zay Jones", 2, "null", "22", "6'2''", "201", "32.5", "null", "4.45", "103.9", "128.6", "null", "37.10%", "39.90%", "20.4", "null", "110", "55", "158", "168", "null", "null", "null", "null"],
    ["Dorial Green-Beckham", 2, "null", "22", "6'5''", "237", "32.5", "null", "4.49", "123", "116.5", "null", "31.80%", "10.90%", "20.4", "null", "75", "100", "null", "null", "null", "null", "null", "null"],
    ["D'Wayne Eskridge", 2, "null", "24", "5'9''", "190", "30.125", "null", "4.45", "91.6", "121.5", "null", "44.60%", "33.10%", "20.5", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Taywan Taylor", 3, "null", "22", "5'11''", "203", "32.625", "null", "4.5", "96.3", "123", "null", "38.60%", "30.60%", "20.5", "null", "149", "97", "223", "223", "null", "null", "null", "null"],
    ["Michael Gallup", 3, "null", "22", "6'1''", "205", "31.5", "null", "4.51", "99.1", "122.2", "null", "37.40%", "36.40%", "20.5", "null", "104", "18", "54", "null", "null", "null", "null", "null"],
    ["Gary Jennings", 4, "null", "21", "6'1''", "214", "32.5", "null", "4.42", "112.1", "126.4", "null", "34.00%", "23.60%", "20.5", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Devin Smith", 2, "null", "23", "6'0''", "196", "31", "null", "4.42", "101.3", "127.3", "null", "26.80%", "16.30%", "20.5", "null", "151", "159", "null", "null", "82", "null", "null", "null"],
    ["Deebo Samuel", 2, "null", "23", "5'11''", "214", "31.375", "null", "4.48", "103.3", "127.3", "null", "41.30%", "23.90%", "20.6", "null", "36", "46", "null", "null", "null", "null", "null", "null"],
    ["Sterling Shepard", 2, "null", "23", "5'10''", "194", "20.375", "null", "4.48", "92.4", "131.2", "null", "33.20%", "26.60%", "20.6", "null", "45", "21", "42", "28", "34", "null", "null", "null"],
    ["KeKe Coutee", 4, "null", "21", "5'10''", "181", "29.875", "null", "4.43", "90.1", "115.2", "null", "30.80%", "22.40%", "20.6", "null", "50", "90", "48", "null", "null", "null", "null", "null"],
    ["Carlos Henderson", 3, "null", "22", "5'11''", "199", "31.375", "null", "4.46", "97.8", "126.7", "null", "40.00%", "26.20%", "20.7", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Calvin Ridley", 1, "null", "23", "6'1''", "189", "31.625", "null", "4.43", "98.1", "107.7", "null", "30.10%", "29.70%", "20.7", "null", "27", "19", "4", "null", "null", "null", "null", "null"],
    ["Darius Slayton", 5, "null", "22", "6'1''", "190", "32.75", "null", "4.39", "102.3", "null", "null", "25.40%", "19.70%", "20.7", "null", "42", "74", "null", "null", "null", "null", "null", "null"],
    ["DeVonta Smith", 1, "null", "22", "6'0''", "170", "31.875", "null", "4.44", "86.3", "null", "null", "51.30%", "37.50%", "20.8", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Stedman Bailey", 3, "null", "22", "5'10''", "193", "32.75", "null", "4.52", "88.7", "117.2", "null", "47.40%", "13.60%", "20.8", "null", "100", "87", "115", "null", "null", "null", "null", "null"],
    ["Diontae Johnson", 3, "null", "22", "5'10''", "183", "30.875", "null", "4.53", "83.3", "118.5", "null", "34.00%", "23.20%", "20.8", "null", "58", "21", "null", "null", "null", "null", "null", "null"],
    ["Dante Pettis", 2, "null", "22", "6'1''", "186", "32.25", "null", "4.53", "88.3", "123.7", "null", "31.60%", "28.40%", "20.9", "null", "null", "150", "142", "null", "null", "null", "null", "null"],
    ["Chris Conley", 3, "null", "22", "6'2''", "213", "33.75", "null", "4.35", "120.6", "146", "null", "29.30%", "16.80%", "20.9", "null", "124", "103", "null", "null", "null", "null", "null", "null"],
    ["Josh Palmer", 3, "null", "21", "6'1''", "210", "33", "null", "4.57", "96.3", "119.8", "null", "25.90%", "22.80%", "21", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Amari Rodgers", 3, "null", "21", "5'9''", "212", "30.375", "null", "4.57", "91.9", "116.6", "null", "23.50%", "20.80%", "21", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Kevin White", 1, "null", "22", "6'3''", "215", "32.625", "null", "4.35", "123.4", "123.6", "null", "36.80%", "null", "21.2", "null", "null", "64", "159", "142", "null", "null", "null", "null"],
    ["Hakeem Butler", 4, "null", "23", "6'5''", "227", "35.25", "null", "4.48", "113.6", "127", "null", "43.50%", "?", "21.3", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Marquise Brown", 1, "null", "22", "5'9''", "166", "30.5", "null", "4.32", "90.1", "null", "null", "30.60%", "29.70%", "21.3", "null", "55", "47", "null", "null", "null", "null", "null", "null"],
    ["Michael Thomas", 2, "null", "23", "6'3''", "212", "32.125", "null", "4.57", "99.9", "122.5", "null", "39.60%", "25.90%", "21.5", "null", "7", "7", "6", "1", "41", "null", "null", "null"],
    ["Kadarius Toney", 1, "null", "22", "5'1''", "193", "31.25", "null", "4.43", "97.5", "135.2", "null", "23.70%", "19.40%", "21.6", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Hunter Renfrow", 5, "null", "23", "5'10''", "184", "29.125", "null", "4.59", "79.5", "117.5", "null", "23.70%", "16.60%", "21.7", "null", "56", "79", "null", "null", "null", "null", "null", "null"],
    ["Jaylen Waddle", 1, "null", "22", "5'9''", "180", "30.375", "null", "4.37", "93.3", "null", "null", "19.70%", "14.50%", "21.8", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Anthony Miller", 2, "null", "23", "5'11''", "201", "31.625", "null", "4.55", "91.2", "128.8", "null", "39.90%", "31.40%", "21.9", "null", "73", "77", "106", "null", "null", "null", "null", "null"],
    ["Terrance Williams", 3, "null", "24", "6'2''", "208", "31.25", "null", "4.52", "101", "114.8", "null", "38.30%", "31.80%", "22", "null", "59", "59", "54", "76", "null", "null", "null", "null"],
    ["Riley Ridley", 5, "null", "23", "6'1''", "199", "32.625", "null", "4.58", "90.5", "113.9", "null", "22.20%", "16.20%", "22.1", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Jaleel Scott", 4, "null", "23", "6'5''", "218", "33.5", "null", "4.56", "106.4", "120.7", "null", "27.70%", "18.30%", "22.5", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Jalen Hurd", 3, "null", "23", "6'5''", "226", "32", "null", "4.69", "98.5", "122.4", "null", "24.00%", "22.70%", "22.6", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["ArDarius Stweart", 3, "null", "23", "5'11''", "204", "32.5", "null", "4.49", "97.6", "119.8", "null", "36.40%", "24.00%", "22.7", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Tavon Austin", 1, "null", "22", "5'8''", "174", "null", "null", "4.34", "98.1", "114.4", "null", "26.30%", "26.40%", "null", "null", "60", "93", "38", "60", "136", "121", "153", "189"],
    ["Tyreek Hill", 5, "null", "22", "5'10''", "185", "30.5", "null", "4.34", "100", "133.4", "null", "19.40%", "5.40%", "null", "null", "31", "8", "5", "11", "2", "null", "null", "null"],
    ["Mecole Hardman", 2, "null", "21", "5'10''", "187", "30.25", "null", "4.33", "102", "121.6", "null", "18.70%", "15.10%", "null", "null", "79", "89", "null", "null", "null", "null", "null", "null"],
    ["Terry McLaurin", 3, "null", "23", "6'0''", "208", "31.5", "null", "4.35", "114.6", "126.3", "null", "17.70%", "8.60%", "null", "null", "30", "20", "null", "null", "null", "null", "null", "null"],
    ["Cordarrelle Patterson", 1, "null", "22", "6'2''", "216", "null", "null", "4.42", "113.2", "126.9", "null", "17.10%", "17.60%", "null", "null", "65", "97", "192", "88", "100", "109", "177", "144"],
    ["Marquise Goodwin", 3, "null", "22", "5'9''", "183", "31.5", "null", "4.27", "104.1", "134", "null", "13.60%", "13.10%", "null", "null", "87", "182", "135", "98", "45", "83", "124", "null"],
    ["Kelvin Benjamin", 1, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Marqise Lee", 2, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Jordan Matthews", 2, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Paul Richardson", 2, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Cody Latimer", 2, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Josh Huff", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Donte Moncrief", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["John Brown", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Dri Archer", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Sammie Coates", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Braxton Miller", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Leonte Carroo", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Chad Williams", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    ["Amara Darboh", 3, "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"]
]

// let data;

// document.getElementById("upload").addEventListener("click", Upload);

// function Upload() {
//     var uploadedCSV = document.getElementById("fileUpload").value;
//     // let number = document.getElementById("numOfCollumns").value.valueOf();
//     data = convertCSVToJSON(uploadedCSV, 23);
//     init();
// }

// function convertCSVToJSON(str, collumnLength, delimiter = ',') {
//     let inputData = str.toString();
//     let inputArray = inputData.split(delimiter);
//     var numOfArrays = inputArray.length / collumnLength;
//     // console.log(inputArray);
//     let array = [];
//     for(var i = 0; i < numOfArrays; i++){
//         var subArray = [];
//         // Number to start at
//         var start = i * collumnLength;
//         // Count up to start + numPerArray
//         for(var j = start; j < start + collumnLength; j++){
//             let newSubArray = inputArray[j];
//             // console.log(newSubArray);
//             subArray.push(newSubArray);
//         }
//         // Add to main array
//         array.push(subArray);
//     }
//     // console.log(array);
//     return array;
// }

// function init() {
    var toAdd = document.createDocumentFragment();
    for (let i = 0; i < data[0].length; i++) {
        let newFilter = document.createElement("input");
        let filterName = document.createTextNode(['filter_' + data[0][i]]);
        newFilter.id = ['filter_' + data[0][i]];
        newFilter.className = "filter";
        newFilter.appendChild(filterName);
        let divLocation = document.getElementById('toggle');
        var label = document.createElement("Label");
        label.setAttribute("for", ['filter_' + data[0][i]]);
        label.innerHTML = [data[0][i]];
        document.body.appendChild(label);
        document.body.insertBefore(newFilter, divLocation);
    // }

    document.getElementById("saveButton").addEventListener("click", applyFilters);

    let table = document.getElementById('table');
    let rowIndex = 0;
    for (let row of data) {
        table.insertRow();
        for (let cell of row) {
            if (cell != "null") {
                let newCell = table.rows[table.rows.length - 1].insertCell();
                table.rows[table.rows.length - 1].id = [rowIndex];
                newCell.textContent = cell;
            }
            else {
                table.rows[table.rows.length - 1].insertCell();
            }
        }
        rowIndex++;
    }
    document.body.appendChild(table);

}

function applyFilters() {
    let rowIndex = 0;
    for (let row of data) {
        document.getElementById([rowIndex]).style.visibility = "visible";
        rowIndex++;
    }
    let selectedData = null;
    let selectedDataName = document.getElementById("filter_Name").value;
    let foundDataIndex = 0;
    let dataTable = document.getElementById('table');
    for (let row of data) {
        if (row[0] == selectedDataName) {
            selectedData = data[foundDataIndex];
        }
        foundDataIndex++;
    }
    console.log(selectedData);
    if (selectedDataName !== "") {
        for (let i = 1; i < data[0].length; i++) {
            // console.log (document.getElementById(['filter_' + data[0][i]]).value);
            if (document.getElementById(['filter_' + data[0][i]]).value !== "") {
                let filterAtIndex = document.getElementById(['filter_' + data[0][i]]).value
                for (let j = 1; j < data.length; j++) {
                    let cellValue = data[j][i];
                    cellValue = cellValue.toString().replace('%', "");
                    let checkValue = selectedData[i].toString().replace('%', "");
                    if (selectedData[i] != "null") {
                        if (typeof checkValue[i] !== undefined) {
                            // if (j == 8)
                            //     console.log(cellValue - checkValue >= filterAtIndex);
                            if ((Math.abs(cellValue - checkValue)) > filterAtIndex) {
                                console.log("AHHHHHHHHHHHHHHHHHHHHHHH");
                                document.getElementById([j]).style.visibility = "hidden";
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        let rowIndex = 0;
        for (let row of data) {
            document.getElementById([rowIndex]).style.visibility = "visible";
            rowIndex++;
        }
    }
}