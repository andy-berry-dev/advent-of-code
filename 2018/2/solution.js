var diff = require('fast-diff');


const inputs = [
'prtkqyluibmtcwqaezjmhgfndx',
'prtkqylusbsmcwvaezjmhgfndt',
'prgkqyluibsocwvamzjmhgkndx',
'prjkqyluibsocwvahzjmhgfnsx',
'prtkqylcibsocwvzezjohgfndx',
'prtkqyluiksocwziezjmhgfndx',
'prikqyluiksocwvaezjmkgfndx',
'prtkgyluibsocwvwezjehgfndx',
'prtkqyluiysocwvaezjghxfndx',
'prtkqwluibsoxwvaezjmhgfhdx',
'prtkqylgibsocwvabzjmhzfndx',
'prtknyltibnocwvaezjmhgfndx',
'prdkqyluibrocwvaezjmhgnndx',
'prtwqyluibsoctvcezjmhgfndx',
'mrtkqyluibgocwvakzjmhgfndx',
'prtkqaouibsocwvaezjmhwfndx',
'prtkqyluihjocwvaezjmhgfpdx',
'prtkqyluikfxcwvaezjmhgfndx',
'prtkqybuixsocwvaczjmhgfndx',
'pvtkayluibsocwxaezjmhgfndx',
'grtkqgluibsocdvaezjmhgfndx',
'prlkqyluibsochvaezjmhgzndx',
'prtkqylxibsocmvaezjmhgfkdx',
'prtkqyluibsqctvaezjmpgfndx',
'putkqyluibsocqvaezjmhgfndw',
'prtjqyluibsiclvaezjmhgfndx',
'prtkqylvpvsocwvaezjmhgfndx',
'prnkqyluibsocwvaezjmhefsdx',
'prtktyluibsocwvaezjkhgrndx',
'prtkqyluibcovwvaezjthgfndx',
'prtkqcluibiocwvaezjmhggndx',
'prtkqyluihsocwveezjmhgfydx',
'prtklyluibsocwqaszjmhgfndx',
'prtkqyluibsocwvaezjmfznndx',
'prtkjyluijsocwvaeejmhgfndx',
'prtkqtluibsonwvaexjmhgfndx',
'prtkqyluinsocwbaezjmjgfndx',
'prtkqyluibslckvaezjmhgyndx',
'prtkqyluibsodwlpezjmhgfndx',
'prtkquluibsfcwvaezjhhgfndx',
'prtkqyluhbsocweaezsmhgfndx',
'prrkqyluinsocxvaezjmhgfndx',
'prtkqyluibsoswvaezjmhgyqdx',
'prtkqbluibdocwvlezjmhgfndx',
'prtkqyfuibsocpvaezjmhgfnwx',
'prtkqlluibsqjwvaezjmhgfndx',
'prtkqyluibrocwvaehjmjgfndx',
'prtkqyluibsoowvaezgmhgendx',
'wrtjqyluibsocwvaezfmhgfndx',
'prtvqyluhbsocwvaezjmtgfndx',
'prtkqyllibspcwvaezjmkgfndx',
'pqtzqyeuibsocwvaezjmhgfndx',
'prtkqyluibsolpvaezjmegfndx',
'przkayguibsocwvaezjmhgfndx',
'prtkqyluidsocwvaezjmyufndx',
'prtuqyluibsocwvaezjmfgfnkx',
'prtkqwluibsrcwvaezjchgfndx',
'prtkqyluibsotwhaozjmhgfndx',
'erwkqylhibsocwvaezjmhgfndx',
'prtkqyluibsocwvgezjmkgfedx',
'prskqyluiesocwvaezjmggfndx',
'prtkqylmitsocwvaezjmhgfnox',
'prtkqyluinnocwvaezjmhgfkdx',
'prtktyluibsokwvaezjmhgfcdx',
'prtkqyluibsomwvakvjmhgfndx',
'prtkqyltibloawvaezjmhgfndx',
'prtkqyluibxocwvaezgmhgqndx',
'prtkqyluibskcmvaezjmhgfngx',
'artkqylubbsotwvaezjmhgfndx',
'prtkqyluibzocwvhezjmhgfnbx',
'prskqkluibsocwvaezjmhgfjdx',
'prtkqyluibwocwvaezjkhglndx',
'prukqyluissocwvzezjmhgfndx',
'puhkqyluibsocwvaezjmhgfsdx',
'qrtkqyluibsocwvaeujmhgfndd',
'prtkqyluibsoctvaezjmagfnda',
'prtkquluibsocwkaezjmhgfqdx',
'prtkqyluubswcwvaezjmhvfndx',
'prfkqyluibsocwvaemrmhgfndx',
'pmtkqyluibpocwvaezjmhggndx',
'prtkqvluibiocwvaezjqhgfndx',
'prtkgypuibsocwvaezcmhgfndx',
'prtpqyquibsovwvaezjmhgfndx',
'prtwqyluiasocwvaexjmhgfndx',
'mrtzqyluibbocwvaezjmhgfndx',
'prtkqyluibsocwmaegwmhgfndx',
'prtkqyluibvncwvaqzjmhgfndx',
'prtkqyluiusocwvaezjmhmfbgx',
'prtkqyljibvocwvaezjehgfndx',
'prtkqyloibsopavaezjmhgfndx',
'prckqyakibsocwvaezjmhgfndx',
'prtkqyluibsdcwvaezjmngfddx',
'prekqylupbsocwvaezemhgfndx',
'hrtkqyluibhocwvaezjmhgfnde',
'prmkqyluibsocwvaezzfhgfndx',
'prtkqyluiccfcwvaezjmhgfndx',
'pdtkqyluxbsocwvaezjmhgendx',
'prokqyluibsocwvuezjmsgfndx',
'prtkqyluibsacwvaezjyhgfndv',
'prtkqmluibsocavaezjmhgfndc',
'prtkqyluibsocwvmezjmhgtnqx',
'prtkqytuibiocyvaezjmhgfndx',
'pktkqyiuibsocwvwezjmhgfndx',
'grtrqyluibsocwvaezjmhgfbdx',
'prtkqylsibjocwvaezjmhgfnyx',
'prtkqyhutbsocwvaexjmhgfndx',
'prtknyluibsocmvaezumhgfndx',
'prtkwyluibsocwvahzjmhgpndx',
'prtkqywuibsolhvaezjmhgfndx',
'prtkcyluibsoccvaezjthgfndx',
'prtkqyrdibsocwvaezjbhgfndx',
'prtkqyhuqbsocwvaezjmhgfxdx',
'pytkqyluibsocwvagzjmhgfndv',
'prtkqyliibsocwvaexwmhgfndx',
'prtkqyluibshcwvaeljphgfndx',
'prtkqyluibsocwvaerjzhbfndx',
'prtkqyduibsocwvaezvmhgfnzx',
'drtkqylhibsocwvaezjmhmfndx',
'prtkqyluibsocwvaezamfvfndx',
'brtkqyluqbsocwvaezjmhgpndx',
'prtkqyiuibsocwvuezjmhgfngx',
'urtkqyluibsocqvaeljmhgfndx',
'prtkqyluikaocwvaezjmhgfjdx',
'prqkqzouibsocwvaezjmhgfndx',
'prtkqyluibsocxvaezjmhgfnxv',
'prlkqyluibsoxwvaeijmhgfndx',
'prthuyluibsocwvaezjmhgfnhx',
'potkqyluizsocwvaezjmhifndx',
'fstkqyduibsocwvaezjmhgfndx',
'prtkqxluibsocwvaezjmhgffdm',
'prtkqylpibsozwvaezmmhgfndx',
'prxkqylbibsocwvaezjphgfndx',
'srtkqyluibsicnvaezjmhgfndx',
'prtktyluibsocwvaezjvhgfnax',
'pctkqyluxbsocwvaezwmhgfndx',
'prtkqylusbsoclvaezsmhgfndx',
'pwtkqyluibsocrvaezjmggfndx',
'prtkqyluibswcwraezjmhgfndd',
'prtkqyluibtocwiaezjmhgfnax',
'prtuqyluibsocwvajzjmngfndx',
'pwtkqyluibsocwvaerjmogfndx',
'petkqexuibsocwvaezjmhgfndx',
'pztkqyluibsocwvaerqmhgfndx',
'prtkqyluobsocwvaezjmapfndx',
'prtkqyluiinocwvaeljmhgfndx',
'prtkqyluibsoowvxezjmhgfnnx',
'lrtkqyluibsocwvfezjmhgfndc',
'prtkqyluibokcwvahzjmhgfndx',
'prtkqmlufbsocwvaegjmhgfndx',
'prtkqylribsocwvanzjmhgfnda',
'prtkqyluibspxwvaezkmhgfndx',
'prtiqyluibsbcwvaezjmhgfntx',
'prikqzluinsocwvaezjmhgfndx',
'prtkqnldibsocwvaezjmhxfndx',
'prtkqyluixsocsvaezjmhwfndx',
'hrtkqyluibsocwvaezjhhgfodx',
'prtkqyluibsrcwvaezjmhpfwdx',
'prtkqyluibsocwyaezjmhgffdk',
'prtkqyluidsocwvalmjmhgfndx',
'prukquluabsocwvaezjmhgfndx',
'prckqyluinsmcwvaezjmhgfndx',
'prbkqymuibsocwvaezjmhgfndc',
'prtkfylaibsocwvaezjmkgfndx',
'zrtkqyluibsocwvrbzjmhgfndx',
'crtkqyluibsocwvaejjmkgfndx',
'prttqyluibsocyvaezymhgfndx',
'prtkqylugbsocwvaezjxhgfmdx',
'prtkqyluibsocwdlezjmhgfnbx',
'prtkqjluibsocwvaozjhhgfndx',
'prtcjyluibsocwbaezjmhgfndx',
'rrtkqyluiblocwvaezjmhgundx',
'prtkkyluibsocwfaezjmhgfnyx',
'prtkqyuuibsocwvaezjmhgfogx',
'prtkyyluvbsocwvaezjmhgfnox',
'prpkqyluibyocwvaezjmhggndx',
'pdtkqyluibdocwvaezjmhgfndy',
'prtklysuibsocwvaezjmhgfnwx',
'prtkqyluabsouwvaekjmhgfndx',
'phtkqyluibsocwvaezjmhgfnxt',
'prtkqyxuibsocwvaezjmhpfnqx',
'prtkqyluibsodwsaezdmhgfndx',
'prtkbyluibsohwvaezjmhgfndr',
'xrtkqylhibsocwvtezjmhgfndx',
'prtkqyluvysocwvaezbmhgfndx',
'prtkqieuibsocwvaeojmhgfndx',
'pctkqyluibsocwvanzjmhgfnux',
'vrtkqyluibsozwvaezjmhgandx',
'prtkqyluiusocwvaezjmhmfngx',
'prbkqyluibsockvaxzjmhgfndx',
'prtkqyluibsonwvaczjmhgfndi',
'prtkqyluiblocwvaezjmhgfnau',
'prtkqyluibsocwvafzuchgfndx',
'prdkqyluiysocwvaezjmhgfnax',
'prnkqyouibsocwvaezjmhgfndq',
'mrtkqgluibsocwvpezjmhgfndx',
'pvtkqyluibsocwvaczjmhgnndx',
'trtkqwluibsohwvaezjmhgfndx',
'prmkqyluibsofwvaezjmhgfrdx',
'prtyqyluibpdcwvaezjmhgfndx',
'ertkqylulbsocwvaezjmhgfnax',
'prtkqyluibsacwvaeijmhgfndf',
'prtkqyluibyocwvapzjmhgpndx',
'potkqyluibgocwvaezjmhzfndx',
'prtkqyluibsocwyaezxmhgfnpx',
'prtkqkjuibsncwvaezjmhgfndx',
'prtqqyluibsocwlaezjmhgkndx',
'prtkxyluibnocwvaezjmhgkndx',
'prtkqyluiosocwvapzjmxgfndx',
'prtkqylumbsocwvyezimhgfndx',
'prukqyluibsocwvyezjmhgindx',
'prtkqylbibstcwvaezjxhgfndx',
'pctkqyuuibsocwvaezjuhgfndx',
'vrtkqyluibsocwvaezjmhgfnll',
'urtkqyluibsopwvaezjphgfndx',
'prtkceluibsocwvaepjmhgfndx',
'prwkxyluibsocwvaezjmhgfnzx',
'prtkqyluitsocwvaezqzhgfndx',
'prtkqkauibsorwvaezjmhgfndx',
'prtkqyluibsocwvaezfmftfndx',
'prtkiybuibsocwvaezjkhgfndx',
'prtkzyluibsocwgaezjmvgfndx',
'prtkqyluibsocwvaezjmhgqnxg',
'prtkqyluimsocwvauzjwhgfndx',
'prtkqyluibsacwgaezjmhgfndd',
'pwtkuyluibsccwvaezjmhgfndx',
'prtkqyluibsoawvaezjmvgfnlx',
'prtkqyluabsocwwaezjmhgftdx',
'patkqylnibsocwvaezjmhgfnox',
'prtkqyluibsocwlaxzkmhgfndx',
'pbtkqpluibsfcwvaezjmhgfndx',
'prtkqyluibsoywsaezjmhgxndx',
'prtkqyluibfocwvaezjyhgfhdx',
'pltbqylcibsocwvaezjmhgfndx',
'prtkdyluiisocwvvezjmhgfndx',
'prtkqkxuibsokwvaezjmhgfndx',
'prtkqyluibsoawvaezzmhgfndm',
'petkqyluibsgcwvaezjmhgfndu',
'prtkqyluibsoyxvaezjmlgfndx',
'prtkqyluibxocwvaezgmhnfndx',
'prtkikluibsocwvwezjmhgfndx',
'prbkqyluibsocwvaezjhhgfnux',
'prtkqylufbsxcwvaezjmhgfnfx',
'prtkqyluibsdcdvaezjmhgxndx',
'potkiyluibsocwvaezjmhkfndx',
'prtkqyluiosocsvhezjmhgfndx',
'prtkqyluibsocqbaezomhgfndx',
'prtihyluibsocwvaeujmhgfndx',
'prtuquruibsocwvaezjmhgfndx',
'prtkqyloibsocwvaeztmhifndx',
'ertuqyluibsocwvaeajmhgfndx',
];

