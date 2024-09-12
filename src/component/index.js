import { useData } from './utils';

const Component = () => {
  const { data } = useData();


  return (
    <div style={{ padding: 24 }}>
      <UI.Button type="primary">我是antd按钮</UI.Button>
      <UI.Input placeholder="输入名称" />
    </div>
  );
};


export default Component;
