import io from "socket.io-client";
import api from './utils';

const socket = io.connect(`${api.url}`);

export default socket;