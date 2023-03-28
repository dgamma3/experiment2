import {View, Text} from 'react-native';
import React, {useState} from 'react';

export const OverlayContext = React.createContext(true);

const OverlayProvider = ({children}) => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const someFunction = () => {

  }

  return (
    <OverlayContext.Provider value={{setOverlayVisible}}>
      <View style={overlayVisible ? overlayStyle : defaultStyle}>
      </View>
      {children}	
    </OverlayContext.Provider>
  );
};

const defaultStyle = {
  display: 'none',
};

const overlayStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  opacity: 0.8,
  zIndex: 100,
  position: 'absolute',
};
export default OverlayProvider;
