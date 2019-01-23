import {
  MAIN_FETCH_START,
  MAIN_FETCH_SUCCESS,
  MAIN_FETCH_FAIL
} from "../Actions/Types";

import { AlbumCategoryResult, Album } from "../Models/AlbumCategoryResult";
import { MAIN_ALBUM_SELECT } from "../Actions/index";

interface InitialState {
  data: AlbumCategoryResult[];
  loading: false;
  error: "";
  selectedAlbum: Album;
}

const initialAlbum: Album = {
  id: 0,
  title: "...select album",
  artist: "",
  url: ""
};

const initialState: InitialState = {
  data: [],
  loading: false,
  error: "",
  selectedAlbum: initialAlbum
};

export default (state: InitialState = initialState, action) => {
  switch (action.type) {
    case MAIN_FETCH_START:
      return {
        ...state,
        loading: true,
        error: "",
        data: [],
        selectedAlbum: initialAlbum
      };
    case MAIN_FETCH_SUCCESS:
      return {
        ...state,
        ...initialState,
        data: action.payload,
        selectedAlbum: initialAlbum
      };
    case MAIN_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: "Error occurred!",
        selectedAlbum: initialAlbum,
        data: []
      };
    case MAIN_ALBUM_SELECT:
      return { ...state, selectedAlbum: action.payload };
    default:
      return state;
  }
};
