/**
 * Created by kai on 28/02/2018.
 */
export default {
  timelines: [],
  user: {},
  userTimeline: [],
  otherUserTimeline: [],
  restaurant: {},
  searchedRestaurants: [],
  searchedDishes: [],
  login: {
    username: "",
    password: "",
    isLogin: false,
    token: ""
  },
  followers: [],
  followings: [],
  users: [],
  token: "",
  location: {lat: 1, lon: 1},
  location_akw: {lat: 41.313087041, lon: -72.9248500},
  post: {},
  sort_criteria: {distance: "10000", sort_by: "distance"},
  cachedRestaurants: {},
};