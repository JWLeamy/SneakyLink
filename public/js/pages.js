//js to create a page via a fetch call

let userId;
let pName = $('#pageName').val();
let pDesc = $('#pageDesc').val();
let form = $('#pageForm');

$('#createPage').click((e) => {
    e.preventDefault();
    console.log('creating a page');
    // pageInfo(pName, pDesc);
    pageSave();
});
const pageInfo = (title, desc) => {
    // const info = {
    //     title,
    //     desc,
    // };
    // pName = '';
    // pageSave(JSON.stringify(info));
};
const pageSave = async (pageInfo) => {
    console.log(pageInfo);
    const page = await fetch('/api/pages', {
        method: 'POST',
        'Content-type': 'application/json',
        body: pageInfo,
    });
    addPage();
};

const addPage = async () => {
    const newPage = await fetch('api/pages', {
        method: 'GET',
        header: { 'Content-type': 'application/json' },
    });
    console.log(JSON.stringify(newPage));
    const insert = `<div id="page-${newPage.id}" data-id = ${newPage.id}> 
        <h2>{${newPage.title}}</h2>
        <p>{${newPage.desc}}</p>
        <div id="p-${newPage.id}-link></div>
        </div>`;
    console.log(newPage);
    $(insert).appendTo('.pages');
};
