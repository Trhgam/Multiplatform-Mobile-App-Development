import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <WelcomeScreen /> */}
      <MenuItems />
      <Footer />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "space-between",
  },
});


// Cơ chế hoạt động của SafeAreaView:
// Khi ứng dụng run in iOS, React Native sẽ ánh xạ thẻ SafeAreaView 
// sang thành một đối tượng Native của iOS là RCTSafeAreaView.

// Đối tượng này có khả năng tự kiểm tra tọa độ thực tế của chính nó so với khung màn hình điện thoại (Window Coordinates),
//  bất kể nó là con, cháu, hay chắt của thẻ nào:

// Thẻ View ở App.js có flex: 1 nên nó trải dài từ đỉnh (y = 0) tới đáy màn hình.
// Header là phần tử đầu tiên nằm bên trong View, nên tọa độ của Header bắt đầu đúng từ mép trên cùng (y = 0).

// Khi SafeAreaView của Header được vẽ ra, hệ điều hành iOS sẽ kiểm tra:
// View này đang chạm vào mép trên cùng của máy, mà chỗ này đang bị vướng Tai thỏ / Dynamic Island cao 47px
// ➔ iOS sẽ tự động chèn paddingTop: 47 vào bên trong SafeAreaView của Header.

// Tóm lại: Hệ thống không uan tâm nó bị bọc bởi bao nhiêu thẻ View, 
// miễn là vị trí của nó trên màn hình bị chạm vào vùng "nguy hiểm" (tai thỏ hoặc thanh gạch đáy) 
// thì SafeAreaView sẽ tự động kích hoạt đệm an toàn.


// 2. Nên đem SafeAreaView xuống bọc cho Footer 

// Trên các dòng iPhone đời mới (từ iPhone X đến iPhone 16), ở đáy màn hình luôn có một thanh gạch ngang màu đen/trắng (Home Indicator) để người dùng vuốt về màn hình chính.

// Nếu Footer KHÔNG dùng SafeAreaView:
// Chữ "All rights reserved by Little Lemon, 2022" sẽ bị thanh gạch ngang đó đè thẳng lên chữ, trông rất xấu và khó chịu.
// Nếu Footer CÓ dùng SafeAreaView:
// iOS sẽ phát hiện: "View này đang chạm mép đáy màn hình, vướng thanh gạch ngang cao 34px."
// SafeAreaView sẽ tự động thêm paddingBottom: 34 để đẩy dòng chữ nhích lên trên một đoạn an toàn, không bị thanh gạch ngang che mất!