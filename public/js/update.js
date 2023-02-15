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

const collectNewData = () => {
    for (let i=0; i < pageInputs.length; i++) {

        let pageInputIndex = 0;

        let currentInput = `'#input${pageInputIndex.toString}'`;

        if ($(currentInput).val().trim() === '') {
            continue;
        }

        let linkObject = {
            url: $(currentInput).val().trim(),
            type: $(currentInput).data('type'),
            //cant do this here: username: req.session.username,
        };
        linkData.push(linkObject);
        console.log(linkData);

        pageInputIndex++;
    }
};

// $('#addlink').click(() => {

// })
