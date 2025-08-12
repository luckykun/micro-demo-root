
import { createHashHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';

const history = createHashHistory();

const items = [
  { key: '/overview', label: '总览页', component: () => 'overview' },
  { key: '/assetManage', label: '资产管理', component: () => 'assetManage' },
  { key: '/users', label: '人员管理', component: () => 'users' },
];


const Component = () => {
  const [activeKey, setActiveKey] = React.useState(history.location.pathname);
  const onClick = (d) => {
    history.push(d.key);
  };

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      setActiveKey(history.location.pathname);
    });
    return () => unlisten(); // 组件卸载时执行
  }, []);


  const routeConfig = items.map(({ key, component: Comp }) => (
    <Route key={key} path={key} component={Comp} />
  ));


  return (
    <div className="micro-app-layout">
      <div className="app-menu">
        <UI.Menu
          onClick={onClick}
          selectedKeys={[activeKey]}
          mode="inline"
          items={items}
        />
      </div>
      <div className="app-content">
        <Router history={history}>
          <Switch>
            {routeConfig}
            <Route path="*"><Redirect to={items[0]?.key} /></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};


export default Component;
