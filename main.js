
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener('click', function(){
        let id = box.id;
        if (id == 'eren') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'gon') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'kira') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'luffy') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'mikasa') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'levi') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'zoro') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'killua') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
        else if (id == 'gojo') {
            const audio = box.getElementsByTagName('audio')[0];
            audio.play()
        }
    })
})

let onii = document.querySelector('snap');
onii.addEventListener('click', function(){
    const audio = onii.getElementsByTagName('audio')[0];
            audio.play()
})
