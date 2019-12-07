const postService = {
    loadAwsHome: function (app) {
        let hostAddress = 'http://localhost:8000'
        return fetch(`${hostAddress}/api/aws/application/?format=json${app == null ? '' : `&name=${app}`}`, {
            credentials: 'include'
        }).then((res) => res.json());
    }
};

export default postService;