const twoInARowRegex = /(.)\1{1,1}/;
const threeInARowRegex = /(.)\1{2,2}/;



function compareString( s1, s2, splitChar ){
    if ( typeof splitChar == "undefined" ){
        splitChar = " ";
    }
    var string1 = new Array();
    var string2 = new Array();

    string1 = s1.split( splitChar );
    string2 = s2.split( splitChar );
    var diff = new Array();

    if(s1.length>s2.length){
        var long = string1;
    }
    else {
        var long = string2;
    }
    for(x=0;x<long.length;x++){
        if(string1[x]!=string2[x]){
            diff.push(string2[x]);
        }
    }

    return diff;
}


const partOne = () => {
    const countInstances = (char, _, charArray) => ({ [char]: charArray.filter(x => x === char).length })
    const toCountsDictionary = ([dict], curr) => [{ ...dict, ...curr }]

    const occurrences = value => value.split('')
      .map(countInstances)
      .reduce(toCountsDictionary, [{}])
      .map(dict => dict)

    const run = data => data.reduce((p, c) => {
      const [dict] = occurrences(c)
      const two = Object.values(dict).some(v => v === 2);
      const three = Object.values(dict).some(v => v === 3);

      return [
        two ? p[0] + 1 : p[0],
        three ? p[1] + 1 : p[1],
      ]
    }, [0, 0])

    const [twos, threes] = run(inputs)
    const result = twos * threes

    console.log(result)
  }

  const partTwo = (base, possibleMatches) => {
    const test = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']

  const matchingChars = (s1, s2) => {
    const s1a = s1.split('')
    const s2a = s2.split('')

    return s1a.map((c, i) => c === s2a[i])
  }
  const toMatchMaps = (item, all) => all.map(x => matchingChars(item, x))
  const matches = data => data.reduce((p, c, _, a) => ({ ...p, [c]: toMatchMaps(c, a) }), {})

  const findOffByOne = obj => Object.keys(obj)
    .filter(key => obj[key].map(boolArray => boolArray.filter(b => b === false).length === 1).find(x => x === true))

  console.log(findOffByOne(matches(inputs)))
  }

partTwo();

/*
prtkqyluiusocwvaezjmhmfbgx
prtkqyluiusocwvaezjmhmfngx

prtkqyluiusocwvaezjmhmfgx
prtkqyluiusocwvaezjmhmfgx
*/