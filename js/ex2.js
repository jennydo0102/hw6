//Display text for 400 level courses
const displayText400 = () => {
    const ulElements = document.getElementsByClassName('iscourses');

    for (let i = 0; i < ulElements.length; i++) {
        const lis = ulElements[i].getElementsByTagName('li');
        for (let j = 0; j < lis.length; j++) {
            if (lis[j].classList.contains('400level')) {
                console.log(lis[j].textContent);
            }
        }
    }
}

displayText400();