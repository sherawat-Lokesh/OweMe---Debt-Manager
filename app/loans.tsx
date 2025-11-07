import { Text, View } from "react-native";
import { LoansStyle } from "@/styles/loansStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Loans() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View
          style={{
            backgroundColor: "green",
            position: "absolute",
            right: 20,
            bottom: 100,
            zIndex: 25,
            borderRadius: "50%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="plus" size={28} color="white" />
        </View>
      <View style={{}}>

        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  );
}
