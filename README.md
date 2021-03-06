# leyes vigentes

## Next Steps

- [x] Close date-range-picker when choosing last newValue
- [ ] Style the app!
- [x] Mock API to test requests to api based on dates
- [x] Add more data attributes to laws
- [ ] Top Filter section
  - [x] Range picker must be nullable
  - [ ] Pagination and number of laws?
  - [x] Add law types select
  - [ ] Reflect some filter values on url
  - [ ] Add number of results input
  - [ ] Read tabs from url
  - [ ] Add organisms select
- [ ] Different visualizations tabs to see current laws:
  - [ ] historic
    - [x] change current active law on click
    - [x] get active law and style it
    - [ ] Add info on hover at timeline items
    - [ ] Fetch and change date when dragging
  - [ ] list:
    - [ ] add text filter
    - [ ] display tags
    - [ ] show type as label and make it clickable
  - [ ] general statistics
    - [ ] more stats (Nº of laws, Nº days of period, Average promulgation gap, graph of types per law,)
    - [ ] show always general statistics
    - [ ] react to filters
    - [ ] Pdf export feature
- [x] Create law detail component
- [x] Add data as a prop to app state
- [ ] Define how to add help
- [x] Format date on date-range-picker
- [ ] Check date locales on picker and timeline
- [ ] Add components unit tests
- [x] Add App loader (based on Header loading.)

## Project setup

```
yarn install
```

See [Configuration Reference](https://cli.vuejs.org/config/).

### XML Parsing

Currently, some _npm_ tasks are defined to parse xml data for consuming:

```javascript
// creates json file holding laws and all its data
yarn run xml:file

// creates a reduced.json file used to list and populate main viewports
yarn run xml:lightjson

// creates separate json files for each law, using id as name (e.g. 123.json)
yarn run xml:separate
```

All these task rely on files from `data/`.

## Development

#### Compiles and hot-reloads for development

```
yarn run serve
```

#### Lints and fixes files

```
yarn run lint
```

#### Run your tests

```
yarn run test
```

#### Run your end-to-end tests

```
yarn run test:e2e
```

#### Run your unit tests

```
yarn run test:unit
```

#### Compiles and minifies for production

```
yarn run build
```
