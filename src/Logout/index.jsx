import React from 'react';

function Logout({ logout, history, cookies }) {
  logout(cookies['csrftoken'],history);
  return null;
}

export default Logout;