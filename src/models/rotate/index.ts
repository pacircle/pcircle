import {addNewAddress, updateNewAddress} from "./addNewAddress";
import {queryNowAddress,updateNowAddress} from "./querynowaddress";

interface IdProps {
  $oid: String
}
export interface AddressProps {
  _id: IdProps,
  address: String
}
export interface RotateState {
  addressProp: AddressProps
}

export const PREFIX = 'rotate'

export const initState: RotateState = {
  addressProp: null
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
    addNewAddress: addNewAddress,
    queryNowAddress: queryNowAddress
  },
  reducers: {
    updateNewAddress: updateNewAddress,
    updateNowAddress: updateNowAddress
  }
}
