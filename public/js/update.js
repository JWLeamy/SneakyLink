var pageInputs = 6;

var linkData = [];

const loadData = async () => {
    await fetch('/api/links', {
        method: 'GET',
        header: { 'Content-type': 'application/json' },
    })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let input = $(`*[data-type="${data[i].type}"]`);
                console.log('update page input is' + input);
                input.val(data[i].url);
            }
        });
};

loadData();

const twitter = $('#twitter')
const instagram = $('#instagram')
const tiktok = $('#tiktok')
const youtube = $('#youtube')
const facebook = $('#facebook')
const snapchat = $('#snapchat')

var socialink = [twitter, instagram, tiktok, youtube, facebook, snapchat]

$('#savelinks').click((event) => {
    var linkData = [];

    for (let i=0; i < socialink.length; i++) {

        var newUsername = socialink[i].val()
            
            if (newUsername !== "") {
                    let linkObject = {

                    url: newUsername,
                    type: socialink[i].attr('id'),
                };
            
                linkData.push(linkObject);
        }
    }

    storeNewLinks(linkData);

})

const storeNewLinks = async (userInfo) => {
    console.log('register fetch');
    const response = await fetch('/api/links/savelink', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(userInfo)
    if (response.ok) {
        window.alert('your links have been saved!')
    } else {
        console.log('error')
        //right now we are getting an error. 
    }
};






/* const collectNewData = () => {
    for (let i=0; i < pageInputs.length; i++) {

        let pageInputIndex = 0;

        let currentInput = `'#input${pageInputIndex.toString}'`;

        if ($(currentInput).val().trim() ==! '') {
            continue;
        }

        let linkObject = {
            username: $(currentInput).val().trim(),
            type: $(currentInput).data('type'),
            //cant do this here: username: req.session.username,
        };
        linkData.push(linkObject);
        console.log(linkData);

        pageInputIndex++;
    }
}; */



