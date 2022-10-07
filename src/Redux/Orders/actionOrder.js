import { async } from "@firebase/util"
import { createOrderDocument, getFirebaseOrders } from "../../Firebase/fireBaseUtils"

export const CREATE_ORDER="CREATE_ORDER"
export const CREATED_ORDER_FAILED="CREATE_ORDER_FAILED"
export const CREATE_ORDER_START = "CREATE_ORDER_START"
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED"
export const RECIEVE_ORDERS="RECIEVE_ORDERS"
export const RECIEVE_ORDERS_FAILED="RECIEVE_ORDERS_FAILED"
export const UPDATE_LOCAL_ORDERS="UPDATE_LOCAL_ORDERS"
export const getOrder=(userID)=>{
    
        return async dispatch =>{
            const orders = await getFirebaseOrders(userID)
            dispatch({
                type:RECIEVE_ORDERS,
                payload:orders,
            })
        }
    }
    export const createOrder = order => {
        return async dispatch => {
          try {
            await createOrderDocument(order);
            dispatch(getOrder(order.user));

          } catch (error) {
            dispatch({
              type: RECIEVE_ORDERS_FAILED,
              payload: error,
            });
            return false;
          }
        };
      };