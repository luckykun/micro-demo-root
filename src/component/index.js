import React from 'react';

const App = () => {
  const result = mi.isNumber(10);
  console.log('result', result);

  return (
    <div style={{ padding: 24 }}>
      <UI.Button type="primary">我是antd按钮</UI.Button>
      <UI.Loading text="loading" />
    </div>
  );
};


export default App;
