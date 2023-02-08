/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useRef} from 'react';
import {View, Dimensions} from 'react-native';
import Draggable from 'react-native-draggable';

const {width, height} = Dimensions.get('window');
export default function App() {
  const [drag01, setDrag01] = React.useState({x: 100, y: 200});
  return (
    <View>
      <Draggable
        x={width / 2 - 50}
        y={height / 2 - 100}
        renderColor="red"
        renderText={`X:${drag01?.x?.toFixed(0)} Y:${drag01?.y?.toFixed(0)}`}
        renderSize={100}
        minX={0}
        minY={0}
        maxX={width}
        maxY={height}
        onDrag={e => {
          console.log('Touches:', e.nativeEvent.touches);
        }}
        onDragRelease={e => {
          setDrag01({
            x: e.nativeEvent.pageX - e.nativeEvent.locationX,
            y: e.nativeEvent.pageY - e.nativeEvent.locationY,
          });
        }}
      />
    </View>
  );
}
