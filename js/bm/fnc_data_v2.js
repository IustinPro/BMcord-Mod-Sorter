// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2025/10/10 coldrain Fork by IustinPro

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 1;
var ary_TitleData = [
  "Mods",

];
// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
// Mods
[1, "Shelly", [1], "mods/S.png"],
[1, "Dartais", [1], "mods/D.png"],
[1, "EraYan", [1], "mods/OG.png"],
[1, "FunnyToss", [1], "mods/FT.png"],
[1, "Bonk", [1], "mods/Tank.png"],
[1, "Paul", [1], "mods/P.png"],
[1, "Sane", [1], "mods/Fake.png"],
[1, "Bunny", [1], "mods/B.png"],
[1, "PVNIC", [1], "mods/PV.png"],
[1, "Depresso", [1], "mods/Dep.png"],

];
