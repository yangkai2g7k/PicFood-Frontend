/**
 * Created by kai on 28/02/2018.
 */

import initialState from "./initialState";

export default (state = initialState, action) => {
    switch (action.type){
        case "CHANGE_TAB":
            return {...state,currentTab:action.data};
        case "CHANGE_SORTING_OPTIONS":
            return {...state, searchOptions: action.data};
        case "UPDATE_TOKEN":
            //console.log(action.data);
            return {...state,token:action.data};
        case "GET_LOCATION":
            return {...state,location:action.data};
        case "GET_SEARCHED_RESTAURANTS":
            return {...state, searchedRestaurants:action.data};
        case "GET_SEARCHED_DISHES":
            return {...state, searchedDishes:action.data};
        case "GET_POSTS_OF_DISH":
            return {...state, postsOfDish:action.data};
        case "GET_RESTAURANT_INFO":
            return {...state, restaurant:action.data};
        case "GET_POST_INFO":
            return {...state, post:action.data};
        case "GET_FOLLOWERS":
            return {...state, followers: action.data};
        case "GET_FOLLOWINGS":
            return {...state, followings: action.data};
        default:
            return state;
    }
}