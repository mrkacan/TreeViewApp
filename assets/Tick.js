import React from "react";
import Svg, {G, Path} from 'react-native-svg';

function TickIcon({
                      width = 20,
                      height = 20,
    color
                  }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            width={width}
            height={height}
            fill={color}
        >
            <Path d="M971.9 238.6L359.8 850.7c-59.4 59.4-130.8-67.2-94.7-10.9L27.2 601.9c-22.9-22.9-22.9-60 0-83 22.9-22.9 60-22.9 82.9 0l203.3 203.3 571.1-571.1c24.2-24.2 63.3-24.2 87.4 0 24.1 24.2 24.1 63.4 0 87.5z" />
        </Svg>
    );
}

export default TickIcon;
