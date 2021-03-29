import React from 'react';

import sty from './app.module.scss';

const App: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={sty.app}>
      <div className={sty.logo}>ZERO</div>
      <div>Hello {title}</div>
      <div className={sty.docLink}>↓doc↓</div>
      <a href="https://github.com/Iixianjie/zero">https://github.com/Iixianjie/zero</a>
    </div>
  );
};

export default App;
