const postService = {
    obtainCsrf: function (url) {
        let hostAddress = 'http://localhost:8000';
        return fetch(`${hostAddress}${url}`, {
            credentials: 'include'
        }).then((res) => res.text());
    },
    loadAwsHome: function (app) {
        let hostAddress = 'http://localhost:8000'
        return fetch(`${hostAddress}/api/aws/application/?format=json${app == null ? '' : `&name=${app}`}`, {
            credentials: 'include'
        }).then((res) => res.json());
    },
    submitAwsApp: function (data, csrf) {

        const formData = new FormData();
        for ( var key in data ) {
            formData.append(key, data[key]);
        }

        let hostAddress = 'http://localhost:8000'
        return fetch(`${hostAddress}/api/aws/application/`, {
            method: "POST",
            headers: {
                'X-CSRFToken': `${csrf}`
              },
            credentials: 'include',
            body: formData
        }).then((res) => res.json());
    }
};

export default postService;