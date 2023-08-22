import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function App() {

  const [darktheme, setdarktheme] = useState(false);
  const [result,setResult]=useState('');


  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    dark3 : '#35FBD6',
    dark4: '#EB6363',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
    light3: '#F6F4EB',
    light4: '#706C61',
    color: '#394867',
    color2:'#E9B384',
    color3: '#DBDFEA'
  }

  const calculate=(tittle)=>{
if(tittle==='C'){
  setResult('');
}
else if(tittle ==='DL'){
  setResult(result.substring(0,result.length-1))
}
else if(tittle === '='){
const ans=Number(eval(result).toFixed(3)).toString();
setResult(ans)
}
else{
  setResult(result + tittle)
}
  }
 
  const getColor = (light, dark) => (darktheme ? dark : light);
const getbackground = (light, dark) => (darktheme ? dark : light);



const Btn = ({ tittle, type ,width}) => {
  const buttonColors = getBtncolor(type);

  return (
    <TouchableOpacity
      onPress={() => { calculate(tittle) }}
      style={{
        padding: 8, borderRadius: 10, elevation: 2,
        backgroundColor: buttonColors.background,
        height: 65, width: width || 70, margin: 10, justifyContent: 'center', 
        alignItems: 'center',
      }}>
      <Text style={{
        fontSize: 30, color: buttonColors.color,
        textAlign: 'center',alignItems:'center',
        textAlignVertical: "center",
      }}>{tittle}</Text>
    </TouchableOpacity>
  )
}


  const getBtncolor=(type)=>{
    if(type==='top'){
      const color = getColor(colors.light, colors.dark3);
    const background = getbackground(colors.color, colors.dark);
    return {
      color,
      background
    };
     
    }else if(type==='right'){
      const color = getColor(colors.light, colors.dark4);
      const background = getbackground(colors.color2, colors.dark);
      return {
        color,
        background
      };


      
    }
    else{
      
      const color = getColor(colors.dark, colors.light);
      const background = getbackground(colors.light, colors.dark);
      return {
        color,
        background
      };

    }
  }
  return (
    <View style={{ height: '100%',
     width: "100%", 
    paddingVertical: 20, 
    backgroundColor: getColor(colors.color3,colors.dark) ,
    alignItems:'center',
   }}>

      <Switch value={darktheme} onValueChange={() => setdarktheme(!darktheme)}
        thumbColor={getColor(colors.dark,colors.light) }
        trackColor={{ true: colors.light2, false: colors.dark2 }} />

        <Text style={{fontSize:40 , 
         color: getColor(colors.dark,colors.light),
        width:'100%',
        textAlign:"right",
        paddingRight:20,
        marginTop:190,
        paddingBottom:20
        }}
          
          >{result}
          </Text>

          <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:"center",
        backgroundColor:getColor(colors.color3,colors.dark1),borderTopRightRadius:20,
        borderTopLeftRadius:20
        }}>
            <Btn tittle="C" type='top'/>
            <Btn tittle="DL" type='top'/>
            <Btn tittle="/" type='top'/>
            <Btn tittle="%" type='top'/>
            <Btn tittle="7" type='number'/>
            <Btn tittle="8" type='number'/>
            <Btn tittle="9" type='number'/>
            <Btn tittle="*" type='right'/>

            <Btn tittle="4" type='number'/>
            <Btn tittle="5" type='number'/>
            <Btn tittle="6" type='number'/>
            <Btn tittle="-" type='right'/>

            <Btn tittle="1" type='number'/>
            <Btn tittle="2" type='number'/>
            <Btn tittle="3" type='number'/>
            <Btn tittle="+" type='right'/>

            <Btn tittle="0" type='number'/>
            <Btn tittle="." type='number'/>
            
            <Btn tittle="=" type='right' width={160}/>
          </View>
    </View>
  );
}

