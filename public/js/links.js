//js for link creation

let userLink;
let page_id;
let user;

const saveLink = async (id = 1, link = 'test.com') => {
    const newLink = fetch('api/links', {
        method: 'POST',
        headers: { ContentType: 'application/json' },
        body: JSON.stringify({ page_id: id, url: link }),
    });
    if (newLink.ok) {
        console.log('new link created');
    }
};
