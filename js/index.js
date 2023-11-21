/****************************************************************************************
 * Copyright (c) 2021 Mani <infinyte01@gmail.com>                                       *
 *                                                                                      *
 *                                                                                      *
 * This program is free software; you can redistribute it and/or modify it under        *
 * the terms of the GNU General Public License as published by the Free Software        *
 * Foundation; either version 3 of the License, or (at your option) any later           *
 * version.                                                                             *
 *                                                                                      *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY      *
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A      *
 * PARTICULAR PURPOSE. See the GNU General Public License for more details.             *
 *                                                                                      *
 * You should have received a copy of the GNU General Public License along with         *
 * this program.  If not, see <http://www.gnu.org/licenses/>.                           *
 *                                                                                      *
 * This file incorporates work covered by the following copyright and permission        *
 * notice:                                                                              *
 *                                                                                      *
 *      mkanki - generate decks for the Anki spaced-repetition software.                *
 *      Copyright (c) 2018  Jeremy Apthorp <nornagon@nornagon.net>                      *
 *                                                                                      *
 *      This program is free software: you can redistribute it and/or modify            *
 *      it under the terms of the GNU Affero General Public License (version 3) as      *
 *      published by the Free Software Foundation.                                      *
 *                                                                                      *
 *      This program is distributed in the hope that it will be useful,                 *
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of                  *
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                   *
 *      GNU Affero General Public License for more details.                             *
 *                                                                                      *
 *      You should have received a copy of the GNU Affero General Public License        *
 *      along with this program.  If not, see <https://www.gnu.org/licenses/>.          *
 ****************************************************************************************/

// The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
// We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
// import japan from './japan.json' assert {type: 'json'}

var SQL;
initSqlJs().then(function (sql) {
    //Create the database
    SQL = sql;
});

const m = new Model({
    name: "Basic",
    id: "2156341623643",
    flds: [
        { name: "Front" },
        { name: "Back" }
    ],
    req: [
        [0, "all", [0]],
    ],
    tmpls: [
        {
            name: "Card 1",
            qfmt: "{{Front}}",
            afmt: "{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}",
        }
    ],
})

const d = new Deck(1347617346765, "japan kana kanji")
const p = new Package()


function doit(){    
    for ( key in japan){
        let kana = japan[key]["Kana"]
        let kanji = japan[key]["Kanji"]
        d.addNote(m.note([`${kana} --- ${kanji}`, japan[key]["definisi"]]))
        // d.addNote(m.note(['this is front', 'this is back'], ['test_tag1', 'test_tag2']))
    }
}


// add note to deck
function addNote() {
    var front = document.getElementById("noteFront").value;
    var back = document.getElementById("noteBack").value;

    d.addNote(m.note([front, back]))

    document.getElementById("noteBack").value = "";
    document.getElementById("noteFront").value = "";
}

// add deck to package and export
function exportDeck() {
    doit()
    p.addDeck(d)
    p.writeToFile('lainla.apkg')
}

