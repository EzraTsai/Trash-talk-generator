//define generateTrashtalk function
function generateTrashtalk(occupation) {
    // define things user might want
    const target = {
        engineer: '工程師',
        designer: '設計師',
        entrepreneur: '創業家'
    }
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']
    //比對取值是否相同
    let trashtalk = ''
        if (occupation) {
            const taskIndex = Math.floor(Math.random() * task[occupation].length)
            const phraseIndex = Math.floor(Math.random() * phrase.length)
            trashtalk += `身為一個${target[occupation]}，${task[occupation][taskIndex]}，${phrase[phraseIndex]}吧!`
        }
    // return error notice if collection is empty
    if (trashtalk.length === 0) {
        return 'Please select a valid character.'
    }
    // return the generated trashtalk
    return trashtalk
}
// export generatePassword function for other files to use
module.exports = generateTrashtalk