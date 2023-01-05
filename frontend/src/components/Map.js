import React from "react";
import Plot from 'react-plotly.js';

{/* <Map latitude={緯度} longitude={経度} hotel_name="琵琶湖マリオットホテル" /> */ }
class Map extends React.Component {
    render() {
        return (
            <Plot
                data={[
                    {
                        type: 'scattermapbox',
                        text: [this.props.hotel_name],
                        lat: [this.props.latitude],
                        lon: [this.props.longitude],
                        hovertemplate: '<b>%{text}</b><extra></extra>',
                        showlegend: false,
                        marker: {
                            size: 18,
                            color: 'red',
                        },
                    },
                ]}
                layout={{
                    mapbox: {
                        style: 'open-street-map',
                        center: {
                            lat: this.props.latitude,
                            lon: this.props.longitude
                        },
                        zoom: 5.5,
                    },
                    margin: { r: 0, t: 0, b: 0, l: 0 },
                }}
                useResizeHandler={true}
                style={{ width: 300, height: 300 }}
            />
        );
    }
}

export default Map;
