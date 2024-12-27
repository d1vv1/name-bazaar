import { displayTextOnPage } from '../firebaseFunctions.js'

const map = {
    'sv1': "startupName",
    'sv2': "compName",
    'sv3': "domName",
    'sv4': "instName",
    'sv5': "newbName",
    'sv6': "uqName",
    'sv7': "nickName",
    'sv8': "bupName",
    'sv9': "petName",
    'sv10': "skName",
    'sv11': "sksLogo",
    'sv12': "skmComp",
    'sv13': "skmInst"
};

for (let i = 1; i < 15; i++) {
    if (document.title === `sv${i}`) {
        displayTextOnPage("data", "services", map[`sv${i}`], `sv${i}-file`)
            .then(() => console.log(`sv${i} data found`));
        displayTextOnPage("data", "services", "commonContact", `sv${i}-file`)
    }
}