

import axios from 'axios';

async function requestUser() {
  return axios.get("./user.json").then(resp => resp.data);
}

export default requestUser;