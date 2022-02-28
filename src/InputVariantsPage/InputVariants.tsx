import * as React from 'react';
import { InputVariantsForm } from './components';

export const InputVariants = (): JSX.Element =>
{
  return (
    <div className="panel narrow-panel">
      <div className="panel-header">
        <div className="header-left">Input Variants Demo</div>
      </div>
      <div className="panel-body">
        <InputVariantsForm />
      </div>
    </div>
  )
}