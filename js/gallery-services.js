'use strict';

var gProjs = [
    {
        'id': 'pacman',
        'name': 'Pacman',
        'title': 'eat them all',
        'desc': 'ipsum lorem lorem lorem lorem ipsum',
        'url': 'projs/pacman',
        'publishedAt': '20/01/2020',
        'labels': [],
        'version': 'alpha',
        'finaVersionDate': 'unknown'
    },
    {
        'id': 'minesweeper',
        'name': 'Minesweeper',
        'title': 'Dont step on the mines',
        'desc': 'lorem ipsum lorem ipsum lorem ipsum',
        'url': 'projs/minesweeper',
        'publishedAt': '22/01/2020',
        'labels': [],
        'version': 'alpha',
        'finaVersionDate': 'unknown'
    },
    {
        'id': 'inpicture',
        'name': 'InPicture',
        'title': 'What happened in the picture',
        'desc': 'ipsum lorem lorem lorem lorem ipsum',
        'url': 'projs/inpicture',
        'publishedAt': '17/01/2020',
        'labels': [],
        'version': 'Beta',
        'finaVersionDate': 'unknown'
    },
    {
        'id': 'touchnums',
        'name': 'TouchNums',
        'title': 'Check how fast can you click',
        'desc': 'lorem ipsum lorem ipsum lorem ipsum',
        'url': 'projs/touchnums',
        'publishedAt': '18/01/2020',
        'labels': [],
        'version': 'Beta',
        'finaVersionDate': 'unknown'
    }
];

function getProjects(){
    return gProjs;
}

function getProject(projectId){
    return gProjs.find(project => projectId === project.id);
}

