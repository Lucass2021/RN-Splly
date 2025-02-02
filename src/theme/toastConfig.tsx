import {BaseToast, ToastProps} from "react-native-toast-message";
import {Colors} from "./colors";

// #REFERENCE
// https://github.com/calintamas/react-native-toast-message/blob/HEAD/docs/custom-layouts.md

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{borderRadius: 15, borderLeftColor: Colors.confirm}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: "600",
      }}
    />
  ),
};
