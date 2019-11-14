//AIzaSyCl6-YeQ5vD81f_5RbgEAn_M57UVPtsjaA

import { User } from "./components/User";
import { Company } from "./components/Company";
import { MyMap } from "./components/Map";

const map = new MyMap("map");

map.addMarker(new User());
map.addMarker(new Company());
