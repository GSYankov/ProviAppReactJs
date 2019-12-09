const postService = {
    obtainCsrf: function (url) {
        let hostAddress = 'http://localhost:8000';
        return fetch(`${hostAddress}${url}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
            credentials: 'include'
        });
    },
    loadAwsHome: function (app) {
        let hostAddress = 'http://localhost:8000'
        return fetch(`${hostAddress}/api/aws/application/?format=json${app == null ? '' : `&name=${app}`}`, {
            credentials: 'include'
        }).then((res) => res.json());
    },
    submitAwsApp: function (data) {
        debugger;
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        let hostAddress = 'http://localhost:8000'
        return fetch(`${hostAddress}/api/aws/application/`, {
            method: "POST",
            credentials: 'include'
        }).then((res) => res.json());
    }
};

export default postService;