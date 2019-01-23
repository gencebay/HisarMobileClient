import {
  REPORTS_FETCH_START,
  REPORTS_FETCH_SUCCESS,
  REPORTS_FETCH_FAIL
} from "../Actions/Types";

interface InitialState {
  data: {};
  loading: false;
  error: "";
}

const initialState: InitialState = <InitialState>{};

export default (state: InitialState = initialState, action) => {
  switch (action.type) {
    case REPORTS_FETCH_START:
      return { ...state, loading: true, error: "" };
    case REPORTS_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case REPORTS_FETCH_FAIL:
      return { ...state, loading: false, error: "Error occurred!" };
    default:
      return state;
  }
};
