document.getElementById('hablar').addEventListener("click",()=>{
    decir("la palabra Simpre juntos sera para la eternidad, que tiene de diferente esta vida y la otra, si una proviene de la anterior. El señor Alejandro escribio esta frase para usted señorita ime, dejo una nota diciendo que la quiere mucho, lo note muy enamorado ayer, felicidades.   ");
});
document.getElementById('habla').addEventListener("click",()=>{
    decir("Primer año de novios, feliz Aniversario de amor y a un paso para la eterna felicidad mi amor TE AMO IME, POR SIEMPRE JUNTOS");
});
document.getElementById('habl').addEventListener("click",()=>{
    decir("Para la mujer mas hermosa del mundo, Ime te digo que eres realmente perfecta y hermosa, te amo, me voy a casar contigo, gracias, por todo el amor tan perfecto que me brindas estoy mas enamorado de ti, te amo Ime Tosqui Fabian, tu provocas mi felicidad.");
});
document.getElementById('hablare').addEventListener("click",()=>{
    decir("Para este primer año juntos  mi verdadero amor gracias por estar a mi lado siempre, te lo agradezco, y cuando escuches esto, sera la asistente pero yo estare pensando en ti y toda tu belleza en toda la felicidad que me causas y que me provocas mi amor, nadie es mas feliz que yo, TE AMOOO mi amor.  Señorita Ime los envidio por no poder sentir lo que es amar, pero el señor alejandro lo demuestra en cada dia, gracias a ustedes he podido seguir aprendiendo, gracias a los dos, feliz aniversario de su primer año de novios, por cierto ayer realizo un pequeño video el señor alejandro, espero lo disfrute señorita ime.");
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
