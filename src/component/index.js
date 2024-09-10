import React from 'react';

function getb() {
  console.log(2);
}


const Component = () => {
  const result = mi.isNumber(10);
  console.log('result', result);

  const geta = () => {
    console.log(1);
    getb(1);
  };


  return (
    <div style={{ padding: 24 }}>
      <UI.Button type="primary">我是antd按钮</UI.Button>
      <UI.Input placeholder="输入名称" />
    </div>
  );
};


export default Component;
