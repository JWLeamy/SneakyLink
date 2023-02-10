//js to create a page via a fetch call

let userLink;
let userId;
let userDesc;

const pageSave = async (linkInfo) => {
    const page = await fetch('/api/pages', {
        method: 'POST',
        'Content-type': 'application/json',
        body: linkInfo,
    })
        .then(() => {
            console.log('succesfully created a page!');
        })
        .catch((err) => {
            console.log(err);
        });
};

const pageInfo = () => {
    const info = {
        url: userLink, //could potentially be turned into an array in order to store multiple urls
        desc: userDesc,
    };
    pageSave(JSON.stringify(info));
};
