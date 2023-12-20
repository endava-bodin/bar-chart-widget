import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, BarSeries, LineSeries, Selection } from '@syncfusion/ej2-react-charts';
import { data } from './data/datasource';
import './App.css';

function App(props) {

    const legendClickHandler = (data) => {
      // console.log("**************************");
      // // console.log(props);
      // console.log(data);
      // console.log("**************************");
      // bodin change to see if token works
    }

    const selectBarHandler = (data) => {
      const publishAction = {
        channel: "bar_chart_selection",
        payload: {
          selected: data?.selectedDataValues[0]?.x,
        },
      };
      props?.config?.communicationService.publish(publishAction);
    }

    return (
      <ChartComponent
        primaryXAxis={{
          valueType: 'Category',
          majorGridLines: {
            width: 0,
          },
          visible: false,
        }}
        primaryYAxis={{
          majorGridLines: {
            width: 0,
          },
          visible: false,
        }}
        title='Position filled by'
        legendSettings={{
          mode: "Point",
          visible: true,
          width: '100px',
          height: '200px',
          alignment: 'Near',
          position: "Bottom",
          containerPadding: { top: 20 },
          textStyle: { size: "12px", color: "#3F4551" },
          reverse: true,
        }}
        tooltip={{enable: true}}
        chartArea={{ border: { width: 0 } }}
        width='100%'
        height='100%'
        legendClick={legendClickHandler}
        selectionMode="Point"
        selectionComplete={selectBarHandler}
      >
        <Inject services={[BarSeries, Category, Legend, DataLabel, Tooltip, Selection]}/>
        <SeriesCollectionDirective>
          <SeriesDirective
            type='Bar'
            dataSource={data}
            yName='amount'
            xName='position'
            name="Position filled by"
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            marker={{
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            }}
             columnWidth={1}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
};

export default App;