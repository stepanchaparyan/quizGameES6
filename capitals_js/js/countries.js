const COUNTRIES = [

{
"name":"Afghanistan",
"capital": "Kabul",
"region": "Asia",
"subregion": "Southern Asia",
"language": ["Pashto", "Dari"],
"borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
"answer":"right"
},
{
"name": "Albania",
"capital": "Tirana",
"region": "Europe",
"subregion": "Southern Europe",
"language": ["Albanian"],
"borders": ["MNE", "GRC", "MKD", "KOS"],
"answer":"right"
},
{
"name": "Algeria",
"capital": "Algiers",
"region": "Africa",
"subregion": "Northern Africa",
"language": ["Arabic"],
"borders": ["TUN", "LDY", "NER", "ESH", "MRT", "MLI", "MAR"],
"answer":"right"
},
{
"name": "American Samoa",
"capital": "Pago Pago",
"region": "Oceania",
"subregion": "Polynesia",
"language": ["English", "Samoan"],
"borders": [],
"answer":"right"
},
{
"name": "Andorra",
"capital": "Andorra la Vella",
"region": "Europe",
"subregion": "Southern Europe",
"language": ["Catalan"],
"borders": ["FRA", "ESP"],
"answer":"right"
},
{
"name": "Angola",
"capital": "Luanda",
"region": "Africa",
"subregion": "Middle Africa",
"language": ["Portuguese"],
"borders": ["COG", "COD", "ZMB", "NAM"],
"answer":"right"
},
{
"name": "Anguilla",
"capital": "The Valley",
"region": "Americas",
"subregion": "Caribbean",
"language": ["English"],
"borders": [],
"answer":"right"
},
{
"name": "Antigua and Barbuda",
"capital": "Saint John's",
"region": "Americas",
"subregion": "Caribbean",
"language": ["English"],
"borders": [],
"answer":"right"
},
{
"name": "Argentina",
"capital": "Buenos Aires",
"region": "Americas",
		"subregion": "South America",
		"language": ["Spanish"],
		"languageCodes": ["es", "gn"],
		"translations": {
			"cy": "Ariannin",
			"de": "Argentinien",
			"es": "Argentina",
			"fr": "Argentine",
			"it": "Argentina",
			"ja": "\u30a2\u30eb\u30bc\u30f3\u30c1\u30f3",
			"nl": "Argentini\u00eb",
			"hr": "Argentina"
		},
		"latlng": [-34, -64],
		"demonym": "Argentinean",
		"borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
		"area": 2780400
	},
	{
		"name": "Armenia",
		"nativeName": "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576",
		"tld": [".am"],
		"cca2": "AM",
		"ccn3": "051",
		"cca3": "ARM",
		"currency": ["AMD"],
		"callingCode": ["374"],
		"capital": "Yerevan",
		"altSpellings": ["AM", "Hayastan", "Republic of Armenia", "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576\u056b \u0540\u0561\u0576\u0580\u0561\u057a\u0565\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576"],
		"relevance": "0",
		"region": "Asia",
		"subregion": "Western Asia",
		"language": ["Armenian"],
		"languageCodes": ["hy", "ru"],
		"translations": {
			"cy": "Armenia",
			"de": "Armenien",
			"es": "Armenia",
			"fr": "Arm\u00e9nie",
			"it": "Armenia",
			"ja": "\u30a2\u30eb\u30e1\u30cb\u30a2",
			"nl": "Armeni\u00eb",
			"hr": "Armenija"
		},
		"latlng": [40, 45],
		"demonym": "Armenian",
		"borders": ["AZE", "GEO", "IRN", "TUR"],
		"area": 29743
	},
	{
		"name": "Aruba",
		"nativeName": "Aruba",
		"tld": [".aw"],
		"cca2": "AW",
		"ccn3": "533",
		"cca3": "ABW",
		"currency": ["AWG"],
		"callingCode": ["297"],
		"capital": "Oranjestad",
		"altSpellings": ["AW"],
		"relevance": "0.5",
		"region": "Americas",
		"subregion": "Caribbean",
		"language": ["Dutch", "Papiamento"],
		"languageCodes": ["nl", "pa"],
		"translations": {
			"de": "Aruba",
			"es": "Aruba",
			"fr": "Aruba",
			"it": "Aruba",
			"ja": "\u30a2\u30eb\u30d0",
			"nl": "Aruba",
			"hr": "Aruba"
		},
		"latlng": [12.5, -69.96666666],
		"demonym": "Aruban",
		"borders": [],
		"area": 180
	},
	{
		"name": "Ascension Island",
		"nativeName": "Ascension Island",
		"tld": [".ac"],
		"cca2": "SH",
		"ccn3": "654",
		"cca3": "SHN",
		"currency": ["SHP"],
		"callingCode": ["247"],
		"capital": "Georgetown",
		"altSpellings": [""],
		"relevance": "0",
		"region": "Americas",
		"subregion": "South America",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"cy": "Ynys y Dyrchafael",
			"de": "Ascension",
			"es": "Isla Ascensi\u00f3n",
			"fr": "\u00cele de l'Ascension",
			"it": "Isola di Ascensione",
			"ja": "\u30a2\u30bb\u30f3\u30b7\u30e7\u30f3\u5cf6",
			"nl": "Ascension",
			"hr": "Otok Ascension"
		},
		"latlng": [-7.933333, -14.366667],
		"demonym": "Saints",
		"borders": [],
		"area": -1
	},
	{
		"name": "Australia",
		"nativeName": "Australia",
		"tld": [".au"],
		"cca2": "AU",
		"ccn3": "036",
		"cca3": "AUS",
		"currency": ["AUD"],
		"callingCode": ["61"],
		"capital": "Canberra",
		"altSpellings": ["AU"],
		"relevance": "1.5",
		"region": "Oceania",
		"subregion": "Australia and New Zealand",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"cy": "Awstralia",
			"de": "Australien",
			"es": "Australia",
			"fr": "Australie",
			"it": "Australia",
			"ja": "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2",
			"nl": "Australi\u00eb",
			"hr": "Australija"
		},
		"latlng": [-27, 133],
		"demonym": "Australian",
		"borders": [],
		"area": 7692024
	},
	{
		"name": "Austria",
		"nativeName": "\u00d6sterreich",
		"tld": [".at"],
		"cca2": "AT",
		"ccn3": "040",
		"cca3": "AUT",
		"currency": ["EUR"],
		"callingCode": ["43"],
		"capital": "Vienna",
		"altSpellings": ["AT", "\u00d6sterreich", "Osterreich", "Oesterreich"],
		"relevance": "0",
		"region": "Europe",
		"subregion": "Western Europe",
		"language": ["German"],
		"languageCodes": ["de"],
		"translations": {
			"cy": "Awstria",
			"de": "\u00d6sterreich",
			"es": "Austria",
			"fr": "Autriche",
			"it": "Austria",
			"ja": "\u30aa\u30fc\u30b9\u30c8\u30ea\u30a2",
			"nl": "Oostenrijk",
			"hr": "Austrija"
		},
		"latlng": [47.33333333, 13.33333333],
		"demonym": "Austrian",
		"borders": ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
		"area": 83871
	},
	{
		"name": "Azerbaijan",
		"nativeName": "Az\u0259rbaycan",
		"tld": [".az"],
		"cca2": "AZ",
		"ccn3": "031",
		"cca3": "AZE",
		"currency": ["AZN"],
		"callingCode": ["994"],
		"capital": "Baku",
		"altSpellings": ["AZ", "Republic of Azerbaijan", "Az\u0259rbaycan Respublikas\u0131"],
		"relevance": "0",
		"region": "Asia",
		"subregion": "Western Asia",
		"language": ["Azerbaijani"],
		"languageCodes": ["az", "hy"],
		"translations": {
			"cy": "Aserbaijan",
			"de": "Aserbaidschan",
			"es": "Azerbaiy\u00e1n",
			"fr": "Azerba\u00efdjan",
			"it": "Azerbaijan",
			"ja": "\u30a2\u30bc\u30eb\u30d0\u30a4\u30b8\u30e3\u30f3",
			"nl": "Azerbeidzjan",
			"hr": "Azerbajd\u017ean"
		},
		"latlng": [40.5, 47.5],
		"demonym": "Azerbaijani",
		"borders": ["ARM", "GEO", "IRN", "RUS", "TUR"],
		"area": 86600
	},
	{
		"name": "Bahamas",
		"nativeName": "Bahamas",
		"tld": [".bs"],
		"cca2": "BS",
		"ccn3": "044",
		"cca3": "BHS",
		"currency": ["BSD"],
		"callingCode": ["1242"],
		"capital": "Nassau",
		"altSpellings": ["BS", "Commonwealth of the Bahamas"],
		"relevance": "0",
		"region": "Americas",
		"subregion": "Caribbean",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"cy": "Bahamas",
			"de": "Bahamas",
			"es": "Bahamas",
			"fr": "Bahamas",
			"it": "Bahamas",
			"ja": "\u30d0\u30cf\u30de",
			"nl": "Bahama\u2019s",
			"hr": "Bahami"
		},
		"latlng": [24.25, -76],
		"demonym": "Bahamian",
		"borders": [],
		"area": 13943
	},
	{
		"name": "Bahrain",
		"nativeName": "\u200f\u0627\u0644\u0628\u062d\u0631\u064a\u0646",
		"tld": [".bh"],
		"cca2": "BH",
		"ccn3": "048",
		"cca3": "BHR",
		"currency": ["BHD"],
		"callingCode": ["973"],
		"capital": "Manama",
		"altSpellings": ["BH", "Kingdom of Bahrain", "Mamlakat al-Ba\u1e25rayn"],
		"relevance": "0",
		"region": "Asia",
		"subregion": "Western Asia",
		"language": ["Arabic"],
		"languageCodes": ["ar"],
		"translations": {
			"cy": "Bahrain",
			"de": "Bahrain",
			"es": "Bahrein",
			"fr": "Bahre\u00efn",
			"it": "Bahrein",
			"ja": "\u30d0\u30fc\u30ec\u30fc\u30f3",
			"nl": "Bahrein",
			"hr": "Bahrein"
		},
		"latlng": [26, 50.55],
		"demonym": "Bahraini",
		"borders": [],
		"area": 765
	},
	{
		"name": "Bangladesh",
		"nativeName": "Bangladesh",
		"tld": [".bd"],
		"cca2": "BD",
		"ccn3": "050",
		"cca3": "BGD",
		"currency": ["BDT"],
		"callingCode": ["880"],
		"capital": "Dhaka",
		"altSpellings": ["BD", "People's Republic of Bangladesh", "G\u00f4n\u00f4pr\u00f4jat\u00f4ntri Bangladesh"],
		"relevance": "2",
		"region": "Asia",
		"subregion": "Southern Asia",
		"language": ["Bangla"],
		"languageCodes": ["bn"],
		"translations": {
			"cy": "Bangladesh",
			"de": "Bangladesch",
			"es": "Bangladesh",
			"fr": "Bangladesh",
			"it": "Bangladesh",
			"ja": "\u30d0\u30f3\u30b0\u30e9\u30c7\u30b7\u30e5",
			"nl": "Bangladesh",
			"hr": "Banglade\u0161"
		},
		"latlng": [24, 90],
		"demonym": "Bangladeshi",
		"borders": ["MMR", "IND"],
		"area": 147570
	},
	{
		"name": "Barbados",
		"nativeName": "Barbados",
		"tld": [".bb"],
		"cca2": "BB",
		"ccn3": "052",
		"cca3": "BRB",
		"currency": ["BBD"],
		"callingCode": ["1246"],
		"capital": "Bridgetown",
		"altSpellings": ["BB"],
		"relevance": "0",
		"region": "Americas",
		"subregion": "Caribbean",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"cy": "Barbados",
			"de": "Barbados",
			"es": "Barbados",
			"fr": "Barbade",
			"it": "Barbados",
			"ja": "\u30d0\u30eb\u30d0\u30c9\u30b9",
			"nl": "Barbados",
			"hr": "Barbados"
		},
		"latlng": [13.16666666, -59.53333333],
		"demonym": "Barbadian",
		"borders": [],
		"area": 430
	},
	{
		"name": "Belarus",
		"nativeName": "\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c",
		"tld": [".by"],
		"cca2": "BY",
		"ccn3": "112",
		"cca3": "BLR",
		"currency": ["BYR"],
		"callingCode": ["375"],
		"capital": "Minsk",
		"altSpellings": ["BY", "Bielaru\u015b", "Republic of Belarus", "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f", "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c", "Belorussiya", "Respublika Belarus\u2019"],
		"relevance": "0",
		"region": "Europe",
		"subregion": "Eastern Europe",
		"language": ["Belarusian", "Russian"],
		"languageCodes": ["be", "ru"],
		"translations": {
			"cy": "Belarws",
			"de": "Wei\u00dfrussland",
			"es": "Bielorrusia",
			"fr": "Bi\u00e9lorussie",
			"it": "Bielorussia",
			"ja": "\u30d9\u30e9\u30eb\u30fc\u30b7",
			"nl": "Wit-Rusland",
			"hr": "Bjelorusija"
		},
		"latlng": [53, 28],
		"demonym": "Belarusian",
		"borders": ["LVA", "LTU", "POL", "RUS", "UKR"],
		"area": 207600
	},
	{
		"name": "Belgium",
		"nativeName": "Belgi\u00eb",
		"tld": [".be"],
		"cca2": "BE",
		"ccn3": "056",
		"cca3": "BEL",
		"currency": ["EUR"],
		"callingCode": ["32"],
		"capital": "Brussels",
		"altSpellings": ["BE", "Belgi\u00eb", "Belgie", "Belgien", "Belgique", "Kingdom of Belgium", "Koninkrijk Belgi\u00eb", "Royaume de Belgique", "K\u00f6nigreich Belgien"],
		"relevance": "1.5",
		"region": "Europe",
		"subregion": "Western Europe",
		"language": ["Dutch", "French", "German"],
		"languageCodes": ["nl", "fr", "de"],
		"translations": {
			"cy": "Gwlad Belg",
			"de": "Belgien",
			"es": "B\u00e9lgica",
			"fr": "Belgique",
			"it": "Belgio",
			"ja": "\u30d9\u30eb\u30ae\u30fc",
			"nl": "Belgi\u00eb",
			"hr": "Belgija"
		},
		"latlng": [50.83333333, 4],
		"demonym": "Belgian",
		"borders": ["FRA", "DEU", "LUX", "NLD"],
		"area": 30528
	},
	{
		"name": "Belize",
		"nativeName": "Belize",
		"tld": [".bz"],
		"cca2": "BZ",
		"ccn3": "084",
		"cca3": "BLZ",
		"currency": ["BZD"],
		"callingCode": ["501"],
		"capital": "Belmopan",
		"altSpellings": ["BZ"],
		"relevance": "0",
		"region": "Americas",
		"subregion": "Central America",
		"language": ["English"],
		"languageCodes": ["en", "es"],
		"translations": {
			"cy": "Belize",
			"de": "Belize",
			"es": "Belice",
			"fr": "Belize",
			"it": "Belize",
			"ja": "\u30d9\u30ea\u30fc\u30ba",
			"nl": "Belize",
			"hr": "Belize"
		},
		"latlng": [17.25, -88.75],
		"demonym": "Belizean",
		"borders": ["GTM", "MEX"],
		"area": 22966
	},
	{
		"name": "Benin",
		"nativeName": "B\u00e9nin",
		"tld": [".bj"],
		"cca2": "BJ",
		"ccn3": "204",
		"cca3": "BEN",
		"currency": ["XOF"],
		"callingCode": ["229"],
		"capital": "Porto-Novo",
		"altSpellings": ["BJ", "Republic of Benin", "R\u00e9publique du B\u00e9nin"],
		"relevance": "0",
		"region": "Africa",
		"subregion": "Western Africa",
		"language": ["French"],
		"languageCodes": ["fr"],
		"translations": {
			"cy": "Benin",
			"de": "Benin",
			"es": "Ben\u00edn",
			"fr": "B\u00e9nin",
			"it": "Benin",
			"ja": "\u30d9\u30ca\u30f3",
			"nl": "Benin",
			"hr": "Benin"
		},
		"latlng": [9.5, 2.25],
		"demonym": "Beninese",
		"borders": ["BFA", "NER", "NGA", "TGO"],
		"area": 112622
	},
	{
		"name": "Bermuda",
		"nativeName": "Bermuda",
		"tld": [".bm"],
		"cca2": "BM",
		"ccn3": "060",
		"cca3": "BMU",
		"currency": ["BMD"],
		"callingCode": ["1441"],
		"capital": "Hamilton",
		"altSpellings": ["BM", "The Islands of Bermuda", "The Bermudas", "Somers Isles"],
		"relevance": "0.5",
		"region": "Americas",
		"subregion": "Northern America",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"cy": "Bermiwda",
			"de": "Bermuda",
			"es": "Bermudas",
			"fr": "Bermudes",
			"it": "Bermuda",
			"ja": "\u30d0\u30df\u30e5\u30fc\u30c0",
			"nl": "Bermuda",
			"hr": "Bermudi"
		},
		"latlng": [32.33333333, -64.75],
		"demonym": "Bermudian",
		"borders": [],
		"area": 54
	},
	{
		"name": "Bhutan",
		"nativeName": "\u02bcbrug-yul",
		"tld": [".bt"],
		"cca2": "BT",
		"ccn3": "064",
		"cca3": "BTN",
		"currency": ["BTN", "INR"],
		"callingCode": ["975"],
		"capital": "Thimphu",
		"altSpellings": ["BT", "Kingdom of Bhutan"],
		"relevance": "0",
		"region": "Asia",
		"subregion": "Southern Asia",
		"language": ["Dzongkha"],
		"languageCodes": ["dz"],
		"translations": {
			"cy": "Bhwtan",
			"de": "Bhutan",
			"es": "But\u00e1n",
			"fr": "Bhoutan",
			"it": "Bhutan",
			"ja": "\u30d6\u30fc\u30bf\u30f3",
			"nl": "Bhutan",
			"hr": "Butan"
		},
		"latlng": [27.5, 90.5],
		"demonym": "Bhutanese",
		"borders": ["CHN", "IND"],
		"area": 38394
	},
	{
		"name": "Bolivia",
		"nativeName": "Bolivia",
		"tld": [".bo"],
		"cca2": "BO",
		"ccn3": "068",
		"cca3": "BOL",
		"currency": ["BOB", "BOV"],
		"callingCode": ["591"],
		"capital": "Sucre",
		"altSpellings": ["BO", "Buliwya", "Wuliwya", "Plurinational State of Bolivia", "Estado Plurinacional de Bolivia", "Buliwya Mamallaqta", "Wuliwya Suyu", "Tet\u00e3 Vol\u00edvia"],
		"relevance": "0",
		"region": "Americas",
		"subregion": "South America",
		"language": ["Spanish", "Quechua", "Aymara", "Guaran\u00ed"],
		"languageCodes": ["es", "ay", "qu"],
		"translations": {
			"cy": "Bolifia",
			"de": "Bolivien",
			"es": "Bolivia",
			"fr": "Bolivie",
			"it": "Bolivia",
			"ja": "\u30dc\u30ea\u30d3\u30a2\u591a\u6c11\u65cf\u56fd",
			"nl": "Bolivia",
			"hr": "Bolivija"
		},
		"latlng": [-17, -65],
		"demonym": "Bolivian",
		"borders": ["ARG", "BRA", "CHL", "PRY", "PRU"],
		"area": 1098581
	},
	{
		"name": "Bonaire",
		"nativeName": "Bonaire",
		"tld": [".an", ".nl"],
		"cca2": "BQ",
		"ccn3": "535",
		"cca3": "BES",
		"currency": ["USD"],
		"callingCode": ["5997"],
		"capital": "Kralendijk",
		"altSpellings": ["BQ", "Boneiru"],
		"relevance": "0",
		"region": "Americas",
		"subregion": "Caribbean",
		"language": ["Dutch"],
		"languageCodes": ["nl"],
		"translations": {},
		"latlng": [12.15, -68.266667],
		"demonym": "Dutch",
		"borders": [],
		"area": -1
	},
	{
		"name": "Bosnia and Herzegovina",
		"nativeName": "Bosna i Hercegovina",
		"tld": [".ba"],
		"cca2": "BA",
		"ccn3": "070",
		"cca3": "BIH",
		"currency": ["BAM"],
		"callingCode": ["387"],
		"capital": "Sarajevo",
		"altSpellings": ["BA", "Bosnia-Herzegovina", "\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430"],
		"relevance": "0",
		"region": "Europe",
		"subregion": "Southern Europe",
		"language": ["Bosnian", "Croatian", "Serbian"],
		"languageCodes": ["bs", "hr", "sr"],
		"translations": {
			"cy": "Bosnia a Hercegovina",
			"de": "Bosnien und Herzegowina",
			"es": "Bosnia y Herzegovina",
			"fr": "Bosnie-Herz\u00e9govine",
			"it": "Bosnia ed Erzegovina",
			"ja": "\u30dc\u30b9\u30cb\u30a2\u30fb\u30d8\u30eb\u30c4\u30a7\u30b4\u30d3\u30ca",
			"nl": "Bosni\u00eb en Herzegovina",
			"hr": "Bosna i Hercegovina"
		},
		"latlng": [44, 18],
		"demonym": "Bosnian, Herzegovinian",
		"borders": ["HRV", "MNE", "SRB"],
		"area": 51209
	},
	{
		"name": "Botswana",
		"nativeName": "Botswana",
		"tld": [".bw"],
		"cca2": "BW",
		"ccn3": "072",
		"cca3": "BWA",
		"currency": ["BWP"],
		"callingCode": ["267"],
		"capital": "Gaborone",
		"altSpellings": ["BW", "Republic of Botswana", "Lefatshe la Botswana"],
		"relevance": "0",
		"region": "Africa",
		"subregion": "Southern Africa",
		"language": ["English", "Setswana"],
		"languageCodes": ["en", "tn"],
		"translations": {
			"de": "Botswana",
			"es": "Botswana",
			"fr": "Botswana",
			"it": "Botswana",
			"ja": "\u30dc\u30c4\u30ef\u30ca",
			"nl": "Botswana",
			"hr": "Bocvana"
		},
		"latlng": [-22, 24],
		"demonym": "Motswana",
		"borders": ["NAM", "ZAF", "ZMB", "ZWE"],
		"area": 582000
	},
	{
		"name": "Brazil",
		"nativeName": "Brasil",
		"tld": [".br"],
		"cca2": "BR",
		"ccn3": "076",
		"cca3": "BRA",
		"currency": ["BRL"],
		"callingCode": ["55"],
		"capital": "Bras\u00edlia",
		"altSpellings": ["BR", "Brasil", "Federative Republic of Brazil", "Rep\u00fablica Federativa do Brasil"],
		"relevance": "2",
		"region": "Americas",
		"subregion": "South America",
		"language": ["Portuguese"],
		"languageCodes": ["pt"],
		"translations": {
			"cy": "Brasil",
			"de": "Brasilien",
			"es": "Brasil",
			"fr": "Br\u00e9sil",
			"it": "Brasile",
			"ja": "\u30d6\u30e9\u30b8\u30eb",
			"nl": "Brazili\u00eb",
			"hr": "Brazil"
		},
		"latlng": [-10, -55],
		"demonym": "Brazilian",
		"borders": ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
		"area": 8515767
	},
	{
		"name": "British Indian Ocean Territory",
		"nativeName": "British Indian Ocean Territory",
		"tld": [".io"],
		"cca2": "IO",
		"ccn3": "086",
		"cca3": "IOT",
		"currency": ["USD"],
		"callingCode": ["246"],
		"capital": "Diego Garcia",
		"altSpellings": ["IO"],
		"relevance": "0",
		"region": "Africa",
		"subregion": "Eastern Africa",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"cy": "Tiriogaeth Brydeinig Cefnfor India",
			"de": "Britisches Territorium im Indischen Ozean",
			"es": "Territorio Brit\u00e1nico del Oc\u00e9ano \u00cdndico",
			"fr": "Territoire britannique de l'oc\u00e9an Indien",
			"it": "Territorio britannico dell'oceano indiano",
			"ja": "\u30a4\u30ae\u30ea\u30b9\u9818\u30a4\u30f3\u30c9\u6d0b\u5730\u57df",
			"nl": "Britse Gebieden in de Indische Oceaan",
			"hr": "Britanski Indijskooceanski teritorij"
		},
		"latlng": [-6, 71.5],
		"demonym": "Indian",
		"borders": [],
		"area": 60
	},
	{
		"name": "British Virgin Islands",
		"nativeName": "British Virgin Islands",
		"tld": [".vg"],
		"cca2": "VG",
		"ccn3": "092",
		"cca3": "VGB",
		"currency": ["USD"],
		"callingCode": ["1284"],
		"capital": "Road Town",
		"altSpellings": ["VG"],
		"relevance": "0.5",
		"region": "Americas",
		"subregion": "Caribbean",
		"language": ["English"],
		"languageCodes": ["en"],
		"translations": {
			"de": "Britische Jungferninseln",
			"es": "Islas V\u00edrgenes del Reino Unido",
			"fr": "\u00celes Vierges britanniques",
			"it": "Isole Vergini Britanniche",
			"ja": "\u30a4\u30ae\u30ea\u30b9\u9818\u30f4\u30a1\u30fc\u30b8\u30f3\u8af8\u5cf6",
			"nl": "Britse Maagdeneilanden",
			"hr": "Britanski Djevi\u010danski Otoci"
		},
		"latlng": [18.431383, -64.62305],
		"demonym": "Virgin Islander",
		"borders": [],
		"area": 151
	},
	{
		"name": "Brunei",
		"nativeName": "Negara Brunei Darussalam",
		"tld": [".bn"],
		"cca2": "BN",
		"ccn3": "096",
		"cca3": "BRN",
		"currency": ["BND"],
		"callingCode": ["673"],
		"capital": "Bandar Seri Begawan",
		"altSpellings": ["BN", "Nation of Brunei", " the Abode of Peace"],
		"relevance": "0",
		"region": "Asia",
		"subregion": "South-Eastern Asia",
		"language": ["Malay"],
		"languageCodes": ["ms"],
		"translations": {
			"cy": "Brunei",
			"fr": "Brunei",
			"nl": "Brunei",
			"de": "Brunei",
			"it": "Brunei",
			"ja": "\u30d6\u30eb\u30cd\u30a4\u30fb\u30c0\u30eb\u30b5\u30e9\u30fc\u30e0",
			"es": "Brunei",
			"hr": "Brunej"
		},
		"latlng": [4.5, 114.66666666],
		"demonym": "Bruneian",
		"borders": ["MYS"],
		"area": 5765
	},
	{
		"name": "Bulgaria",
		"nativeName": "\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f",
		"tld": [".bg"],
		"cca2": "BG",
		"ccn3": "100",
		"cca3": "BGR",
		"currency": ["BGN"],
		"callingCode": ["359"],
		"capital": "Sofia",
		"altSpellings": ["BG", "Republic of Bulgaria", "\u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"],
		"relevance": "0",
		"region": "Europe",
		"subregion": "Eastern Europe",
		"language": ["Bulgarian"],
		"languageCodes": ["bg"],
		"translations": {
			"cy": "Bwlgaria",
			"de": "Bulgarien",
			"es": "Bulgaria",
			"fr": "Bulgarie",
			"it": "Bulgaria",
			"ja": "\u30d6\u30eb\u30ac\u30ea\u30a2",
			"nl": "Bulgarije",
			"hr": "Bugarska"
		},
		"latlng": [43, 25],
		"demonym": "Bulgarian",
		"borders": ["GRC", "MKD", "ROU", "SRB", "TUR"],
		"area": 110879
	},
	{
		"name": "Burkina Faso",
		"nativeName": "Burkina Faso",
		"tld": [".bf"],
		"cca2": "BF",
		"ccn3": "854",
		"cca3": "BFA",
		"currency": ["XOF"],
		"callingCode": ["226"],
		"capital": "Ouagadougou",
		"altSpellings": ["BF"],
		"relevance": "0",
		"region": "Africa",
		"subregion": "Western Africa",
		"language": ["French"],
		"languageCodes": ["fr", "ff"],
		"translations": {
			"cy": "Burkina Faso",
			"de": "Burkina Faso",
			"es": "Burkina Faso",
			"fr": "Burkina Faso",
			"it": "Burkina Faso",
			"ja": "\u30d6\u30eb\u30ad\u30ca\u30d5\u30a1\u30bd",
			"nl": "Burkina Faso",
			"hr": "Burkina Faso"
		},
		"latlng": [13, -2],
		"demonym": "Burkinabe",
		"borders": ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"],
		"area": 272967
	},
	{
		"name": "Burundi",
		"nativeName": "Burundi",
		"tld": [".bi"],
		"cca2": "BI",
		"ccn3": "108",
		"cca3": "BDI",
		"currency": ["BIF"],
		"callingCode": ["257"],
		"capital": "Bujumbura",
		"altSpellings": ["BI", "Republic of Burundi", "Republika y'Uburundi", "R\u00e9publique du Burundi"],
		"relevance": "0",
		"region": "Africa",
		"subregion": "Eastern Africa",
		"language": ["Kirundi", "French"],
		"languageCodes": ["fr", "rn"],
		"translations": {
			"cy": "Bwrwndi",
			"de": "Burundi",
			"es": "Burundi",
			"fr": "Burundi",
			"it": "Burundi",
			"ja": "\u30d6\u30eb\u30f3\u30b8",
			"nl": "Burundi",
			"hr": "Burundi"
		},
		"latlng": [-3.5, 30],
		"demonym": "Burundian",
		"borders": ["COD", "RWA", "TZA"],
		"area": 27834
	},




]
