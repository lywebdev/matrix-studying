const host = 'https://api.tenor.com/v1/search',
    apiKey = 'LIVDSRZULELA',
    limit = 16;

const $getResultBtn = $('#get-result'),
    $errorBox = $('#error-box'),
    $loadingBox = $('#loading-box'),
    $cards = $('#cards')
    $queryInput = $('#search_query');


const getUrl = query => `${host}?q=${query}&key=${apiKey}&limit=${limit}&random=1`;

const lockGetResultBtn = () => { $getResultBtn.prop('disabled', true); }

const unlockGetResultBtn = () => { $getResultBtn.prop('disabled', false); }

const togglePreloader = () => { $loadingBox.toggleClass('hidden'); }


const renderResults = dataObjectsArray => {
    let resultTemplate = ``;

    let getItemTemplate = dataObject => {
        let sourceUrl = dataObject.media[0].gif.url;
        if (sourceUrl === undefined) {
            sourceUrl = 'https://media1.tenor.com/m/51xvC35-fDEAAAAC/manhunt.gif';
        }

        return `<div class="card w-full mb-8" data-id="${dataObject.id}">
        <img src="${sourceUrl}" alt="${dataObject.contentDescription}" class="max-w-full max-h-full object-cover rounded-lg w-full">
    </div>`;
    }

    resultTemplate = dataObjectsArray.reduce((resultTemplate, currentDataObject) =>  resultTemplate + getItemTemplate(currentDataObject), resultTemplate);

    $cards.html(resultTemplate);
}

const renderError = errorText => {
    $errorBox.text(errorText);
    $errorBox.removeClass('hidden');
}


const getApiResponse = searchQuery => {
    $errorBox.addClass('hidden');
    $errorBox.empty();

    $.ajax({
        url: getUrl(searchQuery),
        type: 'GET',
        success: response => {
            renderResults(response.results);
        },
        beforeSend: () => {
            lockGetResultBtn();
            togglePreloader();
        },
        error: errorResponse => {
            renderError(errorResponse.responseJSON.error);
        },
        complete: (response) => {
            unlockGetResultBtn();
            togglePreloader();
        }
    });
}


$getResultBtn.bind('click', (e) => {
    e.preventDefault();

    let searchQuery = $queryInput.val().trim();

    if (searchQuery !== '') {
        getApiResponse(searchQuery);
    }
    else {
        renderError('Enter search query');
    }
});

