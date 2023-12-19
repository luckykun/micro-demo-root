import React from 'react';
import { Card, Breadcrumb } from 'antd';
import DragContainer from './DragContainer';

const App = () => {
  const [state, setstate] = React.useState(1);

  return (
    <div style={{ padding: 24 }}>
      <Breadcrumb style={{ marginBottom: 24 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
      </Breadcrumb>


      <DragContainer
        contentList={[
          <Card>111</Card>,
          <Card>222</Card>,
          <Card>333</Card>,
        ]}
      />
    </div>
  );
};


export default App;
