function introduction(name  ){
   console.log (`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name, language){
    console.log(`Hi,my name is ${name} and I am learning in ${language}.`)
}
function introductionWithLanguageOptional(name, language){
   console.log(`Hi,my name is ${name} and I am learning to program in Javascript`) ;
   introductionWithLanguageOptional("Gracie")
}function introductionWithLanguageOptional(name, language){
    introductionWithLanguageOptional("gracie","Python");
    console.log(`Hi,my name is ${name} and I am learning to program in ${language}`)
}