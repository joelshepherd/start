import React, { FC } from 'react';

import { Props, defaultData } from './types';
import { FormGroup, Label, CustomInput, Input } from 'reactstrap';
import InputGroup from '../../../views/shared/bootstrap/InputGroup';

const UnsplashSettings: FC<Props> = ({ data = defaultData, setData }) => (
  <div className="UnsplashSettings">
    <FormGroup>
      <Label>Show a new photo</Label>
      <CustomInput
        type="select"
        id="unsplashSelect"
        className="layer-0"
        value={data.timeout}
        onChange={event =>
          setData({ ...data, timeout: Number(event.target.value) })
        }
      >
        <option value="0">Every new tab</option>
        <option value="300">Every 5 minutes</option>
        <option value="900">Every 15 minutes</option>
        <option value="3600">Every hour</option>
        <option value="86400">Every day</option>
        <option value={Number.MAX_SAFE_INTEGER}>Pause</option>
      </CustomInput>
    </FormGroup>

    <FormGroup>
      <CustomInput
        type="radio"
        label="Official collection"
        id="officialCollectionRadio"
        checked={data.by === 'official'}
        onChange={() => setData({ ...data, by: 'official' })}
      />

      <CustomInput
        type="radio"
        label="Custom collection"
        id="customCollectionRadio"
        checked={data.by === 'collections'}
        onChange={() => setData({ ...data, by: 'collections' })}
      />

      {data.by === 'collections' && (
        <InputGroup
          type="text"
          value={data.collections}
          placeholder="Collection ID number"
          onChange={event =>
            setData({ ...data, collections: event.target.value })
          }
          label="Collection"
        />
      )}

      <CustomInput
        type="radio"
        label="Custom search"
        id="searchCollectionRadio"
        checked={data.by === 'search'}
        onChange={() => setData({ ...data, by: 'search' })}
      />

      {data.by === 'search' && (
        <>
          <Label>Tags</Label>

          <Input
            type="text"
            value={data.search}
            placeholder="Try landscapes or animals..."
            onChange={event => setData({ ...data, search: event.target.value })}
          />

          <CustomInput
            type="checkbox"
            id="onlyFeaturedImages"
            checked={data.featured}
            label="Only featured images"
            onChange={event => setData({ ...data, featured: !data.featured })}
          />
        </>
      )}
    </FormGroup>
  </div>
);

export default UnsplashSettings;