const japan = [
    {
        "No. ": "1",
        "Kana": "あおい",
        "Kanji": "青い",
        "tipe": "adj-i",
        "definisi": "biru",
        "": ""
    },
    {
        "No. ": "2",
        "Kana": "あかい",
        "Kanji": "赤い",
        "tipe": "adj-i",
        "definisi": "merah",
        "": ""
    },
    {
        "No. ": "3",
        "Kana": "あかるい",
        "Kanji": "明るい",
        "tipe": "adj-i",
        "definisi": "cerah, ceria",
        "": ""
    },
    {
        "No. ": "4",
        "Kana": "あたたかい",
        "Kanji": "暖かい",
        "tipe": "adj-i",
        "definisi": "hangat, ringan",
        "": ""
    },
    {
        "No. ": "5",
        "Kana": "あたらしい",
        "Kanji": "新しい",
        "tipe": "adj-i",
        "definisi": "baru",
        "": ""
    },
    {
        "No. ": "6",
        "Kana": "あつい",
        "Kanji": "暑い",
        "tipe": "adj-i",
        "definisi": "panas, hangat",
        "": ""
    },
    {
        "No. ": "7",
        "Kana": "あつい",
        "Kanji": "熱い",
        "tipe": "adj-i",
        "definisi": "panas (hal)",
        "": ""
    },
    {
        "No. ": "8",
        "Kana": "あつい",
        "Kanji": "厚い",
        "tipe": "adj-i",
        "definisi": "jenis, hangat (hati), tebal, dalam",
        "": ""
    },
    {
        "No. ": "9",
        "Kana": "あぶない",
        "Kanji": "危ない",
        "tipe": "adj-i",
        "definisi": "berbahaya, kritis, hati-hati!",
        "": ""
    },
    {
        "No. ": "10",
        "Kana": "あまい",
        "Kanji": "甘い",
        "tipe": "adj-i",
        "definisi": "murah hati, manis",
        "": ""
    },
    {
        "No. ": "11",
        "Kana": "いい/よい",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "baik",
        "": ""
    },
    {
        "No. ": "12",
        "Kana": "いそがしい",
        "Kanji": "忙しい",
        "tipe": "adj-i",
        "definisi": "sibuk, jengkel",
        "": ""
    },
    {
        "No. ": "13",
        "Kana": "いたい",
        "Kanji": "痛い",
        "tipe": "adj-i",
        "definisi": "menyakitkan",
        "": ""
    },
    {
        "No. ": "14",
        "Kana": "うすい",
        "Kanji": "薄い",
        "tipe": "adj-i",
        "definisi": "kurus, lemah",
        "": ""
    },
    {
        "No. ": "15",
        "Kana": "うるさい",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "berisik, keras, menjengkelkan",
        "": ""
    },
    {
        "No. ": "16",
        "Kana": "おいしい",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "lezat, lezat",
        "": ""
    },
    {
        "No. ": "17",
        "Kana": "おおい",
        "Kanji": "多い",
        "tipe": "adj-i",
        "definisi": "banyak",
        "": ""
    },
    {
        "No. ": "18",
        "Kana": "おおきい",
        "Kanji": "大きい",
        "tipe": "adj-i",
        "definisi": "besar",
        "": ""
    },
    {
        "No. ": "19",
        "Kana": "おそい",
        "Kanji": "遅い",
        "tipe": "adj-i",
        "definisi": "terlambat, lambat",
        "": ""
    },
    {
        "No. ": "20",
        "Kana": "おもい",
        "Kanji": "重い",
        "tipe": "adj-i",
        "definisi": "berat",
        "": ""
    },
    {
        "No. ": "21",
        "Kana": "おもしろい",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "menarik, lucu",
        "": ""
    },
    {
        "No. ": "22",
        "Kana": "からい",
        "Kanji": "辛い",
        "tipe": "adj-i",
        "definisi": "pedas, asin",
        "": ""
    },
    {
        "No. ": "23",
        "Kana": "かるい",
        "Kanji": "軽い",
        "tipe": "adj-i",
        "definisi": "ringan, tidak serius, minor",
        "": ""
    },
    {
        "No. ": "24",
        "Kana": "かわいい",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "lucu, menarik",
        "": ""
    },
    {
        "No. ": "25",
        "Kana": "きいろい",
        "Kanji": "黄色い",
        "tipe": "adj-i",
        "definisi": "kuning",
        "": ""
    },
    {
        "No. ": "26",
        "Kana": "きたない",
        "Kanji": "汚い",
        "tipe": "adj-i",
        "definisi": "kotor, berantakan",
        "": ""
    },
    {
        "No. ": "27",
        "Kana": "くらい",
        "Kanji": "暗い",
        "tipe": "adj-i",
        "definisi": "gelap, suram",
        "": ""
    },
    {
        "No. ": "28",
        "Kana": "くろい",
        "Kanji": "黒い",
        "tipe": "adj-i",
        "definisi": "hitam",
        "": ""
    },
    {
        "No. ": "29",
        "Kana": "さむい",
        "Kanji": "寒い",
        "tipe": "adj-i",
        "definisi": "dingin (misalnya cuaca)",
        "": ""
    },
    {
        "No. ": "30",
        "Kana": "しろい",
        "Kanji": "白い",
        "tipe": "adj-i",
        "definisi": "putih",
        "": ""
    },
    {
        "No. ": "31",
        "Kana": "すくない",
        "Kanji": "少ない",
        "tipe": "adj-i",
        "definisi": "beberapa, langka",
        "": ""
    },
    {
        "No. ": "32",
        "Kana": "すずしい",
        "Kanji": "涼しい",
        "tipe": "adj-i",
        "definisi": "keren, menyegarkan",
        "": ""
    },
    {
        "No. ": "33",
        "Kana": "せまい",
        "Kanji": "狭い",
        "tipe": "adj-i",
        "definisi": "mempersempit, terbatas, kecil",
        "": ""
    },
    {
        "No. ": "34",
        "Kana": "たかい",
        "Kanji": "高い",
        "tipe": "adj-i",
        "definisi": "panjang tinggi",
        "": ""
    },
    {
        "No. ": "35",
        "Kana": "たかい",
        "Kanji": "高い",
        "tipe": "adj-i",
        "definisi": "mahal",
        "": ""
    },
    {
        "No. ": "36",
        "Kana": "たのしい",
        "Kanji": "楽しい",
        "tipe": "adj-i",
        "definisi": "menyenangkan, menyenangkan",
        "": ""
    },
    {
        "No. ": "37",
        "Kana": "ちいさい",
        "Kanji": "小さい",
        "tipe": "adj-i",
        "definisi": "kecil, sedikit",
        "": ""
    },
    {
        "No. ": "38",
        "Kana": "ちかい",
        "Kanji": "近い",
        "tipe": "adj-i",
        "definisi": "dekat, dekat, pendek",
        "": ""
    },
    {
        "No. ": "39",
        "Kana": "つまらない",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "tidak signifikan, membosankan",
        "": ""
    },
    {
        "No. ": "40",
        "Kana": "つめたい",
        "Kanji": "冷たい",
        "tipe": "adj-i",
        "definisi": "dingin (dengan sentuhan)",
        "": ""
    },
    {
        "No. ": "41",
        "Kana": "つよい",
        "Kanji": "強い",
        "tipe": "adj-i",
        "definisi": "kuat, kuat",
        "": ""
    },
    {
        "No. ": "42",
        "Kana": "とおい",
        "Kanji": "遠い",
        "tipe": "adj-i",
        "definisi": "jauh, jauh",
        "": ""
    },
    {
        "No. ": "43",
        "Kana": "ながい",
        "Kanji": "長い",
        "tipe": "adj-i",
        "definisi": "panjang",
        "": ""
    },
    {
        "No. ": "44",
        "Kana": "ぬるい",
        "Kanji": "温い",
        "tipe": "adj-i",
        "definisi": "suam",
        "": ""
    },
    {
        "No. ": "45",
        "Kana": "はやい",
        "Kanji": "早い",
        "tipe": "adj-i",
        "definisi": "dini",
        "": ""
    },
    {
        "No. ": "46",
        "Kana": "はやい",
        "Kanji": "速い",
        "tipe": "adj-i",
        "definisi": "cepat, cepat",
        "": ""
    },
    {
        "No. ": "47",
        "Kana": "ひくい",
        "Kanji": "低い",
        "tipe": "adj-i",
        "definisi": "pendek, rendah",
        "": ""
    },
    {
        "No. ": "48",
        "Kana": "ひろい",
        "Kanji": "広い",
        "tipe": "adj-i",
        "definisi": "luas, lebar",
        "": ""
    },
    {
        "No. ": "49",
        "Kana": "ふとい",
        "Kanji": "太い",
        "tipe": "adj-i",
        "definisi": "lemak, tebal",
        "": ""
    },
    {
        "No. ": "50",
        "Kana": "ふるい",
        "Kanji": "古い",
        "tipe": "adj-i",
        "definisi": "tua (barang), kuno",
        "": ""
    },
    {
        "No. ": "51",
        "Kana": "ほしい",
        "Kanji": "欲しい",
        "tipe": "adj-i",
        "definisi": "inginkan, membutuhkan, keinginan",
        "": ""
    },
    {
        "No. ": "52",
        "Kana": "ほそい",
        "Kanji": "細い",
        "tipe": "adj-i",
        "definisi": "tipis, ramping, baik",
        "": ""
    },
    {
        "No. ": "53",
        "Kana": "まずい",
        "Kanji": "",
        "tipe": "adj-i",
        "definisi": "tidak enak",
        "": ""
    },
    {
        "No. ": "54",
        "Kana": "まるい",
        "Kanji": "丸い/円い",
        "tipe": "adj-i",
        "definisi": "bulat, melingkar",
        "": ""
    },
    {
        "No. ": "55",
        "Kana": "みじかい",
        "Kanji": "短い",
        "tipe": "adj-i",
        "definisi": "pendek",
        "": ""
    },
    {
        "No. ": "56",
        "Kana": "むずかしい",
        "Kanji": "難しい",
        "tipe": "adj-i",
        "definisi": "sulit",
        "": ""
    },
    {
        "No. ": "57",
        "Kana": "やさしい",
        "Kanji": "易しい",
        "tipe": "adj-i",
        "definisi": "mudah, polos, sederhana",
        "": ""
    },
    {
        "No. ": "58",
        "Kana": "やすい",
        "Kanji": "安い",
        "tipe": "adj-i",
        "definisi": "murah, murah",
        "": ""
    },
    {
        "No. ": "59",
        "Kana": "よわい",
        "Kanji": "弱い",
        "tipe": "adj-i",
        "definisi": "lemah, feable",
        "": ""
    },
    {
        "No. ": "60",
        "Kana": "わかい",
        "Kanji": "若い",
        "tipe": "adj-i",
        "definisi": "muda",
        "": ""
    },
    {
        "No. ": "61",
        "Kana": "わるい",
        "Kanji": "悪い",
        "tipe": "adj-i",
        "definisi": "buruk, rendah",
        "": ""
    },
    {
        "No. ": "62",
        "Kana": "いや",
        "Kanji": "嫌",
        "tipe": "adj-na",
        "definisi": "tidak menyenangkan, tidak ada",
        "": ""
    },
    {
        "No. ": "63",
        "Kana": "いろいろ",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "berbagai",
        "": ""
    },
    {
        "No. ": "64",
        "Kana": "おなじ",
        "Kanji": "同じ",
        "tipe": "adj-na",
        "definisi": "yang sama, identik, mirip",
        "": ""
    },
    {
        "No. ": "65",
        "Kana": "きらい",
        "Kanji": "嫌い",
        "tipe": "adj-na",
        "definisi": "tidak suka, benci",
        "": ""
    },
    {
        "No. ": "66",
        "Kana": "きれい",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "cantik, bersih, bagus, rapi",
        "": ""
    },
    {
        "No. ": "67",
        "Kana": "けっこう",
        "Kanji": "結構",
        "tipe": "adj-na",
        "definisi": "baik, cukup",
        "": ""
    },
    {
        "No. ": "68",
        "Kana": "げんき",
        "Kanji": "元気",
        "tipe": "adj-na",
        "definisi": "kesehatan",
        "": ""
    },
    {
        "No. ": "69",
        "Kana": "しずか",
        "Kanji": "静か",
        "tipe": "adj-na",
        "definisi": "tenang, damai",
        "": ""
    },
    {
        "No. ": "70",
        "Kana": "じょうず",
        "Kanji": "上手",
        "tipe": "adj-na",
        "definisi": "keterampilan, terampil, ketangkasan",
        "": ""
    },
    {
        "No. ": "71",
        "Kana": "じょうぶ",
        "Kanji": "丈夫",
        "tipe": "adj-na",
        "definisi": "yang kuat, solid, tahan lama",
        "": ""
    },
    {
        "No. ": "72",
        "Kana": "すき",
        "Kanji": "好き",
        "tipe": "adj-na",
        "definisi": "keinginan, kesukaan, cinta",
        "": ""
    },
    {
        "No. ": "73",
        "Kana": "だいじょうぶ",
        "Kanji": "大丈夫",
        "tipe": "adj-na",
        "definisi": "aman, baiklah, oke",
        "": ""
    },
    {
        "No. ": "74",
        "Kana": "だいすき",
        "Kanji": "大好き",
        "tipe": "adj-na",
        "definisi": "sangat menyenangkan, seperti sangat banyak",
        "": ""
    },
    {
        "No. ": "75",
        "Kana": "たいせつ",
        "Kanji": "大切",
        "tipe": "adj-na",
        "definisi": "penting",
        "": ""
    },
    {
        "No. ": "76",
        "Kana": "たいへん",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "sangat",
        "": ""
    },
    {
        "No. ": "77",
        "Kana": "たくさん",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "banyak, banyak, banyak",
        "": ""
    },
    {
        "No. ": "78",
        "Kana": "ちいさな",
        "Kanji": "小さな",
        "tipe": "adj-na",
        "definisi": "kecil, sedikit",
        "": ""
    },
    {
        "No. ": "79",
        "Kana": "にぎやか",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "ramai, sibuk",
        "": ""
    },
    {
        "No. ": "80",
        "Kana": "ひま",
        "Kanji": "暇",
        "tipe": "adj-na",
        "definisi": "waktu luang, waktu luang",
        "": ""
    },
    {
        "No. ": "81",
        "Kana": "へた",
        "Kanji": "下手",
        "tipe": "adj-na",
        "definisi": "tidak terampil, miskin",
        "": ""
    },
    {
        "No. ": "82",
        "Kana": "べんり",
        "Kanji": "便利",
        "tipe": "adj-na",
        "definisi": "nyaman, berguna",
        "": ""
    },
    {
        "No. ": "83",
        "Kana": "まっすぐ",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "lurus (depan), langsung",
        "": ""
    },
    {
        "No. ": "84",
        "Kana": "ゆうめい",
        "Kanji": "有名",
        "tipe": "adj-na",
        "definisi": "terkenal",
        "": ""
    },
    {
        "No. ": "85",
        "Kana": "りっぱ",
        "Kanji": "",
        "tipe": "adj-na",
        "definisi": "indah, baik",
        "": ""
    },
    {
        "No. ": "86",
        "Kana": "みんな",
        "Kanji": "",
        "tipe": "n",
        "definisi": "semua, semua orang, semua orang",
        "": ""
    },
    {
        "No. ": "87",
        "Kana": "～えん",
        "Kanji": "～円",
        "tipe": "n",
        "definisi": "yen (mata uang)",
        "": ""
    },
    {
        "No. ": "88",
        "Kana": "～かい",
        "Kanji": "～回",
        "tipe": "n",
        "definisi": "kali",
        "": ""
    },
    {
        "No. ": "89",
        "Kana": "～かい",
        "Kanji": "～階",
        "tipe": "n",
        "definisi": "lantai",
        "": ""
    },
    {
        "No. ": "90",
        "Kana": "～さつ",
        "Kanji": "～冊",
        "tipe": "n",
        "definisi": "buku",
        "": ""
    },
    {
        "No. ": "91",
        "Kana": "～など",
        "Kanji": "",
        "tipe": "n",
        "definisi": "dan lain-lain",
        "": ""
    },
    {
        "No. ": "92",
        "Kana": "～はい",
        "Kanji": "～杯",
        "tipe": "n",
        "definisi": "lembar",
        "": ""
    },
    {
        "No. ": "93",
        "Kana": "～ばん",
        "Kanji": "～番",
        "tipe": "n",
        "definisi": "gelas",
        "": ""
    },
    {
        "No. ": "94",
        "Kana": "～や",
        "Kanji": "屋",
        "tipe": "n",
        "definisi": "ke-",
        "": ""
    },
    {
        "No. ": "95",
        "Kana": "あお",
        "Kanji": "青",
        "tipe": "n",
        "definisi": "biru",
        "": ""
    },
    {
        "No. ": "96",
        "Kana": "あか",
        "Kanji": "赤",
        "tipe": "n",
        "definisi": "merah",
        "": ""
    },
    {
        "No. ": "97",
        "Kana": "あき",
        "Kanji": "秋",
        "tipe": "n",
        "definisi": "musim gugur",
        "": ""
    },
    {
        "No. ": "98",
        "Kana": "あさ",
        "Kanji": "朝",
        "tipe": "n",
        "definisi": "pagi",
        "": ""
    },
    {
        "No. ": "99",
        "Kana": "あさごはん",
        "Kanji": "朝御飯",
        "tipe": "n",
        "definisi": "sarapan",
        "": ""
    },
    {
        "No. ": "100",
        "Kana": "あさって",
        "Kanji": "",
        "tipe": "n",
        "definisi": "lusa",
        "": ""
    },
    {
        "No. ": "101",
        "Kana": "あし",
        "Kanji": "足",
        "tipe": "n",
        "definisi": "kaki, kaki",
        "": ""
    },
    {
        "No. ": "102",
        "Kana": "あした",
        "Kanji": "",
        "tipe": "n",
        "definisi": "besok",
        "": ""
    },
    {
        "No. ": "103",
        "Kana": "あそこ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ada, di sana, tempat",
        "": ""
    },
    {
        "No. ": "104",
        "Kana": "あたま",
        "Kanji": "頭",
        "tipe": "n",
        "definisi": "kepala",
        "": ""
    },
    {
        "No. ": "105",
        "Kana": "あちら",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ada, di sana, bahwa",
        "": ""
    },
    {
        "No. ": "106",
        "Kana": "あっち",
        "Kanji": "",
        "tipe": "n",
        "definisi": "di sana",
        "": ""
    },
    {
        "No. ": "107",
        "Kana": "あと",
        "Kanji": "後",
        "tipe": "n",
        "definisi": "setelah itu, sejak saat itu, di masa depan",
        "": ""
    },
    {
        "No. ": "108",
        "Kana": "あなた",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kamu",
        "": ""
    },
    {
        "No. ": "109",
        "Kana": "あに",
        "Kanji": "兄",
        "tipe": "n",
        "definisi": "kakak laki laki",
        "": ""
    },
    {
        "No. ": "110",
        "Kana": "あね",
        "Kanji": "姉",
        "tipe": "n",
        "definisi": "kakak perempuan",
        "": ""
    },
    {
        "No. ": "111",
        "Kana": "あの",
        "Kanji": "",
        "tipe": "n",
        "definisi": "bahwa di sana",
        "": ""
    },
    {
        "No. ": "112",
        "Kana": "アパート",
        "Kanji": "",
        "tipe": "n",
        "definisi": "apartemen",
        "": ""
    },
    {
        "No. ": "113",
        "Kana": "あめ",
        "Kanji": "雨",
        "tipe": "n",
        "definisi": "hujan",
        "": ""
    },
    {
        "No. ": "114",
        "Kana": "あめ",
        "Kanji": "飴",
        "tipe": "n",
        "definisi": "permen ",
        "": ""
    },
    {
        "No. ": "115",
        "Kana": "あれ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "itu",
        "": ""
    },
    {
        "No. ": "116",
        "Kana": "いいえ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tidak, tidak sama sekali",
        "": ""
    },
    {
        "No. ": "117",
        "Kana": "いくつ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "berapa banyak ?, berapa lama?",
        "": ""
    },
    {
        "No. ": "118",
        "Kana": "いけ",
        "Kanji": "池",
        "tipe": "n",
        "definisi": "danau",
        "": ""
    },
    {
        "No. ": "119",
        "Kana": "いしゃ",
        "Kanji": "医者",
        "tipe": "n",
        "definisi": "dokter (medis)",
        "": ""
    },
    {
        "No. ": "120",
        "Kana": "いす",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kursi",
        "": ""
    },
    {
        "No. ": "121",
        "Kana": "いちにち",
        "Kanji": "一日",
        "tipe": "n",
        "definisi": "1 hari (durasi)",
        "": ""
    },
    {
        "No. ": "122",
        "Kana": "いちばん",
        "Kanji": "",
        "tipe": "n",
        "definisi": "terbaik, pertama, nomor satu",
        "": ""
    },
    {
        "No. ": "123",
        "Kana": "いつか",
        "Kanji": "五日",
        "tipe": "n",
        "definisi": "lima hari, hari kelima (bulan)",
        "": ""
    },
    {
        "No. ": "124",
        "Kana": "いつつ",
        "Kanji": "五つ",
        "tipe": "n",
        "definisi": "lima",
        "": ""
    },
    {
        "No. ": "125",
        "Kana": "いぬ",
        "Kanji": "犬",
        "tipe": "n",
        "definisi": "anjing",
        "": ""
    },
    {
        "No. ": "126",
        "Kana": "いま",
        "Kanji": "今",
        "tipe": "n",
        "definisi": "sekarang",
        "": ""
    },
    {
        "No. ": "127",
        "Kana": "いみ",
        "Kanji": "意味",
        "tipe": "n",
        "definisi": "berarti",
        "": ""
    },
    {
        "No. ": "128",
        "Kana": "いもうと",
        "Kanji": "妹",
        "tipe": "n",
        "definisi": "adik perempuan",
        "": ""
    },
    {
        "No. ": "129",
        "Kana": "いりぐち",
        "Kanji": "入口",
        "tipe": "n",
        "definisi": "gerbang masuk",
        "": ""
    },
    {
        "No. ": "130",
        "Kana": "いろ",
        "Kanji": "色",
        "tipe": "n",
        "definisi": "warna",
        "": ""
    },
    {
        "No. ": "131",
        "Kana": "うえ",
        "Kanji": "上",
        "tipe": "n",
        "definisi": "di atas, di atas",
        "": ""
    },
    {
        "No. ": "132",
        "Kana": "うしろ",
        "Kanji": "後ろ",
        "tipe": "n",
        "definisi": "belakang, rear",
        "": ""
    },
    {
        "No. ": "133",
        "Kana": "うた",
        "Kanji": "歌",
        "tipe": "n",
        "definisi": "lagu",
        "": ""
    },
    {
        "No. ": "134",
        "Kana": "うち",
        "Kanji": "",
        "tipe": "n",
        "definisi": "rumah, dalam",
        "": ""
    },
    {
        "No. ": "135",
        "Kana": "うみ",
        "Kanji": "海",
        "tipe": "n",
        "definisi": "laut pantai",
        "": ""
    },
    {
        "No. ": "136",
        "Kana": "うわぎ",
        "Kanji": "上着",
        "tipe": "n",
        "definisi": "mantel, jaket",
        "": ""
    },
    {
        "No. ": "137",
        "Kana": "え",
        "Kanji": "絵",
        "tipe": "n",
        "definisi": "gambar, menggambar, melukis, sketsa",
        "": ""
    },
    {
        "No. ": "138",
        "Kana": "えいが",
        "Kanji": "映画",
        "tipe": "n",
        "definisi": "film, Film",
        "": ""
    },
    {
        "No. ": "139",
        "Kana": "えいがかん",
        "Kanji": "映画館",
        "tipe": "n",
        "definisi": "bioskop (teater), bioskop",
        "": ""
    },
    {
        "No. ": "140",
        "Kana": "えいご",
        "Kanji": "英語",
        "tipe": "n",
        "definisi": "bahasa Inggris",
        "": ""
    },
    {
        "No. ": "141",
        "Kana": "えき",
        "Kanji": "駅",
        "tipe": "n",
        "definisi": "stasiun",
        "": ""
    },
    {
        "No. ": "142",
        "Kana": "エレベーター",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tangga berjalan",
        "": ""
    },
    {
        "No. ": "143",
        "Kana": "えんぴつ",
        "Kanji": "鉛筆",
        "tipe": "n",
        "definisi": "pensil",
        "": ""
    },
    {
        "No. ": "144",
        "Kana": "おおぜい",
        "Kanji": "大勢",
        "tipe": "n",
        "definisi": "sejumlah besar orang",
        "": ""
    },
    {
        "No. ": "145",
        "Kana": "おかあさん",
        "Kanji": "お母さん",
        "tipe": "n",
        "definisi": "ibu",
        "": ""
    },
    {
        "No. ": "146",
        "Kana": "おかし",
        "Kanji": "お菓子",
        "tipe": "n",
        "definisi": "permen, permen, permen",
        "": ""
    },
    {
        "No. ": "147",
        "Kana": "おかね",
        "Kanji": "お金",
        "tipe": "n",
        "definisi": "uang",
        "": ""
    },
    {
        "No. ": "148",
        "Kana": "おくさん",
        "Kanji": "奥さん",
        "tipe": "n",
        "definisi": "istri",
        "": ""
    },
    {
        "No. ": "149",
        "Kana": "おさけ",
        "Kanji": "お酒",
        "tipe": "n",
        "definisi": "alkohol, sake (arak beras)",
        "": ""
    },
    {
        "No. ": "150",
        "Kana": "おさら",
        "Kanji": "お皿",
        "tipe": "n",
        "definisi": "piring, hidangan",
        "": ""
    },
    {
        "No. ": "151",
        "Kana": "おじ・さん",
        "Kanji": "伯父/叔父・さん",
        "tipe": "n",
        "definisi": "paman, pria paruh baya",
        "": ""
    },
    {
        "No. ": "152",
        "Kana": "おじいさん",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kakek, warga senior laki-laki",
        "": ""
    },
    {
        "No. ": "153",
        "Kana": "おちゃ",
        "Kanji": "お茶",
        "tipe": "n",
        "definisi": "teh (hijau)",
        "": ""
    },
    {
        "No. ": "154",
        "Kana": "おてあらい",
        "Kanji": "お手洗い",
        "tipe": "n",
        "definisi": "toilet, WC, kamar mandi",
        "": ""
    },
    {
        "No. ": "155",
        "Kana": "おとうさん",
        "Kanji": "お父さん",
        "tipe": "n",
        "definisi": "ayah",
        "": ""
    },
    {
        "No. ": "156",
        "Kana": "おとうと",
        "Kanji": "弟",
        "tipe": "n",
        "definisi": "adik laki-laki",
        "": ""
    },
    {
        "No. ": "157",
        "Kana": "おとこ",
        "Kanji": "男",
        "tipe": "n",
        "definisi": "pria",
        "": ""
    },
    {
        "No. ": "158",
        "Kana": "おとこのこ",
        "Kanji": "男の子",
        "tipe": "n",
        "definisi": "anak laki-laki",
        "": ""
    },
    {
        "No. ": "159",
        "Kana": "おととい",
        "Kanji": "",
        "tipe": "n",
        "definisi": "hari sebelum kemarin",
        "": ""
    },
    {
        "No. ": "160",
        "Kana": "おととし",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tahun sebelum terakhir",
        "": ""
    },
    {
        "No. ": "161",
        "Kana": "おとな",
        "Kanji": "大人",
        "tipe": "n",
        "definisi": "dewasa",
        "": ""
    },
    {
        "No. ": "162",
        "Kana": "おなか",
        "Kanji": "",
        "tipe": "n",
        "definisi": "perut",
        "": ""
    },
    {
        "No. ": "163",
        "Kana": "おにいさん",
        "Kanji": "お兄さん",
        "tipe": "n",
        "definisi": "kakak laki-laki",
        "": ""
    },
    {
        "No. ": "164",
        "Kana": "おねえさん",
        "Kanji": "お姉さん",
        "tipe": "n",
        "definisi": "kakak perempuan",
        "": ""
    },
    {
        "No. ": "165",
        "Kana": "おばあさん",
        "Kanji": "",
        "tipe": "n",
        "definisi": "nenek, perempuan manula",
        "": ""
    },
    {
        "No. ": "166",
        "Kana": "おばさん",
        "Kanji": "伯母さん/叔母さん",
        "tipe": "n",
        "definisi": "bibi",
        "": ""
    },
    {
        "No. ": "167",
        "Kana": "おふろ",
        "Kanji": "お風呂",
        "tipe": "n",
        "definisi": "mandi",
        "": ""
    },
    {
        "No. ": "168",
        "Kana": "おべんとう",
        "Kanji": "お弁当",
        "tipe": "n",
        "definisi": "kotak makan siang",
        "": ""
    },
    {
        "No. ": "169",
        "Kana": "おまわりさん",
        "Kanji": "",
        "tipe": "n",
        "definisi": "polisi (istilah ramah)",
        "": ""
    },
    {
        "No. ": "170",
        "Kana": "おんがく",
        "Kanji": "音楽",
        "tipe": "n",
        "definisi": "musik",
        "": ""
    },
    {
        "No. ": "171",
        "Kana": "おんな",
        "Kanji": "女",
        "tipe": "n",
        "definisi": "wanita, gadis, anak",
        "": ""
    },
    {
        "No. ": "172",
        "Kana": "おんなのこ",
        "Kanji": "女の子",
        "tipe": "n",
        "definisi": "gadis",
        "": ""
    },
    {
        "No. ": "173",
        "Kana": "がいこく",
        "Kanji": "外国",
        "tipe": "n",
        "definisi": "negara asing",
        "": ""
    },
    {
        "No. ": "174",
        "Kana": "がいこくじん",
        "Kanji": "外国人",
        "tipe": "n",
        "definisi": "orang asing",
        "": ""
    },
    {
        "No. ": "175",
        "Kana": "かいしゃ",
        "Kanji": "会社",
        "tipe": "n",
        "definisi": "perusahaan, korporasi",
        "": ""
    },
    {
        "No. ": "176",
        "Kana": "かいだん",
        "Kanji": "階段",
        "tipe": "n",
        "definisi": "tangga",
        "": ""
    },
    {
        "No. ": "177",
        "Kana": "かいもの",
        "Kanji": "買い物",
        "tipe": "n",
        "definisi": "perbelanjaan",
        "": ""
    },
    {
        "No. ": "178",
        "Kana": "かお",
        "Kanji": "顔",
        "tipe": "n",
        "definisi": "wajah",
        "": ""
    },
    {
        "No. ": "179",
        "Kana": "かぎ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kunci",
        "": ""
    },
    {
        "No. ": "180",
        "Kana": "がくせい",
        "Kanji": "学生",
        "tipe": "n",
        "definisi": "siswa",
        "": ""
    },
    {
        "No. ": "181",
        "Kana": "かさ",
        "Kanji": "傘",
        "tipe": "n",
        "definisi": "payung",
        "": ""
    },
    {
        "No. ": "182",
        "Kana": "かぜ",
        "Kanji": "風",
        "tipe": "n",
        "definisi": "angin",
        "": ""
    },
    {
        "No. ": "183",
        "Kana": "かぜ",
        "Kanji": "風邪",
        "tipe": "n",
        "definisi": "masuk angin",
        "": ""
    },
    {
        "No. ": "184",
        "Kana": "かぞく",
        "Kanji": "家族",
        "tipe": "n",
        "definisi": "keluarga",
        "": ""
    },
    {
        "No. ": "185",
        "Kana": "かた",
        "Kanji": "方",
        "tipe": "n",
        "definisi": "orang",
        "": ""
    },
    {
        "No. ": "186",
        "Kana": "かたかな",
        "Kanji": "片仮名",
        "tipe": "n",
        "definisi": "katakana",
        "": ""
    },
    {
        "No. ": "187",
        "Kana": "がっこう",
        "Kanji": "学校",
        "tipe": "n",
        "definisi": "sekolah",
        "": ""
    },
    {
        "No. ": "188",
        "Kana": "カップ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "cangkir",
        "": ""
    },
    {
        "No. ": "189",
        "Kana": "かてい",
        "Kanji": "家庭",
        "tipe": "n",
        "definisi": "rumah, rumah tangga",
        "": ""
    },
    {
        "No. ": "190",
        "Kana": "かど",
        "Kanji": "角",
        "tipe": "n",
        "definisi": "sudut (misalnya meja)",
        "": ""
    },
    {
        "No. ": "191",
        "Kana": "かばん",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tas, keranjang",
        "": ""
    },
    {
        "No. ": "192",
        "Kana": "かびん",
        "Kanji": "花瓶",
        "tipe": "n",
        "definisi": "vas bunga",
        "": ""
    },
    {
        "No. ": "193",
        "Kana": "かみ",
        "Kanji": "紙",
        "tipe": "n",
        "definisi": "kertas",
        "": ""
    },
    {
        "No. ": "194",
        "Kana": "カメラ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kamera",
        "": ""
    },
    {
        "No. ": "195",
        "Kana": "かようび",
        "Kanji": "火曜日",
        "tipe": "n",
        "definisi": "Selasa",
        "": ""
    },
    {
        "No. ": "196",
        "Kana": "からだ",
        "Kanji": "体",
        "tipe": "n",
        "definisi": "tubuh",
        "": ""
    },
    {
        "No. ": "197",
        "Kana": "カレー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kari",
        "": ""
    },
    {
        "No. ": "198",
        "Kana": "カレンダー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kalender",
        "": ""
    },
    {
        "No. ": "199",
        "Kana": "かわ",
        "Kanji": "川/河",
        "tipe": "n",
        "definisi": "sungai",
        "": ""
    },
    {
        "No. ": "200",
        "Kana": "かんじ",
        "Kanji": "漢字",
        "tipe": "n",
        "definisi": "kanji, karakter Cina",
        "": ""
    },
    {
        "No. ": "201",
        "Kana": "き",
        "Kanji": "木",
        "tipe": "n",
        "definisi": "pohon, kayu",
        "": ""
    },
    {
        "No. ": "202",
        "Kana": "きいろ",
        "Kanji": "黄色",
        "tipe": "n",
        "definisi": "kuning",
        "": ""
    },
    {
        "No. ": "203",
        "Kana": "きた",
        "Kanji": "北",
        "tipe": "n",
        "definisi": "utara",
        "": ""
    },
    {
        "No. ": "204",
        "Kana": "ギター",
        "Kanji": "",
        "tipe": "n",
        "definisi": "gitar",
        "": ""
    },
    {
        "No. ": "205",
        "Kana": "きっさてん",
        "Kanji": "喫茶店",
        "tipe": "n",
        "definisi": "coffee lounge",
        "": ""
    },
    {
        "No. ": "206",
        "Kana": "きって",
        "Kanji": "切手",
        "tipe": "n",
        "definisi": "cap (misalnya. ongkos kirim)",
        "": ""
    },
    {
        "No. ": "207",
        "Kana": "きっぷ",
        "Kanji": "切符",
        "tipe": "n",
        "definisi": "tiket",
        "": ""
    },
    {
        "No. ": "208",
        "Kana": "きのう",
        "Kanji": "昨日",
        "tipe": "n",
        "definisi": "kemarin",
        "": ""
    },
    {
        "No. ": "209",
        "Kana": "ぎゅうにく",
        "Kanji": "牛肉",
        "tipe": "n",
        "definisi": "daging sapi",
        "": ""
    },
    {
        "No. ": "210",
        "Kana": "ぎゅうにゅう",
        "Kanji": "牛乳",
        "tipe": "n",
        "definisi": "susu",
        "": ""
    },
    {
        "No. ": "211",
        "Kana": "きょう",
        "Kanji": "今日",
        "tipe": "n",
        "definisi": "hari ini, hari ini",
        "": ""
    },
    {
        "No. ": "212",
        "Kana": "きょうしつ",
        "Kanji": "教室",
        "tipe": "n",
        "definisi": "kelas",
        "": ""
    },
    {
        "No. ": "213",
        "Kana": "きょうだい",
        "Kanji": "兄弟",
        "tipe": "n",
        "definisi": "saudara (saudara-saudara)",
        "": ""
    },
    {
        "No. ": "214",
        "Kana": "きょねん",
        "Kanji": "去年",
        "tipe": "n",
        "definisi": "tahun lalu",
        "": ""
    },
    {
        "No. ": "215",
        "Kana": "キロ/キログラム",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kilo (kilogram)",
        "": ""
    },
    {
        "No. ": "216",
        "Kana": "キロ/キロメートル",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kilo (kilometer)",
        "": ""
    },
    {
        "No. ": "217",
        "Kana": "ぎんこう",
        "Kanji": "銀行",
        "tipe": "n",
        "definisi": "bank",
        "": ""
    },
    {
        "No. ": "218",
        "Kana": "きんようび",
        "Kanji": "金曜日",
        "tipe": "n",
        "definisi": "Jumat",
        "": ""
    },
    {
        "No. ": "219",
        "Kana": "くすり",
        "Kanji": "薬",
        "tipe": "n",
        "definisi": "obat",
        "": ""
    },
    {
        "No. ": "220",
        "Kana": "くだもの",
        "Kanji": "果物",
        "tipe": "n",
        "definisi": "buah",
        "": ""
    },
    {
        "No. ": "221",
        "Kana": "くち",
        "Kanji": "口",
        "tipe": "n",
        "definisi": "mulut, lubang, membuka",
        "": ""
    },
    {
        "No. ": "222",
        "Kana": "くつ",
        "Kanji": "靴",
        "tipe": "n",
        "definisi": "sepatu, alas kaki",
        "": ""
    },
    {
        "No. ": "223",
        "Kana": "くつした",
        "Kanji": "靴下",
        "tipe": "n",
        "definisi": "kaus kaki",
        "": ""
    },
    {
        "No. ": "224",
        "Kana": "くに",
        "Kanji": "国",
        "tipe": "n",
        "definisi": "negara",
        "": ""
    },
    {
        "No. ": "225",
        "Kana": "くもり",
        "Kanji": "曇り",
        "tipe": "n",
        "definisi": "mendung, cuaca berawan",
        "": ""
    },
    {
        "No. ": "226",
        "Kana": "クラス",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kelas",
        "": ""
    },
    {
        "No. ": "227",
        "Kana": "グラム",
        "Kanji": "",
        "tipe": "n",
        "definisi": "gram",
        "": ""
    },
    {
        "No. ": "228",
        "Kana": "くるま",
        "Kanji": "車",
        "tipe": "n",
        "definisi": "mobil, kendaraan",
        "": ""
    },
    {
        "No. ": "229",
        "Kana": "くろ",
        "Kanji": "黒",
        "tipe": "n",
        "definisi": "hitam",
        "": ""
    },
    {
        "No. ": "230",
        "Kana": "けいかん",
        "Kanji": "警官",
        "tipe": "n",
        "definisi": "polisi",
        "": ""
    },
    {
        "No. ": "231",
        "Kana": "けさ",
        "Kanji": "今朝",
        "tipe": "n",
        "definisi": "pagi ini",
        "": ""
    },
    {
        "No. ": "232",
        "Kana": "けっこん（する）",
        "Kanji": "結婚",
        "tipe": "n",
        "definisi": "pernikahan",
        "": ""
    },
    {
        "No. ": "233",
        "Kana": "げつようび",
        "Kanji": "月曜日",
        "tipe": "n",
        "definisi": "Senin",
        "": ""
    },
    {
        "No. ": "234",
        "Kana": "げんかん",
        "Kanji": "玄関",
        "tipe": "n",
        "definisi": "pintu masuk arah, entry hall",
        "": ""
    },
    {
        "No. ": "235",
        "Kana": "コート",
        "Kanji": "",
        "tipe": "n",
        "definisi": "mantel",
        "": ""
    },
    {
        "No. ": "236",
        "Kana": "コーヒー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kopi",
        "": ""
    },
    {
        "No. ": "237",
        "Kana": "こうえん",
        "Kanji": "公園",
        "tipe": "n",
        "definisi": "(Publik) Taman",
        "": ""
    },
    {
        "No. ": "238",
        "Kana": "こうさてん",
        "Kanji": "交差点",
        "tipe": "n",
        "definisi": "persimpangan",
        "": ""
    },
    {
        "No. ": "239",
        "Kana": "こうちゃ",
        "Kanji": "紅茶",
        "tipe": "n",
        "definisi": "teh hitam",
        "": ""
    },
    {
        "No. ": "240",
        "Kana": "こうばん",
        "Kanji": "交番",
        "tipe": "n",
        "definisi": "box polisi",
        "": ""
    },
    {
        "No. ": "241",
        "Kana": "こえ",
        "Kanji": "声",
        "tipe": "n",
        "definisi": "suara",
        "": ""
    },
    {
        "No. ": "242",
        "Kana": "ここ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "sini, tempat ini",
        "": ""
    },
    {
        "No. ": "243",
        "Kana": "ごご",
        "Kanji": "午後",
        "tipe": "n",
        "definisi": "sore, kepala kantor pos",
        "": ""
    },
    {
        "No. ": "244",
        "Kana": "ここのか",
        "Kanji": "九日",
        "tipe": "n",
        "definisi": "sembilan hari, hari kesembilan (dari bulan)",
        "": ""
    },
    {
        "No. ": "245",
        "Kana": "ここのつ",
        "Kanji": "九つ",
        "tipe": "n",
        "definisi": "sembilan",
        "": ""
    },
    {
        "No. ": "246",
        "Kana": "ごぜん",
        "Kanji": "午前",
        "tipe": "n",
        "definisi": "pagi, A.M.",
        "": ""
    },
    {
        "No. ": "247",
        "Kana": "こちら",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ini orang misalnya, cara",
        "": ""
    },
    {
        "No. ": "248",
        "Kana": "こっち",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ini orang misalnya, cara",
        "": ""
    },
    {
        "No. ": "249",
        "Kana": "コップ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "cangkir",
        "": ""
    },
    {
        "No. ": "250",
        "Kana": "ことし",
        "Kanji": "今年",
        "tipe": "n",
        "definisi": "tahun ini",
        "": ""
    },
    {
        "No. ": "251",
        "Kana": "ことば",
        "Kanji": "言葉",
        "tipe": "n",
        "definisi": "kata",
        "": ""
    },
    {
        "No. ": "252",
        "Kana": "こども",
        "Kanji": "子供",
        "tipe": "n",
        "definisi": "anak, anak-anak",
        "": ""
    },
    {
        "No. ": "253",
        "Kana": "この",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ini",
        "": ""
    },
    {
        "No. ": "254",
        "Kana": "ごはん",
        "Kanji": "御飯",
        "tipe": "n",
        "definisi": "beras (dimasak), makanan",
        "": ""
    },
    {
        "No. ": "255",
        "Kana": "コピー・する",
        "Kanji": "",
        "tipe": "n",
        "definisi": "untuk menyalin",
        "": ""
    },
    {
        "No. ": "256",
        "Kana": "これ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ini",
        "": ""
    },
    {
        "No. ": "257",
        "Kana": "こんげつ",
        "Kanji": "今月",
        "tipe": "n",
        "definisi": "bulan ini",
        "": ""
    },
    {
        "No. ": "258",
        "Kana": "こんしゅう",
        "Kanji": "今週",
        "tipe": "n",
        "definisi": "minggu ini",
        "": ""
    },
    {
        "No. ": "259",
        "Kana": "こんばん",
        "Kanji": "今晩",
        "tipe": "n",
        "definisi": "malam ini, malam ini",
        "": ""
    },
    {
        "No. ": "260",
        "Kana": "さいふ",
        "Kanji": "財布",
        "tipe": "n",
        "definisi": "dompet",
        "": ""
    },
    {
        "No. ": "261",
        "Kana": "さかな",
        "Kanji": "魚",
        "tipe": "n",
        "definisi": "ikan",
        "": ""
    },
    {
        "No. ": "262",
        "Kana": "さき",
        "Kanji": "先",
        "tipe": "n",
        "definisi": "masa depan, mantan, sebelumnya",
        "": ""
    },
    {
        "No. ": "263",
        "Kana": "さくぶん",
        "Kanji": "作文",
        "tipe": "n",
        "definisi": "komposisi, menulis",
        "": ""
    },
    {
        "No. ": "264",
        "Kana": "ざっし",
        "Kanji": "雑誌",
        "tipe": "n",
        "definisi": "majalah",
        "": ""
    },
    {
        "No. ": "265",
        "Kana": "さとう",
        "Kanji": "砂糖",
        "tipe": "n",
        "definisi": "Gula",
        "": ""
    },
    {
        "No. ": "266",
        "Kana": "さらいねん",
        "Kanji": "さ来年",
        "tipe": "n",
        "definisi": "tahun setelah berikutnya",
        "": ""
    },
    {
        "No. ": "267",
        "Kana": "さんぽ（する）",
        "Kanji": "散歩",
        "tipe": "n",
        "definisi": "berjalan, berjalan-jalan",
        "": ""
    },
    {
        "No. ": "268",
        "Kana": "しお",
        "Kanji": "塩",
        "tipe": "n",
        "definisi": "garam",
        "": ""
    },
    {
        "No. ": "269",
        "Kana": "じかん",
        "Kanji": "時間",
        "tipe": "n",
        "definisi": "waktu",
        "": ""
    },
    {
        "No. ": "270",
        "Kana": "しごと",
        "Kanji": "仕事",
        "tipe": "n",
        "definisi": "pekerjaan, pekerjaan, pekerjaan",
        "": ""
    },
    {
        "No. ": "271",
        "Kana": "じしょ",
        "Kanji": "辞書",
        "tipe": "n",
        "definisi": "kamus",
        "": ""
    },
    {
        "No. ": "272",
        "Kana": "した",
        "Kanji": "下",
        "tipe": "n",
        "definisi": "bawah, bawah, bawah",
        "": ""
    },
    {
        "No. ": "273",
        "Kana": "しつもん",
        "Kanji": "質問",
        "tipe": "n",
        "definisi": "pertanyaan, penyelidikan",
        "": ""
    },
    {
        "No. ": "274",
        "Kana": "じてんしゃ",
        "Kanji": "自転車",
        "tipe": "n",
        "definisi": "sepeda",
        "": ""
    },
    {
        "No. ": "275",
        "Kana": "じどうしゃ",
        "Kanji": "自動車",
        "tipe": "n",
        "definisi": "mobil",
        "": ""
    },
    {
        "No. ": "276",
        "Kana": "じびき",
        "Kanji": "字引",
        "tipe": "n",
        "definisi": "kamus",
        "": ""
    },
    {
        "No. ": "277",
        "Kana": "じぶん",
        "Kanji": "自分",
        "tipe": "n",
        "definisi": "sendiri, diri sendiri",
        "": ""
    },
    {
        "No. ": "278",
        "Kana": "しゃしん",
        "Kanji": "写真",
        "tipe": "n",
        "definisi": "foto",
        "": ""
    },
    {
        "No. ": "279",
        "Kana": "シャツ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "shirt, singlet",
        "": ""
    },
    {
        "No. ": "280",
        "Kana": "シャワー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "mandi",
        "": ""
    },
    {
        "No. ": "281",
        "Kana": "じゅぎょう",
        "Kanji": "授業",
        "tipe": "n",
        "definisi": "pelajaran, pekerjaan kelas",
        "": ""
    },
    {
        "No. ": "282",
        "Kana": "しゅくだい",
        "Kanji": "宿題",
        "tipe": "n",
        "definisi": "pekerjaan rumah",
        "": ""
    },
    {
        "No. ": "283",
        "Kana": "しょうゆ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kecap",
        "": ""
    },
    {
        "No. ": "284",
        "Kana": "しょくどう",
        "Kanji": "食堂",
        "tipe": "n",
        "definisi": "kantin, aula makan",
        "": ""
    },
    {
        "No. ": "285",
        "Kana": "しろ",
        "Kanji": "白",
        "tipe": "n",
        "definisi": "putih",
        "": ""
    },
    {
        "No. ": "286",
        "Kana": "しんぶん",
        "Kanji": "新聞",
        "tipe": "n",
        "definisi": "koran",
        "": ""
    },
    {
        "No. ": "287",
        "Kana": "すいようび",
        "Kanji": "水曜日",
        "tipe": "n",
        "definisi": "Rabu",
        "": ""
    },
    {
        "No. ": "288",
        "Kana": "スカート",
        "Kanji": "",
        "tipe": "n",
        "definisi": "rok",
        "": ""
    },
    {
        "No. ": "289",
        "Kana": "ストーブ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pemanas",
        "": ""
    },
    {
        "No. ": "290",
        "Kana": "スプーン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "sendok",
        "": ""
    },
    {
        "No. ": "291",
        "Kana": "スポーツ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "olahraga",
        "": ""
    },
    {
        "No. ": "292",
        "Kana": "ズボン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "celana",
        "": ""
    },
    {
        "No. ": "293",
        "Kana": "スリッパ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "sandal",
        "": ""
    },
    {
        "No. ": "294",
        "Kana": "セーター",
        "Kanji": "",
        "tipe": "n",
        "definisi": "sweater, jumper",
        "": ""
    },
    {
        "No. ": "295",
        "Kana": "せい",
        "Kanji": "背",
        "tipe": "n",
        "definisi": "tinggi, perawakannya",
        "": ""
    },
    {
        "No. ": "296",
        "Kana": "せいと",
        "Kanji": "生徒",
        "tipe": "n",
        "definisi": "murid",
        "": ""
    },
    {
        "No. ": "297",
        "Kana": "せっけん",
        "Kanji": "石鹸",
        "tipe": "n",
        "definisi": "sabun mandi",
        "": ""
    },
    {
        "No. ": "298",
        "Kana": "せびろ",
        "Kanji": "背広",
        "tipe": "n",
        "definisi": "setelan jas untuk bekerja",
        "": ""
    },
    {
        "No. ": "299",
        "Kana": "ゼロ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "nol",
        "": ""
    },
    {
        "No. ": "300",
        "Kana": "せんげつ",
        "Kanji": "先月",
        "tipe": "n",
        "definisi": "bulan lalu",
        "": ""
    },
    {
        "No. ": "301",
        "Kana": "せんしゅう",
        "Kanji": "先週",
        "tipe": "n",
        "definisi": "pekan lalu, minggu sebelumnya",
        "": ""
    },
    {
        "No. ": "302",
        "Kana": "せんせい",
        "Kanji": "先生",
        "tipe": "n",
        "definisi": "guru, guru, dokter",
        "": ""
    },
    {
        "No. ": "303",
        "Kana": "せんたく",
        "Kanji": "洗濯",
        "tipe": "n",
        "definisi": "cuci, laundry",
        "": ""
    },
    {
        "No. ": "304",
        "Kana": "ぜんぶ",
        "Kanji": "全部",
        "tipe": "n",
        "definisi": "semua, seluruh, seluruh",
        "": ""
    },
    {
        "No. ": "305",
        "Kana": "そうじ（する）",
        "Kanji": "掃除",
        "tipe": "n",
        "definisi": "membersihkan, menyapu",
        "": ""
    },
    {
        "No. ": "306",
        "Kana": "そこ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tempat itu, ada",
        "": ""
    },
    {
        "No. ": "307",
        "Kana": "そちら",
        "Kanji": "",
        "tipe": "n",
        "definisi": "di sana",
        "": ""
    },
    {
        "No. ": "308",
        "Kana": "そと",
        "Kanji": "外",
        "tipe": "n",
        "definisi": "luar, eksterior",
        "": ""
    },
    {
        "No. ": "309",
        "Kana": "その",
        "Kanji": "",
        "tipe": "n",
        "definisi": "bahwa",
        "": ""
    },
    {
        "No. ": "310",
        "Kana": "そば",
        "Kanji": "",
        "tipe": "n",
        "definisi": "dekat, dekat, di samping",
        "": ""
    },
    {
        "No. ": "311",
        "Kana": "そら",
        "Kanji": "空",
        "tipe": "n",
        "definisi": "langit",
        "": ""
    },
    {
        "No. ": "312",
        "Kana": "それ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "itu, bahwa",
        "": ""
    },
    {
        "No. ": "313",
        "Kana": "だいがく",
        "Kanji": "大学",
        "tipe": "n",
        "definisi": "Universitas",
        "": ""
    },
    {
        "No. ": "314",
        "Kana": "たいしかん",
        "Kanji": "大使館",
        "tipe": "n",
        "definisi": "kedutaan",
        "": ""
    },
    {
        "No. ": "315",
        "Kana": "だいどころ",
        "Kanji": "台所",
        "tipe": "n",
        "definisi": "dapur",
        "": ""
    },
    {
        "No. ": "316",
        "Kana": "タクシー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "taksi",
        "": ""
    },
    {
        "No. ": "317",
        "Kana": "たて",
        "Kanji": "",
        "tipe": "n",
        "definisi": "panjang, tinggi",
        "": ""
    },
    {
        "No. ": "318",
        "Kana": "たてもの",
        "Kanji": "建物",
        "tipe": "n",
        "definisi": "bangunan",
        "": ""
    },
    {
        "No. ": "319",
        "Kana": "たばこ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tembakau, rokok",
        "": ""
    },
    {
        "No. ": "320",
        "Kana": "たべもの",
        "Kanji": "食べ物",
        "tipe": "n",
        "definisi": "makanan",
        "": ""
    },
    {
        "No. ": "321",
        "Kana": "たまご",
        "Kanji": "卵",
        "tipe": "n",
        "definisi": "telur",
        "": ""
    },
    {
        "No. ": "322",
        "Kana": "だれ",
        "Kanji": "誰",
        "tipe": "n",
        "definisi": "siapa",
        "": ""
    },
    {
        "No. ": "323",
        "Kana": "だれか",
        "Kanji": "誰か",
        "tipe": "n",
        "definisi": "seseorang seseorang",
        "": ""
    },
    {
        "No. ": "324",
        "Kana": "たんじょうび",
        "Kanji": "誕生日",
        "tipe": "n",
        "definisi": "ulang tahun",
        "": ""
    },
    {
        "No. ": "325",
        "Kana": "ちかく",
        "Kanji": "近く",
        "tipe": "n",
        "definisi": "dekat",
        "": ""
    },
    {
        "No. ": "326",
        "Kana": "ちかてつ",
        "Kanji": "地下鉄",
        "tipe": "n",
        "definisi": "kereta bawah tanah, kereta bawah tanah",
        "": ""
    },
    {
        "No. ": "327",
        "Kana": "ちず",
        "Kanji": "地図",
        "tipe": "n",
        "definisi": "peta",
        "": ""
    },
    {
        "No. ": "328",
        "Kana": "ちち",
        "Kanji": "父",
        "tipe": "n",
        "definisi": "ayah",
        "": ""
    },
    {
        "No. ": "329",
        "Kana": "ちゃいろ",
        "Kanji": "茶色",
        "tipe": "n",
        "definisi": "cokelat",
        "": ""
    },
    {
        "No. ": "330",
        "Kana": "ちゃわん",
        "Kanji": "",
        "tipe": "n",
        "definisi": "mangkuk nasi",
        "": ""
    },
    {
        "No. ": "331",
        "Kana": "ついたち",
        "Kanji": "一日",
        "tipe": "n",
        "definisi": "untuk satu hari, satu bulan",
        "": ""
    },
    {
        "No. ": "332",
        "Kana": "つぎ",
        "Kanji": "次",
        "tipe": "n",
        "definisi": "lanjut",
        "": ""
    },
    {
        "No. ": "333",
        "Kana": "つくえ",
        "Kanji": "机",
        "tipe": "n",
        "definisi": "meja tulis",
        "": ""
    },
    {
        "No. ": "334",
        "Kana": "て",
        "Kanji": "手",
        "tipe": "n",
        "definisi": "tangan",
        "": ""
    },
    {
        "No. ": "335",
        "Kana": "テープ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tape",
        "": ""
    },
    {
        "No. ": "336",
        "Kana": "テーブル",
        "Kanji": "",
        "tipe": "n",
        "definisi": "meja",
        "": ""
    },
    {
        "No. ": "337",
        "Kana": "テープレコーダー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "alat perekam",
        "": ""
    },
    {
        "No. ": "338",
        "Kana": "てがみ",
        "Kanji": "手紙",
        "tipe": "n",
        "definisi": "surat",
        "": ""
    },
    {
        "No. ": "339",
        "Kana": "でぐち",
        "Kanji": "出口",
        "tipe": "n",
        "definisi": "keluar",
        "": ""
    },
    {
        "No. ": "340",
        "Kana": "テスト",
        "Kanji": "",
        "tipe": "n",
        "definisi": "ujian",
        "": ""
    },
    {
        "No. ": "341",
        "Kana": "デパート",
        "Kanji": "",
        "tipe": "n",
        "definisi": "toko serba ada",
        "": ""
    },
    {
        "No. ": "342",
        "Kana": "テレビ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "televisi, TV",
        "": ""
    },
    {
        "No. ": "343",
        "Kana": "てんき",
        "Kanji": "天気",
        "tipe": "n",
        "definisi": "cuaca",
        "": ""
    },
    {
        "No. ": "344",
        "Kana": "でんき",
        "Kanji": "電気",
        "tipe": "n",
        "definisi": "listrik, (listrik) cahaya",
        "": ""
    },
    {
        "No. ": "345",
        "Kana": "でんしゃ",
        "Kanji": "電車",
        "tipe": "n",
        "definisi": "kereta listrik",
        "": ""
    },
    {
        "No. ": "346",
        "Kana": "でんわ",
        "Kanji": "電話",
        "tipe": "n",
        "definisi": "telepon",
        "": ""
    },
    {
        "No. ": "347",
        "Kana": "と",
        "Kanji": "戸",
        "tipe": "n",
        "definisi": "pintu (gaya Jepang)",
        "": ""
    },
    {
        "No. ": "348",
        "Kana": "ドア",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pintu (gaya Barat)",
        "": ""
    },
    {
        "No. ": "349",
        "Kana": "トイレ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "toilet",
        "": ""
    },
    {
        "No. ": "350",
        "Kana": "どうぶつ",
        "Kanji": "動物",
        "tipe": "n",
        "definisi": "satwa",
        "": ""
    },
    {
        "No. ": "351",
        "Kana": "とおか",
        "Kanji": "十日",
        "tipe": "n",
        "definisi": "hari sepuluh, kesepuluh (hari bulan)",
        "": ""
    },
    {
        "No. ": "352",
        "Kana": "とけい",
        "Kanji": "時計",
        "tipe": "n",
        "definisi": "menonton, jam",
        "": ""
    },
    {
        "No. ": "353",
        "Kana": "どこ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "di mana, apa tempat",
        "": ""
    },
    {
        "No. ": "354",
        "Kana": "ところ",
        "Kanji": "所",
        "tipe": "n",
        "definisi": "tempat",
        "": ""
    },
    {
        "No. ": "355",
        "Kana": "とし",
        "Kanji": "年",
        "tipe": "n",
        "definisi": "tahun, usia",
        "": ""
    },
    {
        "No. ": "356",
        "Kana": "としょかん",
        "Kanji": "図書館",
        "tipe": "n",
        "definisi": "Perpustakaan",
        "": ""
    },
    {
        "No. ": "357",
        "Kana": "どちら",
        "Kanji": "",
        "tipe": "n",
        "definisi": "yang, yang cara",
        "": ""
    },
    {
        "No. ": "358",
        "Kana": "どなた",
        "Kanji": "",
        "tipe": "n",
        "definisi": "siapa",
        "": ""
    },
    {
        "No. ": "359",
        "Kana": "となり",
        "Kanji": "隣",
        "tipe": "n",
        "definisi": "sebelah, sebelah",
        "": ""
    },
    {
        "No. ": "360",
        "Kana": "どの",
        "Kanji": "",
        "tipe": "n",
        "definisi": "yang",
        "": ""
    },
    {
        "No. ": "361",
        "Kana": "ともだち",
        "Kanji": "友達",
        "tipe": "n",
        "definisi": "teman",
        "": ""
    },
    {
        "No. ": "362",
        "Kana": "どようび",
        "Kanji": "土曜日",
        "tipe": "n",
        "definisi": "Sabtu",
        "": ""
    },
    {
        "No. ": "363",
        "Kana": "とり",
        "Kanji": "鳥",
        "tipe": "n",
        "definisi": "burung",
        "": ""
    },
    {
        "No. ": "364",
        "Kana": "とりにく",
        "Kanji": "とり肉",
        "tipe": "n",
        "definisi": "daging ayam",
        "": ""
    },
    {
        "No. ": "365",
        "Kana": "どれ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "yang (tiga atau lebih)",
        "": ""
    },
    {
        "No. ": "366",
        "Kana": "ナイフ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pisau",
        "": ""
    },
    {
        "No. ": "367",
        "Kana": "なか",
        "Kanji": "中",
        "tipe": "n",
        "definisi": "dalam, tengah, antara",
        "": ""
    },
    {
        "No. ": "368",
        "Kana": "なつ",
        "Kanji": "夏",
        "tipe": "n",
        "definisi": "musim panas",
        "": ""
    },
    {
        "No. ": "369",
        "Kana": "なつやすみ",
        "Kanji": "夏休み",
        "tipe": "n",
        "definisi": "liburan musim panas, liburan musim panas",
        "": ""
    },
    {
        "No. ": "370",
        "Kana": "ななつ",
        "Kanji": "七つ",
        "tipe": "n",
        "definisi": "tujuh",
        "": ""
    },
    {
        "No. ": "371",
        "Kana": "なのか",
        "Kanji": "七日",
        "tipe": "n",
        "definisi": "hari tujuh, hari ketujuh (bulan)",
        "": ""
    },
    {
        "No. ": "372",
        "Kana": "なまえ",
        "Kanji": "名前",
        "tipe": "n",
        "definisi": "nama",
        "": ""
    },
    {
        "No. ": "373",
        "Kana": "なん/なに",
        "Kanji": "何",
        "tipe": "n",
        "definisi": "apa",
        "": ""
    },
    {
        "No. ": "374",
        "Kana": "にく",
        "Kanji": "肉",
        "tipe": "n",
        "definisi": "daging",
        "": ""
    },
    {
        "No. ": "375",
        "Kana": "にし",
        "Kanji": "西",
        "tipe": "n",
        "definisi": "Barat",
        "": ""
    },
    {
        "No. ": "376",
        "Kana": "にちようび",
        "Kanji": "日曜日",
        "tipe": "n",
        "definisi": "Minggu",
        "": ""
    },
    {
        "No. ": "377",
        "Kana": "にもつ",
        "Kanji": "荷物",
        "tipe": "n",
        "definisi": "bagasi",
        "": ""
    },
    {
        "No. ": "378",
        "Kana": "ニュース",
        "Kanji": "",
        "tipe": "n",
        "definisi": "berita",
        "": ""
    },
    {
        "No. ": "379",
        "Kana": "にわ",
        "Kanji": "庭",
        "tipe": "n",
        "definisi": "taman",
        "": ""
    },
    {
        "No. ": "380",
        "Kana": "ネクタイ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "dasi, dasi",
        "": ""
    },
    {
        "No. ": "381",
        "Kana": "ねこ",
        "Kanji": "猫",
        "tipe": "n",
        "definisi": "kucing",
        "": ""
    },
    {
        "No. ": "382",
        "Kana": "ノート",
        "Kanji": "",
        "tipe": "n",
        "definisi": "notebook, buku latihan",
        "": ""
    },
    {
        "No. ": "383",
        "Kana": "のみもの",
        "Kanji": "飲み物",
        "tipe": "n",
        "definisi": "minum, minuman",
        "": ""
    },
    {
        "No. ": "384",
        "Kana": "は",
        "Kanji": "歯",
        "tipe": "n",
        "definisi": "gigi",
        "": ""
    },
    {
        "No. ": "385",
        "Kana": "パーティー",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pesta",
        "": ""
    },
    {
        "No. ": "386",
        "Kana": "はいざら",
        "Kanji": "灰皿",
        "tipe": "n",
        "definisi": "asbak",
        "": ""
    },
    {
        "No. ": "387",
        "Kana": "はがき",
        "Kanji": "葉書",
        "tipe": "n",
        "definisi": "kartu pos",
        "": ""
    },
    {
        "No. ": "388",
        "Kana": "はこ",
        "Kanji": "箱",
        "tipe": "n",
        "definisi": "kotak",
        "": ""
    },
    {
        "No. ": "389",
        "Kana": "はし",
        "Kanji": "橋",
        "tipe": "n",
        "definisi": "menjembatani",
        "": ""
    },
    {
        "No. ": "390",
        "Kana": "はし",
        "Kanji": "",
        "tipe": "n",
        "definisi": "sumpit",
        "": ""
    },
    {
        "No. ": "391",
        "Kana": "バス",
        "Kanji": "",
        "tipe": "n",
        "definisi": "bis",
        "": ""
    },
    {
        "No. ": "392",
        "Kana": "バター",
        "Kanji": "",
        "tipe": "n",
        "definisi": "mentega",
        "": ""
    },
    {
        "No. ": "393",
        "Kana": "はたち",
        "Kanji": "二十歳",
        "tipe": "n",
        "definisi": "20 tahun, tahun ke-20",
        "": ""
    },
    {
        "No. ": "394",
        "Kana": "はつか",
        "Kanji": "二十日",
        "tipe": "n",
        "definisi": "dua puluh hari, kedua puluh (hari bulan)",
        "": ""
    },
    {
        "No. ": "395",
        "Kana": "はな",
        "Kanji": "花",
        "tipe": "n",
        "definisi": "bunga",
        "": ""
    },
    {
        "No. ": "396",
        "Kana": "はな",
        "Kanji": "鼻",
        "tipe": "n",
        "definisi": "hidung",
        "": ""
    },
    {
        "No. ": "397",
        "Kana": "はなし",
        "Kanji": "話",
        "tipe": "n",
        "definisi": "bicara, cerita",
        "": ""
    },
    {
        "No. ": "398",
        "Kana": "はは",
        "Kanji": "母",
        "tipe": "n",
        "definisi": "(Sendiri seseorang) ibu",
        "": ""
    },
    {
        "No. ": "399",
        "Kana": "はる",
        "Kanji": "春",
        "tipe": "n",
        "definisi": "musim semi",
        "": ""
    },
    {
        "No. ": "400",
        "Kana": "はん",
        "Kanji": "半",
        "tipe": "n",
        "definisi": "setengah",
        "": ""
    },
    {
        "No. ": "401",
        "Kana": "ばん",
        "Kanji": "晩",
        "tipe": "n",
        "definisi": "malam",
        "": ""
    },
    {
        "No. ": "402",
        "Kana": "パン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "roti",
        "": ""
    },
    {
        "No. ": "403",
        "Kana": "ハンカチ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "saputangan",
        "": ""
    },
    {
        "No. ": "404",
        "Kana": "ばんごう",
        "Kanji": "番号",
        "tipe": "n",
        "definisi": "jumlah",
        "": ""
    },
    {
        "No. ": "405",
        "Kana": "ばんごはん",
        "Kanji": "晩御飯",
        "tipe": "n",
        "definisi": "makan malam, makan malam",
        "": ""
    },
    {
        "No. ": "406",
        "Kana": "ひがし",
        "Kanji": "東",
        "tipe": "n",
        "definisi": "timur",
        "": ""
    },
    {
        "No. ": "407",
        "Kana": "ひこうき",
        "Kanji": "飛行機",
        "tipe": "n",
        "definisi": "pesawat, pesawat",
        "": ""
    },
    {
        "No. ": "408",
        "Kana": "ひだり",
        "Kanji": "左",
        "tipe": "n",
        "definisi": "sisi kiri",
        "": ""
    },
    {
        "No. ": "409",
        "Kana": "ひと",
        "Kanji": "人",
        "tipe": "n",
        "definisi": "man, orang",
        "": ""
    },
    {
        "No. ": "410",
        "Kana": "ひとつ",
        "Kanji": "一つ",
        "tipe": "n",
        "definisi": "satu",
        "": ""
    },
    {
        "No. ": "411",
        "Kana": "ひとり",
        "Kanji": "一人",
        "tipe": "n",
        "definisi": "satu orang",
        "": ""
    },
    {
        "No. ": "412",
        "Kana": "びょういん",
        "Kanji": "病院",
        "tipe": "n",
        "definisi": "Rumah Sakit",
        "": ""
    },
    {
        "No. ": "413",
        "Kana": "びょうき",
        "Kanji": "病気",
        "tipe": "n",
        "definisi": "penyakit, penyakit, penyakit",
        "": ""
    },
    {
        "No. ": "414",
        "Kana": "ひらがな",
        "Kanji": "平仮名",
        "tipe": "n",
        "definisi": "hiragana",
        "": ""
    },
    {
        "No. ": "415",
        "Kana": "ひる",
        "Kanji": "昼",
        "tipe": "n",
        "definisi": "siang, siang hari",
        "": ""
    },
    {
        "No. ": "416",
        "Kana": "ひるごはん",
        "Kanji": "昼御飯",
        "tipe": "n",
        "definisi": "makan siang, makan siang",
        "": ""
    },
    {
        "No. ": "417",
        "Kana": "プール",
        "Kanji": "",
        "tipe": "n",
        "definisi": "kolam renang",
        "": ""
    },
    {
        "No. ": "418",
        "Kana": "フィルム",
        "Kanji": "",
        "tipe": "n",
        "definisi": "Film (gulungan)",
        "": ""
    },
    {
        "No. ": "419",
        "Kana": "ふうとう",
        "Kanji": "封筒",
        "tipe": "n",
        "definisi": "amplop",
        "": ""
    },
    {
        "No. ": "420",
        "Kana": "フォーク",
        "Kanji": "",
        "tipe": "n",
        "definisi": "garpu",
        "": ""
    },
    {
        "No. ": "421",
        "Kana": "ふく",
        "Kanji": "服",
        "tipe": "n",
        "definisi": "pakaian",
        "": ""
    },
    {
        "No. ": "422",
        "Kana": "ふたつ",
        "Kanji": "二つ",
        "tipe": "n",
        "definisi": "dua",
        "": ""
    },
    {
        "No. ": "423",
        "Kana": "ぶたにく",
        "Kanji": "豚肉",
        "tipe": "n",
        "definisi": "Babi",
        "": ""
    },
    {
        "No. ": "424",
        "Kana": "ふたり",
        "Kanji": "二人",
        "tipe": "n",
        "definisi": "dua orang",
        "": ""
    },
    {
        "No. ": "425",
        "Kana": "ふつか",
        "Kanji": "二日",
        "tipe": "n",
        "definisi": "hari kedua bulan, dua hari",
        "": ""
    },
    {
        "No. ": "426",
        "Kana": "ふゆ",
        "Kanji": "冬",
        "tipe": "n",
        "definisi": "musim dingin",
        "": ""
    },
    {
        "No. ": "427",
        "Kana": "ふろ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "mandi",
        "": ""
    },
    {
        "No. ": "428",
        "Kana": "ページ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "halaman",
        "": ""
    },
    {
        "No. ": "429",
        "Kana": "ベッド",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tempat tidur",
        "": ""
    },
    {
        "No. ": "430",
        "Kana": "ペット",
        "Kanji": "",
        "tipe": "n",
        "definisi": "membelai",
        "": ""
    },
    {
        "No. ": "431",
        "Kana": "へや",
        "Kanji": "部屋",
        "tipe": "n",
        "definisi": "kamar",
        "": ""
    },
    {
        "No. ": "432",
        "Kana": "へん",
        "Kanji": "辺",
        "tipe": "n",
        "definisi": "daerah, sekitar",
        "": ""
    },
    {
        "No. ": "433",
        "Kana": "ペン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pena",
        "": ""
    },
    {
        "No. ": "434",
        "Kana": "べんきょう（する）",
        "Kanji": "勉強",
        "tipe": "n",
        "definisi": "studi, ketekunan",
        "": ""
    },
    {
        "No. ": "435",
        "Kana": "ボールペン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pulpen",
        "": ""
    },
    {
        "No. ": "436",
        "Kana": "ぼうし",
        "Kanji": "帽子",
        "tipe": "n",
        "definisi": "topi",
        "": ""
    },
    {
        "No. ": "437",
        "Kana": "ほか",
        "Kanji": "外",
        "tipe": "n",
        "definisi": "Tempat lain, sisanya",
        "": ""
    },
    {
        "No. ": "438",
        "Kana": "ポケット",
        "Kanji": "",
        "tipe": "n",
        "definisi": "saku",
        "": ""
    },
    {
        "No. ": "439",
        "Kana": "ポスト",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pos",
        "": ""
    },
    {
        "No. ": "440",
        "Kana": "ボタン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "tombol",
        "": ""
    },
    {
        "No. ": "441",
        "Kana": "ホテル",
        "Kanji": "",
        "tipe": "n",
        "definisi": "hotel",
        "": ""
    },
    {
        "No. ": "442",
        "Kana": "ほん",
        "Kanji": "本",
        "tipe": "n",
        "definisi": "buku",
        "": ""
    },
    {
        "No. ": "443",
        "Kana": "ほんだな",
        "Kanji": "本棚",
        "tipe": "n",
        "definisi": "rak buku",
        "": ""
    },
    {
        "No. ": "444",
        "Kana": "まいあさ",
        "Kanji": "毎朝",
        "tipe": "n",
        "definisi": "setiap pagi",
        "": ""
    },
    {
        "No. ": "445",
        "Kana": "まいげつ/まいつき",
        "Kanji": "毎月",
        "tipe": "n",
        "definisi": "setiap bulan, bulanan",
        "": ""
    },
    {
        "No. ": "446",
        "Kana": "まいしゅう",
        "Kanji": "毎週",
        "tipe": "n",
        "definisi": "setiap minggu",
        "": ""
    },
    {
        "No. ": "447",
        "Kana": "まいにち",
        "Kanji": "毎日",
        "tipe": "n",
        "definisi": "setiap hari",
        "": ""
    },
    {
        "No. ": "448",
        "Kana": "まいねん/まいとし",
        "Kanji": "毎年",
        "tipe": "n",
        "definisi": "setiap tahun, setiap tahun",
        "": ""
    },
    {
        "No. ": "449",
        "Kana": "まいばん",
        "Kanji": "毎晩",
        "tipe": "n",
        "definisi": "setiap malam",
        "": ""
    },
    {
        "No. ": "450",
        "Kana": "まえ",
        "Kanji": "前",
        "tipe": "n",
        "definisi": "sebelumnya, di depan",
        "": ""
    },
    {
        "No. ": "451",
        "Kana": "まち",
        "Kanji": "町",
        "tipe": "n",
        "definisi": "kota, kota",
        "": ""
    },
    {
        "No. ": "452",
        "Kana": "マッチ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pertandingan",
        "": ""
    },
    {
        "No. ": "453",
        "Kana": "まど",
        "Kanji": "窓",
        "tipe": "n",
        "definisi": "jendela",
        "": ""
    },
    {
        "No. ": "454",
        "Kana": "まんねんひつ",
        "Kanji": "万年筆",
        "tipe": "n",
        "definisi": "pulpen",
        "": ""
    },
    {
        "No. ": "455",
        "Kana": "みぎ",
        "Kanji": "右",
        "tipe": "n",
        "definisi": "sisi kanan",
        "": ""
    },
    {
        "No. ": "456",
        "Kana": "みず",
        "Kanji": "水",
        "tipe": "n",
        "definisi": "air",
        "": ""
    },
    {
        "No. ": "457",
        "Kana": "みせ",
        "Kanji": "店",
        "tipe": "n",
        "definisi": "toko, toko, pembentukan",
        "": ""
    },
    {
        "No. ": "458",
        "Kana": "みち",
        "Kanji": "道",
        "tipe": "n",
        "definisi": "jalan raya",
        "": ""
    },
    {
        "No. ": "459",
        "Kana": "みっか",
        "Kanji": "三日",
        "tipe": "n",
        "definisi": "tiga hari, hari ketiga (bulan)",
        "": ""
    },
    {
        "No. ": "460",
        "Kana": "みっつ",
        "Kanji": "三つ",
        "tipe": "n",
        "definisi": "tiga",
        "": ""
    },
    {
        "No. ": "461",
        "Kana": "みどり",
        "Kanji": "緑",
        "tipe": "n",
        "definisi": "hijau",
        "": ""
    },
    {
        "No. ": "462",
        "Kana": "みなさん",
        "Kanji": "皆さん",
        "tipe": "n",
        "definisi": "semua orang",
        "": ""
    },
    {
        "No. ": "463",
        "Kana": "みなみ",
        "Kanji": "南",
        "tipe": "n",
        "definisi": "Selatan, melanjutkan selatan",
        "": ""
    },
    {
        "No. ": "464",
        "Kana": "みみ",
        "Kanji": "耳",
        "tipe": "n",
        "definisi": "telinga",
        "": ""
    },
    {
        "No. ": "465",
        "Kana": "むいか",
        "Kanji": "六日",
        "tipe": "n",
        "definisi": "enam hari, keenam (hari bulan)",
        "": ""
    },
    {
        "No. ": "466",
        "Kana": "むこう",
        "Kanji": "向こう",
        "tipe": "n",
        "definisi": "di luar, di sana",
        "": ""
    },
    {
        "No. ": "467",
        "Kana": "め",
        "Kanji": "目",
        "tipe": "n",
        "definisi": "mata, bola mata",
        "": ""
    },
    {
        "No. ": "468",
        "Kana": "メートル",
        "Kanji": "",
        "tipe": "n",
        "definisi": "meter, meter",
        "": ""
    },
    {
        "No. ": "469",
        "Kana": "めがね",
        "Kanji": "眼鏡",
        "tipe": "n",
        "definisi": "kacamata, kacamata",
        "": ""
    },
    {
        "No. ": "470",
        "Kana": "もくようび",
        "Kanji": "木曜日",
        "tipe": "n",
        "definisi": "Kamis",
        "": ""
    },
    {
        "No. ": "471",
        "Kana": "もの",
        "Kanji": "物",
        "tipe": "n",
        "definisi": "hal, objek",
        "": ""
    },
    {
        "No. ": "472",
        "Kana": "もん",
        "Kanji": "門",
        "tipe": "n",
        "definisi": "gerbang",
        "": ""
    },
    {
        "No. ": "473",
        "Kana": "もんだい",
        "Kanji": "問題",
        "tipe": "n",
        "definisi": "masalah, pertanyaan",
        "": ""
    },
    {
        "No. ": "474",
        "Kana": "やおや",
        "Kanji": "八百屋",
        "tipe": "n",
        "definisi": "penjual sayur",
        "": ""
    },
    {
        "No. ": "475",
        "Kana": "やさい",
        "Kanji": "野菜",
        "tipe": "n",
        "definisi": "sayur-mayur",
        "": ""
    },
    {
        "No. ": "476",
        "Kana": "やすみ",
        "Kanji": "休み",
        "tipe": "n",
        "definisi": "Sisanya, liburan, liburan",
        "": ""
    },
    {
        "No. ": "477",
        "Kana": "やま",
        "Kanji": "山",
        "tipe": "n",
        "definisi": "gunung",
        "": ""
    },
    {
        "No. ": "478",
        "Kana": "ゆうがた",
        "Kanji": "夕方",
        "tipe": "n",
        "definisi": "malam",
        "": ""
    },
    {
        "No. ": "479",
        "Kana": "ゆうはん",
        "Kanji": "夕飯",
        "tipe": "n",
        "definisi": "makan malam",
        "": ""
    },
    {
        "No. ": "480",
        "Kana": "ゆうびんきょく",
        "Kanji": "郵便局",
        "tipe": "n",
        "definisi": "kantor Pos",
        "": ""
    },
    {
        "No. ": "481",
        "Kana": "ゆうべ",
        "Kanji": "昨夜",
        "tipe": "n",
        "definisi": "Tadi malam",
        "": ""
    },
    {
        "No. ": "482",
        "Kana": "ゆき",
        "Kanji": "雪",
        "tipe": "n",
        "definisi": "salju",
        "": ""
    },
    {
        "No. ": "483",
        "Kana": "ようか",
        "Kanji": "八日",
        "tipe": "n",
        "definisi": "delapan hari, kedelapan (hari bulan)",
        "": ""
    },
    {
        "No. ": "484",
        "Kana": "ようふく",
        "Kanji": "洋服",
        "tipe": "n",
        "definisi": "pakaian gaya Barat",
        "": ""
    },
    {
        "No. ": "485",
        "Kana": "よこ",
        "Kanji": "横",
        "tipe": "n",
        "definisi": "samping, sisi, lebar",
        "": ""
    },
    {
        "No. ": "486",
        "Kana": "よっか",
        "Kanji": "四日",
        "tipe": "n",
        "definisi": "(1) hari ke-4 bulan, (2) empat hari",
        "": ""
    },
    {
        "No. ": "487",
        "Kana": "よっつ",
        "Kanji": "四つ",
        "tipe": "n",
        "definisi": "empat",
        "": ""
    },
    {
        "No. ": "488",
        "Kana": "よる",
        "Kanji": "夜",
        "tipe": "n",
        "definisi": "malam, malam",
        "": ""
    },
    {
        "No. ": "489",
        "Kana": "らいげつ",
        "Kanji": "来月",
        "tipe": "n",
        "definisi": "bulan depan",
        "": ""
    },
    {
        "No. ": "490",
        "Kana": "らいしゅう",
        "Kanji": "来週",
        "tipe": "n",
        "definisi": "minggu depan",
        "": ""
    },
    {
        "No. ": "491",
        "Kana": "らいねん",
        "Kanji": "来年",
        "tipe": "n",
        "definisi": "tahun depan",
        "": ""
    },
    {
        "No. ": "492",
        "Kana": "ラジオ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "radio",
        "": ""
    },
    {
        "No. ": "493",
        "Kana": "ラジカセ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "pemutar kaset radio",
        "": ""
    },
    {
        "No. ": "494",
        "Kana": "りゅうがくせい",
        "Kanji": "留学生",
        "tipe": "n",
        "definisi": "mahasiswa di luar negeri",
        "": ""
    },
    {
        "No. ": "495",
        "Kana": "りょうしん",
        "Kanji": "両親",
        "tipe": "n",
        "definisi": "orang tua, kedua orang tua",
        "": ""
    },
    {
        "No. ": "496",
        "Kana": "りょうり",
        "Kanji": "料理",
        "tipe": "n",
        "definisi": "memasak, Masakan",
        "": ""
    },
    {
        "No. ": "497",
        "Kana": "りょこう",
        "Kanji": "旅行",
        "tipe": "n",
        "definisi": "perjalanan, perjalanan",
        "": ""
    },
    {
        "No. ": "498",
        "Kana": "れい",
        "Kanji": "零",
        "tipe": "n",
        "definisi": "nol, sia-sia",
        "": ""
    },
    {
        "No. ": "499",
        "Kana": "れいぞうこ",
        "Kanji": "冷蔵庫",
        "tipe": "n",
        "definisi": "kulkas",
        "": ""
    },
    {
        "No. ": "500",
        "Kana": "レコード",
        "Kanji": "",
        "tipe": "n",
        "definisi": "merekam",
        "": ""
    },
    {
        "No. ": "501",
        "Kana": "レストラン",
        "Kanji": "",
        "tipe": "n",
        "definisi": "restoran",
        "": ""
    },
    {
        "No. ": "502",
        "Kana": "れんしゅう（する）",
        "Kanji": "練習",
        "tipe": "n",
        "definisi": "(berlatih",
        "": ""
    },
    {
        "No. ": "503",
        "Kana": "ろうか",
        "Kanji": "廊下",
        "tipe": "n",
        "definisi": "koridor",
        "": ""
    },
    {
        "No. ": "504",
        "Kana": "ワイシャツ",
        "Kanji": "",
        "tipe": "n",
        "definisi": "shirt (lit: kemeja putih), kemeja bisnis",
        "": ""
    },
    {
        "No. ": "505",
        "Kana": "わたくし",
        "Kanji": "私",
        "tipe": "n",
        "definisi": "Saya sendiri",
        "": ""
    },
    {
        "No. ": "506",
        "Kana": "わたし",
        "Kanji": "私",
        "tipe": "n",
        "definisi": "Saya sendiri",
        "": ""
    },
    {
        "No. ": "507",
        "Kana": "むら",
        "Kanji": "村",
        "tipe": "n",
        "definisi": "Desa",
        "": ""
    },
    {
        "No. ": "508",
        "Kana": "いえ",
        "Kanji": "家",
        "tipe": "n",
        "definisi": "rumah, keluarga",
        "": ""
    },
    {
        "No. ": "509",
        "Kana": "ぶんしょう",
        "Kanji": "文章",
        "tipe": "n",
        "definisi": "kalimat, teks",
        "": ""
    },
    {
        "No. ": "510",
        "Kana": "くる",
        "Kanji": "来る",
        "tipe": "v",
        "definisi": "datang",
        "": ""
    },
    {
        "No. ": "511",
        "Kana": "する",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk dilakukan, untuk mencoba",
        "": ""
    },
    {
        "No. ": "512",
        "Kana": "あける",
        "Kanji": "開ける",
        "tipe": "v",
        "definisi": "membuka",
        "": ""
    },
    {
        "No. ": "513",
        "Kana": "あげる",
        "Kanji": "上げる",
        "tipe": "v",
        "definisi": "memberi",
        "": ""
    },
    {
        "No. ": "514",
        "Kana": "あびる",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk mandi, untuk mandi",
        "": ""
    },
    {
        "No. ": "515",
        "Kana": "いれる",
        "Kanji": "入れる",
        "tipe": "v",
        "definisi": "untuk dimasukkan ke dalam",
        "": ""
    },
    {
        "No. ": "516",
        "Kana": "うまれる",
        "Kanji": "生まれる",
        "tipe": "v",
        "definisi": "dilahirkan",
        "": ""
    },
    {
        "No. ": "517",
        "Kana": "おきる",
        "Kanji": "起きる",
        "tipe": "v",
        "definisi": "untuk bangun, bangkit",
        "": ""
    },
    {
        "No. ": "518",
        "Kana": "おしえる",
        "Kanji": "教える",
        "tipe": "v",
        "definisi": "untuk mengajar, untuk menginformasikan",
        "": ""
    },
    {
        "No. ": "519",
        "Kana": "おぼえる",
        "Kanji": "覚える",
        "tipe": "v",
        "definisi": "ingat, untuk menghafal",
        "": ""
    },
    {
        "No. ": "520",
        "Kana": "おりる",
        "Kanji": "降りる",
        "tipe": "v",
        "definisi": "untuk turun (misalnya dari bus), untuk turun",
        "": ""
    },
    {
        "No. ": "521",
        "Kana": "かける",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk memakai (misalnya gelas)",
        "": ""
    },
    {
        "No. ": "522",
        "Kana": "かける",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk dial / call (misalnya telepon)",
        "": ""
    },
    {
        "No. ": "523",
        "Kana": "かりる",
        "Kanji": "借りる",
        "tipe": "v",
        "definisi": "untuk meminjam, untuk memiliki pinjaman",
        "": ""
    },
    {
        "No. ": "524",
        "Kana": "きえる",
        "Kanji": "消える",
        "tipe": "v",
        "definisi": "untuk pergi keluar, lenyap",
        "": ""
    },
    {
        "No. ": "525",
        "Kana": "きる",
        "Kanji": "着る",
        "tipe": "v",
        "definisi": "untuk memakai, memakai (dari bahu ke bawah)",
        "": ""
    },
    {
        "No. ": "526",
        "Kana": "こたえる",
        "Kanji": "答える",
        "tipe": "v",
        "definisi": "jawaban, untuk membalas",
        "": ""
    },
    {
        "No. ": "527",
        "Kana": "しめる",
        "Kanji": "締める",
        "tipe": "v",
        "definisi": "untuk mengikat, untuk kencangkan",
        "": ""
    },
    {
        "No. ": "528",
        "Kana": "しめる",
        "Kanji": "閉める",
        "tipe": "v",
        "definisi": "untuk dekat, untuk menutup",
        "": ""
    },
    {
        "No. ": "529",
        "Kana": "たべる",
        "Kanji": "食べる",
        "tipe": "v",
        "definisi": "makan",
        "": ""
    },
    {
        "No. ": "530",
        "Kana": "つかれる",
        "Kanji": "疲れる",
        "tipe": "v",
        "definisi": "untuk mendapatkan lelah, ban",
        "": ""
    },
    {
        "No. ": "531",
        "Kana": "つける",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk mengaktifkan (cahaya misalnya)",
        "": ""
    },
    {
        "No. ": "532",
        "Kana": "つとめる",
        "Kanji": "勤める",
        "tipe": "v",
        "definisi": "untuk melayani, bekerja (untuk)",
        "": ""
    },
    {
        "No. ": "533",
        "Kana": "でかける",
        "Kanji": "出かける",
        "tipe": "v",
        "definisi": "untuk berangkat, untuk pergi keluar",
        "": ""
    },
    {
        "No. ": "534",
        "Kana": "できる",
        "Kanji": "",
        "tipe": "v",
        "definisi": "agar bisa",
        "": ""
    },
    {
        "No. ": "535",
        "Kana": "でる",
        "Kanji": "出る",
        "tipe": "v",
        "definisi": "muncul, untuk meninggalkan",
        "": ""
    },
    {
        "No. ": "536",
        "Kana": "ならべる",
        "Kanji": "並べる",
        "tipe": "v",
        "definisi": "untuk berbaris, untuk mengatur",
        "": ""
    },
    {
        "No. ": "537",
        "Kana": "ねる",
        "Kanji": "寝る",
        "tipe": "v",
        "definisi": "untuk pergi ke tempat tidur, tidur",
        "": ""
    },
    {
        "No. ": "538",
        "Kana": "はれ",
        "Kanji": "晴れ",
        "tipe": "v",
        "definisi": "Cuaca cerah",
        "": ""
    },
    {
        "No. ": "539",
        "Kana": "はれる",
        "Kanji": "晴れる",
        "tipe": "v",
        "definisi": "menjadi cerah",
        "": ""
    },
    {
        "No. ": "540",
        "Kana": "みせる",
        "Kanji": "見せる",
        "tipe": "v",
        "definisi": "untuk acara, untuk menampilkan",
        "": ""
    },
    {
        "No. ": "541",
        "Kana": "みる",
        "Kanji": "見る",
        "tipe": "v",
        "definisi": "untuk melihat, untuk menonton",
        "": ""
    },
    {
        "No. ": "542",
        "Kana": "わすれる",
        "Kanji": "忘れる",
        "tipe": "v",
        "definisi": "untuk dilupakan",
        "": ""
    },
    {
        "No. ": "543",
        "Kana": "あう",
        "Kanji": "会う",
        "tipe": "v",
        "definisi": "untuk bertemu, untuk melihat",
        "": ""
    },
    {
        "No. ": "544",
        "Kana": "あく",
        "Kanji": "開く",
        "tipe": "v",
        "definisi": "untuk terbuka, untuk menjadi terbuka",
        "": ""
    },
    {
        "No. ": "545",
        "Kana": "あそぶ",
        "Kanji": "遊ぶ",
        "tipe": "v",
        "definisi": "untuk bermain, untuk menikmati diri sendiri",
        "": ""
    },
    {
        "No. ": "546",
        "Kana": "あらう",
        "Kanji": "洗う",
        "tipe": "v",
        "definisi": "untuk mencuci",
        "": ""
    },
    {
        "No. ": "547",
        "Kana": "ある",
        "Kanji": "",
        "tipe": "v",
        "definisi": "menjadi",
        "": ""
    },
    {
        "No. ": "548",
        "Kana": "あるく",
        "Kanji": "歩く",
        "tipe": "v",
        "definisi": "berjalan",
        "": ""
    },
    {
        "No. ": "549",
        "Kana": "いう",
        "Kanji": "言う",
        "tipe": "v",
        "definisi": "mengatakan",
        "": ""
    },
    {
        "No. ": "550",
        "Kana": "いく/ゆく",
        "Kanji": "行く",
        "tipe": "v",
        "definisi": "untuk pergi",
        "": ""
    },
    {
        "No. ": "551",
        "Kana": "いる",
        "Kanji": "居る",
        "tipe": "v",
        "definisi": "(Hum) menjadi (bernyawa), ada",
        "": ""
    },
    {
        "No. ": "552",
        "Kana": "いる",
        "Kanji": "要る",
        "tipe": "v",
        "definisi": "membutuhkan",
        "": ""
    },
    {
        "No. ": "553",
        "Kana": "うたう",
        "Kanji": "歌う",
        "tipe": "v",
        "definisi": "menyanyikan",
        "": ""
    },
    {
        "No. ": "554",
        "Kana": "うる",
        "Kanji": "売る",
        "tipe": "v",
        "definisi": "untuk menjual",
        "": ""
    },
    {
        "No. ": "555",
        "Kana": "おく",
        "Kanji": "置く",
        "tipe": "v",
        "definisi": "untuk menempatkan, ke tempat",
        "": ""
    },
    {
        "No. ": "556",
        "Kana": "おす",
        "Kanji": "押す",
        "tipe": "v",
        "definisi": "untuk push, kepada pers",
        "": ""
    },
    {
        "No. ": "557",
        "Kana": "およぐ",
        "Kanji": "泳ぐ",
        "tipe": "v",
        "definisi": "berenang",
        "": ""
    },
    {
        "No. ": "558",
        "Kana": "おわる",
        "Kanji": "終る",
        "tipe": "v",
        "definisi": "sampai akhir, untuk menutup",
        "": ""
    },
    {
        "No. ": "559",
        "Kana": "かう",
        "Kanji": "買う",
        "tipe": "v",
        "definisi": "untuk membeli",
        "": ""
    },
    {
        "No. ": "560",
        "Kana": "かえす",
        "Kanji": "返す",
        "tipe": "v",
        "definisi": "untuk kembali sesuatu",
        "": ""
    },
    {
        "No. ": "561",
        "Kana": "かえる",
        "Kanji": "帰る",
        "tipe": "v",
        "definisi": "pulang, untuk kembali",
        "": ""
    },
    {
        "No. ": "562",
        "Kana": "かかる",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk mengambil (misalnya waktu, uang)",
        "": ""
    },
    {
        "No. ": "563",
        "Kana": "かく",
        "Kanji": "書く",
        "tipe": "v",
        "definisi": "untuk menulis",
        "": ""
    },
    {
        "No. ": "564",
        "Kana": "かす",
        "Kanji": "貸す",
        "tipe": "v",
        "definisi": "untuk meminjamkan",
        "": ""
    },
    {
        "No. ": "565",
        "Kana": "かぶる",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk memakai, memakai (kepala)",
        "": ""
    },
    {
        "No. ": "566",
        "Kana": "きく",
        "Kanji": "聞く",
        "tipe": "v",
        "definisi": "untuk mendengar, mendengarkan, bertanya",
        "": ""
    },
    {
        "No. ": "567",
        "Kana": "きる",
        "Kanji": "切る",
        "tipe": "v",
        "definisi": "untuk memotong, memotong",
        "": ""
    },
    {
        "No. ": "568",
        "Kana": "くもる",
        "Kanji": "曇る",
        "tipe": "v",
        "definisi": "menjadi berawan, untuk menjadi redup",
        "": ""
    },
    {
        "No. ": "569",
        "Kana": "けす",
        "Kanji": "消す",
        "tipe": "v",
        "definisi": "untuk menghapus, menghapus, untuk mematikan listrik",
        "": ""
    },
    {
        "No. ": "570",
        "Kana": "こまる",
        "Kanji": "困る",
        "tipe": "v",
        "definisi": "untuk khawatir, diganggu",
        "": ""
    },
    {
        "No. ": "571",
        "Kana": "さく",
        "Kanji": "咲く",
        "tipe": "v",
        "definisi": "untuk mekar",
        "": ""
    },
    {
        "No. ": "572",
        "Kana": "さす",
        "Kanji": "差す",
        "tipe": "v",
        "definisi": "untuk meningkatkan (stretch out) tangan, untuk kenaikan gaji (misalnya payung)",
        "": ""
    },
    {
        "No. ": "573",
        "Kana": "しまる",
        "Kanji": "閉まる",
        "tipe": "v",
        "definisi": "untuk dekat, akan ditutup",
        "": ""
    },
    {
        "No. ": "574",
        "Kana": "しる",
        "Kanji": "知る",
        "tipe": "v",
        "definisi": "untuk tahu, untuk memahami",
        "": ""
    },
    {
        "No. ": "575",
        "Kana": "すう",
        "Kanji": "吸う",
        "tipe": "v",
        "definisi": "asap, bernapas dalam, mengisap",
        "": ""
    },
    {
        "No. ": "576",
        "Kana": "すむ",
        "Kanji": "住む",
        "tipe": "v",
        "definisi": "untuk tinggal, hidup di",
        "": ""
    },
    {
        "No. ": "577",
        "Kana": "すわる",
        "Kanji": "座る",
        "tipe": "v",
        "definisi": "duduk",
        "": ""
    },
    {
        "No. ": "578",
        "Kana": "だす",
        "Kanji": "出す",
        "tipe": "v",
        "definisi": "untuk memadamkan, untuk mengirim",
        "": ""
    },
    {
        "No. ": "579",
        "Kana": "たつ",
        "Kanji": "立つ",
        "tipe": "v",
        "definisi": "berdiri",
        "": ""
    },
    {
        "No. ": "580",
        "Kana": "たのむ",
        "Kanji": "頼む",
        "tipe": "v",
        "definisi": "permintaan, untuk meminta",
        "": ""
    },
    {
        "No. ": "581",
        "Kana": "ちがう",
        "Kanji": "違う",
        "tipe": "v",
        "definisi": "berbeda (dari)",
        "": ""
    },
    {
        "No. ": "582",
        "Kana": "つかう",
        "Kanji": "使う",
        "tipe": "v",
        "definisi": "menggunakan",
        "": ""
    },
    {
        "No. ": "583",
        "Kana": "つく",
        "Kanji": "着く",
        "tipe": "v",
        "definisi": "untuk sampai pada, untuk mencapai",
        "": ""
    },
    {
        "No. ": "584",
        "Kana": "つくる",
        "Kanji": "作る",
        "tipe": "v",
        "definisi": "untuk membuat, untuk menciptakan",
        "": ""
    },
    {
        "No. ": "585",
        "Kana": "とぶ",
        "Kanji": "飛ぶ",
        "tipe": "v",
        "definisi": "untuk terbang, melompat",
        "": ""
    },
    {
        "No. ": "586",
        "Kana": "とまる",
        "Kanji": "止まる",
        "tipe": "v",
        "definisi": "untuk datang ke berhenti",
        "": ""
    },
    {
        "No. ": "587",
        "Kana": "とる",
        "Kanji": "取る",
        "tipe": "v",
        "definisi": "untuk mengambil",
        "": ""
    },
    {
        "No. ": "588",
        "Kana": "とる",
        "Kanji": "撮る",
        "tipe": "v",
        "definisi": "untuk mengambil gambar)",
        "": ""
    },
    {
        "No. ": "589",
        "Kana": "なく",
        "Kanji": "鳴く",
        "tipe": "v",
        "definisi": "menyanyi (burung), untuk membuat suara (hewan)",
        "": ""
    },
    {
        "No. ": "590",
        "Kana": "なくす",
        "Kanji": "無くす",
        "tipe": "v",
        "definisi": "untuk kehilangan sesuatu",
        "": ""
    },
    {
        "No. ": "591",
        "Kana": "ならう",
        "Kanji": "習う",
        "tipe": "v",
        "definisi": "untuk mempelajari",
        "": ""
    },
    {
        "No. ": "592",
        "Kana": "ならぶ",
        "Kanji": "並ぶ",
        "tipe": "v",
        "definisi": "untuk line up, untuk berdiri di garis",
        "": ""
    },
    {
        "No. ": "593",
        "Kana": "なる",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk menjadi",
        "": ""
    },
    {
        "No. ": "594",
        "Kana": "ぬぐ",
        "Kanji": "脱ぐ",
        "tipe": "v",
        "definisi": "untuk menanggalkan pakaian",
        "": ""
    },
    {
        "No. ": "595",
        "Kana": "のぼる",
        "Kanji": "登る",
        "tipe": "v",
        "definisi": "memanjat",
        "": ""
    },
    {
        "No. ": "596",
        "Kana": "のむ",
        "Kanji": "飲む",
        "tipe": "v",
        "definisi": "untuk minum",
        "": ""
    },
    {
        "No. ": "597",
        "Kana": "のる",
        "Kanji": "乗る",
        "tipe": "v",
        "definisi": "untuk mendapatkan, naik di, ke papan",
        "": ""
    },
    {
        "No. ": "598",
        "Kana": "はいる",
        "Kanji": "入る",
        "tipe": "v",
        "definisi": "untuk masuk, mengandung, untuk terus",
        "": ""
    },
    {
        "No. ": "599",
        "Kana": "はく",
        "Kanji": "",
        "tipe": "v",
        "definisi": "untuk memakai, memakai (celana)",
        "": ""
    },
    {
        "No. ": "600",
        "Kana": "はじまる",
        "Kanji": "始まる",
        "tipe": "v",
        "definisi": "memulai",
        "": ""
    },
    {
        "No. ": "601",
        "Kana": "はしる",
        "Kanji": "走る",
        "tipe": "v",
        "definisi": "untuk berlari",
        "": ""
    },
    {
        "No. ": "602",
        "Kana": "はたらく",
        "Kanji": "働く",
        "tipe": "v",
        "definisi": "bekerja",
        "": ""
    },
    {
        "No. ": "603",
        "Kana": "はなす",
        "Kanji": "話す",
        "tipe": "v",
        "definisi": "berbicara",
        "": ""
    },
    {
        "No. ": "604",
        "Kana": "はる",
        "Kanji": "貼る",
        "tipe": "v",
        "definisi": "untuk tongkat, untuk menyisipkan",
        "": ""
    },
    {
        "No. ": "605",
        "Kana": "ひく",
        "Kanji": "引く",
        "tipe": "v",
        "definisi": "untuk tarik",
        "": ""
    },
    {
        "No. ": "606",
        "Kana": "ひく",
        "Kanji": "弾く",
        "tipe": "v",
        "definisi": "untuk bermain (piano, gitar)",
        "": ""
    },
    {
        "No. ": "607",
        "Kana": "ふく",
        "Kanji": "吹く",
        "tipe": "v",
        "definisi": "untuk pukulan (angin, dll)",
        "": ""
    },
    {
        "No. ": "608",
        "Kana": "ふる",
        "Kanji": "降る",
        "tipe": "v",
        "definisi": "untuk endapan, jatuh (hujan misalnya)",
        "": ""
    },
    {
        "No. ": "609",
        "Kana": "まがる",
        "Kanji": "曲る",
        "tipe": "v",
        "definisi": "untuk gilirannya, menekuk",
        "": ""
    },
    {
        "No. ": "610",
        "Kana": "まつ",
        "Kanji": "待つ",
        "tipe": "v",
        "definisi": "menunggu",
        "": ""
    },
    {
        "No. ": "611",
        "Kana": "みがく",
        "Kanji": "磨く",
        "tipe": "v",
        "definisi": "untuk sikat (gigi)",
        "": ""
    },
    {
        "No. ": "612",
        "Kana": "もつ",
        "Kanji": "持つ",
        "tipe": "v",
        "definisi": "(1) untuk menahan, untuk carry, (2) untuk memiliki",
        "": ""
    },
    {
        "No. ": "613",
        "Kana": "やすむ",
        "Kanji": "休む",
        "tipe": "v",
        "definisi": "untuk beristirahat, untuk memiliki istirahat, untuk mengambil hari off",
        "": ""
    },
    {
        "No. ": "614",
        "Kana": "やる",
        "Kanji": "",
        "tipe": "v",
        "definisi": "melakukan",
        "": ""
    },
    {
        "No. ": "615",
        "Kana": "よぶ",
        "Kanji": "呼ぶ",
        "tipe": "v",
        "definisi": "memanggil, mengundang",
        "": ""
    },
    {
        "No. ": "616",
        "Kana": "よむ",
        "Kanji": "読む",
        "tipe": "v",
        "definisi": "untuk membaca",
        "": ""
    },
    {
        "No. ": "617",
        "Kana": "わかる",
        "Kanji": "分かる",
        "tipe": "v",
        "definisi": "untuk mengerti",
        "": ""
    },
    {
        "No. ": "618",
        "Kana": "わたす",
        "Kanji": "渡す",
        "tipe": "v",
        "definisi": "untuk melewati, untuk menyerahkan",
        "": ""
    },
    {
        "No. ": "619",
        "Kana": "わたる",
        "Kanji": "渡る",
        "tipe": "v",
        "definisi": "menyeberang, untuk pergi ke seberang",
        "": ""
    },
    {
        "No. ": "620",
        "Kana": "しぬ",
        "Kanji": "死ぬ",
        "tipe": "v",
        "definisi": "untuk die",
        "": ""
    },
    {
        "No. ": "621",
        "Kana": "～だけ",
        "Kanji": "",
        "tipe": "",
        "definisi": "hanya ~, hanya ~",
        "": ""
    },
    {
        "No. ": "622",
        "Kana": "～とき",
        "Kanji": "～時",
        "tipe": "",
        "definisi": "pada saat ~",
        "": ""
    },
    {
        "No. ": "623",
        "Kana": "～ながら",
        "Kanji": "",
        "tipe": "",
        "definisi": "sementara ~ ing, selama, meskipun",
        "": ""
    },
    {
        "No. ": "624",
        "Kana": "あまり",
        "Kanji": "",
        "tipe": "",
        "definisi": "tidak terlalu, tidak banyak",
        "": ""
    },
    {
        "No. ": "625",
        "Kana": "いくら",
        "Kanji": "",
        "tipe": "",
        "definisi": "seberapa banyak?",
        "": ""
    },
    {
        "No. ": "626",
        "Kana": "いつ",
        "Kanji": "",
        "tipe": "",
        "definisi": "kapan",
        "": ""
    },
    {
        "No. ": "627",
        "Kana": "いっしょ",
        "Kanji": "一緒",
        "tipe": "",
        "definisi": "bersama",
        "": ""
    },
    {
        "No. ": "628",
        "Kana": "いつも",
        "Kanji": "",
        "tipe": "",
        "definisi": "selalu, setiap kali",
        "": ""
    },
    {
        "No. ": "629",
        "Kana": "すぐ・に",
        "Kanji": "",
        "tipe": "",
        "definisi": "segera, langsung",
        "": ""
    },
    {
        "No. ": "630",
        "Kana": "すこし",
        "Kanji": "少し",
        "tipe": "",
        "definisi": "sedikit",
        "": ""
    },
    {
        "No. ": "631",
        "Kana": "それから",
        "Kanji": "",
        "tipe": "",
        "definisi": "dan kemudian, setelah itu",
        "": ""
    },
    {
        "No. ": "632",
        "Kana": "たぶん",
        "Kanji": "",
        "tipe": "",
        "definisi": "mungkin, mungkin",
        "": ""
    },
    {
        "No. ": "633",
        "Kana": "だんだん",
        "Kanji": "",
        "tipe": "",
        "definisi": "secara bertahap, dengan derajat",
        "": ""
    },
    {
        "No. ": "634",
        "Kana": "ちょうど",
        "Kanji": "",
        "tipe": "",
        "definisi": "hanya, benar, tepat",
        "": ""
    },
    {
        "No. ": "635",
        "Kana": "ちょっと",
        "Kanji": "",
        "tipe": "",
        "definisi": "sedikit, agak",
        "": ""
    },
    {
        "No. ": "636",
        "Kana": "どう",
        "Kanji": "",
        "tipe": "",
        "definisi": "bagaimana, dengan cara apa",
        "": ""
    },
    {
        "No. ": "637",
        "Kana": "どうして",
        "Kanji": "",
        "tipe": "",
        "definisi": "mengapa ?, untuk apa alasan",
        "": ""
    },
    {
        "No. ": "638",
        "Kana": "どうぞ",
        "Kanji": "",
        "tipe": "",
        "definisi": "silakan, silakan, dengan segala cara",
        "": ""
    },
    {
        "No. ": "639",
        "Kana": "どうも",
        "Kanji": "",
        "tipe": "",
        "definisi": "terima kasih, sangat",
        "": ""
    },
    {
        "No. ": "640",
        "Kana": "ときどき",
        "Kanji": "時々",
        "tipe": "",
        "definisi": "terkadang",
        "": ""
    },
    {
        "No. ": "641",
        "Kana": "とても",
        "Kanji": "",
        "tipe": "",
        "definisi": "sangat",
        "": ""
    },
    {
        "No. ": "642",
        "Kana": "なぜ",
        "Kanji": "",
        "tipe": "",
        "definisi": "Mengapa",
        "": ""
    },
    {
        "No. ": "643",
        "Kana": "ほんとう",
        "Kanji": "",
        "tipe": "",
        "definisi": "realitas, kebenaran",
        "": ""
    },
    {
        "No. ": "644",
        "Kana": "また",
        "Kanji": "",
        "tipe": "",
        "definisi": "lagi, dan",
        "": ""
    },
    {
        "No. ": "645",
        "Kana": "まだ",
        "Kanji": "",
        "tipe": "",
        "definisi": "namun, masih, selain",
        "": ""
    },
    {
        "No. ": "646",
        "Kana": "まん",
        "Kanji": "万",
        "tipe": "",
        "definisi": "sepuluh ribu, semuanya",
        "": ""
    },
    {
        "No. ": "647",
        "Kana": "もう",
        "Kanji": "",
        "tipe": "",
        "definisi": "sudah",
        "": ""
    },
    {
        "No. ": "648",
        "Kana": "もう",
        "Kanji": "",
        "tipe": "",
        "definisi": "lagi",
        "": ""
    },
    {
        "No. ": "649",
        "Kana": "もっと",
        "Kanji": "",
        "tipe": "",
        "definisi": "lebih, lebih lama, lebih jauh",
        "": ""
    },
    {
        "No. ": "650",
        "Kana": "ゆっくり・と",
        "Kanji": "",
        "tipe": "",
        "definisi": "perlahan, tenang",
        "": ""
    },
    {
        "No. ": "651",
        "Kana": "よく",
        "Kanji": "",
        "tipe": "",
        "definisi": "sering, sering",
        "": ""
    },
    {
        "No. ": "652",
        "Kana": "よく",
        "Kanji": "",
        "tipe": "",
        "definisi": "baik, terampil",
        "": ""
    },
    {
        "No. ": "653",
        "Kana": "ええ",
        "Kanji": "",
        "tipe": "",
        "definisi": "Iya",
        "": ""
    },
    {
        "No. ": "654",
        "Kana": "さあ",
        "Kanji": "",
        "tipe": "",
        "definisi": "datang sekarang, baik",
        "": ""
    },
    {
        "No. ": "655",
        "Kana": "しかし",
        "Kanji": "",
        "tipe": "",
        "definisi": "Namun, tapi",
        "": ""
    },
    {
        "No. ": "656",
        "Kana": "じゃ/じゃあ",
        "Kanji": "",
        "tipe": "",
        "definisi": "baik, baik maka",
        "": ""
    },
    {
        "No. ": "657",
        "Kana": "そうして/そして",
        "Kanji": "",
        "tipe": "",
        "definisi": "dan, seperti itu",
        "": ""
    },
    {
        "No. ": "658",
        "Kana": "でも",
        "Kanji": "",
        "tipe": "",
        "definisi": "tapi, bagaimanapun",
        "": ""
    },
    {
        "No. ": "659",
        "Kana": "はい",
        "Kanji": "",
        "tipe": "",
        "definisi": "Iya",
        "": ""
    },
    {
        "No. ": "660",
        "Kana": "もしもし",
        "Kanji": "",
        "tipe": "",
        "definisi": "halo (di telepon)",
        "": ""
    },
    {
        "No. ": "661",
        "Kana": "ああ",
        "Kanji": "",
        "tipe": "",
        "definisi": "Ah !, Oh!",
        "": ""
    },
    {
        "No. ": "662",
        "Kana": "あの",
        "Kanji": "",
        "tipe": "",
        "definisi": "um ...",
        "": ""
    },
    {
        "No. ": "663",
        "Kana": "そう/そうです",
        "Kanji": "",
        "tipe": "",
        "definisi": "muncul, menjadi kasus",
        "": ""
    },
    {
        "No. ": "664",
        "Kana": "それでは",
        "Kanji": "",
        "tipe": "",
        "definisi": "dalam situasi itu, baik maka ...",
        "": ""
    },
    {
        "No. ": "665",
        "Kana": "では",
        "Kanji": "",
        "tipe": "",
        "definisi": "dengan itu...",
        "": ""
    },
    {
        "No. ": "666",
        "Kana": "いち",
        "Kanji": "一",
        "tipe": "",
        "definisi": "satu",
        "": ""
    },
    {
        "No. ": "667",
        "Kana": "きゅう",
        "Kanji": "九",
        "tipe": "",
        "definisi": "sembilan",
        "": ""
    },
    {
        "No. ": "668",
        "Kana": "く",
        "Kanji": "九",
        "tipe": "",
        "definisi": "sembilan",
        "": ""
    },
    {
        "No. ": "669",
        "Kana": "ご",
        "Kanji": "五",
        "tipe": "",
        "definisi": "lima",
        "": ""
    },
    {
        "No. ": "670",
        "Kana": "さん",
        "Kanji": "三",
        "tipe": "",
        "definisi": "tiga",
        "": ""
    },
    {
        "No. ": "671",
        "Kana": "し",
        "Kanji": "四",
        "tipe": "",
        "definisi": "empat",
        "": ""
    },
    {
        "No. ": "672",
        "Kana": "しち",
        "Kanji": "七",
        "tipe": "",
        "definisi": "tujuh",
        "": ""
    },
    {
        "No. ": "673",
        "Kana": "じゅう",
        "Kanji": "十",
        "tipe": "",
        "definisi": "sepuluh",
        "": ""
    },
    {
        "No. ": "674",
        "Kana": "せん",
        "Kanji": "千",
        "tipe": "",
        "definisi": "ribu, banyak",
        "": ""
    },
    {
        "No. ": "675",
        "Kana": "とお",
        "Kanji": "十",
        "tipe": "",
        "definisi": "sepuluh",
        "": ""
    },
    {
        "No. ": "676",
        "Kana": "に",
        "Kanji": "二",
        "tipe": "",
        "definisi": "dua",
        "": ""
    },
    {
        "No. ": "677",
        "Kana": "はち",
        "Kanji": "八",
        "tipe": "",
        "definisi": "delapan",
        "": ""
    },
    {
        "No. ": "678",
        "Kana": "ひゃく",
        "Kanji": "百",
        "tipe": "",
        "definisi": "100, seratus",
        "": ""
    },
    {
        "No. ": "679",
        "Kana": "ろく",
        "Kanji": "六",
        "tipe": "",
        "definisi": "enam",
        "": ""
    },
    {
        "No. ": "680",
        "Kana": "～かげつ",
        "Kanji": "～か月",
        "tipe": "",
        "definisi": "(Jumlah) bulan",
        "": ""
    },
    {
        "No. ": "681",
        "Kana": "～がつ",
        "Kanji": "～月",
        "tipe": "",
        "definisi": "bulan",
        "": ""
    },
    {
        "No. ": "682",
        "Kana": "～がる",
        "Kanji": "",
        "tipe": "",
        "definisi": "merasa",
        "": ""
    },
    {
        "No. ": "683",
        "Kana": "～がわ",
        "Kanji": "側",
        "tipe": "",
        "definisi": "sisi",
        "": ""
    },
    {
        "No. ": "684",
        "Kana": "～くらい/ぐらい",
        "Kanji": "",
        "tipe": "",
        "definisi": "perkiraan (kuantitas)",
        "": ""
    },
    {
        "No. ": "685",
        "Kana": "～こ",
        "Kanji": "～個",
        "tipe": "",
        "definisi": "buah",
        "": ""
    },
    {
        "No. ": "686",
        "Kana": "～ご",
        "Kanji": "～語",
        "tipe": "",
        "definisi": "bahasa  ",
        "": ""
    },
    {
        "No. ": "687",
        "Kana": "～ころ/～ごろ",
        "Kanji": "",
        "tipe": "",
        "definisi": "sekitar",
        "": ""
    },
    {
        "No. ": "688",
        "Kana": "～さい",
        "Kanji": "～歳",
        "tipe": "",
        "definisi": "usia",
        "": ""
    },
    {
        "No. ": "689",
        "Kana": "～さん",
        "Kanji": "",
        "tipe": "",
        "definisi": "Mr atau Mrs",
        "": ""
    },
    {
        "No. ": "690",
        "Kana": "～じ",
        "Kanji": "～時",
        "tipe": "",
        "definisi": "jam",
        "": ""
    },
    {
        "No. ": "691",
        "Kana": "～じかん",
        "Kanji": "～時間",
        "tipe": "",
        "definisi": "jam",
        "": ""
    },
    {
        "No. ": "692",
        "Kana": "～じゅう",
        "Kanji": "～中",
        "tipe": "",
        "definisi": "selama  ",
        "": ""
    },
    {
        "No. ": "693",
        "Kana": "～しゅうかん",
        "Kanji": "～週間",
        "tipe": "",
        "definisi": "minggu",
        "": ""
    },
    {
        "No. ": "694",
        "Kana": "～すぎ",
        "Kanji": "",
        "tipe": "",
        "definisi": "melebihi, ~ terlalu banyak",
        "": ""
    },
    {
        "No. ": "695",
        "Kana": "～ずつ",
        "Kanji": "",
        "tipe": "",
        "definisi": "pada suatu waktu, secara bertahap",
        "": ""
    },
    {
        "No. ": "696",
        "Kana": "～だい",
        "Kanji": "～台",
        "tipe": "",
        "definisi": "kontra untuk kendaraan / mesin",
        "": ""
    },
    {
        "No. ": "697",
        "Kana": "～たち",
        "Kanji": "",
        "tipe": "",
        "definisi": "plural akhiran",
        "": ""
    },
    {
        "No. ": "698",
        "Kana": "～ちゅう",
        "Kanji": "～中",
        "tipe": "",
        "definisi": "selama, sementara ~ ing",
        "": ""
    },
    {
        "No. ": "699",
        "Kana": "～ど",
        "Kanji": "～度",
        "tipe": "",
        "definisi": "meja untuk kejadian",
        "": ""
    },
    {
        "No. ": "700",
        "Kana": "～にち",
        "Kanji": "～日",
        "tipe": "",
        "definisi": "~ Hari bulan, untuk ~ hari",
        "": ""
    },
    {
        "No. ": "701",
        "Kana": "～にん",
        "Kanji": "～人",
        "tipe": "",
        "definisi": "meja untuk orang",
        "": ""
    },
    {
        "No. ": "702",
        "Kana": "～にん",
        "Kanji": "～人",
        "tipe": "",
        "definisi": "meja untuk orang",
        "": ""
    },
    {
        "No. ": "703",
        "Kana": "～ねん",
        "Kanji": "～年",
        "tipe": "",
        "definisi": "~ tahun",
        "": ""
    },
    {
        "No. ": "704",
        "Kana": "～ひき",
        "Kanji": "～匹",
        "tipe": "",
        "definisi": "meja untuk hewan kecil",
        "": ""
    },
    {
        "No. ": "705",
        "Kana": "～ふん",
        "Kanji": "～分",
        "tipe": "",
        "definisi": "~ menit",
        "": ""
    },
    {
        "No. ": "706",
        "Kana": "～ほん",
        "Kanji": "～本",
        "tipe": "",
        "definisi": "kontra untuk hal-hal silinder panjang",
        "": ""
    },
    {
        "No. ": "707",
        "Kana": "～まい",
        "Kanji": "～枚",
        "tipe": "",
        "definisi": "kontra untuk hal-hal datar",
        "": ""
    },
    {
        "No. ": "708",
        "Kana": "～まえ",
        "Kanji": "～前",
        "tipe": "",
        "definisi": "di depan ~",
        "": ""
    },
    {
        "No. ": "709",
        "Kana": "なん～",
        "Kanji": "何～",
        "tipe": "",
        "definisi": "seperti apa ~",
        "": ""
    },
    {
        "No. ": "710",
        "Kana": "はんぶん",
        "Kanji": "半分",
        "tipe": "",
        "definisi": "setengah",
        "": ""
    },
    {
        "No. ": "711",
        "Kana": "お～",
        "Kanji": "",
        "tipe": "",
        "definisi": "terhormat ~ (kehormatan)",
        "": ""
    }
]