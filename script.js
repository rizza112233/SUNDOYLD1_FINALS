
function showContent(sectionId) {
    
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });

    
    document.getElementById(sectionId).style.display = 'block';
}


function toggleContent(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}