import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
// import {Buoi3} from './src/component/Buoi3/index'
// import {Buoi4} from './src/component/Buoi4/index'
// import Touched from './src/component/Buoi5/Touched'
// import RenderWithState from './src/component/Buoi5/RenderWithState'
// import RenderIcon from './src/component/Buoi5/RenderIcon'
// import BtEmoji from './src/component/Buoi6/BtEmoji'
// import RenderWithMap from './src/component/Buoi6/RenderWithMap'
//import BaiTapRenderWithMap from './src/component/Buoi6/BaiTapRenderWithMap'
import GameScrollView from './src/component/Buoi6/GameScrollView'
import BaiTapScrollView from './src/component/Buoi6/BaiTapScrollView'
import BaiTapBuoi6 from './src/component/Buoi6/BaiTapBuoi6'
const App=()=>{
  return <BaiTapBuoi6/>;
    // <View style={style.container}>
    //   <View style={style.box1}>
    //     <View style={[style.item,style.item1]}></View>
    //     <View style={style.item}></View>
    //   </View>
    //   <View style={style.box2}>
    //     <View style={[style.row,style.row1]}>
    //       <View style={style.itemvuong}></View>
    //       <View style={style.itemvuong}></View>
    //     </View>
    //     <View style={style.row}>
    //     <View style={style.itemvuong}></View>
    //     <View style={style.itemvuong}></View>
    //     </View>
    //   </View>
    // </View>
  
}

const style = StyleSheet.create({
  container:{
    flex:1
  },
  box1:{
    flex:1,
    backgroundColor:'#bfb',
    marginBottom:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    padding:20
  },
box2:{
  flex:1,
  backgroundColor:'#b3b3ff',
  borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:20
},
item:{
  backgroundColor:'#ffcc00',
  flex:1,
  borderRadius:20,
  
},
item1:{
  marginBottom:70
},
itemvuong:{
  backgroundColor:'blue',
  width:150,
  height:150,
  borderRadius:20
},
row:{
  flexDirection:'row',
  justifyContent:'space-around',
},
row1:{
  marginBottom:20
}
});










// const App=()=>{
//   return(
//     <View style={styles.container}>
//         <View style={styles.items1}>
//           <Text style={styles.text}>Purple: #C9C9FF</Text>
//         </View>
//         <View style={styles.items2}>
//           <Text style={styles.text}>Blue: #3D85C6</Text>
//         </View>
//         <View style={styles.items3}>
//           <Text style={styles.text}>Green: #96CC96</Text>
//         </View>
//         <View style={styles.items4}>
//           <Text style={styles.text}>Green: #96CC96</Text>
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
    
//   },
//   text:{
//     justifyContent:'center',
//     alignSelf:'center',
//   },
//   items1:{
//     flex:1,
//     backgroundColor:'#C9C9FF',
//     margin:'5%',
//     borderRadius:15,
//     justifyContent:'center'
//   },
//   items2:{
//     flex:1,
//     backgroundColor:'#3D85C6',
//     marginBottom:'5%',
//     marginLeft:'5%',
//     marginRight:'5%',
//     borderRadius:15,
//     justifyContent:'center'
//   },
//   items3:{
//     flex:1,
//     backgroundColor:'#96CC96',
//     marginLeft:'5%',
//     marginRight:'5%',
//     borderRadius:15,
//     justifyContent:'center'
//   },
//   items4:{
//     flex:1,
//     backgroundColor:'#F4B940',
//     margin:'5%',
//     borderRadius:15,
//     justifyContent:'center'
//   }
// });





// const App=()=>{
//   return(
//     <View style={styles.container}>
//       <Text>Demo Style</Text>
//       <View style={styles.box}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,justifyContent:'center',alignItems:'center'
//   },
//   box:{
//     height:200,
//     width:200,
//     backgroundColor:'#bfb',
//   }
// });




// class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <View style={{flex:2,backgroundColor:'red'}}></View>
//         <View style={{flex:1,backgroundColor:'blue'}}></View>
//       </View>
//       );
//   }
// }

export default App;