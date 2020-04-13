import React, { FC, useState } from 'react';
import { Alert, Button } from 'reactstrap';

import { InputGroup } from '../../../views/shared';
import { defaultData, Props } from './types';

const JsSettings: FC<Props> = ({ data = defaultData, setData }) => {
  const [input, setInput] = useState(data.input);
  const handleSave = () => setData({ input });

  return (
    <div className="JsSettings">
      <Alert color="warning">
        Warning: this functionality is intended for advanced users. Custom
        scripts may break at any time. The snippet will run once after the
        dashboard has loaded. Be careful of persisting event listeners when
        editing the snippet.
      </Alert>

      <InputGroup
        rows={3}
        value={input}
        type="textarea"
        label="JavaScript Snippet"
        style={{ fontFamily: 'monospace' }}
        onChange={event => setInput(event.target.value)}
      />

      <Button onClick={handleSave}>Apply</Button>
    </div>
  );
};

export default JsSettings;
