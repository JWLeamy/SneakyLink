//js to create a link via a fetch call

let userId;
let lName = $('#linkName').val();
let lURL = $('#linkUrl').val();
let form = $('#linkForm');

$('#createLink').click((e) => {
    e.preventDefault();
    console.log('creating a link');
    linkSave();
});
const linkSave = async (linkInfo) => {
    const info = {
        type,
        url,
    };
    const link = await fetch('/api/links', {
        method: 'POST',
        'Content-type': 'application/json',
        body: JSON.stringify(info),
    });
    addLink();
};
//used for getting links
const addLink = async () => {
    const newLink = await fetch('api/links', {
        method: 'GET',
        header: { 'Content-type': 'application/json' },
    });
};
