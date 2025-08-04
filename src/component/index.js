import { useData } from './utils';

const Component = () => {
  const { data } = useData();
  console.log('data', data);

  return (
    <div>
      <div style={{ fontSize: 24, textAlign: 'center' }}>
        Hello, World!
      </div>
      <div style={{ padding: 24, display: 'flex', gap: '8px' }}>
        <UI.Select style={{ width: 240 }} options={data.data} placeholder="请选择数据" />
        <UI.Input placeholder="输入名称" />
        <UI.Button type="primary">搜索</UI.Button>
      </div>
    </div>
  );
};


export default Component;
