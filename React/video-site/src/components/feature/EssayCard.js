import React from 'react';
import { Card, Flex } from 'antd';

const App = () => (
  <Card>
    <Flex justify="space-between">
      <div style={{width:'20%'}}>
        <img 
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          style={{ width:'100%', aspectRatio:'16/9' }}>
        </img>
      </div>
      <Flex vertical justify="start" style={{width:'80%'}}>
        <span>专栏标题</span>
        <Flex justify="start" gap={'middle'}>
          <span>up名</span>
          <span>查看量</span>
          <span>评论数</span>
        </Flex>
        <div>简介</div>
      </Flex>
    </Flex>
  </Card>
);
export default App;