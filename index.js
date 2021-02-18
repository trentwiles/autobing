const {Builder, By, Key, until} = require('selenium-webdriver');
const delay = require('delay');
const random = require('random');

var chunk = '["dunted","profile","ursiform","waterzoois","keyed","libelant","congers","jammy","cinquefoils","mommy","cissoid","ligation","shuttered","exists","bund","pericarp","mind","packnesses","humanities","nondrinkers","blurters","propitiously","flatfooted","runbacks","sanitaria","diabolically","heterodyned","havens","telefax","overhauled","focaccia","endmost","maturated","recrossed","astonied","astounding","stagehand","berg","standpoint","antinovel","decompress","transcript","undercooled","howled","trifurcated","paillasse","expiator","goodness","courtesying","reproachful","spectre","overwearying","dentistry","lichts","trowelers","leakily","immortalizes","hardpans","alleviates","disremember","overbidding","wave","burying","carnelians","children","quest","eddies","mesian","curtalaxes","grogginess","wrote","payer","nonobjectivists","swigs","paruras","weakons","reflet","splayfeet","commissural","ultrasecret","offishnesses","suborners","curara","tarsals","fractional","anesthetize","carbonations","settlors","peripeteias","shists","dominoes","peles","borderlines","overruffed","gurnard","superoxides","myomata","ozonised","confessors","proptosis","nonbreeders","bulimic","proselytization","brittles","ebbet","frenchify","resurrectionist","uncurable","nazis","polymerisations","viscous","cosmetician","backslapped","daddies","cloves","piquet","euphemised","murderers","human","fuzils","citers","laden","creakily","atonality","houseless","evacuated","jagers","cedary","trichome","coachwork","reavows","imperfectness","respectfulness","tularemias","graffito","cumulated","harmoniums","pasqueflower","lubing","rental","stockpile","signior","optometries","fils","bloodline","xanthophyll","exceed","heaver","centas","eth","lichenous","oftenest","concerns","outstating","aptitudinal","verderor","roisters","basifying","botch","radiotelephone","quadrupling","laceworks","privately","cozying","volunteer","woollens","readablenesses","seismographic","rerouting","speckling","copolymerized","emancipator","mucoids","shoehorned","dreams","buckboard","abutilons","lateralized","catkinate","desolating","cheths","hairpiece","momentarily","evergreen","stringiness","quattrocentos","confinement","cyclopaedia","moonshiny","intercalate","creator","biotoxin","mastless","unrelentingly","trachles","predicable","phenanthrene","agings","submersible","ratcheted","steeliest","reconfining","nonsynchronous","labouring","crumbly","playtimes","archive","aggadahs","relaying","hunk","gainliest","qwertys","cove","jigsaw","haftarahs","celeriacs","crumbled","notching","priory","livyers","mononucleoses","slaughtered","aragonites","stormily","gunners","embedments","physiognomies","duplicator","croplands","sthenias","bidarkas","aminopterin","collying","sock","censuses","insofar","leaping","recrosses","oghamist","wisecracker","gamy","outcross","acclimatization","kilocurie","cytophotometric","triathletes","upslope","cassenas","dreidls","purplest","sodas","guaranies","tearstrip","foulbroods","unriddling","trimaran","bawl","loof","chowsing","magnetizes","countermelodies","backwashing","cannibalism","availabilities","shriveled","swellfishes","inapparently","shadblow","gillnets","redfins","spurgalled","gesturer","baffle","hematocrit","skywards","somatology","overdirecting","spasmolytics","agoutis","aparejos","hyperstimulate","decadents","headspace","retropacks","dominate","reimagining","reordains","enchasers","prokaryotes","qats","wittingly","asceses","poet","feedstuff","perfectives","prograde","stater","prohibiting","thingness","misperceives","stack","winda","cheezes","poggers","gamer","github","github.com","repo","meta","wrapping","pull requrest","star","flag","cdn"]'


var parse = JSON.parse(chunk);

var count = 0;
for(var i = 0; i < parse.length; ++i){
    if(parse[i] == 2)
        count++;
}

function getRandomWord() {
	var random = Math.floor((Math.random() * 28) + 0);
	return parse[random];
}

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://hastebin.com/ququfesuti.coffeescript');
    await delay(10000);     
    var one = 1;
    while(1 == one){
        var goto = getRandomWord();
	await delay(Math.floor((Math.random() * 4000) + 2000));
	await driver.get('https://www.bing.com/?q='+goto)

    }
  } finally {
    await driver.quit();
  }
})();
