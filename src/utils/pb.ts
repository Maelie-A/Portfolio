mport PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";
var path='';
if(import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'    //localhost = machine de dev
else path = 'http://localhost:<port_pb_vps>'   //localhost = machine de déploiement
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;