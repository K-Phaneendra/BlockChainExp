import { API_GET } from './APIMethods';
import { ActionType } from './actionType';
import { setLoading, resetLoading } from './LoadingActions';
import { QRCodeURL } from './actionURL';

// export const checkRedux = bool => dispatch =>
//   dispatch({ type: ActionType.TEST_ACTIONTYPE, payload: bool });

export const validateQRName = name => {
  const url = `${QRCodeURL.VALIDATE_QRNAME}/${name}`;
  return async dispatch => {
    try {
      dispatch(setLoading());
      const result = await API_GET(url);
      console.log('result', result);
      // a spinner will be stopped in the component as we have received data from API
      dispatch(resetLoading());
      return {
        error: false,
        message: result.payload.message,
        canCreate: result.payload.nameExists !== true
      };
    } catch (error) {
      // dispatch({ type: ErrorType.ERROR_LOG, message: error.message });
      return { error: true, message: error.message };
    }
  };
};
