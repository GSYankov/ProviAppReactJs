const userService = {
    login: function (data, csrf) {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        return fetch(`http://localhost:8000/account/login`, {
            body: formData,
            method: 'POST',
            headers: {
              'X-CSRFToken': `${csrf}`
            },
            credentials: 'include'
        }).then(res => res.text());
    },
    logout: function () {
        return fetch(`http://localhost:8000/account/logout`, {
          method: 'POST',
          credentials: 'include'
        }).then(res => res.text());
      }
}

export default userService;