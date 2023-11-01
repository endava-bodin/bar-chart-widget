import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, BarSeries, LineSeries } from '@syncfusion/ej2-react-charts';
import { dataSegmented } from './data/datasource';
import './App.css';

function App() {

    const legendClickHandler = (props) => {
      console.log("**************************");
      console.log(props);
      console.log("**************************");
    }

    // const selectBarHandler = (props) => {
    //   console.log("^^^^^^^^^^^^^^^^^^^^^");
    //   console.log(props);
    //   console.log("^^^^^^^^^^^^^^^^^^^^^");
    // }

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
          padding: 10,
          shapePadding: 10,
          visible: true,
          width: '100',
          height: '200',
          alignment: 'Near',
          textWrap: 'Wrap',
          maximumLabelWidth: 100,
        }}
        tooltip={{enable: true}}
        chartArea={{ border: { width: 0 } }}
        width='100%'
        height='100%'
        legendClick={legendClickHandler}
        // selectionComplete={selectBarHandler}
      >
        <Inject services={[BarSeries, Category, Legend, DataLabel, Tooltip]}/>
        <SeriesCollectionDirective>
          <SeriesDirective
            type='Bar'
            dataSource={dataSegmented[0]}
            yName='amount'
            xName='position'
            name={dataSegmented[0][0].position}
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            // columnWidthInPixel={14}
            marker={{
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            }}
             columnWidth={1}
          ></SeriesDirective>
          <SeriesDirective
            type='Bar'
            dataSource={dataSegmented[1]}
            yName='amount'
            xName='position'
            name={dataSegmented[1][0].position}
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            // columnWidthInPixel={14}
            marker={{
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            }}
             columnWidth={1}
          ></SeriesDirective>
          <SeriesDirective
            type='Bar'
            dataSource={dataSegmented[2]}
            yName='amount'
            xName='position'
            name={dataSegmented[2][0].position}
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            // columnWidthInPixel={14}
            marker={{
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            }}
             columnWidth={1}
          ></SeriesDirective>
          <SeriesDirective
            type='Bar'
            dataSource={dataSegmented[3]}
            yName='amount'
            xName='position'
            name={dataSegmented[3][0].position}
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            // columnWidthInPixel={14}
            marker={{
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            }}
             columnWidth={1}
          ></SeriesDirective>
          <SeriesDirective
            type='Bar'
            dataSource={dataSegmented[4]}
            yName='amount'
            xName='position'
            name={dataSegmented[4][0].position}
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            // columnWidthInPixel={14}
            marker={{
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            }}
             columnWidth={1}
          ></SeriesDirective>
          <SeriesDirective
            type='Bar'
            dataSource={dataSegmented[5]}
            yName='amount'
            xName='position'
            name={dataSegmented[5][0].position}
            pointColorMapping= 'point'
            legendShape='Circle'
            columnSpacing={0.02}
            // columnWidthInPixel={14}
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